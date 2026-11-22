// ПОЛНЫЙ АВТОНОМНЫЙ МОДУЛЬ NPC RIG PLAYER И ЛЁГКАЯ БАЗА STATIC DREAD (БЕЗ BASE64)

(function() {

const STAGE_W = 640, STAGE_H = 920;

window.NPC_DATABASE = {
  "version": "2.2",
  "updatedAt": "2026-11-22T23:17:18.997Z",
  "characters": {
    "slot_1795310354424": {
      "id": "slot_1795310354424",
      "name": "8. Старик (Свеча) (Копия) (Копия)",
      "fileHint": "сосед 1.png",
      "assignedDoorId": "door_17_1794956249959",
      "presetType": "lantern6",
      "bgMode": "auto",
      "bgThreshold": 34,
      "light": {
        "attachTo": "prop",
        "x": 495,
        "y": 733,
        "glowRadius": 155,
        "bgLightRadius": 520,
        "intensity": 110,
        "dustRadius": 58,
        "dustCount": 18,
        "flickerSpeed": 100
      },
      "placements": {
        "rig_editor": {
          "offsetX": 0,
          "offsetY": 0,
          "scale": 1,
          "flipX": false,
          "shadowDepth": 0,
          "customBgHint": ""
        },
        "peephole": {
          "offsetX": 0,
          "offsetY": 60,
          "scale": 1.08,
          "flipX": false,
          "shadowDepth": 35,
          "customBgHint": "события/глазок 2.jpg"
        },
        "door_peek": {
          "offsetX": -61,
          "offsetY": 143,
          "scale": 1.19,
          "flipX": false,
          "shadowDepth": 65
        },
        "hallway": {
          "offsetX": 16,
          "offsetY": 361,
          "scale": 1.43,
          "flipX": false,
          "shadowDepth": 25,
          "customBgHint": "события/подъезд 1/1.jpg"
        },
        "apartment": {
          "offsetX": 35,
          "offsetY": 153,
          "scale": 1.08,
          "flipX": false,
          "shadowDepth": 20,
          "customBgHint": ""
        }
      },
      "doorPlacementsByDoorId": {
        "door_19": {
          "offsetX": -36,
          "offsetY": 143,
          "scale": 0.92,
          "flipX": false,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_22": {
          "offsetX": 56,
          "offsetY": 81,
          "scale": 1.04,
          "flipX": true,
          "shadowDepth": 65
        },
        "door_23": {
          "offsetX": 56,
          "offsetY": 81,
          "scale": 1.04,
          "flipX": true,
          "shadowDepth": 65
        },
        "door_18_1795369876771": {
          "offsetX": 56,
          "offsetY": 81,
          "scale": 1.04,
          "flipX": true,
          "shadowDepth": 65
        },
        "door_17_1794956249959": {
          "offsetX": -61,
          "offsetY": 143,
          "scale": 1.19,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_26_1795388368979": {
          "offsetX": -61,
          "offsetY": 143,
          "scale": 1.19,
          "flipX": false,
          "shadowDepth": 65
        }
      },
      "doorPlacement": {
        "offsetX": -61,
        "offsetY": 143,
        "scale": 1.19,
        "flipX": false,
        "shadowDepth": 65
      },
      "views": {
        "front": {
          "crops": {
            "head": {
              "x1": 0.126,
              "y1": 0.022,
              "x2": 0.306,
              "y2": 0.301
            },
            "head_happy": {
              "x1": 0.267,
              "y1": 0.493,
              "x2": 0.425,
              "y2": 0.762
            },
            "head_angry": {
              "x1": 0.297,
              "y1": 0.043,
              "x2": 0.466,
              "y2": 0.302
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 356,
              "y": 189,
              "rot": 0,
              "scale": 0.94,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 356,
              "y": 189,
              "rot": 0,
              "scale": 0.94,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 356,
              "y": 189,
              "rot": 0,
              "scale": 0.94,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 271,
              "y": 275,
              "rot": 12,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 449,
              "y": 264,
              "rot": -6,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 348,
              "y": 916,
              "rot": 0,
              "scale": 1.28,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 485,
              "y": 570,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": true,
          "useThreeEmotions": true,
          "altViewMode": "segmented_sheet",
          "fileHint": "сосед 1.png"
        },
        "side": {
          "crops": {
            "head": {
              "x1": 0.125,
              "y1": 0.035,
              "x2": 0.285,
              "y2": 0.365
            },
            "head_happy": {
              "x1": 0.288,
              "y1": 0.035,
              "x2": 0.445,
              "y2": 0.365
            },
            "head_angry": {
              "x1": 0.288,
              "y1": 0.37,
              "x2": 0.445,
              "y2": 0.685
            },
            "torso": {
              "x1": 0.45,
              "y1": 0.04,
              "x2": 0.625,
              "y2": 0.49
            },
            "rightArm": {
              "x1": 0.085,
              "y1": 0.385,
              "x2": 0.225,
              "y2": 0.82
            },
            "leftArm": {
              "x1": 0.635,
              "y1": 0.085,
              "x2": 0.845,
              "y2": 0.64
            },
            "legs": {
              "x1": 0.415,
              "y1": 0.48,
              "x2": 0.6,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.66,
              "y1": 0.33,
              "x2": 0.77,
              "y2": 0.63
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 258,
              "y": 252,
              "rot": -3,
              "scale": 1,
              "pivotX": 0.48,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 412,
              "y": 256,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.68,
              "pivotY": 0.1
            },
            "legs": {
              "x": 334,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 385,
              "y": 470,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.5
            }
          },
          "usePropLayer": false,
          "propPendulumSwing": false,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet",
          "fileHint": ""
        },
        "back": {
          "crops": {
            "head": {
              "x1": 0.125,
              "y1": 0.035,
              "x2": 0.285,
              "y2": 0.365
            },
            "head_happy": {
              "x1": 0.288,
              "y1": 0.035,
              "x2": 0.445,
              "y2": 0.365
            },
            "head_angry": {
              "x1": 0.288,
              "y1": 0.37,
              "x2": 0.445,
              "y2": 0.685
            },
            "torso": {
              "x1": 0.45,
              "y1": 0.04,
              "x2": 0.625,
              "y2": 0.49
            },
            "rightArm": {
              "x1": 0.085,
              "y1": 0.385,
              "x2": 0.225,
              "y2": 0.82
            },
            "leftArm": {
              "x1": 0.635,
              "y1": 0.085,
              "x2": 0.845,
              "y2": 0.64
            },
            "legs": {
              "x1": 0.415,
              "y1": 0.48,
              "x2": 0.6,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.66,
              "y1": 0.33,
              "x2": 0.77,
              "y2": 0.63
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 258,
              "y": 252,
              "rot": -3,
              "scale": 1,
              "pivotX": 0.48,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 412,
              "y": 256,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.68,
              "pivotY": 0.1
            },
            "legs": {
              "x": 334,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 385,
              "y": 470,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.5
            }
          },
          "usePropLayer": false,
          "propPendulumSwing": false,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": false,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet",
          "fileHint": ""
        }
      }
    },
    "slot_1795367470486": {
      "id": "slot_1795367470486",
      "name": "2. Сосед 2",
      "fileHint": "сосед 2.png",
      "assignedDoorId": "door_27_1795388455679",
      "presetType": "lantern6",
      "bgMode": "auto",
      "bgThreshold": 32,
      "light": {
        "attachTo": "prop",
        "x": 464,
        "y": 724,
        "glowRadius": 155,
        "bgLightRadius": 520,
        "intensity": 110,
        "dustRadius": 58,
        "dustCount": 18,
        "flickerSpeed": 100
      },
      "placements": {
        "rig_editor": {
          "offsetX": 0,
          "offsetY": 0,
          "scale": 1,
          "flipX": false,
          "shadowDepth": 0,
          "customBgHint": ""
        },
        "peephole": {
          "offsetX": 0,
          "offsetY": 60,
          "scale": 1.08,
          "flipX": false,
          "shadowDepth": 35,
          "customBgHint": "события/глазок 2.jpg"
        },
        "door_peek": {
          "offsetX": -42,
          "offsetY": 104,
          "scale": 1.01,
          "flipX": false,
          "shadowDepth": 65
        },
        "hallway": {
          "offsetX": 0,
          "offsetY": 30,
          "scale": 0.86,
          "flipX": false,
          "shadowDepth": 25,
          "customBgHint": "события/подъезд 1/1.jpg"
        },
        "apartment": {
          "offsetX": 0,
          "offsetY": 35,
          "scale": 0.9,
          "flipX": false,
          "shadowDepth": 20,
          "customBgHint": ""
        }
      },
      "doorPlacementsByDoorId": {
        "door_22": {
          "offsetX": 0,
          "offsetY": 45,
          "scale": 0.92,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_23": {
          "offsetX": 108,
          "offsetY": 217,
          "scale": 1.49,
          "flipX": true,
          "shadowDepth": 65
        },
        "door_19": {
          "offsetX": 46,
          "offsetY": 59,
          "scale": 0.86,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_16_1795388201395": {
          "offsetX": 46,
          "offsetY": 59,
          "scale": 0.86,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_25_1795388271890": {
          "offsetX": -30,
          "offsetY": 153,
          "scale": 1.19,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_26_1795388368979": {
          "offsetX": 69,
          "offsetY": 56,
          "scale": 0.98,
          "flipX": true,
          "shadowDepth": 65
        },
        "door_27_1795388455679": {
          "offsetX": -42,
          "offsetY": 104,
          "scale": 1.01,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_28_1795388495533": {
          "offsetX": -40,
          "offsetY": 38,
          "scale": 0.98,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_21_1795370052697": {
          "offsetX": -42,
          "offsetY": 104,
          "scale": 1.01,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_17_1794956249959": {
          "offsetX": -42,
          "offsetY": 104,
          "scale": 1.01,
          "flipX": false,
          "shadowDepth": 65
        }
      },
      "doorPlacement": {
        "offsetX": -42,
        "offsetY": 104,
        "scale": 1.01,
        "flipX": false,
        "shadowDepth": 65
      },
      "views": {
        "front": {
          "fileHint": "сосед 2.png",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.269,
              "y1": 0.491,
              "x2": 0.426,
              "y2": 0.816
            },
            "head_angry": {
              "x1": 0.297,
              "y1": 0.044,
              "x2": 0.454,
              "y2": 0.364
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 337,
              "y": 248,
              "rot": 0,
              "scale": 0.88,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 337,
              "y": 248,
              "rot": 0,
              "scale": 0.88,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 337,
              "y": 248,
              "rot": 0,
              "scale": 0.9,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 261,
              "rot": 10,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 452,
              "y": 267,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 336,
              "y": 903,
              "rot": 0,
              "scale": 1.28,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 460,
              "y": 570,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": true,
          "useThreeEmotions": true,
          "altViewMode": "segmented_sheet"
        },
        "side": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        },
        "back": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": false,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        }
      }
    },
    "slot_1795367905137": {
      "id": "slot_1795367905137",
      "name": "4. Сосед 4",
      "fileHint": "сосед 5.png",
      "assignedDoorId": "door_21_1795370052697",
      "presetType": "lantern6",
      "bgMode": "auto",
      "bgThreshold": 32,
      "light": {
        "attachTo": "prop",
        "x": 480,
        "y": 735,
        "glowRadius": 155,
        "bgLightRadius": 520,
        "intensity": 110,
        "dustRadius": 58,
        "dustCount": 18,
        "flickerSpeed": 100
      },
      "placements": {
        "rig_editor": {
          "offsetX": 0,
          "offsetY": 0,
          "scale": 1,
          "flipX": false,
          "shadowDepth": 0,
          "customBgHint": ""
        },
        "peephole": {
          "offsetX": 0,
          "offsetY": 60,
          "scale": 1.08,
          "flipX": false,
          "shadowDepth": 35,
          "customBgHint": "события/глазок 2.jpg"
        },
        "door_peek": {
          "offsetX": -46,
          "offsetY": 158,
          "scale": 1.1,
          "flipX": false,
          "shadowDepth": 65
        },
        "hallway": {
          "offsetX": 0,
          "offsetY": 30,
          "scale": 0.86,
          "flipX": false,
          "shadowDepth": 25,
          "customBgHint": "события/подъезд 1/1.jpg"
        },
        "apartment": {
          "offsetX": 0,
          "offsetY": 35,
          "scale": 0.9,
          "flipX": false,
          "shadowDepth": 20,
          "customBgHint": ""
        }
      },
      "doorPlacementsByDoorId": {
        "door_17_1794956249959": {
          "offsetX": 0,
          "offsetY": 45,
          "scale": 0.92,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_22": {
          "offsetX": 45,
          "offsetY": 90,
          "scale": 1.1,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_18_1795369876771": {
          "offsetX": -28,
          "offsetY": 70,
          "scale": 1.4,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_19": {
          "offsetX": 46,
          "offsetY": 59,
          "scale": 0.86,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_21_1795370052697": {
          "offsetX": -46,
          "offsetY": 158,
          "scale": 1.1,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_19_1795370254104": {
          "offsetX": -37,
          "offsetY": 66,
          "scale": 0.92,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_27_1795388455679": {
          "offsetX": -37,
          "offsetY": 66,
          "scale": 0.92,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_23": {
          "offsetX": -37,
          "offsetY": 66,
          "scale": 0.92,
          "flipX": false,
          "shadowDepth": 65
        }
      },
      "doorPlacement": {
        "offsetX": -46,
        "offsetY": 158,
        "scale": 1.1,
        "flipX": false,
        "shadowDepth": 65
      },
      "views": {
        "front": {
          "fileHint": "сосед 5.png",
          "crops": {
            "head": {
              "x1": 0.113,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.313
            },
            "head_happy": {
              "x1": 0.275,
              "y1": 0.498,
              "x2": 0.422,
              "y2": 0.777
            },
            "head_angry": {
              "x1": 0.293,
              "y1": 0.044,
              "x2": 0.455,
              "y2": 0.318
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 349,
              "y": 212,
              "rot": 0,
              "scale": 0.92,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 349,
              "y": 212,
              "rot": 0,
              "scale": 0.92,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 349,
              "y": 212,
              "rot": 0,
              "scale": 0.92,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 286,
              "y": 268,
              "rot": 10,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 456,
              "y": 278,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 344,
              "y": 892,
              "rot": 0,
              "scale": 1.22,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 470,
              "y": 579,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": true,
          "useThreeEmotions": true,
          "altViewMode": "segmented_sheet"
        },
        "side": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        },
        "back": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": false,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        }
      }
    },
    "slot_1795368528739": {
      "id": "slot_1795368528739",
      "name": "6. Сосед 6",
      "fileHint": "сосед 8.png",
      "assignedDoorId": "door_26_1795388368979",
      "presetType": "lantern6",
      "bgMode": "auto",
      "bgThreshold": 32,
      "light": {
        "attachTo": "prop",
        "x": 480,
        "y": 739,
        "glowRadius": 155,
        "bgLightRadius": 520,
        "intensity": 110,
        "dustRadius": 58,
        "dustCount": 18,
        "flickerSpeed": 100
      },
      "placements": {
        "rig_editor": {
          "offsetX": 0,
          "offsetY": 0,
          "scale": 1,
          "flipX": false,
          "shadowDepth": 0,
          "customBgHint": ""
        },
        "peephole": {
          "offsetX": 0,
          "offsetY": 60,
          "scale": 1.08,
          "flipX": false,
          "shadowDepth": 35,
          "customBgHint": "события/глазок 2.jpg"
        },
        "door_peek": {
          "offsetX": 42,
          "offsetY": 115,
          "scale": 1.07,
          "flipX": true,
          "shadowDepth": 65
        },
        "hallway": {
          "offsetX": 0,
          "offsetY": 30,
          "scale": 0.86,
          "flipX": false,
          "shadowDepth": 25,
          "customBgHint": "события/подъезд 1/1.jpg"
        },
        "apartment": {
          "offsetX": 0,
          "offsetY": 35,
          "scale": 0.9,
          "flipX": false,
          "shadowDepth": 20,
          "customBgHint": ""
        }
      },
      "doorPlacementsByDoorId": {
        "door_22": {
          "offsetX": 0,
          "offsetY": 45,
          "scale": 0.92,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_19_1795370254104": {
          "offsetX": 0,
          "offsetY": 45,
          "scale": 0.92,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_21_1795370052697": {
          "offsetX": 0,
          "offsetY": 45,
          "scale": 0.92,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_23": {
          "offsetX": 0,
          "offsetY": 45,
          "scale": 0.92,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_18_1795369876771": {
          "offsetX": -26,
          "offsetY": 146,
          "scale": 1.22,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_19": {
          "offsetX": 46,
          "offsetY": 59,
          "scale": 0.86,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_17_1794956249959": {
          "offsetX": -26,
          "offsetY": 146,
          "scale": 1.22,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_27_1795388455679": {
          "offsetX": -26,
          "offsetY": 146,
          "scale": 1.22,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_26_1795388368979": {
          "offsetX": 42,
          "offsetY": 115,
          "scale": 1.07,
          "flipX": true,
          "shadowDepth": 65
        }
      },
      "doorPlacement": {
        "offsetX": 42,
        "offsetY": 115,
        "scale": 1.07,
        "flipX": true,
        "shadowDepth": 65
      },
      "views": {
        "front": {
          "fileHint": "сосед 8.png",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.27,
              "y1": 0.52,
              "x2": 0.427,
              "y2": 0.845
            },
            "head_angry": {
              "x1": 0.293,
              "y1": 0.049,
              "x2": 0.45,
              "y2": 0.369
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 336,
              "y": 215,
              "rot": 0,
              "scale": 0.96,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 336,
              "y": 215,
              "rot": 0,
              "scale": 0.94,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 336,
              "y": 215,
              "rot": 0,
              "scale": 0.96,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 260,
              "y": 263,
              "rot": 2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 450,
              "y": 266,
              "rot": -4,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 337,
              "y": 902,
              "rot": 0,
              "scale": 1.24,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 473,
              "y": 574,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": true,
          "useThreeEmotions": true,
          "altViewMode": "segmented_sheet"
        },
        "side": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        },
        "back": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": false,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        }
      }
    },
    "slot_1795368678082": {
      "id": "slot_1795368678082",
      "name": "7. Сосед 7",
      "fileHint": "сосед 9.png",
      "assignedDoorId": "door_23",
      "presetType": "lantern6",
      "bgMode": "auto",
      "bgThreshold": 32,
      "light": {
        "attachTo": "prop",
        "x": 464,
        "y": 724,
        "glowRadius": 155,
        "bgLightRadius": 520,
        "intensity": 110,
        "dustRadius": 58,
        "dustCount": 18,
        "flickerSpeed": 100
      },
      "placements": {
        "rig_editor": {
          "offsetX": 0,
          "offsetY": 0,
          "scale": 1,
          "flipX": false,
          "shadowDepth": 0,
          "customBgHint": ""
        },
        "peephole": {
          "offsetX": 0,
          "offsetY": 60,
          "scale": 1.08,
          "flipX": false,
          "shadowDepth": 35,
          "customBgHint": "события/глазок 2.jpg"
        },
        "door_peek": {
          "offsetX": -63,
          "offsetY": 214,
          "scale": 1.46,
          "flipX": false,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "hallway": {
          "offsetX": 0,
          "offsetY": 30,
          "scale": 0.86,
          "flipX": false,
          "shadowDepth": 25,
          "customBgHint": "события/подъезд 1/1.jpg"
        },
        "apartment": {
          "offsetX": 0,
          "offsetY": 35,
          "scale": 0.9,
          "flipX": false,
          "shadowDepth": 20,
          "customBgHint": ""
        }
      },
      "doorPlacementsByDoorId": {
        "door_22": {
          "offsetX": 0,
          "offsetY": 45,
          "scale": 0.92,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_23": {
          "offsetX": -63,
          "offsetY": 214,
          "scale": 1.46,
          "flipX": false,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_19_1795370254104": {
          "offsetX": -56,
          "offsetY": 105,
          "scale": 1.1,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_18_1795369876771": {
          "offsetX": -56,
          "offsetY": 105,
          "scale": 1.1,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_23_1795370216264": {
          "offsetX": 0,
          "offsetY": 45,
          "scale": 0.92,
          "flipX": false,
          "shadowDepth": 65
        },
        "door_26_1795388368979": {
          "offsetX": -63,
          "offsetY": 214,
          "scale": 1.46,
          "flipX": false,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_25_1795388271890": {
          "offsetX": -63,
          "offsetY": 214,
          "scale": 1.46,
          "flipX": false,
          "shadowDepth": 65,
          "customBgHint": ""
        }
      },
      "doorPlacement": {
        "offsetX": -63,
        "offsetY": 214,
        "scale": 1.46,
        "flipX": false,
        "shadowDepth": 65,
        "customBgHint": ""
      },
      "views": {
        "front": {
          "fileHint": "сосед 9.png",
          "crops": {
            "head": {
              "x1": 0.116,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.313
            },
            "head_happy": {
              "x1": 0.29,
              "y1": 0.524,
              "x2": 0.432,
              "y2": 0.792
            },
            "head_angry": {
              "x1": 0.297,
              "y1": 0.06,
              "x2": 0.453,
              "y2": 0.313
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.43,
              "y1": 0.492,
              "x2": 0.578,
              "y2": 0.981
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 335,
              "y": 208,
              "rot": 0,
              "scale": 0.92,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 335,
              "y": 208,
              "rot": 0,
              "scale": 0.92,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 335,
              "y": 208,
              "rot": 0,
              "scale": 0.92,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 331,
              "y": 866,
              "rot": 0,
              "scale": 1.22,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 444,
              "y": 566,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": true,
          "useThreeEmotions": true,
          "altViewMode": "segmented_sheet"
        },
        "side": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        },
        "back": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": false,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        }
      }
    },
    "slot_1795369084186": {
      "id": "slot_1795369084186",
      "name": "8. Сосед 8",
      "fileHint": "сосед 10.png",
      "assignedDoorId": "door_28_1795388495533",
      "presetType": "lantern6",
      "bgMode": "auto",
      "bgThreshold": 32,
      "light": {
        "attachTo": "prop",
        "x": 481,
        "y": 724,
        "glowRadius": 155,
        "bgLightRadius": 520,
        "intensity": 110,
        "dustRadius": 58,
        "dustCount": 18,
        "flickerSpeed": 100
      },
      "placements": {
        "rig_editor": {
          "offsetX": 0,
          "offsetY": 0,
          "scale": 1,
          "flipX": false,
          "shadowDepth": 0,
          "customBgHint": ""
        },
        "peephole": {
          "offsetX": 0,
          "offsetY": 60,
          "scale": 1.08,
          "flipX": false,
          "shadowDepth": 35,
          "customBgHint": "события/глазок 2.jpg"
        },
        "door_peek": {
          "offsetX": -40,
          "offsetY": 45,
          "scale": 1.01,
          "flipX": false,
          "shadowDepth": 65
        },
        "hallway": {
          "offsetX": 0,
          "offsetY": 30,
          "scale": 0.86,
          "flipX": false,
          "shadowDepth": 25,
          "customBgHint": "события/подъезд 1/1.jpg"
        },
        "apartment": {
          "offsetX": 0,
          "offsetY": 35,
          "scale": 0.9,
          "flipX": false,
          "shadowDepth": 20,
          "customBgHint": ""
        }
      },
      "doorPlacementsByDoorId": {
        "door_22": {
          "offsetX": 8,
          "offsetY": 41,
          "scale": 0.92,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_23": {
          "offsetX": 70,
          "offsetY": 264,
          "scale": 1.55,
          "flipX": true,
          "shadowDepth": 65
        },
        "door_19_1795370254104": {
          "offsetX": 70,
          "offsetY": 264,
          "scale": 1.55,
          "flipX": true,
          "shadowDepth": 65
        },
        "door_28_1795388495533": {
          "offsetX": -40,
          "offsetY": 45,
          "scale": 1.01,
          "flipX": false,
          "shadowDepth": 65
        }
      },
      "doorPlacement": {
        "offsetX": -40,
        "offsetY": 45,
        "scale": 1.01,
        "flipX": false,
        "shadowDepth": 65
      },
      "views": {
        "front": {
          "fileHint": "сосед 10.png",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.276,
              "y1": 0.551,
              "x2": 0.433,
              "y2": 0.876
            },
            "head_angry": {
              "x1": 0.283,
              "y1": 0.195,
              "x2": 0.44,
              "y2": 0.515
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 332,
              "y": 257,
              "rot": 0,
              "scale": 0.96,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 332,
              "y": 257,
              "rot": 0,
              "scale": 0.96,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 332,
              "y": 257,
              "rot": 0,
              "scale": 0.96,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 263,
              "y": 256,
              "rot": 2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 438,
              "y": 262,
              "rot": -4,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 326,
              "y": 910,
              "rot": 0,
              "scale": 1.26,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 466,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": true,
          "useThreeEmotions": true,
          "altViewMode": "segmented_sheet"
        },
        "side": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        },
        "back": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": false,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        }
      }
    },
    "slot_1795388591508": {
      "id": "slot_1795388591508",
      "name": "7. Сосед 7",
      "fileHint": "сосед 3.png",
      "assignedDoorId": "door_25_1795388271890",
      "presetType": "lantern6",
      "bgMode": "auto",
      "bgThreshold": 32,
      "light": {
        "attachTo": "prop",
        "x": 477,
        "y": 726,
        "glowRadius": 155,
        "bgLightRadius": 520,
        "intensity": 110,
        "dustRadius": 58,
        "dustCount": 18,
        "flickerSpeed": 100
      },
      "placements": {
        "rig_editor": {
          "offsetX": 0,
          "offsetY": 0,
          "scale": 1,
          "flipX": false,
          "shadowDepth": 0,
          "customBgHint": ""
        },
        "peephole": {
          "offsetX": 0,
          "offsetY": 60,
          "scale": 1.08,
          "flipX": false,
          "shadowDepth": 35,
          "customBgHint": "события/глазок 2.jpg"
        },
        "door_peek": {
          "offsetX": -22,
          "offsetY": 183,
          "scale": 1.22,
          "flipX": false,
          "shadowDepth": 65
        },
        "hallway": {
          "offsetX": 0,
          "offsetY": 30,
          "scale": 0.86,
          "flipX": false,
          "shadowDepth": 25,
          "customBgHint": "события/подъезд 1/1.jpg"
        },
        "apartment": {
          "offsetX": 0,
          "offsetY": 35,
          "scale": 0.9,
          "flipX": false,
          "shadowDepth": 20,
          "customBgHint": ""
        }
      },
      "doorPlacementsByDoorId": {
        "door_23": {
          "offsetX": -44,
          "offsetY": 237,
          "scale": 1.46,
          "flipX": false,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_26_1795388368979": {
          "offsetX": 9,
          "offsetY": 43,
          "scale": 0.92,
          "flipX": true,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_28_1795388495533": {
          "offsetX": -44,
          "offsetY": 237,
          "scale": 1.46,
          "flipX": false,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "door_25_1795388271890": {
          "offsetX": -22,
          "offsetY": 183,
          "scale": 1.22,
          "flipX": false,
          "shadowDepth": 65
        }
      },
      "doorPlacement": {
        "offsetX": -22,
        "offsetY": 183,
        "scale": 1.22,
        "flipX": false,
        "shadowDepth": 65
      },
      "views": {
        "front": {
          "fileHint": "сосед 3.png",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.269,
              "y1": 0.502,
              "x2": 0.426,
              "y2": 0.827
            },
            "head_angry": {
              "x1": 0.294,
              "y1": 0.034,
              "x2": 0.451,
              "y2": 0.354
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 342,
              "y": 256,
              "rot": 0,
              "scale": 0.94,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 342,
              "y": 256,
              "rot": 0,
              "scale": 0.94,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 342,
              "y": 256,
              "rot": 0,
              "scale": 0.94,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 260,
              "y": 261,
              "rot": 2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 456,
              "y": 254,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 470,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": true,
          "useThreeEmotions": true,
          "altViewMode": "segmented_sheet"
        },
        "side": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": true,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        },
        "back": {
          "fileHint": "",
          "crops": {
            "head": {
              "x1": 0.11,
              "y1": 0.03,
              "x2": 0.298,
              "y2": 0.355
            },
            "head_happy": {
              "x1": 0.298,
              "y1": 0.03,
              "x2": 0.455,
              "y2": 0.355
            },
            "head_angry": {
              "x1": 0.298,
              "y1": 0.36,
              "x2": 0.455,
              "y2": 0.68
            },
            "torso": {
              "x1": 0.462,
              "y1": 0.04,
              "x2": 0.622,
              "y2": 0.482
            },
            "rightArm": {
              "x1": 0.092,
              "y1": 0.39,
              "x2": 0.22,
              "y2": 0.79
            },
            "leftArm": {
              "x1": 0.722,
              "y1": 0.115,
              "x2": 0.825,
              "y2": 0.562
            },
            "legs": {
              "x1": 0.412,
              "y1": 0.492,
              "x2": 0.59,
              "y2": 0.975
            },
            "prop": {
              "x1": 0.695,
              "y1": 0.535,
              "x2": 0.848,
              "y2": 0.89
            }
          },
          "parts": {
            "head": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_happy": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "head_angry": {
              "x": 326,
              "y": 216,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.88
            },
            "torso": {
              "x": 329,
              "y": 456,
              "rot": 0,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.85
            },
            "rightArm": {
              "x": 265,
              "y": 252,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.55,
              "pivotY": 0.1
            },
            "leftArm": {
              "x": 433,
              "y": 262,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.45,
              "pivotY": 0.1
            },
            "legs": {
              "x": 338,
              "y": 862,
              "rot": 0,
              "scale": 1.2,
              "pivotX": 0.5,
              "pivotY": 0.92
            },
            "prop": {
              "x": 449,
              "y": 567,
              "rot": -2,
              "scale": 1,
              "pivotX": 0.5,
              "pivotY": 0.06
            }
          },
          "usePropLayer": true,
          "propPendulumSwing": true,
          "headInFrontOfTorso": true,
          "leftArmInFrontOfTorso": false,
          "rightArmInFrontOfTorso": false,
          "useThreeEmotions": false,
          "altViewMode": "segmented_sheet"
        }
      }
    }
  },
  "doorsByApt": {
    "16": {
      "id": "door_16_1795388201395",
      "aptNumber": 16,
      "name": "Кв. 16",
      "fileHint": "16 открытая.jpg",
      "box": {
        "x1": 0.552,
        "y1": 0.085,
        "x2": 0.655,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "assignedSlotId": "slot_1795367470486",
      "doorPlacement": {
        "offsetX": 46,
        "offsetY": 59,
        "scale": 0.86,
        "flipX": true,
        "shadowDepth": 65,
        "customBgHint": ""
      }
    },
    "17": {
      "id": "door_17_1794956249959",
      "aptNumber": 17,
      "name": "Кв. 17",
      "fileHint": "17 открытая.jpg",
      "box": {
        "x1": 0.356,
        "y1": 0.062,
        "x2": 0.426,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795310354424",
      "doorPlacement": {
        "offsetX": -61,
        "offsetY": 143,
        "scale": 1.19,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    "18": {
      "id": "door_18_1795369876771",
      "aptNumber": 18,
      "name": "Кв. 18",
      "fileHint": "18 открытая.jpg",
      "box": {
        "x1": 0.558,
        "y1": 0,
        "x2": 0.753,
        "y2": 0.998
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "assignedSlotId": "slot_1795368528739",
      "doorPlacement": {
        "offsetX": -26,
        "offsetY": 146,
        "scale": 1.22,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    "19": {
      "id": "door_19_1795370254104",
      "aptNumber": 19,
      "name": "Кв. 19",
      "fileHint": "19 открытая.jpg",
      "box": {
        "x1": 0.565,
        "y1": 0.104,
        "x2": 0.648,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "assignedSlotId": "slot_1795368678082",
      "doorPlacement": {
        "offsetX": -56,
        "offsetY": 105,
        "scale": 1.1,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    "20": {
      "id": "door_19",
      "aptNumber": 20,
      "name": "Кв. 20",
      "fileHint": "20 открытая.jpg",
      "box": {
        "x1": 0.413,
        "y1": 0.305,
        "x2": 0.487,
        "y2": 1
      },
      "darkThreshold": 19,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795368528739",
      "doorPlacement": {
        "offsetX": 46,
        "offsetY": 59,
        "scale": 0.86,
        "flipX": true,
        "shadowDepth": 65,
        "customBgHint": ""
      }
    },
    "21": {
      "id": "door_21_1795370052697",
      "aptNumber": 21,
      "name": "Кв. 21",
      "fileHint": "21 открытая.jpg",
      "box": {
        "x1": 0.412,
        "y1": 0.235,
        "x2": 0.502,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795367905137",
      "doorPlacement": {
        "offsetX": -46,
        "offsetY": 158,
        "scale": 1.1,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    "23": {
      "id": "door_23_1795370216264",
      "aptNumber": 23,
      "name": "Кв. 23",
      "fileHint": "23 открытая.jpg",
      "box": {
        "x1": 0.552,
        "y1": 0.085,
        "x2": 0.655,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "assignedSlotId": "slot_1795368678082",
      "doorPlacement": {
        "offsetX": 0,
        "offsetY": 45,
        "scale": 0.92,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    "25": {
      "id": "door_25_1795388271890",
      "aptNumber": 25,
      "name": "Кв. 25",
      "fileHint": "25 открытая.jpg",
      "box": {
        "x1": 0.376,
        "y1": 0.128,
        "x2": 0.548,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795388591508",
      "doorPlacement": {
        "offsetX": -22,
        "offsetY": 183,
        "scale": 1.22,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    "26": {
      "id": "door_26_1795388368979",
      "aptNumber": 26,
      "name": "Кв. 26",
      "fileHint": "26 открытая.jpg",
      "box": {
        "x1": 0.4,
        "y1": 0.161,
        "x2": 0.51,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795368528739",
      "doorPlacement": {
        "offsetX": 42,
        "offsetY": 115,
        "scale": 1.07,
        "flipX": true,
        "shadowDepth": 65
      }
    },
    "27": {
      "id": "door_27_1795388455679",
      "aptNumber": 27,
      "name": "Кв. 27",
      "fileHint": "27 открытая.jpg",
      "box": {
        "x1": 0.379,
        "y1": 0.216,
        "x2": 0.462,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795367470486",
      "doorPlacement": {
        "offsetX": -42,
        "offsetY": 104,
        "scale": 1.01,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    "28": {
      "id": "door_28_1795388495533",
      "aptNumber": 28,
      "name": "Кв. 28",
      "fileHint": "28 открытая.jpg",
      "box": {
        "x1": 0.392,
        "y1": 0.132,
        "x2": 0.501,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795369084186",
      "doorPlacement": {
        "offsetX": -40,
        "offsetY": 45,
        "scale": 1.01,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    "undefined": {
      "id": "door_22",
      "name": "Дверь 22 (Справа)",
      "fileHint": "22 открытая.jpg",
      "box": {
        "x1": 0.585,
        "y1": 0.115,
        "x2": 0.64,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "assignedSlotId": "slot_1795310354424",
      "doorPlacement": {
        "offsetX": 56,
        "offsetY": 81,
        "scale": 1.04,
        "flipX": true,
        "shadowDepth": 65
      }
    }
  },
  "doors": [
    {
      "id": "door_23",
      "name": "Дверь 23 (Слева)",
      "fileHint": "23 открытая.jpg",
      "box": {
        "x1": 0.316,
        "y1": 0,
        "x2": 0.519,
        "y2": 1
      },
      "darkThreshold": 26,
      "hingeSide": "right",
      "doorPlacement": {
        "offsetX": -63,
        "offsetY": 214,
        "scale": 1.46,
        "flipX": false,
        "shadowDepth": 65,
        "customBgHint": ""
      },
      "assignedSlotId": "slot_1795368678082"
    },
    {
      "id": "door_19",
      "name": "Кв. 20",
      "fileHint": "20 открытая.jpg",
      "box": {
        "x1": 0.413,
        "y1": 0.305,
        "x2": 0.487,
        "y2": 1
      },
      "darkThreshold": 19,
      "hingeSide": "right",
      "doorPlacement": {
        "offsetX": 46,
        "offsetY": 59,
        "scale": 0.86,
        "flipX": true,
        "shadowDepth": 65,
        "customBgHint": ""
      },
      "aptNumber": 20,
      "assignedSlotId": "slot_1795368528739"
    },
    {
      "id": "door_22",
      "name": "Дверь 22 (Справа)",
      "fileHint": "22 открытая.jpg",
      "box": {
        "x1": 0.585,
        "y1": 0.115,
        "x2": 0.64,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "doorPlacement": {
        "offsetX": 56,
        "offsetY": 81,
        "scale": 1.04,
        "flipX": true,
        "shadowDepth": 65
      },
      "assignedSlotId": "slot_1795310354424"
    },
    {
      "id": "door_17_1794956249959",
      "aptNumber": 17,
      "name": "Кв. 17",
      "fileHint": "17 открытая.jpg",
      "box": {
        "x1": 0.356,
        "y1": 0.062,
        "x2": 0.426,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795310354424",
      "doorPlacement": {
        "offsetX": -61,
        "offsetY": 143,
        "scale": 1.19,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    {
      "id": "door_18_1795369876771",
      "aptNumber": 18,
      "name": "Кв. 18",
      "fileHint": "18 открытая.jpg",
      "box": {
        "x1": 0.558,
        "y1": 0,
        "x2": 0.753,
        "y2": 0.998
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "assignedSlotId": "slot_1795368528739",
      "doorPlacement": {
        "offsetX": -26,
        "offsetY": 146,
        "scale": 1.22,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    {
      "id": "door_21_1795370052697",
      "aptNumber": 21,
      "name": "Кв. 21",
      "fileHint": "21 открытая.jpg",
      "box": {
        "x1": 0.412,
        "y1": 0.235,
        "x2": 0.502,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795367905137",
      "doorPlacement": {
        "offsetX": -46,
        "offsetY": 158,
        "scale": 1.1,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    {
      "id": "door_23_1795370216264",
      "aptNumber": 23,
      "name": "Кв. 23",
      "fileHint": "23 открытая.jpg",
      "box": {
        "x1": 0.552,
        "y1": 0.085,
        "x2": 0.655,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "assignedSlotId": "slot_1795368678082",
      "doorPlacement": {
        "offsetX": 0,
        "offsetY": 45,
        "scale": 0.92,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    {
      "id": "door_19_1795370254104",
      "aptNumber": 19,
      "name": "Кв. 19",
      "fileHint": "19 открытая.jpg",
      "box": {
        "x1": 0.565,
        "y1": 0.104,
        "x2": 0.648,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "assignedSlotId": "slot_1795368678082",
      "doorPlacement": {
        "offsetX": -56,
        "offsetY": 105,
        "scale": 1.1,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    {
      "id": "door_16_1795388201395",
      "aptNumber": 16,
      "name": "Кв. 16",
      "fileHint": "16 открытая.jpg",
      "box": {
        "x1": 0.552,
        "y1": 0.085,
        "x2": 0.655,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "left",
      "assignedSlotId": "slot_1795367470486",
      "doorPlacement": {
        "offsetX": 46,
        "offsetY": 59,
        "scale": 0.86,
        "flipX": true,
        "shadowDepth": 65,
        "customBgHint": ""
      }
    },
    {
      "id": "door_25_1795388271890",
      "aptNumber": 25,
      "name": "Кв. 25",
      "fileHint": "25 открытая.jpg",
      "box": {
        "x1": 0.376,
        "y1": 0.128,
        "x2": 0.548,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795388591508",
      "doorPlacement": {
        "offsetX": -22,
        "offsetY": 183,
        "scale": 1.22,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    {
      "id": "door_26_1795388368979",
      "aptNumber": 26,
      "name": "Кв. 26",
      "fileHint": "26 открытая.jpg",
      "box": {
        "x1": 0.4,
        "y1": 0.161,
        "x2": 0.51,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795368528739",
      "doorPlacement": {
        "offsetX": 42,
        "offsetY": 115,
        "scale": 1.07,
        "flipX": true,
        "shadowDepth": 65
      }
    },
    {
      "id": "door_27_1795388455679",
      "aptNumber": 27,
      "name": "Кв. 27",
      "fileHint": "27 открытая.jpg",
      "box": {
        "x1": 0.379,
        "y1": 0.216,
        "x2": 0.462,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795367470486",
      "doorPlacement": {
        "offsetX": -42,
        "offsetY": 104,
        "scale": 1.01,
        "flipX": false,
        "shadowDepth": 65
      }
    },
    {
      "id": "door_28_1795388495533",
      "aptNumber": 28,
      "name": "Кв. 28",
      "fileHint": "28 открытая.jpg",
      "box": {
        "x1": 0.392,
        "y1": 0.132,
        "x2": 0.501,
        "y2": 1
      },
      "darkThreshold": 24,
      "hingeSide": "right",
      "assignedSlotId": "slot_1795369084186",
      "doorPlacement": {
        "offsetX": -40,
        "offsetY": 45,
        "scale": 1.01,
        "flipX": false,
        "shadowDepth": 65
      }
    }
  ],
  "slots": [
    {
      "id": "slot_1795310354424",
      "name": "8. Старик (Свеча) (Копия) (Копия)",
      "config": {
        "presetType": "lantern6",
        "bgMode": "auto",
        "bgThreshold": 34,
        "showLightGizmo": true,
        "views": {
          "front": {
            "crops": {
              "head": {
                "x1": 0.126,
                "y1": 0.022,
                "x2": 0.306,
                "y2": 0.301
              },
              "head_happy": {
                "x1": 0.267,
                "y1": 0.493,
                "x2": 0.425,
                "y2": 0.762
              },
              "head_angry": {
                "x1": 0.297,
                "y1": 0.043,
                "x2": 0.466,
                "y2": 0.302
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 356,
                "y": 189,
                "rot": 0,
                "scale": 0.94,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 356,
                "y": 189,
                "rot": 0,
                "scale": 0.94,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 356,
                "y": 189,
                "rot": 0,
                "scale": 0.94,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 271,
                "y": 275,
                "rot": 12,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 449,
                "y": 264,
                "rot": -6,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 348,
                "y": 916,
                "rot": 0,
                "scale": 1.28,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 485,
                "y": 570,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": true,
            "useThreeEmotions": true,
            "altViewMode": "segmented_sheet",
            "fileHint": "сосед 1.png"
          },
          "side": {
            "crops": {
              "head": {
                "x1": 0.125,
                "y1": 0.035,
                "x2": 0.285,
                "y2": 0.365
              },
              "head_happy": {
                "x1": 0.288,
                "y1": 0.035,
                "x2": 0.445,
                "y2": 0.365
              },
              "head_angry": {
                "x1": 0.288,
                "y1": 0.37,
                "x2": 0.445,
                "y2": 0.685
              },
              "torso": {
                "x1": 0.45,
                "y1": 0.04,
                "x2": 0.625,
                "y2": 0.49
              },
              "rightArm": {
                "x1": 0.085,
                "y1": 0.385,
                "x2": 0.225,
                "y2": 0.82
              },
              "leftArm": {
                "x1": 0.635,
                "y1": 0.085,
                "x2": 0.845,
                "y2": 0.64
              },
              "legs": {
                "x1": 0.415,
                "y1": 0.48,
                "x2": 0.6,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.66,
                "y1": 0.33,
                "x2": 0.77,
                "y2": 0.63
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 258,
                "y": 252,
                "rot": -3,
                "scale": 1,
                "pivotX": 0.48,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 412,
                "y": 256,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.68,
                "pivotY": 0.1
              },
              "legs": {
                "x": 334,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 385,
                "y": 470,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.5
              }
            },
            "usePropLayer": false,
            "propPendulumSwing": false,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet",
            "fileHint": ""
          },
          "back": {
            "crops": {
              "head": {
                "x1": 0.125,
                "y1": 0.035,
                "x2": 0.285,
                "y2": 0.365
              },
              "head_happy": {
                "x1": 0.288,
                "y1": 0.035,
                "x2": 0.445,
                "y2": 0.365
              },
              "head_angry": {
                "x1": 0.288,
                "y1": 0.37,
                "x2": 0.445,
                "y2": 0.685
              },
              "torso": {
                "x1": 0.45,
                "y1": 0.04,
                "x2": 0.625,
                "y2": 0.49
              },
              "rightArm": {
                "x1": 0.085,
                "y1": 0.385,
                "x2": 0.225,
                "y2": 0.82
              },
              "leftArm": {
                "x1": 0.635,
                "y1": 0.085,
                "x2": 0.845,
                "y2": 0.64
              },
              "legs": {
                "x1": 0.415,
                "y1": 0.48,
                "x2": 0.6,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.66,
                "y1": 0.33,
                "x2": 0.77,
                "y2": 0.63
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 258,
                "y": 252,
                "rot": -3,
                "scale": 1,
                "pivotX": 0.48,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 412,
                "y": 256,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.68,
                "pivotY": 0.1
              },
              "legs": {
                "x": 334,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 385,
                "y": 470,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.5
              }
            },
            "usePropLayer": false,
            "propPendulumSwing": false,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": false,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet",
            "fileHint": ""
          }
        },
        "crops": {
          "head": {
            "x1": 0.126,
            "y1": 0.022,
            "x2": 0.306,
            "y2": 0.301
          },
          "head_happy": {
            "x1": 0.267,
            "y1": 0.493,
            "x2": 0.425,
            "y2": 0.762
          },
          "head_angry": {
            "x1": 0.297,
            "y1": 0.043,
            "x2": 0.466,
            "y2": 0.302
          },
          "torso": {
            "x1": 0.462,
            "y1": 0.04,
            "x2": 0.622,
            "y2": 0.482
          },
          "rightArm": {
            "x1": 0.092,
            "y1": 0.39,
            "x2": 0.22,
            "y2": 0.79
          },
          "leftArm": {
            "x1": 0.722,
            "y1": 0.115,
            "x2": 0.825,
            "y2": 0.562
          },
          "legs": {
            "x1": 0.412,
            "y1": 0.492,
            "x2": 0.59,
            "y2": 0.975
          },
          "prop": {
            "x1": 0.695,
            "y1": 0.535,
            "x2": 0.848,
            "y2": 0.89
          }
        },
        "parts": {
          "head": {
            "x": 356,
            "y": 189,
            "rot": 0,
            "scale": 0.94,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_happy": {
            "x": 356,
            "y": 189,
            "rot": 0,
            "scale": 0.94,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_angry": {
            "x": 356,
            "y": 189,
            "rot": 0,
            "scale": 0.94,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "torso": {
            "x": 329,
            "y": 456,
            "rot": 0,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.85
          },
          "rightArm": {
            "x": 271,
            "y": 275,
            "rot": 12,
            "scale": 1,
            "pivotX": 0.55,
            "pivotY": 0.1
          },
          "leftArm": {
            "x": 449,
            "y": 264,
            "rot": -6,
            "scale": 1,
            "pivotX": 0.45,
            "pivotY": 0.1
          },
          "legs": {
            "x": 348,
            "y": 916,
            "rot": 0,
            "scale": 1.28,
            "pivotX": 0.5,
            "pivotY": 0.92
          },
          "prop": {
            "x": 485,
            "y": 570,
            "rot": 0,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.06
          }
        },
        "usePropLayer": false,
        "propPendulumSwing": false,
        "leftArmInFrontOfTorso": true,
        "rightArmInFrontOfTorso": true,
        "useThreeEmotions": true,
        "altViewMode": "segmented_sheet",
        "light": {
          "attachTo": "prop",
          "x": 495,
          "y": 733,
          "glowRadius": 155,
          "bgLightRadius": 520,
          "intensity": 110,
          "dustRadius": 58,
          "dustCount": 18,
          "flickerSpeed": 100
        },
        "placements": {
          "rig_editor": {
            "offsetX": 0,
            "offsetY": 0,
            "scale": 1,
            "flipX": false,
            "shadowDepth": 0,
            "customBgHint": ""
          },
          "peephole": {
            "offsetX": 0,
            "offsetY": 60,
            "scale": 1.08,
            "flipX": false,
            "shadowDepth": 35,
            "customBgHint": "события/глазок 2.jpg"
          },
          "door_peek": {
            "offsetX": -61,
            "offsetY": 143,
            "scale": 1.19,
            "flipX": false,
            "shadowDepth": 65
          },
          "hallway": {
            "offsetX": 16,
            "offsetY": 361,
            "scale": 1.43,
            "flipX": false,
            "shadowDepth": 25,
            "customBgHint": "события/подъезд 1/1.jpg"
          },
          "apartment": {
            "offsetX": 35,
            "offsetY": 153,
            "scale": 1.08,
            "flipX": false,
            "shadowDepth": 20,
            "customBgHint": ""
          }
        },
        "doorPlacement": {
          "offsetX": -61,
          "offsetY": 143,
          "scale": 1.19,
          "flipX": false,
          "shadowDepth": 65
        },
        "doorPlacementsByDoorId": {
          "door_19": {
            "offsetX": -36,
            "offsetY": 143,
            "scale": 0.92,
            "flipX": false,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_22": {
            "offsetX": 56,
            "offsetY": 81,
            "scale": 1.04,
            "flipX": true,
            "shadowDepth": 65
          },
          "door_23": {
            "offsetX": 56,
            "offsetY": 81,
            "scale": 1.04,
            "flipX": true,
            "shadowDepth": 65
          },
          "door_18_1795369876771": {
            "offsetX": 56,
            "offsetY": 81,
            "scale": 1.04,
            "flipX": true,
            "shadowDepth": 65
          },
          "door_17_1794956249959": {
            "offsetX": -61,
            "offsetY": 143,
            "scale": 1.19,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_26_1795388368979": {
            "offsetX": -61,
            "offsetY": 143,
            "scale": 1.19,
            "flipX": false,
            "shadowDepth": 65
          }
        },
        "assignedDoorId": "door_17_1794956249959",
        "fileHint": "сосед 1.png"
      }
    },
    {
      "id": "slot_1795367470486",
      "name": "2. Сосед 2",
      "config": {
        "presetType": "lantern6",
        "bgMode": "auto",
        "bgThreshold": 32,
        "showLightGizmo": true,
        "views": {
          "front": {
            "fileHint": "сосед 2.png",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.269,
                "y1": 0.491,
                "x2": 0.426,
                "y2": 0.816
              },
              "head_angry": {
                "x1": 0.297,
                "y1": 0.044,
                "x2": 0.454,
                "y2": 0.364
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 337,
                "y": 248,
                "rot": 0,
                "scale": 0.88,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 337,
                "y": 248,
                "rot": 0,
                "scale": 0.88,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 337,
                "y": 248,
                "rot": 0,
                "scale": 0.9,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 261,
                "rot": 10,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 452,
                "y": 267,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 336,
                "y": 903,
                "rot": 0,
                "scale": 1.28,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 460,
                "y": 570,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": true,
            "useThreeEmotions": true,
            "altViewMode": "segmented_sheet"
          },
          "side": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          },
          "back": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": false,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          }
        },
        "crops": {
          "head": {
            "x1": 0.11,
            "y1": 0.03,
            "x2": 0.298,
            "y2": 0.355
          },
          "head_happy": {
            "x1": 0.269,
            "y1": 0.491,
            "x2": 0.426,
            "y2": 0.816
          },
          "head_angry": {
            "x1": 0.297,
            "y1": 0.044,
            "x2": 0.454,
            "y2": 0.364
          },
          "torso": {
            "x1": 0.462,
            "y1": 0.04,
            "x2": 0.622,
            "y2": 0.482
          },
          "rightArm": {
            "x1": 0.092,
            "y1": 0.39,
            "x2": 0.22,
            "y2": 0.79
          },
          "leftArm": {
            "x1": 0.722,
            "y1": 0.115,
            "x2": 0.825,
            "y2": 0.562
          },
          "legs": {
            "x1": 0.412,
            "y1": 0.492,
            "x2": 0.59,
            "y2": 0.975
          },
          "prop": {
            "x1": 0.695,
            "y1": 0.535,
            "x2": 0.848,
            "y2": 0.89
          }
        },
        "parts": {
          "head": {
            "x": 337,
            "y": 248,
            "rot": 0,
            "scale": 0.88,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_happy": {
            "x": 337,
            "y": 248,
            "rot": 0,
            "scale": 0.88,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_angry": {
            "x": 337,
            "y": 248,
            "rot": 0,
            "scale": 0.9,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "torso": {
            "x": 329,
            "y": 456,
            "rot": 0,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.85
          },
          "rightArm": {
            "x": 265,
            "y": 261,
            "rot": 10,
            "scale": 1,
            "pivotX": 0.55,
            "pivotY": 0.1
          },
          "leftArm": {
            "x": 452,
            "y": 267,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.45,
            "pivotY": 0.1
          },
          "legs": {
            "x": 336,
            "y": 903,
            "rot": 0,
            "scale": 1.28,
            "pivotX": 0.5,
            "pivotY": 0.92
          },
          "prop": {
            "x": 460,
            "y": 570,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.06
          }
        },
        "usePropLayer": true,
        "propPendulumSwing": true,
        "leftArmInFrontOfTorso": true,
        "rightArmInFrontOfTorso": true,
        "useThreeEmotions": true,
        "altViewMode": "segmented_sheet",
        "light": {
          "attachTo": "prop",
          "x": 464,
          "y": 724,
          "glowRadius": 155,
          "bgLightRadius": 520,
          "intensity": 110,
          "dustRadius": 58,
          "dustCount": 18,
          "flickerSpeed": 100
        },
        "assignedDoorId": "door_27_1795388455679",
        "placements": {
          "rig_editor": {
            "offsetX": 0,
            "offsetY": 0,
            "scale": 1,
            "flipX": false,
            "shadowDepth": 0,
            "customBgHint": ""
          },
          "peephole": {
            "offsetX": 0,
            "offsetY": 60,
            "scale": 1.08,
            "flipX": false,
            "shadowDepth": 35,
            "customBgHint": "события/глазок 2.jpg"
          },
          "door_peek": {
            "offsetX": -42,
            "offsetY": 104,
            "scale": 1.01,
            "flipX": false,
            "shadowDepth": 65
          },
          "hallway": {
            "offsetX": 0,
            "offsetY": 30,
            "scale": 0.86,
            "flipX": false,
            "shadowDepth": 25,
            "customBgHint": "события/подъезд 1/1.jpg"
          },
          "apartment": {
            "offsetX": 0,
            "offsetY": 35,
            "scale": 0.9,
            "flipX": false,
            "shadowDepth": 20,
            "customBgHint": ""
          }
        },
        "doorPlacement": {
          "offsetX": -42,
          "offsetY": 104,
          "scale": 1.01,
          "flipX": false,
          "shadowDepth": 65
        },
        "fileHint": "сосед 2.png",
        "doorPlacementsByDoorId": {
          "door_22": {
            "offsetX": 0,
            "offsetY": 45,
            "scale": 0.92,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_23": {
            "offsetX": 108,
            "offsetY": 217,
            "scale": 1.49,
            "flipX": true,
            "shadowDepth": 65
          },
          "door_19": {
            "offsetX": 46,
            "offsetY": 59,
            "scale": 0.86,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_16_1795388201395": {
            "offsetX": 46,
            "offsetY": 59,
            "scale": 0.86,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_25_1795388271890": {
            "offsetX": -30,
            "offsetY": 153,
            "scale": 1.19,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_26_1795388368979": {
            "offsetX": 69,
            "offsetY": 56,
            "scale": 0.98,
            "flipX": true,
            "shadowDepth": 65
          },
          "door_27_1795388455679": {
            "offsetX": -42,
            "offsetY": 104,
            "scale": 1.01,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_28_1795388495533": {
            "offsetX": -40,
            "offsetY": 38,
            "scale": 0.98,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_21_1795370052697": {
            "offsetX": -42,
            "offsetY": 104,
            "scale": 1.01,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_17_1794956249959": {
            "offsetX": -42,
            "offsetY": 104,
            "scale": 1.01,
            "flipX": false,
            "shadowDepth": 65
          }
        }
      }
    },
    {
      "id": "slot_1795367905137",
      "name": "4. Сосед 4",
      "config": {
        "presetType": "lantern6",
        "bgMode": "auto",
        "bgThreshold": 32,
        "showLightGizmo": true,
        "views": {
          "front": {
            "fileHint": "сосед 5.png",
            "crops": {
              "head": {
                "x1": 0.113,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.313
              },
              "head_happy": {
                "x1": 0.275,
                "y1": 0.498,
                "x2": 0.422,
                "y2": 0.777
              },
              "head_angry": {
                "x1": 0.293,
                "y1": 0.044,
                "x2": 0.455,
                "y2": 0.318
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 349,
                "y": 212,
                "rot": 0,
                "scale": 0.92,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 349,
                "y": 212,
                "rot": 0,
                "scale": 0.92,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 349,
                "y": 212,
                "rot": 0,
                "scale": 0.92,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 286,
                "y": 268,
                "rot": 10,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 456,
                "y": 278,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 344,
                "y": 892,
                "rot": 0,
                "scale": 1.22,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 470,
                "y": 579,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": true,
            "useThreeEmotions": true,
            "altViewMode": "segmented_sheet"
          },
          "side": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          },
          "back": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": false,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          }
        },
        "crops": {
          "head": {
            "x1": 0.113,
            "y1": 0.03,
            "x2": 0.298,
            "y2": 0.313
          },
          "head_happy": {
            "x1": 0.275,
            "y1": 0.498,
            "x2": 0.422,
            "y2": 0.777
          },
          "head_angry": {
            "x1": 0.293,
            "y1": 0.044,
            "x2": 0.455,
            "y2": 0.318
          },
          "torso": {
            "x1": 0.462,
            "y1": 0.04,
            "x2": 0.622,
            "y2": 0.482
          },
          "rightArm": {
            "x1": 0.092,
            "y1": 0.39,
            "x2": 0.22,
            "y2": 0.79
          },
          "leftArm": {
            "x1": 0.722,
            "y1": 0.115,
            "x2": 0.825,
            "y2": 0.562
          },
          "legs": {
            "x1": 0.412,
            "y1": 0.492,
            "x2": 0.59,
            "y2": 0.975
          },
          "prop": {
            "x1": 0.695,
            "y1": 0.535,
            "x2": 0.848,
            "y2": 0.89
          }
        },
        "parts": {
          "head": {
            "x": 349,
            "y": 212,
            "rot": 0,
            "scale": 0.92,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_happy": {
            "x": 349,
            "y": 212,
            "rot": 0,
            "scale": 0.92,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_angry": {
            "x": 349,
            "y": 212,
            "rot": 0,
            "scale": 0.92,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "torso": {
            "x": 329,
            "y": 456,
            "rot": 0,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.85
          },
          "rightArm": {
            "x": 286,
            "y": 268,
            "rot": 10,
            "scale": 1,
            "pivotX": 0.55,
            "pivotY": 0.1
          },
          "leftArm": {
            "x": 456,
            "y": 278,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.45,
            "pivotY": 0.1
          },
          "legs": {
            "x": 344,
            "y": 892,
            "rot": 0,
            "scale": 1.22,
            "pivotX": 0.5,
            "pivotY": 0.92
          },
          "prop": {
            "x": 470,
            "y": 579,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.06
          }
        },
        "usePropLayer": true,
        "propPendulumSwing": true,
        "leftArmInFrontOfTorso": true,
        "rightArmInFrontOfTorso": true,
        "useThreeEmotions": true,
        "altViewMode": "segmented_sheet",
        "light": {
          "attachTo": "prop",
          "x": 480,
          "y": 735,
          "glowRadius": 155,
          "bgLightRadius": 520,
          "intensity": 110,
          "dustRadius": 58,
          "dustCount": 18,
          "flickerSpeed": 100
        },
        "assignedDoorId": "door_21_1795370052697",
        "placements": {
          "rig_editor": {
            "offsetX": 0,
            "offsetY": 0,
            "scale": 1,
            "flipX": false,
            "shadowDepth": 0,
            "customBgHint": ""
          },
          "peephole": {
            "offsetX": 0,
            "offsetY": 60,
            "scale": 1.08,
            "flipX": false,
            "shadowDepth": 35,
            "customBgHint": "события/глазок 2.jpg"
          },
          "door_peek": {
            "offsetX": -46,
            "offsetY": 158,
            "scale": 1.1,
            "flipX": false,
            "shadowDepth": 65
          },
          "hallway": {
            "offsetX": 0,
            "offsetY": 30,
            "scale": 0.86,
            "flipX": false,
            "shadowDepth": 25,
            "customBgHint": "события/подъезд 1/1.jpg"
          },
          "apartment": {
            "offsetX": 0,
            "offsetY": 35,
            "scale": 0.9,
            "flipX": false,
            "shadowDepth": 20,
            "customBgHint": ""
          }
        },
        "doorPlacement": {
          "offsetX": -46,
          "offsetY": 158,
          "scale": 1.1,
          "flipX": false,
          "shadowDepth": 65
        },
        "fileHint": "сосед 5.png",
        "doorPlacementsByDoorId": {
          "door_17_1794956249959": {
            "offsetX": 0,
            "offsetY": 45,
            "scale": 0.92,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_22": {
            "offsetX": 45,
            "offsetY": 90,
            "scale": 1.1,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_18_1795369876771": {
            "offsetX": -28,
            "offsetY": 70,
            "scale": 1.4,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_19": {
            "offsetX": 46,
            "offsetY": 59,
            "scale": 0.86,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_21_1795370052697": {
            "offsetX": -46,
            "offsetY": 158,
            "scale": 1.1,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_19_1795370254104": {
            "offsetX": -37,
            "offsetY": 66,
            "scale": 0.92,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_27_1795388455679": {
            "offsetX": -37,
            "offsetY": 66,
            "scale": 0.92,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_23": {
            "offsetX": -37,
            "offsetY": 66,
            "scale": 0.92,
            "flipX": false,
            "shadowDepth": 65
          }
        }
      }
    },
    {
      "id": "slot_1795368528739",
      "name": "6. Сосед 6",
      "config": {
        "presetType": "lantern6",
        "bgMode": "auto",
        "bgThreshold": 32,
        "showLightGizmo": true,
        "views": {
          "front": {
            "fileHint": "сосед 8.png",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.27,
                "y1": 0.52,
                "x2": 0.427,
                "y2": 0.845
              },
              "head_angry": {
                "x1": 0.293,
                "y1": 0.049,
                "x2": 0.45,
                "y2": 0.369
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 336,
                "y": 215,
                "rot": 0,
                "scale": 0.96,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 336,
                "y": 215,
                "rot": 0,
                "scale": 0.94,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 336,
                "y": 215,
                "rot": 0,
                "scale": 0.96,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 260,
                "y": 263,
                "rot": 2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 450,
                "y": 266,
                "rot": -4,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 337,
                "y": 902,
                "rot": 0,
                "scale": 1.24,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 473,
                "y": 574,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": true,
            "useThreeEmotions": true,
            "altViewMode": "segmented_sheet"
          },
          "side": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          },
          "back": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": false,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          }
        },
        "crops": {
          "head": {
            "x1": 0.11,
            "y1": 0.03,
            "x2": 0.298,
            "y2": 0.355
          },
          "head_happy": {
            "x1": 0.27,
            "y1": 0.52,
            "x2": 0.427,
            "y2": 0.845
          },
          "head_angry": {
            "x1": 0.293,
            "y1": 0.049,
            "x2": 0.45,
            "y2": 0.369
          },
          "torso": {
            "x1": 0.462,
            "y1": 0.04,
            "x2": 0.622,
            "y2": 0.482
          },
          "rightArm": {
            "x1": 0.092,
            "y1": 0.39,
            "x2": 0.22,
            "y2": 0.79
          },
          "leftArm": {
            "x1": 0.722,
            "y1": 0.115,
            "x2": 0.825,
            "y2": 0.562
          },
          "legs": {
            "x1": 0.412,
            "y1": 0.492,
            "x2": 0.59,
            "y2": 0.975
          },
          "prop": {
            "x1": 0.695,
            "y1": 0.535,
            "x2": 0.848,
            "y2": 0.89
          }
        },
        "parts": {
          "head": {
            "x": 336,
            "y": 215,
            "rot": 0,
            "scale": 0.96,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_happy": {
            "x": 336,
            "y": 215,
            "rot": 0,
            "scale": 0.94,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_angry": {
            "x": 336,
            "y": 215,
            "rot": 0,
            "scale": 0.96,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "torso": {
            "x": 329,
            "y": 456,
            "rot": 0,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.85
          },
          "rightArm": {
            "x": 260,
            "y": 263,
            "rot": 2,
            "scale": 1,
            "pivotX": 0.55,
            "pivotY": 0.1
          },
          "leftArm": {
            "x": 450,
            "y": 266,
            "rot": -4,
            "scale": 1,
            "pivotX": 0.45,
            "pivotY": 0.1
          },
          "legs": {
            "x": 337,
            "y": 902,
            "rot": 0,
            "scale": 1.24,
            "pivotX": 0.5,
            "pivotY": 0.92
          },
          "prop": {
            "x": 473,
            "y": 574,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.06
          }
        },
        "usePropLayer": true,
        "propPendulumSwing": true,
        "leftArmInFrontOfTorso": true,
        "rightArmInFrontOfTorso": true,
        "useThreeEmotions": true,
        "altViewMode": "segmented_sheet",
        "light": {
          "attachTo": "prop",
          "x": 480,
          "y": 739,
          "glowRadius": 155,
          "bgLightRadius": 520,
          "intensity": 110,
          "dustRadius": 58,
          "dustCount": 18,
          "flickerSpeed": 100
        },
        "assignedDoorId": "door_26_1795388368979",
        "placements": {
          "rig_editor": {
            "offsetX": 0,
            "offsetY": 0,
            "scale": 1,
            "flipX": false,
            "shadowDepth": 0,
            "customBgHint": ""
          },
          "peephole": {
            "offsetX": 0,
            "offsetY": 60,
            "scale": 1.08,
            "flipX": false,
            "shadowDepth": 35,
            "customBgHint": "события/глазок 2.jpg"
          },
          "door_peek": {
            "offsetX": 42,
            "offsetY": 115,
            "scale": 1.07,
            "flipX": true,
            "shadowDepth": 65
          },
          "hallway": {
            "offsetX": 0,
            "offsetY": 30,
            "scale": 0.86,
            "flipX": false,
            "shadowDepth": 25,
            "customBgHint": "события/подъезд 1/1.jpg"
          },
          "apartment": {
            "offsetX": 0,
            "offsetY": 35,
            "scale": 0.9,
            "flipX": false,
            "shadowDepth": 20,
            "customBgHint": ""
          }
        },
        "doorPlacement": {
          "offsetX": 42,
          "offsetY": 115,
          "scale": 1.07,
          "flipX": true,
          "shadowDepth": 65
        },
        "fileHint": "сосед 8.png",
        "doorPlacementsByDoorId": {
          "door_22": {
            "offsetX": 0,
            "offsetY": 45,
            "scale": 0.92,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_19_1795370254104": {
            "offsetX": 0,
            "offsetY": 45,
            "scale": 0.92,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_21_1795370052697": {
            "offsetX": 0,
            "offsetY": 45,
            "scale": 0.92,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_23": {
            "offsetX": 0,
            "offsetY": 45,
            "scale": 0.92,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_18_1795369876771": {
            "offsetX": -26,
            "offsetY": 146,
            "scale": 1.22,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_19": {
            "offsetX": 46,
            "offsetY": 59,
            "scale": 0.86,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_17_1794956249959": {
            "offsetX": -26,
            "offsetY": 146,
            "scale": 1.22,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_27_1795388455679": {
            "offsetX": -26,
            "offsetY": 146,
            "scale": 1.22,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_26_1795388368979": {
            "offsetX": 42,
            "offsetY": 115,
            "scale": 1.07,
            "flipX": true,
            "shadowDepth": 65
          }
        }
      }
    },
    {
      "id": "slot_1795368678082",
      "name": "7. Сосед 7",
      "config": {
        "presetType": "lantern6",
        "bgMode": "auto",
        "bgThreshold": 32,
        "showLightGizmo": true,
        "views": {
          "front": {
            "fileHint": "сосед 9.png",
            "crops": {
              "head": {
                "x1": 0.116,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.313
              },
              "head_happy": {
                "x1": 0.29,
                "y1": 0.524,
                "x2": 0.432,
                "y2": 0.792
              },
              "head_angry": {
                "x1": 0.297,
                "y1": 0.06,
                "x2": 0.453,
                "y2": 0.313
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.43,
                "y1": 0.492,
                "x2": 0.578,
                "y2": 0.981
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 335,
                "y": 208,
                "rot": 0,
                "scale": 0.92,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 335,
                "y": 208,
                "rot": 0,
                "scale": 0.92,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 335,
                "y": 208,
                "rot": 0,
                "scale": 0.92,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 331,
                "y": 866,
                "rot": 0,
                "scale": 1.22,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 444,
                "y": 566,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": true,
            "useThreeEmotions": true,
            "altViewMode": "segmented_sheet"
          },
          "side": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          },
          "back": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": false,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          }
        },
        "crops": {
          "head": {
            "x1": 0.116,
            "y1": 0.03,
            "x2": 0.298,
            "y2": 0.313
          },
          "head_happy": {
            "x1": 0.29,
            "y1": 0.524,
            "x2": 0.432,
            "y2": 0.792
          },
          "head_angry": {
            "x1": 0.297,
            "y1": 0.06,
            "x2": 0.453,
            "y2": 0.313
          },
          "torso": {
            "x1": 0.462,
            "y1": 0.04,
            "x2": 0.622,
            "y2": 0.482
          },
          "rightArm": {
            "x1": 0.092,
            "y1": 0.39,
            "x2": 0.22,
            "y2": 0.79
          },
          "leftArm": {
            "x1": 0.722,
            "y1": 0.115,
            "x2": 0.825,
            "y2": 0.562
          },
          "legs": {
            "x1": 0.43,
            "y1": 0.492,
            "x2": 0.578,
            "y2": 0.981
          },
          "prop": {
            "x1": 0.695,
            "y1": 0.535,
            "x2": 0.848,
            "y2": 0.89
          }
        },
        "parts": {
          "head": {
            "x": 335,
            "y": 208,
            "rot": 0,
            "scale": 0.92,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_happy": {
            "x": 335,
            "y": 208,
            "rot": 0,
            "scale": 0.92,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_angry": {
            "x": 335,
            "y": 208,
            "rot": 0,
            "scale": 0.92,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "torso": {
            "x": 329,
            "y": 456,
            "rot": 0,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.85
          },
          "rightArm": {
            "x": 265,
            "y": 252,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.55,
            "pivotY": 0.1
          },
          "leftArm": {
            "x": 433,
            "y": 262,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.45,
            "pivotY": 0.1
          },
          "legs": {
            "x": 331,
            "y": 866,
            "rot": 0,
            "scale": 1.22,
            "pivotX": 0.5,
            "pivotY": 0.92
          },
          "prop": {
            "x": 444,
            "y": 566,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.06
          }
        },
        "usePropLayer": true,
        "propPendulumSwing": true,
        "leftArmInFrontOfTorso": true,
        "rightArmInFrontOfTorso": true,
        "useThreeEmotions": true,
        "altViewMode": "segmented_sheet",
        "light": {
          "attachTo": "prop",
          "x": 464,
          "y": 724,
          "glowRadius": 155,
          "bgLightRadius": 520,
          "intensity": 110,
          "dustRadius": 58,
          "dustCount": 18,
          "flickerSpeed": 100
        },
        "assignedDoorId": "door_23",
        "placements": {
          "rig_editor": {
            "offsetX": 0,
            "offsetY": 0,
            "scale": 1,
            "flipX": false,
            "shadowDepth": 0,
            "customBgHint": ""
          },
          "peephole": {
            "offsetX": 0,
            "offsetY": 60,
            "scale": 1.08,
            "flipX": false,
            "shadowDepth": 35,
            "customBgHint": "события/глазок 2.jpg"
          },
          "door_peek": {
            "offsetX": -63,
            "offsetY": 214,
            "scale": 1.46,
            "flipX": false,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "hallway": {
            "offsetX": 0,
            "offsetY": 30,
            "scale": 0.86,
            "flipX": false,
            "shadowDepth": 25,
            "customBgHint": "события/подъезд 1/1.jpg"
          },
          "apartment": {
            "offsetX": 0,
            "offsetY": 35,
            "scale": 0.9,
            "flipX": false,
            "shadowDepth": 20,
            "customBgHint": ""
          }
        },
        "doorPlacement": {
          "offsetX": -63,
          "offsetY": 214,
          "scale": 1.46,
          "flipX": false,
          "shadowDepth": 65,
          "customBgHint": ""
        },
        "fileHint": "сосед 9.png",
        "doorPlacementsByDoorId": {
          "door_22": {
            "offsetX": 0,
            "offsetY": 45,
            "scale": 0.92,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_23": {
            "offsetX": -63,
            "offsetY": 214,
            "scale": 1.46,
            "flipX": false,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_19_1795370254104": {
            "offsetX": -56,
            "offsetY": 105,
            "scale": 1.1,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_18_1795369876771": {
            "offsetX": -56,
            "offsetY": 105,
            "scale": 1.1,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_23_1795370216264": {
            "offsetX": 0,
            "offsetY": 45,
            "scale": 0.92,
            "flipX": false,
            "shadowDepth": 65
          },
          "door_26_1795388368979": {
            "offsetX": -63,
            "offsetY": 214,
            "scale": 1.46,
            "flipX": false,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_25_1795388271890": {
            "offsetX": -63,
            "offsetY": 214,
            "scale": 1.46,
            "flipX": false,
            "shadowDepth": 65,
            "customBgHint": ""
          }
        }
      }
    },
    {
      "id": "slot_1795369084186",
      "name": "8. Сосед 8",
      "config": {
        "presetType": "lantern6",
        "bgMode": "auto",
        "bgThreshold": 32,
        "showLightGizmo": true,
        "views": {
          "front": {
            "fileHint": "сосед 10.png",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.276,
                "y1": 0.551,
                "x2": 0.433,
                "y2": 0.876
              },
              "head_angry": {
                "x1": 0.283,
                "y1": 0.195,
                "x2": 0.44,
                "y2": 0.515
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 332,
                "y": 257,
                "rot": 0,
                "scale": 0.96,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 332,
                "y": 257,
                "rot": 0,
                "scale": 0.96,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 332,
                "y": 257,
                "rot": 0,
                "scale": 0.96,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 263,
                "y": 256,
                "rot": 2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 438,
                "y": 262,
                "rot": -4,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 326,
                "y": 910,
                "rot": 0,
                "scale": 1.26,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 466,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": true,
            "useThreeEmotions": true,
            "altViewMode": "segmented_sheet"
          },
          "side": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          },
          "back": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": false,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          }
        },
        "crops": {
          "head": {
            "x1": 0.11,
            "y1": 0.03,
            "x2": 0.298,
            "y2": 0.355
          },
          "head_happy": {
            "x1": 0.276,
            "y1": 0.551,
            "x2": 0.433,
            "y2": 0.876
          },
          "head_angry": {
            "x1": 0.283,
            "y1": 0.195,
            "x2": 0.44,
            "y2": 0.515
          },
          "torso": {
            "x1": 0.462,
            "y1": 0.04,
            "x2": 0.622,
            "y2": 0.482
          },
          "rightArm": {
            "x1": 0.092,
            "y1": 0.39,
            "x2": 0.22,
            "y2": 0.79
          },
          "leftArm": {
            "x1": 0.722,
            "y1": 0.115,
            "x2": 0.825,
            "y2": 0.562
          },
          "legs": {
            "x1": 0.412,
            "y1": 0.492,
            "x2": 0.59,
            "y2": 0.975
          },
          "prop": {
            "x1": 0.695,
            "y1": 0.535,
            "x2": 0.848,
            "y2": 0.89
          }
        },
        "parts": {
          "head": {
            "x": 332,
            "y": 257,
            "rot": 0,
            "scale": 0.96,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_happy": {
            "x": 332,
            "y": 257,
            "rot": 0,
            "scale": 0.96,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_angry": {
            "x": 332,
            "y": 257,
            "rot": 0,
            "scale": 0.96,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "torso": {
            "x": 329,
            "y": 456,
            "rot": 0,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.85
          },
          "rightArm": {
            "x": 263,
            "y": 256,
            "rot": 2,
            "scale": 1,
            "pivotX": 0.55,
            "pivotY": 0.1
          },
          "leftArm": {
            "x": 438,
            "y": 262,
            "rot": -4,
            "scale": 1,
            "pivotX": 0.45,
            "pivotY": 0.1
          },
          "legs": {
            "x": 326,
            "y": 910,
            "rot": 0,
            "scale": 1.26,
            "pivotX": 0.5,
            "pivotY": 0.92
          },
          "prop": {
            "x": 466,
            "y": 567,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.06
          }
        },
        "usePropLayer": true,
        "propPendulumSwing": true,
        "leftArmInFrontOfTorso": true,
        "rightArmInFrontOfTorso": true,
        "useThreeEmotions": true,
        "altViewMode": "segmented_sheet",
        "light": {
          "attachTo": "prop",
          "x": 481,
          "y": 724,
          "glowRadius": 155,
          "bgLightRadius": 520,
          "intensity": 110,
          "dustRadius": 58,
          "dustCount": 18,
          "flickerSpeed": 100
        },
        "assignedDoorId": "door_28_1795388495533",
        "placements": {
          "rig_editor": {
            "offsetX": 0,
            "offsetY": 0,
            "scale": 1,
            "flipX": false,
            "shadowDepth": 0,
            "customBgHint": ""
          },
          "peephole": {
            "offsetX": 0,
            "offsetY": 60,
            "scale": 1.08,
            "flipX": false,
            "shadowDepth": 35,
            "customBgHint": "события/глазок 2.jpg"
          },
          "door_peek": {
            "offsetX": -40,
            "offsetY": 45,
            "scale": 1.01,
            "flipX": false,
            "shadowDepth": 65
          },
          "hallway": {
            "offsetX": 0,
            "offsetY": 30,
            "scale": 0.86,
            "flipX": false,
            "shadowDepth": 25,
            "customBgHint": "события/подъезд 1/1.jpg"
          },
          "apartment": {
            "offsetX": 0,
            "offsetY": 35,
            "scale": 0.9,
            "flipX": false,
            "shadowDepth": 20,
            "customBgHint": ""
          }
        },
        "doorPlacement": {
          "offsetX": -40,
          "offsetY": 45,
          "scale": 1.01,
          "flipX": false,
          "shadowDepth": 65
        },
        "fileHint": "сосед 10.png",
        "doorPlacementsByDoorId": {
          "door_22": {
            "offsetX": 8,
            "offsetY": 41,
            "scale": 0.92,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_23": {
            "offsetX": 70,
            "offsetY": 264,
            "scale": 1.55,
            "flipX": true,
            "shadowDepth": 65
          },
          "door_19_1795370254104": {
            "offsetX": 70,
            "offsetY": 264,
            "scale": 1.55,
            "flipX": true,
            "shadowDepth": 65
          },
          "door_28_1795388495533": {
            "offsetX": -40,
            "offsetY": 45,
            "scale": 1.01,
            "flipX": false,
            "shadowDepth": 65
          }
        }
      }
    },
    {
      "id": "slot_1795388591508",
      "name": "7. Сосед 7",
      "config": {
        "presetType": "lantern6",
        "bgMode": "auto",
        "bgThreshold": 32,
        "showLightGizmo": true,
        "views": {
          "front": {
            "fileHint": "сосед 3.png",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.269,
                "y1": 0.502,
                "x2": 0.426,
                "y2": 0.827
              },
              "head_angry": {
                "x1": 0.294,
                "y1": 0.034,
                "x2": 0.451,
                "y2": 0.354
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 342,
                "y": 256,
                "rot": 0,
                "scale": 0.94,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 342,
                "y": 256,
                "rot": 0,
                "scale": 0.94,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 342,
                "y": 256,
                "rot": 0,
                "scale": 0.94,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 260,
                "y": 261,
                "rot": 2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 456,
                "y": 254,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 470,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": true,
            "useThreeEmotions": true,
            "altViewMode": "segmented_sheet"
          },
          "side": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": true,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          },
          "back": {
            "fileHint": "",
            "crops": {
              "head": {
                "x1": 0.11,
                "y1": 0.03,
                "x2": 0.298,
                "y2": 0.355
              },
              "head_happy": {
                "x1": 0.298,
                "y1": 0.03,
                "x2": 0.455,
                "y2": 0.355
              },
              "head_angry": {
                "x1": 0.298,
                "y1": 0.36,
                "x2": 0.455,
                "y2": 0.68
              },
              "torso": {
                "x1": 0.462,
                "y1": 0.04,
                "x2": 0.622,
                "y2": 0.482
              },
              "rightArm": {
                "x1": 0.092,
                "y1": 0.39,
                "x2": 0.22,
                "y2": 0.79
              },
              "leftArm": {
                "x1": 0.722,
                "y1": 0.115,
                "x2": 0.825,
                "y2": 0.562
              },
              "legs": {
                "x1": 0.412,
                "y1": 0.492,
                "x2": 0.59,
                "y2": 0.975
              },
              "prop": {
                "x1": 0.695,
                "y1": 0.535,
                "x2": 0.848,
                "y2": 0.89
              }
            },
            "parts": {
              "head": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_happy": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "head_angry": {
                "x": 326,
                "y": 216,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.88
              },
              "torso": {
                "x": 329,
                "y": 456,
                "rot": 0,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.85
              },
              "rightArm": {
                "x": 265,
                "y": 252,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.55,
                "pivotY": 0.1
              },
              "leftArm": {
                "x": 433,
                "y": 262,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.45,
                "pivotY": 0.1
              },
              "legs": {
                "x": 338,
                "y": 862,
                "rot": 0,
                "scale": 1.2,
                "pivotX": 0.5,
                "pivotY": 0.92
              },
              "prop": {
                "x": 449,
                "y": 567,
                "rot": -2,
                "scale": 1,
                "pivotX": 0.5,
                "pivotY": 0.06
              }
            },
            "usePropLayer": true,
            "propPendulumSwing": true,
            "headInFrontOfTorso": true,
            "leftArmInFrontOfTorso": false,
            "rightArmInFrontOfTorso": false,
            "useThreeEmotions": false,
            "altViewMode": "segmented_sheet"
          }
        },
        "crops": {
          "head": {
            "x1": 0.11,
            "y1": 0.03,
            "x2": 0.298,
            "y2": 0.355
          },
          "head_happy": {
            "x1": 0.269,
            "y1": 0.502,
            "x2": 0.426,
            "y2": 0.827
          },
          "head_angry": {
            "x1": 0.294,
            "y1": 0.034,
            "x2": 0.451,
            "y2": 0.354
          },
          "torso": {
            "x1": 0.462,
            "y1": 0.04,
            "x2": 0.622,
            "y2": 0.482
          },
          "rightArm": {
            "x1": 0.092,
            "y1": 0.39,
            "x2": 0.22,
            "y2": 0.79
          },
          "leftArm": {
            "x1": 0.722,
            "y1": 0.115,
            "x2": 0.825,
            "y2": 0.562
          },
          "legs": {
            "x1": 0.412,
            "y1": 0.492,
            "x2": 0.59,
            "y2": 0.975
          },
          "prop": {
            "x1": 0.695,
            "y1": 0.535,
            "x2": 0.848,
            "y2": 0.89
          }
        },
        "parts": {
          "head": {
            "x": 342,
            "y": 256,
            "rot": 0,
            "scale": 0.94,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_happy": {
            "x": 342,
            "y": 256,
            "rot": 0,
            "scale": 0.94,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "head_angry": {
            "x": 342,
            "y": 256,
            "rot": 0,
            "scale": 0.94,
            "pivotX": 0.5,
            "pivotY": 0.88
          },
          "torso": {
            "x": 329,
            "y": 456,
            "rot": 0,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.85
          },
          "rightArm": {
            "x": 260,
            "y": 261,
            "rot": 2,
            "scale": 1,
            "pivotX": 0.55,
            "pivotY": 0.1
          },
          "leftArm": {
            "x": 456,
            "y": 254,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.45,
            "pivotY": 0.1
          },
          "legs": {
            "x": 338,
            "y": 862,
            "rot": 0,
            "scale": 1.2,
            "pivotX": 0.5,
            "pivotY": 0.92
          },
          "prop": {
            "x": 470,
            "y": 567,
            "rot": -2,
            "scale": 1,
            "pivotX": 0.5,
            "pivotY": 0.06
          }
        },
        "usePropLayer": true,
        "propPendulumSwing": true,
        "leftArmInFrontOfTorso": true,
        "rightArmInFrontOfTorso": true,
        "useThreeEmotions": true,
        "altViewMode": "segmented_sheet",
        "light": {
          "attachTo": "prop",
          "x": 477,
          "y": 726,
          "glowRadius": 155,
          "bgLightRadius": 520,
          "intensity": 110,
          "dustRadius": 58,
          "dustCount": 18,
          "flickerSpeed": 100
        },
        "assignedDoorId": "door_25_1795388271890",
        "placements": {
          "rig_editor": {
            "offsetX": 0,
            "offsetY": 0,
            "scale": 1,
            "flipX": false,
            "shadowDepth": 0,
            "customBgHint": ""
          },
          "peephole": {
            "offsetX": 0,
            "offsetY": 60,
            "scale": 1.08,
            "flipX": false,
            "shadowDepth": 35,
            "customBgHint": "события/глазок 2.jpg"
          },
          "door_peek": {
            "offsetX": -22,
            "offsetY": 183,
            "scale": 1.22,
            "flipX": false,
            "shadowDepth": 65
          },
          "hallway": {
            "offsetX": 0,
            "offsetY": 30,
            "scale": 0.86,
            "flipX": false,
            "shadowDepth": 25,
            "customBgHint": "события/подъезд 1/1.jpg"
          },
          "apartment": {
            "offsetX": 0,
            "offsetY": 35,
            "scale": 0.9,
            "flipX": false,
            "shadowDepth": 20,
            "customBgHint": ""
          }
        },
        "doorPlacement": {
          "offsetX": -22,
          "offsetY": 183,
          "scale": 1.22,
          "flipX": false,
          "shadowDepth": 65
        },
        "fileHint": "сосед 3.png",
        "doorPlacementsByDoorId": {
          "door_23": {
            "offsetX": -44,
            "offsetY": 237,
            "scale": 1.46,
            "flipX": false,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_26_1795388368979": {
            "offsetX": 9,
            "offsetY": 43,
            "scale": 0.92,
            "flipX": true,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_28_1795388495533": {
            "offsetX": -44,
            "offsetY": 237,
            "scale": 1.46,
            "flipX": false,
            "shadowDepth": 65,
            "customBgHint": ""
          },
          "door_25_1795388271890": {
            "offsetX": -22,
            "offsetY": 183,
            "scale": 1.22,
            "flipX": false,
            "shadowDepth": 65
          }
        }
      }
    }
  ]
};

function detectBackgroundMode(imgData, w, h, userMode) {
            if (userMode && userMode !== 'auto') return userMode;
            const d = imgData.data;
            const corners = [0, (w - 1) * 4, ((h - 1) * w) * 4, ((h - 1) * w + (w - 1)) * 4];
            let transCount = 0, whiteCount = 0;
            for (const idx of corners) {
                const r = d[idx], g = d[idx + 1], b = d[idx + 2], a = d[idx + 3];
                if (a < 35) transCount++;
                else if (0.299 * r + 0.587 * g + 0.114 * b > 200) whiteCount++;
            }
            if (transCount >= 2) return 'none';
            if (whiteCount >= 2) return 'white';
            return 'dark';
        }

function cleanWhiteBackgroundWithGlow(d, w, h, threshold) {
            const visited = new Uint8Array(w * h);
            const queue = [];
            for (let x = 0; x < w; x++) { queue.push(x, (h - 1) * w + x); }
            for (let y = 0; y < h; y++) { queue.push(y * w, y * w + (w - 1)); }
            const whiteCut = 252 - threshold * 0.7;

            while (queue.length > 0) {
                const pos = queue.pop();
                if (visited[pos]) continue;
                visited[pos] = 1;
                const idx = pos * 4;
                const r = d[idx], g = d[idx + 1], b = d[idx + 2], a = d[idx + 3];
                if (a === 0) continue;
                const luma = 0.299 * r + 0.587 * g + 0.114 * b;
                const warmth = r - b;
                const sat = Math.max(r, g, b) - Math.min(r, g, b);

                if (luma > whiteCut && sat < 26) {
                    d[idx + 3] = 0;
                } else if (luma > 165 && warmth > 20) {
                    const glowAlpha = Math.min(1, Math.max(0, (warmth - 12) / 145 + (250 - luma) / 190));
                    d[idx] = Math.min(255, Math.round(r * 1.02));
                    d[idx + 1] = Math.round(g * 0.78);
                    d[idx + 2] = Math.round(b * 0.25);
                    d[idx + 3] = Math.round(glowAlpha * 235);
                } else continue;

                const px = pos % w, py = (pos / w) | 0;
                if (px > 0 && !visited[pos - 1]) queue.push(pos - 1);
                if (px < w - 1 && !visited[pos + 1]) queue.push(pos + 1);
                if (py > 0 && !visited[pos - w]) queue.push(pos - w);
                if (py < h - 1 && !visited[pos + w]) queue.push(pos + w);
            }

            for (let pass = 0; pass < 2; pass++) {
                for (let y = 1; y < h - 1; y++) {
                    for (let x = 1; x < w - 1; x++) {
                        const pos = y * w + x, idx = pos * 4;
                        if (d[idx + 3] === 0) continue;
                        if (d[(pos - 1) * 4 + 3] < 25 || d[(pos + 1) * 4 + 3] < 25 || d[(pos - w) * 4 + 3] < 25 || d[(pos + w) * 4 + 3] < 25) {
                            const r = d[idx], g = d[idx + 1], b = d[idx + 2];
                            const luma = 0.299 * r + 0.587 * g + 0.114 * b;
                            if (luma > 180 && (r - b) < 28) d[idx + 3] = 0;
                            else if (luma > 135 && (r - b) < 25) {
                                d[idx] = Math.round(r * 0.35); d[idx + 1] = Math.round(g * 0.35); d[idx + 2] = Math.round(b * 0.35);
                                d[idx + 3] = Math.round(d[idx + 3] * 0.65);
                            }
                        }
                    }
                }
            }
        }

function cleanDarkBackground(d, w, h, threshold, isHead) {
            const cR = d[0], cG = d[1], cB = d[2];
            const visited = new Uint8Array(w * h);
            const queue = [];
            for (let x = 0; x < w; x++) { queue.push(x, (h - 1) * w + x); }
            for (let y = 0; y < h; y++) { queue.push(y * w, y * w + (w - 1)); }
            const lumaCut = Math.max(12, threshold * 0.78);

            while (queue.length > 0) {
                const pos = queue.pop();
                if (visited[pos]) continue;
                visited[pos] = 1;
                const idx = pos * 4;
                const r = d[idx], g = d[idx + 1], b = d[idx + 2];
                const luma = 0.299 * r + 0.587 * g + 0.114 * b;
                const diff = Math.abs(r - cR) + Math.abs(g - cG) + Math.abs(b - cB);
                if (luma < lumaCut && diff < threshold * 1.15) {
                    d[idx + 3] = 0;
                    const px = pos % w, py = (pos / w) | 0;
                    if (px > 0 && !visited[pos - 1]) queue.push(pos - 1);
                    if (px < w - 1 && !visited[pos + 1]) queue.push(pos + 1);
                    if (py > 0 && !visited[pos - w]) queue.push(pos - w);
                    if (py < h - 1 && !visited[pos + w]) queue.push(pos + w);
                }
            }
            if (isHead) cleanHeadSidePockets(d, w, h);
        }

function cleanTransparentPngFringe(d, w, h, threshold, isHead) {
            for (let y = 1; y < h - 1; y++) {
                for (let x = 1; x < w - 1; x++) {
                    const pos = y * w + x, idx = pos * 4;
                    if (d[idx + 3] === 0) continue;
                    if (d[(pos - 1) * 4 + 3] < 25 || d[(pos + 1) * 4 + 3] < 25 || d[(pos - w) * 4 + 3] < 25 || d[(pos + w) * 4 + 3] < 25) {
                        const r = d[idx], g = d[idx + 1], b = d[idx + 2];
                        const luma = 0.299 * r + 0.587 * g + 0.114 * b;
                        if (luma > 255 - threshold * 1.5 && (Math.max(r, g, b) - Math.min(r, g, b)) < 38) d[idx + 3] = 0;
                    }
                }
            }
            if (isHead) cleanHeadSidePockets(d, w, h);
        }

function cleanHeadSidePockets(d, w, h) {
            const hasShade = new Uint8Array(w * h);
            for (let i = 0; i < w * h; i++) {
                const idx = i * 4;
                if (d[idx + 3] < 30) continue;
                const r = d[idx], g = d[idx + 1], b = d[idx + 2];
                if ((0.299 * r + 0.587 * g + 0.114 * b) >= 26 || (Math.max(r, g, b) - Math.min(r, g, b)) >= 11) hasShade[i] = 1;
            }
            const keepMask = new Uint8Array(w * h);
            for (let y = 0; y < h; y++) {
                for (let x = 0; x < w; x++) {
                    if (!hasShade[y * w + x]) continue;
                    for (let dy = -2; dy <= 2; dy++) {
                        const ny = y + dy;
                        if (ny < 0 || ny >= h) continue;
                        for (let dx = -2; dx <= 2; dx++) {
                            const nx = x + dx;
                            if (nx >= 0 && nx < w) keepMask[ny * w + nx] = 1;
                        }
                    }
                }
            }
            for (let y = Math.floor(h * 0.45); y < h; y++) {
                for (let x = 0; x < w; x++) {
                    const nx = x / w, pos = y * w + x;
                    if ((nx < 0.39 || nx > 0.61) && !keepMask[pos]) d[pos * 4 + 3] = 0;
                }
            }
        }

function drawMovableLightAndDust(g, lx, ly, lightCfg, time, customParticles = null) {
            if (!lightCfg || lightCfg.intensity <= 0) return;
            const intensity = lightCfg.intensity / 100;
            const flickerFreq = (lightCfg.flickerSpeed || 100) / 100;
            const flicker = 0.93 + Math.sin(time * 15 * flickerFreq) * 0.045 + Math.cos(time * 26 * flickerFreq) * 0.025;

            g.save();
            g.globalCompositeOperation = 'screen';

            const coreR = Math.max(18, lightCfg.glowRadius * 0.34 * flicker);
            const coreGrad = g.createRadialGradient(lx, ly, 1, lx, ly, coreR);
            coreGrad.addColorStop(0, `rgba(255, 250, 215, ${Math.min(1, 0.92 * intensity)})`);
            coreGrad.addColorStop(0.45, `rgba(255, 180, 68, ${Math.min(1, 0.65 * intensity)})`);
            coreGrad.addColorStop(1, 'rgba(225, 90, 15, 0)');
            g.fillStyle = coreGrad;
            g.beginPath(); g.arc(lx, ly, coreR, 0, Math.PI * 2); g.fill();

            const haloR = Math.max(35, lightCfg.glowRadius * flicker);
            const haloGrad = g.createRadialGradient(lx, ly, 4, lx, ly, haloR);
            haloGrad.addColorStop(0, `rgba(255, 185, 78, ${Math.min(1, 0.68 * intensity)})`);
            haloGrad.addColorStop(0.42, `rgba(245, 122, 28, ${Math.min(1, 0.38 * intensity)})`);
            haloGrad.addColorStop(0.75, `rgba(190, 65, 14, ${Math.min(1, 0.14 * intensity)})`);
            haloGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            g.fillStyle = haloGrad;
            g.beginPath(); g.arc(lx, ly, haloR, 0, Math.PI * 2); g.fill();

            const pList = customParticles || (typeof state !== 'undefined' && state && state.particles) || [];
            const count = Math.min(pList.length, Math.max(0, lightCfg.dustCount || 0));
            const maxDustR = Math.max(12, lightCfg.dustRadius || 48);
            for (let i = 0; i < count; i++) {
                const sp = pList[i];
                const a = sp.angle + time * sp.speed * 0.55;
                const r = 8 + ((sp.distFrac * maxDustR + time * 9 * sp.speed) % maxDustR);
                const sx = lx + Math.cos(a) * r;
                const sy = ly + Math.sin(a * 1.15) * r - (r * 0.18);
                const radialFade = Math.max(0, 1 - r / (maxDustR + 4));
                const twinkle = 0.62 + 0.38 * Math.sin(time * 4.8 + sp.phase);
                const alpha = Math.min(1, radialFade * twinkle * 0.9 * intensity);
                if (alpha > 0.03) {
                    g.fillStyle = `rgba(255, 208, 102, ${alpha})`;
                    g.beginPath(); g.arc(sx, sy, sp.size, 0, Math.PI * 2); g.fill();
                }
            }
            g.restore();
        }

window.NpcRigPlayer = (function createRuntimeNpcRigPlayer() {
            let activeLoopId = null;
            let activeVisibilityHandler = null;
            let runToken = 0;
            const CACHE_LIMIT = 6;
            const bankCache = {};
            const doorCache = {};
            const bgCache = {};

            // Собственный автономный пул пылинок внутри плеера (не зависит от state редактора!)
            const runtimeParticles = [];
            for (let i = 0; i < 60; i++) {
                runtimeParticles.push({
                    angle: (i / 60) * Math.PI * 2 + ((i * 17) % 10) * 0.05,
                    distFrac: ((i * 29) % 100) / 100,
                    speed: 0.35 + (((i * 13) % 75) / 100),
                    size: 1.0 + (((i * 7) % 15) / 10),
                    phase: ((i * 23) % 62) * 0.1
                });
            }

            function disposeCacheEntry(entry) {
                if (!entry || typeof entry !== 'object') return;
                Object.keys(entry).forEach(k => {
                    const val = entry[k];
                    if (!val) return;
                    if (typeof HTMLCanvasElement !== 'undefined' && val instanceof HTMLCanvasElement) {
                        val.width = 0; val.height = 0;
                    } else if (val && typeof val === 'object' && typeof HTMLCanvasElement !== 'undefined' && val.canvas instanceof HTMLCanvasElement) {
                        val.canvas.width = 0; val.canvas.height = 0;
                    }
                });
            }

            function setBoundedCache(cacheObj, key, value, maxEntries = CACHE_LIMIT) {
                if (Object.prototype.hasOwnProperty.call(cacheObj, key)) {
                    delete cacheObj[key];
                }
                cacheObj[key] = value;
                const keys = Object.keys(cacheObj);
                while (keys.length > maxEntries) {
                    const oldestKey = keys.shift();
                    if (oldestKey !== key) {
                        disposeCacheEntry(cacheObj[oldestKey]);
                        delete cacheObj[oldestKey];
                    }
                }
            }

            function touchBoundedCache(cacheObj, key) {
                if (!Object.prototype.hasOwnProperty.call(cacheObj, key)) return undefined;
                const val = cacheObj[key];
                delete cacheObj[key];
                cacheObj[key] = val;
                return val;
            }

            function clearCache() {
                Object.keys(bankCache).forEach(k => { disposeCacheEntry(bankCache[k]); delete bankCache[k]; });
                Object.keys(doorCache).forEach(k => { disposeCacheEntry(doorCache[k]); delete doorCache[k]; });
                Object.keys(bgCache).forEach(k => { delete bgCache[k]; });
            }

            function safeEncodePath(pathStr) {
                const s = String(pathStr || '').trim();
                if (!s) return '';
                if (/^(data:|blob:)/i.test(s)) return s;
                try {
                    return encodeURI(decodeURI(s));
                } catch (e) {
                    return encodeURI(s);
                }
            }

            function normalizeAssetBase(base) {
                if (!base) return '';
                const b = String(base).trim();
                if (!b) return '';
                return b.endsWith('/') ? b : (b + '/');
            }

            function loadImageCandidates(fileNameOrUrl, extraDirs, fallbackDataUrl, assetBase) {
                const dirs = Array.isArray(extraDirs) ? extraDirs : [];
                const basePrefix = normalizeAssetBase(assetBase);
                const candidates = [];
                const seen = {};

                function pushCandidate(rawUrl) {
                    if (!rawUrl || typeof rawUrl !== 'string') return;
                    const encoded = safeEncodePath(rawUrl);
                    if (!encoded || seen[encoded]) return;
                    seen[encoded] = true;
                    candidates.push(encoded);
                }

                if (fileNameOrUrl && typeof fileNameOrUrl === 'string' && fileNameOrUrl.trim()) {
                    const raw = fileNameOrUrl.trim().replace(/\\/g, '/');
                    const isAbsolute = /^(data:|blob:|https?:|file:|\/)/i.test(raw);
                    if (isAbsolute) {
                        pushCandidate(raw);
                    } else {
                        const clean = raw.replace(/^\.\//, '');
                        const baseName = clean.split('/').pop() || clean;
                        if (basePrefix) {
                            pushCandidate(basePrefix + clean);
                        }
                        pushCandidate(clean);
                        for (let i = 0; i < dirs.length; i++) {
                            const rawDir = String(dirs[i] || '').trim().replace(/\\/g, '/').replace(/^\.\//, '');
                            const normDir = rawDir ? (rawDir.endsWith('/') ? rawDir : (rawDir + '/')) : '';
                            if (basePrefix) {
                                pushCandidate(basePrefix + normDir + baseName);
                                if (clean !== baseName && (!normDir || !clean.startsWith(normDir))) {
                                    pushCandidate(basePrefix + normDir + clean);
                                }
                            }
                            pushCandidate(normDir + baseName);
                            if (clean !== baseName && (!normDir || !clean.startsWith(normDir))) {
                                pushCandidate(normDir + clean);
                            }
                        }
                    }
                }

                if (fallbackDataUrl && typeof fallbackDataUrl === 'string' && fallbackDataUrl.trim()) {
                    pushCandidate(fallbackDataUrl.trim());
                }

                if (candidates.length === 0) return Promise.resolve(null);

                return new Promise((resolve) => {
                    let idx = 0;
                    function tryNext() {
                        if (idx >= candidates.length) {
                            resolve(null);
                            return;
                        }
                        const src = candidates[idx++];
                        const img = new Image();
                        img.onload = () => resolve(img);
                        img.onerror = () => tryNext();
                        img.src = src;
                    }
                    tryNext();
                });
            }

            function ensureCanvas(target, opts = {}) {
                const reqW = Number(opts.width) > 0 ? Math.round(Number(opts.width)) : 0;
                const reqH = Number(opts.height) > 0 ? Math.round(Number(opts.height)) : 0;
                if (target instanceof HTMLCanvasElement) {
                    if (reqW) target.width = reqW;
                    else if (!target.width) target.width = target.clientWidth || 1280;
                    if (reqH) target.height = reqH;
                    else if (!target.height) target.height = target.clientHeight || 720;
                    return target;
                }
                let c = target.querySelector('canvas.npc-rig-canvas');
                if (!c) {
                    c = document.createElement('canvas');
                    c.className = 'npc-rig-canvas';
                    c.style.cssText = 'width:100%;height:100%;display:block;';
                    target.appendChild(c);
                }
                c.width = reqW || target.clientWidth || 1280;
                c.height = reqH || target.clientHeight || 720;
                return c;
            }

            function extractPartsFromSheetImg(img, npc, viewKey) {
                const vcfg = (npc.views && npc.views[viewKey]) || npc.views.front;
                const sw = img.width, sh = img.height;
                const scale = 780 / sh;
                const bank = { loaded: true };
                const cropKeys = ['head', 'head_happy', 'head_angry', 'torso', 'rightArm', 'leftArm', 'legs', 'prop'];

                let globalBgMode = (npc.bgMode && npc.bgMode !== 'auto') ? npc.bgMode : 'none';
                let canReadPixels = true;
                try {
                    const sampleCanvas = document.createElement('canvas');
                    sampleCanvas.width = 64; sampleCanvas.height = 64;
                    const sctx = sampleCanvas.getContext('2d');
                    sctx.drawImage(img, 0, 0, 64, 64);
                    globalBgMode = detectBackgroundMode(sctx.getImageData(0, 0, 64, 64), 64, 64, npc.bgMode || 'auto');
                } catch (e) {
                    canReadPixels = false;
                }
                const thr = npc.bgThreshold || 32;

                cropKeys.forEach(k => {
                    const c = vcfg.crops && vcfg.crops[k];
                    if (!c) return;
                    const sx = Math.max(0, Math.round(c.x1 * sw));
                    const sy = Math.max(0, Math.round(c.y1 * sh));
                    const sW = Math.max(4, Math.min(sw - sx, Math.round((c.x2 - c.x1) * sw)));
                    const sH = Math.max(4, Math.min(sh - sy, Math.round((c.y2 - c.y1) * sh)));
                    const raw = document.createElement('canvas');
                    raw.width = sW; raw.height = sH;
                    const rctx = raw.getContext('2d');
                    rctx.drawImage(img, sx, sy, sW, sH, 0, 0, sW, sH);

                    const isHead = k.startsWith('head');
                    let srcX = 0, srcY = 0, srcW = sW, srcH = sH;
                    let hasPixels = (k === 'head_happy' || k === 'head_angry') ? !!vcfg.useThreeEmotions : true;

                    if (canReadPixels) {
                        try {
                            const idata = rctx.getImageData(0, 0, sW, sH);
                            if (globalBgMode === 'white') cleanWhiteBackgroundWithGlow(idata.data, sW, sH, thr);
                            else if (globalBgMode === 'dark') cleanDarkBackground(idata.data, sW, sH, thr, isHead);
                            else cleanTransparentPngFringe(idata.data, sW, sH, thr, isHead);

                            let opaque = 0, minX = sW, maxX = -1, minY = sH, maxY = -1;
                            for (let py = 0; py < sH; py++) {
                                for (let px = 0; px < sW; px++) {
                                    if (idata.data[(py * sW + px) * 4 + 3] > 45) {
                                        opaque++;
                                        if (px < minX) minX = px; if (px > maxX) maxX = px;
                                        if (py < minY) minY = py; if (py > maxY) maxY = py;
                                    }
                                }
                            }
                            hasPixels = opaque > 90;
                            rctx.putImageData(idata, 0, 0);
                            if (isHead && hasPixels && maxX > minX + 6 && maxY > minY + 6) {
                                srcX = Math.max(0, minX - 2); srcY = Math.max(0, minY - 2);
                                srcW = Math.min(sW - srcX, (maxX - minX + 1) + 4);
                                srcH = Math.min(sH - srcY, (maxY - minY + 1) + 4);
                            }
                        } catch (e) {
                            canReadPixels = false;
                        }
                    }

                    const outW = Math.max(4, Math.round(srcW * scale));
                    const outH = Math.max(4, Math.round(srcH * scale));
                    const partCvs = document.createElement('canvas');
                    partCvs.width = outW; partCvs.height = outH;
                    partCvs.getContext('2d').drawImage(raw, srcX, srcY, srcW, srcH, 0, 0, outW, outH);
                    bank[k] = { canvas: partCvs, w: outW, h: outH, hasPixels };
                });

                // Разделяем ноги на левую и правую для анимации ходьбы в игре
                if (bank.legs && bank.legs.w > 4 && bank.legs.h > 4) {
                    const lw = bank.legs.w, lh = bank.legs.h;
                    const rLeg = document.createElement('canvas'); rLeg.width = lw; rLeg.height = lh;
                    rLeg.getContext('2d').drawImage(bank.legs.canvas, 0, 0, Math.ceil(lw * 0.52), lh, 0, 0, Math.ceil(lw * 0.52), lh);
                    bank.rightLeg = { canvas: rLeg, w: lw, h: lh };

                    const lLeg = document.createElement('canvas'); lLeg.width = lw; lLeg.height = lh;
                    const splitX = Math.floor(lw * 0.48);
                    lLeg.getContext('2d').drawImage(bank.legs.canvas, splitX, 0, lw - splitX, lh, splitX, 0, lw - splitX, lh);
                    bank.leftLeg = { canvas: lLeg, w: lw, h: lh };
                }

                // Буферы цельной фигуры для режима auto_single (Сбоку / Спиной)
                if (viewKey !== 'front' && vcfg.altViewMode === 'auto_single') {
                    const temp = document.createElement('canvas');
                    temp.width = sw; temp.height = sh;
                    const tctx = temp.getContext('2d');
                    tctx.drawImage(img, 0, 0);
                    if (canReadPixels) {
                        try {
                            const sData = tctx.getImageData(0, 0, sw, sh);
                            if (globalBgMode === 'white') cleanWhiteBackgroundWithGlow(sData.data, sw, sh, thr);
                            else if (globalBgMode === 'dark') cleanDarkBackground(sData.data, sw, sh, thr, false);
                            else cleanTransparentPngFringe(sData.data, sw, sh, thr, false);
                            tctx.putImageData(sData, 0, 0);
                        } catch (e) {}
                    }
                    const singleScale = 760 / sh;
                    const outW = Math.max(4, Math.round(sw * singleScale));
                    const outH = Math.max(4, Math.round(sh * singleScale));
                    const splitY = Math.round(outH * 0.60);

                    const singleUpper = document.createElement('canvas');
                    singleUpper.width = outW; singleUpper.height = outH;
                    singleUpper.getContext('2d').drawImage(temp, 0, 0, sw, Math.round(sh * 0.62), 0, 0, outW, Math.round(outH * 0.62));

                    const singleLeftLeg = document.createElement('canvas');
                    singleLeftLeg.width = outW; singleLeftLeg.height = outH;
                    const singleRightLeg = document.createElement('canvas');
                    singleRightLeg.width = outW; singleRightLeg.height = outH;
                    const lctx = singleLeftLeg.getContext('2d');
                    const rctx = singleRightLeg.getContext('2d');

                    if (viewKey === 'side') {
                        rctx.drawImage(temp, 0, Math.round(sh * 0.56), sw, Math.round(sh * 0.44), 0, splitY - 12, outW, outH - splitY + 12);
                        rctx.save();
                        rctx.globalCompositeOperation = 'source-atop';
                        rctx.fillStyle = 'rgba(5, 5, 5, 0.45)';
                        rctx.fillRect(0, 0, outW, outH);
                        rctx.restore();
                        lctx.drawImage(temp, 0, Math.round(sh * 0.56), sw, Math.round(sh * 0.44), 0, splitY - 12, outW, outH - splitY + 12);
                    } else {
                        rctx.drawImage(temp, 0, Math.round(sh * 0.56), Math.round(sw * 0.52), Math.round(sh * 0.44), 0, splitY - 12, Math.round(outW * 0.52), outH - splitY + 12);
                        lctx.drawImage(temp, Math.round(sw * 0.48), Math.round(sh * 0.56), Math.round(sw * 0.52), Math.round(sh * 0.44), Math.round(outW * 0.48), splitY - 12, Math.round(outW * 0.52), outH - splitY + 12);
                    }

                    bank.singleUpper = singleUpper;
                    bank.singleLeftLeg = singleLeftLeg;
                    bank.singleRightLeg = singleRightLeg;
                    bank.singleW = outW;
                    bank.singleH = outH;
                }

                return bank;
            }

            // Загружает спрайт-лист напрямую по пути файла из папки игры (opts.sheetSrc || vcfg.fileHint || npc.fileHint), а локальный кэш редактора использует как запасной вариант
            async function prepareNpcBank(db, npc, viewKey, opts = {}) {
                const vcfg = (npc.views && npc.views[viewKey]) || npc.views.front;
                const filePath = opts.sheetSrc || (vcfg && vcfg.fileHint) || npc.fileHint || '';
                const assetBase = normalizeAssetBase(opts.assetBase);
                const cacheKey = `${npc.id}_${viewKey}_${vcfg.altViewMode || 'seg'}_${assetBase}_${filePath}`;
                const cached = touchBoundedCache(bankCache, cacheKey);
                if (cached) return cached;

                const assets = db.assets || (typeof state !== 'undefined' && state ? state.assetDataUrls : null);
                const fallbackCacheUrl = assets && assets.slotViews && assets.slotViews[npc.id] && (assets.slotViews[npc.id][viewKey] || assets.slotViews[npc.id].front);
                const img = await loadImageCandidates(filePath, ['персонажи/', 'npc/', 'события/', ''], fallbackCacheUrl, assetBase);
                if (!img) return null;
                const b = extractPartsFromSheetImg(img, npc, viewKey);
                setBoundedCache(bankCache, cacheKey, b, CACHE_LIMIT);
                return b;
            }

            // Готовит картинку двери по пути файла (opts.doorImgSrc || doorInfo.fileHint) и строит пиксельную маску переднего плана doorFgCanvas
            async function prepareDoorEntry(db, doorInfo, opts = {}) {
                const filePath = opts.doorImgSrc || (doorInfo && doorInfo.fileHint) || '';
                if (!doorInfo && !filePath) return null;
                const assetBase = normalizeAssetBase(opts.assetBase);
                const boxKey = (doorInfo && doorInfo.box) ? `${doorInfo.box.x1}_${doorInfo.box.y1}_${doorInfo.box.x2}_${doorInfo.box.y2}` : 'def';
                const cacheKey = `${(doorInfo && doorInfo.id) || 'custom'}_${(doorInfo && doorInfo.darkThreshold) || 25}_${boxKey}_${assetBase}_${filePath}`;
                const cached = touchBoundedCache(doorCache, cacheKey);
                if (cached) return cached;

                const assets = db.assets || (typeof state !== 'undefined' && state ? state.assetDataUrls : null);
                const fallbackCacheUrl = doorInfo && assets && assets.doorImages && assets.doorImages[doorInfo.id];
                const img = await loadImageCandidates(filePath, ['события/двери/', 'события/', 'двери/', ''], fallbackCacheUrl, assetBase);
                if (!img) return null;

                const w = img.width, h = img.height;
                const fgCanvas = document.createElement('canvas');
                fgCanvas.width = w; fgCanvas.height = h;
                const fctx = fgCanvas.getContext('2d');
                fctx.drawImage(img, 0, 0, w, h);

                let maskBuilt = false;
                try {
                    const idata = fctx.getImageData(0, 0, w, h);
                    const d = idata.data;
                    const box = (doorInfo && doorInfo.box) || { x1: 0.35, y1: 0.05, x2: 0.65, y2: 1.0 };
                    const bx1 = Math.max(0, Math.floor(box.x1 * w));
                    const by1 = Math.max(0, Math.floor(box.y1 * h));
                    const bx2 = Math.min(w - 1, Math.ceil(box.x2 * w));
                    const by2 = Math.min(h - 1, Math.ceil(box.y2 * h));
                    const darkCut = (doorInfo && doorInfo.darkThreshold) || 25;

                    for (let y = by1; y <= by2; y++) {
                        for (let x = bx1; x <= bx2; x++) {
                            const idx = (y * w + x) * 4;
                            const luma = 0.299 * d[idx] + 0.587 * d[idx + 1] + 0.114 * d[idx + 2];
                            if (luma <= darkCut) d[idx + 3] = 0;
                            else if (luma <= darkCut + 12) d[idx + 3] = Math.round(((luma - darkCut) / 12) * 255);
                        }
                    }
                    fctx.putImageData(idata, 0, 0);
                    maskBuilt = true;
                } catch (e) {
                    fctx.clearRect(0, 0, w, h);
                    maskBuilt = false;
                }

                const entry = { doorImg: img, doorFgCanvas: maskBuilt ? fgCanvas : null, loaded: true };
                setBoundedCache(doorCache, cacheKey, entry, CACHE_LIMIT);
                return entry;
            }

            async function prepareContextBg(db, npcId, contextKey, opts = {}) {
                const npc = db.characters && db.characters[npcId];
                const pl = npc && npc.placements && npc.placements[contextKey];
                const filePath = opts.bgImgSrc || (pl && pl.customBgHint) || '';
                const assetBase = normalizeAssetBase(opts.assetBase);
                const cacheKey = `${npcId}_${contextKey}_${assetBase}_${filePath}`;
                const cached = touchBoundedCache(bgCache, cacheKey);
                if (cached !== undefined) return cached;

                const assets = db.assets || (typeof state !== 'undefined' && state ? state.assetDataUrls : null);
                const fallbackCacheUrl = assets && assets.npcContextBgs && assets.npcContextBgs[npcId] && assets.npcContextBgs[npcId][contextKey];
                const img = await loadImageCandidates(filePath, ['события/', 'персонажи/', 'npc/', ''], fallbackCacheUrl, assetBase);
                setBoundedCache(bgCache, cacheKey, img, CACHE_LIMIT);
                return img;
            }

            async function show(opts = {}) {
                stop();
                const myToken = ++runToken;
                const db = opts.database || window.NPC_DATABASE;
                if (!db) return null;
                const doorsMap = db.doorsByApt || db.doors || {};
                let doorInfo = opts.doorApt ? (doorsMap[opts.doorApt] || (Array.isArray(db.doors) && db.doors.find(d => d.aptNumber == opts.doorApt))) : null;
                const npcId = opts.npcId || (doorInfo && doorInfo.assignedSlotId) || Object.keys(db.characters || {})[0];
                const npc = db.characters ? db.characters[npcId] : null;
                if (!npc || !opts.canvasOrContainer) return null;

                if (!doorInfo && npc.assignedDoorId && Array.isArray(db.doors)) {
                    doorInfo = db.doors.find(d => d.id === npc.assignedDoorId) || null;
                }

                const targetEl = opts.canvasOrContainer;
                const cvs = ensureCanvas(targetEl, opts);
                const g = cvs.getContext('2d');
                const explicitW = Number(opts.width) > 0 ? Math.round(Number(opts.width)) : 0;
                const explicitH = Number(opts.height) > 0 ? Math.round(Number(opts.height)) : 0;
                const transparentBg = opts.transparentBg !== undefined ? !!opts.transparentBg : true;
                const context = opts.context || 'door_peek';
                const viewKey = opts.view || (context === 'walk_side' ? 'side' : (context === 'walk_away' ? 'back' : 'front'));
                const vcfg = (npc.views && npc.views[viewKey]) || npc.views.front;

                let bank = await prepareNpcBank(db, npc, viewKey, opts);
                if (myToken !== runToken) return null;
                if (!bank && viewKey !== 'front') {
                    bank = await prepareNpcBank(db, npc, 'front', opts);
                    if (myToken !== runToken) return null;
                }
                if (!bank) return null;

                const doorEntry = context === 'door_peek' ? await prepareDoorEntry(db, doorInfo, opts) : null;
                if (myToken !== runToken) return null;

                const needCtxBg = ['peephole', 'hallway', 'apartment'].includes(context) && (!transparentBg || !!opts.bgImgSrc);
                const ctxBgImg = needCtxBg ? await prepareContextBg(db, npc.id, context, opts) : null;
                if (myToken !== runToken) return null;

                let emotion = opts.emotion || 'neutral';
                let mode = opts.mode || 'idle';
                let emerge = context === 'door_peek' ? (opts.emerge !== undefined ? Number(opts.emerge) : 0.08) : 1.0;
                let targetEmerge = opts.targetEmerge !== undefined ? Number(opts.targetEmerge) : 1.0;
                let lanternAngle = 0.015, lanternVel = 0;
                let poseLeanX = 0, poseHeadTilt = 0;
                const isWalking = context === 'walk_side' || context === 'walk_away';

                let walkDir = opts.walkDir === -1 ? -1 : 1;
                let walkSpeed = opts.walkSpeed !== undefined ? Number(opts.walkSpeed) : 100;
                let autoWalk = opts.autoWalk !== undefined ? !!opts.autoWalk : true;
                let walkLoop = opts.walkLoop !== undefined ? !!opts.walkLoop : true;
                let walkProgressX = opts.walkProgressX !== undefined ? Number(opts.walkProgressX) : (autoWalk ? (walkDir === 1 ? 0.22 : 0.80) : 0.50);
                let walkAwayDepth = opts.walkAwayDepth !== undefined ? Number(opts.walkAwayDepth) : 0.15;

                function drawPart(partId, tr) {
                    const po = bank[partId];
                    if (!po || po.w <= 1) return;
                    g.save();
                    g.translate(tr.x, tr.y);
                    g.rotate(tr.rot);
                    g.scale(tr.scaleX, tr.scaleY);
                    g.drawImage(po.canvas, -po.w * tr.pivotX, -po.h * tr.pivotY, po.w, po.h);
                    g.restore();
                }

                function loop(ts) {
                    if (myToken !== runToken) return;
                    if (typeof document !== 'undefined' && document.hidden) {
                        activeLoopId = null;
                        return;
                    }

                    // Пересчитываем размер холста, если контейнер стал видимым позже запуска (при отсутствии жёстких opts.width/height)
                    if (!explicitW && !explicitH && targetEl) {
                        const cw = targetEl.clientWidth;
                        const ch = targetEl.clientHeight;
                        if (cw > 0 && ch > 0 && (cvs.width !== cw || cvs.height !== ch)) {
                            cvs.width = cw;
                            cvs.height = ch;
                        }
                    }

                    const t = (ts || 0) * 0.001;
                    const W = cvs.width, H = cvs.height;
                    g.clearRect(0, 0, W, H);
                    emerge += (targetEmerge - emerge) * 0.06;

                    const p = vcfg.parts;
                    const deg2rad = Math.PI / 180;
                    const isTalk = mode === 'talk';
                    const isLook = mode === 'look';
                    poseLeanX += ((isLook ? -5 : (isTalk ? 3 : 0)) - poseLeanX) * 0.06;
                    poseHeadTilt += ((isLook ? 0.065 : (isTalk ? -0.03 : 0.012)) - poseHeadTilt) * 0.07;

                    const breathFreq = isTalk ? 2.4 : (isLook ? 2.6 : 1.75);
                    const breath = Math.sin(t * breathFreq);
                    const delayed = Math.sin(t * breathFreq - 0.55);
                    const sway = Math.sin(t * 0.8);
                    const nod = isTalk ? (Math.sin(t * 9.5) * 0.024 + Math.cos(t * 14.2) * 0.014) : 0;
                    const talkChinY = isTalk ? Math.abs(Math.sin(t * 9.5)) * 2.0 : 0;
                    const talkRightWave = isTalk ? (0.12 + Math.sin(t * 4.5) * 0.09) : 0;
                    const talkLeftWave = isTalk ? (Math.sin(t * 3.8) * 0.025) : 0;

                    const naturalSway = Math.sin(t * 2.05) * 0.035 + (isTalk ? Math.sin(t * 4.6) * 0.025 : 0);
                    lanternVel += (naturalSway - lanternAngle) * 0.08;
                    lanternVel *= 0.92;
                    lanternAngle += lanternVel;

                    const torsoSwayX = poseLeanX + sway * 2.6;
                    const chestLiftY = -breath * 4.0;
                    const chestScaleX = 1 + breath * 0.011;
                    const chestScaleY = 1 + breath * 0.009;
                    const lArmRot = p.leftArm.rot * deg2rad - delayed * 0.016 + talkLeftWave + (vcfg.propPendulumSwing ? lanternAngle * 0.12 : lanternAngle * 0.22);

                    const tr = {
                        legs: { x: p.legs.x, y: p.legs.y, rot: p.legs.rot * deg2rad + sway * 0.004, scaleX: p.legs.scale, scaleY: p.legs.scale * (1 - breath * 0.0025), pivotX: p.legs.pivotX, pivotY: p.legs.pivotY },
                        torso: { x: p.torso.x + torsoSwayX, y: p.torso.y + chestLiftY, rot: p.torso.rot * deg2rad + sway * 0.008 + poseLeanX * 0.002, scaleX: p.torso.scale * chestScaleX, scaleY: p.torso.scale * chestScaleY, pivotX: p.torso.pivotX, pivotY: p.torso.pivotY },
                        rightArm: { x: p.rightArm.x + torsoSwayX * 1.04 - (chestScaleX - 1) * 18, y: p.rightArm.y + chestLiftY * 1.1, rot: p.rightArm.rot * deg2rad + delayed * 0.018 - talkRightWave, scaleX: p.rightArm.scale, scaleY: p.rightArm.scale, pivotX: p.rightArm.pivotX, pivotY: p.rightArm.pivotY },
                        leftArm: { x: p.leftArm.x + torsoSwayX * 1.04 + (chestScaleX - 1) * 18, y: p.leftArm.y + chestLiftY * 1.1, rot: lArmRot, scaleX: p.leftArm.scale, scaleY: p.leftArm.scale, pivotX: p.leftArm.pivotX, pivotY: p.leftArm.pivotY }
                    };
                    const dxP = p.prop.x - p.leftArm.x, dyP = p.prop.y - p.leftArm.y;
                    const cosL = Math.cos(lArmRot - p.leftArm.rot * deg2rad), sinL = Math.sin(lArmRot - p.leftArm.rot * deg2rad);
                    tr.prop = {
                        x: tr.leftArm.x + (dxP * cosL - dyP * sinL) * p.leftArm.scale,
                        y: tr.leftArm.y + (dxP * sinL + dyP * cosL) * p.leftArm.scale,
                        rot: p.prop.rot * deg2rad + (vcfg.propPendulumSwing ? lanternAngle : lArmRot),
                        scaleX: p.prop.scale, scaleY: p.prop.scale, pivotX: p.prop.pivotX, pivotY: p.prop.pivotY
                    };

                    let hk = 'head';
                    if (emotion === 'happy' && bank.head_happy && bank.head_happy.hasPixels) hk = 'head_happy';
                    else if (emotion === 'angry' && bank.head_angry && bank.head_angry.hasPixels) hk = 'head_angry';
                    const hp = p[hk] || p.head;
                    tr.head = {
                        x: hp.x + torsoSwayX * 1.08,
                        y: hp.y + chestLiftY * 1.12 + delayed * 1.4 + talkChinY * 0.6,
                        rot: hp.rot * deg2rad + poseHeadTilt + Math.sin(t * 1.05 - 0.6) * 0.016 + nod,
                        scaleX: hp.scale, scaleY: hp.scale, pivotX: hp.pivotX, pivotY: hp.pivotY
                    };

                    // Динамическая привязка точки света к качающейся лампе (prop) или руке (leftArm/rightArm/torso)
                    const lightCfg = npc.light || { attachTo: 'leftArm', x: 380, y: 460, glowRadius: 155, intensity: 110, dustRadius: 55, dustCount: 16, flickerSpeed: 100 };
                    const parentKey = lightCfg.attachTo || 'leftArm';
                    const parentBase = p[parentKey] || p.leftArm;
                    const parentAnim = tr[parentKey] || tr.leftArm;
                    const relLX = lightCfg.x - parentBase.x;
                    const relLY = lightCfg.y - parentBase.y;
                    const dAngle = parentAnim.rot - (parentBase.rot * deg2rad);
                    const cosP = Math.cos(dAngle), sinP = Math.sin(dAngle);
                    const scaleRatio = parentAnim.scaleX / Math.max(0.01, parentBase.scale);
                    const animLightX = parentAnim.x + (relLX * cosP - relLY * sinP) * scaleRatio;
                    const animLightY = parentAnim.y + (relLX * sinP + relLY * cosP) * scaleRatio;

                    const doorId = doorInfo ? doorInfo.id : null;
                    const pl = (context === 'door_peek' && doorId && npc.doorPlacementsByDoorId && npc.doorPlacementsByDoorId[doorId])
                        ? npc.doorPlacementsByDoorId[doorId]
                        : ((context === 'door_peek' && doorInfo && doorInfo.doorPlacement)
                            ? doorInfo.doorPlacement
                            : ((npc.placements && npc.placements[context]) || { offsetX: 0, offsetY: 45, scale: 0.92, flipX: false, shadowDepth: 65 }));

                    function renderModulesOnStage() {
                        const walkFreq = 4.8 * ((walkSpeed || 100) / 100);
                        const walkPhase = t * walkFreq;
                        const stepSwing = isWalking ? Math.sin(walkPhase) : 0;
                        const stepBounce = isWalking ? Math.abs(Math.cos(walkPhase)) * 7.5 : 0;

                        // Режим цельной фигуры (auto_single) для ракурсов Сбоку и Спиной
                        if (viewKey !== 'front' && vcfg.altViewMode === 'auto_single' && bank.singleW > 4) {
                            const cx = 330, bottomY = 880 - stepBounce;
                            g.save();
                            if (viewKey === 'back') drawMovableLightAndDust(g, animLightX, animLightY, lightCfg, t, runtimeParticles);

                            g.save();
                            g.translate(cx, bottomY - bank.singleH * 0.42);
                            g.rotate(-stepSwing * (viewKey === 'side' ? 0.22 : 0.08));
                            g.drawImage(bank.singleRightLeg, -bank.singleW * 0.5, -bank.singleH * 0.58);
                            g.restore();

                            g.save();
                            g.translate(cx, bottomY - bank.singleH * 0.42);
                            g.rotate(stepSwing * (viewKey === 'side' ? 0.22 : 0.08));
                            g.drawImage(bank.singleLeftLeg, -bank.singleW * 0.5, -bank.singleH * 0.58);
                            g.restore();

                            g.save();
                            g.translate(cx, bottomY - bank.singleH * 0.5);
                            g.rotate(Math.sin(walkPhase) * 0.025);
                            g.drawImage(bank.singleUpper, -bank.singleW * 0.5, -bank.singleH * 0.5);
                            g.restore();

                            if (viewKey !== 'back') drawMovableLightAndDust(g, animLightX, animLightY, lightCfg, t, runtimeParticles);
                            g.restore();
                            return;
                        }

                        g.save();
                        if (isWalking) g.translate(0, -stepBounce);
                        if (viewKey === 'back') drawMovableLightAndDust(g, animLightX, animLightY, lightCfg, t, runtimeParticles);

                        if (isWalking && bank.leftLeg && bank.rightLeg) {
                            const trL = { ...tr.legs }, trR = { ...tr.legs };
                            if (viewKey === 'side') {
                                trR.rot -= stepSwing * 0.22; trL.rot += stepSwing * 0.22;
                                trR.x -= stepSwing * 14; trL.x += stepSwing * 14;
                            } else {
                                trR.y -= Math.max(0, stepSwing) * 18;
                                trL.y -= Math.max(0, -stepSwing) * 18;
                            }
                            drawPart('rightLeg', trR);
                            drawPart('leftLeg', trL);
                        } else {
                            drawPart('legs', tr.legs);
                        }

                        const trRA = { ...tr.rightArm }, trLA = { ...tr.leftArm };
                        if (isWalking) { trRA.rot -= stepSwing * 0.20; trLA.rot += stepSwing * 0.10; }

                        if (!vcfg.rightArmInFrontOfTorso) drawPart('rightArm', trRA);
                        if (!vcfg.leftArmInFrontOfTorso) {
                            if (vcfg.usePropLayer) drawPart('prop', tr.prop);
                            drawPart('leftArm', trLA);
                        }
                        if (vcfg.headInFrontOfTorso === false) drawPart(hk, tr.head);
                        drawPart('torso', tr.torso);
                        if (vcfg.headInFrontOfTorso !== false) drawPart(hk, tr.head);
                        if (vcfg.rightArmInFrontOfTorso) drawPart('rightArm', trRA);
                        if (vcfg.leftArmInFrontOfTorso) {
                            if (vcfg.usePropLayer) drawPart('prop', tr.prop);
                            drawPart('leftArm', trLA);
                        }
                        if (viewKey !== 'back') drawMovableLightAndDust(g, animLightX, animLightY, lightCfg, t, runtimeParticles);
                        g.restore();
                    }

                    if (context === 'door_peek') {
                        const box = (doorInfo && doorInfo.box) || { x1: 0.35, y1: 0.05, x2: 0.65, y2: 1.0 };
                        const bx = box.x1 * W, by = box.y1 * H;
                        const bw = (box.x2 - box.x1) * W, bh = (box.y2 - box.y1) * H;

                        if (!transparentBg) {
                            if (doorEntry && doorEntry.loaded && doorEntry.doorImg) {
                                g.drawImage(doorEntry.doorImg, 0, 0, W, H);
                            }
                            g.fillStyle = '#020202';
                            g.fillRect(bx, by, bw, bh);
                        }

                        const baseFitScale = Math.min((H * 0.92) / STAGE_H, (W * 0.52) / STAGE_W);
                        const charScale = baseFitScale * (pl.scale || 0.92) * (0.82 + 0.18 * emerge);
                        const hinge = (doorInfo && doorInfo.hingeSide) || 'left';
                        const hideSlideX = (1 - emerge) * (hinge === 'left' ? -bw * 0.35 : bw * 0.35);
                        const charCenterX = bx + bw * 0.5 + (pl.offsetX || 0) * (W / 1200) + hideSlideX;
                        const charBottomY = by + bh + (pl.offsetY || 45) * (H / 900);
                        const stageBaseX = charCenterX - (STAGE_W * charScale) * 0.5;
                        const stageBaseY = charBottomY - STAGE_H * charScale;

                        g.save();
                        g.beginPath(); g.rect(bx, by, bw, bh); g.clip();
                        g.globalAlpha = Math.max(0, Math.min(1, emerge * 1.15));

                        g.save();
                        g.translate(charCenterX, charBottomY);
                        g.scale(charScale * (pl.flipX ? -1 : 1), charScale);
                        g.translate(-STAGE_W * 0.5, -STAGE_H);
                        renderModulesOnStage();
                        g.restore();

                        // Глубина тени проёма и нижняя виньетка
                        const shadowStrength = ((pl.shadowDepth !== undefined ? pl.shadowDepth : 65) / 100);
                        const darknessOverlay = Math.max(0, (1 - emerge) * 0.88 + shadowStrength * 0.25);
                        if (darknessOverlay > 0.01) {
                            g.fillStyle = `rgba(2, 2, 2, ${Math.min(0.96, darknessOverlay)})`;
                            g.fillRect(bx, by, bw, bh);
                        }
                        const bottomVig = g.createLinearGradient(0, by + bh * 0.52, 0, by + bh);
                        bottomVig.addColorStop(0, 'rgba(0, 0, 0, 0)');
                        bottomVig.addColorStop(0.7, `rgba(0, 0, 0, ${0.65 * shadowStrength})`);
                        bottomVig.addColorStop(1, 'rgba(0, 0, 0, 0.96)');
                        g.fillStyle = bottomVig;
                        g.fillRect(bx, by + bh * 0.52, bw, bh * 0.48);
                        g.restore();

                        // Передняя пиксельная маска кромки двери и дверной ручки ПОВЕРХ персонажа!
                        if (doorEntry && doorEntry.loaded && doorEntry.doorFgCanvas) {
                            if (transparentBg) {
                                g.save();
                                g.beginPath(); g.rect(bx, by, bw, bh); g.clip();
                                g.drawImage(doorEntry.doorFgCanvas, 0, 0, W, H);
                                g.restore();
                            } else {
                                g.drawImage(doorEntry.doorFgCanvas, 0, 0, W, H);
                            }
                        }

                        // Тёплый отсвет от свечи/лампы на дверную коробку
                        if (emerge > 0.05 && lightCfg.intensity > 0) {
                            const effLX = pl.flipX ? (STAGE_W - animLightX) : animLightX;
                            const worldLX = stageBaseX + effLX * charScale;
                            const worldLY = stageBaseY + animLightY * charScale;
                            const spillAlpha = (lightCfg.intensity / 100) * emerge * 0.34;
                            const spill = g.createRadialGradient(worldLX, worldLY, 6, worldLX, worldLY, H * 0.36);
                            spill.addColorStop(0, `rgba(255, 165, 58, ${spillAlpha})`);
                            spill.addColorStop(0.45, `rgba(215, 92, 20, ${spillAlpha * 0.42})`);
                            spill.addColorStop(1, 'rgba(0, 0, 0, 0)');
                            g.save();
                            g.globalCompositeOperation = 'screen';
                            g.fillStyle = spill;
                            g.fillRect(0, 0, W, H);
                            g.restore();
                        }
                    } else if (context === 'walk_side') {
                        if (autoWalk) {
                            const spd = 0.0012 * ((walkSpeed || 100) / 100);
                            walkProgressX += walkDir * spd;
                            if (walkLoop) {
                                if (walkProgressX > 0.80) walkProgressX = 0.22;
                                if (walkProgressX < 0.22) walkProgressX = 0.80;
                            } else {
                                walkProgressX = Math.max(0.05, Math.min(0.95, walkProgressX));
                            }
                        }
                        const scale = Math.min((H * 0.86) / STAGE_H, (W * 0.82) / STAGE_W) * (opts.scale !== undefined ? Number(opts.scale) : 1);
                        const charCenterX = W * walkProgressX + (opts.offsetX || 0) * (W / 1200);
                        const charBottomY = H * 0.94 + (opts.offsetY || 0) * (H / 900);

                        g.save();
                        g.translate(charCenterX, charBottomY);
                        g.scale(scale * walkDir, scale);
                        g.translate(-STAGE_W * 0.5, -STAGE_H);
                        renderModulesOnStage();
                        g.restore();
                    } else if (context === 'walk_away') {
                        if (autoWalk) {
                            const spd = 0.0014 * ((walkSpeed || 100) / 100);
                            walkAwayDepth = walkLoop ? ((walkAwayDepth + spd) % 1.0) : Math.min(1.0, walkAwayDepth + spd);
                        }
                        const d = walkAwayDepth;
                        const baseScale = Math.min((H * 0.88) / STAGE_H, (W * 0.84) / STAGE_W) * (opts.scale !== undefined ? Number(opts.scale) : 1);
                        const perspectiveScale = baseScale * (1.0 - d * 0.64);
                        const charCenterX = W * 0.5 + Math.sin(t * 2.5) * (5 * (1 - d)) + (opts.offsetX || 0) * (W / 1200);
                        const charBottomY = H * (0.95 - d * 0.36) + (opts.offsetY || 0) * (H / 900);
                        const distFade = d > 0.72 ? Math.max(0, 1 - (d - 0.72) / 0.28) : 1.0;

                        g.save();
                        g.globalAlpha = distFade;
                        g.translate(charCenterX, charBottomY);
                        g.scale(perspectiveScale, perspectiveScale);
                        g.translate(-STAGE_W * 0.5, -STAGE_H);
                        renderModulesOnStage();
                        g.restore();
                    } else {
                        const baseFitScale = Math.min((H * 0.88) / STAGE_H, (W * 0.82) / STAGE_W);
                        const charScale = baseFitScale * (pl.scale || 0.90);
                        const charCenterX = W * 0.5 + (pl.offsetX || 0) * (W / 1200);
                        const charBottomY = H * 0.92 + (pl.offsetY || 0) * (H / 900);

                        if (ctxBgImg && (!transparentBg || !!opts.bgImgSrc)) {
                            g.drawImage(ctxBgImg, 0, 0, W, H);
                        }
                        g.save();
                        g.translate(charCenterX, charBottomY);
                        g.scale(charScale * (pl.flipX ? -1 : 1), charScale);
                        g.translate(-STAGE_W * 0.5, -STAGE_H);
                        renderModulesOnStage();
                        g.restore();

                        if (!transparentBg && pl.shadowDepth > 0) {
                            g.fillStyle = `rgba(4, 5, 5, ${(pl.shadowDepth / 100) * 0.55})`;
                            g.fillRect(0, 0, W, H);
                        }
                        if (context === 'peephole' && !transparentBg) {
                            const rad = Math.min(W, H) * 0.44;
                            const peepVig = g.createRadialGradient(W * 0.5, H * 0.5, rad * 0.55, W * 0.5, H * 0.5, rad * 1.08);
                            peepVig.addColorStop(0, 'rgba(0,0,0,0)');
                            peepVig.addColorStop(0.75, 'rgba(2,8,5,0.55)');
                            peepVig.addColorStop(1, 'rgba(0,0,0,0.98)');
                            g.fillStyle = peepVig;
                            g.fillRect(0, 0, W, H);
                        }
                    }

                    if (myToken === runToken && (typeof document === 'undefined' || !document.hidden)) {
                        activeLoopId = requestAnimationFrame(loop);
                    } else {
                        activeLoopId = null;
                    }
                }

                function onVisibilityChange() {
                    if (myToken !== runToken) return;
                    if (document.hidden) {
                        if (activeLoopId) { cancelAnimationFrame(activeLoopId); activeLoopId = null; }
                    } else if (!activeLoopId) {
                        activeLoopId = requestAnimationFrame(loop);
                    }
                }
                activeVisibilityHandler = onVisibilityChange;
                if (typeof document !== 'undefined') {
                    document.addEventListener('visibilitychange', onVisibilityChange);
                }

                if (typeof document === 'undefined' || !document.hidden) {
                    activeLoopId = requestAnimationFrame(loop);
                }

                return {
                    setEmotion: (e) => { emotion = e; },
                    setMode: (m) => { mode = m; },
                    setEmerge: (val) => { targetEmerge = Math.max(0, Math.min(1, Number(val) || 0)); },
                    setWalkDir: (d) => { walkDir = d === -1 ? -1 : 1; },
                    setWalkProgress: (x) => { walkProgressX = Math.max(0, Math.min(1, Number(x) || 0)); },
                    setWalkDepth: (d) => { walkAwayDepth = Math.max(0, Math.min(1, Number(d) || 0)); },
                    pushLantern: () => { lanternVel += (lanternAngle >= 0 ? -0.14 : 0.14); },
                    stop
                };
            }

            function stop() {
                runToken++;
                if (activeLoopId) { cancelAnimationFrame(activeLoopId); activeLoopId = null; }
                if (activeVisibilityHandler && typeof document !== 'undefined') {
                    document.removeEventListener('visibilitychange', activeVisibilityHandler);
                    activeVisibilityHandler = null;
                }
            }

            return { show, stop, clearCache, getDatabase: () => window.NPC_DATABASE };
        })();

})();