// =============================================================================
// Welsh Government Education Data Service — Central Data File
// Version 2 — generated 2026-06-26
//
// All data is fictional and for prototype purposes only.
// School names, URNs, postcodes, and figures bear no relation to any real
// institution. Postcodes follow a valid Welsh format but do not correspond
// to real addresses.
//
// Structure:
//   WGData.wales             National averages
//   WGData.las               Local authority aggregates
//   WGData.schools           Individual school objects (keyed by slug)
//
// Each school object contains:
//   Identifiers:   urn, name, la, phase, language, type, postcode, lat, lng
//   Contact:       phone, email, website, estynUrl
//   Size/finance:  totalPupils, teacherFTE, ptr, budgetPerPupil, financialReserves
//   Demographics:  fsm3yr, bame, eal
//   attendance:    4 measures x 2 time ranges x 4 comparators + group breakdowns
//   pupils:        byYear (secondary only), fsm trend, aln breakdown, eal, bame
//   entries:       7 breakdowns x 2 time ranges — secondary only in current scope
//   outcomes:      8 grade bands x 7 breakdowns — secondary only in current scope
//
// Contextual comparator is pre-calculated as the mean of schools sharing
// the same phase, FSM band (low/mid/high), and language medium.
//
// To add a new school: add a row to generate_data_v2.js and re-run with Node.
// To add a new field: add to buildSchool() in the generator and re-run.
// =============================================================================

