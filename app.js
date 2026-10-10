const $ = id => document.getElementById(id);
const save = (k, v) => localStorage.setItem('np_' + k, JSON.stringify(v));
const load = (k, def) => {
  try { const v = localStorage.getItem('np_' + k); return v ? JSON.parse(v) : def; }
  catch { return def; }
};

function toast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2000);
}

// ============ ФОРМА ============
const FORM_FIELDS = ['height','weight','age','gender','goal','activity','diet','store','budget'];
const CHIP_GROUPS = { meals:'mealChips', exclude:'excludeChips', fav:'favChips' };

function saveForm() {
  const data = {};
  FORM_FIELDS.forEach(id => data[id] = $(id).value);
  Object.entries(CHIP_GROUPS).forEach(([key, id]) => {
    data[key] = [...document.querySelectorAll(`#${id} input:checked`)].map(c => c.value);
  });
  save('form', data);
}

function loadForm() {
  const data = load('form', null);
  if (!data) return;
  FORM_FIELDS.forEach(id => { if (data[id] != null) $(id).value = data[id]; });
  Object.entries(CHIP_GROUPS).forEach(([key, id]) => {
    if (data[key]) {
      document.querySelectorAll(`#${id} input`).forEach(c => c.checked = data[key].includes(c.value));
    }
  });
}

document.addEventListener('input', e => {
  if (e.target.closest('section.card')) saveForm();
});

// ============ РАСЧЁТ ============
let state = {};

function calculate() {
  const height = +$('height').value;
  const weight = +$('weight').value;
  const age = +$('age').value;
  const gender = $('gender').value;
  const goal = $('goal').value;
  const activity = +$('activity').value;
  const diet = $('diet').value;
  const store = $('store').value;
  const budget = +$('budget').value;

  const meals = [...document.querySelectorAll('#mealChips input:checked')].map(c => c.value);
  const exclude = [...document.querySelectorAll('#excludeChips input:checked')].map(c => c.value);
  const fav = [...document.querySelectorAll('#favChips input:checked')].map(c => c.value);

  if (!height || !weight || !age) { toast('Заполните поля'); return; }
  if (!meals.length) { toast('Выберите хотя бы один приём пищи'); return; }

  const bmr = gender === 'male'
    ? 10*weight + 6.25*height - 5*age + 5
    : 10*weight + 6.25*height - 5*age - 161;

  let tdee = bmr * activity;
  if (goal === 'lose') tdee *= 0.82;
  if (goal === 'gain') tdee *= 1.15;
  const calories = Math.round(tdee);

  let pPerKg, fPerKg;
  if (goal === 'lose') { pPerKg = 2.0; fPerKg = 0.9; }
  else if (goal === 'gain') { pPerKg = 1.8; fPerKg = 1.0; }
  else { pPerKg = 1.6; fPerKg = 1.0; }

  const protein = Math.round(weight * pPerKg);
  const fat = Math.round(weight * fPerKg);
  const carbs = Math.max(50, Math.round((calories - protein*4 - fat*9) / 4));

  const bmi = (weight / Math.pow(height/100, 2)).toFixed(1);
  const water = (weight * 0.033).toFixed(1);

  state = { calories, protein, fat, carbs, goal, diet, store, budget, meals, exclude, fav, weight };

  $('calories').textContent = calories;
  $('protein').textContent = protein + ' г';
  $('fat').textContent = fat + ' г';
  $('carbs').textContent = carbs + ' г';
  $('bmi').textContent = bmi;
  $('water').textContent = water + ' л';

  const today = generateDayMenu(0);
  renderTodayMenu(today);
  const week = Array.from({ length: 7 }, (_, i) => generateDayMenu(i));
  renderWeekMenu(week);
  renderShopping(buildShoppingList(week), budget);
  renderStats();

  $('result').classList.add('active');
  $('result').scrollIntoView({ behavior: 'smooth' });
}

