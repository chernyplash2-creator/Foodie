// Продукты: price за unit, теги для фильтрации
// tags: veg, vegan, dairy, gluten, nuts, eggs, fish, seafood, soy,
//       pork, beef, chicken, meat, mushrooms, onion, garlic, tomato,
//       citrus, honey, sugar, spicy, legumes, grains, pasta, potato,
//       veggies, greens, fruits, berries, avocado, cheese, sweet
const PRODUCTS = {
  chicken:   { name:'Куриная грудка', price:380, unit:'кг',    tags:['chicken','meat'] },
  turkey:    { name:'Индейка',         price:480, unit:'кг',    tags:['chicken','meat'] },
  beef:      { name:'Говядина',        price:650, unit:'кг',    tags:['beef','meat'] },
  pork:      { name:'Свинина',         price:450, unit:'кг',    tags:['pork','meat'] },
  fish:      { name:'Минтай',          price:350, unit:'кг',    tags:['fish'] },
  salmon:    { name:'Лосось',          price:1200,unit:'кг',    tags:['fish'] },
  tuna:      { name:'Тунец (конс.)',   price:180, unit:'банка', tags:['fish'] },
  shrimp:    { name:'Креветки',        price:600, unit:'кг',    tags:['seafood'] },
  eggs:      { name:'Яйца',            price:130, unit:'10 шт', tags:['eggs'] },
  tofu:      { name:'Тофу',            price:220, unit:'400 г', tags:['veg','vegan','soy'] },
  chickpeas: { name:'Нут',             price:150, unit:'500 г', tags:['veg','vegan','legumes'] },
  lentils:   { name:'Чечевица',        price:130, unit:'500 г', tags:['veg','vegan','legumes'] },
  beans:     { name:'Фасоль',          price:140, unit:'500 г', tags:['veg','vegan','legumes'] },
  peas:      { name:'Горох',           price:110, unit:'500 г', tags:['veg','vegan','legumes'] },

  cottage:   { name:'Творог 5%',       price:180, unit:'400 г', tags:['dairy','veg'] },
  kefir:     { name:'Кефир 1%',        price:90,  unit:'1 л',   tags:['dairy','veg'] },
  yogurt:    { name:'Йогурт нат.',     price:120, unit:'500 г', tags:['dairy','veg'] },
  milk:      { name:'Молоко',          price:90,  unit:'1 л',   tags:['dairy','veg'] },
  cheese:    { name:'Сыр',             price:550, unit:'кг',    tags:['dairy','veg'] },
  feta:      { name:'Фета',            price:350, unit:'300 г', tags:['dairy','veg'] },
  butter:    { name:'Масло слив.',     price:180, unit:'200 г', tags:['dairy','veg'] },

  buckwheat: { name:'Гречка',          price:110, unit:'1 кг',  tags:['veg','vegan','grains'] },
  rice:      { name:'Рис',             price:120, unit:'1 кг',  tags:['veg','vegan','grains'] },
  oatmeal:   { name:'Овсянка',         price:90,  unit:'500 г', tags:['veg','vegan','grains','gluten'] },
  quinoa:    { name:'Киноа',           price:280, unit:'500 г', tags:['veg','vegan','grains'] },
  bulgur:    { name:'Булгур',          price:130, unit:'500 г', tags:['veg','vegan','grains','gluten'] },
  couscous:  { name:'Кускус',          price:140, unit:'500 г', tags:['veg','vegan','grains','gluten'] },
  pasta:     { name:'Паста',           price:120, unit:'500 г', tags:['veg','vegan','pasta','gluten'] },
  bread:     { name:'Хлеб ц/з',        price:70,  unit:'буханка',tags:['veg','vegan','gluten','grains'] },
  tortilla:  { name:'Тортилья',        price:150, unit:'упак',  tags:['veg','vegan','gluten','grains'] },
  potato:    { name:'Картофель',       price:60,  unit:'кг',    tags:['veg','vegan','potato'] },
  sweetpot:  { name:'Батат',           price:180, unit:'кг',    tags:['veg','vegan','potato'] },

  veggies:   { name:'Овощи (сезон)',   price:250, unit:'кг',    tags:['veg','vegan','veggies'] },
  broccoli:  { name:'Брокколи (зам.)', price:180, unit:'400 г', tags:['veg','vegan','veggies'] },
  spinach:   { name:'Шпинат',          price:140, unit:'пучок', tags:['veg','vegan','greens'] },
  greens:    { name:'Салат / зелень',  price:120, unit:'пучок', tags:['veg','vegan','greens'] },
  tomato:    { name:'Томаты',          price:180, unit:'кг',    tags:['veg','vegan','veggies','tomato'] },
  cucumber:  { name:'Огурцы',          price:130, unit:'кг',    tags:['veg','vegan','veggies'] },
  pepper:    { name:'Перец болг.',     price:200, unit:'кг',    tags:['veg','vegan','veggies'] },
  carrot:    { name:'Морковь',         price:60,  unit:'кг',    tags:['veg','vegan','veggies'] },
  onion:     { name:'Лук',             price:50,  unit:'кг',    tags:['veg','vegan','veggies','onion'] },
  garlic:    { name:'Чеснок',          price:200, unit:'кг',    tags:['veg','vegan','veggies','garlic'] },
  mushrooms: { name:'Шампиньоны',      price:280, unit:'кг',    tags:['veg','vegan','veggies','mushrooms'] },
  avocado:   { name:'Авокадо',         price:150, unit:'шт',    tags:['veg','vegan','avocado'] },

  apple:     { name:'Яблоки',          price:120, unit:'кг',    tags:['veg','vegan','fruits'] },
  banana:    { name:'Бананы',          price:100, unit:'кг',    tags:['veg','vegan','fruits'] },
  berries:   { name:'Ягоды (зам.)',    price:280, unit:'400 г', tags:['veg','vegan','fruits','berries'] },
  orange:    { name:'Апельсины',       price:180, unit:'кг',    tags:['veg','vegan','fruits','citrus'] },
  lemon:     { name:'Лимон',           price:80,  unit:'шт',    tags:['veg','vegan','fruits','citrus'] },

  nuts:      { name:'Орехи',           price:450, unit:'300 г', tags:['veg','vegan','nuts'] },
  peanut:    { name:'Паста арахисовая',price:280, unit:'300 г', tags:['veg','vegan','nuts'] },
  oil:       { name:'Масло оливковое', price:400, unit:'500 мл',tags:['veg','vegan'] },
  honey:     { name:'Мёд',             price:350, unit:'500 г', tags:['veg','honey'] },
  darkchoc:  { name:'Шоколад 70%',     price:180, unit:'100 г', tags:['veg','sweet','sugar'] },
  dates:     { name:'Финики',          price:280, unit:'300 г', tags:['veg','vegan','sweet','fruits'] },
};

