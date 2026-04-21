/* ============================================================
   FITBLUSH — Core Logic & Exercise Database
   ============================================================ */

// ─── EXERCISE DATABASE ────────────────────────────────────
const EXERCISE_DB = {
  back: {
    label: "Back",
    emoji: "🦅",
    groups: {
      lats: {
        label: "Lats",
        exercises: [
          { name: "Weighted Pull-Ups",         muscle: "Lats" },
          { name: "Lat Pulldown (Wide Grip)",  muscle: "Lats" },
          { name: "Neutral Grip Pulldown",     muscle: "Lats" },
          { name: "Straight Arm Pulldown",     muscle: "Lats" },
          { name: "Machine Pullover",          muscle: "Lats" },
        ]
      },
      upperBack: {
        label: "Upper Back",
        exercises: [
          { name: "Chest Supported Row",       muscle: "Upper Back" },
          { name: "T-Bar Row",                 muscle: "Upper Back" },
          { name: "Seated Cable Row",          muscle: "Upper Back" },
          { name: "Single Arm Dumbbell Row",   muscle: "Upper Back" },
          { name: "Meadows Row",               muscle: "Upper Back" },
        ]
      },
      traps: {
        label: "Traps",
        exercises: [
          { name: "Barbell Shrugs",            muscle: "Traps" },
          { name: "Dumbbell Shrugs",           muscle: "Traps" },
          { name: "Farmer's Carry",            muscle: "Traps" },
        ]
      },
      lowerBack: {
        label: "Lower Back",
        exercises: [
          { name: "Romanian Deadlift",         muscle: "Lower Back" },
          { name: "Conventional Deadlift",     muscle: "Lower Back" },
          { name: "Back Extensions",           muscle: "Lower Back" },
        ]
      }
    }
  },

  biceps: {
    label: "Biceps",
    emoji: "💪",
    groups: {
      longHead: {
        label: "Long Head",
        exercises: [
          { name: "Incline Dumbbell Curl",     muscle: "Biceps Long" },
          { name: "Bayesian Cable Curl",       muscle: "Biceps Long" },
          { name: "Drag Curl",                 muscle: "Biceps Long" },
          { name: "Hammer Curl",               muscle: "Brachialis" },
        ]
      },
      shortHead: {
        label: "Short Head",
        exercises: [
          { name: "Preacher Curl",             muscle: "Biceps Short" },
          { name: "Spider Curl",               muscle: "Biceps Short" },
          { name: "Concentration Curl",        muscle: "Biceps Short" },
          { name: "EZ Bar Curl",               muscle: "Biceps" },
        ]
      }
    }
  },

  chest: {
    label: "Chest",
    emoji: "🏋️",
    groups: {
      upper: {
        label: "Upper Chest",
        exercises: [
          { name: "Incline Barbell Press",     muscle: "Upper Chest" },
          { name: "Incline Dumbbell Press",    muscle: "Upper Chest" },
          { name: "Low-to-High Cable Fly",     muscle: "Upper Chest" },
          { name: "Landmine Press",            muscle: "Upper Chest" },
        ]
      },
      mid: {
        label: "Mid / Lower Chest",
        exercises: [
          { name: "Flat Barbell Bench Press",  muscle: "Chest" },
          { name: "Weighted Dips",             muscle: "Lower Chest" },
          { name: "Cable Crossover",           muscle: "Chest" },
          { name: "Pec Deck Machine",          muscle: "Chest" },
          { name: "Dumbbell Fly",              muscle: "Chest" },
        ]
      }
    }
  },

  shoulders: {
    label: "Shoulders",
    emoji: "🎯",
    groups: {
      front: {
        label: "Front / Side Delt",
        exercises: [
          { name: "Overhead Press (BB)",       muscle: "Front Delt" },
          { name: "Dumbbell Shoulder Press",   muscle: "Front Delt" },
          { name: "Lateral Raise",             muscle: "Side Delt" },
          { name: "Cable Lateral Raise",       muscle: "Side Delt" },
          { name: "Arnold Press",              muscle: "Front Delt" },
        ]
      },
      rear: {
        label: "Rear Delt",
        exercises: [
          { name: "Face Pull",                 muscle: "Rear Delt" },
          { name: "Reverse Pec Deck",          muscle: "Rear Delt" },
          { name: "Bent-Over Lateral Raise",   muscle: "Rear Delt" },
        ]
      }
    }
  },

  triceps: {
    label: "Triceps",
    emoji: "⚡",
    groups: {
      long: {
        label: "Long Head",
        exercises: [
          { name: "Overhead Tricep Extension", muscle: "Triceps Long" },
          { name: "Skull Crusher",             muscle: "Triceps" },
          { name: "Close-Grip Bench Press",    muscle: "Triceps" },
        ]
      },
      lateral: {
        label: "Lateral / Medial",
        exercises: [
          { name: "Tricep Pushdown (Rope)",    muscle: "Triceps Lateral" },
          { name: "Cable Kickback",            muscle: "Triceps" },
          { name: "Diamond Push-Ups",          muscle: "Triceps" },
        ]
      }
    }
  },

  legs: {
    label: "Legs",
    emoji: "🦵",
    groups: {
      quads: {
        label: "Quads",
        exercises: [
          { name: "Barbell Back Squat",        muscle: "Quads" },
          { name: "Hack Squat",                muscle: "Quads" },
          { name: "Leg Press",                 muscle: "Quads" },
          { name: "Leg Extension",             muscle: "Quads" },
          { name: "Bulgarian Split Squat",     muscle: "Quads" },
        ]
      },
      hamstrings: {
        label: "Hamstrings & Glutes",
        exercises: [
          { name: "Romanian Deadlift",         muscle: "Hamstrings" },
          { name: "Lying Leg Curl",            muscle: "Hamstrings" },
          { name: "Hip Thrust",                muscle: "Glutes" },
          { name: "Glute Kickback",            muscle: "Glutes" },
        ]
      },
      calves: {
        label: "Calves",
        exercises: [
          { name: "Standing Calf Raise",       muscle: "Calves" },
          { name: "Seated Calf Raise",         muscle: "Calves" },
        ]
      }
    }
  },

  core: {
    label: "Core",
    emoji: "🔥",
    groups: {
      abs: {
        label: "Abs",
        exercises: [
          { name: "Hanging Leg Raise",         muscle: "Lower Abs" },
          { name: "Cable Crunch",              muscle: "Upper Abs" },
          { name: "Ab Wheel Rollout",          muscle: "Abs" },
          { name: "Decline Sit-Up",            muscle: "Abs" },
        ]
      },
      obliques: {
        label: "Obliques",
        exercises: [
          { name: "Russian Twist",             muscle: "Obliques" },
          { name: "Pallof Press",              muscle: "Obliques" },
        ]
      }
    }
  }
};

