/**
 * StudyNest - Main Application Module
 * Handles all UI rendering, event listeners, navigation, and feature logic.
 * Storage operations are delegated to storage.js.
 */

const App = (() => {
  // ─── State ────────────────────────────────────────────────────────────────────
  let currentSection = 'dashboard';
  let assignmentEditId = null;
  let timetableEditId = null;
  let goalEditId = null;
  let assignmentFilters = { subject: '', status: '', priority: '', search: '', sort: 'dueDate' };
  let notificationTimer = null;
  let activeTimetableDay = 'All'; // 'All' or specific day

  // ─── DOM Helpers ──────────────────────────────────────────────────────────────
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  function el(tag, attrs = {}, ...children) {
    const element = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === 'class') element.className = v;
      else if (k === 'html') element.innerHTML = v;
      else if (k.startsWith('data-')) element.setAttribute(k, v);
      else element[k] = v;
    });
    children.forEach(child => {
      if (typeof child === 'string') element.appendChild(document.createTextNode(child));
      else if (child) element.appendChild(child);
    });
    return element;
  }

  // ─── College Timetable Integration ──────────────────────────────────────────
  const BRANCH_DIVISIONS = {
    'CE': ['5A-CE', '5B-CE'],
    'IT': ['5A-IT', '5B-IT'],
    'CSE': ['5A-CSE', '5B-CSE', '5C-CSE'],
    'AI': ['5A-AI'],
    'CS': ['5A-CS']
  };

  function initCollegeSelection() {
    const branchSelect = $('#college-branch-select');
    const divSelect = $('#college-div-select');
    const previewBox = $('#college-div-preview');
    const previewBadge = $('#preview-badge');
    const previewText = $('#preview-text');
    const saveBtn = $('#college-save-btn');
    const form = $('#college-select-form');
    const modalClose = $('#college-modal-close');

    if (branchSelect && divSelect) {
      branchSelect.addEventListener('change', () => {
        const branch = branchSelect.value;
        divSelect.innerHTML = '<option value="">-- Choose Division --</option>';
        if (branch && BRANCH_DIVISIONS[branch]) {
          BRANCH_DIVISIONS[branch].forEach(div => {
            const opt = document.createElement('option');
            opt.value = div;
            opt.textContent = div;
            divSelect.appendChild(opt);
          });
          divSelect.disabled = false;
        } else {
          divSelect.disabled = true;
          divSelect.innerHTML = '<option value="">-- First Select Branch --</option>';
        }
        updatePreview();
      });

      divSelect.addEventListener('change', updatePreview);
    }

    function updatePreview() {
      const branch = branchSelect ? branchSelect.value : '';
      const div = divSelect ? divSelect.value : '';
      if (branch && div) {
        if (previewBox) previewBox.style.display = 'flex';
        if (previewBadge) previewBadge.textContent = div;
        if (previewText && typeof COLLEGE_TIMETABLE_DATA !== 'undefined' && COLLEGE_TIMETABLE_DATA[div]) {
          previewText.textContent = `${COLLEGE_TIMETABLE_DATA[div].branchName} — Sem 5`;
        }
        if (saveBtn) saveBtn.disabled = false;
      } else {
        if (previewBox) previewBox.style.display = 'none';
        if (saveBtn) saveBtn.disabled = true;
      }
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const branch = branchSelect.value;
        const div = divSelect.value;
        if (!branch || !div) return;

        Storage.saveCollegeSelection(branch, div);
        hideCollegeModal();
        showNotification(`Loaded College Timetable for ${div}! 🎓`);
        
        // Update subject suggestions in assignment forms
        updateSubjectSuggestionsForDivision(div);
        
        // Re-render
        if (currentSection === 'dashboard') renderDashboard();
        else if (currentSection === 'timetable') renderTimetable();
        else if (currentSection === 'settings') renderSettings();
      });
    }

    if (modalClose) {
      modalClose.addEventListener('click', hideCollegeModal);
    }

    // Settings & dashboard change division triggers
    const settingsChangeBtn = $('#settings-change-div-btn');
    if (settingsChangeBtn) {
      settingsChangeBtn.addEventListener('click', () => showCollegeModal(true));
    }

    const ttSwitchBtn = $('#tt-switch-div-btn');
    if (ttSwitchBtn) {
      ttSwitchBtn.addEventListener('click', () => showCollegeModal(true));
    }

    const dashChangeBtn = $('#dashboard-change-div-btn');
    if (dashChangeBtn) {
      dashChangeBtn.addEventListener('click', () => showCollegeModal(true));
    }
  }

  function showCollegeModal(canClose = false) {
    const overlay = $('#college-modal-overlay');
    const closeBtn = $('#college-modal-close');
    const branchSelect = $('#college-branch-select');
    const divSelect = $('#college-div-select');

    if (!overlay) return;

    if (closeBtn) {
      closeBtn.style.display = canClose ? 'inline-flex' : 'none';
    }

    const current = Storage.getCollegeSelection();
    if (current && current.branch && branchSelect) {
      branchSelect.value = current.branch;
      branchSelect.dispatchEvent(new Event('change'));
      if (current.division && divSelect) {
        divSelect.value = current.division;
        divSelect.dispatchEvent(new Event('change'));
      }
    }

    overlay.style.display = 'flex';
  }

  function hideCollegeModal() {
    const overlay = $('#college-modal-overlay');
    if (overlay) overlay.style.display = 'none';
  }

  function checkCollegeSelectionOnStart() {
    const sel = Storage.getCollegeSelection();
    if (!sel || !sel.hasSelected || !sel.division) {
      // Show onboarding modal
      showCollegeModal(false);
    } else {
      updateSubjectSuggestionsForDivision(sel.division);
    }
  }

  function updateSubjectSuggestionsForDivision(division) {
    const datalist = $('#subject-suggestions');
    if (!datalist || typeof COLLEGE_TIMETABLE_DATA === 'undefined') return;

    const divData = COLLEGE_TIMETABLE_DATA[division];
    if (!divData || !divData.days) return;

    const subjects = new Set();
    Object.values(divData.days).forEach(slotList => {
      slotList.forEach(item => {
        if (item.type !== 'free') {
          if (item.subject) subjects.add(item.subject);
          if (item.subjectCode && item.subjectCode !== 'FREE') subjects.add(item.subjectCode);
        }
      });
    });

    datalist.innerHTML = Array.from(subjects).map(s => `<option value="${escHtml(s)}"/>`).join('');
  }

  // ─── Notification System ─────────────────────────────────────────────────────
  function showNotification(message, type = 'success') {
    const container = $('#notification-container');
    if (!container) return;
    clearTimeout(notificationTimer);

    const icon = type === 'success' ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
               : type === 'error'   ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`
               : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;

    container.innerHTML = `<div class="notification notification--${type}" role="alert" aria-live="polite">${icon}<span>${message}</span></div>`;
    container.querySelector('.notification').classList.add('notification--visible');

    notificationTimer = setTimeout(() => {
      const notif = container.querySelector('.notification');
      if (notif) notif.classList.remove('notification--visible');
    }, 3500);
  }

  // ─── Confirmation Dialog ─────────────────────────────────────────────────────
  function showConfirm(message, onConfirm) {
    const overlay = $('#confirm-overlay');
    const msgEl = $('#confirm-message');
    const confirmBtn = $('#confirm-ok');
    const cancelBtn = $('#confirm-cancel');
    if (!overlay) return;

    msgEl.textContent = message;
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');

    const cleanup = () => {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      confirmBtn.removeEventListener('click', onOk);
      cancelBtn.removeEventListener('click', onCancel);
    };
    const onOk = () => { cleanup(); onConfirm(); };
    const onCancel = () => cleanup();

    confirmBtn.addEventListener('click', onOk);
    cancelBtn.addEventListener('click', onCancel);
    confirmBtn.focus();
  }

  // ─── Navigation ──────────────────────────────────────────────────────────────
  function initNavigation() {
    $$('[data-nav]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.nav);
        closeMobileMenu();
      });
    });

    const hamburger = $('#hamburger');
    const mobileMenu = $('#mobile-menu');
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        const open = mobileMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(open));
      });
    }
  }

  function navigateTo(section) {
    currentSection = section;
    $$('.section').forEach(s => s.classList.remove('active'));
    $$('[data-nav]').forEach(l => l.classList.remove('active'));

    const target = $(`#section-${section}`);
    if (target) { target.classList.add('active'); target.focus(); }

    $$(`[data-nav="${section}"]`).forEach(l => l.classList.add('active'));
    renderSection(section);
  }

  function closeMobileMenu() {
    const menu = $('#mobile-menu');
    const hamburger = $('#hamburger');
    if (menu) { menu.classList.remove('open'); }
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }

  function renderSection(section) {
    switch (section) {
      case 'dashboard':   renderDashboard(); break;
      case 'assignments': renderAssignments(); break;
      case 'timetable':   renderTimetable(); break;
      case 'goals':       renderGoals(); break;
      case 'settings':    renderSettings(); break;
    }
  }

  // ─── Dashboard ───────────────────────────────────────────────────────────────
  function renderDashboard() {
    const assignments = Storage.getAssignments();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayStr = today.toISOString().split('T')[0];

    const total = assignments.length;
    const completed = assignments.filter(a => a.status === 'completed').length;
    const pending = assignments.filter(a => a.status === 'pending').length;
    const overdue = assignments.filter(a => a.status === 'pending' && a.dueDate && a.dueDate < todayStr).length;
    const todayTasks = assignments.filter(a => a.dueDate === todayStr && a.status === 'pending');
    const upcoming = assignments
      .filter(a => a.status === 'pending' && a.dueDate > todayStr)
      .sort((a, b) => a.dueDate.localeCompare(b.dueDate))
      .slice(0, 5);

    const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

    setText('#stat-total', total);
    setText('#stat-pending', pending);
    setText('#stat-completed', completed);
    setText('#stat-overdue', overdue);
    setText('#progress-pct', `${pct}%`);

    const progressBar = $('#progress-bar');
    if (progressBar) progressBar.style.width = `${pct}%`;

    // Date display
    const dateEl = $('#dashboard-date');
    if (dateEl) {
      dateEl.textContent = new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
    }

    // Render College Classes on Dashboard
    renderDashboardClasses();

    // Today's tasks
    const todayList = $('#today-tasks-list');
    if (todayList) {
      if (todayTasks.length === 0) {
        todayList.innerHTML = `<div class="empty-state empty-state--small"><p>No tasks due today! 🎉</p></div>`;
      } else {
        todayList.innerHTML = todayTasks.map(a => `
          <div class="today-task-item priority-${a.priority}">
            <div class="today-task-dot"></div>
            <div class="today-task-info">
              <strong>${escHtml(a.title)}</strong>
              <span class="subject-tag">${escHtml(a.subject)}</span>
            </div>
            <span class="priority-badge priority-badge--${a.priority}">${capitalize(a.priority)}</span>
          </div>`).join('');
      }
    }

    // Upcoming deadlines
    const upcomingList = $('#upcoming-list');
    if (upcomingList) {
      if (upcoming.length === 0) {
        upcomingList.innerHTML = `<div class="empty-state empty-state--small"><p>No upcoming deadlines.</p></div>`;
      } else {
        upcomingList.innerHTML = upcoming.map(a => `
          <div class="upcoming-item">
            <div class="upcoming-date">
              <span class="upcoming-day">${new Date(a.dueDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
            <div class="upcoming-info">
              <strong>${escHtml(a.title)}</strong>
              <span>${escHtml(a.subject)}</span>
            </div>
            <span class="priority-badge priority-badge--${a.priority}">${capitalize(a.priority)}</span>
          </div>`).join('');
      }
    }

    // Goals progress on dashboard
    const goals = Storage.getGoals();
    const completedGoals = goals.filter(g => g.completed).length;
    const goalsPct = goals.length > 0 ? Math.round((completedGoals / goals.length) * 100) : 0;
    setText('#goals-stat', `${completedGoals}/${goals.length}`);
    const goalsBar = $('#goals-progress-bar');
    if (goalsBar) goalsBar.style.width = `${goalsPct}%`;
  }

  function renderDashboardClasses() {
    const card = $('#dashboard-classes-card');
    const container = $('#today-classes-list');
    const divBadge = $('#dashboard-div-badge');
    const dayBadge = $('#dashboard-today-day-badge');
    if (!container || !card) return;

    const sel = Storage.getCollegeSelection();
    if (!sel || !sel.hasSelected || !sel.division || typeof COLLEGE_TIMETABLE_DATA === 'undefined' || !COLLEGE_TIMETABLE_DATA[sel.division]) {
      divBadge.textContent = 'No Division';
      dayBadge.textContent = 'Setup';
      container.innerHTML = `
        <div class="empty-state empty-state--small">
          <p>Select your branch & division to see today's official classes.</p>
          <button class="btn btn--primary btn--sm mt-2" onclick="App.showCollegeModal(false)">Choose Division</button>
        </div>`;
      return;
    }

    const currentDiv = sel.division;
    const divData = COLLEGE_TIMETABLE_DATA[currentDiv];
    const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    
    divBadge.textContent = currentDiv;
    dayBadge.textContent = todayName;

    const todaySlots = divData.days[todayName] || [];
    
    // Check if Sunday or Saturday or all free
    const scheduledClasses = todaySlots.filter(s => s.type !== 'free');

    if (todayName === 'Sunday' || todaySlots.length === 0 || scheduledClasses.length === 0) {
      container.innerHTML = `
        <div class="empty-state empty-state--small" style="padding: 16px 0;">
          <p>🎉 No classes scheduled for today (${todayName})! Enjoy your free time or prepare for upcoming classes.</p>
        </div>`;
      return;
    }

    // Determine current time to highlight ongoing or next class
    const now = new Date();
    const curHour = now.getHours();
    const curMin = now.getMinutes();
    const curTimeVal = curHour * 60 + curMin;

    container.innerHTML = `<div class="today-classes-grid">` + todaySlots.map(s => {
      const isFree = s.type === 'free';
      const isLab = s.isLab;
      
      return `
        <div class="today-class-card ${isLab ? 'today-class-card--lab' : ''} ${isFree ? 'tt-period-card--free' : ''}">
          <div class="today-class-time">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${escHtml(s.time)}
          </div>
          <div class="today-class-name">
            ${escHtml(s.subject)}
          </div>
          <div class="today-class-footer">
            <span>${isLab ? '🔬 Practical / Lab' : isFree ? '☕ Free Period' : '📖 Lecture'}</span>
            ${s.room ? `<span class="tt-venue-tag">📍 Room ${escHtml(s.room)}</span>` : ''}
            ${s.faculty ? `<span style="font-weight: 600;">👨‍🏫 ${escHtml(s.faculty)}</span>` : ''}
          </div>
          ${isLab && s.batches ? `
            <div style="margin-top: 6px; font-size: 11px; display: grid; gap: 2px;">
              ${Object.entries(s.batches).map(([bName, bData]) => bData.subjectCode ? `
                <div class="tt-batch-box">
                  <span class="tt-batch-name">${bName}:</span> ${escHtml(bData.subjectCode)} ${bData.room ? `(${escHtml(bData.room)})` : ''} ${bData.faculty ? `— ${escHtml(bData.faculty)}` : ''}
                </div>` : '').join('')}
            </div>` : ''}
        </div>`;
    }).join('') + `</div>`;
  }

  // ─── Assignments ─────────────────────────────────────────────────────────────
  function renderAssignments() {
    populateSubjectFilter();
    applyAssignmentFilters();
    renderAssignmentForm();
  }

  function populateSubjectFilter() {
    const assignments = Storage.getAssignments();
    const subjects = [...new Set(assignments.map(a => a.subject).filter(Boolean))].sort();
    const filterEl = $('#filter-subject');
    if (!filterEl) return;
    const current = filterEl.value;
    filterEl.innerHTML = `<option value="">All Subjects</option>` +
      subjects.map(s => `<option value="${escHtml(s)}" ${current === s ? 'selected' : ''}>${escHtml(s)}</option>`).join('');
  }

  function applyAssignmentFilters() {
    let assignments = Storage.getAssignments();
    const today = new Date().toISOString().split('T')[0];

    if (assignmentFilters.subject) assignments = assignments.filter(a => a.subject === assignmentFilters.subject);
    if (assignmentFilters.status === 'overdue') assignments = assignments.filter(a => a.status === 'pending' && a.dueDate < today);
    else if (assignmentFilters.status) assignments = assignments.filter(a => a.status === assignmentFilters.status);
    if (assignmentFilters.priority) assignments = assignments.filter(a => a.priority === assignmentFilters.priority);
    if (assignmentFilters.search) {
      const q = assignmentFilters.search.toLowerCase();
      assignments = assignments.filter(a =>
        a.title.toLowerCase().includes(q) || a.subject.toLowerCase().includes(q) || a.notes.toLowerCase().includes(q)
      );
    }

    assignments = [...assignments].sort((a, b) => {
      if (assignmentFilters.sort === 'priority') {
        const order = { high: 0, medium: 1, low: 2 };
        return (order[a.priority] ?? 1) - (order[b.priority] ?? 1);
      }
      return (a.dueDate || '').localeCompare(b.dueDate || '');
    });

    renderAssignmentList(assignments);
  }

  function renderAssignmentList(assignments) {
    const list = $('#assignment-list');
    if (!list) return;

    if (assignments.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
          <h3>No assignments found</h3>
          <p>Add your first assignment or adjust the filters.</p>
        </div>`;
      return;
    }

    const today = new Date().toISOString().split('T')[0];

    list.innerHTML = assignments.map(a => {
      const isOverdue = a.status === 'pending' && a.dueDate && a.dueDate < today;
      const dueDateFormatted = a.dueDate
        ? new Date(a.dueDate + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : 'No due date';

      return `
      <div class="assignment-card ${a.status === 'completed' ? 'assignment-card--completed' : ''} ${isOverdue ? 'assignment-card--overdue' : ''}" data-id="${a.id}">
        <div class="assignment-card__header">
          <div class="assignment-card__checkbox">
            <button class="checkbox-btn ${a.status === 'completed' ? 'checked' : ''}"
              aria-label="${a.status === 'completed' ? 'Mark as pending' : 'Mark as complete'}"
              data-action="toggle" data-id="${a.id}">
              ${a.status === 'completed' ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
            </button>
          </div>
          <div class="assignment-card__title-block">
            <h3 class="assignment-card__title">${escHtml(a.title)}</h3>
            <div class="assignment-card__meta">
              <span class="subject-tag">${escHtml(a.subject)}</span>
              <span class="priority-badge priority-badge--${a.priority}">${capitalize(a.priority)}</span>
              ${isOverdue ? `<span class="badge badge--overdue">Overdue</span>` : ''}
            </div>
          </div>
          <div class="assignment-card__actions">
            <button class="icon-btn icon-btn--edit" aria-label="Edit assignment" data-action="edit" data-id="${a.id}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="icon-btn icon-btn--delete" aria-label="Delete assignment" data-action="delete" data-id="${a.id}">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
            </button>
          </div>
        </div>
        <div class="assignment-card__body">
          <div class="assignment-card__due">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>${dueDateFormatted}</span>
          </div>
          ${a.notes ? `<p class="assignment-card__notes">${escHtml(a.notes)}</p>` : ''}
        </div>
      </div>`;
    }).join('');

    // Attach event listeners
    list.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', handleAssignmentAction);
    });
  }

  function handleAssignmentAction(e) {
    const btn = e.currentTarget;
    const { action, id } = btn.dataset;
    if (action === 'toggle') toggleAssignment(id);
    else if (action === 'edit') startEditAssignment(id);
    else if (action === 'delete') confirmDeleteAssignment(id);
  }

  function toggleAssignment(id) {
    const assignments = Storage.getAssignments();
    const a = assignments.find(a => a.id === id);
    if (!a) return;
    Storage.updateAssignment(id, { status: a.status === 'completed' ? 'pending' : 'completed' });
    showNotification(a.status === 'pending' ? 'Assignment marked as complete! ✓' : 'Assignment marked as pending.');
    applyAssignmentFilters();
    if (currentSection === 'dashboard') renderDashboard();
  }

  function startEditAssignment(id) {
    const a = Storage.getAssignments().find(a => a.id === id);
    if (!a) return;
    assignmentEditId = id;
    renderAssignmentForm(a);
    $('#assignment-form-title').textContent = 'Edit Assignment';
    $('#assignment-form-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function confirmDeleteAssignment(id) {
    showConfirm('Are you sure you want to delete this assignment? This action cannot be undone.', () => {
      Storage.deleteAssignment(id);
      showNotification('Assignment deleted.', 'info');
      applyAssignmentFilters();
      renderDashboard();
    });
  }

  function renderAssignmentForm(data = null) {
    const form = $('#assignment-form');
    if (!form) return;

    if (!data) {
      assignmentEditId = null;
      form.reset();
      $('#assignment-form-title').textContent = 'Add Assignment';
      $('#assignment-submit-btn').textContent = 'Add Assignment';
      clearFieldErrors(form);
    } else {
      $('#assignment-title').value = data.title || '';
      $('#assignment-subject').value = data.subject || '';
      $('#assignment-duedate').value = data.dueDate || '';
      $('#assignment-priority').value = data.priority || 'medium';
      $('#assignment-notes').value = data.notes || '';
      $('#assignment-submit-btn').textContent = 'Save Changes';
    }
  }

  function initAssignmentForm() {
    const form = $('#assignment-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateAssignmentForm(form)) return;

      const data = {
        title: $('#assignment-title').value.trim(),
        subject: $('#assignment-subject').value.trim(),
        dueDate: $('#assignment-duedate').value,
        priority: $('#assignment-priority').value,
        notes: $('#assignment-notes').value.trim(),
      };

      if (assignmentEditId) {
        Storage.updateAssignment(assignmentEditId, data);
        showNotification('Assignment updated successfully! ✓');
        assignmentEditId = null;
        $('#assignment-form-title').textContent = 'Add Assignment';
        $('#assignment-submit-btn').textContent = 'Add Assignment';
      } else {
        Storage.addAssignment(data);
        showNotification('Assignment added successfully! ✓');
      }
      form.reset();
      clearFieldErrors(form);
      applyAssignmentFilters();
      populateSubjectFilter();
      renderDashboard();
    });

    const cancelBtn = $('#assignment-cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        renderAssignmentForm();
        form.reset();
        clearFieldErrors(form);
      });
    }

    // Filter and search listeners
    const filterSubject = $('#filter-subject');
    const filterStatus = $('#filter-status');
    const filterPriority = $('#filter-priority');
    const sortSelect = $('#sort-select');
    const searchInput = $('#search-input');

    if (filterSubject) filterSubject.addEventListener('change', () => { assignmentFilters.subject = filterSubject.value; applyAssignmentFilters(); });
    if (filterStatus) filterStatus.addEventListener('change', () => { assignmentFilters.status = filterStatus.value; applyAssignmentFilters(); });
    if (filterPriority) filterPriority.addEventListener('change', () => { assignmentFilters.priority = filterPriority.value; applyAssignmentFilters(); });
    if (sortSelect) sortSelect.addEventListener('change', () => { assignmentFilters.sort = sortSelect.value; applyAssignmentFilters(); });
    if (searchInput) {
      searchInput.addEventListener('input', () => { assignmentFilters.search = searchInput.value; applyAssignmentFilters(); });
    }
  }

  function validateAssignmentForm(form) {
    clearFieldErrors(form);
    let valid = true;
    const title = $('#assignment-title');
    const subject = $('#assignment-subject');
    const dueDate = $('#assignment-duedate');

    if (!title.value.trim()) { showFieldError(title, 'Assignment title is required.'); valid = false; }
    if (!subject.value.trim()) { showFieldError(subject, 'Subject is required.'); valid = false; }
    if (!dueDate.value) { showFieldError(dueDate, 'Due date is required.'); valid = false; }
    return valid;
  }

  // ─── Timetable ───────────────────────────────────────────────────────────────
  const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function renderTimetable() {
    renderCollegeTimetableGrid();
    renderTimetableForm();
  }

  function renderCollegeTimetableGrid() {
    const grid = $('#timetable-grid');
    if (!grid) return;

    const sel = Storage.getCollegeSelection();
    if (!sel || !sel.hasSelected || !sel.division || typeof COLLEGE_TIMETABLE_DATA === 'undefined' || !COLLEGE_TIMETABLE_DATA[sel.division]) {
      grid.innerHTML = `
        <div class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <h3>No Division Selected</h3>
          <p>Please select your college branch and division to view the official schedule.</p>
          <button class="btn btn--primary mt-4" onclick="App.showCollegeModal(false)">Select Division</button>
        </div>`;
      return;
    }

    const currentDiv = sel.division;
    const divData = COLLEGE_TIMETABLE_DATA[currentDiv];

    // Update banner badges
    setText('#tt-active-div-badge', currentDiv);
    setText('#tt-active-div-title', `${divData.branchName} — Semester 5`);

    // Setup day tabs
    const dayTabsContainer = $('#timetable-day-tabs');
    if (dayTabsContainer) {
      const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
      $$('.day-tab', dayTabsContainer).forEach(tab => {
        const tabDay = tab.dataset.day;
        tab.classList.toggle('active', tabDay === activeTimetableDay);
        tab.classList.toggle('today', tabDay === todayName);
        
        // Remove old and re-add click
        tab.onclick = () => {
          activeTimetableDay = tabDay;
          renderCollegeTimetableGrid();
        };
      });
    }

    const todayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const daysToRender = activeTimetableDay === 'All' ? DAYS : [activeTimetableDay];

    grid.innerHTML = `
      <div class="timetable-table-wrapper">
        <table class="timetable-table" role="table">
          <thead>
            <tr>
              ${daysToRender.map(d => `
                <th scope="col" class="tt-day-header ${d === todayName ? 'current-day-header' : ''}">
                  ${d} ${d === todayName ? '<span class="badge badge--primary" style="margin-left: 6px; font-size: 10px;">TODAY</span>' : ''}
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              ${daysToRender.map(d => {
                const slots = divData.days[d] || [];
                const isCurrentDay = d === todayName;

                return `
                  <td class="tt-day-col ${isCurrentDay ? 'current-day-col' : ''}">
                    ${slots.map(s => {
                      const isFree = s.type === 'free';
                      const isLab = s.isLab;

                      return `
                        <div class="tt-period-card ${isLab ? 'tt-period-card--lab' : ''} ${isFree ? 'tt-period-card--free' : ''}">
                          <div class="tt-period-time">
                            <span>${escHtml(s.time)}</span>
                            <span class="tt-type-pill ${isLab ? 'tt-type-pill--lab' : isFree ? 'tt-type-pill--free' : 'tt-type-pill--lecture'}">
                              ${isLab ? 'LAB' : isFree ? 'FREE' : 'LEC'}
                            </span>
                          </div>
                          
                          <div class="tt-subject-title">
                            ${escHtml(s.subject)}
                          </div>

                          ${!isFree ? `
                            <div class="tt-meta-row">
                              ${s.room ? `<span class="tt-venue-tag">📍 ${escHtml(s.room)}</span>` : '<span></span>'}
                              ${s.faculty ? `<span style="font-weight: 600;">👨‍🏫 ${escHtml(s.faculty)}</span>` : ''}
                            </div>
                          ` : ''}

                          ${isLab && s.batches ? `
                            <div style="margin-top: 6px; display: grid; gap: 3px;">
                              ${Object.entries(s.batches).map(([bName, bData]) => bData.subjectCode ? `
                                <div class="tt-batch-box">
                                  <span class="tt-batch-name">${bName}:</span> ${escHtml(bData.subjectCode)} ${bData.room ? `(${escHtml(bData.room)})` : ''} ${bData.faculty ? `— ${escHtml(bData.faculty)}` : ''}
                                </div>
                              ` : '').join('')}
                            </div>
                          ` : ''}
                        </div>
                      `;
                    }).join('')}
                  </td>
                `;
              }).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  function handleTimetableAction(e) {
    const btn = e.currentTarget;
    const { action, id } = btn.dataset;
    if (action === 'edit-tt') startEditTimetable(id);
    else if (action === 'delete-tt') confirmDeleteTimetable(id);
  }

  function startEditTimetable(id) {
    const entry = Storage.getTimetable().find(e => e.id === id);
    if (!entry) return;
    timetableEditId = id;
    populateTimetableForm(entry);
    $('#timetable-form-title').textContent = 'Edit Class';
    $('#timetable-submit-btn').textContent = 'Save Changes';
    $('#timetable-form-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function confirmDeleteTimetable(id) {
    showConfirm('Delete this class from the timetable?', () => {
      Storage.deleteTimetableEntry(id);
      showNotification('Class removed from timetable.', 'info');
      renderTimetableGrid();
    });
  }

  function populateTimetableForm(data = null) {
    const form = $('#timetable-form');
    if (!form) return;

    if (!data) {
      timetableEditId = null;
      form.reset();
      $('#timetable-form-title').textContent = 'Add Class';
      $('#timetable-submit-btn').textContent = 'Add Class';
      clearFieldErrors(form);
    } else {
      $('#tt-subject').value = data.subject || '';
      $('#tt-day').value = data.day || '';
      $('#tt-start').value = data.startTime || '';
      $('#tt-end').value = data.endTime || '';
      $('#tt-location').value = data.location || '';
    }
  }

  function renderTimetableForm() {
    if (!timetableEditId) populateTimetableForm();
  }

  function initTimetableForm() {
    const form = $('#timetable-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearFieldErrors(form);
      if (!validateTimetableForm(form)) return;

      const data = {
        subject: $('#tt-subject').value.trim(),
        day: $('#tt-day').value,
        startTime: $('#tt-start').value,
        endTime: $('#tt-end').value,
        location: $('#tt-location').value.trim(),
      };

      // Overlap check
      const entries = Storage.getTimetable().filter(e => e.id !== timetableEditId);
      const overlap = entries.find(e =>
        e.day === data.day &&
        data.startTime < e.endTime &&
        data.endTime > e.startTime
      );

      if (overlap) {
        const proceed = () => {
          saveTimetableEntry(data);
        };
        showConfirm(`This time slot overlaps with "${overlap.subject}" (${overlap.startTime}–${overlap.endTime}). Add anyway?`, proceed);
        return;
      }

      saveTimetableEntry(data);
    });

    const cancelBtn = $('#timetable-cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => { populateTimetableForm(); });
    }
  }

  function saveTimetableEntry(data) {
    if (timetableEditId) {
      Storage.updateTimetableEntry(timetableEditId, data);
      showNotification('Class updated successfully! ✓');
      timetableEditId = null;
    } else {
      Storage.addTimetableEntry(data);
      showNotification('Class added to timetable! ✓');
    }
    populateTimetableForm();
    renderTimetableGrid();
  }

  function validateTimetableForm(form) {
    let valid = true;
    const subject = $('#tt-subject');
    const day = $('#tt-day');
    const start = $('#tt-start');
    const end = $('#tt-end');

    if (!subject.value.trim()) { showFieldError(subject, 'Subject name is required.'); valid = false; }
    if (!day.value) { showFieldError(day, 'Day is required.'); valid = false; }
    if (!start.value) { showFieldError(start, 'Start time is required.'); valid = false; }
    if (!end.value) { showFieldError(end, 'End time is required.'); valid = false; }
    if (start.value && end.value && end.value <= start.value) {
      showFieldError(end, 'End time must be after start time.'); valid = false;
    }
    return valid;
  }

  // ─── Goals ───────────────────────────────────────────────────────────────────
  function renderGoals() {
    const goals = Storage.getGoals();
    const completed = goals.filter(g => g.completed).length;
    const pct = goals.length > 0 ? Math.round((completed / goals.length) * 100) : 0;

    setText('#goals-count', `${completed} of ${goals.length} completed`);
    const bar = $('#goals-progress-bar-main');
    if (bar) bar.style.width = `${pct}%`;
    setText('#goals-pct', `${pct}%`);

    renderGoalsList(goals);
    renderGoalHistory();
    if (!goalEditId) renderGoalForm();
  }

  function renderGoalsList(goals) {
    const list = $('#goals-list');
    if (!list) return;

    if (goals.length === 0) {
      list.innerHTML = `
        <div class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <h3>No goals for today</h3>
          <p>Set your study goals to stay focused and productive.</p>
        </div>`;
      return;
    }

    list.innerHTML = goals.map(g => `
      <div class="goal-item ${g.completed ? 'goal-item--completed' : ''}" data-id="${g.id}">
        <button class="checkbox-btn ${g.completed ? 'checked' : ''}"
          data-action="toggle-goal" data-id="${g.id}"
          aria-label="${g.completed ? 'Mark as incomplete' : 'Mark as complete'}">
          ${g.completed ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
        </button>
        <div class="goal-item__content">
          <div class="goal-item__title">${escHtml(g.title)}</div>
          ${g.description ? `<div class="goal-item__desc">${escHtml(g.description)}</div>` : ''}
          ${g.completedAt ? `<div class="goal-item__time">Completed at ${new Date(g.completedAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>` : ''}
        </div>
        <div class="goal-item__actions">
          <button class="icon-btn icon-btn--edit" data-action="edit-goal" data-id="${g.id}" aria-label="Edit goal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="icon-btn icon-btn--delete" data-action="delete-goal" data-id="${g.id}" aria-label="Delete goal">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </div>`).join('');

    list.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', handleGoalAction);
    });
  }

  function handleGoalAction(e) {
    const btn = e.currentTarget;
    const { action, id } = btn.dataset;
    if (action === 'toggle-goal') toggleGoal(id);
    else if (action === 'edit-goal') startEditGoal(id);
    else if (action === 'delete-goal') confirmDeleteGoal(id);
  }

  function toggleGoal(id) {
    const goals = Storage.getGoals();
    const g = goals.find(g => g.id === id);
    if (!g) return;
    Storage.updateGoal(id, { completed: !g.completed });
    renderGoals();
    renderDashboardGoalsIfVisible();
  }

  function startEditGoal(id) {
    const g = Storage.getGoals().find(g => g.id === id);
    if (!g) return;
    goalEditId = id;
    $('#goal-title').value = g.title;
    $('#goal-description').value = g.description || '';
    $('#goal-form-title').textContent = 'Edit Goal';
    $('#goal-submit-btn').textContent = 'Save Changes';
    $('#goal-form-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function confirmDeleteGoal(id) {
    showConfirm('Delete this study goal?', () => {
      Storage.deleteGoal(id);
      showNotification('Goal deleted.', 'info');
      renderGoals();
    });
  }

  function renderGoalForm() {
    if (!goalEditId) {
      const form = $('#goal-form');
      if (form) { form.reset(); clearFieldErrors(form); }
      setText('#goal-form-title', 'Add Goal');
      setText('#goal-submit-btn', 'Add Goal');
    }
  }

  function renderGoalHistory() {
    const historySection = $('#goal-history-section');
    if (!historySection) return;
    const history = Storage.getGoalHistory();
    if (history.length === 0) {
      historySection.style.display = 'none';
      return;
    }
    historySection.style.display = 'block';
    const historyList = $('#goal-history-list');
    if (!historyList) return;

    historyList.innerHTML = history.slice().reverse().map(h => {
      const completed = h.goals.filter(g => g.completed).length;
      const total = h.goals.length;
      const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
      const dateStr = new Date(h.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      return `
        <div class="history-item">
          <div class="history-item__date">${dateStr}</div>
          <div class="history-item__stats">${completed}/${total} goals — ${pct}% completion</div>
          <div class="history-progress">
            <div class="history-progress__bar" style="width: ${pct}%"></div>
          </div>
        </div>`;
    }).join('');
  }

  function initGoalForm() {
    const form = $('#goal-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      clearFieldErrors(form);
      const titleEl = $('#goal-title');
      if (!titleEl.value.trim()) { showFieldError(titleEl, 'Goal title is required.'); return; }

      const data = {
        title: titleEl.value.trim(),
        description: $('#goal-description').value.trim(),
      };

      if (goalEditId) {
        Storage.updateGoal(goalEditId, data);
        showNotification('Goal updated! ✓');
        goalEditId = null;
      } else {
        Storage.addGoal(data);
        showNotification('Goal added! ✓');
      }
      form.reset();
      clearFieldErrors(form);
      renderGoals();
      renderDashboardGoalsIfVisible();
    });

    const cancelBtn = $('#goal-cancel-btn');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        goalEditId = null;
        form.reset();
        clearFieldErrors(form);
        renderGoalForm();
      });
    }
  }

  function renderDashboardGoalsIfVisible() {
    if (currentSection === 'dashboard') renderDashboard();
  }

  // ─── Settings ────────────────────────────────────────────────────────────────
  function renderSettings() {
    const settings = Storage.getSettings();
    const themeToggle = $('#theme-toggle');
    if (themeToggle) themeToggle.checked = settings.theme === 'dark';
    const storageAvailable = $('#storage-available');
    if (storageAvailable) {
      storageAvailable.textContent = Storage.isAvailable() ? '✓ LocalStorage is available and working.' : '✗ LocalStorage is not available. Data will not persist.';
      storageAvailable.style.color = Storage.isAvailable() ? 'var(--color-success)' : 'var(--color-error)';
    }

    const sel = Storage.getCollegeSelection();
    const divDesc = $('#settings-current-div-desc');
    if (divDesc) {
      if (sel && sel.hasSelected && sel.division) {
        divDesc.innerHTML = `Active: <strong style="color: var(--color-lavender);">${sel.division}</strong> (${sel.branch}) — Gandhinagar University B.Tech Sem 5`;
      } else {
        divDesc.textContent = 'No division selected yet. Click to select your official timetable.';
      }
    }
  }

  function initSettings() {
    const themeToggle = $('#theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('change', () => {
        const theme = themeToggle.checked ? 'dark' : 'light';
        applyTheme(theme);
        Storage.updateSetting('theme', theme);
        showNotification(`Switched to ${theme} mode.`);
      });
    }

    const loadDemoBtn = $('#load-demo-btn');
    if (loadDemoBtn) {
      loadDemoBtn.addEventListener('click', () => {
        showConfirm('Load demo data? This will replace your current data with sample assignments, timetable and goals.', () => {
          Storage.loadDemoData();
          showNotification('Demo data loaded! Explore the features. 🎓');
          assignmentFilters = { subject: '', status: '', priority: '', search: '', sort: 'dueDate' };
          renderSection(currentSection);
          renderDashboard();
        });
      });
    }

    const clearDemoBtn = $('#clear-demo-btn');
    if (clearDemoBtn) {
      clearDemoBtn.addEventListener('click', () => {
        showConfirm('Clear demo data and start fresh? Your real assignments, timetable and goals will also be removed.', () => {
          Storage.clearAllData();
          Storage.setDemoMode(false);
          showNotification('All data cleared. Starting fresh! 🗑️', 'info');
          renderSection(currentSection);
          renderDashboard();
        });
      });
    }

    const clearAllBtn = $('#clear-all-btn');
    if (clearAllBtn) {
      clearAllBtn.addEventListener('click', () => {
        showConfirm('⚠️ This will permanently delete ALL your StudyNest data including assignments, timetable and goals. This cannot be undone. Are you sure?', () => {
          Storage.clearAllData();
          showNotification('All data has been cleared permanently.', 'info');
          renderSection(currentSection);
          renderDashboard();
        });
      });
    }
  }

  // ─── Theme ───────────────────────────────────────────────────────────────────
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
  }

  // ─── Quick Add (Dashboard) ────────────────────────────────────────────────────
  function initQuickAdd() {
    const btn = $('#quick-add-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        navigateTo('assignments');
        setTimeout(() => {
          $('#assignment-form-section').scrollIntoView({ behavior: 'smooth' });
        }, 100);
      });
    }
  }

  // ─── Form Helpers ─────────────────────────────────────────────────────────────
  function showFieldError(input, message) {
    input.classList.add('field-error');
    const errorEl = input.parentElement.querySelector('.field-error-msg');
    if (errorEl) { errorEl.textContent = message; errorEl.style.display = 'block'; }
    else {
      const msg = el('span', { class: 'field-error-msg', role: 'alert' }, message);
      input.parentElement.appendChild(msg);
    }
    input.setAttribute('aria-invalid', 'true');
  }

  function clearFieldErrors(form) {
    form.querySelectorAll('.field-error').forEach(el => { el.classList.remove('field-error'); el.removeAttribute('aria-invalid'); });
    form.querySelectorAll('.field-error-msg').forEach(el => { el.textContent = ''; el.style.display = 'none'; });
  }

  // ─── Utility Helpers ─────────────────────────────────────────────────────────
  function setText(selector, text) {
    const el = $(selector);
    if (el) el.textContent = String(text);
  }

  function escHtml(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
  }

  // ─── First Visit Experience ────────────────────────────────────────────────────
  function handleFirstVisit() {
    const settings = Storage.getSettings();
    const welcome = $('#welcome-banner');
    if (settings.firstVisit !== false && welcome) {
      welcome.style.display = 'flex';
      const loadDemoHere = $('#welcome-load-demo');
      const dismissBtn = $('#welcome-dismiss');

      if (loadDemoHere) {
        loadDemoHere.addEventListener('click', () => {
          Storage.loadDemoData();
          welcome.style.display = 'none';
          Storage.updateSetting('firstVisit', false);
          showNotification('Demo data loaded! Welcome to StudyNest 🎓');
          renderDashboard();
        });
      }
      if (dismissBtn) {
        dismissBtn.addEventListener('click', () => {
          welcome.style.display = 'none';
          Storage.updateSetting('firstVisit', false);
        });
      }
    } else if (welcome) {
      welcome.style.display = 'none';
    }
  }

  // ─── Storage Warning ─────────────────────────────────────────────────────────
  function checkStorageAvailability() {
    if (!Storage.isAvailable()) {
      const banner = el('div', { class: 'storage-warning', role: 'alert' },
        '⚠️ LocalStorage is not available. Data cannot be saved. Please check your browser settings.'
      );
      document.body.prepend(banner);
    }
  }

  // ─── Init ─────────────────────────────────────────────────────────────────────
  function init() {
    // Handle daily goal reset
    const today = new Date().toISOString().split('T')[0];
    Storage.handleDailyReset(today);

    // Apply saved theme
    const settings = Storage.getSettings();
    applyTheme(settings.theme || 'light');

    checkStorageAvailability();
    initCollegeSelection();
    initNavigation();
    initAssignmentForm();
    initTimetableForm();
    initGoalForm();
    initSettings();
    initQuickAdd();
    handleFirstVisit();
    checkCollegeSelectionOnStart();

    // Render initial section
    navigateTo('dashboard');
  }

  return { init, showCollegeModal, hideCollegeModal };
})();

// Boot the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