// Блюда с рецептами
// meal: breakfast / lunch / snack / dinner / dessert
// tags для фильтрации, kcal/БЖУ на порцию
const DISHES = [
  // ================= ЗАВТРАКИ =================
  { id:'b1', meal:'breakfast', emoji:'🥣', name:'Овсянка с бананом и орехами',
    items:['oatmeal','banana','nuts','honey'], kcal:420, p:12, f:14, c:62,
    tags:['veg','nuts','gluten','honey'],
    recipe:[
      'Залейте 60 г овсянки 200 мл молока или воды.',
      'Варите 5–7 минут на среднем огне, помешивая.',
      'Добавьте нарезанный банан, ложку мёда и горсть орехов.',
      'Дайте настояться минуту и подавайте тёплой.'
    ]
  },
  { id:'b2', meal:'breakfast', emoji:'🍳', name:'Омлет с овощами и сыром',
    items:['eggs','tomato','pepper','cheese','greens'], kcal:380, p:24, f:26, c:10,
    tags:['veg','eggs','dairy','tomato','cheese'],
    recipe:[
      'Взбейте 3 яйца со щепоткой соли.',
      'Обжарьте нарезанные томаты и перец 3 минуты.',
      'Залейте яйцами, готовьте под крышкой 4 минуты.',
      'Посыпьте тёртым сыром и зеленью, подавайте горячим.'
    ]
  },
  { id:'b3', meal:'breakfast', emoji:'🥑', name:'Тост с авокадо и яйцом пашот',
    items:['bread','avocado','eggs','lemon','greens'], kcal:420, p:16, f:26, c:34,
    tags:['veg','eggs','gluten','avocado','citrus'],
    recipe:[
      'Обжарьте ломтик хлеба на сухой сковороде.',
      'Разомните авокадо с соком лимона и солью.',
      'Сварите яйцо пашот (3 минуты в кипящей воде с уксусом).',
      'Соберите: хлеб → авокадо → яйцо → зелень.'
    ]
  },
  { id:'b4', meal:'breakfast', emoji:'🥞', name:'Сырники с ягодами',
    items:['cottage','eggs','oatmeal','berries','honey'], kcal:450, p:26, f:14, c:52,
    tags:['veg','dairy','eggs','gluten','berries','honey'],
    recipe:[
      'Смешайте 200 г творога, яйцо, 2 ст. л. овсяной муки.',
      'Сформируйте сырники и обжарьте по 3 минуты с каждой стороны.',
      'Подавайте с ягодами и ложкой мёда.'
    ]
  },
  { id:'b5', meal:'breakfast', emoji:'🥗', name:'Греческий йогурт с гранолой',
    items:['yogurt','oatmeal','berries','nuts','honey'], kcal:390, p:18, f:14, c:48,
    tags:['veg','dairy','gluten','nuts','berries','honey'],
    recipe:[
      'Выложите 200 г греческого йогурта в миску.',
      'Сверху — гранола (овсянка + мёд, запечённые 10 мин при 180°C).',
      'Добавьте ягоды и дроблёные орехи.'
    ]
  },
  { id:'b6', meal:'breakfast', emoji:'🌯', name:'Тортилья с тофу-скрэмблом',
    items:['tortilla','tofu','tomato','spinach','oil'], kcal:400, p:20, f:18, c:40,
    tags:['veg','vegan','soy','gluten','tomato','greens'],
    recipe:[
      'Разомните тофу вилкой, обжарьте с куркумой и солью 5 минут.',
      'Добавьте шпинат и томаты, готовьте ещё 2 минуты.',
      'Заверните в тёплую тортилью, подавайте с зеленью.'
    ]
  },
  { id:'b7', meal:'breakfast', emoji:'🍚', name:'Рисовая каша на кокосовом молоке',
    items:['rice','milk','banana','dates'], kcal:400, p:8, f:8, c:76,
    tags:['veg','dairy','fruits'],
    recipe:[
      'Отварите 60 г риса в 200 мл молока 20 минут.',
      'Добавьте нарезанный банан и финики.',
      'Проварите ещё 3 минуты, подавайте тёплой.'
    ]
  },
  { id:'b8', meal:'breakfast', emoji:'🥓', name:'Яичница с беконом и томатами',
    items:['eggs','tomato','bread','greens'], kcal:440, p:22, f:30, c:20,
    tags:['eggs','gluten','tomato','pork','meat'],
    recipe:[
      'Обжарьте 2 ломтика бекона до хруста.',
      'Добавьте половинки томатов, готовьте 2 минуты.',
      'Вбейте 2 яйца, готовьте до схватывания белка.',
      'Подавайте с тостом и зеленью.'
    ]
  },

  // ================= ОБЕДЫ =================
  { id:'l1', meal:'lunch', emoji:'🍗', name:'Курица с гречкой и овощами',
    items:['chicken','buckwheat','veggies','oil'], kcal:560, p:42, f:14, c:58,
    tags:['chicken','meat'],
    recipe:[
      'Обжарьте куриную грудку (150 г) по 4 минуты с каждой стороны.',
      'Отварите 70 г гречки в подсоленной воде.',
      'Овощи потушите с ложкой масла 5 минут.',
      'Соберите на тарелке, приправьте по вкусу.'
    ]
  },
  { id:'l2', meal:'lunch', emoji:'🐟', name:'Лосось с рисом и брокколи',
    items:['salmon','rice','broccoli','lemon','oil'], kcal:600, p:38, f:22, c:58,
    tags:['fish','citrus'],
    recipe:[
      'Запеките лосось (150 г) 12 минут при 200°C с солью и лимоном.',
      'Отварите рис и брокколи 5 минут.',
      'Полейте оливковым маслом, подавайте горячим.'
    ]
  },
  { id:'l3', meal:'lunch', emoji:'🥘', name:'Чечевичный суп с овощами',
    items:['lentils','carrot','onion','tomato','greens','oil'], kcal:420, p:22, f:10, c:58,
    tags:['veg','vegan','legumes','onion','tomato','greens'],
    recipe:[
      'Обжарьте лук и морковь 5 минут.',
      'Добавьте 100 г чечевицы, томаты и 1 л воды.',
      'Варите 25 минут до мягкости.',
      'Пюрируйте блендером, посыпьте зеленью.'
    ]
  },
  { id:'l4', meal:'lunch', emoji:'🌮', name:'Буррито с фасолью и рисом',
    items:['tortilla','beans','rice','tomato','cheese','greens'], kcal:580, p:24, f:18, c:78,
    tags:['veg','legumes','gluten','tomato','dairy','cheese'],
    recipe:[
      'Отварите рис, прогрейте фасоль с томатами и специями.',
      'Разогрейте тортилью на сухой сковороде.',
      'Выложите рис, фасоль, сыр, зелень, заверните.',
      'Обжарьте буррито по 2 минуты с каждой стороны.'
    ]
  },
  { id:'l5', meal:'lunch', emoji:'🥩', name:'Стейк из говядины с картофелем',
    items:['beef','potato','garlic','greens','oil'], kcal:650, p:44, f:28, c:52,
    tags:['beef','meat','garlic','greens'],
    recipe:[
      'Обжарьте стейк по 3 минуты с каждой стороны.',
      'Отварите или запеките картофель с чесноком.',
      'Дайте стейку отдохнуть 5 минут.',
      'Подавайте с зеленью и маслом.'
    ]
  },
  { id:'l6', meal:'lunch', emoji:'🍜', name:'Паста с тунцом и томатами',
    items:['pasta','tuna','tomato','garlic','oil','greens'], kcal:560, p:32, f:16, c:72,
    tags:['fish','gluten','pasta','tomato','garlic'],
    recipe:[
      'Отварите пасту (80 г) до аль денте.',
      'Обжарьте чеснок в масле, добавьте томаты и тунец.',
      'Соедините с пастой, прогрейте 2 минуты.',
      'Посыпьте зеленью.'
    ]
  },
  { id:'l7', meal:'lunch', emoji:'🍛', name:'Карри из нута и шпината',
    items:['chickpeas','spinach','tomato','onion','rice','oil'], kcal:520, p:20, f:16, c:74,
    tags:['veg','vegan','legumes','onion','tomato','greens','spicy'],
    recipe:[
      'Обжарьте лук, добавьте специи (куркума, карри).',
      'Введите томаты, нут и 200 мл воды.',
      'Тушите 15 минут, добавьте шпинат.',
      'Подавайте с отварным рисом.'
    ]
  },
  { id:'l8', meal:'lunch', emoji:'🍲', name:'Куриный суп с овощами',
    items:['chicken','carrot','onion','potato','greens'], kcal:380, p:30, f:10, c:38,
    tags:['chicken','meat','onion','greens'],
    recipe:[
      'Отварите курицу (200 г) 25 минут.',
      'Добавьте картофель, морковь, лук.',
      'Варите 15 минут, посолите.',
      'Посыпьте зеленью перед подачей.'
    ]
  },
  { id:'l9', meal:'lunch', emoji:'🥗', name:'Боул с киноа и овощами',
    items:['quinoa','chickpeas','avocado','tomato','greens','oil'], kcal:520, p:20, f:22, c:62,
    tags:['veg','vegan','legumes','avocado','tomato','greens'],
    recipe:[
      'Отварите киноа (70 г) 15 минут.',
      'Обжарьте нут со специями.',
      'Соберите боул: киноа, нут, авокадо, томаты, зелень.',
      'Полейте маслом и лимонным соком.'
    ]
  },

  // ================= УЖИНЫ =================
  { id:'d1', meal:'dinner', emoji:'🐠', name:'Рыба на пару с овощами',
    items:['fish','broccoli','carrot','greens','oil'], kcal:380, p:36, f:12, c:26,
    tags:['fish','greens'],
    recipe:[
      'Приготовьте рыбу на пару 10 минут.',
      'Брокколи и морковь — 6 минут на пару.',
      'Полейте оливковым маслом, посолите.',
      'Посыпьте зеленью.'
    ]
  },
  { id:'d2', meal:'dinner', emoji:'🍗', name:'Куриное филе с салатом и авокадо',
    items:['chicken','greens','avocado','tomato','oil','lemon'], kcal:420, p:38, f:20, c:14,
    tags:['chicken','meat','avocado','greens','tomato','citrus'],
    recipe:[
      'Обжарьте или запеките курицу.',
      'Нарежьте авокадо, томаты, зелень.',
      'Заправьте маслом и лимонным соком.',
      'Подавайте с тёплой курицей.'
    ]
  },
  { id:'d3', meal:'dinner', emoji:'🥘', name:'Тушёный тофу с овощами',
    items:['tofu','pepper','broccoli','garlic','oil'], kcal:340, p:22, f:20, c:18,
    tags:['veg','vegan','soy','garlic'],
    recipe:[
      'Обжарьте тофу кубиками до золотистой корочки.',
      'Добавьте перец, брокколи, чеснок.',
      'Тушите 5 минут с соевым соусом.',
      'Подавайте горячим.'
    ]
  },
  { id:'d4', meal:'dinner', emoji:'🍲', name:'Овощное рагу с фасолью',
    items:['beans','carrot','onion','tomato','pepper','oil','greens'], kcal:360, p:18, f:10, c:52,
    tags:['veg','vegan','legumes','onion','tomato','greens'],
    recipe:[
      'Обжарьте лук, морковь, перец 7 минут.',
      'Добавьте томаты и фасоль.',
      'Тушите 15 минут под крышкой.',
      'Посыпьте зеленью.'
    ]
  },
  { id:'d5', meal:'dinner', emoji:'🦐', name:'Креветки с овощами вок',
    items:['shrimp','pepper','broccoli','garlic','oil'], kcal:380, p:30, f:16, c:24,
    tags:['seafood','garlic'],
    recipe:[
      'Разогрейте вок с маслом.',
      'Обжарьте креветки 2 минуты, отложите.',
      'Обжарьте овощи 5 минут, верните креветки.',
      'Приправьте соевым соусом, подавайте.'
    ]
  },
  { id:'d6', meal:'dinner', emoji:'🥗', name:'Салат с тунцом и яйцом',
    items:['tuna','eggs','greens','tomato','oil','lemon'], kcal:340, p:28, f:18, c:14,
    tags:['fish','eggs','greens','tomato','citrus'],
    recipe:[
      'Отварите яйца вкрутую (8 минут).',
      'Смешайте тунец, зелень, томаты.',
      'Добавьте нарезанные яйца.',
      'Заправьте маслом и лимоном.'
    ]
  },
  { id:'d7', meal:'dinner', emoji:'🍆', name:'Запечённые овощи с фетой',
    items:['pepper','tomato','broccoli','feta','oil','greens'], kcal:400, p:18, f:24, c:28,
    tags:['veg','dairy','cheese','tomato','greens'],
    recipe:[
      'Нарежьте овощи крупно, выложите на противень.',
      'Полейте маслом, посолите, запекайте 25 мин при 200°C.',
      'За 5 минут до конца посыпьте фетой.',
      'Подавайте с зеленью.'
    ]
  },
  { id:'d8', meal:'dinner', emoji:'🍚', name:'Плов с курицей и морковью',
    items:['chicken','rice','carrot','onion','garlic','oil'], kcal:580, p:36, f:16, c:72,
    tags:['chicken','meat','onion','garlic'],
    recipe:[
      'Обжарьте курицу с луком и морковью.',
      'Добавьте рис и 2 части воды.',
      'Тушите под крышкой 20 минут.',
      'Дайте настояться 10 минут перед подачей.'
    ]
  },

  // ================= ПЕРЕКУСЫ =================
  { id:'s1', meal:'snack', emoji:'🍎', name:'Яблоко с пастой арахисовой',
    items:['apple','peanut'], kcal:220, p:8, f:12, c:24,
    tags:['veg','vegan','fruits','nuts'],
    recipe:['Нарежьте яблоко дольками.','Намажьте пасту арахисовую на каждую дольку.','Подавайте сразу.']
  },
  { id:'s2', meal:'snack', emoji:'🥜', name:'Творог с орехами и мёдом',
    items:['cottage','nuts','honey'], kcal:280, p:22, f:14, c:20,
    tags:['veg','dairy','nuts','honey'],
    recipe:['Выложите 150 г творога в миску.','Добавьте орехи и ложку мёда.','Перемешайте.']
  },
  { id:'s3', meal:'snack', emoji:'🥤', name:'Смузи с ягодами и бананом',
    items:['berries','banana','yogurt'], kcal:230, p:10, f:6, c:38,
    tags:['veg','dairy','fruits','berries'],
    recipe:['Смешайте в блендере ягоды, банан, 150 мл йогурта.','Взбейте 30 секунд.','Подавайте охлаждённым.']
  },
  { id:'s4', meal:'snack', emoji:'🧀', name:'Сыр с яблоком и орехами',
    items:['cheese','apple','nuts'], kcal:290, p:14, f:20, c:14,
    tags:['veg','dairy','cheese','nuts','fruits'],
    recipe:['Нарежьте сыр и яблоко ломтиками.','Сложите на тарелку с орехами.','Приятного аппетита.']
  },
  { id:'s5', meal:'snack', emoji:'🍯', name:'Йогурт с мёдом и финиками',
    items:['yogurt','honey','dates'], kcal:250, p:12, f:6, c:42,
    tags:['veg','dairy','honey','fruits','sweet'],
    recipe:['Выложите йогурт в стакан.','Добавьте мёд и нарезанные финики.','Перемешайте.']
  },
  { id:'s6', meal:'snack', emoji:'🥕', name:'Морковные палочки с хумусом',
    items:['carrot','chickpeas','oil','lemon'], kcal:200, p:8, f:10, c:24,
    tags:['veg','vegan','legumes','citrus'],
    recipe:['Взбейте нут с маслом, лимоном и чесноком — получится хумус.','Нарежьте морковь палочками.','Подавайте вместе.']
  },
  { id:'s7', meal:'snack', emoji:'🍫', name:'Шоколадный батончик домашний',
    items:['dates','nuts','darkchoc'], kcal:260, p:6, f:14, c:32,
    tags:['veg','vegan','nuts','sweet','sugar','fruits'],
    recipe:['Пробейте в блендере финики и орехи.','Сформируйте батончик, обмакните в растопленный шоколад.','Охладите 30 минут.']
  },

  // ================= ДЕСЕРТЫ =================
  { id:'z1', meal:'dessert', emoji:'🍮', name:'Творожная запеканка с ягодами',
    items:['cottage','eggs','oatmeal','berries','honey'], kcal:380, p:24, f:12, c:42,
    tags:['veg','dairy','eggs','gluten','berries','honey'],
    recipe:[
      'Смешайте 400 г творога, 2 яйца, 3 ст. л. овсяной муки, мёд.',
      'Выложите в форму, запекайте 30 мин при 180°C.',
      'Подавайте с ягодами.'
    ]
  },
  { id:'z2', meal:'dessert', emoji:'🍫', name:'Шоколадный мусс из авокадо',
    items:['avocado','darkchoc','honey','nuts'], kcal:340, p:6, f:24, c:26,
    tags:['veg','vegan','avocado','nuts','honey','sweet','sugar'],
    recipe:[
      'Пробейте в блендере мякоть авокадо, растопленный шоколад, мёд.',
      'Взбейте до гладкости.',
      'Охладите 1 час, посыпьте орехами.'
    ]
  },
  { id:'z3', meal:'dessert', emoji:'🍌', name:'Банановые панкейки',
    items:['banana','eggs','oatmeal','honey'], kcal:360, p:16, f:10, c:54,
    tags:['veg','eggs','gluten','fruits','honey'],
    recipe:[
      'Разомните банан, смешайте с 2 яйцами и 3 ст. л. овсяной муки.',
      'Жарьте панкейки по 2 минуты с каждой стороны.',
      'Подавайте с мёдом.'
    ]
  },
  { id:'z4', meal:'dessert', emoji:'🥥', name:'Чиа-пудинг на молоке',
    items:['milk','honey','berries','nuts'], kcal:300, p:12, f:14, c:32,
    tags:['veg','dairy','nuts','berries','honey'],
    recipe:[
      'Смешайте 3 ст. л. семян чиа с 200 мл молока.',
      'Оставьте в холодильнике на ночь.',
      'Утром добавьте мёд, ягоды, орехи.'
    ]
  },
];