// ─── WEEKLY PLAN ──────────────────────────────────────────
const WEEKLY_PLAN_DEFAULT = [
  {
    day: "Monday", label: "Push",
    exercises: [
      { name: "Flat Barbell Bench Press",  muscle: "Chest",       sets: 4, reps: 8  },
      { name: "Incline Dumbbell Press",    muscle: "Upper Chest", sets: 3, reps: 10 },
      { name: "Overhead Press (BB)",       muscle: "Front Delt",  sets: 3, reps: 8  },
      { name: "Lateral Raise",             muscle: "Side Delt",   sets: 4, reps: 15 },
      { name: "Tricep Pushdown (Rope)",    muscle: "Triceps",     sets: 3, reps: 12 },
      { name: "Overhead Tricep Extension",muscle: "Triceps Long", sets: 3, reps: 12 },
    ]
  },
  {
    day: "Tuesday", label: "Pull",
    exercises: [
      { name: "Weighted Pull-Ups",         muscle: "Lats",        sets: 4, reps: 6  },
      { name: "Seated Cable Row",          muscle: "Upper Back",  sets: 4, reps: 10 },
      { name: "T-Bar Row",                 muscle: "Upper Back",  sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown",     muscle: "Lats",        sets: 3, reps: 12 },
      { name: "Incline Dumbbell Curl",     muscle: "Biceps Long", sets: 3, reps: 12 },
      { name: "Preacher Curl",             muscle: "Biceps Short",sets: 3, reps: 12 },
    ]
  },
  {
    day: "Wednesday", label: "Legs",
    exercises: [
      { name: "Barbell Back Squat",        muscle: "Quads",       sets: 4, reps: 6  },
      { name: "Hack Squat",                muscle: "Quads",       sets: 3, reps: 10 },
      { name: "Romanian Deadlift",         muscle: "Hamstrings",  sets: 3, reps: 10 },
      { name: "Leg Press",                 muscle: "Quads",       sets: 3, reps: 12 },
      { name: "Lying Leg Curl",            muscle: "Hamstrings",  sets: 3, reps: 12 },
      { name: "Standing Calf Raise",       muscle: "Calves",      sets: 4, reps: 15 },
    ]
  },
  {
    day: "Thursday", label: "Rest", rest: true, exercises: []
  },
  {
    day: "Friday", label: "Push",
    exercises: [
      { name: "Incline Barbell Press",     muscle: "Upper Chest", sets: 4, reps: 8  },
      { name: "Pec Deck Machine",          muscle: "Chest",       sets: 3, reps: 12 },
      { name: "Arnold Press",              muscle: "Front Delt",  sets: 3, reps: 10 },
      { name: "Cable Lateral Raise",       muscle: "Side Delt",   sets: 4, reps: 15 },
      { name: "Skull Crusher",             muscle: "Triceps",     sets: 3, reps: 10 },
      { name: "Close-Grip Bench Press",    muscle: "Triceps",     sets: 3, reps: 10 },
    ]
  },
  {
    day: "Saturday", label: "Pull",
    exercises: [
      { name: "Lat Pulldown (Wide Grip)",  muscle: "Lats",        sets: 4, reps: 10 },
      { name: "Single Arm Dumbbell Row",   muscle: "Upper Back",  sets: 3, reps: 10 },
      { name: "Chest Supported Row",       muscle: "Upper Back",  sets: 3, reps: 12 },
      { name: "Face Pull",                 muscle: "Rear Delt",   sets: 3, reps: 15 },
      { name: "Bayesian Cable Curl",       muscle: "Biceps Long", sets: 3, reps: 12 },
      { name: "Hammer Curl",               muscle: "Brachialis",  sets: 3, reps: 12 },
    ]
  },
  {
    day: "Sunday", label: "Legs",
    exercises: [
      { name: "Bulgarian Split Squat",     muscle: "Quads",       sets: 3, reps: 10 },
      { name: "Hip Thrust",                muscle: "Glutes",      sets: 4, reps: 12 },
      { name: "Leg Extension",             muscle: "Quads",       sets: 3, reps: 15 },
      { name: "Lying Leg Curl",            muscle: "Hamstrings",  sets: 3, reps: 12 },
      { name: "Hanging Leg Raise",         muscle: "Lower Abs",   sets: 3, reps: 12 },
      { name: "Seated Calf Raise",         muscle: "Calves",      sets: 4, reps: 20 },
    ]
  }
];

// ─── SPLITS ───────────────────────────────────────────────
const SPLITS = [
  {
    id: "back_biceps",
    name: "Back + Biceps",
    emoji: "🦅",
    desc: "Width & thickness — full pull session",
    exercises: [
      { name: "Weighted Pull-Ups",         muscle: "Lats",        sets: 4, reps: 6  },
      { name: "Lat Pulldown (Wide Grip)",  muscle: "Lats",        sets: 3, reps: 10 },
      { name: "T-Bar Row",                 muscle: "Upper Back",  sets: 4, reps: 8  },
      { name: "Seated Cable Row",          muscle: "Upper Back",  sets: 3, reps: 10 },
      { name: "Straight Arm Pulldown",     muscle: "Lats",        sets: 3, reps: 12 },
      { name: "Incline Dumbbell Curl",     muscle: "Biceps Long", sets: 3, reps: 12 },
      { name: "Bayesian Cable Curl",       muscle: "Biceps Long", sets: 3, reps: 12 },
      { name: "Preacher Curl",             muscle: "Biceps Short",sets: 3, reps: 12 },
    ]
  },
  {
    id: "chest_triceps",
    name: "Chest + Triceps",
    emoji: "🏋️",
    desc: "Upper, mid and lower — complete push",
    exercises: [
      { name: "Flat Barbell Bench Press",  muscle: "Chest",       sets: 4, reps: 8  },
      { name: "Incline Dumbbell Press",    muscle: "Upper Chest", sets: 3, reps: 10 },
      { name: "Weighted Dips",             muscle: "Lower Chest", sets: 3, reps: 10 },
      { name: "Cable Crossover",           muscle: "Chest",       sets: 3, reps: 12 },
      { name: "Skull Crusher",             muscle: "Triceps",     sets: 3, reps: 10 },
      { name: "Tricep Pushdown (Rope)",    muscle: "Triceps",     sets: 3, reps: 12 },
      { name: "Overhead Tricep Extension",muscle: "Triceps Long", sets: 3, reps: 12 },
    ]
  },
  {
    id: "shoulders_traps",
    name: "Shoulders + Traps",
    emoji: "🎯",
    desc: "Full upper-back thickness and width",
    exercises: [
      { name: "Overhead Press (BB)",       muscle: "Front Delt",  sets: 4, reps: 8  },
      { name: "Dumbbell Shoulder Press",   muscle: "Front Delt",  sets: 3, reps: 10 },
      { name: "Lateral Raise",             muscle: "Side Delt",   sets: 4, reps: 15 },
      { name: "Cable Lateral Raise",       muscle: "Side Delt",   sets: 3, reps: 15 },
      { name: "Face Pull",                 muscle: "Rear Delt",   sets: 3, reps: 15 },
      { name: "Barbell Shrugs",            muscle: "Traps",       sets: 4, reps: 12 },
      { name: "Farmer's Carry",            muscle: "Traps",       sets: 3, reps: 0  },
    ]
  },
  {
    id: "legs_full",
    name: "Full Legs",
    emoji: "🦵",
    desc: "Quad, hamstring, glute and calf focus",
    exercises: [
      { name: "Barbell Back Squat",        muscle: "Quads",       sets: 4, reps: 6  },
      { name: "Bulgarian Split Squat",     muscle: "Quads",       sets: 3, reps: 10 },
      { name: "Romanian Deadlift",         muscle: "Hamstrings",  sets: 4, reps: 10 },
      { name: "Leg Press",                 muscle: "Quads",       sets: 3, reps: 12 },
      { name: "Lying Leg Curl",            muscle: "Hamstrings",  sets: 3, reps: 12 },
      { name: "Hip Thrust",                muscle: "Glutes",      sets: 3, reps: 12 },
      { name: "Standing Calf Raise",       muscle: "Calves",      sets: 4, reps: 15 },
    ]
  },
  {
    id: "upper_body",
    name: "Upper Body",
    emoji: "⚡",
    desc: "Balanced upper day — push + pull",
    exercises: [
      { name: "Flat Barbell Bench Press",  muscle: "Chest",       sets: 3, reps: 8  },
      { name: "Weighted Pull-Ups",         muscle: "Lats",        sets: 3, reps: 8  },
      { name: "Dumbbell Shoulder Press",   muscle: "Front Delt",  sets: 3, reps: 10 },
      { name: "Single Arm Dumbbell Row",   muscle: "Upper Back",  sets: 3, reps: 10 },
      { name: "Incline Dumbbell Curl",     muscle: "Biceps",      sets: 3, reps: 12 },
      { name: "Tricep Pushdown (Rope)",    muscle: "Triceps",     sets: 3, reps: 12 },
    ]
  }
];

// ─── MOTIVATION QUOTES ────────────────────────────────────
const QUOTES = [
  "Every rep brings you closer.",
  "The weight doesn't lie.",
  "Earned, not given.",
  "Show up. Lift. Repeat.",
  "Build the body. Train the mind.",
  "Your only competition is yesterday.",
  "Pain is temporary. Strength is permanent.",
  "Progress over perfection.",
];

// ─── STORAGE UTILS ────────────────────────────────────────
const Store = {
  get(key) {
    try { return JSON.parse(localStorage.getItem('fb_' + key)); }
    catch { return null; }
  },
  set(key, val) {
    try { localStorage.setItem('fb_' + key, JSON.stringify(val)); }
    catch(e) { console.warn('Storage error:', e); }
  },
  remove(key) { localStorage.removeItem('fb_' + key); }
};

// ─── WORKOUT STORE ────────────────────────────────────────
const WorkoutStore = {
  /** Save the current session being built */
  saveSession(session) { Store.set('current_session', session); },
  getSession()         { return Store.get('current_session'); },

  /** History: array of completed workouts */
  addHistory(entry) {
    const hist = Store.get('history') || [];
    hist.unshift({ ...entry, date: new Date().toISOString() });
    Store.set('history', hist.slice(0, 30)); // keep last 30
  },
  getHistory() { return Store.get('history') || []; }
};

// ─── HELPERS ──────────────────────────────────────────────
function randomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

function formatTime(secs) {
  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function showToast(msg, duration = 2500) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.classList.remove('show'), duration);
}

