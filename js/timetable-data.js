/**
 * Gandhinagar University (GIT) - Semester 5 Master Timetable (R2)
 * Effective Date: 31/08/2026
 * Extracted precisely from MTT_SEM_5_2026_Div_R2.pdf
 */

const COLLEGE_TIMETABLE_DATA = {
  "5A-CE": {
    "division": "5A-CE",
    "branchCode": "CE",
    "branchName": "Computer Engineering",
    "days": {
      "Monday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGODB",
          "faculty": "TDP",
          "room": "C205",
          "isLab": false,
          "raw": "TDP MongoDB C205",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "CN / ADA Lab",
          "subjectCode": "CN/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C103C"
            },
            "Batch 2": {
              "faculty": "JRP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C102A"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102B"
            }
          },
          "raw": "ADV JRP CE-F5 ADA CN ADA C103C C102A C102B"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "CN / ADA Lab",
          "subjectCode": "CN/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C103C"
            },
            "Batch 2": {
              "faculty": "JRP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C102A"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102B"
            }
          },
          "raw": "ADV JRP CE-F5 ADA CN ADA C103C C102A C102B"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "MONGODB / ADA / PDS Lab",
          "subjectCode": "MONGODB/ADA/PDS",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": ""
            },
            "Batch 2": {
              "faculty": "CE-F",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": ""
            },
            "Batch 3": {
              "faculty": "TDP",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202C"
            }
          },
          "raw": "PP CE-F TDP PDS ADA MONGODB C202C"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "MONGODB / ADA / PDS Lab",
          "subjectCode": "MONGODB/ADA/PDS",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": ""
            },
            "Batch 2": {
              "faculty": "CE-F",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": ""
            },
            "Batch 3": {
              "faculty": "TDP",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202C"
            }
          },
          "raw": "PP CE-F TDP PDS ADA MONGODB C202C"
        }
      ],
      "Tuesday": [
        {
          "type": "lecture",
          "subject": "Artificial Intelligence & Machine Learning",
          "subjectCode": "AIML",
          "faculty": "RMH",
          "room": "C205",
          "isLab": false,
          "raw": "RMH AIML C205",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "VKP",
          "room": "",
          "isLab": false,
          "raw": "VKP PDS",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "JRP",
          "room": "C206",
          "isLab": false,
          "raw": "JRP CN C206",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "ADV",
          "room": "C206",
          "isLab": false,
          "raw": "ADV ADA C206",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Wednesday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "ADV",
          "room": "",
          "isLab": false,
          "raw": "ADV ADA",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "AIML / CN Lab",
          "subjectCode": "AIML/CN",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "NJB",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C102B"
            },
            "Batch 2": {
              "faculty": "RMH",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202A"
            }
          },
          "raw": "NJB RMH CE-F6 AIML AIML CN C102B C102C C202A"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "AIML / CN Lab",
          "subjectCode": "AIML/CN",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "NJB",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C102B"
            },
            "Batch 2": {
              "faculty": "RMH",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202A"
            }
          },
          "raw": "NJB RMH CE-F6 AIML AIML CN C102B C102C C202A"
        },
        {
          "type": "lecture",
          "subject": "Artificial Intelligence & Machine Learning",
          "subjectCode": "AIML",
          "faculty": "RMH",
          "room": "",
          "isLab": false,
          "raw": "RMH AIML",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "VKP",
          "room": "",
          "isLab": false,
          "raw": "VKP PDS",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Thursday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "MONGODB / PDS Lab",
          "subjectCode": "MONGODB/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6 CN",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203A"
            }
          },
          "raw": "CE-F6 PSC PP CN MONGODB PDS C202B C202C C203A"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "MONGODB / PDS Lab",
          "subjectCode": "MONGODB/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6 CN",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203A"
            }
          },
          "raw": "CE-F6 PSC PP CN MONGODB PDS C202B C202C C203A"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "TDP",
          "room": "C205",
          "isLab": false,
          "raw": "TDP Mongo DB C205",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Artificial Intelligence & Machine Learning",
          "subjectCode": "AIML",
          "faculty": "RMH",
          "room": "C306",
          "isLab": false,
          "raw": "RMH AIML C306",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "JRP",
          "room": "",
          "isLab": false,
          "raw": "JRP CN",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "ADV",
          "room": "",
          "isLab": false,
          "raw": "ADV ADA",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Friday": [
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "VKP",
          "room": "C204",
          "isLab": false,
          "raw": "VKP PDS C204",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "JRP",
          "room": "C206",
          "isLab": false,
          "raw": "JRP CN C206",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "TDP",
          "room": "C305",
          "isLab": false,
          "raw": "TDP Mongo DB C305",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "-",
          "room": "",
          "isLab": false,
          "raw": "AEC -",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "AIML / MONGODB / PDS Lab",
          "subjectCode": "AIML/MONGODB/PDS",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "TDP",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C103C"
            },
            "Batch 2": {
              "faculty": "VKP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C102A"
            },
            "Batch 3": {
              "faculty": "RMH",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C102B"
            }
          },
          "raw": "TDP VKP RMH MONGODB PDS AIML C103C C102A C102B"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "AIML / MONGODB / PDS Lab",
          "subjectCode": "AIML/MONGODB/PDS",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "TDP",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C103C"
            },
            "Batch 2": {
              "faculty": "VKP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C102A"
            },
            "Batch 3": {
              "faculty": "RMH",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C102B"
            }
          },
          "raw": "TDP VKP RMH MONGODB PDS AIML C103C C102A C102B"
        }
      ],
      "Saturday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        }
      ]
    }
  },
  "5B-CE": {
    "division": "5B-CE",
    "branchCode": "CE",
    "branchName": "Computer Engineering",
    "days": {
      "Monday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "ADA / CN / PDS Lab",
          "subjectCode": "ADA/CN/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "VKP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "MUP",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "JRP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C203A"
            }
          },
          "raw": "VKP MUP JRP PDS ADA CN C202B C202C C203A"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "ADA / CN / PDS Lab",
          "subjectCode": "ADA/CN/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "VKP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "MUP",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "JRP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C203A"
            }
          },
          "raw": "VKP MUP JRP PDS ADA CN C202B C202C C203A"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "TDP",
          "room": "",
          "isLab": false,
          "raw": "TDP Mongo DB",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "JRP",
          "room": "C206",
          "isLab": false,
          "raw": "JRP CN C206",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Tuesday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "TDP",
          "room": "",
          "isLab": false,
          "raw": "TDP Mongo DB",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "PP",
          "room": "C304",
          "isLab": false,
          "raw": "PP PDS C304",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Artificial Intelligence & Machine Learning",
          "subjectCode": "AIML",
          "faculty": "RMH",
          "room": "",
          "isLab": false,
          "raw": "RMH AIML",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "JRP",
          "room": "C304",
          "isLab": false,
          "raw": "JRP CN C304",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "ADV",
          "room": "C304",
          "isLab": false,
          "raw": "ADV ADA C304",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Wednesday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "AIML / MONGODB / PDS Lab",
          "subjectCode": "AIML/MONGODB/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "RMH MONGODB",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203A"
            }
          },
          "raw": "RMH PSC PP AIML MONGODB PDS C202B C202C C203A"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "AIML / MONGODB / PDS Lab",
          "subjectCode": "AIML/MONGODB/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "RMH MONGODB",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203A"
            }
          },
          "raw": "RMH PSC PP AIML MONGODB PDS C202B C202C C203A"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "TDP",
          "room": "",
          "isLab": false,
          "raw": "TDP Mongo DB",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "PP",
          "room": "C306",
          "isLab": false,
          "raw": "PP PDS C306",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Thursday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "ADA / CN / PDS Lab",
          "subjectCode": "ADA/CN/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "JRP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C203B"
            },
            "Batch 2": {
              "faculty": "SMP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": ""
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102C"
            }
          },
          "raw": "JRP SMP CE-F5 CN PDS ADA C203B C102C"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "ADA / CN / PDS Lab",
          "subjectCode": "ADA/CN/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "JRP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C203B"
            },
            "Batch 2": {
              "faculty": "SMP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": ""
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102C"
            }
          },
          "raw": "JRP SMP CE-F5 CN PDS ADA C203B C102C"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "JRP",
          "room": "",
          "isLab": false,
          "raw": "JRP CN",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "PP",
          "room": "",
          "isLab": false,
          "raw": "PP PDS",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "ADV",
          "room": "C206",
          "isLab": false,
          "raw": "ADV ADA C206",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Artificial Intelligence & Machine Learning",
          "subjectCode": "AIML",
          "faculty": "RMH",
          "room": "C206",
          "isLab": false,
          "raw": "RMH AIML C206",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Friday": [
        {
          "type": "lecture",
          "subject": "Artificial Intelligence & Machine Learning",
          "subjectCode": "AIML",
          "faculty": "RMH",
          "room": "C304",
          "isLab": false,
          "raw": "RMH AIML C304",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "ADV",
          "room": "C304",
          "isLab": false,
          "raw": "ADV ADA C304",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "AIML / MONGODB / CN Lab",
          "subjectCode": "AIML/MONGODB/CN",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C102C"
            },
            "Batch 2": {
              "faculty": "JRP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "RMH",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C202B"
            }
          },
          "raw": "PSC JRP RMH MONGODB CN AIML C102C C202A C202B"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "AIML / MONGODB / CN Lab",
          "subjectCode": "AIML/MONGODB/CN",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C102C"
            },
            "Batch 2": {
              "faculty": "JRP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "RMH",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C202B"
            }
          },
          "raw": "PSC JRP RMH MONGODB CN AIML C102C C202A C202B"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "AIML / MONGODB / ADA Lab",
          "subjectCode": "AIML/MONGODB/ADA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102C"
            },
            "Batch 2": {
              "faculty": "NJB",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": ""
            }
          },
          "raw": "ADV NJB CE-F6 ADA AIML MONGODB C102C C203B"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "AIML / MONGODB / ADA Lab",
          "subjectCode": "AIML/MONGODB/ADA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102C"
            },
            "Batch 2": {
              "faculty": "NJB",
              "subject": "Artificial Intelligence & Machine Learning",
              "subjectCode": "AIML",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": ""
            }
          },
          "raw": "ADV NJB CE-F6 ADA AIML MONGODB C102C C203B"
        }
      ],
      "Saturday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        }
      ]
    }
  },
  "5A-IT": {
    "division": "5A-IT",
    "branchCode": "IT",
    "branchName": "Information Technology",
    "days": {
      "Monday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "MONGODB / DAV / CN Lab",
          "subjectCode": "MONGODB/DAV/CN",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203B"
            },
            "Batch 2": {
              "faculty": "PBP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C203C"
            }
          },
          "raw": "NJB PBP CE-F6 DAV CN MONGODB C203B C202A C203C"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "MONGODB / DAV / CN Lab",
          "subjectCode": "MONGODB/DAV/CN",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203B"
            },
            "Batch 2": {
              "faculty": "PBP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C203C"
            }
          },
          "raw": "NJB PBP CE-F6 DAV CN MONGODB C203B C202A C203C"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "PMS",
          "room": "",
          "isLab": false,
          "raw": "PMS ADA",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "PSC",
          "room": "",
          "isLab": false,
          "raw": "PSC Mongo DB",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "VPP",
          "room": "",
          "isLab": false,
          "raw": "VPP DAV",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Tuesday": [
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "PMS",
          "room": "C306",
          "isLab": false,
          "raw": "PMS ADA C306",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "VKP",
          "room": "C306",
          "isLab": false,
          "raw": "VKP PDS C306",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "MONGODB / CN Lab",
          "subjectCode": "MONGODB/CN",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "VKP PDS",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C102B"
            },
            "Batch 2": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": ""
            },
            "Batch 3": {
              "faculty": "PBP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202A"
            }
          },
          "raw": "VKP CE-F6 PBP PDS MONGODB CN C102B C202A"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "MONGODB / CN Lab",
          "subjectCode": "MONGODB/CN",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "VKP PDS",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C102B"
            },
            "Batch 2": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": ""
            },
            "Batch 3": {
              "faculty": "PBP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202A"
            }
          },
          "raw": "VKP CE-F6 PBP PDS MONGODB CN C102B C202A"
        }
      ],
      "Wednesday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "MONGODB / ADA / PDS Lab",
          "subjectCode": "MONGODB/ADA/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": ""
            },
            "Batch 2": {
              "faculty": "CE-F",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "NMK",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C203C"
            }
          },
          "raw": "CE-F6 CE-F NMK MONGODB PDS ADA C203B C203C"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "MONGODB / ADA / PDS Lab",
          "subjectCode": "MONGODB/ADA/PDS",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": ""
            },
            "Batch 2": {
              "faculty": "CE-F",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "NMK",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C203C"
            }
          },
          "raw": "CE-F6 CE-F NMK MONGODB PDS ADA C203B C203C"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "VKP",
          "room": "",
          "isLab": false,
          "raw": "VKP PDS",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "PSC",
          "room": "",
          "isLab": false,
          "raw": "PSC Mongo DB",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "PBP",
          "room": "C304",
          "isLab": false,
          "raw": "PBP CN C304",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Thursday": [
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "VPP",
          "room": "C204",
          "isLab": false,
          "raw": "VPP DAV C204",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "PMS",
          "room": "",
          "isLab": false,
          "raw": "PMS ADA",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "PBP",
          "room": "",
          "isLab": false,
          "raw": "PBP CN",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "DAV / CN / ADA Lab",
          "subjectCode": "DAV/CN/ADA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": ""
            },
            "Batch 2": {
              "faculty": "MT",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "HHR",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202A"
            }
          },
          "raw": "CE-F6 MT HHR CN ADA DAV C102C C202A"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "DAV / CN / ADA Lab",
          "subjectCode": "DAV/CN/ADA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": ""
            },
            "Batch 2": {
              "faculty": "MT",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "HHR",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202A"
            }
          },
          "raw": "CE-F6 MT HHR CN ADA DAV C102C C202A"
        }
      ],
      "Friday": [
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "PSC",
          "room": "C305",
          "isLab": false,
          "raw": "PSC Mongo DB C305",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "VKP",
          "room": "C305",
          "isLab": false,
          "raw": "VKP PDS C305",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "DAV / PDS / ADA Lab",
          "subjectCode": "DAV/PDS/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202C"
            },
            "Batch 2": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": ""
            },
            "Batch 3": {
              "faculty": "VKP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203A"
            }
          },
          "raw": "ADV CE-F5 VKP ADA DAV PDS C202C C203A"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "DAV / PDS / ADA Lab",
          "subjectCode": "DAV/PDS/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202C"
            },
            "Batch 2": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": ""
            },
            "Batch 3": {
              "faculty": "VKP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203A"
            }
          },
          "raw": "ADV CE-F5 VKP ADA DAV PDS C202C C203A"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "VPP",
          "room": "C205",
          "isLab": false,
          "raw": "VPP DAV C205",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "PBP",
          "room": "",
          "isLab": false,
          "raw": "PBP CN",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Saturday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        }
      ]
    }
  },
  "5B-IT": {
    "division": "5B-IT",
    "branchCode": "IT",
    "branchName": "Information Technology",
    "days": {
      "Monday": [
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "MT",
          "room": "C306",
          "isLab": false,
          "raw": "MT ADA C306",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "PSC",
          "room": "",
          "isLab": false,
          "raw": "PSC Mongo DB",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "PBP",
          "room": "",
          "isLab": false,
          "raw": "PBP CN",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "MONGODB / CN Lab",
          "subjectCode": "MONGODB/CN",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "MT ADA",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C203A"
            },
            "Batch 2": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": ""
            }
          },
          "raw": "MT PSC CE-F6 ADA MONGODB CN C203A C203B"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "MONGODB / CN Lab",
          "subjectCode": "MONGODB/CN",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "MT ADA",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C203A"
            },
            "Batch 2": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": ""
            }
          },
          "raw": "MT PSC CE-F6 ADA MONGODB CN C203A C203B"
        }
      ],
      "Tuesday": [
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "PSC",
          "room": "",
          "isLab": false,
          "raw": "PSC Mongo DB",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "NJB",
          "room": "",
          "isLab": false,
          "raw": "NJB DAV",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "SMP",
          "room": "C204",
          "isLab": false,
          "raw": "SMP PDS C204",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "PBP",
          "room": "",
          "isLab": false,
          "raw": "PBP CN",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "MONGODB / DAV / ADA Lab",
          "subjectCode": "MONGODB/DAV/ADA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "MT",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202C"
            }
          },
          "raw": "VPP MT PSC DAV ADA MONGODB C202B C102C C202C"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "MONGODB / DAV / ADA Lab",
          "subjectCode": "MONGODB/DAV/ADA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "MT",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "PSC",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": "C202C"
            }
          },
          "raw": "VPP MT PSC DAV ADA MONGODB C202B C102C C202C"
        }
      ],
      "Wednesday": [
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "MT",
          "room": "C306",
          "isLab": false,
          "raw": "MT ADA C306",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "NJB",
          "room": "C306",
          "isLab": false,
          "raw": "NJB DAV C306",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "DAV / CN / PDS Lab",
          "subjectCode": "DAV/CN/PDS",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "PBP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203A"
            }
          },
          "raw": "PBP PP VPP CN PDS DAV C202B C202C C203A"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "DAV / CN / PDS Lab",
          "subjectCode": "DAV/CN/PDS",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "PBP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203A"
            }
          },
          "raw": "PBP PP VPP CN PDS DAV C202B C202C C203A"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "SMP",
          "room": "",
          "isLab": false,
          "raw": "SMP PDS",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "MongoDB / NoSQL Database",
          "subjectCode": "MONGO DB",
          "faculty": "PSC",
          "room": "C204",
          "isLab": false,
          "raw": "PSC Mongo DB C204",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Thursday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "MT",
          "room": "",
          "isLab": false,
          "raw": "MT ADA",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Python for Data Science",
          "subjectCode": "PDS",
          "faculty": "SMP",
          "room": "",
          "isLab": false,
          "raw": "SMP PDS",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "ADA / CN / PDS Lab",
          "subjectCode": "ADA/CN/PDS",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PBP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C203A"
            }
          },
          "raw": "PP PBP CE-F5 PDS CN ADA C202B C202C C203A"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "ADA / CN / PDS Lab",
          "subjectCode": "ADA/CN/PDS",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PBP",
              "subject": "Computer Networks",
              "subjectCode": "CN",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C203A"
            }
          },
          "raw": "PP PBP CE-F5 PDS CN ADA C202B C202C C203A"
        }
      ],
      "Friday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "NJB",
          "room": "",
          "isLab": false,
          "raw": "NJB DAV",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "MONGODB / DAV / PDS Lab",
          "subjectCode": "MONGODB/DAV/PDS",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": ""
            },
            "Batch 2": {
              "faculty": "F2",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": ""
            },
            "Batch 3": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203C"
            }
          },
          "raw": "CE-F6 F2 PP MONGODB DAV PDS C203C"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "MONGODB / DAV / PDS Lab",
          "subjectCode": "MONGODB/DAV/PDS",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6",
              "subject": "MongoDB / NoSQL Database",
              "subjectCode": "MONGODB",
              "room": ""
            },
            "Batch 2": {
              "faculty": "F2",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": ""
            },
            "Batch 3": {
              "faculty": "PP",
              "subject": "Python for Data Science",
              "subjectCode": "PDS",
              "room": "C203C"
            }
          },
          "raw": "CE-F6 F2 PP MONGODB DAV PDS C203C"
        },
        {
          "type": "lecture",
          "subject": "Computer Networks",
          "subjectCode": "CN",
          "faculty": "PBP",
          "room": "C305",
          "isLab": false,
          "raw": "PBP CN C305",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Saturday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        }
      ]
    }
  },
  "5A-CSE": {
    "division": "5A-CSE",
    "branchCode": "CSE",
    "branchName": "Computer Science & Engineering",
    "days": {
      "Monday": [
        {
          "type": "lecture",
          "subject": "Stream Processing & Big Data Analytics",
          "subjectCode": "SPBDA",
          "faculty": "ANP",
          "room": "C205",
          "isLab": false,
          "raw": "ANP SPBDA C205",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "MT",
          "room": "C306",
          "isLab": false,
          "raw": "MT ADA C306",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "DAV / CCN / ADA Lab",
          "subjectCode": "DAV/CCN/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C102C"
            },
            "Batch 2": {
              "faculty": "CE-F5",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "SBP",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C202B"
            }
          },
          "raw": "VPP CE-F5 SBP DAV ADA CCN C102C C202A C202B"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "DAV / CCN / ADA Lab",
          "subjectCode": "DAV/CCN/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C102C"
            },
            "Batch 2": {
              "faculty": "CE-F5",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "SBP",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C202B"
            }
          },
          "raw": "VPP CE-F5 SBP DAV ADA CCN C102C C202A C202B"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "AMP",
          "room": "C305",
          "isLab": false,
          "raw": "AMP TOC C305",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "SBP",
          "room": "",
          "isLab": false,
          "raw": "SBP CCN",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Tuesday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "DAV / ADA / SPBDA Lab",
          "subjectCode": "DAV/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102B"
            },
            "Batch 2": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "SMP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C202A"
            }
          },
          "raw": "CE-F VPP SMP ADA DAV SPBDA C102B C102C C202A"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "DAV / ADA / SPBDA Lab",
          "subjectCode": "DAV/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102B"
            },
            "Batch 2": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "SMP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C202A"
            }
          },
          "raw": "CE-F VPP SMP ADA DAV SPBDA C102B C102C C202A"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "AMP",
          "room": "",
          "isLab": false,
          "raw": "AMP TOC",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "CE-F",
          "room": "",
          "isLab": false,
          "raw": "CE-F DAV",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Wednesday": [
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "AMP",
          "room": "",
          "isLab": false,
          "raw": "AMP TOC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "SBP",
          "room": "",
          "isLab": false,
          "raw": "SBP CCN",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Stream Processing & Big Data Analytics",
          "subjectCode": "SPBDA",
          "faculty": "ANP",
          "room": "",
          "isLab": false,
          "raw": "ANP SPBDA",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "MT",
          "room": "",
          "isLab": false,
          "raw": "MT ADA",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "CE-F5",
          "room": "",
          "isLab": false,
          "raw": "CE-F5 DAV",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Thursday": [
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "MT",
          "room": "C206",
          "isLab": false,
          "raw": "MT ADA C206",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "SBP",
          "room": "C206",
          "isLab": false,
          "raw": "SBP CCN C206",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "CCN / ADA / SPBDA Lab",
          "subjectCode": "CCN/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "ANP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C103C"
            },
            "Batch 2": {
              "faculty": "SBP",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C102A"
            },
            "Batch 3": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102B"
            }
          },
          "raw": "ANP SBP ADV SPBDA CCN ADA C103C C102A C102B"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "CCN / ADA / SPBDA Lab",
          "subjectCode": "CCN/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "ANP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C103C"
            },
            "Batch 2": {
              "faculty": "SBP",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C102A"
            },
            "Batch 3": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C102B"
            }
          },
          "raw": "ANP SBP ADV SPBDA CCN ADA C103C C102A C102B"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation (Tutorial)",
          "subjectCode": "TOC-T",
          "faculty": "NJB",
          "room": "",
          "isLab": false,
          "raw": "NJB TOC-T",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Stream Processing & Big Data Analytics",
          "subjectCode": "SPBDA",
          "faculty": "ANP",
          "room": "",
          "isLab": false,
          "raw": "ANP SPBDA",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Friday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "CE-F5",
          "room": "",
          "isLab": false,
          "raw": "CE-F5 DAV",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "DAV / CCN / SPBDA Lab",
          "subjectCode": "DAV/CCN/SPBDA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "MPB",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "SMP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203A"
            }
          },
          "raw": "MPB SMP CE-F5 CCN SPBDA DAV C202B C202C C203A"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "DAV / CCN / SPBDA Lab",
          "subjectCode": "DAV/CCN/SPBDA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "MPB",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "SMP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203A"
            }
          },
          "raw": "MPB SMP CE-F5 CCN SPBDA DAV C202B C202C C203A"
        }
      ],
      "Saturday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        }
      ]
    }
  },
  "5B-CSE": {
    "division": "5B-CSE",
    "branchCode": "CSE",
    "branchName": "Computer Science & Engineering",
    "days": {
      "Monday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "SBP",
          "room": "C305",
          "isLab": false,
          "raw": "SBP CCN C305",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Stream Processing & Big Data Analytics",
          "subjectCode": "SPBDA",
          "faculty": "SMP",
          "room": "",
          "isLab": false,
          "raw": "SMP SPBDA",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "NMK",
          "room": "",
          "isLab": false,
          "raw": "NMK ADA",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "CE-F5",
          "room": "",
          "isLab": false,
          "raw": "CE-F5 DAV",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "NJB",
          "room": "C205",
          "isLab": false,
          "raw": "NJB TOC C205",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Tuesday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "DAV / ADA / SPBDA Lab",
          "subjectCode": "DAV/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PMS",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C203A"
            }
          },
          "raw": "CE-F5 PMS CE-F6 DAV ADA SPBDA C202B C202C C203A"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "DAV / ADA / SPBDA Lab",
          "subjectCode": "DAV/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202B"
            },
            "Batch 2": {
              "faculty": "PMS",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C203A"
            }
          },
          "raw": "CE-F5 PMS CE-F6 DAV ADA SPBDA C202B C202C C203A"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "CE-F5",
          "room": "",
          "isLab": false,
          "raw": "CE-F5 DAV",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Stream Processing & Big Data Analytics",
          "subjectCode": "SPBDA",
          "faculty": "SMP",
          "room": "",
          "isLab": false,
          "raw": "SMP SPBDA",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "NJB",
          "room": "",
          "isLab": false,
          "raw": "NJB TOC",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Wednesday": [
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "SBP",
          "room": "",
          "isLab": false,
          "raw": "SBP CCN",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "CE-F5",
          "room": "",
          "isLab": false,
          "raw": "CE-F5 DAV",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Stream Processing & Big Data Analytics",
          "subjectCode": "SPBDA",
          "faculty": "SMP",
          "room": "",
          "isLab": false,
          "raw": "SMP SPBDA",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "NMK",
          "room": "",
          "isLab": false,
          "raw": "NMK ADA",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "DAV / CCN / ADA Lab",
          "subjectCode": "DAV/CCN/ADA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "MT",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202C"
            },
            "Batch 2": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203A"
            },
            "Batch 3": {
              "faculty": "SBP",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203B"
            }
          },
          "raw": "MT VPP SBP ADA DAV CCN C202C C203A C203B"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "DAV / CCN / ADA Lab",
          "subjectCode": "DAV/CCN/ADA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "MT",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202C"
            },
            "Batch 2": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203A"
            },
            "Batch 3": {
              "faculty": "SBP",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203B"
            }
          },
          "raw": "MT VPP SBP ADA DAV CCN C202C C203A C203B"
        }
      ],
      "Thursday": [
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "NJB",
          "room": "C304",
          "isLab": false,
          "raw": "NJB TOC C304",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "NMK",
          "room": "C304",
          "isLab": false,
          "raw": "NMK ADA C304",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "CCN / ADA Lab",
          "subjectCode": "CCN/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C102C"
            },
            "Batch 2": {
              "faculty": "CE-F2",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "MT",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202B"
            }
          },
          "raw": "CE-F6 CE-F2 MT CCN CCN ADA C102C C202A C202B"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "CCN / ADA Lab",
          "subjectCode": "CCN/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F6",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C102C"
            },
            "Batch 2": {
              "faculty": "CE-F2",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "MT",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C202B"
            }
          },
          "raw": "CE-F6 CE-F2 MT CCN CCN ADA C102C C202A C202B"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "SBP",
          "room": "C306",
          "isLab": false,
          "raw": "SBP CCN C306",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation (Tutorial)",
          "subjectCode": "TOC-T",
          "faculty": "NJB",
          "room": "C205",
          "isLab": false,
          "raw": "NJB TOC-T C205",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Friday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "DAV / SPBDA Lab",
          "subjectCode": "DAV/SPBDA",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "ANP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C102B"
            },
            "Batch 2": {
              "faculty": "SMP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202A"
            }
          },
          "raw": "ANP SMP VPP SPBDA SPBDA DAV C102B C102C C202A"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "DAV / SPBDA Lab",
          "subjectCode": "DAV/SPBDA",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "ANP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C102B"
            },
            "Batch 2": {
              "faculty": "SMP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C102C"
            },
            "Batch 3": {
              "faculty": "VPP",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202A"
            }
          },
          "raw": "ANP SMP VPP SPBDA SPBDA DAV C102B C102C C202A"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Saturday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        }
      ]
    }
  },
  "5C-CSE": {
    "division": "5C-CSE",
    "branchCode": "CSE",
    "branchName": "Computer Science & Engineering",
    "days": {
      "Monday": [
        {
          "type": "lecture",
          "subject": "Stream Processing & Big Data Analytics",
          "subjectCode": "SPBDA",
          "faculty": "SMP",
          "room": "",
          "isLab": false,
          "raw": "SMP SPBDA",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "DAV / ADA / SPBDA Lab",
          "subjectCode": "DAV/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203A"
            },
            "Batch 2": {
              "faculty": "ANP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "CE-F",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": ""
            }
          },
          "raw": "NJB ANP CE-F DAV SPBDA ADA C203A C202C"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "DAV / ADA / SPBDA Lab",
          "subjectCode": "DAV/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203A"
            },
            "Batch 2": {
              "faculty": "ANP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C202C"
            },
            "Batch 3": {
              "faculty": "CE-F",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": ""
            }
          },
          "raw": "NJB ANP CE-F DAV SPBDA ADA C203A C202C"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "NJB",
          "room": "",
          "isLab": false,
          "raw": "NJB TOC",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Tuesday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "HHR",
          "room": "",
          "isLab": false,
          "raw": "HHR DAV",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "MPB",
          "room": "C305",
          "isLab": false,
          "raw": "MPB CCN C305",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "MUP",
          "room": "C304",
          "isLab": false,
          "raw": "MUP ADA C304",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "CCN / ADA / SPBDA Lab",
          "subjectCode": "CCN/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "ANP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C203A"
            },
            "Batch 2": {
              "faculty": "PMS",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "MPB",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203C"
            }
          },
          "raw": "ANP PMS MPB SPBDA ADA CCN C203A C203B C203C"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "CCN / ADA / SPBDA Lab",
          "subjectCode": "CCN/ADA/SPBDA",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "ANP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": "C203A"
            },
            "Batch 2": {
              "faculty": "PMS",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "MPB",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203C"
            }
          },
          "raw": "ANP PMS MPB SPBDA ADA CCN C203A C203B C203C"
        }
      ],
      "Wednesday": [
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "NJB",
          "room": "C305",
          "isLab": false,
          "raw": "NJB TOC C305",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "HHR",
          "room": "C305",
          "isLab": false,
          "raw": "HHR DAV C305",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "DAV / CCN / ADA Lab",
          "subjectCode": "DAV/CCN/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C203B"
            },
            "Batch 2": {
              "faculty": "SBP",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203C"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": ""
            }
          },
          "raw": "ADV SBP CE-F5 ADA CCN DAV C203B C203C"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "DAV / CCN / ADA Lab",
          "subjectCode": "DAV/CCN/ADA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "ADV",
              "subject": "Analysis & Design of Algorithms",
              "subjectCode": "ADA",
              "room": "C203B"
            },
            "Batch 2": {
              "faculty": "SBP",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203C"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": ""
            }
          },
          "raw": "ADV SBP CE-F5 ADA CCN DAV C203B C203C"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "MPB",
          "room": "C305",
          "isLab": false,
          "raw": "MPB CCN C305",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation (Tutorial)",
          "subjectCode": "TOC-T",
          "faculty": "AMP",
          "room": "C305",
          "isLab": false,
          "raw": "AMP TOC-T C305",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Thursday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "MUP",
          "room": "",
          "isLab": false,
          "raw": "MUP ADA",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Stream Processing & Big Data Analytics",
          "subjectCode": "SPBDA",
          "faculty": "SMP",
          "room": "",
          "isLab": false,
          "raw": "SMP SPBDA",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "NBJ",
          "room": "",
          "isLab": false,
          "raw": "NBJ TOC",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "MPB",
          "room": "C305",
          "isLab": false,
          "raw": "MPB CCN C305",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Stream Processing & Big Data Analytics",
          "subjectCode": "SPBDA",
          "faculty": "SMP",
          "room": "C305",
          "isLab": false,
          "raw": "SMP SPBDA C305",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Friday": [
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "HHR",
          "room": "",
          "isLab": false,
          "raw": "HHR DAV",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "DAV / CCN / SPBDA Lab",
          "subjectCode": "DAV/CCN/SPBDA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "MPB",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C103C"
            },
            "Batch 2": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "SMP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": ""
            }
          },
          "raw": "MPB NJB SMP CCN DAV SPBDA C103C C203B"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "DAV / CCN / SPBDA Lab",
          "subjectCode": "DAV/CCN/SPBDA",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "MPB",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C103C"
            },
            "Batch 2": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "SMP",
              "subject": "Stream Processing & Big Data Analytics",
              "subjectCode": "SPBDA",
              "room": ""
            }
          },
          "raw": "MPB NJB SMP CCN DAV SPBDA C103C C203B"
        },
        {
          "type": "lecture",
          "subject": "Analysis & Design of Algorithms",
          "subjectCode": "ADA",
          "faculty": "MUP",
          "room": "",
          "isLab": false,
          "raw": "MUP ADA",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Saturday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        }
      ]
    }
  },
  "5A-AI": {
    "division": "5A-AI",
    "branchCode": "AI",
    "branchName": "Artificial Intelligence",
    "days": {
      "Monday": [
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "KG",
          "room": "C304",
          "isLab": false,
          "raw": "KG CCN C304",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "VPP",
          "room": "C304",
          "isLab": false,
          "raw": "VPP DAV C304",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Vision",
          "subjectCode": "CV",
          "faculty": "NMK",
          "room": "C306",
          "isLab": false,
          "raw": "NMK CV C306",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "NN&DL / CCN / CV Lab",
          "subjectCode": "NN&DL/CCN/CV",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F2",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": ""
            },
            "Batch 2": {
              "faculty": "NMK",
              "subject": "Computer Vision",
              "subjectCode": "CV",
              "room": ""
            },
            "Batch 3": {
              "faculty": "RHP",
              "subject": "Neural Networks & Deep Learning",
              "subjectCode": "NN&DL",
              "room": ""
            }
          },
          "raw": "CE-F2 NMK RHP CCN CV NN&DL"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "NN&DL / CCN / CV Lab",
          "subjectCode": "NN&DL/CCN/CV",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "CE-F2",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": ""
            },
            "Batch 2": {
              "faculty": "NMK",
              "subject": "Computer Vision",
              "subjectCode": "CV",
              "room": ""
            },
            "Batch 3": {
              "faculty": "RHP",
              "subject": "Neural Networks & Deep Learning",
              "subjectCode": "NN&DL",
              "room": ""
            }
          },
          "raw": "CE-F2 NMK RHP CCN CV NN&DL"
        }
      ],
      "Tuesday": [
        {
          "type": "lecture",
          "subject": "Foundations of AI, Robotics & Drones",
          "subjectCode": "FARD",
          "faculty": "HHR",
          "room": "C306",
          "isLab": false,
          "raw": "HHR FARD C306",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Neural Networks & Deep Learning",
          "subjectCode": "NN&DL",
          "faculty": "RHP",
          "room": "",
          "isLab": false,
          "raw": "RHP NN&DL",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "NN&DL / FARD / DAV Lab",
          "subjectCode": "NN&DL/FARD/DAV",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202C"
            },
            "Batch 2": {
              "faculty": "RHP",
              "subject": "Neural Networks & Deep Learning",
              "subjectCode": "NN&DL",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "HHR",
              "subject": "Foundations of AI, Robotics & Drones",
              "subjectCode": "FARD",
              "room": ""
            }
          },
          "raw": "NJB RHP HHR DAV NN&DL FARD C202C C203B"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "NN&DL / FARD / DAV Lab",
          "subjectCode": "NN&DL/FARD/DAV",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C202C"
            },
            "Batch 2": {
              "faculty": "RHP",
              "subject": "Neural Networks & Deep Learning",
              "subjectCode": "NN&DL",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "HHR",
              "subject": "Foundations of AI, Robotics & Drones",
              "subjectCode": "FARD",
              "room": ""
            }
          },
          "raw": "NJB RHP HHR DAV NN&DL FARD C202C C203B"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "KG",
          "room": "",
          "isLab": false,
          "raw": "KG CCN",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Wednesday": [
        {
          "type": "lecture",
          "subject": "Foundations of AI, Robotics & Drones",
          "subjectCode": "FARD",
          "faculty": "HHR",
          "room": "C304",
          "isLab": false,
          "raw": "HHR FARD C304",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "VPP",
          "room": "C304",
          "isLab": false,
          "raw": "VPP DAV C304",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Vision",
          "subjectCode": "CV",
          "faculty": "NMK",
          "room": "C306",
          "isLab": false,
          "raw": "NMK CV C306",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Neural Networks & Deep Learning",
          "subjectCode": "NN&DL",
          "faculty": "RHP",
          "room": "C306",
          "isLab": false,
          "raw": "RHP NN&DL C306",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "FARD / DAV / CV Lab",
          "subjectCode": "FARD/DAV/CV",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "HHR",
              "subject": "Foundations of AI, Robotics & Drones",
              "subjectCode": "FARD",
              "room": ""
            },
            "Batch 2": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": ""
            },
            "Batch 3": {
              "faculty": "NMK",
              "subject": "Computer Vision",
              "subjectCode": "CV",
              "room": ""
            }
          },
          "raw": "HHR NJB NMK FARD DAV CV"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "FARD / DAV / CV Lab",
          "subjectCode": "FARD/DAV/CV",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "HHR",
              "subject": "Foundations of AI, Robotics & Drones",
              "subjectCode": "FARD",
              "room": ""
            },
            "Batch 2": {
              "faculty": "NJB",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": ""
            },
            "Batch 3": {
              "faculty": "NMK",
              "subject": "Computer Vision",
              "subjectCode": "CV",
              "room": ""
            }
          },
          "raw": "HHR NJB NMK FARD DAV CV"
        }
      ],
      "Thursday": [
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Data Analytics & Visualization",
          "subjectCode": "DAV",
          "faculty": "NBJ",
          "room": "",
          "isLab": false,
          "raw": "NBJ DAV",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "DAV / CCN / CV Lab",
          "subjectCode": "DAV/CCN/CV",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "NMK",
              "subject": "Computer Vision",
              "subjectCode": "CV",
              "room": "C107"
            },
            "Batch 2": {
              "faculty": "KG",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203A"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203B"
            }
          },
          "raw": "NMK KG CE-F5 CV CCN DAV C107 C203A C203B"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "DAV / CCN / CV Lab",
          "subjectCode": "DAV/CCN/CV",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "NMK",
              "subject": "Computer Vision",
              "subjectCode": "CV",
              "room": "C107"
            },
            "Batch 2": {
              "faculty": "KG",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203A"
            },
            "Batch 3": {
              "faculty": "CE-F5",
              "subject": "Data Analytics & Visualization",
              "subjectCode": "DAV",
              "room": "C203B"
            }
          },
          "raw": "NMK KG CE-F5 CV CCN DAV C107 C203A C203B"
        },
        {
          "type": "lecture",
          "subject": "Computer Vision",
          "subjectCode": "CV",
          "faculty": "NMK",
          "room": "",
          "isLab": false,
          "raw": "NMK CV",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Friday": [
        {
          "type": "lecture",
          "subject": "Foundations of AI, Robotics & Drones",
          "subjectCode": "FARD",
          "faculty": "HHR",
          "room": "C306",
          "isLab": false,
          "raw": "HHR FARD C306",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "KG",
          "room": "C306",
          "isLab": false,
          "raw": "KG CCN C306",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Neural Networks & Deep Learning",
          "subjectCode": "NN&DL",
          "faculty": "RHP",
          "room": "C304",
          "isLab": false,
          "raw": "RHP NN&DL C304",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "NN&DL / FARD / CCN Lab",
          "subjectCode": "NN&DL/FARD/CCN",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "RHP",
              "subject": "Neural Networks & Deep Learning",
              "subjectCode": "NN&DL",
              "room": "C107"
            },
            "Batch 2": {
              "faculty": "HHR",
              "subject": "Foundations of AI, Robotics & Drones",
              "subjectCode": "FARD",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "CE-F2",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": ""
            }
          },
          "raw": "RHP HHR CE-F2 NN&DL FARD CCN C107 C202A"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "NN&DL / FARD / CCN Lab",
          "subjectCode": "NN&DL/FARD/CCN",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "RHP",
              "subject": "Neural Networks & Deep Learning",
              "subjectCode": "NN&DL",
              "room": "C107"
            },
            "Batch 2": {
              "faculty": "HHR",
              "subject": "Foundations of AI, Robotics & Drones",
              "subjectCode": "FARD",
              "room": "C202A"
            },
            "Batch 3": {
              "faculty": "CE-F2",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": ""
            }
          },
          "raw": "RHP HHR CE-F2 NN&DL FARD CCN C107 C202A"
        }
      ],
      "Saturday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        }
      ]
    }
  },
  "5A-CS": {
    "division": "5A-CS",
    "branchCode": "CS",
    "branchName": "Computer Science",
    "days": {
      "Monday": [
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "AMP",
          "room": "C305",
          "isLab": false,
          "raw": "AMP TOC C305",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "CE-F2",
          "room": "C305",
          "isLab": false,
          "raw": "CE-F2 CCN C305",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "lab",
          "subject": "CCN / CF Lab",
          "subjectCode": "CCN/CF",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "",
              "subject": "",
              "subjectCode": "",
              "room": ""
            },
            "Batch 2": {
              "faculty": "KG",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "MUP",
              "subject": "Cyber Forensics",
              "subjectCode": "CF",
              "room": "C107"
            }
          },
          "raw": "KG MUP CCN CF C203B C107"
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "lab",
          "subject": "CCN / CF Lab",
          "subjectCode": "CCN/CF",
          "isLab": true,
          "labSpan": "Slot 3 & Slot 4",
          "batches": {
            "Batch 1": {
              "faculty": "",
              "subject": "",
              "subjectCode": "",
              "room": ""
            },
            "Batch 2": {
              "faculty": "KG",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203B"
            },
            "Batch 3": {
              "faculty": "MUP",
              "subject": "Cyber Forensics",
              "subjectCode": "CF",
              "room": "C107"
            }
          },
          "raw": "KG MUP CCN CF C203B C107"
        },
        {
          "type": "lecture",
          "subject": "Cyber Forensics",
          "subjectCode": "CF",
          "faculty": "MUP",
          "room": "C306",
          "isLab": false,
          "raw": "MUP CF C306",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Tuesday": [
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "Cyber Forensics",
          "subjectCode": "CF",
          "faculty": "MUP",
          "room": "",
          "isLab": false,
          "raw": "MUP CF",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "CE-F2",
          "room": "",
          "isLab": false,
          "raw": "CE-F2 CCN",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "DDP SNIOT",
          "subjectCode": "DDP SNIOT",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "DDP SNIOT",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "PKP SSE",
          "subjectCode": "PKP SSE",
          "faculty": "",
          "room": "C306",
          "isLab": false,
          "raw": "PKP SSE C306",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Wednesday": [
        {
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "faculty": "",
          "room": "",
          "isLab": false,
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "PKP SSE",
          "subjectCode": "PKP SSE",
          "faculty": "",
          "room": "C305",
          "isLab": false,
          "raw": "PKP SSE C305",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Computer Communication Networks",
          "subjectCode": "CCN",
          "faculty": "CE-F2",
          "room": "C305",
          "isLab": false,
          "raw": "CE-F2 CCN C305",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "AMP",
          "room": "",
          "isLab": false,
          "raw": "AMP TOC",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "DDP SNIOT",
          "subjectCode": "DDP SNIOT",
          "faculty": "",
          "room": "C304",
          "isLab": false,
          "raw": "DDP SNIOT C304",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Thursday": [
        {
          "type": "lecture",
          "subject": "Cyber Forensics",
          "subjectCode": "CF",
          "faculty": "MUP",
          "room": "C306",
          "isLab": false,
          "raw": "MUP CF C306",
          "slot": 1,
          "time": "09:05 AM - 10:00 AM"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation",
          "subjectCode": "TOC",
          "faculty": "AMP",
          "room": "C305",
          "isLab": false,
          "raw": "AMP TOC C305",
          "slot": 2,
          "time": "10:00 AM - 10:55 AM"
        },
        {
          "type": "lecture",
          "subject": "DDP SNIOT",
          "subjectCode": "DDP SNIOT",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "DDP SNIOT",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "PKP SSE-T",
          "subjectCode": "PKP SSE-T",
          "faculty": "",
          "room": "C305",
          "isLab": false,
          "raw": "PKP SSE-T C305",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "lab",
          "subject": "CCN / CF Lab",
          "subjectCode": "CCN/CF",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "KG",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203B"
            },
            "Batch 2": {
              "faculty": "MUP",
              "subject": "Cyber Forensics",
              "subjectCode": "CF",
              "room": "C203C"
            },
            "Batch 3": {
              "faculty": "",
              "subject": "",
              "subjectCode": "",
              "room": ""
            }
          },
          "raw": "KG MUP CCN CF C203B C203C"
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "lab",
          "subject": "CCN / CF Lab",
          "subjectCode": "CCN/CF",
          "isLab": true,
          "labSpan": "Slot 5 & Slot 6",
          "batches": {
            "Batch 1": {
              "faculty": "KG",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C203B"
            },
            "Batch 2": {
              "faculty": "MUP",
              "subject": "Cyber Forensics",
              "subjectCode": "CF",
              "room": "C203C"
            },
            "Batch 3": {
              "faculty": "",
              "subject": "",
              "subjectCode": "",
              "room": ""
            }
          },
          "raw": "KG MUP CCN CF C203B C203C"
        }
      ],
      "Friday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "lab",
          "subject": "CCN / CF Lab",
          "subjectCode": "CCN/CF",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "MUP",
              "subject": "Cyber Forensics",
              "subjectCode": "CF",
              "room": "C107"
            },
            "Batch 2": {
              "faculty": "",
              "subject": "",
              "subjectCode": "",
              "room": ""
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C202C"
            }
          },
          "raw": "MUP CE-F6 CF CCN C107 C202C"
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "lab",
          "subject": "CCN / CF Lab",
          "subjectCode": "CCN/CF",
          "isLab": true,
          "labSpan": "Slot 1 & Slot 2",
          "batches": {
            "Batch 1": {
              "faculty": "MUP",
              "subject": "Cyber Forensics",
              "subjectCode": "CF",
              "room": "C107"
            },
            "Batch 2": {
              "faculty": "",
              "subject": "",
              "subjectCode": "",
              "room": ""
            },
            "Batch 3": {
              "faculty": "CE-F6",
              "subject": "Computer Communication Networks",
              "subjectCode": "CCN",
              "room": "C202C"
            }
          },
          "raw": "MUP CE-F6 CF CCN C107 C202C"
        },
        {
          "type": "lecture",
          "subject": "Ability Enhancement Course",
          "subjectCode": "AEC",
          "faculty": "",
          "room": "",
          "isLab": false,
          "raw": "AEC",
          "slot": 3,
          "time": "11:25 AM - 12:20 PM"
        },
        {
          "type": "lecture",
          "subject": "Theory of Computation (Tutorial)",
          "subjectCode": "TOC-T",
          "faculty": "AMP",
          "room": "C305",
          "isLab": false,
          "raw": "AMP TOC-T C305",
          "slot": 4,
          "time": "12:20 PM - 01:15 PM"
        },
        {
          "type": "lecture",
          "subject": "DDP SNIOT-T",
          "subjectCode": "DDP SNIOT-T",
          "faculty": "",
          "room": "C206",
          "isLab": false,
          "raw": "DDP SNIOT-T C206",
          "slot": 5,
          "time": "01:30 PM - 02:25 PM"
        },
        {
          "type": "lecture",
          "subject": "PKP SSE",
          "subjectCode": "PKP SSE",
          "faculty": "",
          "room": "C206",
          "isLab": false,
          "raw": "PKP SSE C206",
          "slot": 6,
          "time": "02:25 PM - 03:20 PM"
        }
      ],
      "Saturday": [
        {
          "slot": 1,
          "time": "09:05 AM - 10:00 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 2,
          "time": "10:00 AM - 10:55 AM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 3,
          "time": "11:25 AM - 12:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 4,
          "time": "12:20 PM - 01:15 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 5,
          "time": "01:30 PM - 02:25 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        },
        {
          "slot": 6,
          "time": "02:25 PM - 03:20 PM",
          "type": "free",
          "subject": "Free Period",
          "subjectCode": "FREE",
          "isLab": false,
          "faculty": "",
          "room": ""
        }
      ]
    }
  }
};

if (typeof module !== 'undefined') {
  module.exports = COLLEGE_TIMETABLE_DATA;
}
