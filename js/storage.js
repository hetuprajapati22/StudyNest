/**
 * StudyNest - Storage Module
 * Handles all LocalStorage operations, data validation, and persistence.
 * UI logic is kept separate from storage logic intentionally.
 */

const Storage = (() => {
  const KEYS = {
    ASSIGNMENTS: 'studynest_assignments',
    TIMETABLE: 'studynest_timetable',
    GOALS: 'studynest_goals',
    GOAL_HISTORY: 'studynest_goal_history',
    SETTINGS: 'studynest_settings',
    LAST_DATE: 'studynest_last_date',
    IS_DEMO: 'studynest_is_demo',
    COLLEGE_SELECTION: 'studynest_college_selection',
  };

  /** Check if LocalStorage is available */
  function isAvailable() {
    try {
      const test = '__studynest_test__';
      localStorage.setItem(test, '1');
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  /** Safe read with JSON parse */
  function read(key, fallback = null) {
    if (!isAvailable()) return fallback;
    try {
      const raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      return JSON.parse(raw);
    } catch (e) {
      console.warn(`[StudyNest Storage] Failed to parse key "${key}":`, e);
      return fallback;
    }
  }

  /** Safe write with JSON stringify */
  function write(key, value) {
    if (!isAvailable()) return false;
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error(`[StudyNest Storage] Failed to write key "${key}":`, e);
      return false;
    }
  }

  /** Remove a key */
  function remove(key) {
    if (!isAvailable()) return;
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.warn(`[StudyNest Storage] Failed to remove key "${key}":`, e);
    }
  }

  // ─── Assignments ────────────────────────────────────────────────────────────

  function getAssignments() {
    const data = read(KEYS.ASSIGNMENTS, []);
    return Array.isArray(data) ? data : [];
  }

  function saveAssignments(assignments) {
    return write(KEYS.ASSIGNMENTS, assignments);
  }

  function addAssignment(assignment) {
    const assignments = getAssignments();
    const newAssignment = {
      id: generateId(),
      title: String(assignment.title || '').trim(),
      subject: String(assignment.subject || '').trim(),
      dueDate: assignment.dueDate || '',
      priority: ['low', 'medium', 'high'].includes(assignment.priority) ? assignment.priority : 'medium',
      notes: String(assignment.notes || '').trim(),
      status: 'pending',
      createdAt: new Date().toISOString(),
      completedAt: null,
    };
    assignments.push(newAssignment);
    saveAssignments(assignments);
    return newAssignment;
  }

  function updateAssignment(id, updates) {
    const assignments = getAssignments();
    const idx = assignments.findIndex(a => a.id === id);
    if (idx === -1) return null;
    const allowed = ['title', 'subject', 'dueDate', 'priority', 'notes', 'status', 'completedAt'];
    allowed.forEach(key => {
      if (updates[key] !== undefined) assignments[idx][key] = updates[key];
    });
    assignments[idx].updatedAt = new Date().toISOString();
    if (updates.status === 'completed' && !assignments[idx].completedAt) {
      assignments[idx].completedAt = new Date().toISOString();
    }
    if (updates.status === 'pending') {
      assignments[idx].completedAt = null;
    }
    saveAssignments(assignments);
    return assignments[idx];
  }

  function deleteAssignment(id) {
    const assignments = getAssignments().filter(a => a.id !== id);
    saveAssignments(assignments);
  }

  // ─── Timetable ───────────────────────────────────────────────────────────────

  function getTimetable() {
    const data = read(KEYS.TIMETABLE, []);
    return Array.isArray(data) ? data : [];
  }

  function saveTimetable(entries) {
    return write(KEYS.TIMETABLE, entries);
  }

  function addTimetableEntry(entry) {
    const entries = getTimetable();
    const newEntry = {
      id: generateId(),
      subject: String(entry.subject || '').trim(),
      day: String(entry.day || '').trim(),
      startTime: String(entry.startTime || '').trim(),
      endTime: String(entry.endTime || '').trim(),
      location: String(entry.location || '').trim(),
      color: entry.color || getRandomColor(),
      createdAt: new Date().toISOString(),
    };
    entries.push(newEntry);
    saveTimetable(entries);
    return newEntry;
  }

  function updateTimetableEntry(id, updates) {
    const entries = getTimetable();
    const idx = entries.findIndex(e => e.id === id);
    if (idx === -1) return null;
    const allowed = ['subject', 'day', 'startTime', 'endTime', 'location', 'color'];
    allowed.forEach(key => {
      if (updates[key] !== undefined) entries[idx][key] = updates[key];
    });
    saveTimetable(entries);
    return entries[idx];
  }

  function deleteTimetableEntry(id) {
    const entries = getTimetable().filter(e => e.id !== id);
    saveTimetable(entries);
  }

  // ─── Goals ───────────────────────────────────────────────────────────────────

  function getGoals() {
    const data = read(KEYS.GOALS, []);
    return Array.isArray(data) ? data : [];
  }

  function saveGoals(goals) {
    return write(KEYS.GOALS, goals);
  }

  function getGoalHistory() {
    const data = read(KEYS.GOAL_HISTORY, []);
    return Array.isArray(data) ? data : [];
  }

  function saveGoalHistory(history) {
    return write(KEYS.GOAL_HISTORY, history);
  }

  /**
   * Archives yesterday's incomplete goals into history when the date changes.
   * Does NOT silently delete incomplete goals.
   */
  function handleDailyReset(todayStr) {
    const lastDate = read(KEYS.LAST_DATE, null);
    if (lastDate === todayStr) return; // Same day, no reset needed

    const goals = getGoals();
    if (lastDate && goals.length > 0) {
      // Archive incomplete goals from the previous date
      const history = getGoalHistory();
      const incomplete = goals.filter(g => !g.completed);
      if (incomplete.length > 0) {
        history.push({
          date: lastDate,
          goals: goals.map(g => ({ ...g })),
          archivedAt: new Date().toISOString(),
        });
        // Keep history for last 30 days
        const trimmed = history.slice(-30);
        saveGoalHistory(trimmed);
      }
      // Reset completion status for goals that carry over
      const carried = goals.map(g => ({ ...g, completed: false, completedAt: null }));
      saveGoals(carried);
    }

    write(KEYS.LAST_DATE, todayStr);
  }

  function addGoal(goal) {
    const goals = getGoals();
    const newGoal = {
      id: generateId(),
      title: String(goal.title || '').trim(),
      description: String(goal.description || '').trim(),
      completed: false,
      completedAt: null,
      createdAt: new Date().toISOString(),
    };
    goals.push(newGoal);
    saveGoals(goals);
    return newGoal;
  }

  function updateGoal(id, updates) {
    const goals = getGoals();
    const idx = goals.findIndex(g => g.id === id);
    if (idx === -1) return null;
    const allowed = ['title', 'description', 'completed', 'completedAt'];
    allowed.forEach(key => {
      if (updates[key] !== undefined) goals[idx][key] = updates[key];
    });
    if (updates.completed === true && !goals[idx].completedAt) {
      goals[idx].completedAt = new Date().toISOString();
    }
    if (updates.completed === false) {
      goals[idx].completedAt = null;
    }
    saveGoals(goals);
    return goals[idx];
  }

  function deleteGoal(id) {
    const goals = getGoals().filter(g => g.id !== id);
    saveGoals(goals);
  }

  // ─── Settings ────────────────────────────────────────────────────────────────

  function getSettings() {
    return read(KEYS.SETTINGS, {
      theme: 'light',
      firstVisit: true,
    });
  }

  function saveSettings(settings) {
    return write(KEYS.SETTINGS, settings);
  }

  function updateSetting(key, value) {
    const settings = getSettings();
    settings[key] = value;
    return saveSettings(settings);
  }

  // ─── College Timetable Selection ─────────────────────────────────────────────

  function getCollegeSelection() {
    return read(KEYS.COLLEGE_SELECTION, {
      branch: '',
      division: '',
      hasSelected: false,
    });
  }

  function saveCollegeSelection(branch, division) {
    const data = {
      branch: String(branch || '').trim(),
      division: String(division || '').trim(),
      hasSelected: Boolean(branch && division),
      updatedAt: new Date().toISOString(),
    };
    write(KEYS.COLLEGE_SELECTION, data);
    return data;
  }

  // ─── Demo Data ────────────────────────────────────────────────────────────────

  function isDemoMode() {
    return read(KEYS.IS_DEMO, false);
  }

  function setDemoMode(val) {
    write(KEYS.IS_DEMO, val);
  }

  function loadDemoData() {
    const today = new Date();
    const fmt = (d) => d.toISOString().split('T')[0];
    const addDays = (d, n) => { const r = new Date(d); r.setDate(r.getDate() + n); return r; };

    const demoAssignments = [
      { title: 'Calculus Problem Set 3', subject: 'Mathematics', dueDate: fmt(addDays(today, 2)), priority: 'high', notes: 'Chapter 5: Integration by parts', status: 'pending' },
      { title: 'Essay: Industrial Revolution', subject: 'History', dueDate: fmt(addDays(today, 5)), priority: 'medium', notes: 'Minimum 1500 words. Reference list required.', status: 'pending' },
      { title: 'Lab Report: Titration', subject: 'Chemistry', dueDate: fmt(addDays(today, -1)), priority: 'high', notes: 'Include graphs and error analysis', status: 'pending' },
      { title: 'Book Review: 1984', subject: 'English Literature', dueDate: fmt(addDays(today, 10)), priority: 'low', notes: 'Focus on themes of surveillance', status: 'pending' },
      { title: 'Programming Assignment 2', subject: 'Computer Science', dueDate: fmt(addDays(today, 1)), priority: 'high', notes: 'Implement binary search tree', status: 'pending' },
      { title: 'Physics Lab Questions', subject: 'Physics', dueDate: fmt(addDays(today, -3)), priority: 'medium', notes: '', status: 'completed' },
      { title: 'Spanish Vocabulary Quiz Prep', subject: 'Spanish', dueDate: fmt(addDays(today, 3)), priority: 'low', notes: 'Chapters 8-10', status: 'pending' },
    ];

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const demoTimetable = [
      { subject: 'Mathematics', day: 'Monday', startTime: '09:00', endTime: '10:00', location: 'Room 201', color: '#7C6FCD' },
      { subject: 'English Literature', day: 'Monday', startTime: '11:00', endTime: '12:00', location: 'Room 105', color: '#6BAE9E' },
      { subject: 'Computer Science', day: 'Tuesday', startTime: '09:00', endTime: '11:00', location: 'Lab 3', color: '#E8927C' },
      { subject: 'History', day: 'Tuesday', startTime: '14:00', endTime: '15:00', location: 'Room 301', color: '#D4A373' },
      { subject: 'Chemistry', day: 'Wednesday', startTime: '09:00', endTime: '11:00', location: 'Science Lab', color: '#85C1E9' },
      { subject: 'Physics', day: 'Wednesday', startTime: '13:00', endTime: '14:00', location: 'Physics Lab', color: '#A8D8EA' },
      { subject: 'Mathematics', day: 'Thursday', startTime: '10:00', endTime: '11:00', location: 'Room 201', color: '#7C6FCD' },
      { subject: 'Spanish', day: 'Thursday', startTime: '14:00', endTime: '15:00', location: 'Room 112', color: '#F7DC6F' },
      { subject: 'Computer Science', day: 'Friday', startTime: '09:00', endTime: '10:00', location: 'Lab 3', color: '#E8927C' },
      { subject: 'English Literature', day: 'Friday', startTime: '11:00', endTime: '12:00', location: 'Room 105', color: '#6BAE9E' },
    ];

    const demoGoals = [
      { title: 'Study for Calculus test', description: 'Focus on integration techniques and practice 10 problems', completed: false },
      { title: 'Read Chapter 6 - History', description: 'Take notes on key dates and events', completed: true },
      { title: 'Complete CS assignment draft', description: 'Write the main BST insert and delete methods', completed: false },
    ];

    // Clear existing and load demo
    saveAssignments(demoAssignments.map(a => {
      const id = generateId();
      return { ...a, id, createdAt: new Date().toISOString(), completedAt: a.status === 'completed' ? new Date().toISOString() : null };
    }));

    saveTimetable(demoTimetable.map(e => ({ ...e, id: generateId(), createdAt: new Date().toISOString() })));

    saveGoals(demoGoals.map(g => ({
      ...g,
      id: generateId(),
      createdAt: new Date().toISOString(),
      completedAt: g.completed ? new Date().toISOString() : null,
    })));

    setDemoMode(true);
    write(KEYS.LAST_DATE, fmt(today));
  }

  /** Clear all StudyNest data from localStorage */
  function clearAllData() {
    Object.values(KEYS).forEach(key => remove(key));
  }

  // ─── Utilities ────────────────────────────────────────────────────────────────

  function generateId() {
    return `sn_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  }

  const COLORS = ['#7C6FCD', '#6BAE9E', '#E8927C', '#D4A373', '#85C1E9', '#F7DC6F', '#A29BFE', '#FD79A8'];
  let colorIdx = 0;
  function getRandomColor() {
    return COLORS[colorIdx++ % COLORS.length];
  }

  // Public API
  return {
    isAvailable,
    // Assignments
    getAssignments, saveAssignments, addAssignment, updateAssignment, deleteAssignment,
    // Timetable
    getTimetable, saveTimetable, addTimetableEntry, updateTimetableEntry, deleteTimetableEntry,
    // Goals
    getGoals, saveGoals, addGoal, updateGoal, deleteGoal,
    getGoalHistory, handleDailyReset,
    // Settings
    getSettings, saveSettings, updateSetting,
    // College Timetable Selection
    getCollegeSelection, saveCollegeSelection,
    // Demo / Clear
    isDemoMode, setDemoMode, loadDemoData, clearAllData,
    // Utils
    generateId,
    KEYS,
  };
})();