const DAYS = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const MEAL_LABELS = { breakfast:'Завтрак', lunch:'Обед', snack:'Перекус', dinner:'Ужин', dessert:'Десерт' };// Продукты: price за unit, теги для фильтрации
// tags: veg, vegan, dairy, gluten, nuts, eggs, fish, seafood, soy,
//       pork, beef, chicken, meat, mushrooms, onion, garlic, tomato,
//       citrus, honey, sugar, spicy, legumes, grains, pasta, potato,
//       veggies, greens, fruits, berries, avocado, cheese, sweet
const PRODUCTS = {
  chicken:   { name:'Куриная грудка', price:380, unit:'кг',    tags:['chicken','meat'] },
  turkey:    { name:'Индейка',         price:480, unit:'кг',    tags:['chicken','meat'] },
  beef:      { name:'Говядина',        price:650, unit:'кг',    tags:['beef','meat'] },
  pork:      { name:'Свинина',         price:450, unit:'кг',    tags:['pork','meat'] },
  fish:      { name:'Минтай',          price:350, unit:'кг',    tags:['fish'] },
  salmon:    { name:'Лосось',          price:1200,unit:'кг',    tags:['fish'] },
  tuna:      { name:'Тунец (конс.)',   price:180, unit:'банка', tags:['fish'] },
  shrimp:    { name:'Креветки',        price:600, unit:'кг',    tags:['seafood'] },
  eggs:      { name:'Яйца',            price:130, unit:'10 шт', tags:['eggs'] },
  tofu:      { name:'Тофу',            price:220, unit:'400 г', tags:['veg','vegan','soy'] },
  chickpeas: { name:'Нут',             price:150, unit:'500 г', tags:['veg','vegan','legumes'] },
  lentils:   { name:'Чечевица',        price:130, unit:'500 г', tags:['veg','vegan','legumes'] },
  beans:     { name:'Фасоль',          price:140, unit:'500 г', tags:['veg','vegan','legumes'] },
  peas:      { name:'Горох',           price:110, unit:'500 г', tags:['veg','vegan','legumes'] },

  cottage:   { name:'Творог 5%',       price:180, unit:'400 г', tags:['dairy','veg'] },
  kefir:     { name:'Кефир 1%',        price:90,  unit:'1 л',   tags:['dairy','veg'] },
  yogurt:    { name:'Йогурт нат.',     price:120, unit:'500 г', tags:['dairy','veg'] },
  milk:      { name:'Молоко',          price:90,  unit:'1 л',   tags:['dairy','veg'] },
  cheese:    { name:'Сыр',             price:550, unit:'кг',    tags:['dairy','veg'] },
  feta:      { name:'Фета',            price:350, unit:'300 г', tags:['dairy','veg'] },
  butter:    { name:'Масло слив.',     price:180, unit:'200 г', tags:['dairy','veg'] },

  buckwheat: { name:'Гречка',          price:110, unit:'1 кг',  tags:['veg','vegan','grains'] },
  rice:      { name:'Рис',             price:120, unit:'1 кг',  tags:['veg','vegan','grains'] },
  oatmeal:   { name:'Овсянка',         price:90,  unit:'500 г', tags:['veg','vegan','grains','gluten'] },
  quinoa:    { name:'Киноа',           price:280, unit:'500 г', tags:['veg','vegan','grains'] },
  bulgur:    { name:'Булгур',          price:130, unit:'500 г', tags:['veg','vegan','grains','gluten'] },
  couscous:  { name:'Кускус',          price:140, unit:'500 г', tags:['veg','vegan','grains','gluten'] },
  pasta:     { name:'Паста',           price:120, unit:'500 г', tags:['veg','vegan','pasta','gluten'] },
  bread:     { name:'Хлеб ц/з',        price:70,  unit:'буханка',tags:['veg','vegan','gluten','grains'] },
  tortilla:  { name:'Тортилья',        price:150, unit:'упак',  tags:['veg','vegan','gluten','grains'] },
  potato:    { name:'Картофель',       price:60,  unit:'кг',    tags:['veg','vegan','potato'] },
  sweetpot:  { name:'Батат',           price:180, unit:'кг',    tags:['veg','vegan','potato'] },

  veggies:   { name:'Овощи (сезон)',   price:250, unit:'кг',    tags:['veg','vegan','veggies'] },
  broccoli:  { name:'Брокколи (зам.)', price:180, unit:'400 г', tags:['veg','vegan','veggies'] },
  spinach:   { name:'Шпинат',          price:140, unit:'пучок', tags:['veg','vegan','greens'] },
  greens:    { name:'Салат / зелень',  price:120, unit:'пучок', tags:['veg','vegan','greens'] },
  tomato:    { name:'Томаты',          price:180, unit:'кг',    tags:['veg','vegan','veggies','tomato'] },
  cucumber:  { name:'Огурцы',          price:130, unit:'кг',    tags:['veg','vegan','veggies'] },
  pepper:    { name:'Перец болг.',     price:200, unit:'кг',    tags:['veg','vegan','veggies'] },
  carrot:    { name:'Морковь',         price:60,  unit:'кг',    tags:['veg','vegan','veggies'] },
  onion:     { name:'Лук',             price:50,  unit:'кг',    tags:['veg','vegan','veggies','onion'] },
  garlic:    { name:'Чеснок',          price:200, unit:'кг',    tags:['veg','vegan','veggies','garlic'] },
  mushrooms: { name:'Шампиньоны',      price:280, unit:'кг',    tags:['veg','vegan','veggies','mushrooms'] },
  avocado:   { name:'Авокадо',         price:150, unit:'шт',    tags:['veg','vegan','avocado'] },

  apple:     { name:'Яблоки',          price:120, unit:'кг',    tags:['veg','vegan','fruits'] },
  banana:    { name:'Бананы',          price:100, unit:'кг',    tags:['veg','vegan','fruits'] },
  berries:   { name:'Ягоды (зам.)',    price:280, unit:'400 г', tags:['veg','vegan','fruits','berries'] },
  orange:    { name:'Апельсины',       price:180, unit:'кг',    tags:['veg','vegan','fruits','citrus'] },
  lemon:     { name:'Лимон',           price:80,  unit:'шт',    tags:['veg','vegan','fruits','citrus'] },

  nuts:      { name:'Орехи',           price:450, unit:'300 г', tags:['veg','vegan','nuts'] },
  peanut:    { name:'Паста арахисовая',price:280, unit:'300 г', tags:['veg','vegan','nuts'] },
  oil:       { name:'Масло оливковое', price:400, unit:'500 мл',tags:['veg','vegan'] },
  honey:     { name:'Мёд',             price:350, unit:'500 г', tags:['veg','honey'] },
  darkchoc:  { name:'Шоколад 70%',     price:180, unit:'100 г', tags:['veg','sweet','sugar'] },
  dates:     { name:'Финики',          price:280, unit:'300 г', tags:['veg','vegan','sweet','fruits'] },
};