var WGData = {

  wales: {
  "attendance": {
    "overall": {
      "1": {
        "value": 91.8
      },
      "5": {
        "labels": [
          "2020-21",
          "2021-22",
          "2022-23",
          "2023-24",
          "2024-25"
        ],
        "values": [
          87.8,
          88.8,
          89.8,
          90.8,
          91.8
        ]
      }
    },
    "pa": {
      "1": {
        "value": 17.1
      },
      "5": {
        "labels": [
          "2020-21",
          "2021-22",
          "2022-23",
          "2023-24",
          "2024-25"
        ],
        "values": [
          20.3,
          19.5,
          18.7,
          17.9,
          17.1
        ]
      }
    },
    "auth": {
      "1": {
        "value": 4.1
      },
      "5": {
        "labels": [
          "2020-21",
          "2021-22",
          "2022-23",
          "2023-24",
          "2024-25"
        ],
        "values": [
          3.5,
          3.6,
          3.8,
          4,
          4.1
        ]
      }
    },
    "unauth": {
      "1": {
        "value": 2.1
      },
      "5": {
        "labels": [
          "2020-21",
          "2021-22",
          "2022-23",
          "2023-24",
          "2024-25"
        ],
        "values": [
          1.3,
          1.5,
          1.7,
          1.9,
          2.1
        ]
      }
    }
  },
  "fsm": 21.4,
  "pupils": 420000
},

  las: {
  "rct": {
    "name": "Rhondda Cynon Taf",
    "code": "rct",
    "schools": [
      "abercastell",
      "blaengwawr",
      "treorchy",
      "mountain-ash",
      "aberdare",
      "ferndale",
      "llanhari",
      "cwmtaff",
      "hirwaun",
      "penrhys"
    ],
    "attendance": {
      "overall": {
        "1": {
          "value": 90.4,
          "wales": 91.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ]
        }
      },
      "pa": {
        "1": {
          "value": 21.7,
          "wales": 17.1
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ]
        }
      }
    },
    "fsm": 25.5,
    "totalPupils": 7446,
    "phaseBreakdown": {
      "secondary": 7,
      "primary": 2,
      "middle": 0,
      "special": 1
    }
  },
  "caerphilly": {
    "name": "Caerphilly",
    "code": "caerphilly",
    "schools": [
      "st-cenydd",
      "lewis",
      "blackwood",
      "risca",
      "ystrad-mynach",
      "bedwas"
    ],
    "attendance": {
      "overall": {
        "1": {
          "value": 91.7,
          "wales": 91.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "la": [
            86.9,
            88.1,
            89.3,
            90.5,
            91.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ]
        }
      },
      "pa": {
        "1": {
          "value": 19.4,
          "wales": 17.1
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "la": [
            23.4,
            22.4,
            21.4,
            20.4,
            19.4
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ]
        }
      }
    },
    "fsm": 20,
    "totalPupils": 6058,
    "phaseBreakdown": {
      "secondary": 5,
      "primary": 1,
      "middle": 0,
      "special": 0
    }
  },
  "merthyr": {
    "name": "Merthyr Tydfil",
    "code": "merthyr",
    "schools": [
      "cyfarthfa",
      "pen-y-dre",
      "afon-taf",
      "bishop-hannington",
      "vaynor"
    ],
    "attendance": {
      "overall": {
        "1": {
          "value": 87.7,
          "wales": 91.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "la": [
            82.9,
            84.1,
            85.3,
            86.5,
            87.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ]
        }
      },
      "pa": {
        "1": {
          "value": 24.9,
          "wales": 17.1
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "la": [
            28.9,
            27.9,
            26.9,
            25.9,
            24.9
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ]
        }
      }
    },
    "fsm": 35.9,
    "totalPupils": 3396,
    "phaseBreakdown": {
      "secondary": 4,
      "primary": 1,
      "middle": 0,
      "special": 0
    }
  }
},

  schools: {
  "abercastell": {
    "urn": "WG100001",
    "name": "Ysgol Gyfun Abercastell",
    "la": "rct",
    "phase": "Secondary",
    "language": "Welsh medium",
    "type": "Community school",
    "postcode": "CF43 9AA",
    "lat": 51.648,
    "lng": -3.231,
    "phone": "01443 100007",
    "email": "abercastell@rct.gov.uk",
    "website": "abercastell.cymru",
    "estynUrl": "#",
    "totalPupils": 1124,
    "teacherFTE": 74.2,
    "ptr": 15.1,
    "budgetPerPupil": 6175,
    "financialReserves": 142000,
    "fsm3yr": 16.3,
    "bame": 4.2,
    "eal": 1.8,
    "attendance": {
      "overall": {
        "1": {
          "school": 93.4,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 94
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            87.8,
            89.2,
            90.6,
            92,
            93.4
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            89.6,
            90.7,
            91.8,
            92.9,
            94
          ]
        }
      },
      "pa": {
        "1": {
          "school": 18.2,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 16.1
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            23,
            21.8,
            20.6,
            19.4,
            18.2
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            20.1,
            19.1,
            18.1,
            17.1,
            16.1
          ]
        }
      },
      "auth": {
        "1": {
          "school": 3.8,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 3.7
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.2,
            3.4,
            3.5,
            3.7,
            3.8
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.1,
            3.3,
            3.4,
            3.6,
            3.7
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 1.6,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 1.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            0.4,
            0.7,
            1,
            1.3,
            1.6
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            0.3,
            0.6,
            0.8,
            1.1,
            1.4
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 85.2,
          "auth": 5,
          "unauth": 3.4,
          "pa": 28.4,
          "ctx": 85.6
        },
        "nonfsm": {
          "attendance": 97.2,
          "auth": 3.2,
          "unauth": 0.8,
          "pa": 14,
          "ctx": 97.6
        },
        "female": {
          "attendance": 94.8,
          "auth": 3.4,
          "unauth": 1,
          "pa": 15.4,
          "ctx": 95.2
        },
        "male": {
          "attendance": 92.2,
          "auth": 4.2,
          "unauth": 2.2,
          "pa": 21,
          "ctx": 92.8
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 107,
          "male": 99
        },
        "year8": {
          "female": 110,
          "male": 106
        },
        "year9": {
          "female": 110,
          "male": 118
        },
        "year10": {
          "female": 120,
          "male": 118
        },
        "year11": {
          "female": 127,
          "male": 119
        }
      },
      "fsm": {
        "2022-23": 15.7,
        "2023-24": 16,
        "2024-25": 16.3
      },
      "aln": {
        "schoolAction": {
          "2022-23": 4.6,
          "2023-24": 4.9,
          "2024-25": 5.2
        },
        "schoolActionPlus": {
          "2022-23": 2,
          "2023-24": 2.1,
          "2024-25": 2.3
        },
        "statement": {
          "2022-23": 1,
          "2023-24": 1.1,
          "2024-25": 1.1
        }
      },
      "eal": 1.8,
      "bame": 4.2
    },
    "entries": {
      "all": {
        "1": {
          "school": 66,
          "la": 57,
          "wales": 62,
          "ctx": 68
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            61,
            63,
            66
          ],
          "la": [
            52,
            55,
            57
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            63,
            65,
            68
          ]
        }
      },
      "female": {
        "1": {
          "school": 71,
          "la": 61,
          "wales": 66,
          "ctx": 73
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            65,
            68,
            71
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            67,
            70,
            73
          ]
        }
      },
      "male": {
        "1": {
          "school": 61,
          "la": 53,
          "wales": 58,
          "ctx": 63
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            56,
            59,
            61
          ],
          "la": [
            48,
            51,
            53
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            58,
            61,
            63
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 49,
          "la": 42,
          "wales": 46,
          "ctx": 50
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            45,
            47,
            49
          ],
          "la": [
            37,
            39,
            42
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            44,
            47,
            50
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 74,
          "la": 65,
          "wales": 70,
          "ctx": 78
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            68,
            71,
            74
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            72,
            75,
            78
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            71,
            61
          ],
          "la": [
            61,
            53
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            73,
            63
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              65,
              68,
              71
            ],
            "b": [
              56,
              59,
              61
            ]
          },
          "la": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              67,
              70,
              73
            ],
            "b": [
              58,
              61,
              63
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            49,
            74
          ],
          "la": [
            42,
            65
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            50,
            78
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              45,
              47,
              49
            ],
            "b": [
              68,
              71,
              74
            ]
          },
          "la": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              44,
              47,
              50
            ],
            "b": [
              72,
              75,
              78
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 7,
            "la": 6,
            "wales": 7,
            "ctx": 7
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              6,
              7,
              7
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              6,
              7,
              7
            ]
          }
        },
        "female": {
          "1": {
            "school": 8,
            "la": 6,
            "wales": 8,
            "ctx": 8
          }
        },
        "male": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 4,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 9,
            "la": 7,
            "wales": 9,
            "ctx": 9
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              8,
              6
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              8,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              4,
              9
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              9
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 18,
            "la": 15,
            "wales": 18,
            "ctx": 19
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              16,
              17,
              18
            ],
            "la": [
              13,
              14,
              15
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              17,
              18,
              19
            ]
          }
        },
        "female": {
          "1": {
            "school": 19,
            "la": 16,
            "wales": 19,
            "ctx": 21
          }
        },
        "male": {
          "1": {
            "school": 17,
            "la": 14,
            "wales": 17,
            "ctx": 17
          }
        },
        "fsm": {
          "1": {
            "school": 11,
            "la": 9,
            "wales": 11,
            "ctx": 12
          }
        },
        "nonfsm": {
          "1": {
            "school": 22,
            "la": 18,
            "wales": 22,
            "ctx": 23
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              19,
              17
            ],
            "la": [
              16,
              14
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              21,
              17
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              11,
              22
            ],
            "la": [
              9,
              18
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              12,
              23
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 30,
            "la": 26,
            "wales": 34,
            "ctx": 31
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              26,
              28,
              30
            ],
            "la": [
              23,
              24,
              26
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              27,
              29,
              31
            ]
          }
        },
        "female": {
          "1": {
            "school": 32,
            "la": 28,
            "wales": 37,
            "ctx": 33
          }
        },
        "male": {
          "1": {
            "school": 28,
            "la": 24,
            "wales": 31,
            "ctx": 29
          }
        },
        "fsm": {
          "1": {
            "school": 19,
            "la": 16,
            "wales": 21,
            "ctx": 19
          }
        },
        "nonfsm": {
          "1": {
            "school": 37,
            "la": 32,
            "wales": 41,
            "ctx": 38
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              32,
              28
            ],
            "la": [
              28,
              24
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              33,
              29
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              19,
              37
            ],
            "la": [
              16,
              32
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              19,
              38
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 40,
            "la": 35,
            "wales": 47,
            "ctx": 42
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              35,
              38,
              40
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              37,
              39,
              42
            ]
          }
        },
        "female": {
          "1": {
            "school": 43,
            "la": 38,
            "wales": 51,
            "ctx": 45
          }
        },
        "male": {
          "1": {
            "school": 37,
            "la": 32,
            "wales": 43,
            "ctx": 39
          }
        },
        "fsm": {
          "1": {
            "school": 25,
            "la": 22,
            "wales": 29,
            "ctx": 26
          }
        },
        "nonfsm": {
          "1": {
            "school": 49,
            "la": 43,
            "wales": 57,
            "ctx": 51
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              43,
              37
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              45,
              39
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              25,
              49
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              26,
              51
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 48,
            "la": 41,
            "wales": 61,
            "ctx": 50
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              42,
              45,
              48
            ],
            "la": [
              36,
              39,
              41
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              44,
              47,
              50
            ]
          }
        },
        "female": {
          "1": {
            "school": 52,
            "la": 44,
            "wales": 66,
            "ctx": 54
          }
        },
        "male": {
          "1": {
            "school": 44,
            "la": 38,
            "wales": 56,
            "ctx": 46
          }
        },
        "fsm": {
          "1": {
            "school": 30,
            "la": 25,
            "wales": 38,
            "ctx": 31
          }
        },
        "nonfsm": {
          "1": {
            "school": 59,
            "la": 50,
            "wales": 74,
            "ctx": 61
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              52,
              44
            ],
            "la": [
              44,
              38
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              54,
              46
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              30,
              59
            ],
            "la": [
              25,
              50
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              31,
              61
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 54,
            "la": 46,
            "wales": 71,
            "ctx": 56
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              48,
              51,
              54
            ],
            "la": [
              40,
              43,
              46
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              49,
              53,
              56
            ]
          }
        },
        "female": {
          "1": {
            "school": 58,
            "la": 50,
            "wales": 77,
            "ctx": 60
          }
        },
        "male": {
          "1": {
            "school": 50,
            "la": 42,
            "wales": 65,
            "ctx": 52
          }
        },
        "fsm": {
          "1": {
            "school": 33,
            "la": 29,
            "wales": 44,
            "ctx": 35
          }
        },
        "nonfsm": {
          "1": {
            "school": 66,
            "la": 56,
            "wales": 87,
            "ctx": 68
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              58,
              50
            ],
            "la": [
              50,
              42
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              60,
              52
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              33,
              66
            ],
            "la": [
              29,
              56
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              35,
              68
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 59,
            "la": 51,
            "wales": 80,
            "ctx": 61
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              52,
              55,
              59
            ],
            "la": [
              45,
              48,
              51
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              54,
              57,
              61
            ]
          }
        },
        "female": {
          "1": {
            "school": 64,
            "la": 55,
            "wales": 86,
            "ctx": 66
          }
        },
        "male": {
          "1": {
            "school": 54,
            "la": 47,
            "wales": 74,
            "ctx": 56
          }
        },
        "fsm": {
          "1": {
            "school": 37,
            "la": 32,
            "wales": 50,
            "ctx": 38
          }
        },
        "nonfsm": {
          "1": {
            "school": 72,
            "la": 62,
            "wales": 98,
            "ctx": 74
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              64,
              54
            ],
            "la": [
              55,
              47
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              66,
              56
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              37,
              72
            ],
            "la": [
              32,
              62
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              38,
              74
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 63,
            "la": 54,
            "wales": 87,
            "ctx": 65
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              55,
              59,
              63
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              57,
              61,
              65
            ]
          }
        },
        "female": {
          "1": {
            "school": 68,
            "la": 58,
            "wales": 94,
            "ctx": 70
          }
        },
        "male": {
          "1": {
            "school": 58,
            "la": 50,
            "wales": 80,
            "ctx": 60
          }
        },
        "fsm": {
          "1": {
            "school": 39,
            "la": 33,
            "wales": 54,
            "ctx": 40
          }
        },
        "nonfsm": {
          "1": {
            "school": 77,
            "la": 66,
            "wales": 106,
            "ctx": 79
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              68,
              58
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              70,
              60
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              39,
              77
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              40,
              79
            ]
          }
        }
      }
    }
  },
  "blaengwawr": {
    "urn": "WG100002",
    "name": "Blaengwawr High School",
    "la": "rct",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF44 9BB",
    "lat": 51.712,
    "lng": -3.445,
    "phone": "01443 100014",
    "email": "blaengwawr@rct.gov.uk",
    "website": "blaengwawr.cymru",
    "estynUrl": "#",
    "totalPupils": 876,
    "teacherFTE": 58.1,
    "ptr": 15.1,
    "budgetPerPupil": 6340,
    "financialReserves": 98000,
    "fsm3yr": 22.1,
    "bame": 3.1,
    "eal": 0.9,
    "attendance": {
      "overall": {
        "1": {
          "school": 91.2,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 90.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            85.6,
            87,
            88.4,
            89.8,
            91.2
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            86,
            87.1,
            88.2,
            89.3,
            90.4
          ]
        }
      },
      "pa": {
        "1": {
          "school": 21.4,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 21.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            26.2,
            25,
            23.8,
            22.6,
            21.4
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            25.2,
            24.2,
            23.2,
            22.2,
            21.2
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.2,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 4.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.6,
            3.8,
            3.9,
            4.1,
            4.2
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 2.3,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 2.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            1.1,
            1.4,
            1.7,
            2,
            2.3
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            1.4,
            1.7,
            1.9,
            2.2,
            2.5
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 83,
          "auth": 5.4,
          "unauth": 4.1,
          "pa": 31.6,
          "ctx": 82
        },
        "nonfsm": {
          "attendance": 95,
          "auth": 3.6,
          "unauth": 1.5,
          "pa": 17.2,
          "ctx": 94
        },
        "female": {
          "attendance": 92.6,
          "auth": 3.8,
          "unauth": 1.7,
          "pa": 18.6,
          "ctx": 91.6
        },
        "male": {
          "attendance": 90,
          "auth": 4.6,
          "unauth": 2.9,
          "pa": 24.2,
          "ctx": 89.2
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 85,
          "male": 77
        },
        "year8": {
          "female": 86,
          "male": 82
        },
        "year9": {
          "female": 86,
          "male": 94
        },
        "year10": {
          "female": 96,
          "male": 94
        },
        "year11": {
          "female": 101,
          "male": 93
        }
      },
      "fsm": {
        "2022-23": 21.5,
        "2023-24": 21.8,
        "2024-25": 22.1
      },
      "aln": {
        "schoolAction": {
          "2022-23": 6.2,
          "2023-24": 6.6,
          "2024-25": 7.1
        },
        "schoolActionPlus": {
          "2022-23": 2.7,
          "2023-24": 2.9,
          "2024-25": 3.1
        },
        "statement": {
          "2022-23": 1.3,
          "2023-24": 1.4,
          "2024-25": 1.5
        }
      },
      "eal": 0.9,
      "bame": 3.1
    },
    "entries": {
      "all": {
        "1": {
          "school": 59,
          "la": 57,
          "wales": 62,
          "ctx": 56
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            54,
            57,
            59
          ],
          "la": [
            52,
            55,
            57
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            52,
            54,
            56
          ]
        }
      },
      "female": {
        "1": {
          "school": 63,
          "la": 61,
          "wales": 66,
          "ctx": 60
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            58,
            60,
            63
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            55,
            58,
            60
          ]
        }
      },
      "male": {
        "1": {
          "school": 55,
          "la": 53,
          "wales": 58,
          "ctx": 52
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            51,
            53,
            55
          ],
          "la": [
            48,
            51,
            53
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            48,
            50,
            52
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 44,
          "la": 42,
          "wales": 46,
          "ctx": 41
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            40,
            42,
            44
          ],
          "la": [
            37,
            39,
            42
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            36,
            39,
            41
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 66,
          "la": 65,
          "wales": 70,
          "ctx": 64
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            61,
            63,
            66
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            59,
            62,
            64
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            63,
            55
          ],
          "la": [
            61,
            53
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            60,
            52
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              58,
              60,
              63
            ],
            "b": [
              51,
              53,
              55
            ]
          },
          "la": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              55,
              58,
              60
            ],
            "b": [
              48,
              50,
              52
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            44,
            66
          ],
          "la": [
            42,
            65
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            41,
            64
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              40,
              42,
              44
            ],
            "b": [
              61,
              63,
              66
            ]
          },
          "la": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              36,
              39,
              41
            ],
            "b": [
              59,
              62,
              64
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 7,
            "ctx": 6
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              5,
              6,
              6
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              5,
              6,
              6
            ]
          }
        },
        "female": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 8,
            "ctx": 6
          }
        },
        "male": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 4,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 7,
            "la": 7,
            "wales": 9,
            "ctx": 7
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              6,
              6
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              6,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              4,
              7
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              7
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 16,
            "la": 15,
            "wales": 18,
            "ctx": 15
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              14,
              15,
              16
            ],
            "la": [
              13,
              14,
              15
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              13,
              14,
              15
            ]
          }
        },
        "female": {
          "1": {
            "school": 17,
            "la": 16,
            "wales": 19,
            "ctx": 16
          }
        },
        "male": {
          "1": {
            "school": 15,
            "la": 14,
            "wales": 17,
            "ctx": 14
          }
        },
        "fsm": {
          "1": {
            "school": 10,
            "la": 9,
            "wales": 11,
            "ctx": 9
          }
        },
        "nonfsm": {
          "1": {
            "school": 20,
            "la": 18,
            "wales": 22,
            "ctx": 18
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              17,
              15
            ],
            "la": [
              16,
              14
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              16,
              14
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              10,
              20
            ],
            "la": [
              9,
              18
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              9,
              18
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 27,
            "la": 26,
            "wales": 34,
            "ctx": 25
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              24,
              25,
              27
            ],
            "la": [
              23,
              24,
              26
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              22,
              24,
              25
            ]
          }
        },
        "female": {
          "1": {
            "school": 29,
            "la": 28,
            "wales": 37,
            "ctx": 27
          }
        },
        "male": {
          "1": {
            "school": 25,
            "la": 24,
            "wales": 31,
            "ctx": 23
          }
        },
        "fsm": {
          "1": {
            "school": 17,
            "la": 16,
            "wales": 21,
            "ctx": 16
          }
        },
        "nonfsm": {
          "1": {
            "school": 33,
            "la": 32,
            "wales": 41,
            "ctx": 31
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              29,
              25
            ],
            "la": [
              28,
              24
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              27,
              23
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              17,
              33
            ],
            "la": [
              16,
              32
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              16,
              31
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 36,
            "la": 35,
            "wales": 47,
            "ctx": 34
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              32,
              34,
              36
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              30,
              32,
              34
            ]
          }
        },
        "female": {
          "1": {
            "school": 39,
            "la": 38,
            "wales": 51,
            "ctx": 37
          }
        },
        "male": {
          "1": {
            "school": 33,
            "la": 32,
            "wales": 43,
            "ctx": 31
          }
        },
        "fsm": {
          "1": {
            "school": 22,
            "la": 22,
            "wales": 29,
            "ctx": 21
          }
        },
        "nonfsm": {
          "1": {
            "school": 44,
            "la": 43,
            "wales": 57,
            "ctx": 41
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              39,
              33
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              37,
              31
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              22,
              44
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              21,
              41
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 43,
            "la": 41,
            "wales": 61,
            "ctx": 41
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              38,
              40,
              43
            ],
            "la": [
              36,
              39,
              41
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              36,
              39,
              41
            ]
          }
        },
        "female": {
          "1": {
            "school": 46,
            "la": 44,
            "wales": 66,
            "ctx": 44
          }
        },
        "male": {
          "1": {
            "school": 40,
            "la": 38,
            "wales": 56,
            "ctx": 38
          }
        },
        "fsm": {
          "1": {
            "school": 27,
            "la": 25,
            "wales": 38,
            "ctx": 25
          }
        },
        "nonfsm": {
          "1": {
            "school": 52,
            "la": 50,
            "wales": 74,
            "ctx": 50
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              46,
              40
            ],
            "la": [
              44,
              38
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              44,
              38
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              27,
              52
            ],
            "la": [
              25,
              50
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              25,
              50
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 48,
            "la": 46,
            "wales": 71,
            "ctx": 46
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              42,
              45,
              48
            ],
            "la": [
              40,
              43,
              46
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              40,
              43,
              46
            ]
          }
        },
        "female": {
          "1": {
            "school": 52,
            "la": 50,
            "wales": 77,
            "ctx": 50
          }
        },
        "male": {
          "1": {
            "school": 44,
            "la": 42,
            "wales": 65,
            "ctx": 42
          }
        },
        "fsm": {
          "1": {
            "school": 30,
            "la": 29,
            "wales": 44,
            "ctx": 29
          }
        },
        "nonfsm": {
          "1": {
            "school": 59,
            "la": 56,
            "wales": 87,
            "ctx": 56
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              52,
              44
            ],
            "la": [
              50,
              42
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              50,
              42
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              30,
              59
            ],
            "la": [
              29,
              56
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              29,
              56
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 53,
            "la": 51,
            "wales": 80,
            "ctx": 50
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              47,
              50,
              53
            ],
            "la": [
              45,
              48,
              51
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              44,
              47,
              50
            ]
          }
        },
        "female": {
          "1": {
            "school": 57,
            "la": 55,
            "wales": 86,
            "ctx": 54
          }
        },
        "male": {
          "1": {
            "school": 49,
            "la": 47,
            "wales": 74,
            "ctx": 46
          }
        },
        "fsm": {
          "1": {
            "school": 33,
            "la": 32,
            "wales": 50,
            "ctx": 31
          }
        },
        "nonfsm": {
          "1": {
            "school": 65,
            "la": 62,
            "wales": 98,
            "ctx": 61
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              57,
              49
            ],
            "la": [
              55,
              47
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              54,
              46
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              33,
              65
            ],
            "la": [
              32,
              62
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              31,
              61
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 56,
            "la": 54,
            "wales": 87,
            "ctx": 53
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              49,
              53,
              56
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              47,
              50,
              53
            ]
          }
        },
        "female": {
          "1": {
            "school": 60,
            "la": 58,
            "wales": 94,
            "ctx": 57
          }
        },
        "male": {
          "1": {
            "school": 52,
            "la": 50,
            "wales": 80,
            "ctx": 49
          }
        },
        "fsm": {
          "1": {
            "school": 35,
            "la": 33,
            "wales": 54,
            "ctx": 33
          }
        },
        "nonfsm": {
          "1": {
            "school": 68,
            "la": 66,
            "wales": 106,
            "ctx": 65
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              60,
              52
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              57,
              49
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              35,
              68
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              33,
              65
            ]
          }
        }
      }
    }
  },
  "treorchy": {
    "urn": "WG100003",
    "name": "Treorchy Comprehensive",
    "la": "rct",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF42 9CC",
    "lat": 51.66,
    "lng": -3.508,
    "phone": "01443 100021",
    "email": "treorchy@rct.gov.uk",
    "website": "treorchy.cymru",
    "estynUrl": "#",
    "totalPupils": 1340,
    "teacherFTE": 88.4,
    "ptr": 15.2,
    "budgetPerPupil": 6050,
    "financialReserves": 210000,
    "fsm3yr": 18.9,
    "bame": 5.8,
    "eal": 2.4,
    "attendance": {
      "overall": {
        "1": {
          "school": 89.3,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 92.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            83.7,
            85.1,
            86.5,
            87.9,
            89.3
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            88.2,
            89.3,
            90.4,
            91.5,
            92.6
          ]
        }
      },
      "pa": {
        "1": {
          "school": 22.8,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 17.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            27.6,
            26.4,
            25.2,
            24,
            22.8
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            21.8,
            20.8,
            19.8,
            18.8,
            17.8
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.6,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 3.9
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            4,
            4.1,
            4.3,
            4.4,
            4.6
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.3,
            3.5,
            3.6,
            3.8,
            3.9
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 2.9,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 1.9
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            1.7,
            2,
            2.3,
            2.6,
            2.9
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            0.8,
            1.1,
            1.3,
            1.6,
            1.9
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 81.1,
          "auth": 5.8,
          "unauth": 4.7,
          "pa": 33,
          "ctx": 84.2
        },
        "nonfsm": {
          "attendance": 93.1,
          "auth": 4,
          "unauth": 2.1,
          "pa": 18.6,
          "ctx": 96.2
        },
        "female": {
          "attendance": 90.7,
          "auth": 4.2,
          "unauth": 2.3,
          "pa": 20,
          "ctx": 93.8
        },
        "male": {
          "attendance": 88.1,
          "auth": 5,
          "unauth": 3.5,
          "pa": 25.6,
          "ctx": 91.4
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 127,
          "male": 119
        },
        "year8": {
          "female": 131,
          "male": 127
        },
        "year9": {
          "female": 132,
          "male": 140
        },
        "year10": {
          "female": 143,
          "male": 141
        },
        "year11": {
          "female": 151,
          "male": 143
        }
      },
      "fsm": {
        "2022-23": 18.3,
        "2023-24": 18.6,
        "2024-25": 18.9
      },
      "aln": {
        "schoolAction": {
          "2022-23": 5.3,
          "2023-24": 5.7,
          "2024-25": 6
        },
        "schoolActionPlus": {
          "2022-23": 2.3,
          "2023-24": 2.5,
          "2024-25": 2.6
        },
        "statement": {
          "2022-23": 1.1,
          "2023-24": 1.2,
          "2024-25": 1.3
        }
      },
      "eal": 2.4,
      "bame": 5.8
    },
    "entries": {
      "all": {
        "1": {
          "school": 57,
          "la": 57,
          "wales": 62,
          "ctx": 64
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            52,
            55,
            57
          ],
          "la": [
            52,
            55,
            57
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            59,
            61,
            64
          ]
        }
      },
      "female": {
        "1": {
          "school": 61,
          "la": 61,
          "wales": 66,
          "ctx": 68
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            56,
            59,
            61
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            63,
            66,
            68
          ]
        }
      },
      "male": {
        "1": {
          "school": 53,
          "la": 53,
          "wales": 58,
          "ctx": 60
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            49,
            51,
            53
          ],
          "la": [
            48,
            51,
            53
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            54,
            57,
            60
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 42,
          "la": 42,
          "wales": 46,
          "ctx": 47
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            39,
            40,
            42
          ],
          "la": [
            37,
            39,
            42
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            42,
            44,
            47
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 64,
          "la": 65,
          "wales": 70,
          "ctx": 73
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            59,
            61,
            64
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            68,
            70,
            73
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            61,
            53
          ],
          "la": [
            61,
            53
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            68,
            60
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              49,
              51,
              53
            ]
          },
          "la": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              63,
              66,
              68
            ],
            "b": [
              54,
              57,
              60
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            42,
            64
          ],
          "la": [
            42,
            65
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            47,
            73
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              39,
              40,
              42
            ],
            "b": [
              59,
              61,
              64
            ]
          },
          "la": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              42,
              44,
              47
            ],
            "b": [
              68,
              70,
              73
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 7,
            "ctx": 6
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              5,
              6,
              6
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              5,
              6,
              6
            ]
          }
        },
        "female": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 8,
            "ctx": 6
          }
        },
        "male": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 4,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 7,
            "la": 7,
            "wales": 9,
            "ctx": 7
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              6,
              6
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              6,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              4,
              7
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              7
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 15,
            "la": 15,
            "wales": 18,
            "ctx": 17
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              13,
              14,
              15
            ],
            "la": [
              13,
              14,
              15
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              15,
              16,
              17
            ]
          }
        },
        "female": {
          "1": {
            "school": 16,
            "la": 16,
            "wales": 19,
            "ctx": 18
          }
        },
        "male": {
          "1": {
            "school": 14,
            "la": 14,
            "wales": 17,
            "ctx": 16
          }
        },
        "fsm": {
          "1": {
            "school": 9,
            "la": 9,
            "wales": 11,
            "ctx": 11
          }
        },
        "nonfsm": {
          "1": {
            "school": 18,
            "la": 18,
            "wales": 22,
            "ctx": 21
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              16,
              14
            ],
            "la": [
              16,
              14
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              18,
              16
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              9,
              18
            ],
            "la": [
              9,
              18
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              11,
              21
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 26,
            "la": 26,
            "wales": 34,
            "ctx": 29
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              23,
              24,
              26
            ],
            "la": [
              23,
              24,
              26
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              26,
              27,
              29
            ]
          }
        },
        "female": {
          "1": {
            "school": 28,
            "la": 28,
            "wales": 37,
            "ctx": 31
          }
        },
        "male": {
          "1": {
            "school": 24,
            "la": 24,
            "wales": 31,
            "ctx": 27
          }
        },
        "fsm": {
          "1": {
            "school": 16,
            "la": 16,
            "wales": 21,
            "ctx": 18
          }
        },
        "nonfsm": {
          "1": {
            "school": 32,
            "la": 32,
            "wales": 41,
            "ctx": 35
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              28,
              24
            ],
            "la": [
              28,
              24
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              31,
              27
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              16,
              32
            ],
            "la": [
              16,
              32
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              18,
              35
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 35,
            "la": 35,
            "wales": 47,
            "ctx": 39
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              31,
              33,
              35
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              34,
              37,
              39
            ]
          }
        },
        "female": {
          "1": {
            "school": 38,
            "la": 38,
            "wales": 51,
            "ctx": 42
          }
        },
        "male": {
          "1": {
            "school": 32,
            "la": 32,
            "wales": 43,
            "ctx": 36
          }
        },
        "fsm": {
          "1": {
            "school": 22,
            "la": 22,
            "wales": 29,
            "ctx": 24
          }
        },
        "nonfsm": {
          "1": {
            "school": 43,
            "la": 43,
            "wales": 57,
            "ctx": 48
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              38,
              32
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              42,
              36
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              22,
              43
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              24,
              48
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 42,
            "la": 41,
            "wales": 61,
            "ctx": 47
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              37,
              39,
              42
            ],
            "la": [
              36,
              39,
              41
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              41,
              44,
              47
            ]
          }
        },
        "female": {
          "1": {
            "school": 45,
            "la": 44,
            "wales": 66,
            "ctx": 51
          }
        },
        "male": {
          "1": {
            "school": 39,
            "la": 38,
            "wales": 56,
            "ctx": 43
          }
        },
        "fsm": {
          "1": {
            "school": 26,
            "la": 25,
            "wales": 38,
            "ctx": 29
          }
        },
        "nonfsm": {
          "1": {
            "school": 51,
            "la": 50,
            "wales": 74,
            "ctx": 57
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              45,
              39
            ],
            "la": [
              44,
              38
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              51,
              43
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              26,
              51
            ],
            "la": [
              25,
              50
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              29,
              57
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 47,
            "la": 46,
            "wales": 71,
            "ctx": 52
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              41,
              44,
              47
            ],
            "la": [
              40,
              43,
              46
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              46,
              49,
              52
            ]
          }
        },
        "female": {
          "1": {
            "school": 51,
            "la": 50,
            "wales": 77,
            "ctx": 56
          }
        },
        "male": {
          "1": {
            "school": 43,
            "la": 42,
            "wales": 65,
            "ctx": 48
          }
        },
        "fsm": {
          "1": {
            "school": 29,
            "la": 29,
            "wales": 44,
            "ctx": 32
          }
        },
        "nonfsm": {
          "1": {
            "school": 57,
            "la": 56,
            "wales": 87,
            "ctx": 63
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              51,
              43
            ],
            "la": [
              50,
              42
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              56,
              48
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              29,
              57
            ],
            "la": [
              29,
              56
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              32,
              63
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 51,
            "la": 51,
            "wales": 80,
            "ctx": 57
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              45,
              48,
              51
            ],
            "la": [
              45,
              48,
              51
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              50,
              54,
              57
            ]
          }
        },
        "female": {
          "1": {
            "school": 55,
            "la": 55,
            "wales": 86,
            "ctx": 62
          }
        },
        "male": {
          "1": {
            "school": 47,
            "la": 47,
            "wales": 74,
            "ctx": 52
          }
        },
        "fsm": {
          "1": {
            "school": 32,
            "la": 32,
            "wales": 50,
            "ctx": 35
          }
        },
        "nonfsm": {
          "1": {
            "school": 62,
            "la": 62,
            "wales": 98,
            "ctx": 70
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              55,
              47
            ],
            "la": [
              55,
              47
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              62,
              52
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              32,
              62
            ],
            "la": [
              32,
              62
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              35,
              70
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 54,
            "la": 54,
            "wales": 87,
            "ctx": 61
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              48,
              51,
              54
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              54,
              57,
              61
            ]
          }
        },
        "female": {
          "1": {
            "school": 58,
            "la": 58,
            "wales": 94,
            "ctx": 66
          }
        },
        "male": {
          "1": {
            "school": 50,
            "la": 50,
            "wales": 80,
            "ctx": 56
          }
        },
        "fsm": {
          "1": {
            "school": 33,
            "la": 33,
            "wales": 54,
            "ctx": 38
          }
        },
        "nonfsm": {
          "1": {
            "school": 66,
            "la": 66,
            "wales": 106,
            "ctx": 74
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              58,
              50
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              66,
              56
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              33,
              66
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              38,
              74
            ]
          }
        }
      }
    }
  },
  "mountain-ash": {
    "urn": "WG100004",
    "name": "Mountain Ash Comprehensive",
    "la": "rct",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF45 9DD",
    "lat": 51.681,
    "lng": -3.374,
    "phone": "01443 100029",
    "email": "mountain-ash@rct.gov.uk",
    "website": "mountainash.cymru",
    "estynUrl": "#",
    "totalPupils": 923,
    "teacherFTE": 61.2,
    "ptr": 15.1,
    "budgetPerPupil": 6210,
    "financialReserves": 118000,
    "fsm3yr": 41,
    "bame": 7.2,
    "eal": 3.1,
    "attendance": {
      "overall": {
        "1": {
          "school": 86.1,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 87.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            80.5,
            81.9,
            83.3,
            84.7,
            86.1
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            83.1,
            84.2,
            85.3,
            86.4,
            87.5
          ]
        }
      },
      "pa": {
        "1": {
          "school": 28.4,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 25.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            33.2,
            32,
            30.8,
            29.6,
            28.4
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            29.5,
            28.5,
            27.5,
            26.5,
            25.5
          ]
        }
      },
      "auth": {
        "1": {
          "school": 5.2,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            4.6,
            4.8,
            4.9,
            5.1,
            5.2
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            4.4,
            4.6,
            4.7,
            4.9,
            5
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 3.8,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 3.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            2.6,
            2.9,
            3.2,
            3.5,
            3.8
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            2.3,
            2.6,
            2.8,
            3.1,
            3.4
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 77.9,
          "auth": 6.4,
          "unauth": 5.6,
          "pa": 38.6,
          "ctx": 79.1
        },
        "nonfsm": {
          "attendance": 89.9,
          "auth": 4.6,
          "unauth": 3,
          "pa": 24.2,
          "ctx": 91.1
        },
        "female": {
          "attendance": 87.5,
          "auth": 4.8,
          "unauth": 3.2,
          "pa": 25.6,
          "ctx": 88.7
        },
        "male": {
          "attendance": 84.9,
          "auth": 5.6,
          "unauth": 4.4,
          "pa": 31.2,
          "ctx": 86.3
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 89,
          "male": 81
        },
        "year8": {
          "female": 90,
          "male": 86
        },
        "year9": {
          "female": 90,
          "male": 98
        },
        "year10": {
          "female": 100,
          "male": 98
        },
        "year11": {
          "female": 105,
          "male": 97
        }
      },
      "fsm": {
        "2022-23": 40.4,
        "2023-24": 40.7,
        "2024-25": 41
      },
      "aln": {
        "schoolAction": {
          "2022-23": 11.5,
          "2023-24": 12.3,
          "2024-25": 13.1
        },
        "schoolActionPlus": {
          "2022-23": 4.9,
          "2023-24": 5.3,
          "2024-25": 5.7
        },
        "statement": {
          "2022-23": 2.5,
          "2023-24": 2.7,
          "2024-25": 2.9
        }
      },
      "eal": 3.1,
      "bame": 7.2
    },
    "entries": {
      "all": {
        "1": {
          "school": 43,
          "la": 57,
          "wales": 62,
          "ctx": 46
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            40,
            41,
            43
          ],
          "la": [
            52,
            55,
            57
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            42,
            44,
            46
          ]
        }
      },
      "female": {
        "1": {
          "school": 46,
          "la": 61,
          "wales": 66,
          "ctx": 49
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            42,
            44,
            46
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            46,
            47,
            49
          ]
        }
      },
      "male": {
        "1": {
          "school": 40,
          "la": 53,
          "wales": 58,
          "ctx": 43
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            37,
            38,
            40
          ],
          "la": [
            48,
            51,
            53
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            39,
            41,
            43
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 32,
          "la": 42,
          "wales": 46,
          "ctx": 34
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            29,
            31,
            32
          ],
          "la": [
            37,
            39,
            42
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            30,
            32,
            34
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 48,
          "la": 65,
          "wales": 70,
          "ctx": 52
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            44,
            46,
            48
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            49,
            51,
            52
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            46,
            40
          ],
          "la": [
            61,
            53
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            49,
            43
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              42,
              44,
              46
            ],
            "b": [
              37,
              38,
              40
            ]
          },
          "la": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              46,
              47,
              49
            ],
            "b": [
              39,
              41,
              43
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            32,
            48
          ],
          "la": [
            42,
            65
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            34,
            52
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              29,
              31,
              32
            ],
            "b": [
              44,
              46,
              48
            ]
          },
          "la": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              30,
              32,
              34
            ],
            "b": [
              49,
              51,
              52
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 4,
            "la": 6,
            "wales": 7,
            "ctx": 5
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              4,
              4,
              4
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              4,
              5,
              5
            ]
          }
        },
        "female": {
          "1": {
            "school": 4,
            "la": 6,
            "wales": 8,
            "ctx": 5
          }
        },
        "male": {
          "1": {
            "school": 4,
            "la": 6,
            "wales": 6,
            "ctx": 5
          }
        },
        "fsm": {
          "1": {
            "school": 2,
            "la": 4,
            "wales": 4,
            "ctx": 3
          }
        },
        "nonfsm": {
          "1": {
            "school": 5,
            "la": 7,
            "wales": 9,
            "ctx": 6
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              4,
              4
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              5,
              5
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              2,
              5
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              3,
              6
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 12,
            "la": 15,
            "wales": 18,
            "ctx": 12
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              11,
              11,
              12
            ],
            "la": [
              13,
              14,
              15
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              11,
              11,
              12
            ]
          }
        },
        "female": {
          "1": {
            "school": 13,
            "la": 16,
            "wales": 19,
            "ctx": 13
          }
        },
        "male": {
          "1": {
            "school": 11,
            "la": 14,
            "wales": 17,
            "ctx": 11
          }
        },
        "fsm": {
          "1": {
            "school": 7,
            "la": 9,
            "wales": 11,
            "ctx": 7
          }
        },
        "nonfsm": {
          "1": {
            "school": 15,
            "la": 18,
            "wales": 22,
            "ctx": 15
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              13,
              11
            ],
            "la": [
              16,
              14
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              13,
              11
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              7,
              15
            ],
            "la": [
              9,
              18
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              7,
              15
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 19,
            "la": 26,
            "wales": 34,
            "ctx": 21
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              17,
              18,
              19
            ],
            "la": [
              23,
              24,
              26
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              18,
              20,
              21
            ]
          }
        },
        "female": {
          "1": {
            "school": 21,
            "la": 28,
            "wales": 37,
            "ctx": 23
          }
        },
        "male": {
          "1": {
            "school": 17,
            "la": 24,
            "wales": 31,
            "ctx": 19
          }
        },
        "fsm": {
          "1": {
            "school": 12,
            "la": 16,
            "wales": 21,
            "ctx": 13
          }
        },
        "nonfsm": {
          "1": {
            "school": 23,
            "la": 32,
            "wales": 41,
            "ctx": 26
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              21,
              17
            ],
            "la": [
              28,
              24
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              23,
              19
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              12,
              23
            ],
            "la": [
              16,
              32
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              13,
              26
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 26,
            "la": 35,
            "wales": 47,
            "ctx": 28
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              23,
              24,
              26
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              25,
              26,
              28
            ]
          }
        },
        "female": {
          "1": {
            "school": 28,
            "la": 38,
            "wales": 51,
            "ctx": 30
          }
        },
        "male": {
          "1": {
            "school": 24,
            "la": 32,
            "wales": 43,
            "ctx": 26
          }
        },
        "fsm": {
          "1": {
            "school": 16,
            "la": 22,
            "wales": 29,
            "ctx": 17
          }
        },
        "nonfsm": {
          "1": {
            "school": 32,
            "la": 43,
            "wales": 57,
            "ctx": 34
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              28,
              24
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              30,
              26
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              16,
              32
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              17,
              34
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 31,
            "la": 41,
            "wales": 61,
            "ctx": 34
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              27,
              29,
              31
            ],
            "la": [
              36,
              39,
              41
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              30,
              32,
              34
            ]
          }
        },
        "female": {
          "1": {
            "school": 33,
            "la": 44,
            "wales": 66,
            "ctx": 37
          }
        },
        "male": {
          "1": {
            "school": 29,
            "la": 38,
            "wales": 56,
            "ctx": 31
          }
        },
        "fsm": {
          "1": {
            "school": 19,
            "la": 25,
            "wales": 38,
            "ctx": 21
          }
        },
        "nonfsm": {
          "1": {
            "school": 38,
            "la": 50,
            "wales": 74,
            "ctx": 41
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              33,
              29
            ],
            "la": [
              44,
              38
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              37,
              31
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              19,
              38
            ],
            "la": [
              25,
              50
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              21,
              41
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 35,
            "la": 46,
            "wales": 71,
            "ctx": 38
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              31,
              33,
              35
            ],
            "la": [
              40,
              43,
              46
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              33,
              36,
              38
            ]
          }
        },
        "female": {
          "1": {
            "school": 38,
            "la": 50,
            "wales": 77,
            "ctx": 41
          }
        },
        "male": {
          "1": {
            "school": 32,
            "la": 42,
            "wales": 65,
            "ctx": 35
          }
        },
        "fsm": {
          "1": {
            "school": 22,
            "la": 29,
            "wales": 44,
            "ctx": 24
          }
        },
        "nonfsm": {
          "1": {
            "school": 43,
            "la": 56,
            "wales": 87,
            "ctx": 46
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              38,
              32
            ],
            "la": [
              50,
              42
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              41,
              35
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              22,
              43
            ],
            "la": [
              29,
              56
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              24,
              46
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 38,
            "la": 51,
            "wales": 80,
            "ctx": 41
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              33,
              36,
              38
            ],
            "la": [
              45,
              48,
              51
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              36,
              39,
              41
            ]
          }
        },
        "female": {
          "1": {
            "school": 41,
            "la": 55,
            "wales": 86,
            "ctx": 44
          }
        },
        "male": {
          "1": {
            "school": 35,
            "la": 47,
            "wales": 74,
            "ctx": 38
          }
        },
        "fsm": {
          "1": {
            "school": 24,
            "la": 32,
            "wales": 50,
            "ctx": 25
          }
        },
        "nonfsm": {
          "1": {
            "school": 46,
            "la": 62,
            "wales": 98,
            "ctx": 50
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              41,
              35
            ],
            "la": [
              55,
              47
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              44,
              38
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              24,
              46
            ],
            "la": [
              32,
              62
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              25,
              50
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 41,
            "la": 54,
            "wales": 87,
            "ctx": 44
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              36,
              39,
              41
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              39,
              41,
              44
            ]
          }
        },
        "female": {
          "1": {
            "school": 44,
            "la": 58,
            "wales": 94,
            "ctx": 48
          }
        },
        "male": {
          "1": {
            "school": 38,
            "la": 50,
            "wales": 80,
            "ctx": 40
          }
        },
        "fsm": {
          "1": {
            "school": 25,
            "la": 33,
            "wales": 54,
            "ctx": 27
          }
        },
        "nonfsm": {
          "1": {
            "school": 50,
            "la": 66,
            "wales": 106,
            "ctx": 54
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              44,
              38
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              48,
              40
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              25,
              50
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              27,
              54
            ]
          }
        }
      }
    }
  },
  "aberdare": {
    "urn": "WG100005",
    "name": "Aberdare Community School",
    "la": "rct",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF44 9EE",
    "lat": 51.715,
    "lng": -3.449,
    "phone": "01443 100036",
    "email": "aberdare@rct.gov.uk",
    "website": "aberdare.cymru",
    "estynUrl": "#",
    "totalPupils": 1107,
    "teacherFTE": 73.2,
    "ptr": 15.1,
    "budgetPerPupil": 6090,
    "financialReserves": 162000,
    "fsm3yr": 35.6,
    "bame": 6.4,
    "eal": 2.8,
    "attendance": {
      "overall": {
        "1": {
          "school": 88.4,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 86.9
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            82.8,
            84.2,
            85.6,
            87,
            88.4
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            82.5,
            83.6,
            84.7,
            85.8,
            86.9
          ]
        }
      },
      "pa": {
        "1": {
          "school": 24.6,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 26.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            29.4,
            28.2,
            27,
            25.8,
            24.6
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            30.5,
            29.5,
            28.5,
            27.5,
            26.5
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.8,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 5.1
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            4.2,
            4.4,
            4.5,
            4.6,
            4.8
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            4.5,
            4.6,
            4.8,
            4.9,
            5.1
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 3.1,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 3.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            1.9,
            2.2,
            2.5,
            2.8,
            3.1
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            2.5,
            2.8,
            3,
            3.3,
            3.6
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 80.2,
          "auth": 6,
          "unauth": 4.9,
          "pa": 34.8,
          "ctx": 78.5
        },
        "nonfsm": {
          "attendance": 92.2,
          "auth": 4.2,
          "unauth": 2.3,
          "pa": 20.4,
          "ctx": 90.5
        },
        "female": {
          "attendance": 89.8,
          "auth": 4.4,
          "unauth": 2.5,
          "pa": 21.8,
          "ctx": 88.1
        },
        "male": {
          "attendance": 87.2,
          "auth": 5.2,
          "unauth": 3.7,
          "pa": 27.4,
          "ctx": 85.7
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 106,
          "male": 98
        },
        "year8": {
          "female": 109,
          "male": 105
        },
        "year9": {
          "female": 109,
          "male": 117
        },
        "year10": {
          "female": 119,
          "male": 117
        },
        "year11": {
          "female": 126,
          "male": 118
        }
      },
      "fsm": {
        "2022-23": 35,
        "2023-24": 35.3,
        "2024-25": 35.6
      },
      "aln": {
        "schoolAction": {
          "2022-23": 10,
          "2023-24": 10.7,
          "2024-25": 11.4
        },
        "schoolActionPlus": {
          "2022-23": 4.3,
          "2023-24": 4.6,
          "2024-25": 5
        },
        "statement": {
          "2022-23": 2.1,
          "2023-24": 2.3,
          "2024-25": 2.5
        }
      },
      "eal": 2.8,
      "bame": 6.4
    },
    "entries": {
      "all": {
        "1": {
          "school": 49,
          "la": 57,
          "wales": 62,
          "ctx": 45
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            45,
            47,
            49
          ],
          "la": [
            52,
            55,
            57
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            41,
            43,
            45
          ]
        }
      },
      "female": {
        "1": {
          "school": 52,
          "la": 61,
          "wales": 66,
          "ctx": 48
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            48,
            50,
            52
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            45,
            46,
            48
          ]
        }
      },
      "male": {
        "1": {
          "school": 46,
          "la": 53,
          "wales": 58,
          "ctx": 42
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            42,
            44,
            46
          ],
          "la": [
            48,
            51,
            53
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            38,
            40,
            42
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 36,
          "la": 42,
          "wales": 46,
          "ctx": 33
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            33,
            35,
            36
          ],
          "la": [
            37,
            39,
            42
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            29,
            31,
            33
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 55,
          "la": 65,
          "wales": 70,
          "ctx": 51
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            51,
            53,
            55
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            48,
            50,
            51
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            52,
            46
          ],
          "la": [
            61,
            53
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            48,
            42
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              48,
              50,
              52
            ],
            "b": [
              42,
              44,
              46
            ]
          },
          "la": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              45,
              46,
              48
            ],
            "b": [
              38,
              40,
              42
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            36,
            55
          ],
          "la": [
            42,
            65
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            33,
            51
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              33,
              35,
              36
            ],
            "b": [
              51,
              53,
              55
            ]
          },
          "la": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              29,
              31,
              33
            ],
            "b": [
              48,
              50,
              51
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 5,
            "la": 6,
            "wales": 7,
            "ctx": 5
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              4,
              5,
              5
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              4,
              5,
              5
            ]
          }
        },
        "female": {
          "1": {
            "school": 5,
            "la": 6,
            "wales": 8,
            "ctx": 5
          }
        },
        "male": {
          "1": {
            "school": 5,
            "la": 6,
            "wales": 6,
            "ctx": 5
          }
        },
        "fsm": {
          "1": {
            "school": 3,
            "la": 4,
            "wales": 4,
            "ctx": 3
          }
        },
        "nonfsm": {
          "1": {
            "school": 6,
            "la": 7,
            "wales": 9,
            "ctx": 6
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              5,
              5
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              5,
              5
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              3,
              6
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              3,
              6
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 13,
            "la": 15,
            "wales": 18,
            "ctx": 12
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              11,
              12,
              13
            ],
            "la": [
              13,
              14,
              15
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              11,
              11,
              12
            ]
          }
        },
        "female": {
          "1": {
            "school": 14,
            "la": 16,
            "wales": 19,
            "ctx": 13
          }
        },
        "male": {
          "1": {
            "school": 12,
            "la": 14,
            "wales": 17,
            "ctx": 11
          }
        },
        "fsm": {
          "1": {
            "school": 8,
            "la": 9,
            "wales": 11,
            "ctx": 7
          }
        },
        "nonfsm": {
          "1": {
            "school": 16,
            "la": 18,
            "wales": 22,
            "ctx": 15
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              14,
              12
            ],
            "la": [
              16,
              14
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              13,
              11
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              8,
              16
            ],
            "la": [
              9,
              18
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              7,
              15
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 22,
            "la": 26,
            "wales": 34,
            "ctx": 20
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              19,
              21,
              22
            ],
            "la": [
              23,
              24,
              26
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              18,
              19,
              20
            ]
          }
        },
        "female": {
          "1": {
            "school": 24,
            "la": 28,
            "wales": 37,
            "ctx": 22
          }
        },
        "male": {
          "1": {
            "school": 20,
            "la": 24,
            "wales": 31,
            "ctx": 18
          }
        },
        "fsm": {
          "1": {
            "school": 14,
            "la": 16,
            "wales": 21,
            "ctx": 12
          }
        },
        "nonfsm": {
          "1": {
            "school": 27,
            "la": 32,
            "wales": 41,
            "ctx": 24
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              24,
              20
            ],
            "la": [
              28,
              24
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              22,
              18
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              14,
              27
            ],
            "la": [
              16,
              32
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              12,
              24
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 30,
            "la": 35,
            "wales": 47,
            "ctx": 27
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              26,
              28,
              30
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              24,
              25,
              27
            ]
          }
        },
        "female": {
          "1": {
            "school": 32,
            "la": 38,
            "wales": 51,
            "ctx": 29
          }
        },
        "male": {
          "1": {
            "school": 28,
            "la": 32,
            "wales": 43,
            "ctx": 25
          }
        },
        "fsm": {
          "1": {
            "school": 19,
            "la": 22,
            "wales": 29,
            "ctx": 17
          }
        },
        "nonfsm": {
          "1": {
            "school": 37,
            "la": 43,
            "wales": 57,
            "ctx": 33
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              32,
              28
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              29,
              25
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              19,
              37
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              17,
              33
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 36,
            "la": 41,
            "wales": 61,
            "ctx": 33
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              32,
              34,
              36
            ],
            "la": [
              36,
              39,
              41
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              29,
              31,
              33
            ]
          }
        },
        "female": {
          "1": {
            "school": 39,
            "la": 44,
            "wales": 66,
            "ctx": 36
          }
        },
        "male": {
          "1": {
            "school": 33,
            "la": 38,
            "wales": 56,
            "ctx": 30
          }
        },
        "fsm": {
          "1": {
            "school": 22,
            "la": 25,
            "wales": 38,
            "ctx": 20
          }
        },
        "nonfsm": {
          "1": {
            "school": 44,
            "la": 50,
            "wales": 74,
            "ctx": 40
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              39,
              33
            ],
            "la": [
              44,
              38
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              36,
              30
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              22,
              44
            ],
            "la": [
              25,
              50
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              20,
              40
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 40,
            "la": 46,
            "wales": 71,
            "ctx": 37
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              35,
              38,
              40
            ],
            "la": [
              40,
              43,
              46
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              33,
              35,
              37
            ]
          }
        },
        "female": {
          "1": {
            "school": 43,
            "la": 50,
            "wales": 77,
            "ctx": 40
          }
        },
        "male": {
          "1": {
            "school": 37,
            "la": 42,
            "wales": 65,
            "ctx": 34
          }
        },
        "fsm": {
          "1": {
            "school": 25,
            "la": 29,
            "wales": 44,
            "ctx": 23
          }
        },
        "nonfsm": {
          "1": {
            "school": 49,
            "la": 56,
            "wales": 87,
            "ctx": 45
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              43,
              37
            ],
            "la": [
              50,
              42
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              40,
              34
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              25,
              49
            ],
            "la": [
              29,
              56
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              23,
              45
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 44,
            "la": 51,
            "wales": 80,
            "ctx": 40
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              39,
              41,
              44
            ],
            "la": [
              45,
              48,
              51
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              35,
              38,
              40
            ]
          }
        },
        "female": {
          "1": {
            "school": 48,
            "la": 55,
            "wales": 86,
            "ctx": 43
          }
        },
        "male": {
          "1": {
            "school": 40,
            "la": 47,
            "wales": 74,
            "ctx": 37
          }
        },
        "fsm": {
          "1": {
            "school": 27,
            "la": 32,
            "wales": 50,
            "ctx": 25
          }
        },
        "nonfsm": {
          "1": {
            "school": 54,
            "la": 62,
            "wales": 98,
            "ctx": 49
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              48,
              40
            ],
            "la": [
              55,
              47
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              43,
              37
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              27,
              54
            ],
            "la": [
              32,
              62
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              25,
              49
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 47,
            "la": 54,
            "wales": 87,
            "ctx": 43
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              41,
              44,
              47
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              38,
              40,
              43
            ]
          }
        },
        "female": {
          "1": {
            "school": 51,
            "la": 58,
            "wales": 94,
            "ctx": 46
          }
        },
        "male": {
          "1": {
            "school": 43,
            "la": 50,
            "wales": 80,
            "ctx": 40
          }
        },
        "fsm": {
          "1": {
            "school": 29,
            "la": 33,
            "wales": 54,
            "ctx": 27
          }
        },
        "nonfsm": {
          "1": {
            "school": 57,
            "la": 66,
            "wales": 106,
            "ctx": 52
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              51,
              43
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              46,
              40
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              29,
              57
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              27,
              52
            ]
          }
        }
      }
    }
  },
  "ferndale": {
    "urn": "WG100006",
    "name": "Ferndale Community School",
    "la": "rct",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF43 9FF",
    "lat": 51.669,
    "lng": -3.462,
    "phone": "01443 100043",
    "email": "ferndale@rct.gov.uk",
    "website": "ferndale.cymru",
    "estynUrl": "#",
    "totalPupils": 654,
    "teacherFTE": 43.8,
    "ptr": 14.9,
    "budgetPerPupil": 6420,
    "financialReserves": 74000,
    "fsm3yr": 31.2,
    "bame": 4.4,
    "eal": 1.2,
    "attendance": {
      "overall": {
        "1": {
          "school": 90.4,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 90.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            84.8,
            86.2,
            87.6,
            89,
            90.4
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            86.2,
            87.3,
            88.4,
            89.5,
            90.6
          ]
        }
      },
      "pa": {
        "1": {
          "school": 20.8,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 21.3
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            25.6,
            24.4,
            23.2,
            22,
            20.8
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            25.3,
            24.3,
            23.3,
            22.3,
            21.3
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.4,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 4.3
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.7,
            3.9,
            4,
            4.1,
            4.3
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 2.5,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 2.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            1.3,
            1.6,
            1.9,
            2.2,
            2.5
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            1.4,
            1.7,
            1.9,
            2.2,
            2.5
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 82.2,
          "auth": 5.6,
          "unauth": 4.3,
          "pa": 31,
          "ctx": 82.2
        },
        "nonfsm": {
          "attendance": 94.2,
          "auth": 3.8,
          "unauth": 1.7,
          "pa": 16.6,
          "ctx": 94.2
        },
        "female": {
          "attendance": 91.8,
          "auth": 4,
          "unauth": 1.9,
          "pa": 18,
          "ctx": 91.8
        },
        "male": {
          "attendance": 89.2,
          "auth": 4.8,
          "unauth": 3.1,
          "pa": 23.6,
          "ctx": 89.4
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 64,
          "male": 56
        },
        "year8": {
          "female": 64,
          "male": 60
        },
        "year9": {
          "female": 63,
          "male": 71
        },
        "year10": {
          "female": 72,
          "male": 70
        },
        "year11": {
          "female": 76,
          "male": 68
        }
      },
      "fsm": {
        "2022-23": 30.6,
        "2023-24": 30.9,
        "2024-25": 31.2
      },
      "aln": {
        "schoolAction": {
          "2022-23": 8.7,
          "2023-24": 9.4,
          "2024-25": 10
        },
        "schoolActionPlus": {
          "2022-23": 3.7,
          "2023-24": 4.1,
          "2024-25": 4.4
        },
        "statement": {
          "2022-23": 1.9,
          "2023-24": 2,
          "2024-25": 2.2
        }
      },
      "eal": 1.2,
      "bame": 4.4
    },
    "entries": {
      "all": {
        "1": {
          "school": 54,
          "la": 57,
          "wales": 62,
          "ctx": 57
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            50,
            52,
            54
          ],
          "la": [
            52,
            55,
            57
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            52,
            55,
            57
          ]
        }
      },
      "female": {
        "1": {
          "school": 58,
          "la": 61,
          "wales": 66,
          "ctx": 61
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            53,
            56,
            58
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            56,
            59,
            61
          ]
        }
      },
      "male": {
        "1": {
          "school": 50,
          "la": 53,
          "wales": 58,
          "ctx": 53
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            46,
            48,
            50
          ],
          "la": [
            48,
            51,
            53
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            48,
            51,
            53
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 40,
          "la": 42,
          "wales": 46,
          "ctx": 42
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            37,
            38,
            40
          ],
          "la": [
            37,
            39,
            42
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            37,
            39,
            42
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 60,
          "la": 65,
          "wales": 70,
          "ctx": 65
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            55,
            58,
            60
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            60,
            63,
            65
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            58,
            50
          ],
          "la": [
            61,
            53
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            61,
            53
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              53,
              56,
              58
            ],
            "b": [
              46,
              48,
              50
            ]
          },
          "la": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            40,
            60
          ],
          "la": [
            42,
            65
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            42,
            65
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              37,
              38,
              40
            ],
            "b": [
              55,
              58,
              60
            ]
          },
          "la": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 5,
            "la": 6,
            "wales": 7,
            "ctx": 6
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              4,
              5,
              5
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              5,
              6,
              6
            ]
          }
        },
        "female": {
          "1": {
            "school": 5,
            "la": 6,
            "wales": 8,
            "ctx": 6
          }
        },
        "male": {
          "1": {
            "school": 5,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 3,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 6,
            "la": 7,
            "wales": 9,
            "ctx": 7
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              5,
              5
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              6,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              3,
              6
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              7
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 15,
            "la": 15,
            "wales": 18,
            "ctx": 15
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              13,
              14,
              15
            ],
            "la": [
              13,
              14,
              15
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              13,
              14,
              15
            ]
          }
        },
        "female": {
          "1": {
            "school": 16,
            "la": 16,
            "wales": 19,
            "ctx": 16
          }
        },
        "male": {
          "1": {
            "school": 14,
            "la": 14,
            "wales": 17,
            "ctx": 14
          }
        },
        "fsm": {
          "1": {
            "school": 9,
            "la": 9,
            "wales": 11,
            "ctx": 9
          }
        },
        "nonfsm": {
          "1": {
            "school": 18,
            "la": 18,
            "wales": 22,
            "ctx": 18
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              16,
              14
            ],
            "la": [
              16,
              14
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              16,
              14
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              9,
              18
            ],
            "la": [
              9,
              18
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              9,
              18
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 24,
            "la": 26,
            "wales": 34,
            "ctx": 26
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              21,
              23,
              24
            ],
            "la": [
              23,
              24,
              26
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              23,
              24,
              26
            ]
          }
        },
        "female": {
          "1": {
            "school": 26,
            "la": 28,
            "wales": 37,
            "ctx": 28
          }
        },
        "male": {
          "1": {
            "school": 22,
            "la": 24,
            "wales": 31,
            "ctx": 24
          }
        },
        "fsm": {
          "1": {
            "school": 15,
            "la": 16,
            "wales": 21,
            "ctx": 16
          }
        },
        "nonfsm": {
          "1": {
            "school": 29,
            "la": 32,
            "wales": 41,
            "ctx": 32
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              26,
              22
            ],
            "la": [
              28,
              24
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              28,
              24
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              15,
              29
            ],
            "la": [
              16,
              32
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              16,
              32
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 33,
            "la": 35,
            "wales": 47,
            "ctx": 35
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              29,
              31,
              33
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              31,
              33,
              35
            ]
          }
        },
        "female": {
          "1": {
            "school": 36,
            "la": 38,
            "wales": 51,
            "ctx": 38
          }
        },
        "male": {
          "1": {
            "school": 30,
            "la": 32,
            "wales": 43,
            "ctx": 32
          }
        },
        "fsm": {
          "1": {
            "school": 20,
            "la": 22,
            "wales": 29,
            "ctx": 22
          }
        },
        "nonfsm": {
          "1": {
            "school": 40,
            "la": 43,
            "wales": 57,
            "ctx": 43
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              36,
              30
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              38,
              32
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              20,
              40
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              22,
              43
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 39,
            "la": 41,
            "wales": 61,
            "ctx": 42
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              34,
              37,
              39
            ],
            "la": [
              36,
              39,
              41
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              37,
              39,
              42
            ]
          }
        },
        "female": {
          "1": {
            "school": 42,
            "la": 44,
            "wales": 66,
            "ctx": 45
          }
        },
        "male": {
          "1": {
            "school": 36,
            "la": 38,
            "wales": 56,
            "ctx": 39
          }
        },
        "fsm": {
          "1": {
            "school": 24,
            "la": 25,
            "wales": 38,
            "ctx": 26
          }
        },
        "nonfsm": {
          "1": {
            "school": 48,
            "la": 50,
            "wales": 74,
            "ctx": 51
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              42,
              36
            ],
            "la": [
              44,
              38
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              45,
              39
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              24,
              48
            ],
            "la": [
              25,
              50
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              26,
              51
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 44,
            "la": 46,
            "wales": 71,
            "ctx": 47
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              39,
              41,
              44
            ],
            "la": [
              40,
              43,
              46
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              41,
              44,
              47
            ]
          }
        },
        "female": {
          "1": {
            "school": 48,
            "la": 50,
            "wales": 77,
            "ctx": 51
          }
        },
        "male": {
          "1": {
            "school": 40,
            "la": 42,
            "wales": 65,
            "ctx": 43
          }
        },
        "fsm": {
          "1": {
            "school": 27,
            "la": 29,
            "wales": 44,
            "ctx": 29
          }
        },
        "nonfsm": {
          "1": {
            "school": 54,
            "la": 56,
            "wales": 87,
            "ctx": 57
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              48,
              40
            ],
            "la": [
              50,
              42
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              51,
              43
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              27,
              54
            ],
            "la": [
              29,
              56
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              29,
              57
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 48,
            "la": 51,
            "wales": 80,
            "ctx": 51
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              42,
              45,
              48
            ],
            "la": [
              45,
              48,
              51
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              45,
              48,
              51
            ]
          }
        },
        "female": {
          "1": {
            "school": 52,
            "la": 55,
            "wales": 86,
            "ctx": 55
          }
        },
        "male": {
          "1": {
            "school": 44,
            "la": 47,
            "wales": 74,
            "ctx": 47
          }
        },
        "fsm": {
          "1": {
            "school": 30,
            "la": 32,
            "wales": 50,
            "ctx": 32
          }
        },
        "nonfsm": {
          "1": {
            "school": 59,
            "la": 62,
            "wales": 98,
            "ctx": 62
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              52,
              44
            ],
            "la": [
              55,
              47
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              55,
              47
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              30,
              59
            ],
            "la": [
              32,
              62
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              32,
              62
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 51,
            "la": 54,
            "wales": 87,
            "ctx": 54
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              45,
              48,
              51
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              48,
              51,
              54
            ]
          }
        },
        "female": {
          "1": {
            "school": 55,
            "la": 58,
            "wales": 94,
            "ctx": 58
          }
        },
        "male": {
          "1": {
            "school": 47,
            "la": 50,
            "wales": 80,
            "ctx": 50
          }
        },
        "fsm": {
          "1": {
            "school": 32,
            "la": 33,
            "wales": 54,
            "ctx": 33
          }
        },
        "nonfsm": {
          "1": {
            "school": 62,
            "la": 66,
            "wales": 106,
            "ctx": 66
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              55,
              47
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              58,
              50
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              32,
              62
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              33,
              66
            ]
          }
        }
      }
    }
  },
  "llanhari": {
    "urn": "WG100007",
    "name": "Ysgol Llanhari",
    "la": "rct",
    "phase": "Secondary",
    "language": "Welsh medium",
    "type": "Voluntary Aided",
    "postcode": "CF72 9GG",
    "lat": 51.541,
    "lng": -3.437,
    "phone": "01443 100051",
    "email": "llanhari@rct.gov.uk",
    "website": "llanhari.cymru",
    "estynUrl": "#",
    "totalPupils": 798,
    "teacherFTE": 52.8,
    "ptr": 15.1,
    "budgetPerPupil": 6280,
    "financialReserves": 108000,
    "fsm3yr": 12.4,
    "bame": 2.8,
    "eal": 0.6,
    "attendance": {
      "overall": {
        "1": {
          "school": 94.2,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 93.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            88.6,
            90,
            91.4,
            92.8,
            94.2
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            89.2,
            90.3,
            91.4,
            92.5,
            93.6
          ]
        }
      },
      "pa": {
        "1": {
          "school": 15.8,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 17.3
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            20.6,
            19.4,
            18.2,
            17,
            15.8
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            21.3,
            20.3,
            19.3,
            18.3,
            17.3
          ]
        }
      },
      "auth": {
        "1": {
          "school": 3.6,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 3.7
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3,
            3.2,
            3.3,
            3.5,
            3.6
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.1,
            3.3,
            3.4,
            3.6,
            3.7
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 1.4,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 1.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            0.2,
            0.5,
            0.8,
            1.1,
            1.4
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            0.5,
            0.8,
            1,
            1.3,
            1.6
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 86,
          "auth": 4.8,
          "unauth": 3.2,
          "pa": 26,
          "ctx": 85.2
        },
        "nonfsm": {
          "attendance": 98,
          "auth": 3,
          "unauth": 0.6,
          "pa": 11.6,
          "ctx": 97.2
        },
        "female": {
          "attendance": 95.6,
          "auth": 3.2,
          "unauth": 0.8,
          "pa": 13,
          "ctx": 94.8
        },
        "male": {
          "attendance": 93,
          "auth": 4,
          "unauth": 2,
          "pa": 18.6,
          "ctx": 92.4
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 78,
          "male": 70
        },
        "year8": {
          "female": 79,
          "male": 75
        },
        "year9": {
          "female": 78,
          "male": 86
        },
        "year10": {
          "female": 87,
          "male": 85
        },
        "year11": {
          "female": 92,
          "male": 84
        }
      },
      "fsm": {
        "2022-23": 11.8,
        "2023-24": 12.1,
        "2024-25": 12.4
      },
      "aln": {
        "schoolAction": {
          "2022-23": 3.5,
          "2023-24": 3.7,
          "2024-25": 4
        },
        "schoolActionPlus": {
          "2022-23": 1.5,
          "2023-24": 1.6,
          "2024-25": 1.7
        },
        "statement": {
          "2022-23": 0.7,
          "2023-24": 0.8,
          "2024-25": 0.9
        }
      },
      "eal": 0.6,
      "bame": 2.8
    },
    "entries": {
      "all": {
        "1": {
          "school": 69,
          "la": 57,
          "wales": 62,
          "ctx": 67
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            63,
            66,
            69
          ],
          "la": [
            52,
            55,
            57
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            62,
            64,
            67
          ]
        }
      },
      "female": {
        "1": {
          "school": 74,
          "la": 61,
          "wales": 66,
          "ctx": 72
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            68,
            71,
            74
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            66,
            69,
            72
          ]
        }
      },
      "male": {
        "1": {
          "school": 64,
          "la": 53,
          "wales": 58,
          "ctx": 62
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            59,
            61,
            64
          ],
          "la": [
            48,
            51,
            53
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            57,
            60,
            62
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 51,
          "la": 42,
          "wales": 46,
          "ctx": 49
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            47,
            49,
            51
          ],
          "la": [
            37,
            39,
            42
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            44,
            46,
            49
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 77,
          "la": 65,
          "wales": 70,
          "ctx": 76
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            71,
            74,
            77
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            71,
            74,
            76
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            74,
            64
          ],
          "la": [
            61,
            53
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            72,
            62
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              68,
              71,
              74
            ],
            "b": [
              59,
              61,
              64
            ]
          },
          "la": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              66,
              69,
              72
            ],
            "b": [
              57,
              60,
              62
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            51,
            77
          ],
          "la": [
            42,
            65
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            49,
            76
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              47,
              49,
              51
            ],
            "b": [
              71,
              74,
              77
            ]
          },
          "la": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              44,
              46,
              49
            ],
            "b": [
              71,
              74,
              76
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 7,
            "la": 6,
            "wales": 7,
            "ctx": 7
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              6,
              7,
              7
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              6,
              7,
              7
            ]
          }
        },
        "female": {
          "1": {
            "school": 8,
            "la": 6,
            "wales": 8,
            "ctx": 8
          }
        },
        "male": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 4,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 9,
            "la": 7,
            "wales": 9,
            "ctx": 9
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              8,
              6
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              8,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              4,
              9
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              9
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 19,
            "la": 15,
            "wales": 18,
            "ctx": 18
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              17,
              18,
              19
            ],
            "la": [
              13,
              14,
              15
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              16,
              17,
              18
            ]
          }
        },
        "female": {
          "1": {
            "school": 21,
            "la": 16,
            "wales": 19,
            "ctx": 19
          }
        },
        "male": {
          "1": {
            "school": 17,
            "la": 14,
            "wales": 17,
            "ctx": 17
          }
        },
        "fsm": {
          "1": {
            "school": 12,
            "la": 9,
            "wales": 11,
            "ctx": 11
          }
        },
        "nonfsm": {
          "1": {
            "school": 23,
            "la": 18,
            "wales": 22,
            "ctx": 22
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              21,
              17
            ],
            "la": [
              16,
              14
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              19,
              17
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              12,
              23
            ],
            "la": [
              9,
              18
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              11,
              22
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 31,
            "la": 26,
            "wales": 34,
            "ctx": 30
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              27,
              29,
              31
            ],
            "la": [
              23,
              24,
              26
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              26,
              28,
              30
            ]
          }
        },
        "female": {
          "1": {
            "school": 33,
            "la": 28,
            "wales": 37,
            "ctx": 32
          }
        },
        "male": {
          "1": {
            "school": 29,
            "la": 24,
            "wales": 31,
            "ctx": 28
          }
        },
        "fsm": {
          "1": {
            "school": 19,
            "la": 16,
            "wales": 21,
            "ctx": 19
          }
        },
        "nonfsm": {
          "1": {
            "school": 38,
            "la": 32,
            "wales": 41,
            "ctx": 37
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              33,
              29
            ],
            "la": [
              28,
              24
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              32,
              28
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              19,
              38
            ],
            "la": [
              16,
              32
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              19,
              37
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 42,
            "la": 35,
            "wales": 47,
            "ctx": 41
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              37,
              39,
              42
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              36,
              39,
              41
            ]
          }
        },
        "female": {
          "1": {
            "school": 45,
            "la": 38,
            "wales": 51,
            "ctx": 44
          }
        },
        "male": {
          "1": {
            "school": 39,
            "la": 32,
            "wales": 43,
            "ctx": 38
          }
        },
        "fsm": {
          "1": {
            "school": 26,
            "la": 22,
            "wales": 29,
            "ctx": 25
          }
        },
        "nonfsm": {
          "1": {
            "school": 51,
            "la": 43,
            "wales": 57,
            "ctx": 50
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              45,
              39
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              44,
              38
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              26,
              51
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              25,
              50
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 50,
            "la": 41,
            "wales": 61,
            "ctx": 49
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              44,
              47,
              50
            ],
            "la": [
              36,
              39,
              41
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              43,
              46,
              49
            ]
          }
        },
        "female": {
          "1": {
            "school": 54,
            "la": 44,
            "wales": 66,
            "ctx": 53
          }
        },
        "male": {
          "1": {
            "school": 46,
            "la": 38,
            "wales": 56,
            "ctx": 45
          }
        },
        "fsm": {
          "1": {
            "school": 31,
            "la": 25,
            "wales": 38,
            "ctx": 30
          }
        },
        "nonfsm": {
          "1": {
            "school": 61,
            "la": 50,
            "wales": 74,
            "ctx": 60
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              54,
              46
            ],
            "la": [
              44,
              38
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              53,
              45
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              31,
              61
            ],
            "la": [
              25,
              50
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              30,
              60
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 57,
            "la": 46,
            "wales": 71,
            "ctx": 55
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              50,
              54,
              57
            ],
            "la": [
              40,
              43,
              46
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              48,
              52,
              55
            ]
          }
        },
        "female": {
          "1": {
            "school": 62,
            "la": 50,
            "wales": 77,
            "ctx": 59
          }
        },
        "male": {
          "1": {
            "school": 52,
            "la": 42,
            "wales": 65,
            "ctx": 51
          }
        },
        "fsm": {
          "1": {
            "school": 35,
            "la": 29,
            "wales": 44,
            "ctx": 34
          }
        },
        "nonfsm": {
          "1": {
            "school": 70,
            "la": 56,
            "wales": 87,
            "ctx": 67
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              62,
              52
            ],
            "la": [
              50,
              42
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              59,
              51
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              35,
              70
            ],
            "la": [
              29,
              56
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              34,
              67
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 61,
            "la": 51,
            "wales": 80,
            "ctx": 60
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              54,
              57,
              61
            ],
            "la": [
              45,
              48,
              51
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              53,
              56,
              60
            ]
          }
        },
        "female": {
          "1": {
            "school": 66,
            "la": 55,
            "wales": 86,
            "ctx": 65
          }
        },
        "male": {
          "1": {
            "school": 56,
            "la": 47,
            "wales": 74,
            "ctx": 55
          }
        },
        "fsm": {
          "1": {
            "school": 38,
            "la": 32,
            "wales": 50,
            "ctx": 37
          }
        },
        "nonfsm": {
          "1": {
            "school": 74,
            "la": 62,
            "wales": 98,
            "ctx": 73
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              66,
              56
            ],
            "la": [
              55,
              47
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              65,
              55
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              38,
              74
            ],
            "la": [
              32,
              62
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              37,
              73
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 66,
            "la": 54,
            "wales": 87,
            "ctx": 64
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              58,
              62,
              66
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              56,
              60,
              64
            ]
          }
        },
        "female": {
          "1": {
            "school": 71,
            "la": 58,
            "wales": 94,
            "ctx": 69
          }
        },
        "male": {
          "1": {
            "school": 61,
            "la": 50,
            "wales": 80,
            "ctx": 59
          }
        },
        "fsm": {
          "1": {
            "school": 41,
            "la": 33,
            "wales": 54,
            "ctx": 40
          }
        },
        "nonfsm": {
          "1": {
            "school": 81,
            "la": 66,
            "wales": 106,
            "ctx": 78
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              71,
              61
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              69,
              59
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              41,
              81
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              40,
              78
            ]
          }
        }
      }
    }
  },
  "cwmtaff": {
    "urn": "WG100008",
    "name": "Ysgol Gynradd Cwmtaff",
    "la": "rct",
    "phase": "Primary",
    "language": "Welsh medium",
    "type": "Community school",
    "postcode": "CF48 9HH",
    "lat": 51.752,
    "lng": -3.368,
    "phone": "01443 100058",
    "email": "cwmtaff@rct.gov.uk",
    "website": "cwmtaff.cymru",
    "estynUrl": "#",
    "totalPupils": 214,
    "teacherFTE": 10.4,
    "ptr": 20.6,
    "budgetPerPupil": 5840,
    "financialReserves": 24000,
    "fsm3yr": 19.4,
    "bame": 2.1,
    "eal": 0.4,
    "attendance": {
      "overall": {
        "1": {
          "school": 94.8,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 94.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            89.2,
            90.6,
            92,
            93.4,
            94.8
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            90.4,
            91.5,
            92.6,
            93.7,
            94.8
          ]
        }
      },
      "pa": {
        "1": {
          "school": 12.4,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 12.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            17.2,
            16,
            14.8,
            13.6,
            12.4
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            16.4,
            15.4,
            14.4,
            13.4,
            12.4
          ]
        }
      },
      "auth": {
        "1": {
          "school": 3.5,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 3.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            2.9,
            3.1,
            3.2,
            3.4,
            3.5
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            2.9,
            3.1,
            3.2,
            3.4,
            3.5
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 1.2,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 1.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            0,
            0.3,
            0.6,
            0.9,
            1.2
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            0.1,
            0.4,
            0.6,
            0.9,
            1.2
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 86.6,
          "auth": 4.7,
          "unauth": 3,
          "pa": 22.6,
          "ctx": 86.4
        },
        "nonfsm": {
          "attendance": 98.6,
          "auth": 2.9,
          "unauth": 0.4,
          "pa": 8.2,
          "ctx": 98.4
        },
        "female": {
          "attendance": 96.2,
          "auth": 3.1,
          "unauth": 0.6,
          "pa": 9.6,
          "ctx": 96
        },
        "male": {
          "attendance": 93.6,
          "auth": 3.9,
          "unauth": 1.8,
          "pa": 15.2,
          "ctx": 93.6
        }
      }
    },
    "pupils": {
      "byYear": null,
      "fsm": {
        "2022-23": 18.8,
        "2023-24": 19.1,
        "2024-25": 19.4
      },
      "aln": {
        "schoolAction": {
          "2022-23": 5.4,
          "2023-24": 5.8,
          "2024-25": 6.2
        },
        "schoolActionPlus": {
          "2022-23": 2.3,
          "2023-24": 2.5,
          "2024-25": 2.7
        },
        "statement": {
          "2022-23": 1.2,
          "2023-24": 1.3,
          "2024-25": 1.4
        }
      },
      "eal": 0.4,
      "bame": 2.1
    },
    "entries": null,
    "outcomes": null
  },
  "hirwaun": {
    "urn": "WG100009",
    "name": "Hirwaun Primary School",
    "la": "rct",
    "phase": "Primary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF44 9JJ",
    "lat": 51.736,
    "lng": -3.509,
    "phone": "01443 100065",
    "email": "hirwaun@rct.gov.uk",
    "website": "hirwaun.cymru",
    "estynUrl": "#",
    "totalPupils": 312,
    "teacherFTE": 14.8,
    "ptr": 21.1,
    "budgetPerPupil": 5760,
    "financialReserves": 31000,
    "fsm3yr": 28.4,
    "bame": 3.4,
    "eal": 1,
    "attendance": {
      "overall": {
        "1": {
          "school": 91.6,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 92.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            86,
            87.4,
            88.8,
            90.2,
            91.6
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            88,
            89.1,
            90.2,
            91.3,
            92.4
          ]
        }
      },
      "pa": {
        "1": {
          "school": 19.2,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 16.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            24,
            22.8,
            21.6,
            20.4,
            19.2
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            20.8,
            19.8,
            18.8,
            17.8,
            16.8
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.1,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.4,
            3.6,
            3.7,
            3.9,
            4
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 2.2,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 1.9
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            1,
            1.3,
            1.6,
            1.9,
            2.2
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            0.8,
            1.1,
            1.3,
            1.6,
            1.9
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 83.4,
          "auth": 5.3,
          "unauth": 4,
          "pa": 29.4,
          "ctx": 84
        },
        "nonfsm": {
          "attendance": 95.4,
          "auth": 3.5,
          "unauth": 1.4,
          "pa": 15,
          "ctx": 96
        },
        "female": {
          "attendance": 93,
          "auth": 3.7,
          "unauth": 1.6,
          "pa": 16.4,
          "ctx": 93.6
        },
        "male": {
          "attendance": 90.4,
          "auth": 4.5,
          "unauth": 2.8,
          "pa": 22,
          "ctx": 91.2
        }
      }
    },
    "pupils": {
      "byYear": null,
      "fsm": {
        "2022-23": 27.8,
        "2023-24": 28.1,
        "2024-25": 28.4
      },
      "aln": {
        "schoolAction": {
          "2022-23": 8,
          "2023-24": 8.5,
          "2024-25": 9.1
        },
        "schoolActionPlus": {
          "2022-23": 3.4,
          "2023-24": 3.7,
          "2024-25": 4
        },
        "statement": {
          "2022-23": 1.7,
          "2023-24": 1.8,
          "2024-25": 2
        }
      },
      "eal": 1,
      "bame": 3.4
    },
    "entries": null,
    "outcomes": null
  },
  "penrhys": {
    "urn": "WG100010",
    "name": "Penrhys Special School",
    "la": "rct",
    "phase": "Special",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF43 9KK",
    "lat": 51.657,
    "lng": -3.477,
    "phone": "01443 100073",
    "email": "penrhys@rct.gov.uk",
    "website": "penrhys.cymru",
    "estynUrl": "#",
    "totalPupils": 98,
    "teacherFTE": 14.2,
    "ptr": 6.9,
    "budgetPerPupil": 14200,
    "financialReserves": 18000,
    "fsm3yr": 62.4,
    "bame": 8.2,
    "eal": 2.4,
    "attendance": {
      "overall": {
        "1": {
          "school": 88.2,
          "la": 90.4,
          "wales": 91.8,
          "ctx": 88.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            82.6,
            84,
            85.4,
            86.8,
            88.2
          ],
          "la": [
            85.6,
            86.8,
            88,
            89.2,
            90.4
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            83.8,
            84.9,
            86,
            87.1,
            88.2
          ]
        }
      },
      "pa": {
        "1": {
          "school": 24.8,
          "la": 21.7,
          "wales": 17.1,
          "ctx": 24.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            29.6,
            28.4,
            27.2,
            26,
            24.8
          ],
          "la": [
            25.7,
            24.7,
            23.7,
            22.7,
            21.7
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            28.8,
            27.8,
            26.8,
            25.8,
            24.8
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.8,
          "la": 4.4,
          "wales": 4.1,
          "ctx": 4.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            4.2,
            4.4,
            4.5,
            4.6,
            4.8
          ],
          "la": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            4.2,
            4.4,
            4.5,
            4.6,
            4.8
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 3.2,
          "la": 2.5,
          "wales": 2.1,
          "ctx": 3.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            2,
            2.3,
            2.6,
            2.9,
            3.2
          ],
          "la": [
            1.5,
            1.8,
            2,
            2.3,
            2.5
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            2.1,
            2.4,
            2.6,
            2.9,
            3.2
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 80,
          "auth": 6,
          "unauth": 5,
          "pa": 35,
          "ctx": 79.8
        },
        "nonfsm": {
          "attendance": 92,
          "auth": 4.2,
          "unauth": 2.4,
          "pa": 20.6,
          "ctx": 91.8
        },
        "female": {
          "attendance": 89.6,
          "auth": 4.4,
          "unauth": 2.6,
          "pa": 22,
          "ctx": 89.4
        },
        "male": {
          "attendance": 87,
          "auth": 5.2,
          "unauth": 3.8,
          "pa": 27.6,
          "ctx": 87
        }
      }
    },
    "pupils": {
      "byYear": null,
      "fsm": {
        "2022-23": 61.8,
        "2023-24": 62.1,
        "2024-25": 62.4
      },
      "aln": {
        "schoolAction": {
          "2022-23": 17.5,
          "2023-24": 18.7,
          "2024-25": 20
        },
        "schoolActionPlus": {
          "2022-23": 7.5,
          "2023-24": 8.1,
          "2024-25": 8.7
        },
        "statement": {
          "2022-23": 3.7,
          "2023-24": 4.1,
          "2024-25": 4.4
        }
      },
      "eal": 2.4,
      "bame": 8.2
    },
    "entries": null,
    "outcomes": null
  },
  "st-cenydd": {
    "urn": "WG200001",
    "name": "St Cenydd Comprehensive",
    "la": "caerphilly",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF83 9AA",
    "lat": 51.576,
    "lng": -3.218,
    "phone": "01443 100007",
    "email": "st-cenydd@caerphilly.gov.uk",
    "website": "stcenydd.cymru",
    "estynUrl": "#",
    "totalPupils": 1486,
    "teacherFTE": 98.2,
    "ptr": 15.1,
    "budgetPerPupil": 5980,
    "financialReserves": 248000,
    "fsm3yr": 20.4,
    "bame": 8.6,
    "eal": 4.2,
    "attendance": {
      "overall": {
        "1": {
          "school": 91.8,
          "la": 91.7,
          "wales": 91.8,
          "ctx": 90.3
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            86.2,
            87.6,
            89,
            90.4,
            91.8
          ],
          "la": [
            86.9,
            88.1,
            89.3,
            90.5,
            91.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            85.9,
            87,
            88.1,
            89.2,
            90.3
          ]
        }
      },
      "pa": {
        "1": {
          "school": 19.4,
          "la": 19.4,
          "wales": 17.1,
          "ctx": 21.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            24.2,
            23,
            21.8,
            20.6,
            19.4
          ],
          "la": [
            23.4,
            22.4,
            21.4,
            20.4,
            19.4
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            25.6,
            24.6,
            23.6,
            22.6,
            21.6
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.1,
          "la": 4.1,
          "wales": 4.1,
          "ctx": 4.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "la": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 2.1,
          "la": 2.1,
          "wales": 2.1,
          "ctx": 2.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            0.9,
            1.2,
            1.5,
            1.8,
            2.1
          ],
          "la": [
            1.1,
            1.4,
            1.6,
            1.9,
            2.1
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            1.5,
            1.8,
            2,
            2.3,
            2.6
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 83.6,
          "auth": 5.3,
          "unauth": 3.9,
          "pa": 29.6,
          "ctx": 81.9
        },
        "nonfsm": {
          "attendance": 95.6,
          "auth": 3.5,
          "unauth": 1.3,
          "pa": 15.2,
          "ctx": 93.9
        },
        "female": {
          "attendance": 93.2,
          "auth": 3.7,
          "unauth": 1.5,
          "pa": 16.6,
          "ctx": 91.5
        },
        "male": {
          "attendance": 90.6,
          "auth": 4.5,
          "unauth": 2.7,
          "pa": 22.2,
          "ctx": 89.1
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 141,
          "male": 133
        },
        "year8": {
          "female": 145,
          "male": 141
        },
        "year9": {
          "female": 147,
          "male": 155
        },
        "year10": {
          "female": 159,
          "male": 157
        },
        "year11": {
          "female": 167,
          "male": 159
        }
      },
      "fsm": {
        "2022-23": 19.8,
        "2023-24": 20.1,
        "2024-25": 20.4
      },
      "aln": {
        "schoolAction": {
          "2022-23": 5.7,
          "2023-24": 6.1,
          "2024-25": 6.5
        },
        "schoolActionPlus": {
          "2022-23": 2.4,
          "2023-24": 2.7,
          "2024-25": 2.9
        },
        "statement": {
          "2022-23": 1.2,
          "2023-24": 1.3,
          "2024-25": 1.4
        }
      },
      "eal": 4.2,
      "bame": 8.6
    },
    "entries": {
      "all": {
        "1": {
          "school": 61,
          "la": 61,
          "wales": 62,
          "ctx": 56
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            56,
            59,
            61
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            52,
            54,
            56
          ]
        }
      },
      "female": {
        "1": {
          "school": 65,
          "la": 65,
          "wales": 66,
          "ctx": 60
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            60,
            62,
            65
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            55,
            58,
            60
          ]
        }
      },
      "male": {
        "1": {
          "school": 57,
          "la": 57,
          "wales": 58,
          "ctx": 52
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            52,
            55,
            57
          ],
          "la": [
            52,
            54,
            57
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            48,
            50,
            52
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 45,
          "la": 45,
          "wales": 46,
          "ctx": 41
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            41,
            43,
            45
          ],
          "la": [
            40,
            42,
            45
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            36,
            39,
            41
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 68,
          "la": 70,
          "wales": 70,
          "ctx": 64
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            63,
            65,
            68
          ],
          "la": [
            65,
            67,
            70
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            59,
            62,
            64
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            65,
            57
          ],
          "la": [
            65,
            57
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            60,
            52
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              60,
              62,
              65
            ],
            "b": [
              52,
              55,
              57
            ]
          },
          "la": {
            "a": [
              60,
              63,
              65
            ],
            "b": [
              52,
              54,
              57
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              55,
              58,
              60
            ],
            "b": [
              48,
              50,
              52
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            45,
            68
          ],
          "la": [
            45,
            70
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            41,
            64
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              41,
              43,
              45
            ],
            "b": [
              63,
              65,
              68
            ]
          },
          "la": {
            "a": [
              40,
              42,
              45
            ],
            "b": [
              65,
              67,
              70
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              36,
              39,
              41
            ],
            "b": [
              59,
              62,
              64
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 7,
            "ctx": 6
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              5,
              6,
              6
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              5,
              6,
              6
            ]
          }
        },
        "female": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 8,
            "ctx": 6
          }
        },
        "male": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 4,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 7,
            "la": 7,
            "wales": 9,
            "ctx": 7
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              6,
              6
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              6,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              4,
              7
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              7
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 16,
            "la": 16,
            "wales": 18,
            "ctx": 15
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              14,
              15,
              16
            ],
            "la": [
              14,
              15,
              16
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              13,
              14,
              15
            ]
          }
        },
        "female": {
          "1": {
            "school": 17,
            "la": 17,
            "wales": 19,
            "ctx": 16
          }
        },
        "male": {
          "1": {
            "school": 15,
            "la": 15,
            "wales": 17,
            "ctx": 14
          }
        },
        "fsm": {
          "1": {
            "school": 10,
            "la": 10,
            "wales": 11,
            "ctx": 9
          }
        },
        "nonfsm": {
          "1": {
            "school": 20,
            "la": 20,
            "wales": 22,
            "ctx": 18
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              17,
              15
            ],
            "la": [
              17,
              15
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              16,
              14
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              10,
              20
            ],
            "la": [
              10,
              20
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              9,
              18
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 27,
            "la": 27,
            "wales": 34,
            "ctx": 25
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              24,
              25,
              27
            ],
            "la": [
              24,
              25,
              27
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              22,
              24,
              25
            ]
          }
        },
        "female": {
          "1": {
            "school": 29,
            "la": 29,
            "wales": 37,
            "ctx": 27
          }
        },
        "male": {
          "1": {
            "school": 25,
            "la": 25,
            "wales": 31,
            "ctx": 23
          }
        },
        "fsm": {
          "1": {
            "school": 17,
            "la": 17,
            "wales": 21,
            "ctx": 16
          }
        },
        "nonfsm": {
          "1": {
            "school": 33,
            "la": 33,
            "wales": 41,
            "ctx": 31
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              29,
              25
            ],
            "la": [
              29,
              25
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              27,
              23
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              17,
              33
            ],
            "la": [
              17,
              33
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              16,
              31
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 37,
            "la": 37,
            "wales": 47,
            "ctx": 34
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              33,
              35,
              37
            ],
            "la": [
              33,
              35,
              37
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              30,
              32,
              34
            ]
          }
        },
        "female": {
          "1": {
            "school": 40,
            "la": 40,
            "wales": 51,
            "ctx": 37
          }
        },
        "male": {
          "1": {
            "school": 34,
            "la": 34,
            "wales": 43,
            "ctx": 31
          }
        },
        "fsm": {
          "1": {
            "school": 23,
            "la": 23,
            "wales": 29,
            "ctx": 21
          }
        },
        "nonfsm": {
          "1": {
            "school": 45,
            "la": 45,
            "wales": 57,
            "ctx": 41
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              40,
              34
            ],
            "la": [
              40,
              34
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              37,
              31
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              23,
              45
            ],
            "la": [
              23,
              45
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              21,
              41
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 45,
            "la": 45,
            "wales": 61,
            "ctx": 41
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              40,
              42,
              45
            ],
            "la": [
              40,
              42,
              45
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              36,
              39,
              41
            ]
          }
        },
        "female": {
          "1": {
            "school": 49,
            "la": 49,
            "wales": 66,
            "ctx": 44
          }
        },
        "male": {
          "1": {
            "school": 41,
            "la": 41,
            "wales": 56,
            "ctx": 38
          }
        },
        "fsm": {
          "1": {
            "school": 28,
            "la": 28,
            "wales": 38,
            "ctx": 25
          }
        },
        "nonfsm": {
          "1": {
            "school": 55,
            "la": 55,
            "wales": 74,
            "ctx": 50
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              49,
              41
            ],
            "la": [
              49,
              41
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              44,
              38
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              28,
              55
            ],
            "la": [
              28,
              55
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              25,
              50
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 50,
            "la": 50,
            "wales": 71,
            "ctx": 45
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              44,
              47,
              50
            ],
            "la": [
              44,
              47,
              50
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              40,
              42,
              45
            ]
          }
        },
        "female": {
          "1": {
            "school": 54,
            "la": 54,
            "wales": 77,
            "ctx": 49
          }
        },
        "male": {
          "1": {
            "school": 46,
            "la": 46,
            "wales": 65,
            "ctx": 41
          }
        },
        "fsm": {
          "1": {
            "school": 31,
            "la": 31,
            "wales": 44,
            "ctx": 28
          }
        },
        "nonfsm": {
          "1": {
            "school": 61,
            "la": 61,
            "wales": 87,
            "ctx": 55
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              54,
              46
            ],
            "la": [
              54,
              46
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              49,
              41
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              31,
              61
            ],
            "la": [
              31,
              61
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              28,
              55
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 54,
            "la": 54,
            "wales": 80,
            "ctx": 50
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              48,
              51,
              54
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              44,
              47,
              50
            ]
          }
        },
        "female": {
          "1": {
            "school": 58,
            "la": 58,
            "wales": 86,
            "ctx": 54
          }
        },
        "male": {
          "1": {
            "school": 50,
            "la": 50,
            "wales": 74,
            "ctx": 46
          }
        },
        "fsm": {
          "1": {
            "school": 33,
            "la": 33,
            "wales": 50,
            "ctx": 31
          }
        },
        "nonfsm": {
          "1": {
            "school": 66,
            "la": 66,
            "wales": 98,
            "ctx": 61
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              58,
              50
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              54,
              46
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              33,
              66
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              31,
              61
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 58,
            "la": 58,
            "wales": 87,
            "ctx": 53
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              51,
              55,
              58
            ],
            "la": [
              51,
              55,
              58
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              47,
              50,
              53
            ]
          }
        },
        "female": {
          "1": {
            "school": 63,
            "la": 63,
            "wales": 94,
            "ctx": 57
          }
        },
        "male": {
          "1": {
            "school": 53,
            "la": 53,
            "wales": 80,
            "ctx": 49
          }
        },
        "fsm": {
          "1": {
            "school": 36,
            "la": 36,
            "wales": 54,
            "ctx": 33
          }
        },
        "nonfsm": {
          "1": {
            "school": 71,
            "la": 71,
            "wales": 106,
            "ctx": 65
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              63,
              53
            ],
            "la": [
              63,
              53
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              57,
              49
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              36,
              71
            ],
            "la": [
              36,
              71
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              33,
              65
            ]
          }
        }
      }
    }
  },
  "lewis": {
    "urn": "WG200002",
    "name": "Lewis School Pengam",
    "la": "caerphilly",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Foundation school",
    "postcode": "NP12 9BB",
    "lat": 51.647,
    "lng": -3.229,
    "phone": "01443 100014",
    "email": "lewis@caerphilly.gov.uk",
    "website": "lewis.cymru",
    "estynUrl": "#",
    "totalPupils": 1188,
    "teacherFTE": 78.6,
    "ptr": 15.1,
    "budgetPerPupil": 6120,
    "financialReserves": 188000,
    "fsm3yr": 15.8,
    "bame": 6.2,
    "eal": 3.4,
    "attendance": {
      "overall": {
        "1": {
          "school": 92.6,
          "la": 91.7,
          "wales": 91.8,
          "ctx": 89.3
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            87,
            88.4,
            89.8,
            91.2,
            92.6
          ],
          "la": [
            86.9,
            88.1,
            89.3,
            90.5,
            91.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            84.9,
            86,
            87.1,
            88.2,
            89.3
          ]
        }
      },
      "pa": {
        "1": {
          "school": 17.8,
          "la": 19.4,
          "wales": 17.1,
          "ctx": 22.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            22.6,
            21.4,
            20.2,
            19,
            17.8
          ],
          "la": [
            23.4,
            22.4,
            21.4,
            20.4,
            19.4
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            26.8,
            25.8,
            24.8,
            23.8,
            22.8
          ]
        }
      },
      "auth": {
        "1": {
          "school": 3.9,
          "la": 4.1,
          "wales": 4.1,
          "ctx": 4.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.3,
            3.5,
            3.6,
            3.8,
            3.9
          ],
          "la": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            4,
            4.1,
            4.3,
            4.4,
            4.6
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 1.9,
          "la": 2.1,
          "wales": 2.1,
          "ctx": 2.9
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            0.7,
            1,
            1.3,
            1.6,
            1.9
          ],
          "la": [
            1.1,
            1.4,
            1.6,
            1.9,
            2.1
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            1.8,
            2.1,
            2.3,
            2.6,
            2.9
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 84.4,
          "auth": 5.1,
          "unauth": 3.7,
          "pa": 28,
          "ctx": 80.9
        },
        "nonfsm": {
          "attendance": 96.4,
          "auth": 3.3,
          "unauth": 1.1,
          "pa": 13.6,
          "ctx": 92.9
        },
        "female": {
          "attendance": 94,
          "auth": 3.5,
          "unauth": 1.3,
          "pa": 15,
          "ctx": 90.5
        },
        "male": {
          "attendance": 91.4,
          "auth": 4.3,
          "unauth": 2.5,
          "pa": 20.6,
          "ctx": 88.1
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 113,
          "male": 105
        },
        "year8": {
          "female": 116,
          "male": 112
        },
        "year9": {
          "female": 117,
          "male": 125
        },
        "year10": {
          "female": 128,
          "male": 126
        },
        "year11": {
          "female": 135,
          "male": 127
        }
      },
      "fsm": {
        "2022-23": 15.2,
        "2023-24": 15.5,
        "2024-25": 15.8
      },
      "aln": {
        "schoolAction": {
          "2022-23": 4.4,
          "2023-24": 4.7,
          "2024-25": 5.1
        },
        "schoolActionPlus": {
          "2022-23": 1.9,
          "2023-24": 2.1,
          "2024-25": 2.2
        },
        "statement": {
          "2022-23": 0.9,
          "2023-24": 1,
          "2024-25": 1.1
        }
      },
      "eal": 3.4,
      "bame": 6.2
    },
    "entries": {
      "all": {
        "1": {
          "school": 64,
          "la": 61,
          "wales": 62,
          "ctx": 57
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            59,
            61,
            64
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            52,
            55,
            57
          ]
        }
      },
      "female": {
        "1": {
          "school": 68,
          "la": 65,
          "wales": 66,
          "ctx": 61
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            63,
            65,
            68
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            56,
            59,
            61
          ]
        }
      },
      "male": {
        "1": {
          "school": 60,
          "la": 57,
          "wales": 58,
          "ctx": 53
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            55,
            58,
            60
          ],
          "la": [
            52,
            54,
            57
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            48,
            51,
            53
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 47,
          "la": 45,
          "wales": 46,
          "ctx": 42
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            43,
            45,
            47
          ],
          "la": [
            40,
            42,
            45
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            37,
            39,
            42
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 72,
          "la": 70,
          "wales": 70,
          "ctx": 65
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            66,
            69,
            72
          ],
          "la": [
            65,
            67,
            70
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            60,
            63,
            65
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            68,
            60
          ],
          "la": [
            65,
            57
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            61,
            53
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              63,
              65,
              68
            ],
            "b": [
              55,
              58,
              60
            ]
          },
          "la": {
            "a": [
              60,
              63,
              65
            ],
            "b": [
              52,
              54,
              57
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            47,
            72
          ],
          "la": [
            45,
            70
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            42,
            65
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              43,
              45,
              47
            ],
            "b": [
              66,
              69,
              72
            ]
          },
          "la": {
            "a": [
              40,
              42,
              45
            ],
            "b": [
              65,
              67,
              70
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 7,
            "ctx": 6
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              5,
              6,
              6
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              5,
              6,
              6
            ]
          }
        },
        "female": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 8,
            "ctx": 6
          }
        },
        "male": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 4,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 7,
            "la": 7,
            "wales": 9,
            "ctx": 7
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              6,
              6
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              6,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              4,
              7
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              7
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 17,
            "la": 16,
            "wales": 18,
            "ctx": 15
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              15,
              16,
              17
            ],
            "la": [
              14,
              15,
              16
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              13,
              14,
              15
            ]
          }
        },
        "female": {
          "1": {
            "school": 18,
            "la": 17,
            "wales": 19,
            "ctx": 16
          }
        },
        "male": {
          "1": {
            "school": 16,
            "la": 15,
            "wales": 17,
            "ctx": 14
          }
        },
        "fsm": {
          "1": {
            "school": 11,
            "la": 10,
            "wales": 11,
            "ctx": 9
          }
        },
        "nonfsm": {
          "1": {
            "school": 21,
            "la": 20,
            "wales": 22,
            "ctx": 18
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              18,
              16
            ],
            "la": [
              17,
              15
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              16,
              14
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              11,
              21
            ],
            "la": [
              10,
              20
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              9,
              18
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 29,
            "la": 27,
            "wales": 34,
            "ctx": 26
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              26,
              27,
              29
            ],
            "la": [
              24,
              25,
              27
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              23,
              24,
              26
            ]
          }
        },
        "female": {
          "1": {
            "school": 31,
            "la": 29,
            "wales": 37,
            "ctx": 28
          }
        },
        "male": {
          "1": {
            "school": 27,
            "la": 25,
            "wales": 31,
            "ctx": 24
          }
        },
        "fsm": {
          "1": {
            "school": 18,
            "la": 17,
            "wales": 21,
            "ctx": 16
          }
        },
        "nonfsm": {
          "1": {
            "school": 35,
            "la": 33,
            "wales": 41,
            "ctx": 32
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              31,
              27
            ],
            "la": [
              29,
              25
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              28,
              24
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              18,
              35
            ],
            "la": [
              17,
              33
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              16,
              32
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 39,
            "la": 37,
            "wales": 47,
            "ctx": 35
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              34,
              37,
              39
            ],
            "la": [
              33,
              35,
              37
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              31,
              33,
              35
            ]
          }
        },
        "female": {
          "1": {
            "school": 42,
            "la": 40,
            "wales": 51,
            "ctx": 38
          }
        },
        "male": {
          "1": {
            "school": 36,
            "la": 34,
            "wales": 43,
            "ctx": 32
          }
        },
        "fsm": {
          "1": {
            "school": 24,
            "la": 23,
            "wales": 29,
            "ctx": 22
          }
        },
        "nonfsm": {
          "1": {
            "school": 48,
            "la": 45,
            "wales": 57,
            "ctx": 43
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              42,
              36
            ],
            "la": [
              40,
              34
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              38,
              32
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              24,
              48
            ],
            "la": [
              23,
              45
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              22,
              43
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 47,
            "la": 45,
            "wales": 61,
            "ctx": 42
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              41,
              44,
              47
            ],
            "la": [
              40,
              42,
              45
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              37,
              39,
              42
            ]
          }
        },
        "female": {
          "1": {
            "school": 51,
            "la": 49,
            "wales": 66,
            "ctx": 45
          }
        },
        "male": {
          "1": {
            "school": 43,
            "la": 41,
            "wales": 56,
            "ctx": 39
          }
        },
        "fsm": {
          "1": {
            "school": 29,
            "la": 28,
            "wales": 38,
            "ctx": 26
          }
        },
        "nonfsm": {
          "1": {
            "school": 57,
            "la": 55,
            "wales": 74,
            "ctx": 51
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              51,
              43
            ],
            "la": [
              49,
              41
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              45,
              39
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              29,
              57
            ],
            "la": [
              28,
              55
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              26,
              51
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 52,
            "la": 50,
            "wales": 71,
            "ctx": 47
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              46,
              49,
              52
            ],
            "la": [
              44,
              47,
              50
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              41,
              44,
              47
            ]
          }
        },
        "female": {
          "1": {
            "school": 56,
            "la": 54,
            "wales": 77,
            "ctx": 51
          }
        },
        "male": {
          "1": {
            "school": 48,
            "la": 46,
            "wales": 65,
            "ctx": 43
          }
        },
        "fsm": {
          "1": {
            "school": 32,
            "la": 31,
            "wales": 44,
            "ctx": 29
          }
        },
        "nonfsm": {
          "1": {
            "school": 63,
            "la": 61,
            "wales": 87,
            "ctx": 57
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              56,
              48
            ],
            "la": [
              54,
              46
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              51,
              43
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              32,
              63
            ],
            "la": [
              31,
              61
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              29,
              57
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 57,
            "la": 54,
            "wales": 80,
            "ctx": 51
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              50,
              54,
              57
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              45,
              48,
              51
            ]
          }
        },
        "female": {
          "1": {
            "school": 62,
            "la": 58,
            "wales": 86,
            "ctx": 55
          }
        },
        "male": {
          "1": {
            "school": 52,
            "la": 50,
            "wales": 74,
            "ctx": 47
          }
        },
        "fsm": {
          "1": {
            "school": 35,
            "la": 33,
            "wales": 50,
            "ctx": 32
          }
        },
        "nonfsm": {
          "1": {
            "school": 70,
            "la": 66,
            "wales": 98,
            "ctx": 62
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              62,
              52
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              55,
              47
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              35,
              70
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              32,
              62
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 61,
            "la": 58,
            "wales": 87,
            "ctx": 54
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              54,
              57,
              61
            ],
            "la": [
              51,
              55,
              58
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              48,
              51,
              54
            ]
          }
        },
        "female": {
          "1": {
            "school": 66,
            "la": 63,
            "wales": 94,
            "ctx": 58
          }
        },
        "male": {
          "1": {
            "school": 56,
            "la": 53,
            "wales": 80,
            "ctx": 50
          }
        },
        "fsm": {
          "1": {
            "school": 38,
            "la": 36,
            "wales": 54,
            "ctx": 33
          }
        },
        "nonfsm": {
          "1": {
            "school": 74,
            "la": 71,
            "wales": 106,
            "ctx": 66
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              66,
              56
            ],
            "la": [
              63,
              53
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              58,
              50
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              38,
              74
            ],
            "la": [
              36,
              71
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              33,
              66
            ]
          }
        }
      }
    }
  },
  "blackwood": {
    "urn": "WG200003",
    "name": "Blackwood Comprehensive",
    "la": "caerphilly",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "NP12 9CC",
    "lat": 51.669,
    "lng": -3.193,
    "phone": "01443 100021",
    "email": "blackwood@caerphilly.gov.uk",
    "website": "blackwood.cymru",
    "estynUrl": "#",
    "totalPupils": 1042,
    "teacherFTE": 69,
    "ptr": 15.1,
    "budgetPerPupil": 6180,
    "financialReserves": 142000,
    "fsm3yr": 26.8,
    "bame": 5.4,
    "eal": 2,
    "attendance": {
      "overall": {
        "1": {
          "school": 89.8,
          "la": 91.7,
          "wales": 91.8,
          "ctx": 90.7
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            84.2,
            85.6,
            87,
            88.4,
            89.8
          ],
          "la": [
            86.9,
            88.1,
            89.3,
            90.5,
            91.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            86.3,
            87.4,
            88.5,
            89.6,
            90.7
          ]
        }
      },
      "pa": {
        "1": {
          "school": 22.4,
          "la": 19.4,
          "wales": 17.1,
          "ctx": 21
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            27.2,
            26,
            24.8,
            23.6,
            22.4
          ],
          "la": [
            23.4,
            22.4,
            21.4,
            20.4,
            19.4
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            25,
            24,
            23,
            22,
            21
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.5,
          "la": 4.1,
          "wales": 4.1,
          "ctx": 4.3
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.9,
            4.1,
            4.2,
            4.4,
            4.5
          ],
          "la": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.7,
            3.9,
            4,
            4.1,
            4.3
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 2.7,
          "la": 2.1,
          "wales": 2.1,
          "ctx": 2.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            1.5,
            1.8,
            2.1,
            2.4,
            2.7
          ],
          "la": [
            1.1,
            1.4,
            1.6,
            1.9,
            2.1
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            1.3,
            1.6,
            1.8,
            2.1,
            2.4
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 81.6,
          "auth": 5.7,
          "unauth": 4.5,
          "pa": 32.6,
          "ctx": 82.3
        },
        "nonfsm": {
          "attendance": 93.6,
          "auth": 3.9,
          "unauth": 1.9,
          "pa": 18.2,
          "ctx": 94.3
        },
        "female": {
          "attendance": 91.2,
          "auth": 4.1,
          "unauth": 2.1,
          "pa": 19.6,
          "ctx": 91.9
        },
        "male": {
          "attendance": 88.6,
          "auth": 4.9,
          "unauth": 3.3,
          "pa": 25.2,
          "ctx": 89.5
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 100,
          "male": 92
        },
        "year8": {
          "female": 102,
          "male": 98
        },
        "year9": {
          "female": 102,
          "male": 110
        },
        "year10": {
          "female": 112,
          "male": 110
        },
        "year11": {
          "female": 118,
          "male": 110
        }
      },
      "fsm": {
        "2022-23": 26.2,
        "2023-24": 26.5,
        "2024-25": 26.8
      },
      "aln": {
        "schoolAction": {
          "2022-23": 7.5,
          "2023-24": 8,
          "2024-25": 8.6
        },
        "schoolActionPlus": {
          "2022-23": 3.2,
          "2023-24": 3.5,
          "2024-25": 3.8
        },
        "statement": {
          "2022-23": 1.6,
          "2023-24": 1.7,
          "2024-25": 1.9
        }
      },
      "eal": 2,
      "bame": 5.4
    },
    "entries": {
      "all": {
        "1": {
          "school": 55,
          "la": 61,
          "wales": 62,
          "ctx": 57
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            51,
            53,
            55
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            52,
            55,
            57
          ]
        }
      },
      "female": {
        "1": {
          "school": 59,
          "la": 65,
          "wales": 66,
          "ctx": 61
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            54,
            57,
            59
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            56,
            59,
            61
          ]
        }
      },
      "male": {
        "1": {
          "school": 51,
          "la": 57,
          "wales": 58,
          "ctx": 53
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            47,
            49,
            51
          ],
          "la": [
            52,
            54,
            57
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            48,
            51,
            53
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 41,
          "la": 45,
          "wales": 46,
          "ctx": 42
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            38,
            39,
            41
          ],
          "la": [
            40,
            42,
            45
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            37,
            39,
            42
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 62,
          "la": 70,
          "wales": 70,
          "ctx": 65
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            57,
            60,
            62
          ],
          "la": [
            65,
            67,
            70
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            60,
            63,
            65
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            59,
            51
          ],
          "la": [
            65,
            57
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            61,
            53
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              54,
              57,
              59
            ],
            "b": [
              47,
              49,
              51
            ]
          },
          "la": {
            "a": [
              60,
              63,
              65
            ],
            "b": [
              52,
              54,
              57
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            41,
            62
          ],
          "la": [
            45,
            70
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            42,
            65
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              38,
              39,
              41
            ],
            "b": [
              57,
              60,
              62
            ]
          },
          "la": {
            "a": [
              40,
              42,
              45
            ],
            "b": [
              65,
              67,
              70
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 7,
            "ctx": 6
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              5,
              6,
              6
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              5,
              6,
              6
            ]
          }
        },
        "female": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 8,
            "ctx": 6
          }
        },
        "male": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 4,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 7,
            "la": 7,
            "wales": 9,
            "ctx": 7
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              6,
              6
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              6,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              4,
              7
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              7
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 15,
            "la": 16,
            "wales": 18,
            "ctx": 15
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              13,
              14,
              15
            ],
            "la": [
              14,
              15,
              16
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              13,
              14,
              15
            ]
          }
        },
        "female": {
          "1": {
            "school": 16,
            "la": 17,
            "wales": 19,
            "ctx": 16
          }
        },
        "male": {
          "1": {
            "school": 14,
            "la": 15,
            "wales": 17,
            "ctx": 14
          }
        },
        "fsm": {
          "1": {
            "school": 9,
            "la": 10,
            "wales": 11,
            "ctx": 9
          }
        },
        "nonfsm": {
          "1": {
            "school": 18,
            "la": 20,
            "wales": 22,
            "ctx": 18
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              16,
              14
            ],
            "la": [
              17,
              15
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              16,
              14
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              9,
              18
            ],
            "la": [
              10,
              20
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              9,
              18
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 25,
            "la": 27,
            "wales": 34,
            "ctx": 26
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              22,
              24,
              25
            ],
            "la": [
              24,
              25,
              27
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              23,
              24,
              26
            ]
          }
        },
        "female": {
          "1": {
            "school": 27,
            "la": 29,
            "wales": 37,
            "ctx": 28
          }
        },
        "male": {
          "1": {
            "school": 23,
            "la": 25,
            "wales": 31,
            "ctx": 24
          }
        },
        "fsm": {
          "1": {
            "school": 16,
            "la": 17,
            "wales": 21,
            "ctx": 16
          }
        },
        "nonfsm": {
          "1": {
            "school": 31,
            "la": 33,
            "wales": 41,
            "ctx": 32
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              27,
              23
            ],
            "la": [
              29,
              25
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              28,
              24
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              16,
              31
            ],
            "la": [
              17,
              33
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              16,
              32
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 34,
            "la": 37,
            "wales": 47,
            "ctx": 35
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              30,
              32,
              34
            ],
            "la": [
              33,
              35,
              37
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              31,
              33,
              35
            ]
          }
        },
        "female": {
          "1": {
            "school": 37,
            "la": 40,
            "wales": 51,
            "ctx": 38
          }
        },
        "male": {
          "1": {
            "school": 31,
            "la": 34,
            "wales": 43,
            "ctx": 32
          }
        },
        "fsm": {
          "1": {
            "school": 21,
            "la": 23,
            "wales": 29,
            "ctx": 22
          }
        },
        "nonfsm": {
          "1": {
            "school": 41,
            "la": 45,
            "wales": 57,
            "ctx": 43
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              37,
              31
            ],
            "la": [
              40,
              34
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              38,
              32
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              21,
              41
            ],
            "la": [
              23,
              45
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              22,
              43
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 40,
            "la": 45,
            "wales": 61,
            "ctx": 42
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              35,
              38,
              40
            ],
            "la": [
              40,
              42,
              45
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              37,
              39,
              42
            ]
          }
        },
        "female": {
          "1": {
            "school": 43,
            "la": 49,
            "wales": 66,
            "ctx": 45
          }
        },
        "male": {
          "1": {
            "school": 37,
            "la": 41,
            "wales": 56,
            "ctx": 39
          }
        },
        "fsm": {
          "1": {
            "school": 25,
            "la": 28,
            "wales": 38,
            "ctx": 26
          }
        },
        "nonfsm": {
          "1": {
            "school": 49,
            "la": 55,
            "wales": 74,
            "ctx": 51
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              43,
              37
            ],
            "la": [
              49,
              41
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              45,
              39
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              25,
              49
            ],
            "la": [
              28,
              55
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              26,
              51
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 45,
            "la": 50,
            "wales": 71,
            "ctx": 46
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              40,
              42,
              45
            ],
            "la": [
              44,
              47,
              50
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              40,
              43,
              46
            ]
          }
        },
        "female": {
          "1": {
            "school": 49,
            "la": 54,
            "wales": 77,
            "ctx": 50
          }
        },
        "male": {
          "1": {
            "school": 41,
            "la": 46,
            "wales": 65,
            "ctx": 42
          }
        },
        "fsm": {
          "1": {
            "school": 28,
            "la": 31,
            "wales": 44,
            "ctx": 29
          }
        },
        "nonfsm": {
          "1": {
            "school": 55,
            "la": 61,
            "wales": 87,
            "ctx": 56
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              49,
              41
            ],
            "la": [
              54,
              46
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              50,
              42
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              28,
              55
            ],
            "la": [
              31,
              61
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              29,
              56
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 49,
            "la": 54,
            "wales": 80,
            "ctx": 51
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              43,
              46,
              49
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              45,
              48,
              51
            ]
          }
        },
        "female": {
          "1": {
            "school": 53,
            "la": 58,
            "wales": 86,
            "ctx": 55
          }
        },
        "male": {
          "1": {
            "school": 45,
            "la": 50,
            "wales": 74,
            "ctx": 47
          }
        },
        "fsm": {
          "1": {
            "school": 30,
            "la": 33,
            "wales": 50,
            "ctx": 32
          }
        },
        "nonfsm": {
          "1": {
            "school": 60,
            "la": 66,
            "wales": 98,
            "ctx": 62
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              53,
              45
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              55,
              47
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              30,
              60
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              32,
              62
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 52,
            "la": 58,
            "wales": 87,
            "ctx": 54
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              46,
              49,
              52
            ],
            "la": [
              51,
              55,
              58
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              48,
              51,
              54
            ]
          }
        },
        "female": {
          "1": {
            "school": 56,
            "la": 63,
            "wales": 94,
            "ctx": 58
          }
        },
        "male": {
          "1": {
            "school": 48,
            "la": 53,
            "wales": 80,
            "ctx": 50
          }
        },
        "fsm": {
          "1": {
            "school": 32,
            "la": 36,
            "wales": 54,
            "ctx": 33
          }
        },
        "nonfsm": {
          "1": {
            "school": 63,
            "la": 71,
            "wales": 106,
            "ctx": 66
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              56,
              48
            ],
            "la": [
              63,
              53
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              58,
              50
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              32,
              63
            ],
            "la": [
              36,
              71
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              33,
              66
            ]
          }
        }
      }
    }
  },
  "risca": {
    "urn": "WG200004",
    "name": "Risca Community Comprehensive",
    "la": "caerphilly",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "NP11 9DD",
    "lat": 51.611,
    "lng": -3.095,
    "phone": "01443 100029",
    "email": "risca@caerphilly.gov.uk",
    "website": "risca.cymru",
    "estynUrl": "#",
    "totalPupils": 964,
    "teacherFTE": 63.8,
    "ptr": 15.1,
    "budgetPerPupil": 6240,
    "financialReserves": 124000,
    "fsm3yr": 24.6,
    "bame": 7,
    "eal": 3.8,
    "attendance": {
      "overall": {
        "1": {
          "school": 90.6,
          "la": 91.7,
          "wales": 91.8,
          "ctx": 90.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            85,
            86.4,
            87.8,
            89.2,
            90.6
          ],
          "la": [
            86.9,
            88.1,
            89.3,
            90.5,
            91.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            86.1,
            87.2,
            88.3,
            89.4,
            90.5
          ]
        }
      },
      "pa": {
        "1": {
          "school": 21.2,
          "la": 19.4,
          "wales": 17.1,
          "ctx": 21.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            26,
            24.8,
            23.6,
            22.4,
            21.2
          ],
          "la": [
            23.4,
            22.4,
            21.4,
            20.4,
            19.4
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            25.2,
            24.2,
            23.2,
            22.2,
            21.2
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.3,
          "la": 4.1,
          "wales": 4.1,
          "ctx": 4.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.7,
            3.9,
            4,
            4.1,
            4.3
          ],
          "la": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.8,
            4,
            4.1,
            4.3,
            4.4
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 2.5,
          "la": 2.1,
          "wales": 2.1,
          "ctx": 2.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            1.3,
            1.6,
            1.9,
            2.2,
            2.5
          ],
          "la": [
            1.1,
            1.4,
            1.6,
            1.9,
            2.1
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            1.4,
            1.7,
            1.9,
            2.2,
            2.5
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 82.4,
          "auth": 5.5,
          "unauth": 4.3,
          "pa": 31.4,
          "ctx": 82.1
        },
        "nonfsm": {
          "attendance": 94.4,
          "auth": 3.7,
          "unauth": 1.7,
          "pa": 17,
          "ctx": 94.1
        },
        "female": {
          "attendance": 92,
          "auth": 3.9,
          "unauth": 1.9,
          "pa": 18.4,
          "ctx": 91.7
        },
        "male": {
          "attendance": 89.4,
          "auth": 4.7,
          "unauth": 3.1,
          "pa": 24,
          "ctx": 89.3
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 92,
          "male": 84
        },
        "year8": {
          "female": 94,
          "male": 90
        },
        "year9": {
          "female": 94,
          "male": 102
        },
        "year10": {
          "female": 104,
          "male": 102
        },
        "year11": {
          "female": 110,
          "male": 102
        }
      },
      "fsm": {
        "2022-23": 24,
        "2023-24": 24.3,
        "2024-25": 24.6
      },
      "aln": {
        "schoolAction": {
          "2022-23": 6.9,
          "2023-24": 7.4,
          "2024-25": 7.9
        },
        "schoolActionPlus": {
          "2022-23": 3,
          "2023-24": 3.2,
          "2024-25": 3.4
        },
        "statement": {
          "2022-23": 1.5,
          "2023-24": 1.6,
          "2024-25": 1.7
        }
      },
      "eal": 3.8,
      "bame": 7
    },
    "entries": {
      "all": {
        "1": {
          "school": 57,
          "la": 61,
          "wales": 62,
          "ctx": 56
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            52,
            55,
            57
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            52,
            54,
            56
          ]
        }
      },
      "female": {
        "1": {
          "school": 61,
          "la": 65,
          "wales": 66,
          "ctx": 60
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            56,
            59,
            61
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            55,
            58,
            60
          ]
        }
      },
      "male": {
        "1": {
          "school": 53,
          "la": 57,
          "wales": 58,
          "ctx": 52
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            49,
            51,
            53
          ],
          "la": [
            52,
            54,
            57
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            48,
            50,
            52
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 42,
          "la": 45,
          "wales": 46,
          "ctx": 41
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            39,
            40,
            42
          ],
          "la": [
            40,
            42,
            45
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            36,
            39,
            41
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 64,
          "la": 70,
          "wales": 70,
          "ctx": 64
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            59,
            61,
            64
          ],
          "la": [
            65,
            67,
            70
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            59,
            62,
            64
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            61,
            53
          ],
          "la": [
            65,
            57
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            60,
            52
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              49,
              51,
              53
            ]
          },
          "la": {
            "a": [
              60,
              63,
              65
            ],
            "b": [
              52,
              54,
              57
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              55,
              58,
              60
            ],
            "b": [
              48,
              50,
              52
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            42,
            64
          ],
          "la": [
            45,
            70
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            41,
            64
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              39,
              40,
              42
            ],
            "b": [
              59,
              61,
              64
            ]
          },
          "la": {
            "a": [
              40,
              42,
              45
            ],
            "b": [
              65,
              67,
              70
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              36,
              39,
              41
            ],
            "b": [
              59,
              62,
              64
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 7,
            "ctx": 6
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              5,
              6,
              6
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              5,
              6,
              6
            ]
          }
        },
        "female": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 8,
            "ctx": 6
          }
        },
        "male": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 4,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 7,
            "la": 7,
            "wales": 9,
            "ctx": 7
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              6,
              6
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              6,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              4,
              7
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              7
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 15,
            "la": 16,
            "wales": 18,
            "ctx": 15
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              13,
              14,
              15
            ],
            "la": [
              14,
              15,
              16
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              13,
              14,
              15
            ]
          }
        },
        "female": {
          "1": {
            "school": 16,
            "la": 17,
            "wales": 19,
            "ctx": 16
          }
        },
        "male": {
          "1": {
            "school": 14,
            "la": 15,
            "wales": 17,
            "ctx": 14
          }
        },
        "fsm": {
          "1": {
            "school": 9,
            "la": 10,
            "wales": 11,
            "ctx": 9
          }
        },
        "nonfsm": {
          "1": {
            "school": 18,
            "la": 20,
            "wales": 22,
            "ctx": 18
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              16,
              14
            ],
            "la": [
              17,
              15
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              16,
              14
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              9,
              18
            ],
            "la": [
              10,
              20
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              9,
              18
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 26,
            "la": 27,
            "wales": 34,
            "ctx": 25
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              23,
              24,
              26
            ],
            "la": [
              24,
              25,
              27
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              22,
              24,
              25
            ]
          }
        },
        "female": {
          "1": {
            "school": 28,
            "la": 29,
            "wales": 37,
            "ctx": 27
          }
        },
        "male": {
          "1": {
            "school": 24,
            "la": 25,
            "wales": 31,
            "ctx": 23
          }
        },
        "fsm": {
          "1": {
            "school": 16,
            "la": 17,
            "wales": 21,
            "ctx": 16
          }
        },
        "nonfsm": {
          "1": {
            "school": 32,
            "la": 33,
            "wales": 41,
            "ctx": 31
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              28,
              24
            ],
            "la": [
              29,
              25
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              27,
              23
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              16,
              32
            ],
            "la": [
              17,
              33
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              16,
              31
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 35,
            "la": 37,
            "wales": 47,
            "ctx": 34
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              31,
              33,
              35
            ],
            "la": [
              33,
              35,
              37
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              30,
              32,
              34
            ]
          }
        },
        "female": {
          "1": {
            "school": 38,
            "la": 40,
            "wales": 51,
            "ctx": 37
          }
        },
        "male": {
          "1": {
            "school": 32,
            "la": 34,
            "wales": 43,
            "ctx": 31
          }
        },
        "fsm": {
          "1": {
            "school": 22,
            "la": 23,
            "wales": 29,
            "ctx": 21
          }
        },
        "nonfsm": {
          "1": {
            "school": 43,
            "la": 45,
            "wales": 57,
            "ctx": 41
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              38,
              32
            ],
            "la": [
              40,
              34
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              37,
              31
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              22,
              43
            ],
            "la": [
              23,
              45
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              21,
              41
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 42,
            "la": 45,
            "wales": 61,
            "ctx": 41
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              37,
              39,
              42
            ],
            "la": [
              40,
              42,
              45
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              36,
              39,
              41
            ]
          }
        },
        "female": {
          "1": {
            "school": 45,
            "la": 49,
            "wales": 66,
            "ctx": 44
          }
        },
        "male": {
          "1": {
            "school": 39,
            "la": 41,
            "wales": 56,
            "ctx": 38
          }
        },
        "fsm": {
          "1": {
            "school": 26,
            "la": 28,
            "wales": 38,
            "ctx": 25
          }
        },
        "nonfsm": {
          "1": {
            "school": 51,
            "la": 55,
            "wales": 74,
            "ctx": 50
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              45,
              39
            ],
            "la": [
              49,
              41
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              44,
              38
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              26,
              51
            ],
            "la": [
              28,
              55
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              25,
              50
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 47,
            "la": 50,
            "wales": 71,
            "ctx": 46
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              41,
              44,
              47
            ],
            "la": [
              44,
              47,
              50
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              40,
              43,
              46
            ]
          }
        },
        "female": {
          "1": {
            "school": 51,
            "la": 54,
            "wales": 77,
            "ctx": 50
          }
        },
        "male": {
          "1": {
            "school": 43,
            "la": 46,
            "wales": 65,
            "ctx": 42
          }
        },
        "fsm": {
          "1": {
            "school": 29,
            "la": 31,
            "wales": 44,
            "ctx": 29
          }
        },
        "nonfsm": {
          "1": {
            "school": 57,
            "la": 61,
            "wales": 87,
            "ctx": 56
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              51,
              43
            ],
            "la": [
              54,
              46
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              50,
              42
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              29,
              57
            ],
            "la": [
              31,
              61
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              29,
              56
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 51,
            "la": 54,
            "wales": 80,
            "ctx": 50
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              45,
              48,
              51
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              44,
              47,
              50
            ]
          }
        },
        "female": {
          "1": {
            "school": 55,
            "la": 58,
            "wales": 86,
            "ctx": 54
          }
        },
        "male": {
          "1": {
            "school": 47,
            "la": 50,
            "wales": 74,
            "ctx": 46
          }
        },
        "fsm": {
          "1": {
            "school": 32,
            "la": 33,
            "wales": 50,
            "ctx": 31
          }
        },
        "nonfsm": {
          "1": {
            "school": 62,
            "la": 66,
            "wales": 98,
            "ctx": 61
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              55,
              47
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              54,
              46
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              32,
              62
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              31,
              61
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 54,
            "la": 58,
            "wales": 87,
            "ctx": 53
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              48,
              51,
              54
            ],
            "la": [
              51,
              55,
              58
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              47,
              50,
              53
            ]
          }
        },
        "female": {
          "1": {
            "school": 58,
            "la": 63,
            "wales": 94,
            "ctx": 57
          }
        },
        "male": {
          "1": {
            "school": 50,
            "la": 53,
            "wales": 80,
            "ctx": 49
          }
        },
        "fsm": {
          "1": {
            "school": 33,
            "la": 36,
            "wales": 54,
            "ctx": 33
          }
        },
        "nonfsm": {
          "1": {
            "school": 66,
            "la": 71,
            "wales": 106,
            "ctx": 65
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              58,
              50
            ],
            "la": [
              63,
              53
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              57,
              49
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              33,
              66
            ],
            "la": [
              36,
              71
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              33,
              65
            ]
          }
        }
      }
    }
  },
  "ystrad-mynach": {
    "urn": "WG200005",
    "name": "Ysgol Gyfun Cwm Rhymni",
    "la": "caerphilly",
    "phase": "Secondary",
    "language": "Welsh medium",
    "type": "Community school",
    "postcode": "CF82 9EE",
    "lat": 51.638,
    "lng": -3.235,
    "phone": "01443 100036",
    "email": "ystrad-mynach@caerphilly.gov.uk",
    "website": "ystradmynach.cymru",
    "estynUrl": "#",
    "totalPupils": 1102,
    "teacherFTE": 72.8,
    "ptr": 15.1,
    "budgetPerPupil": 6020,
    "financialReserves": 172000,
    "fsm3yr": 14.2,
    "bame": 3.8,
    "eal": 1.4,
    "attendance": {
      "overall": {
        "1": {
          "school": 93.8,
          "la": 91.7,
          "wales": 91.8,
          "ctx": 93.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            88.2,
            89.6,
            91,
            92.4,
            93.8
          ],
          "la": [
            86.9,
            88.1,
            89.3,
            90.5,
            91.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            89.4,
            90.5,
            91.6,
            92.7,
            93.8
          ]
        }
      },
      "pa": {
        "1": {
          "school": 16.4,
          "la": 19.4,
          "wales": 17.1,
          "ctx": 17
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            21.2,
            20,
            18.8,
            17.6,
            16.4
          ],
          "la": [
            23.4,
            22.4,
            21.4,
            20.4,
            19.4
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            21,
            20,
            19,
            18,
            17
          ]
        }
      },
      "auth": {
        "1": {
          "school": 3.7,
          "la": 4.1,
          "wales": 4.1,
          "ctx": 3.7
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.1,
            3.3,
            3.4,
            3.6,
            3.7
          ],
          "la": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.1,
            3.3,
            3.4,
            3.6,
            3.7
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 1.5,
          "la": 2.1,
          "wales": 2.1,
          "ctx": 1.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            0.3,
            0.6,
            0.9,
            1.2,
            1.5
          ],
          "la": [
            1.1,
            1.4,
            1.6,
            1.9,
            2.1
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            0.4,
            0.7,
            0.9,
            1.2,
            1.5
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 85.6,
          "auth": 4.9,
          "unauth": 3.3,
          "pa": 26.6,
          "ctx": 85.4
        },
        "nonfsm": {
          "attendance": 97.6,
          "auth": 3.1,
          "unauth": 0.7,
          "pa": 12.2,
          "ctx": 97.4
        },
        "female": {
          "attendance": 95.2,
          "auth": 3.3,
          "unauth": 0.9,
          "pa": 13.6,
          "ctx": 95
        },
        "male": {
          "attendance": 92.6,
          "auth": 4.1,
          "unauth": 2.1,
          "pa": 19.2,
          "ctx": 92.6
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 105,
          "male": 97
        },
        "year8": {
          "female": 108,
          "male": 104
        },
        "year9": {
          "female": 108,
          "male": 116
        },
        "year10": {
          "female": 118,
          "male": 116
        },
        "year11": {
          "female": 125,
          "male": 117
        }
      },
      "fsm": {
        "2022-23": 13.6,
        "2023-24": 13.9,
        "2024-25": 14.2
      },
      "aln": {
        "schoolAction": {
          "2022-23": 4,
          "2023-24": 4.3,
          "2024-25": 4.5
        },
        "schoolActionPlus": {
          "2022-23": 1.7,
          "2023-24": 1.8,
          "2024-25": 2
        },
        "statement": {
          "2022-23": 0.9,
          "2023-24": 0.9,
          "2024-25": 1
        }
      },
      "eal": 1.4,
      "bame": 3.8
    },
    "entries": {
      "all": {
        "1": {
          "school": 67,
          "la": 61,
          "wales": 62,
          "ctx": 68
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            62,
            64,
            67
          ],
          "la": [
            56,
            59,
            61
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            63,
            65,
            68
          ]
        }
      },
      "female": {
        "1": {
          "school": 72,
          "la": 65,
          "wales": 66,
          "ctx": 73
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            66,
            69,
            72
          ],
          "la": [
            60,
            63,
            65
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            67,
            70,
            73
          ]
        }
      },
      "male": {
        "1": {
          "school": 62,
          "la": 57,
          "wales": 58,
          "ctx": 63
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            57,
            60,
            62
          ],
          "la": [
            52,
            54,
            57
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            58,
            61,
            63
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 50,
          "la": 45,
          "wales": 46,
          "ctx": 50
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            46,
            48,
            50
          ],
          "la": [
            40,
            42,
            45
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            44,
            47,
            50
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 75,
          "la": 70,
          "wales": 70,
          "ctx": 78
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            69,
            72,
            75
          ],
          "la": [
            65,
            67,
            70
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            72,
            75,
            78
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            72,
            62
          ],
          "la": [
            65,
            57
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            73,
            63
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              66,
              69,
              72
            ],
            "b": [
              57,
              60,
              62
            ]
          },
          "la": {
            "a": [
              60,
              63,
              65
            ],
            "b": [
              52,
              54,
              57
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              67,
              70,
              73
            ],
            "b": [
              58,
              61,
              63
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            50,
            75
          ],
          "la": [
            45,
            70
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            50,
            78
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              46,
              48,
              50
            ],
            "b": [
              69,
              72,
              75
            ]
          },
          "la": {
            "a": [
              40,
              42,
              45
            ],
            "b": [
              65,
              67,
              70
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              44,
              47,
              50
            ],
            "b": [
              72,
              75,
              78
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 7,
            "la": 6,
            "wales": 7,
            "ctx": 7
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              6,
              7,
              7
            ],
            "la": [
              5,
              6,
              6
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              6,
              7,
              7
            ]
          }
        },
        "female": {
          "1": {
            "school": 8,
            "la": 6,
            "wales": 8,
            "ctx": 8
          }
        },
        "male": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 4,
            "la": 4,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 9,
            "la": 7,
            "wales": 9,
            "ctx": 9
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              8,
              6
            ],
            "la": [
              6,
              6
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              8,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              4,
              9
            ],
            "la": [
              4,
              7
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              9
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 18,
            "la": 16,
            "wales": 18,
            "ctx": 19
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              16,
              17,
              18
            ],
            "la": [
              14,
              15,
              16
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              17,
              18,
              19
            ]
          }
        },
        "female": {
          "1": {
            "school": 19,
            "la": 17,
            "wales": 19,
            "ctx": 21
          }
        },
        "male": {
          "1": {
            "school": 17,
            "la": 15,
            "wales": 17,
            "ctx": 17
          }
        },
        "fsm": {
          "1": {
            "school": 11,
            "la": 10,
            "wales": 11,
            "ctx": 12
          }
        },
        "nonfsm": {
          "1": {
            "school": 22,
            "la": 20,
            "wales": 22,
            "ctx": 23
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              19,
              17
            ],
            "la": [
              17,
              15
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              21,
              17
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              11,
              22
            ],
            "la": [
              10,
              20
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              12,
              23
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 30,
            "la": 27,
            "wales": 34,
            "ctx": 31
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              26,
              28,
              30
            ],
            "la": [
              24,
              25,
              27
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              27,
              29,
              31
            ]
          }
        },
        "female": {
          "1": {
            "school": 32,
            "la": 29,
            "wales": 37,
            "ctx": 33
          }
        },
        "male": {
          "1": {
            "school": 28,
            "la": 25,
            "wales": 31,
            "ctx": 29
          }
        },
        "fsm": {
          "1": {
            "school": 19,
            "la": 17,
            "wales": 21,
            "ctx": 19
          }
        },
        "nonfsm": {
          "1": {
            "school": 37,
            "la": 33,
            "wales": 41,
            "ctx": 38
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              32,
              28
            ],
            "la": [
              29,
              25
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              33,
              29
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              19,
              37
            ],
            "la": [
              17,
              33
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              19,
              38
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 41,
            "la": 37,
            "wales": 47,
            "ctx": 41
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              36,
              39,
              41
            ],
            "la": [
              33,
              35,
              37
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              36,
              39,
              41
            ]
          }
        },
        "female": {
          "1": {
            "school": 44,
            "la": 40,
            "wales": 51,
            "ctx": 44
          }
        },
        "male": {
          "1": {
            "school": 38,
            "la": 34,
            "wales": 43,
            "ctx": 38
          }
        },
        "fsm": {
          "1": {
            "school": 25,
            "la": 23,
            "wales": 29,
            "ctx": 25
          }
        },
        "nonfsm": {
          "1": {
            "school": 50,
            "la": 45,
            "wales": 57,
            "ctx": 50
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              44,
              38
            ],
            "la": [
              40,
              34
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              44,
              38
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              25,
              50
            ],
            "la": [
              23,
              45
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              25,
              50
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 49,
            "la": 45,
            "wales": 61,
            "ctx": 49
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              43,
              46,
              49
            ],
            "la": [
              40,
              42,
              45
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              43,
              46,
              49
            ]
          }
        },
        "female": {
          "1": {
            "school": 53,
            "la": 49,
            "wales": 66,
            "ctx": 53
          }
        },
        "male": {
          "1": {
            "school": 45,
            "la": 41,
            "wales": 56,
            "ctx": 45
          }
        },
        "fsm": {
          "1": {
            "school": 30,
            "la": 28,
            "wales": 38,
            "ctx": 30
          }
        },
        "nonfsm": {
          "1": {
            "school": 60,
            "la": 55,
            "wales": 74,
            "ctx": 60
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              53,
              45
            ],
            "la": [
              49,
              41
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              53,
              45
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              30,
              60
            ],
            "la": [
              28,
              55
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              30,
              60
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 55,
            "la": 50,
            "wales": 71,
            "ctx": 56
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              48,
              52,
              55
            ],
            "la": [
              44,
              47,
              50
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              49,
              53,
              56
            ]
          }
        },
        "female": {
          "1": {
            "school": 59,
            "la": 54,
            "wales": 77,
            "ctx": 60
          }
        },
        "male": {
          "1": {
            "school": 51,
            "la": 46,
            "wales": 65,
            "ctx": 52
          }
        },
        "fsm": {
          "1": {
            "school": 34,
            "la": 31,
            "wales": 44,
            "ctx": 35
          }
        },
        "nonfsm": {
          "1": {
            "school": 67,
            "la": 61,
            "wales": 87,
            "ctx": 68
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              59,
              51
            ],
            "la": [
              54,
              46
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              60,
              52
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              34,
              67
            ],
            "la": [
              31,
              61
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              35,
              68
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 60,
            "la": 54,
            "wales": 80,
            "ctx": 60
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              53,
              56,
              60
            ],
            "la": [
              48,
              51,
              54
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              53,
              56,
              60
            ]
          }
        },
        "female": {
          "1": {
            "school": 65,
            "la": 58,
            "wales": 86,
            "ctx": 65
          }
        },
        "male": {
          "1": {
            "school": 55,
            "la": 50,
            "wales": 74,
            "ctx": 55
          }
        },
        "fsm": {
          "1": {
            "school": 37,
            "la": 33,
            "wales": 50,
            "ctx": 37
          }
        },
        "nonfsm": {
          "1": {
            "school": 73,
            "la": 66,
            "wales": 98,
            "ctx": 73
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              65,
              55
            ],
            "la": [
              58,
              50
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              65,
              55
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              37,
              73
            ],
            "la": [
              33,
              66
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              37,
              73
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 64,
            "la": 58,
            "wales": 87,
            "ctx": 65
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              56,
              60,
              64
            ],
            "la": [
              51,
              55,
              58
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              57,
              61,
              65
            ]
          }
        },
        "female": {
          "1": {
            "school": 69,
            "la": 63,
            "wales": 94,
            "ctx": 70
          }
        },
        "male": {
          "1": {
            "school": 59,
            "la": 53,
            "wales": 80,
            "ctx": 60
          }
        },
        "fsm": {
          "1": {
            "school": 40,
            "la": 36,
            "wales": 54,
            "ctx": 40
          }
        },
        "nonfsm": {
          "1": {
            "school": 78,
            "la": 71,
            "wales": 106,
            "ctx": 79
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              69,
              59
            ],
            "la": [
              63,
              53
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              70,
              60
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              40,
              78
            ],
            "la": [
              36,
              71
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              40,
              79
            ]
          }
        }
      }
    }
  },
  "bedwas": {
    "urn": "WG200006",
    "name": "Bedwas Primary School",
    "la": "caerphilly",
    "phase": "Primary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF83 9FF",
    "lat": 51.594,
    "lng": -3.188,
    "phone": "01443 100043",
    "email": "bedwas@caerphilly.gov.uk",
    "website": "bedwas.cymru",
    "estynUrl": "#",
    "totalPupils": 276,
    "teacherFTE": 13.1,
    "ptr": 21.1,
    "budgetPerPupil": 5810,
    "financialReserves": 28000,
    "fsm3yr": 17.8,
    "bame": 4.2,
    "eal": 1.6,
    "attendance": {
      "overall": {
        "1": {
          "school": 93.2,
          "la": 91.7,
          "wales": 91.8,
          "ctx": 93.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            87.6,
            89,
            90.4,
            91.8,
            93.2
          ],
          "la": [
            86.9,
            88.1,
            89.3,
            90.5,
            91.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            88.8,
            89.9,
            91,
            92.1,
            93.2
          ]
        }
      },
      "pa": {
        "1": {
          "school": 14.8,
          "la": 19.4,
          "wales": 17.1,
          "ctx": 14.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            19.6,
            18.4,
            17.2,
            16,
            14.8
          ],
          "la": [
            23.4,
            22.4,
            21.4,
            20.4,
            19.4
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            18.8,
            17.8,
            16.8,
            15.8,
            14.8
          ]
        }
      },
      "auth": {
        "1": {
          "school": 3.8,
          "la": 4.1,
          "wales": 4.1,
          "ctx": 3.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.2,
            3.4,
            3.5,
            3.7,
            3.8
          ],
          "la": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.2,
            3.4,
            3.5,
            3.7,
            3.8
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 1.7,
          "la": 2.1,
          "wales": 2.1,
          "ctx": 1.7
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            0.5,
            0.8,
            1.1,
            1.4,
            1.7
          ],
          "la": [
            1.1,
            1.4,
            1.6,
            1.9,
            2.1
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            0.6,
            0.9,
            1.1,
            1.4,
            1.7
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 85,
          "auth": 5,
          "unauth": 3.5,
          "pa": 25,
          "ctx": 84.8
        },
        "nonfsm": {
          "attendance": 97,
          "auth": 3.2,
          "unauth": 0.9,
          "pa": 10.6,
          "ctx": 96.8
        },
        "female": {
          "attendance": 94.6,
          "auth": 3.4,
          "unauth": 1.1,
          "pa": 12,
          "ctx": 94.4
        },
        "male": {
          "attendance": 92,
          "auth": 4.2,
          "unauth": 2.3,
          "pa": 17.6,
          "ctx": 92
        }
      }
    },
    "pupils": {
      "byYear": null,
      "fsm": {
        "2022-23": 17.2,
        "2023-24": 17.5,
        "2024-25": 17.8
      },
      "aln": {
        "schoolAction": {
          "2022-23": 5,
          "2023-24": 5.3,
          "2024-25": 5.7
        },
        "schoolActionPlus": {
          "2022-23": 2.1,
          "2023-24": 2.3,
          "2024-25": 2.5
        },
        "statement": {
          "2022-23": 1.1,
          "2023-24": 1.2,
          "2024-25": 1.2
        }
      },
      "eal": 1.6,
      "bame": 4.2
    },
    "entries": null,
    "outcomes": null
  },
  "cyfarthfa": {
    "urn": "WG300001",
    "name": "Cyfarthfa High School",
    "la": "merthyr",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF48 9AA",
    "lat": 51.748,
    "lng": -3.378,
    "phone": "01443 100007",
    "email": "cyfarthfa@merthyr.gov.uk",
    "website": "cyfarthfa.cymru",
    "estynUrl": "#",
    "totalPupils": 986,
    "teacherFTE": 65.4,
    "ptr": 15.1,
    "budgetPerPupil": 6380,
    "financialReserves": 104000,
    "fsm3yr": 38.4,
    "bame": 5.8,
    "eal": 2.6,
    "attendance": {
      "overall": {
        "1": {
          "school": 87.2,
          "la": 87.7,
          "wales": 91.8,
          "ctx": 87.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            81.6,
            83,
            84.4,
            85.8,
            87.2
          ],
          "la": [
            82.9,
            84.1,
            85.3,
            86.5,
            87.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            82.8,
            83.9,
            85,
            86.1,
            87.2
          ]
        }
      },
      "pa": {
        "1": {
          "school": 25.8,
          "la": 24.9,
          "wales": 17.1,
          "ctx": 26.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            30.6,
            29.4,
            28.2,
            27,
            25.8
          ],
          "la": [
            28.9,
            27.9,
            26.9,
            25.9,
            24.9
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            30.2,
            29.2,
            28.2,
            27.2,
            26.2
          ]
        }
      },
      "auth": {
        "1": {
          "school": 5,
          "la": 4.9,
          "wales": 4.1,
          "ctx": 5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            4.4,
            4.6,
            4.7,
            4.9,
            5
          ],
          "la": [
            4.3,
            4.5,
            4.6,
            4.8,
            4.9
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            4.4,
            4.6,
            4.7,
            4.9,
            5
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 3.5,
          "la": 3.3,
          "wales": 2.1,
          "ctx": 3.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            2.3,
            2.6,
            2.9,
            3.2,
            3.5
          ],
          "la": [
            2.3,
            2.6,
            2.8,
            3.1,
            3.3
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            2.4,
            2.7,
            2.9,
            3.2,
            3.5
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 79,
          "auth": 6.2,
          "unauth": 5.3,
          "pa": 36,
          "ctx": 78.8
        },
        "nonfsm": {
          "attendance": 91,
          "auth": 4.4,
          "unauth": 2.7,
          "pa": 21.6,
          "ctx": 90.8
        },
        "female": {
          "attendance": 88.6,
          "auth": 4.6,
          "unauth": 2.9,
          "pa": 23,
          "ctx": 88.4
        },
        "male": {
          "attendance": 86,
          "auth": 5.4,
          "unauth": 4.1,
          "pa": 28.6,
          "ctx": 86
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 95,
          "male": 87
        },
        "year8": {
          "female": 97,
          "male": 93
        },
        "year9": {
          "female": 97,
          "male": 105
        },
        "year10": {
          "female": 107,
          "male": 105
        },
        "year11": {
          "female": 113,
          "male": 105
        }
      },
      "fsm": {
        "2022-23": 37.8,
        "2023-24": 38.1,
        "2024-25": 38.4
      },
      "aln": {
        "schoolAction": {
          "2022-23": 10.8,
          "2023-24": 11.5,
          "2024-25": 12.3
        },
        "schoolActionPlus": {
          "2022-23": 4.6,
          "2023-24": 5,
          "2024-25": 5.4
        },
        "statement": {
          "2022-23": 2.3,
          "2023-24": 2.5,
          "2024-25": 2.7
        }
      },
      "eal": 2.6,
      "bame": 5.8
    },
    "entries": {
      "all": {
        "1": {
          "school": 46,
          "la": 47,
          "wales": 62,
          "ctx": 46
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            42,
            44,
            46
          ],
          "la": [
            43,
            45,
            47
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            42,
            44,
            46
          ]
        }
      },
      "female": {
        "1": {
          "school": 49,
          "la": 50,
          "wales": 66,
          "ctx": 49
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            45,
            47,
            49
          ],
          "la": [
            47,
            48,
            50
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            46,
            47,
            49
          ]
        }
      },
      "male": {
        "1": {
          "school": 43,
          "la": 44,
          "wales": 58,
          "ctx": 43
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            40,
            41,
            43
          ],
          "la": [
            40,
            42,
            44
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            39,
            41,
            43
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 34,
          "la": 34,
          "wales": 46,
          "ctx": 34
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            31,
            33,
            34
          ],
          "la": [
            31,
            32,
            34
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            30,
            32,
            34
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 52,
          "la": 54,
          "wales": 70,
          "ctx": 52
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            48,
            50,
            52
          ],
          "la": [
            50,
            52,
            54
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            49,
            51,
            52
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            49,
            43
          ],
          "la": [
            50,
            44
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            49,
            43
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              45,
              47,
              49
            ],
            "b": [
              40,
              41,
              43
            ]
          },
          "la": {
            "a": [
              47,
              48,
              50
            ],
            "b": [
              40,
              42,
              44
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              46,
              47,
              49
            ],
            "b": [
              39,
              41,
              43
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            34,
            52
          ],
          "la": [
            34,
            54
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            34,
            52
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              31,
              33,
              34
            ],
            "b": [
              48,
              50,
              52
            ]
          },
          "la": {
            "a": [
              31,
              32,
              34
            ],
            "b": [
              50,
              52,
              54
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              30,
              32,
              34
            ],
            "b": [
              49,
              51,
              52
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 5,
            "la": 5,
            "wales": 7,
            "ctx": 5
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              4,
              5,
              5
            ],
            "la": [
              4,
              5,
              5
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              4,
              5,
              5
            ]
          }
        },
        "female": {
          "1": {
            "school": 5,
            "la": 5,
            "wales": 8,
            "ctx": 5
          }
        },
        "male": {
          "1": {
            "school": 5,
            "la": 5,
            "wales": 6,
            "ctx": 5
          }
        },
        "fsm": {
          "1": {
            "school": 3,
            "la": 3,
            "wales": 4,
            "ctx": 3
          }
        },
        "nonfsm": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 9,
            "ctx": 6
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              5,
              5
            ],
            "la": [
              5,
              5
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              5,
              5
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              3,
              6
            ],
            "la": [
              3,
              6
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              3,
              6
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 12,
            "la": 13,
            "wales": 18,
            "ctx": 12
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              11,
              11,
              12
            ],
            "la": [
              11,
              12,
              13
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              11,
              11,
              12
            ]
          }
        },
        "female": {
          "1": {
            "school": 13,
            "la": 14,
            "wales": 19,
            "ctx": 13
          }
        },
        "male": {
          "1": {
            "school": 11,
            "la": 12,
            "wales": 17,
            "ctx": 11
          }
        },
        "fsm": {
          "1": {
            "school": 7,
            "la": 8,
            "wales": 11,
            "ctx": 7
          }
        },
        "nonfsm": {
          "1": {
            "school": 15,
            "la": 16,
            "wales": 22,
            "ctx": 15
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              13,
              11
            ],
            "la": [
              14,
              12
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              13,
              11
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              7,
              15
            ],
            "la": [
              8,
              16
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              7,
              15
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 21,
            "la": 21,
            "wales": 34,
            "ctx": 20
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              18,
              20,
              21
            ],
            "la": [
              18,
              20,
              21
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              18,
              19,
              20
            ]
          }
        },
        "female": {
          "1": {
            "school": 23,
            "la": 23,
            "wales": 37,
            "ctx": 22
          }
        },
        "male": {
          "1": {
            "school": 19,
            "la": 19,
            "wales": 31,
            "ctx": 18
          }
        },
        "fsm": {
          "1": {
            "school": 13,
            "la": 13,
            "wales": 21,
            "ctx": 12
          }
        },
        "nonfsm": {
          "1": {
            "school": 26,
            "la": 26,
            "wales": 41,
            "ctx": 24
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              23,
              19
            ],
            "la": [
              23,
              19
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              22,
              18
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              13,
              26
            ],
            "la": [
              13,
              26
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              12,
              24
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 28,
            "la": 29,
            "wales": 47,
            "ctx": 28
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              25,
              26,
              28
            ],
            "la": [
              26,
              27,
              29
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              25,
              26,
              28
            ]
          }
        },
        "female": {
          "1": {
            "school": 30,
            "la": 31,
            "wales": 51,
            "ctx": 30
          }
        },
        "male": {
          "1": {
            "school": 26,
            "la": 27,
            "wales": 43,
            "ctx": 26
          }
        },
        "fsm": {
          "1": {
            "school": 17,
            "la": 18,
            "wales": 29,
            "ctx": 17
          }
        },
        "nonfsm": {
          "1": {
            "school": 34,
            "la": 35,
            "wales": 57,
            "ctx": 34
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              30,
              26
            ],
            "la": [
              31,
              27
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              30,
              26
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              17,
              34
            ],
            "la": [
              18,
              35
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              17,
              34
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 34,
            "la": 35,
            "wales": 61,
            "ctx": 33
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              30,
              32,
              34
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              29,
              31,
              33
            ]
          }
        },
        "female": {
          "1": {
            "school": 37,
            "la": 38,
            "wales": 66,
            "ctx": 36
          }
        },
        "male": {
          "1": {
            "school": 31,
            "la": 32,
            "wales": 56,
            "ctx": 30
          }
        },
        "fsm": {
          "1": {
            "school": 21,
            "la": 22,
            "wales": 38,
            "ctx": 20
          }
        },
        "nonfsm": {
          "1": {
            "school": 41,
            "la": 43,
            "wales": 74,
            "ctx": 40
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              37,
              31
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              36,
              30
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              21,
              41
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              20,
              40
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 38,
            "la": 39,
            "wales": 71,
            "ctx": 37
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              33,
              36,
              38
            ],
            "la": [
              34,
              37,
              39
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              33,
              35,
              37
            ]
          }
        },
        "female": {
          "1": {
            "school": 41,
            "la": 42,
            "wales": 77,
            "ctx": 40
          }
        },
        "male": {
          "1": {
            "school": 35,
            "la": 36,
            "wales": 65,
            "ctx": 34
          }
        },
        "fsm": {
          "1": {
            "school": 24,
            "la": 24,
            "wales": 44,
            "ctx": 23
          }
        },
        "nonfsm": {
          "1": {
            "school": 46,
            "la": 48,
            "wales": 87,
            "ctx": 45
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              41,
              35
            ],
            "la": [
              42,
              36
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              40,
              34
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              24,
              46
            ],
            "la": [
              24,
              48
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              23,
              45
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 41,
            "la": 42,
            "wales": 80,
            "ctx": 41
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              36,
              39,
              41
            ],
            "la": [
              37,
              39,
              42
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              36,
              39,
              41
            ]
          }
        },
        "female": {
          "1": {
            "school": 44,
            "la": 45,
            "wales": 86,
            "ctx": 44
          }
        },
        "male": {
          "1": {
            "school": 38,
            "la": 39,
            "wales": 74,
            "ctx": 38
          }
        },
        "fsm": {
          "1": {
            "school": 25,
            "la": 26,
            "wales": 50,
            "ctx": 25
          }
        },
        "nonfsm": {
          "1": {
            "school": 50,
            "la": 51,
            "wales": 98,
            "ctx": 50
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              44,
              38
            ],
            "la": [
              45,
              39
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              44,
              38
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              25,
              50
            ],
            "la": [
              26,
              51
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              25,
              50
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 44,
            "la": 45,
            "wales": 87,
            "ctx": 44
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              39,
              41,
              44
            ],
            "la": [
              40,
              42,
              45
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              39,
              41,
              44
            ]
          }
        },
        "female": {
          "1": {
            "school": 48,
            "la": 49,
            "wales": 94,
            "ctx": 48
          }
        },
        "male": {
          "1": {
            "school": 40,
            "la": 41,
            "wales": 80,
            "ctx": 40
          }
        },
        "fsm": {
          "1": {
            "school": 27,
            "la": 28,
            "wales": 54,
            "ctx": 27
          }
        },
        "nonfsm": {
          "1": {
            "school": 54,
            "la": 55,
            "wales": 106,
            "ctx": 54
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              48,
              40
            ],
            "la": [
              49,
              41
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              48,
              40
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              27,
              54
            ],
            "la": [
              28,
              55
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              27,
              54
            ]
          }
        }
      }
    }
  },
  "pen-y-dre": {
    "urn": "WG300002",
    "name": "Pen-y-Dre High School",
    "la": "merthyr",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF47 9BB",
    "lat": 51.762,
    "lng": -3.38,
    "phone": "01443 100014",
    "email": "pen-y-dre@merthyr.gov.uk",
    "website": "penydre.cymru",
    "estynUrl": "#",
    "totalPupils": 842,
    "teacherFTE": 55.8,
    "ptr": 15.1,
    "budgetPerPupil": 6460,
    "financialReserves": 86000,
    "fsm3yr": 42.8,
    "bame": 6.4,
    "eal": 3,
    "attendance": {
      "overall": {
        "1": {
          "school": 85.8,
          "la": 87.7,
          "wales": 91.8,
          "ctx": 87.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            80.2,
            81.6,
            83,
            84.4,
            85.8
          ],
          "la": [
            82.9,
            84.1,
            85.3,
            86.5,
            87.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            83.1,
            84.2,
            85.3,
            86.4,
            87.5
          ]
        }
      },
      "pa": {
        "1": {
          "school": 28.2,
          "la": 24.9,
          "wales": 17.1,
          "ctx": 25.5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            33,
            31.8,
            30.6,
            29.4,
            28.2
          ],
          "la": [
            28.9,
            27.9,
            26.9,
            25.9,
            24.9
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            29.5,
            28.5,
            27.5,
            26.5,
            25.5
          ]
        }
      },
      "auth": {
        "1": {
          "school": 5.3,
          "la": 4.9,
          "wales": 4.1,
          "ctx": 5
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            4.7,
            4.9,
            5,
            5.1,
            5.3
          ],
          "la": [
            4.3,
            4.5,
            4.6,
            4.8,
            4.9
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            4.4,
            4.6,
            4.7,
            4.9,
            5
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 3.9,
          "la": 3.3,
          "wales": 2.1,
          "ctx": 3.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            2.7,
            3,
            3.3,
            3.6,
            3.9
          ],
          "la": [
            2.3,
            2.6,
            2.8,
            3.1,
            3.3
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            2.3,
            2.6,
            2.8,
            3.1,
            3.4
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 77.6,
          "auth": 6.5,
          "unauth": 5.7,
          "pa": 38.4,
          "ctx": 79.1
        },
        "nonfsm": {
          "attendance": 89.6,
          "auth": 4.7,
          "unauth": 3.1,
          "pa": 24,
          "ctx": 91.1
        },
        "female": {
          "attendance": 87.2,
          "auth": 4.9,
          "unauth": 3.3,
          "pa": 25.4,
          "ctx": 88.7
        },
        "male": {
          "attendance": 84.6,
          "auth": 5.7,
          "unauth": 4.5,
          "pa": 31,
          "ctx": 86.3
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 81,
          "male": 73
        },
        "year8": {
          "female": 83,
          "male": 79
        },
        "year9": {
          "female": 82,
          "male": 90
        },
        "year10": {
          "female": 91,
          "male": 89
        },
        "year11": {
          "female": 97,
          "male": 89
        }
      },
      "fsm": {
        "2022-23": 42.2,
        "2023-24": 42.5,
        "2024-25": 42.8
      },
      "aln": {
        "schoolAction": {
          "2022-23": 12,
          "2023-24": 12.8,
          "2024-25": 13.7
        },
        "schoolActionPlus": {
          "2022-23": 5.1,
          "2023-24": 5.6,
          "2024-25": 6
        },
        "statement": {
          "2022-23": 2.6,
          "2023-24": 2.8,
          "2024-25": 3
        }
      },
      "eal": 3,
      "bame": 6.4
    },
    "entries": {
      "all": {
        "1": {
          "school": 41,
          "la": 47,
          "wales": 62,
          "ctx": 47
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            38,
            39,
            41
          ],
          "la": [
            43,
            45,
            47
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            43,
            45,
            47
          ]
        }
      },
      "female": {
        "1": {
          "school": 44,
          "la": 50,
          "wales": 66,
          "ctx": 50
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            40,
            42,
            44
          ],
          "la": [
            47,
            48,
            50
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            47,
            48,
            50
          ]
        }
      },
      "male": {
        "1": {
          "school": 38,
          "la": 44,
          "wales": 58,
          "ctx": 44
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            35,
            36,
            38
          ],
          "la": [
            40,
            42,
            44
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            40,
            42,
            44
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 30,
          "la": 34,
          "wales": 46,
          "ctx": 34
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            28,
            29,
            30
          ],
          "la": [
            31,
            32,
            34
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            31,
            32,
            34
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 46,
          "la": 54,
          "wales": 70,
          "ctx": 54
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            42,
            44,
            46
          ],
          "la": [
            50,
            52,
            54
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            50,
            52,
            54
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            44,
            38
          ],
          "la": [
            50,
            44
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            50,
            44
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              40,
              42,
              44
            ],
            "b": [
              35,
              36,
              38
            ]
          },
          "la": {
            "a": [
              47,
              48,
              50
            ],
            "b": [
              40,
              42,
              44
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              47,
              48,
              50
            ],
            "b": [
              40,
              42,
              44
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            30,
            46
          ],
          "la": [
            34,
            54
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            34,
            54
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              28,
              29,
              30
            ],
            "b": [
              42,
              44,
              46
            ]
          },
          "la": {
            "a": [
              31,
              32,
              34
            ],
            "b": [
              50,
              52,
              54
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              31,
              32,
              34
            ],
            "b": [
              50,
              52,
              54
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 4,
            "la": 5,
            "wales": 7,
            "ctx": 5
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              4,
              4,
              4
            ],
            "la": [
              4,
              5,
              5
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              4,
              5,
              5
            ]
          }
        },
        "female": {
          "1": {
            "school": 4,
            "la": 5,
            "wales": 8,
            "ctx": 5
          }
        },
        "male": {
          "1": {
            "school": 4,
            "la": 5,
            "wales": 6,
            "ctx": 5
          }
        },
        "fsm": {
          "1": {
            "school": 2,
            "la": 3,
            "wales": 4,
            "ctx": 3
          }
        },
        "nonfsm": {
          "1": {
            "school": 5,
            "la": 6,
            "wales": 9,
            "ctx": 6
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              4,
              4
            ],
            "la": [
              5,
              5
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              5,
              5
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              2,
              5
            ],
            "la": [
              3,
              6
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              3,
              6
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 11,
            "la": 13,
            "wales": 18,
            "ctx": 13
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              10,
              10,
              11
            ],
            "la": [
              11,
              12,
              13
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              11,
              12,
              13
            ]
          }
        },
        "female": {
          "1": {
            "school": 12,
            "la": 14,
            "wales": 19,
            "ctx": 14
          }
        },
        "male": {
          "1": {
            "school": 10,
            "la": 12,
            "wales": 17,
            "ctx": 12
          }
        },
        "fsm": {
          "1": {
            "school": 7,
            "la": 8,
            "wales": 11,
            "ctx": 8
          }
        },
        "nonfsm": {
          "1": {
            "school": 13,
            "la": 16,
            "wales": 22,
            "ctx": 16
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              12,
              10
            ],
            "la": [
              14,
              12
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              14,
              12
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              7,
              13
            ],
            "la": [
              8,
              16
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              8,
              16
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 18,
            "la": 21,
            "wales": 34,
            "ctx": 21
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              16,
              17,
              18
            ],
            "la": [
              18,
              20,
              21
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              18,
              20,
              21
            ]
          }
        },
        "female": {
          "1": {
            "school": 19,
            "la": 23,
            "wales": 37,
            "ctx": 23
          }
        },
        "male": {
          "1": {
            "school": 17,
            "la": 19,
            "wales": 31,
            "ctx": 19
          }
        },
        "fsm": {
          "1": {
            "school": 11,
            "la": 13,
            "wales": 21,
            "ctx": 13
          }
        },
        "nonfsm": {
          "1": {
            "school": 22,
            "la": 26,
            "wales": 41,
            "ctx": 26
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              19,
              17
            ],
            "la": [
              23,
              19
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              23,
              19
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              11,
              22
            ],
            "la": [
              13,
              26
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              13,
              26
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 25,
            "la": 29,
            "wales": 47,
            "ctx": 29
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              22,
              24,
              25
            ],
            "la": [
              26,
              27,
              29
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              26,
              27,
              29
            ]
          }
        },
        "female": {
          "1": {
            "school": 27,
            "la": 31,
            "wales": 51,
            "ctx": 31
          }
        },
        "male": {
          "1": {
            "school": 23,
            "la": 27,
            "wales": 43,
            "ctx": 27
          }
        },
        "fsm": {
          "1": {
            "school": 16,
            "la": 18,
            "wales": 29,
            "ctx": 18
          }
        },
        "nonfsm": {
          "1": {
            "school": 31,
            "la": 35,
            "wales": 57,
            "ctx": 35
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              27,
              23
            ],
            "la": [
              31,
              27
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              31,
              27
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              16,
              31
            ],
            "la": [
              18,
              35
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              18,
              35
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 30,
            "la": 35,
            "wales": 61,
            "ctx": 34
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              26,
              28,
              30
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              30,
              32,
              34
            ]
          }
        },
        "female": {
          "1": {
            "school": 32,
            "la": 38,
            "wales": 66,
            "ctx": 37
          }
        },
        "male": {
          "1": {
            "school": 28,
            "la": 32,
            "wales": 56,
            "ctx": 31
          }
        },
        "fsm": {
          "1": {
            "school": 19,
            "la": 22,
            "wales": 38,
            "ctx": 21
          }
        },
        "nonfsm": {
          "1": {
            "school": 37,
            "la": 43,
            "wales": 74,
            "ctx": 41
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              32,
              28
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              37,
              31
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              19,
              37
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              21,
              41
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 34,
            "la": 39,
            "wales": 71,
            "ctx": 38
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              30,
              32,
              34
            ],
            "la": [
              34,
              37,
              39
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              33,
              36,
              38
            ]
          }
        },
        "female": {
          "1": {
            "school": 37,
            "la": 42,
            "wales": 77,
            "ctx": 41
          }
        },
        "male": {
          "1": {
            "school": 31,
            "la": 36,
            "wales": 65,
            "ctx": 35
          }
        },
        "fsm": {
          "1": {
            "school": 21,
            "la": 24,
            "wales": 44,
            "ctx": 24
          }
        },
        "nonfsm": {
          "1": {
            "school": 41,
            "la": 48,
            "wales": 87,
            "ctx": 46
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              37,
              31
            ],
            "la": [
              42,
              36
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              41,
              35
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              21,
              41
            ],
            "la": [
              24,
              48
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              24,
              46
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 36,
            "la": 42,
            "wales": 80,
            "ctx": 42
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              32,
              34,
              36
            ],
            "la": [
              37,
              39,
              42
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              37,
              39,
              42
            ]
          }
        },
        "female": {
          "1": {
            "school": 39,
            "la": 45,
            "wales": 86,
            "ctx": 45
          }
        },
        "male": {
          "1": {
            "school": 33,
            "la": 39,
            "wales": 74,
            "ctx": 39
          }
        },
        "fsm": {
          "1": {
            "school": 22,
            "la": 26,
            "wales": 50,
            "ctx": 26
          }
        },
        "nonfsm": {
          "1": {
            "school": 44,
            "la": 51,
            "wales": 98,
            "ctx": 51
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              39,
              33
            ],
            "la": [
              45,
              39
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              45,
              39
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              22,
              44
            ],
            "la": [
              26,
              51
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              26,
              51
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 39,
            "la": 45,
            "wales": 87,
            "ctx": 45
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              34,
              37,
              39
            ],
            "la": [
              40,
              42,
              45
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              40,
              42,
              45
            ]
          }
        },
        "female": {
          "1": {
            "school": 42,
            "la": 49,
            "wales": 94,
            "ctx": 49
          }
        },
        "male": {
          "1": {
            "school": 36,
            "la": 41,
            "wales": 80,
            "ctx": 41
          }
        },
        "fsm": {
          "1": {
            "school": 24,
            "la": 28,
            "wales": 54,
            "ctx": 28
          }
        },
        "nonfsm": {
          "1": {
            "school": 48,
            "la": 55,
            "wales": 106,
            "ctx": 55
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              42,
              36
            ],
            "la": [
              49,
              41
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              49,
              41
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              24,
              48
            ],
            "la": [
              28,
              55
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              28,
              55
            ]
          }
        }
      }
    }
  },
  "afon-taf": {
    "urn": "WG300003",
    "name": "Afon Taf High School",
    "la": "merthyr",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF46 9CC",
    "lat": 51.696,
    "lng": -3.308,
    "phone": "01443 100021",
    "email": "afon-taf@merthyr.gov.uk",
    "website": "afontaf.cymru",
    "estynUrl": "#",
    "totalPupils": 768,
    "teacherFTE": 50.9,
    "ptr": 15.1,
    "budgetPerPupil": 6520,
    "financialReserves": 72000,
    "fsm3yr": 34.2,
    "bame": 4.8,
    "eal": 1.8,
    "attendance": {
      "overall": {
        "1": {
          "school": 88.4,
          "la": 87.7,
          "wales": 91.8,
          "ctx": 86.9
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            82.8,
            84.2,
            85.6,
            87,
            88.4
          ],
          "la": [
            82.9,
            84.1,
            85.3,
            86.5,
            87.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            82.5,
            83.6,
            84.7,
            85.8,
            86.9
          ]
        }
      },
      "pa": {
        "1": {
          "school": 23.4,
          "la": 24.9,
          "wales": 17.1,
          "ctx": 26.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            28.2,
            27,
            25.8,
            24.6,
            23.4
          ],
          "la": [
            28.9,
            27.9,
            26.9,
            25.9,
            24.9
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            30.8,
            29.8,
            28.8,
            27.8,
            26.8
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.8,
          "la": 4.9,
          "wales": 4.1,
          "ctx": 5.1
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            4.2,
            4.4,
            4.5,
            4.6,
            4.8
          ],
          "la": [
            4.3,
            4.5,
            4.6,
            4.8,
            4.9
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            4.5,
            4.6,
            4.8,
            4.9,
            5.1
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 3.1,
          "la": 3.3,
          "wales": 2.1,
          "ctx": 3.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            1.9,
            2.2,
            2.5,
            2.8,
            3.1
          ],
          "la": [
            2.3,
            2.6,
            2.8,
            3.1,
            3.3
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            2.5,
            2.8,
            3,
            3.3,
            3.6
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 80.2,
          "auth": 6,
          "unauth": 4.9,
          "pa": 33.6,
          "ctx": 78.5
        },
        "nonfsm": {
          "attendance": 92.2,
          "auth": 4.2,
          "unauth": 2.3,
          "pa": 19.2,
          "ctx": 90.5
        },
        "female": {
          "attendance": 89.8,
          "auth": 4.4,
          "unauth": 2.5,
          "pa": 20.6,
          "ctx": 88.1
        },
        "male": {
          "attendance": 87.2,
          "auth": 5.2,
          "unauth": 3.7,
          "pa": 26.2,
          "ctx": 85.7
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 75,
          "male": 67
        },
        "year8": {
          "female": 76,
          "male": 72
        },
        "year9": {
          "female": 75,
          "male": 83
        },
        "year10": {
          "female": 84,
          "male": 82
        },
        "year11": {
          "female": 89,
          "male": 81
        }
      },
      "fsm": {
        "2022-23": 33.6,
        "2023-24": 33.9,
        "2024-25": 34.2
      },
      "aln": {
        "schoolAction": {
          "2022-23": 9.6,
          "2023-24": 10.3,
          "2024-25": 10.9
        },
        "schoolActionPlus": {
          "2022-23": 4.1,
          "2023-24": 4.4,
          "2024-25": 4.8
        },
        "statement": {
          "2022-23": 2.1,
          "2023-24": 2.2,
          "2024-25": 2.4
        }
      },
      "eal": 1.8,
      "bame": 4.8
    },
    "entries": {
      "all": {
        "1": {
          "school": 49,
          "la": 47,
          "wales": 62,
          "ctx": 45
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            45,
            47,
            49
          ],
          "la": [
            43,
            45,
            47
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            41,
            43,
            45
          ]
        }
      },
      "female": {
        "1": {
          "school": 52,
          "la": 50,
          "wales": 66,
          "ctx": 48
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            48,
            50,
            52
          ],
          "la": [
            47,
            48,
            50
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            45,
            46,
            48
          ]
        }
      },
      "male": {
        "1": {
          "school": 46,
          "la": 44,
          "wales": 58,
          "ctx": 42
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            42,
            44,
            46
          ],
          "la": [
            40,
            42,
            44
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            38,
            40,
            42
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 36,
          "la": 34,
          "wales": 46,
          "ctx": 33
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            33,
            35,
            36
          ],
          "la": [
            31,
            32,
            34
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            29,
            31,
            33
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 55,
          "la": 54,
          "wales": 70,
          "ctx": 51
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            51,
            53,
            55
          ],
          "la": [
            50,
            52,
            54
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            48,
            50,
            51
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            52,
            46
          ],
          "la": [
            50,
            44
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            48,
            42
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              48,
              50,
              52
            ],
            "b": [
              42,
              44,
              46
            ]
          },
          "la": {
            "a": [
              47,
              48,
              50
            ],
            "b": [
              40,
              42,
              44
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              45,
              46,
              48
            ],
            "b": [
              38,
              40,
              42
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            36,
            55
          ],
          "la": [
            34,
            54
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            33,
            51
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              33,
              35,
              36
            ],
            "b": [
              51,
              53,
              55
            ]
          },
          "la": {
            "a": [
              31,
              32,
              34
            ],
            "b": [
              50,
              52,
              54
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              29,
              31,
              33
            ],
            "b": [
              48,
              50,
              51
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 5,
            "la": 5,
            "wales": 7,
            "ctx": 5
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              4,
              5,
              5
            ],
            "la": [
              4,
              5,
              5
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              4,
              5,
              5
            ]
          }
        },
        "female": {
          "1": {
            "school": 5,
            "la": 5,
            "wales": 8,
            "ctx": 5
          }
        },
        "male": {
          "1": {
            "school": 5,
            "la": 5,
            "wales": 6,
            "ctx": 5
          }
        },
        "fsm": {
          "1": {
            "school": 3,
            "la": 3,
            "wales": 4,
            "ctx": 3
          }
        },
        "nonfsm": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 9,
            "ctx": 6
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              5,
              5
            ],
            "la": [
              5,
              5
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              5,
              5
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              3,
              6
            ],
            "la": [
              3,
              6
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              3,
              6
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 13,
            "la": 13,
            "wales": 18,
            "ctx": 12
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              11,
              12,
              13
            ],
            "la": [
              11,
              12,
              13
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              11,
              11,
              12
            ]
          }
        },
        "female": {
          "1": {
            "school": 14,
            "la": 14,
            "wales": 19,
            "ctx": 13
          }
        },
        "male": {
          "1": {
            "school": 12,
            "la": 12,
            "wales": 17,
            "ctx": 11
          }
        },
        "fsm": {
          "1": {
            "school": 8,
            "la": 8,
            "wales": 11,
            "ctx": 7
          }
        },
        "nonfsm": {
          "1": {
            "school": 16,
            "la": 16,
            "wales": 22,
            "ctx": 15
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              14,
              12
            ],
            "la": [
              14,
              12
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              13,
              11
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              8,
              16
            ],
            "la": [
              8,
              16
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              7,
              15
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 22,
            "la": 21,
            "wales": 34,
            "ctx": 20
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              19,
              21,
              22
            ],
            "la": [
              18,
              20,
              21
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              18,
              19,
              20
            ]
          }
        },
        "female": {
          "1": {
            "school": 24,
            "la": 23,
            "wales": 37,
            "ctx": 22
          }
        },
        "male": {
          "1": {
            "school": 20,
            "la": 19,
            "wales": 31,
            "ctx": 18
          }
        },
        "fsm": {
          "1": {
            "school": 14,
            "la": 13,
            "wales": 21,
            "ctx": 12
          }
        },
        "nonfsm": {
          "1": {
            "school": 27,
            "la": 26,
            "wales": 41,
            "ctx": 24
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              24,
              20
            ],
            "la": [
              23,
              19
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              22,
              18
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              14,
              27
            ],
            "la": [
              13,
              26
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              12,
              24
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 30,
            "la": 29,
            "wales": 47,
            "ctx": 27
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              26,
              28,
              30
            ],
            "la": [
              26,
              27,
              29
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              24,
              25,
              27
            ]
          }
        },
        "female": {
          "1": {
            "school": 32,
            "la": 31,
            "wales": 51,
            "ctx": 29
          }
        },
        "male": {
          "1": {
            "school": 28,
            "la": 27,
            "wales": 43,
            "ctx": 25
          }
        },
        "fsm": {
          "1": {
            "school": 19,
            "la": 18,
            "wales": 29,
            "ctx": 17
          }
        },
        "nonfsm": {
          "1": {
            "school": 37,
            "la": 35,
            "wales": 57,
            "ctx": 33
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              32,
              28
            ],
            "la": [
              31,
              27
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              29,
              25
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              19,
              37
            ],
            "la": [
              18,
              35
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              17,
              33
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 36,
            "la": 35,
            "wales": 61,
            "ctx": 33
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              32,
              34,
              36
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              29,
              31,
              33
            ]
          }
        },
        "female": {
          "1": {
            "school": 39,
            "la": 38,
            "wales": 66,
            "ctx": 36
          }
        },
        "male": {
          "1": {
            "school": 33,
            "la": 32,
            "wales": 56,
            "ctx": 30
          }
        },
        "fsm": {
          "1": {
            "school": 22,
            "la": 22,
            "wales": 38,
            "ctx": 20
          }
        },
        "nonfsm": {
          "1": {
            "school": 44,
            "la": 43,
            "wales": 74,
            "ctx": 40
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              39,
              33
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              36,
              30
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              22,
              44
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              20,
              40
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 40,
            "la": 39,
            "wales": 71,
            "ctx": 37
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              35,
              38,
              40
            ],
            "la": [
              34,
              37,
              39
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              33,
              35,
              37
            ]
          }
        },
        "female": {
          "1": {
            "school": 43,
            "la": 42,
            "wales": 77,
            "ctx": 40
          }
        },
        "male": {
          "1": {
            "school": 37,
            "la": 36,
            "wales": 65,
            "ctx": 34
          }
        },
        "fsm": {
          "1": {
            "school": 25,
            "la": 24,
            "wales": 44,
            "ctx": 23
          }
        },
        "nonfsm": {
          "1": {
            "school": 49,
            "la": 48,
            "wales": 87,
            "ctx": 45
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              43,
              37
            ],
            "la": [
              42,
              36
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              40,
              34
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              25,
              49
            ],
            "la": [
              24,
              48
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              23,
              45
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 44,
            "la": 42,
            "wales": 80,
            "ctx": 40
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              39,
              41,
              44
            ],
            "la": [
              37,
              39,
              42
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              35,
              38,
              40
            ]
          }
        },
        "female": {
          "1": {
            "school": 48,
            "la": 45,
            "wales": 86,
            "ctx": 43
          }
        },
        "male": {
          "1": {
            "school": 40,
            "la": 39,
            "wales": 74,
            "ctx": 37
          }
        },
        "fsm": {
          "1": {
            "school": 27,
            "la": 26,
            "wales": 50,
            "ctx": 25
          }
        },
        "nonfsm": {
          "1": {
            "school": 54,
            "la": 51,
            "wales": 98,
            "ctx": 49
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              48,
              40
            ],
            "la": [
              45,
              39
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              43,
              37
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              27,
              54
            ],
            "la": [
              26,
              51
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              25,
              49
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 47,
            "la": 45,
            "wales": 87,
            "ctx": 43
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              41,
              44,
              47
            ],
            "la": [
              40,
              42,
              45
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              38,
              40,
              43
            ]
          }
        },
        "female": {
          "1": {
            "school": 51,
            "la": 49,
            "wales": 94,
            "ctx": 46
          }
        },
        "male": {
          "1": {
            "school": 43,
            "la": 41,
            "wales": 80,
            "ctx": 40
          }
        },
        "fsm": {
          "1": {
            "school": 29,
            "la": 28,
            "wales": 54,
            "ctx": 27
          }
        },
        "nonfsm": {
          "1": {
            "school": 57,
            "la": 55,
            "wales": 106,
            "ctx": 52
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              51,
              43
            ],
            "la": [
              49,
              41
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              46,
              40
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              29,
              57
            ],
            "la": [
              28,
              55
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              27,
              52
            ]
          }
        }
      }
    }
  },
  "bishop-hannington": {
    "urn": "WG300004",
    "name": "Bishop Hannington Church in Wales School",
    "la": "merthyr",
    "phase": "Secondary",
    "language": "English medium",
    "type": "Voluntary Aided",
    "postcode": "CF47 9DD",
    "lat": 51.745,
    "lng": -3.374,
    "phone": "01443 100029",
    "email": "bishop-hannington@merthyr.gov.uk",
    "website": "bishophannington.cymru",
    "estynUrl": "#",
    "totalPupils": 612,
    "teacherFTE": 40.6,
    "ptr": 15.1,
    "budgetPerPupil": 6580,
    "financialReserves": 58000,
    "fsm3yr": 28.8,
    "bame": 4.2,
    "eal": 1.6,
    "attendance": {
      "overall": {
        "1": {
          "school": 89.4,
          "la": 87.7,
          "wales": 91.8,
          "ctx": 90.8
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            83.8,
            85.2,
            86.6,
            88,
            89.4
          ],
          "la": [
            82.9,
            84.1,
            85.3,
            86.5,
            87.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            86.4,
            87.5,
            88.6,
            89.7,
            90.8
          ]
        }
      },
      "pa": {
        "1": {
          "school": 22,
          "la": 24.9,
          "wales": 17.1,
          "ctx": 21
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            26.8,
            25.6,
            24.4,
            23.2,
            22
          ],
          "la": [
            28.9,
            27.9,
            26.9,
            25.9,
            24.9
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            25,
            24,
            23,
            22,
            21
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4.6,
          "la": 4.9,
          "wales": 4.1,
          "ctx": 4.3
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            4,
            4.1,
            4.3,
            4.4,
            4.6
          ],
          "la": [
            4.3,
            4.5,
            4.6,
            4.8,
            4.9
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.7,
            3.9,
            4,
            4.1,
            4.3
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 2.8,
          "la": 3.3,
          "wales": 2.1,
          "ctx": 2.4
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            1.6,
            1.9,
            2.2,
            2.5,
            2.8
          ],
          "la": [
            2.3,
            2.6,
            2.8,
            3.1,
            3.3
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            1.3,
            1.6,
            1.8,
            2.1,
            2.4
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 81.2,
          "auth": 5.8,
          "unauth": 4.6,
          "pa": 32.2,
          "ctx": 82.4
        },
        "nonfsm": {
          "attendance": 93.2,
          "auth": 4,
          "unauth": 2,
          "pa": 17.8,
          "ctx": 94.4
        },
        "female": {
          "attendance": 90.8,
          "auth": 4.2,
          "unauth": 2.2,
          "pa": 19.2,
          "ctx": 92
        },
        "male": {
          "attendance": 88.2,
          "auth": 5,
          "unauth": 3.4,
          "pa": 24.8,
          "ctx": 89.6
        }
      }
    },
    "pupils": {
      "byYear": {
        "year7": {
          "female": 60,
          "male": 52
        },
        "year8": {
          "female": 61,
          "male": 57
        },
        "year9": {
          "female": 59,
          "male": 67
        },
        "year10": {
          "female": 67,
          "male": 65
        },
        "year11": {
          "female": 72,
          "male": 64
        }
      },
      "fsm": {
        "2022-23": 28.2,
        "2023-24": 28.5,
        "2024-25": 28.8
      },
      "aln": {
        "schoolAction": {
          "2022-23": 8.1,
          "2023-24": 8.6,
          "2024-25": 9.2
        },
        "schoolActionPlus": {
          "2022-23": 3.5,
          "2023-24": 3.7,
          "2024-25": 4
        },
        "statement": {
          "2022-23": 1.7,
          "2023-24": 1.9,
          "2024-25": 2
        }
      },
      "eal": 1.6,
      "bame": 4.2
    },
    "entries": {
      "all": {
        "1": {
          "school": 53,
          "la": 47,
          "wales": 62,
          "ctx": 57
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            49,
            51,
            53
          ],
          "la": [
            43,
            45,
            47
          ],
          "wales": [
            57,
            60,
            62
          ],
          "ctx": [
            52,
            55,
            57
          ]
        }
      },
      "female": {
        "1": {
          "school": 57,
          "la": 50,
          "wales": 66,
          "ctx": 61
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            52,
            55,
            57
          ],
          "la": [
            47,
            48,
            50
          ],
          "wales": [
            61,
            64,
            66
          ],
          "ctx": [
            56,
            59,
            61
          ]
        }
      },
      "male": {
        "1": {
          "school": 49,
          "la": 44,
          "wales": 58,
          "ctx": 53
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            45,
            47,
            49
          ],
          "la": [
            40,
            42,
            44
          ],
          "wales": [
            53,
            56,
            58
          ],
          "ctx": [
            48,
            51,
            53
          ]
        }
      },
      "fsm": {
        "1": {
          "school": 39,
          "la": 34,
          "wales": 46,
          "ctx": 42
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            36,
            37,
            39
          ],
          "la": [
            31,
            32,
            34
          ],
          "wales": [
            40,
            43,
            46
          ],
          "ctx": [
            37,
            39,
            42
          ]
        }
      },
      "nonfsm": {
        "1": {
          "school": 59,
          "la": 54,
          "wales": 70,
          "ctx": 65
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            54,
            57,
            59
          ],
          "la": [
            50,
            52,
            54
          ],
          "wales": [
            64,
            67,
            70
          ],
          "ctx": [
            60,
            63,
            65
          ]
        }
      },
      "sex-comparison": {
        "1": {
          "labels": [
            "Female",
            "Male"
          ],
          "school": [
            57,
            49
          ],
          "la": [
            50,
            44
          ],
          "wales": [
            66,
            58
          ],
          "ctx": [
            61,
            53
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              52,
              55,
              57
            ],
            "b": [
              45,
              47,
              49
            ]
          },
          "la": {
            "a": [
              47,
              48,
              50
            ],
            "b": [
              40,
              42,
              44
            ]
          },
          "wales": {
            "a": [
              61,
              64,
              66
            ],
            "b": [
              53,
              56,
              58
            ]
          },
          "ctx": {
            "a": [
              56,
              59,
              61
            ],
            "b": [
              48,
              51,
              53
            ]
          }
        }
      },
      "fsm-comparison": {
        "1": {
          "labels": [
            "FSM eligible",
            "Non-FSM eligible"
          ],
          "school": [
            39,
            59
          ],
          "la": [
            34,
            54
          ],
          "wales": [
            46,
            70
          ],
          "ctx": [
            42,
            65
          ]
        },
        "3": {
          "labels": [
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": {
            "a": [
              36,
              37,
              39
            ],
            "b": [
              54,
              57,
              59
            ]
          },
          "la": {
            "a": [
              31,
              32,
              34
            ],
            "b": [
              50,
              52,
              54
            ]
          },
          "wales": {
            "a": [
              40,
              43,
              46
            ],
            "b": [
              64,
              67,
              70
            ]
          },
          "ctx": {
            "a": [
              37,
              39,
              42
            ],
            "b": [
              60,
              63,
              65
            ]
          }
        }
      }
    },
    "outcomes": {
      "astar": {
        "all": {
          "1": {
            "school": 5,
            "la": 5,
            "wales": 7,
            "ctx": 6
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              4,
              5,
              5
            ],
            "la": [
              4,
              5,
              5
            ],
            "wales": [
              6,
              7,
              7
            ],
            "ctx": [
              5,
              6,
              6
            ]
          }
        },
        "female": {
          "1": {
            "school": 5,
            "la": 5,
            "wales": 8,
            "ctx": 6
          }
        },
        "male": {
          "1": {
            "school": 5,
            "la": 5,
            "wales": 6,
            "ctx": 6
          }
        },
        "fsm": {
          "1": {
            "school": 3,
            "la": 3,
            "wales": 4,
            "ctx": 4
          }
        },
        "nonfsm": {
          "1": {
            "school": 6,
            "la": 6,
            "wales": 9,
            "ctx": 7
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              5,
              5
            ],
            "la": [
              5,
              5
            ],
            "wales": [
              8,
              6
            ],
            "ctx": [
              6,
              6
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              3,
              6
            ],
            "la": [
              3,
              6
            ],
            "wales": [
              4,
              9
            ],
            "ctx": [
              4,
              7
            ]
          }
        }
      },
      "astar-a": {
        "all": {
          "1": {
            "school": 14,
            "la": 13,
            "wales": 18,
            "ctx": 15
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              12,
              13,
              14
            ],
            "la": [
              11,
              12,
              13
            ],
            "wales": [
              16,
              17,
              18
            ],
            "ctx": [
              13,
              14,
              15
            ]
          }
        },
        "female": {
          "1": {
            "school": 15,
            "la": 14,
            "wales": 19,
            "ctx": 16
          }
        },
        "male": {
          "1": {
            "school": 13,
            "la": 12,
            "wales": 17,
            "ctx": 14
          }
        },
        "fsm": {
          "1": {
            "school": 9,
            "la": 8,
            "wales": 11,
            "ctx": 9
          }
        },
        "nonfsm": {
          "1": {
            "school": 17,
            "la": 16,
            "wales": 22,
            "ctx": 18
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              15,
              13
            ],
            "la": [
              14,
              12
            ],
            "wales": [
              19,
              17
            ],
            "ctx": [
              16,
              14
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              9,
              17
            ],
            "la": [
              8,
              16
            ],
            "wales": [
              11,
              22
            ],
            "ctx": [
              9,
              18
            ]
          }
        }
      },
      "astar-b": {
        "all": {
          "1": {
            "school": 24,
            "la": 21,
            "wales": 34,
            "ctx": 26
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              21,
              23,
              24
            ],
            "la": [
              18,
              20,
              21
            ],
            "wales": [
              30,
              32,
              34
            ],
            "ctx": [
              23,
              24,
              26
            ]
          }
        },
        "female": {
          "1": {
            "school": 26,
            "la": 23,
            "wales": 37,
            "ctx": 28
          }
        },
        "male": {
          "1": {
            "school": 22,
            "la": 19,
            "wales": 31,
            "ctx": 24
          }
        },
        "fsm": {
          "1": {
            "school": 15,
            "la": 13,
            "wales": 21,
            "ctx": 16
          }
        },
        "nonfsm": {
          "1": {
            "school": 29,
            "la": 26,
            "wales": 41,
            "ctx": 32
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              26,
              22
            ],
            "la": [
              23,
              19
            ],
            "wales": [
              37,
              31
            ],
            "ctx": [
              28,
              24
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              15,
              29
            ],
            "la": [
              13,
              26
            ],
            "wales": [
              21,
              41
            ],
            "ctx": [
              16,
              32
            ]
          }
        }
      },
      "astar-c": {
        "all": {
          "1": {
            "school": 32,
            "la": 29,
            "wales": 47,
            "ctx": 35
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              28,
              30,
              32
            ],
            "la": [
              26,
              27,
              29
            ],
            "wales": [
              41,
              44,
              47
            ],
            "ctx": [
              31,
              33,
              35
            ]
          }
        },
        "female": {
          "1": {
            "school": 35,
            "la": 31,
            "wales": 51,
            "ctx": 38
          }
        },
        "male": {
          "1": {
            "school": 29,
            "la": 27,
            "wales": 43,
            "ctx": 32
          }
        },
        "fsm": {
          "1": {
            "school": 20,
            "la": 18,
            "wales": 29,
            "ctx": 22
          }
        },
        "nonfsm": {
          "1": {
            "school": 39,
            "la": 35,
            "wales": 57,
            "ctx": 43
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              35,
              29
            ],
            "la": [
              31,
              27
            ],
            "wales": [
              51,
              43
            ],
            "ctx": [
              38,
              32
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              20,
              39
            ],
            "la": [
              18,
              35
            ],
            "wales": [
              29,
              57
            ],
            "ctx": [
              22,
              43
            ]
          }
        }
      },
      "astar-d": {
        "all": {
          "1": {
            "school": 39,
            "la": 35,
            "wales": 61,
            "ctx": 42
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              34,
              37,
              39
            ],
            "la": [
              31,
              33,
              35
            ],
            "wales": [
              54,
              57,
              61
            ],
            "ctx": [
              37,
              39,
              42
            ]
          }
        },
        "female": {
          "1": {
            "school": 42,
            "la": 38,
            "wales": 66,
            "ctx": 45
          }
        },
        "male": {
          "1": {
            "school": 36,
            "la": 32,
            "wales": 56,
            "ctx": 39
          }
        },
        "fsm": {
          "1": {
            "school": 24,
            "la": 22,
            "wales": 38,
            "ctx": 26
          }
        },
        "nonfsm": {
          "1": {
            "school": 48,
            "la": 43,
            "wales": 74,
            "ctx": 51
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              42,
              36
            ],
            "la": [
              38,
              32
            ],
            "wales": [
              66,
              56
            ],
            "ctx": [
              45,
              39
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              24,
              48
            ],
            "la": [
              22,
              43
            ],
            "wales": [
              38,
              74
            ],
            "ctx": [
              26,
              51
            ]
          }
        }
      },
      "astar-e": {
        "all": {
          "1": {
            "school": 43,
            "la": 39,
            "wales": 71,
            "ctx": 47
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              38,
              40,
              43
            ],
            "la": [
              34,
              37,
              39
            ],
            "wales": [
              62,
              67,
              71
            ],
            "ctx": [
              41,
              44,
              47
            ]
          }
        },
        "female": {
          "1": {
            "school": 46,
            "la": 42,
            "wales": 77,
            "ctx": 51
          }
        },
        "male": {
          "1": {
            "school": 40,
            "la": 36,
            "wales": 65,
            "ctx": 43
          }
        },
        "fsm": {
          "1": {
            "school": 27,
            "la": 24,
            "wales": 44,
            "ctx": 29
          }
        },
        "nonfsm": {
          "1": {
            "school": 52,
            "la": 48,
            "wales": 87,
            "ctx": 57
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              46,
              40
            ],
            "la": [
              42,
              36
            ],
            "wales": [
              77,
              65
            ],
            "ctx": [
              51,
              43
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              27,
              52
            ],
            "la": [
              24,
              48
            ],
            "wales": [
              44,
              87
            ],
            "ctx": [
              29,
              57
            ]
          }
        }
      },
      "astar-f": {
        "all": {
          "1": {
            "school": 47,
            "la": 42,
            "wales": 80,
            "ctx": 51
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              41,
              44,
              47
            ],
            "la": [
              37,
              39,
              42
            ],
            "wales": [
              70,
              75,
              80
            ],
            "ctx": [
              45,
              48,
              51
            ]
          }
        },
        "female": {
          "1": {
            "school": 51,
            "la": 45,
            "wales": 86,
            "ctx": 55
          }
        },
        "male": {
          "1": {
            "school": 43,
            "la": 39,
            "wales": 74,
            "ctx": 47
          }
        },
        "fsm": {
          "1": {
            "school": 29,
            "la": 26,
            "wales": 50,
            "ctx": 32
          }
        },
        "nonfsm": {
          "1": {
            "school": 57,
            "la": 51,
            "wales": 98,
            "ctx": 62
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              51,
              43
            ],
            "la": [
              45,
              39
            ],
            "wales": [
              86,
              74
            ],
            "ctx": [
              55,
              47
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              29,
              57
            ],
            "la": [
              26,
              51
            ],
            "wales": [
              50,
              98
            ],
            "ctx": [
              32,
              62
            ]
          }
        }
      },
      "astar-g": {
        "all": {
          "1": {
            "school": 50,
            "la": 45,
            "wales": 87,
            "ctx": 54
          },
          "3": {
            "labels": [
              "2022-23",
              "2023-24",
              "2024-25"
            ],
            "school": [
              44,
              47,
              50
            ],
            "la": [
              40,
              42,
              45
            ],
            "wales": [
              77,
              82,
              87
            ],
            "ctx": [
              48,
              51,
              54
            ]
          }
        },
        "female": {
          "1": {
            "school": 54,
            "la": 49,
            "wales": 94,
            "ctx": 58
          }
        },
        "male": {
          "1": {
            "school": 46,
            "la": 41,
            "wales": 80,
            "ctx": 50
          }
        },
        "fsm": {
          "1": {
            "school": 31,
            "la": 28,
            "wales": 54,
            "ctx": 33
          }
        },
        "nonfsm": {
          "1": {
            "school": 61,
            "la": 55,
            "wales": 106,
            "ctx": 66
          }
        },
        "sex-comparison": {
          "1": {
            "labels": [
              "Female",
              "Male"
            ],
            "school": [
              54,
              46
            ],
            "la": [
              49,
              41
            ],
            "wales": [
              94,
              80
            ],
            "ctx": [
              58,
              50
            ]
          }
        },
        "fsm-comparison": {
          "1": {
            "labels": [
              "FSM eligible",
              "Non-FSM eligible"
            ],
            "school": [
              31,
              61
            ],
            "la": [
              28,
              55
            ],
            "wales": [
              54,
              106
            ],
            "ctx": [
              33,
              66
            ]
          }
        }
      }
    }
  },
  "vaynor": {
    "urn": "WG300005",
    "name": "Vaynor and Penderyn Primary",
    "la": "merthyr",
    "phase": "Primary",
    "language": "English medium",
    "type": "Community school",
    "postcode": "CF48 9EE",
    "lat": 51.764,
    "lng": -3.416,
    "phone": "01443 100036",
    "email": "vaynor@merthyr.gov.uk",
    "website": "vaynor.cymru",
    "estynUrl": "#",
    "totalPupils": 188,
    "teacherFTE": 9.2,
    "ptr": 20.4,
    "budgetPerPupil": 5920,
    "financialReserves": 18000,
    "fsm3yr": 22.6,
    "bame": 3,
    "eal": 0.8,
    "attendance": {
      "overall": {
        "1": {
          "school": 92.4,
          "la": 87.7,
          "wales": 91.8,
          "ctx": 91.6
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            86.8,
            88.2,
            89.6,
            91,
            92.4
          ],
          "la": [
            82.9,
            84.1,
            85.3,
            86.5,
            87.7
          ],
          "wales": [
            87.8,
            88.8,
            89.8,
            90.8,
            91.8
          ],
          "ctx": [
            87.2,
            88.3,
            89.4,
            90.5,
            91.6
          ]
        }
      },
      "pa": {
        "1": {
          "school": 16.8,
          "la": 24.9,
          "wales": 17.1,
          "ctx": 19.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            21.6,
            20.4,
            19.2,
            18,
            16.8
          ],
          "la": [
            28.9,
            27.9,
            26.9,
            25.9,
            24.9
          ],
          "wales": [
            20.3,
            19.5,
            18.7,
            17.9,
            17.1
          ],
          "ctx": [
            23.2,
            22.2,
            21.2,
            20.2,
            19.2
          ]
        }
      },
      "auth": {
        "1": {
          "school": 4,
          "la": 4.9,
          "wales": 4.1,
          "ctx": 4.1
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            3.4,
            3.6,
            3.7,
            3.9,
            4
          ],
          "la": [
            4.3,
            4.5,
            4.6,
            4.8,
            4.9
          ],
          "wales": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ],
          "ctx": [
            3.5,
            3.6,
            3.8,
            4,
            4.1
          ]
        }
      },
      "unauth": {
        "1": {
          "school": 1.9,
          "la": 3.3,
          "wales": 2.1,
          "ctx": 2.2
        },
        "5": {
          "labels": [
            "2020-21",
            "2021-22",
            "2022-23",
            "2023-24",
            "2024-25"
          ],
          "school": [
            0.7,
            1,
            1.3,
            1.6,
            1.9
          ],
          "la": [
            2.3,
            2.6,
            2.8,
            3.1,
            3.3
          ],
          "wales": [
            1.3,
            1.5,
            1.7,
            1.9,
            2.1
          ],
          "ctx": [
            1.1,
            1.4,
            1.6,
            1.9,
            2.2
          ]
        }
      },
      "groups": {
        "fsm": {
          "attendance": 84.2,
          "auth": 5.2,
          "unauth": 3.7,
          "pa": 27,
          "ctx": 83.2
        },
        "nonfsm": {
          "attendance": 96.2,
          "auth": 3.4,
          "unauth": 1.1,
          "pa": 12.6,
          "ctx": 95.2
        },
        "female": {
          "attendance": 93.8,
          "auth": 3.6,
          "unauth": 1.3,
          "pa": 14,
          "ctx": 92.8
        },
        "male": {
          "attendance": 91.2,
          "auth": 4.4,
          "unauth": 2.5,
          "pa": 19.6,
          "ctx": 90.4
        }
      }
    },
    "pupils": {
      "byYear": null,
      "fsm": {
        "2022-23": 22,
        "2023-24": 22.3,
        "2024-25": 22.6
      },
      "aln": {
        "schoolAction": {
          "2022-23": 6.3,
          "2023-24": 6.8,
          "2024-25": 7.2
        },
        "schoolActionPlus": {
          "2022-23": 2.7,
          "2023-24": 2.9,
          "2024-25": 3.2
        },
        "statement": {
          "2022-23": 1.4,
          "2023-24": 1.5,
          "2024-25": 1.6
        }
      },
      "eal": 0.8,
      "bame": 3
    },
    "entries": null,
    "outcomes": null
  }
},

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  // Find a school by URN
  getByUrn: function(urn) {
    var keys = Object.keys(this.schools);
    for (var i = 0; i < keys.length; i++) {
      if (this.schools[keys[i]].urn === urn) return this.schools[keys[i]];
    }
    return null;
  },

  // Get all school objects for a given LA code
  getSchoolsByLa: function(laCode) {
    var la = this.las[laCode];
    if (!la) return [];
    var self = this;
    return la.schools.map(function(key) { return self.schools[key]; }).filter(Boolean);
  },

  // Search schools by name fragment
  searchByName: function(query) {
    var q = query.toLowerCase();
    return Object.values(this.schools).filter(function(s) {
      return s.name.toLowerCase().indexOf(q) > -1;
    });
  },

  // Search schools by postcode fragment
  searchByPostcode: function(query) {
    var q = query.toUpperCase().replace(/\s/g,'');
    return Object.values(this.schools).filter(function(s) {
      return s.postcode.replace(/\s/g,'').indexOf(q) > -1;
    });
  }

  // Note: comparator group building is handled in the compare-build page
  // (change 41) based on user-selected filters, not pre-computed here.

};