// ============ ФИЛЬТРАЦИЯ БЛЮД ============
function dishAllowed(dish) {
  const { exclude, diet } = state;

  // Исключения
  for (const ex of exclude) {
    if (dish.tags.includes(ex)) return false;
    // проверка по ингредиентам
    if (dish.items.some(k => (PRODUCTS[k]?.tags || []).includes(ex))) return false;
  }

  // Диета
  if (diet === 'veg') {
    if (dish.items.some(k => {
      const t = PRODUCTS[k]?.tags || [];
      return t.includes('meat') || t.includes('fish') || t.includes('seafood') || t.includes('pork') || t.includes('beef') || t.includes('chicken');
    })) return false;
  }
  if (diet === 'vegan') {
    if (dish.items.some(k => {
      const t = PRODUCTS[k]?.tags || [];
      return t.includes('meat') || t.includes('fish') || t.includes('seafood') ||
             t.includes('dairy') || t.includes('eggs') || t.includes('honey');
    })) return false;
  }
  if (diet === 'pesc') {
    if (dish.items.some(k => {
      const t = PRODUCTS[k]?.tags || [];
      return t.includes('meat') || t.includes('pork') || t.includes('beef') || t.includes('chicken');
    })) return false;
  }
  if (diet === 'halal') {
    if (dish.tags.includes('pork') || dish.items.some(k => (PRODUCTS[k]?.tags || []).includes('pork'))) return false;
  }
  return true;
}

// Скоринг блюда на основе любимых продуктов
function dishScore(dish) {
  let score = 0;
  const { fav } = state;
  for (const key of dish.items) {
    const tags = PRODUCTS[key]?.tags || [];
    for (const f of fav) {
      if (tags.includes(f)) score += 2;
    }
  }
  return score;
}

function getCandidates(mealType) {
  const pool = DISHES.filter(d => d.meal === mealType && dishAllowed(d));
  // сортируем: сначала любимые (по score), потом остальные
  return pool.sort((a, b) => dishScore(b) - dishScore(a));
}

// ============ ГЕНЕРАЦИЯ МЕНЮ ============
function pickDish(mealType, dayIndex, usedIds) {
  const pool = getCandidates(mealType);
  if (!pool.length) return null;

  // В топе — блюда с любимыми продуктами, но с ротацией
  const favPool = pool.filter(d => dishScore(d) > 0);
  const basePool = favPool.length >= 3 ? favPool : pool;

  // Ищем блюдо, которое ещё не использовалось
  for (let offset = 0; offset < basePool.length; offset++) {
    const idx = (dayIndex * 3 + offset) % basePool.length;
    const dish = basePool[idx];
    if (!usedIds.has(dish.id)) return dish;
  }
  return basePool[dayIndex % basePool.length];
}

function generateDayMenu(dayIndex) {
  const used = new Set();
  const menu = {};
  for (const meal of state.meals) {
    const dish = pickDish(meal, dayIndex, used);
    if (dish) { menu[meal] = dish; used.add(dish.id); }
  }
  return menu;
}

// ============ ОТРИСОВКА ============
function mealCardHTML(mealType, dish) {
  if (!dish) return '';
  return `
    <div class="meal-card" onclick="openDish('${dish.id}')">
      <div class="meal-emoji">${dish.emoji}</div>
      <div class="meal-info">
        <div class="meal-label">${MEAL_LABELS[mealType] || mealType}</div>
        <div class="meal-name">${dish.name}</div>
      </div>
      <div class="meal-arrow">›</div>
    </div>
  `;
}

function renderTodayMenu(menu) {
  $('menu').innerHTML = Object.entries(menu)
    .map(([meal, dish]) => mealCardHTML(meal, dish))
    .join('');
}

function renderWeekMenu(week) {
  $('weekMenu').innerHTML = week.map((day, i) => {
    const meals = Object.entries(day).map(([meal, dish]) =>
      `<b>${MEAL_LABELS[meal]}:</b> ${dish.emoji} ${dish.name}`
    ).join('<br>');
    return `<div class="day-block">
      <div class="day-title">${DAYS[i]}</div>
      <div class="day-meals">${meals}</div>
    </div>`;
  }).join('');
}