/** Deep clone exercises and ensure numeric sets/reps */
function cloneExercises(arr) {
  return arr.map(ex => ({
    name:   ex.name,
    muscle: ex.muscle || '',
    sets:   Number(ex.sets) || 3,
    reps:   Number(ex.reps) || 10,
    rest:   Number(ex.rest) || 60,
  }));
}

/** Build exercise row HTML (editable) */
function buildExerciseRow(ex, index) {
  return `
  <div class="exercise-row fade-in" data-index="${index}">
    <div>
      <div class="exercise-name">${ex.name}</div>
      <div class="exercise-muscle">${ex.muscle}</div>
    </div>
    <div class="exercise-controls">
      <div class="field-group">
        <label>Sets</label>
        <input class="input-num" type="number" min="1" max="20" value="${ex.sets}"
               onchange="updateExerciseField(${index},'sets',this.value)" />
      </div>
      <div class="field-group">
        <label>Reps</label>
        <input class="input-num" type="number" min="1" max="50" value="${ex.reps}"
               onchange="updateExerciseField(${index},'reps',this.value)" />
      </div>
    </div>
  </div>`;
}

// ─── GLOBAL updateExerciseField ───────────────────────────
// Shared handler used by customize.html
function updateExerciseField(index, field, value) {
  const session = WorkoutStore.getSession();
  if (!session || !session.exercises) return;
  session.exercises[index][field] = Math.max(1, parseInt(value) || 1);
  WorkoutStore.saveSession(session);
}