// Блюда с рецептами
// meal: breakfast / lunch / snack / dinner / dessert
// tags для фильтрации, kcal/БЖУ на порцию
const DISHES = [
  // ================= ЗАВТРАКИ =================
  { id:'b1', meal:'breakfast', emoji:'🥣', name:'Овсянка с бананом и орехами',
    items:['oatmeal','banana','nuts','honey'], kcal:420, p:12, f:14, c:62,
    tags:['veg','nuts','gluten','honey'],
    recipe:[
      'Залейте 60 г овсянки 200 мл молока или воды.',
      'Варите 5–7 минут на среднем огне, помешивая.',
      'Добавьте нарезанный банан, ложку мёда и горсть орехов.',
      'Дайте настояться минуту и подавайте тёплой.'
    ]
  },
  { id:'b2', meal:'breakfast', emoji:'🍳', name:'Омлет с овощами и сыром',
    items:['eggs','tomato','pepper','cheese','greens'], kcal:380, p:24, f:26, c:10,
    tags:['veg','eggs','dairy','tomato','cheese'],
    recipe:[
      'Взбейте 3 яйца со щепоткой соли.',
      'Обжарьте нарезанные томаты и перец 3 минуты.',
      'Залейте яйцами, готовьте под крышкой 4 минуты.',
      'Посыпьте тёртым сыром и зеленью, подавайте горячим.'
    ]
  },
  { id:'b3', meal:'breakfast', emoji:'🥑', name:'Тост с авокадо и яйцом пашот',
    items:['bread','avocado','eggs','lemon','greens'], kcal:420, p:16, f:26, c:34,
    tags:['veg','eggs','gluten','avocado','citrus'],
    recipe:[
      'Обжарьте ломтик хлеба на сухой сковороде.',
      'Разомните авокадо с соком лимона и солью.',
      'Сварите яйцо пашот (3 минуты в кипящей воде с уксусом).',
      'Соберите: хлеб → авокадо → яйцо → зелень.'
    ]
  },
  { id:'b4', meal:'breakfast', emoji:'🥞', name:'Сырники с ягодами',
    items:['cottage','eggs','oatmeal','berries','honey'], kcal:450, p:26, f:14, c:52,
    tags:['veg','dairy','eggs','gluten','berries','honey'],
    recipe:[
      'Смешайте 200 г творога, яйцо, 2 ст. л. овсяной муки.',
      'Сформируйте сырники и обжарьте по 3 минуты с каждой стороны.',
      'Подавайте с ягодами и ложкой мёда.'
    ]
  },
  { id:'b5', meal:'breakfast', emoji:'🥗', name:'Греческий йогурт с гранолой',
    items:['yogurt','oatmeal','berries','nuts','honey'], kcal:390, p:18, f:14, c:48,
    tags:['veg','dairy','gluten','nuts','berries','honey'],
    recipe:[
      'Выложите 200 г греческого йогурта в миску.',
      'Сверху — гранола (овсянка + мёд, запечённые 10 мин при 180°C).',
      'Добавьте ягоды и дроблёные орехи.'
    ]
  },
  { id:'b6', meal:'breakfast', emoji:'🌯', name:'Тортилья с тофу-скрэмблом',
    items:['tortilla','tofu','tomato','spinach','oil'], kcal:400, p:20, f:18, c:40,
    tags:['veg','vegan','soy','gluten','tomato','greens'],
    recipe:[
      'Разомните тофу вилкой, обжарьте с куркумой и солью 5 минут.',
      'Добавьте шпинат и томаты, готовьте ещё 2 минуты.',
      'Заверните в тёплую тортилью, подавайте с зеленью.'
    ]
  },
  { id:'b7', meal:'breakfast', emoji:'🍚', name:'Рисовая каша на кокосовом молоке',
    items:['rice','milk','banana','dates'], kcal:400, p:8, f:8, c:76,
    tags:['veg','dairy','fruits'],
    recipe:[
      'Отварите 60 г риса в 200 мл молока 20 минут.',
      'Добавьте нарезанный банан и финики.',
      'Проварите ещё 3 минуты, подавайте тёплой.'
    ]
  },
  { id:'b8', meal:'breakfast', emoji:'🥓', name:'Яичница с беконом и томатами',
    items:['eggs','tomato','bread','greens'], kcal:440, p:22, f:30, c:20,
    tags:['eggs','gluten','tomato','pork','meat'],
    recipe:[
      'Обжарьте 2 ломтика бекона до хруста.',
      'Добавьте половинки томатов, готовьте 2 минуты.',
      'Вбейте 2 яйца, готовьте до схватывания белка.',
      'Подавайте с тостом и зеленью.'
    ]
  },

  // ================= ОБЕДЫ =================
  { id:'l1', meal:'lunch', emoji:'🍗', name:'Курица с гречкой и овощами',
    items:['chicken','buckwheat','veggies','oil'], kcal:560, p:42, f:14, c:58,
    tags:['chicken','meat'],
    recipe:[
      'Обжарьте куриную грудку (150 г) по 4 минуты с каждой стороны.',
      'Отварите 70 г гречки в подсоленной воде.',
      'Овощи потушите с ложкой масла 5 минут.',
      'Соберите на тарелке, приправьте по вкусу.'
    ]
  },
  { id:'l2', meal:'lunch', emoji:'🐟', name:'Лосось с рисом и брокколи',
    items:['salmon','rice','broccoli','lemon','oil'], kcal:600, p:38, f:22, c:58,
    tags:['fish','citrus'],
    recipe:[
      'Запеките лосось (150 г) 12 минут при 200°C с солью и лимоном.',
      'Отварите рис и брокколи 5 минут.',
      'Полейте оливковым маслом, подавайте горячим.'
    ]
  },
  { id:'l3', meal:'lunch', emoji:'🥘', name:'Чечевичный суп с овощами',
    items:['lentils','carrot','onion','tomato','greens','oil'], kcal:420, p:22, f:10, c:58,
    tags:['veg','vegan','legumes','onion','tomato','greens'],
    recipe:[
      'Обжарьте лук и морковь 5 минут.',
      'Добавьте 100 г чечевицы, томаты и 1 л воды.',
      'Варите 25 минут до мягкости.',
      'Пюрируйте блендером, посыпьте зеленью.'
    ]
  },
  { id:'l4', meal:'lunch', emoji:'🌮', name:'Буррито с фасолью и рисом',
    items:['tortilla','beans','rice','tomato','cheese','greens'], kcal:580, p:24, f:18, c:78,
    tags:['veg','legumes','gluten','tomato','dairy','cheese'],
    recipe:[
      'Отварите рис, прогрейте фасоль с томатами и специями.',
      'Разогрейте тортилью на сухой сковороде.',
      'Выложите рис, фасоль, сыр, зелень, заверните.',
      'Обжарьте буррито по 2 минуты с каждой стороны.'
    ]
  },
  { id:'l5', meal:'lunch', emoji:'🥩', name:'Стейк из говядины с картофелем',
    items:['beef','potato','garlic','greens','oil'], kcal:650, p:44, f:28, c:52,
    tags:['beef','meat','garlic','greens'],
    recipe:[
      'Обжарьте стейк по 3 минуты с каждой стороны.',
      'Отварите или запеките картофель с чесноком.',
      'Дайте стейку отдохнуть 5 минут.',
      'Подавайте с зеленью и маслом.'
    ]
  },
  { id:'l6', meal:'lunch', emoji:'🍜', name:'Паста с тунцом и томатами',
    items:['pasta','tuna','tomato','garlic','oil','greens'], kcal:560, p:32, f:16, c:72,
    tags:['fish','gluten','pasta','tomato','garlic'],
    recipe:[
      'Отварите пасту (80 г) до аль денте.',
      'Обжарьте чеснок в масле, добавьте томаты и тунец.',
      'Соедините с пастой, прогрейте 2 минуты.',
      'Посыпьте зеленью.'
    ]
  },
  { id:'l7', meal:'lunch', emoji:'🍛', name:'Карри из нута и шпината',
    items:['chickpeas','spinach','tomato','onion','rice','oil'], kcal:520, p:20, f:16, c:74,
    tags:['veg','vegan','legumes','onion','tomato','greens','spicy'],
    recipe:[
      'Обжарьте лук, добавьте специи (куркума, карри).',
      'Введите томаты, нут и 200 мл воды.',
      'Тушите 15 минут, добавьте шпинат.',
      'Подавайте с отварным рисом.'
    ]
  },
  { id:'l8', meal:'lunch', emoji:'🍲', name:'Куриный суп с овощами',
    items:['chicken','carrot','onion','potato','greens'], kcal:380, p:30, f:10, c:38,
    tags:['chicken','meat','onion','greens'],
    recipe:[
      'Отварите курицу (200 г) 25 минут.',
      'Добавьте картофель, морковь, лук.',
      'Варите 15 минут, посолите.',
      'Посыпьте зеленью перед подачей.'
    ]
  },
  { id:'l9', meal:'lunch', emoji:'🥗', name:'Боул с киноа и овощами',
    items:['quinoa','chickpeas','avocado','tomato','greens','oil'], kcal:520, p:20, f:22, c:62,
    tags:['veg','vegan','legumes','avocado','tomato','greens'],
    recipe:[
      'Отварите киноа (70 г) 15 минут.',
      'Обжарьте нут со специями.',
      'Соберите боул: киноа, нут, авокадо, томаты, зелень.',
      'Полейте маслом и лимонным соком.'
    ]
  },

  // ================= УЖИНЫ =================
  { id:'d1', meal:'dinner', emoji:'🐠', name:'Рыба на пару с овощами',
    items:['fish','broccoli','carrot','greens','oil'], kcal:380, p:36, f:12, c:26,
    tags:['fish','greens'],
    recipe:[
      'Приготовьте рыбу на пару 10 минут.',
      'Брокколи и морковь — 6 минут на пару.',
      'Полейте оливковым маслом, посолите.',
      'Посыпьте зеленью.'
    ]
  },
  { id:'d2', meal:'dinner', emoji:'🍗', name:'Куриное филе с салатом и авокадо',
    items:['chicken','greens','avocado','tomato','oil','lemon'], kcal:420, p:38, f:20, c:14,
    tags:['chicken','meat','avocado','greens','tomato','citrus'],
    recipe:[
      'Обжарьте или запеките курицу.',
      'Нарежьте авокадо, томаты, зелень.',
      'Заправьте маслом и лимонным соком.',
      'Подавайте с тёплой курицей.'
    ]
  },
  { id:'d3', meal:'dinner', emoji:'🥘', name:'Тушёный тофу с овощами',
    items:['tofu','pepper','broccoli','garlic','oil'], kcal:340, p:22, f:20, c:18,
    tags:['veg','vegan','soy','garlic'],
    recipe:[
      'Обжарьте тофу кубиками до золотистой корочки.',
      'Добавьте перец, брокколи, чеснок.',
      'Тушите 5 минут с соевым соусом.',
      'Подавайте горячим.'
    ]
  },
  { id:'d4', meal:'dinner', emoji:'🍲', name:'Овощное рагу с фасолью',
    items:['beans','carrot','onion','tomato','pepper','oil','greens'], kcal:360, p:18, f:10, c:52,
    tags:['veg','vegan','legumes','onion','tomato','greens'],
    recipe:[
      'Обжарьте лук, морковь, перец 7 минут.',
      'Добавьте томаты и фасоль.',
      'Тушите 15 минут под крышкой.',
      'Посыпьте зеленью.'
    ]
  },
  { id:'d5', meal:'dinner', emoji:'🦐', name:'Креветки с овощами вок',
    items:['shrimp','pepper','broccoli','garlic','oil'], kcal:380, p:30, f:16, c:24,
    tags:['seafood','garlic'],
    recipe:[
      'Разогрейте вок с маслом.',
      'Обжарьте креветки 2 минуты, отложите.',
      'Обжарьте овощи 5 минут, верните креветки.',
      'Приправьте соевым соусом, подавайте.'
    ]
  },
  { id:'d6', meal:'dinner', emoji:'🥗', name:'Салат с тунцом и яйцом',
    items:['tuna','eggs','greens','tomato','oil','lemon'], kcal:340, p:28, f:18, c:14,
    tags:['fish','eggs','greens','tomato','citrus'],
    recipe:[
      'Отварите яйца вкрутую (8 минут).',
      'Смешайте тунец, зелень, томаты.',
      'Добавьте нарезанные яйца.',
      'Заправьте маслом и лимоном.'
    ]
  },
  { id:'d7', meal:'dinner', emoji:'🍆', name:'Запечённые овощи с фетой',
    items:['pepper','tomato','broccoli','feta','oil','greens'], kcal:400, p:18, f:24, c:28,
    tags:['veg','dairy','cheese','tomato','greens'],
    recipe:[
      'Нарежьте овощи крупно, выложите на противень.',
      'Полейте маслом, посолите, запекайте 25 мин при 200°C.',
      'За 5 минут до конца посыпьте фетой.',
      'Подавайте с зеленью.'
    ]
  },
  { id:'d8', meal:'dinner', emoji:'🍚', name:'Плов с курицей и морковью',
    items:['chicken','rice','carrot','onion','garlic','oil'], kcal:580, p:36, f:16, c:72,
    tags:['chicken','meat','onion','garlic'],
    recipe:[
      'Обжарьте курицу с луком и морковью.',
      'Добавьте рис и 2 части воды.',
      'Тушите под крышкой 20 минут.',
      'Дайте настояться 10 минут перед подачей.'
    ]
  },

  // ================= ПЕРЕКУСЫ =================
  { id:'s1', meal:'snack', emoji:'🍎', name:'Яблоко с пастой арахисовой',
    items:['apple','peanut'], kcal:220, p:8, f:12, c:24,
    tags:['veg','vegan','fruits','nuts'],
    recipe:['Нарежьте яблоко дольками.','Намажьте пасту арахисовую на каждую дольку.','Подавайте сразу.']
  },
  { id:'s2', meal:'snack', emoji:'🥜', name:'Творог с орехами и мёдом',
    items:['cottage','nuts','honey'], kcal:280, p:22, f:14, c:20,
    tags:['veg','dairy','nuts','honey'],
    recipe:['Выложите 150 г творога в миску.','Добавьте орехи и ложку мёда.','Перемешайте.']
  },
  { id:'s3', meal:'snack', emoji:'🥤', name:'Смузи с ягодами и бананом',
    items:['berries','banana','yogurt'], kcal:230, p:10, f:6, c:38,
    tags:['veg','dairy','fruits','berries'],
    recipe:['Смешайте в блендере ягоды, банан, 150 мл йогурта.','Взбейте 30 секунд.','Подавайте охлаждённым.']
  },
  { id:'s4', meal:'snack', emoji:'🧀', name:'Сыр с яблоком и орехами',
    items:['cheese','apple','nuts'], kcal:290, p:14, f:20, c:14,
    tags:['veg','dairy','cheese','nuts','fruits'],
    recipe:['Нарежьте сыр и яблоко ломтиками.','Сложите на тарелку с орехами.','Приятного аппетита.']
  },
  { id:'s5', meal:'snack', emoji:'🍯', name:'Йогурт с мёдом и финиками',
    items:['yogurt','honey','dates'], kcal:250, p:12, f:6, c:42,
    tags:['veg','dairy','honey','fruits','sweet'],
    recipe:['Выложите йогурт в стакан.','Добавьте мёд и нарезанные финики.','Перемешайте.']
  },
  { id:'s6', meal:'snack', emoji:'🥕', name:'Морковные палочки с хумусом',
    items:['carrot','chickpeas','oil','lemon'], kcal:200, p:8, f:10, c:24,
    tags:['veg','vegan','legumes','citrus'],
    recipe:['Взбейте нут с маслом, лимоном и чесноком — получится хумус.','Нарежьте морковь палочками.','Подавайте вместе.']
  },
  { id:'s7', meal:'snack', emoji:'🍫', name:'Шоколадный батончик домашний',
    items:['dates','nuts','darkchoc'], kcal:260, p:6, f:14, c:32,
    tags:['veg','vegan','nuts','sweet','sugar','fruits'],
    recipe:['Пробейте в блендере финики и орехи.','Сформируйте батончик, обмакните в растопленный шоколад.','Охладите 30 минут.']
  },

  // ================= ДЕСЕРТЫ =================
  { id:'z1', meal:'dessert', emoji:'🍮', name:'Творожная запеканка с ягодами',
    items:['cottage','eggs','oatmeal','berries','honey'], kcal:380, p:24, f:12, c:42,
    tags:['veg','dairy','eggs','gluten','berries','honey'],
    recipe:[
      'Смешайте 400 г творога, 2 яйца, 3 ст. л. овсяной муки, мёд.',
      'Выложите в форму, запекайте 30 мин при 180°C.',
      'Подавайте с ягодами.'
    ]
  },
  { id:'z2', meal:'dessert', emoji:'🍫', name:'Шоколадный мусс из авокадо',
    items:['avocado','darkchoc','honey','nuts'], kcal:340, p:6, f:24, c:26,
    tags:['veg','vegan','avocado','nuts','honey','sweet','sugar'],
    recipe:[
      'Пробейте в блендере мякоть авокадо, растопленный шоколад, мёд.',
      'Взбейте до гладкости.',
      'Охладите 1 час, посыпьте орехами.'
    ]
  },
  { id:'z3', meal:'dessert', emoji:'🍌', name:'Банановые панкейки',
    items:['banana','eggs','oatmeal','honey'], kcal:360, p:16, f:10, c:54,
    tags:['veg','eggs','gluten','fruits','honey'],
    recipe:[
      'Разомните банан, смешайте с 2 яйцами и 3 ст. л. овсяной муки.',
      'Жарьте панкейки по 2 минуты с каждой стороны.',
      'Подавайте с мёдом.'
    ]
  },
  { id:'z4', meal:'dessert', emoji:'🥥', name:'Чиа-пудинг на молоке',
    items:['milk','honey','berries','nuts'], kcal:300, p:12, f:14, c:32,
    tags:['veg','dairy','nuts','berries','honey'],
    recipe:[
      'Смешайте 3 ст. л. семян чиа с 200 мл молока.',
      'Оставьте в холодильнике на ночь.',
      'Утром добавьте мёд, ягоды, орехи.'
    ]
  },
];

const DAYS = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
const MEAL_LABELS = { breakfast:'Завтрак', lunch:'Обед', snack:'Перекус', dinner:'Ужин', dessert:'Десерт' };