// ============ ПОКУПКИ ============
function buildShoppingList(week) {
  const storeFactor = { discount:0.85, hyper:1.0, market:1.1, online:1.25 }[state.store] || 1;
  const counts = {};

  week.forEach(day => {
    Object.values(day).forEach(dish => {
      if (!dish) return;
      dish.items.forEach(k => { counts[k] = (counts[k] || 0) + 1; });
    });
  });

  const list = Object.entries(counts).map(([k, count]) => {
    const p = PRODUCTS[k];
    if (!p) return null;
    let price = p.price * storeFactor;
    if (state.diet === 'budget') price *= 0.8;
    price *= state.calories / 2200;
    return { name: p.name, price: Math.round(price/10)*10, unit: p.unit };
  }).filter(Boolean);

  const total = list.reduce((s, x) => s + x.price, 0);
  return { list, total: Math.round(total/10)*10 };
}

function renderShopping({ list, total }, budget) {
  $('shopping').innerHTML = list.map(x =>
    `<li><span class="left">${x.name}</span><span class="right">${x.price} ₽</span></li>`
  ).join('') +
  `<li><span class="left" style="font-weight:600">Итого на неделю</span><span class="right" style="font-weight:600;color:var(--accent-dark)">${total} ₽</span></li>`;

  const tip = $('tip');
  if (total > budget) {
    tip.className = 'note warn';
    tip.textContent = `Превышение на ${total - budget} ₽. Совет: дискаунтер, сезонные овощи, бобовые вместо мяса.`;
  } else {
    tip.className = 'note';
    tip.textContent = `Укладываетесь в бюджет. Остаток: ${budget - total} ₽.`;
  }
}

// ============ МОДАЛЬНОЕ ОКНО ============
function openDish(id) {
  const dish = DISHES.find(d => d.id === id);
  if (!dish) return;

  $('modalHero').textContent = dish.emoji;
  $('modalTitle').textContent = dish.name;
  $('modalMeta').textContent = `${MEAL_LABELS[dish.meal]} · ~${dish.kcal} ккал`;

  $('modalIngredients').innerHTML = dish.items
    .map(k => {
      const p = PRODUCTS[k];
      return p ? `<li><span class="left">${p.name}</span><span class="right">${p.unit}</span></li>` : '';
    }).join('');

  $('modalRecipe').innerHTML = dish.recipe.map(step => `<li>${step}</li>`).join('');

  $('modalKcal').textContent = dish.kcal + ' ккал';
  $('modalP').textContent = dish.p + ' г';
  $('modalF').textContent = dish.f + ' г';
  $('modalC').textContent = dish.c + ' г';

  $('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ============ СТАТИСТИКА ============
function logWeight() {
  const w = parseFloat($('logWeight').value);
  if (!w || w < 20 || w > 400) { toast('Введите корректный вес'); return; }
  const log = load('weightLog', []);
  log.push({ date: new Date().toISOString().slice(0,10), weight: w });
  save('weightLog', log);
  $('logWeight').value = '';
  renderStats();
  toast('Записано');
}

function renderStats() {
  const log = load('weightLog', []);
  $('statEntries').textContent = log.length;
  $('statAvg').textContent = state.calories ? state.calories + ' ккал' : '—';
  $('statWeight').textContent = log.length
    ? (log.reduce((s,x) => s+x.weight, 0) / log.length).toFixed(1) + ' кг'
    : '—';

  $('weightLog').innerHTML = log.length
    ? log.slice().reverse().map(x =>
        `<li><span class="left">${x.date}</span><span class="right">${x.weight} кг</span></li>`
      ).join('')
    : `<li><span class="right" style="width:100%;text-align:center">Пока нет записей</span></li>`;
}

// ============ СБРОС ============
function resetAll() {
  if (!confirm('Сбросить все данные?')) return;
  Object.keys(localStorage).filter(k => k.startsWith('np_')).forEach(k => localStorage.removeItem(k));
  location.reload();
}

// ============ ТАБЫ ============
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    $('tab-' + tab.dataset.tab).classList.add('active');
  });
});

// ============ ИНИЦИАЛИЗАЦИЯ ============
loadForm();

document.addEventListener('input', e => {
  if (e.target.closest('section.card') && state.calories) {
    clearTimeout(window._recalcTimer);
    window._recalcTimer = setTimeout(calculate, 500);
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}