// =============================================================================
// ui-strings.js — Static UI translations for Phyansy
// Languages: en, es, zh, hi, ar, fr, bn, pt, ru, ja, de
//
// Physics terminology (formula names, symbol names, variable labels) stays in
// English — it is the universal language of physics. Only natural-language
// prose labels, nav items, section headers, and UI chrome are translated.
// =============================================================================

export const UI_STRINGS = {

  // ── ENGLISH (default — always baked in, never loaded from here) ──────────────
  en: {
    // Nav
    nav_constants:  'Constants',
    nav_equations:  'Equations',
    nav_symbols:    'Symbols',
    nav_units:      'Units',
    nav_calculator: 'Calculator',

    // Section headers
    sec_constants_title: 'Physical Constants',
    sec_constants_sub:   'Fundamental constants of the universe — click any card to expand',
    sec_equations_title: 'Key Equations',
    sec_equations_sub:   'Essential formulas across all branches of physics — click to see variable legend',
    sec_symbols_title:   'Symbols Reference',
    sec_symbols_sub:     'Greek alphabet and mathematical notation used in physics',
    sec_units_title:     'Units & Measurement',
    sec_units_sub:       'SI base units, derived units, and metric prefixes — click any symbol to copy',
    sec_calc_title:      'Physics Calculator',
    sec_calc_sub:        'Pick an equation, choose what to solve for, enter known values',

    // Modal labels — equations
    modal_what_it_says:   'What It Says',
    modal_example:        'Example',
    modal_derivation:     'Derivation',
    modal_deep_meaning:   'Deep Meaning',
    modal_math_form:      'Mathematical Form',
    modal_history:        'History',
    modal_why_it_matters: 'Why It Matters',
    modal_misconception:  'Common Misconception',
    modal_related:        'Related Equations',
    modal_variables:      'Variables',

    // Modal labels — constants
    modal_exact_value:    'Exact Value',
    modal_discovered_by:  'Discovered By',
    modal_key_formula:    'Key Formula',
    modal_what_it_says_c: 'What It Says',
    modal_simple_example: 'Simple Example',
    modal_deep_meaning_c: 'Deep Meaning',
    modal_why_it_matters_c: 'Why It Matters',
    modal_copy_exact:     'Copy exact value',

    // Units section
    units_si_base:       'SI Base Units',
    units_derived:       'Common Derived Units',
    units_non_si:        'Non-SI Units (Widely Used in Physics)',
    units_prefixes:      'Metric Prefixes',
    units_prefix_filter: 'Filter prefixes — name, symbol, or exponent…',

    // Symbols tabs
    sym_greek: 'Greek Alphabet',
    sym_math:  'Math Symbols',

    // Calculator
    calc_equation_label: 'Equation',
    calc_solve_for:      'Solve for',
    calc_btn:            'Calculate',
    calc_result_label:   'Result',

    // Language picker
    lang_btn_label:      'Language',
    lang_picker_title:   'Choose Language',
    lang_english_label:  'Physics Terms Stay in English',
    lang_note:           'Formulas, symbols, and variable names remain in English — the universal language of physics. Explanations are translated.',
    lang_ai_powered:     'Explanations translated by AI',
    lang_translating:    'Translating…',
    lang_translation_fail: 'Translation unavailable — showing English',

    // Toast
    toast_copied: 'Copied exact value!',
  },

  // ── SPANISH ───────────────────────────────────────────────────────────────────
  es: {
    nav_constants:  'Constantes',
    nav_equations:  'Ecuaciones',
    nav_symbols:    'Símbolos',
    nav_units:      'Unidades',
    nav_calculator: 'Calculadora',

    sec_constants_title: 'Constantes Físicas',
    sec_constants_sub:   'Constantes fundamentales del universo — haz clic en cualquier tarjeta para expandir',
    sec_equations_title: 'Ecuaciones Clave',
    sec_equations_sub:   'Fórmulas esenciales en todas las ramas de la física — haz clic para ver la leyenda de variables',
    sec_symbols_title:   'Referencia de Símbolos',
    sec_symbols_sub:     'Alfabeto griego y notación matemática usados en física',
    sec_units_title:     'Unidades y Medición',
    sec_units_sub:       'Unidades base SI, unidades derivadas y prefijos métricos — haz clic en cualquier símbolo para copiar',
    sec_calc_title:      'Calculadora de Física',
    sec_calc_sub:        'Elige una ecuación, selecciona qué resolver, ingresa los valores conocidos',

    modal_what_it_says:   'Qué Dice',
    modal_example:        'Ejemplo',
    modal_derivation:     'Derivación',
    modal_deep_meaning:   'Significado Profundo',
    modal_math_form:      'Forma Matemática',
    modal_history:        'Historia',
    modal_why_it_matters: 'Por Qué Importa',
    modal_misconception:  'Error Común',
    modal_related:        'Ecuaciones Relacionadas',
    modal_variables:      'Variables',

    modal_exact_value:    'Valor Exacto',
    modal_discovered_by:  'Descubierto Por',
    modal_key_formula:    'Fórmula Clave',
    modal_what_it_says_c: 'Qué Dice',
    modal_simple_example: 'Ejemplo Simple',
    modal_deep_meaning_c: 'Significado Profundo',
    modal_why_it_matters_c: 'Por Qué Importa',
    modal_copy_exact:     'Copiar valor exacto',

    units_si_base:       'Unidades Base SI',
    units_derived:       'Unidades Derivadas Comunes',
    units_non_si:        'Unidades no-SI (ampliamente usadas en física)',
    units_prefixes:      'Prefijos Métricos',
    units_prefix_filter: 'Filtrar prefijos — nombre, símbolo o exponente…',

    sym_greek: 'Alfabeto Griego',
    sym_math:  'Símbolos Matemáticos',

    calc_equation_label: 'Ecuación',
    calc_solve_for:      'Resolver para',
    calc_btn:            'Calcular',
    calc_result_label:   'Resultado',

    lang_btn_label:      'Idioma',
    lang_picker_title:   'Elegir Idioma',
    lang_english_label:  'Términos físicos en inglés',
    lang_note:           'Las fórmulas, símbolos y nombres de variables permanecen en inglés — el idioma universal de la física. Las explicaciones se traducen.',
    lang_ai_powered:     'Explicaciones traducidas por IA',
    lang_translating:    'Traduciendo…',
    lang_translation_fail: 'Traducción no disponible — mostrando inglés',

    toast_copied: '¡Valor exacto copiado!',
  },

  // ── MANDARIN CHINESE ──────────────────────────────────────────────────────────
  zh: {
    nav_constants:  '物理常数',
    nav_equations:  '方程',
    nav_symbols:    '符号',
    nav_units:      '单位',
    nav_calculator: '计算器',

    sec_constants_title: '物理常数',
    sec_constants_sub:   '宇宙的基本常数 — 点击任意卡片展开',
    sec_equations_title: '核心方程',
    sec_equations_sub:   '物理各分支的基本公式 — 点击查看变量说明',
    sec_symbols_title:   '符号参考',
    sec_symbols_sub:     '物理学中使用的希腊字母和数学符号',
    sec_units_title:     '单位与测量',
    sec_units_sub:       '国际单位制基本单位、导出单位和公制前缀 — 点击任意符号复制',
    sec_calc_title:      '物理计算器',
    sec_calc_sub:        '选择方程，选择求解变量，输入已知值',

    modal_what_it_says:   '方程含义',
    modal_example:        '例题',
    modal_derivation:     '推导过程',
    modal_deep_meaning:   '深层含义',
    modal_math_form:      '数学形式',
    modal_history:        '历史背景',
    modal_why_it_matters: '为何重要',
    modal_misconception:  '常见误区',
    modal_related:        '相关方程',
    modal_variables:      '变量说明',

    modal_exact_value:    '精确值',
    modal_discovered_by:  '发现者',
    modal_key_formula:    '核心公式',
    modal_what_it_says_c: '含义解释',
    modal_simple_example: '简单示例',
    modal_deep_meaning_c: '深层含义',
    modal_why_it_matters_c: '为何重要',
    modal_copy_exact:     '复制精确值',

    units_si_base:       '国际单位制基本单位',
    units_derived:       '常用导出单位',
    units_non_si:        '非国际单位制单位（物理学中广泛使用）',
    units_prefixes:      '公制前缀',
    units_prefix_filter: '筛选前缀 — 名称、符号或指数…',

    sym_greek: '希腊字母',
    sym_math:  '数学符号',

    calc_equation_label: '方程',
    calc_solve_for:      '求解变量',
    calc_btn:            '计算',
    calc_result_label:   '结果',

    lang_btn_label:      '语言',
    lang_picker_title:   '选择语言',
    lang_english_label:  '物理术语保留英文',
    lang_note:           '公式、符号和变量名保留英文 — 物理学的通用语言。解释说明将被翻译。',
    lang_ai_powered:     '解释由AI翻译',
    lang_translating:    '正在翻译…',
    lang_translation_fail: '翻译不可用 — 显示英文',

    toast_copied: '已复制精确值！',
  },

  // ── HINDI ─────────────────────────────────────────────────────────────────────
  hi: {
    nav_constants:  'स्थिरांक',
    nav_equations:  'समीकरण',
    nav_symbols:    'प्रतीक',
    nav_units:      'इकाइयाँ',
    nav_calculator: 'कैलकुलेटर',

    sec_constants_title: 'भौतिक स्थिरांक',
    sec_constants_sub:   'ब्रह्मांड के मूल स्थिरांक — किसी भी कार्ड पर क्लिक करें',
    sec_equations_title: 'प्रमुख समीकरण',
    sec_equations_sub:   'भौतिकी की सभी शाखाओं के आवश्यक सूत्र — चर विवरण के लिए क्लिक करें',
    sec_symbols_title:   'प्रतीक संदर्भ',
    sec_symbols_sub:     'भौतिकी में प्रयुक्त ग्रीक वर्णमाला और गणितीय संकेतन',
    sec_units_title:     'इकाइयाँ और माप',
    sec_units_sub:       'SI आधार इकाइयाँ, व्युत्पन्न इकाइयाँ और मीट्रिक उपसर्ग',
    sec_calc_title:      'भौतिकी कैलकुलेटर',
    sec_calc_sub:        'समीकरण चुनें, हल करने के लिए चर चुनें, ज्ञात मान दर्ज करें',

    modal_what_it_says:   'यह क्या कहता है',
    modal_example:        'उदाहरण',
    modal_derivation:     'व्युत्पत्ति',
    modal_deep_meaning:   'गहरा अर्थ',
    modal_math_form:      'गणितीय रूप',
    modal_history:        'इतिहास',
    modal_why_it_matters: 'यह क्यों महत्वपूर्ण है',
    modal_misconception:  'सामान्य भ्रांति',
    modal_related:        'संबंधित समीकरण',
    modal_variables:      'चर',

    modal_exact_value:    'सटीक मान',
    modal_discovered_by:  'खोजकर्ता',
    modal_key_formula:    'मुख्य सूत्र',
    modal_what_it_says_c: 'यह क्या कहता है',
    modal_simple_example: 'सरल उदाहरण',
    modal_deep_meaning_c: 'गहरा अर्थ',
    modal_why_it_matters_c: 'यह क्यों महत्वपूर्ण है',
    modal_copy_exact:     'सटीक मान कॉपी करें',

    units_si_base:       'SI आधार इकाइयाँ',
    units_derived:       'सामान्य व्युत्पन्न इकाइयाँ',
    units_non_si:        'गैर-SI इकाइयाँ (भौतिकी में व्यापक रूप से उपयोग)',
    units_prefixes:      'मीट्रिक उपसर्ग',
    units_prefix_filter: 'उपसर्ग फ़िल्टर करें — नाम, प्रतीक या घातांक…',

    sym_greek: 'ग्रीक वर्णमाला',
    sym_math:  'गणितीय प्रतीक',

    calc_equation_label: 'समीकरण',
    calc_solve_for:      'हल करें',
    calc_btn:            'गणना करें',
    calc_result_label:   'परिणाम',

    lang_btn_label:      'भाषा',
    lang_picker_title:   'भाषा चुनें',
    lang_english_label:  'भौतिकी शब्द अंग्रेज़ी में रहेंगे',
    lang_note:           'सूत्र, प्रतीक और चर नाम अंग्रेज़ी में रहेंगे — भौतिकी की सार्वभौमिक भाषा। व्याख्याएँ अनुवादित होंगी।',
    lang_ai_powered:     'AI द्वारा अनुवादित व्याख्याएँ',
    lang_translating:    'अनुवाद हो रहा है…',
    lang_translation_fail: 'अनुवाद उपलब्ध नहीं — अंग्रेज़ी दिखाई जा रही है',

    toast_copied: 'सटीक मान कॉपी किया गया!',
  },

  // ── ARABIC (RTL) ──────────────────────────────────────────────────────────────
  ar: {
    nav_constants:  'الثوابت',
    nav_equations:  'المعادلات',
    nav_symbols:    'الرموز',
    nav_units:      'الوحدات',
    nav_calculator: 'الحاسبة',

    sec_constants_title: 'الثوابت الفيزيائية',
    sec_constants_sub:   'الثوابت الأساسية للكون — انقر على أي بطاقة للتوسيع',
    sec_equations_title: 'المعادلات الأساسية',
    sec_equations_sub:   'الصيغ الأساسية في جميع فروع الفيزياء — انقر لرؤية شرح المتغيرات',
    sec_symbols_title:   'مرجع الرموز',
    sec_symbols_sub:     'الأبجدية اليونانية والرموز الرياضية المستخدمة في الفيزياء',
    sec_units_title:     'الوحدات والقياس',
    sec_units_sub:       'الوحدات الأساسية للنظام الدولي، الوحدات المشتقة، والبوادئ المترية',
    sec_calc_title:      'حاسبة الفيزياء',
    sec_calc_sub:        'اختر معادلة، حدد ما تريد حله، أدخل القيم المعروفة',

    modal_what_it_says:   'ماذا تعني',
    modal_example:        'مثال',
    modal_derivation:     'الاشتقاق',
    modal_deep_meaning:   'المعنى العميق',
    modal_math_form:      'الصورة الرياضية',
    modal_history:        'التاريخ',
    modal_why_it_matters: 'لماذا تهم',
    modal_misconception:  'مفهوم خاطئ شائع',
    modal_related:        'معادلات ذات صلة',
    modal_variables:      'المتغيرات',

    modal_exact_value:    'القيمة الدقيقة',
    modal_discovered_by:  'اكتشفه',
    modal_key_formula:    'الصيغة الأساسية',
    modal_what_it_says_c: 'ماذا تعني',
    modal_simple_example: 'مثال بسيط',
    modal_deep_meaning_c: 'المعنى العميق',
    modal_why_it_matters_c: 'لماذا تهم',
    modal_copy_exact:     'نسخ القيمة الدقيقة',

    units_si_base:       'الوحدات الأساسية للنظام الدولي',
    units_derived:       'الوحدات المشتقة الشائعة',
    units_non_si:        'وحدات غير دولية (مستخدمة على نطاق واسع في الفيزياء)',
    units_prefixes:      'البوادئ المترية',
    units_prefix_filter: 'تصفية البوادئ — الاسم أو الرمز أو الأس…',

    sym_greek: 'الأبجدية اليونانية',
    sym_math:  'الرموز الرياضية',

    calc_equation_label: 'المعادلة',
    calc_solve_for:      'حل من أجل',
    calc_btn:            'احسب',
    calc_result_label:   'النتيجة',

    lang_btn_label:      'اللغة',
    lang_picker_title:   'اختر اللغة',
    lang_english_label:  'مصطلحات الفيزياء تبقى بالإنجليزية',
    lang_note:           'تبقى الصيغ والرموز وأسماء المتغيرات بالإنجليزية — اللغة العالمية للفيزياء. يتم ترجمة الشروح.',
    lang_ai_powered:     'الشروح مترجمة بالذكاء الاصطناعي',
    lang_translating:    'جارٍ الترجمة…',
    lang_translation_fail: 'الترجمة غير متاحة — يتم عرض الإنجليزية',

    toast_copied: 'تم نسخ القيمة الدقيقة!',
  },

  // ── FRENCH ────────────────────────────────────────────────────────────────────
  fr: {
    nav_constants:  'Constantes',
    nav_equations:  'Équations',
    nav_symbols:    'Symboles',
    nav_units:      'Unités',
    nav_calculator: 'Calculatrice',

    sec_constants_title: 'Constantes Physiques',
    sec_constants_sub:   'Constantes fondamentales de l\'univers — cliquez sur une carte pour développer',
    sec_equations_title: 'Équations Clés',
    sec_equations_sub:   'Formules essentielles dans toutes les branches de la physique — cliquez pour voir la légende',
    sec_symbols_title:   'Référence des Symboles',
    sec_symbols_sub:     'Alphabet grec et notation mathématique utilisés en physique',
    sec_units_title:     'Unités et Mesures',
    sec_units_sub:       'Unités de base SI, unités dérivées et préfixes métriques',
    sec_calc_title:      'Calculatrice de Physique',
    sec_calc_sub:        'Choisissez une équation, sélectionnez la variable à résoudre, entrez les valeurs connues',

    modal_what_it_says:   'Ce Qu\'elle Dit',
    modal_example:        'Exemple',
    modal_derivation:     'Dérivation',
    modal_deep_meaning:   'Sens Profond',
    modal_math_form:      'Forme Mathématique',
    modal_history:        'Histoire',
    modal_why_it_matters: 'Pourquoi C\'est Important',
    modal_misconception:  'Idée Fausse Courante',
    modal_related:        'Équations Connexes',
    modal_variables:      'Variables',

    modal_exact_value:    'Valeur Exacte',
    modal_discovered_by:  'Découvert Par',
    modal_key_formula:    'Formule Clé',
    modal_what_it_says_c: 'Ce Qu\'elle Dit',
    modal_simple_example: 'Exemple Simple',
    modal_deep_meaning_c: 'Sens Profond',
    modal_why_it_matters_c: 'Pourquoi C\'est Important',
    modal_copy_exact:     'Copier la valeur exacte',

    units_si_base:       'Unités de Base SI',
    units_derived:       'Unités Dérivées Courantes',
    units_non_si:        'Unités non-SI (largement utilisées en physique)',
    units_prefixes:      'Préfixes Métriques',
    units_prefix_filter: 'Filtrer les préfixes — nom, symbole ou exposant…',

    sym_greek: 'Alphabet Grec',
    sym_math:  'Symboles Mathématiques',

    calc_equation_label: 'Équation',
    calc_solve_for:      'Résoudre pour',
    calc_btn:            'Calculer',
    calc_result_label:   'Résultat',

    lang_btn_label:      'Langue',
    lang_picker_title:   'Choisir la Langue',
    lang_english_label:  'Termes physiques en anglais',
    lang_note:           'Les formules, symboles et noms de variables restent en anglais — la langue universelle de la physique. Les explications sont traduites.',
    lang_ai_powered:     'Explications traduites par IA',
    lang_translating:    'Traduction en cours…',
    lang_translation_fail: 'Traduction indisponible — affichage en anglais',

    toast_copied: 'Valeur exacte copiée !',
  },

  // ── BENGALI ───────────────────────────────────────────────────────────────────
  bn: {
    nav_constants:  'ধ্রুবক',
    nav_equations:  'সমীকরণ',
    nav_symbols:    'প্রতীক',
    nav_units:      'একক',
    nav_calculator: 'ক্যালকুলেটর',

    sec_constants_title: 'ভৌত ধ্রুবক',
    sec_constants_sub:   'মহাবিশ্বের মৌলিক ধ্রুবক — যেকোনো কার্ডে ক্লিক করুন',
    sec_equations_title: 'গুরুত্বপূর্ণ সমীকরণ',
    sec_equations_sub:   'পদার্থবিজ্ঞানের সব শাখার মূল সূত্র — চল রাশির বিবরণ দেখতে ক্লিক করুন',
    sec_symbols_title:   'প্রতীক রেফারেন্স',
    sec_symbols_sub:     'পদার্থবিজ্ঞানে ব্যবহৃত গ্রিক বর্ণমালা ও গাণিতিক প্রতীক',
    sec_units_title:     'একক ও পরিমাপ',
    sec_units_sub:       'SI মূল একক, লব্ধ একক এবং মেট্রিক উপসর্গ',
    sec_calc_title:      'পদার্থবিজ্ঞান ক্যালকুলেটর',
    sec_calc_sub:        'সমীকরণ বেছে নিন, কী সমাধান করবেন তা নির্বাচন করুন, পরিচিত মান দিন',

    modal_what_it_says:   'সমীকরণটি কী বলে',
    modal_example:        'উদাহরণ',
    modal_derivation:     'উদ্ভব',
    modal_deep_meaning:   'গভীর অর্থ',
    modal_math_form:      'গাণিতিক রূপ',
    modal_history:        'ইতিহাস',
    modal_why_it_matters: 'কেন গুরুত্বপূর্ণ',
    modal_misconception:  'সাধারণ ভুল ধারণা',
    modal_related:        'সম্পর্কিত সমীকরণ',
    modal_variables:      'চল রাশি',

    modal_exact_value:    'সঠিক মান',
    modal_discovered_by:  'আবিষ্কারক',
    modal_key_formula:    'মূল সূত্র',
    modal_what_it_says_c: 'এটি কী বলে',
    modal_simple_example: 'সহজ উদাহরণ',
    modal_deep_meaning_c: 'গভীর অর্থ',
    modal_why_it_matters_c: 'কেন গুরুত্বপূর্ণ',
    modal_copy_exact:     'সঠিক মান কপি করুন',

    units_si_base:       'SI মূল একক',
    units_derived:       'সাধারণ লব্ধ একক',
    units_non_si:        'অ-SI একক (পদার্থবিজ্ঞানে ব্যাপকভাবে ব্যবহৃত)',
    units_prefixes:      'মেট্রিক উপসর্গ',
    units_prefix_filter: 'উপসর্গ ফিল্টার করুন — নাম, প্রতীক বা ঘাত…',

    sym_greek: 'গ্রিক বর্ণমালা',
    sym_math:  'গাণিতিক প্রতীক',

    calc_equation_label: 'সমীকরণ',
    calc_solve_for:      'সমাধান করুন',
    calc_btn:            'গণনা করুন',
    calc_result_label:   'ফলাফল',

    lang_btn_label:      'ভাষা',
    lang_picker_title:   'ভাষা বেছে নিন',
    lang_english_label:  'পদার্থবিজ্ঞানের পরিভাষা ইংরেজিতে থাকবে',
    lang_note:           'সূত্র, প্রতীক এবং চল রাশির নাম ইংরেজিতে থাকবে — পদার্থবিজ্ঞানের সর্বজনীন ভাষা। ব্যাখ্যাগুলো অনুবাদিত হবে।',
    lang_ai_powered:     'AI দ্বারা অনুবাদিত ব্যাখ্যা',
    lang_translating:    'অনুবাদ হচ্ছে…',
    lang_translation_fail: 'অনুবাদ পাওয়া যাচ্ছে না — ইংরেজি দেখানো হচ্ছে',

    toast_copied: 'সঠিক মান কপি করা হয়েছে!',
  },

  // ── PORTUGUESE ────────────────────────────────────────────────────────────────
  pt: {
    nav_constants:  'Constantes',
    nav_equations:  'Equações',
    nav_symbols:    'Símbolos',
    nav_units:      'Unidades',
    nav_calculator: 'Calculadora',

    sec_constants_title: 'Constantes Físicas',
    sec_constants_sub:   'Constantes fundamentais do universo — clique em qualquer cartão para expandir',
    sec_equations_title: 'Equações-Chave',
    sec_equations_sub:   'Fórmulas essenciais em todos os ramos da física — clique para ver a legenda das variáveis',
    sec_symbols_title:   'Referência de Símbolos',
    sec_symbols_sub:     'Alfabeto grego e notação matemática usados em física',
    sec_units_title:     'Unidades e Medição',
    sec_units_sub:       'Unidades base SI, unidades derivadas e prefixos métricos',
    sec_calc_title:      'Calculadora de Física',
    sec_calc_sub:        'Escolha uma equação, selecione o que resolver, insira os valores conhecidos',

    modal_what_it_says:   'O Que Diz',
    modal_example:        'Exemplo',
    modal_derivation:     'Derivação',
    modal_deep_meaning:   'Significado Profundo',
    modal_math_form:      'Forma Matemática',
    modal_history:        'História',
    modal_why_it_matters: 'Por Que Importa',
    modal_misconception:  'Equívoco Comum',
    modal_related:        'Equações Relacionadas',
    modal_variables:      'Variáveis',

    modal_exact_value:    'Valor Exato',
    modal_discovered_by:  'Descoberto Por',
    modal_key_formula:    'Fórmula-Chave',
    modal_what_it_says_c: 'O Que Diz',
    modal_simple_example: 'Exemplo Simples',
    modal_deep_meaning_c: 'Significado Profundo',
    modal_why_it_matters_c: 'Por Que Importa',
    modal_copy_exact:     'Copiar valor exato',

    units_si_base:       'Unidades Base SI',
    units_derived:       'Unidades Derivadas Comuns',
    units_non_si:        'Unidades não-SI (amplamente usadas em física)',
    units_prefixes:      'Prefixos Métricos',
    units_prefix_filter: 'Filtrar prefixos — nome, símbolo ou expoente…',

    sym_greek: 'Alfabeto Grego',
    sym_math:  'Símbolos Matemáticos',

    calc_equation_label: 'Equação',
    calc_solve_for:      'Resolver para',
    calc_btn:            'Calcular',
    calc_result_label:   'Resultado',

    lang_btn_label:      'Idioma',
    lang_picker_title:   'Escolher Idioma',
    lang_english_label:  'Termos físicos em inglês',
    lang_note:           'Fórmulas, símbolos e nomes de variáveis permanecem em inglês — a língua universal da física. As explicações são traduzidas.',
    lang_ai_powered:     'Explicações traduzidas por IA',
    lang_translating:    'Traduzindo…',
    lang_translation_fail: 'Tradução indisponível — exibindo inglês',

    toast_copied: 'Valor exato copiado!',
  },

  // ── RUSSIAN ───────────────────────────────────────────────────────────────────
  ru: {
    nav_constants:  'Константы',
    nav_equations:  'Уравнения',
    nav_symbols:    'Символы',
    nav_units:      'Единицы',
    nav_calculator: 'Калькулятор',

    sec_constants_title: 'Физические Константы',
    sec_constants_sub:   'Фундаментальные константы вселенной — нажмите на карточку для раскрытия',
    sec_equations_title: 'Ключевые Уравнения',
    sec_equations_sub:   'Основные формулы во всех разделах физики — нажмите для просмотра переменных',
    sec_symbols_title:   'Справочник Символов',
    sec_symbols_sub:     'Греческий алфавит и математические обозначения в физике',
    sec_units_title:     'Единицы и Измерения',
    sec_units_sub:       'Базовые единицы СИ, производные единицы и приставки',
    sec_calc_title:      'Физический Калькулятор',
    sec_calc_sub:        'Выберите уравнение, что вычислить, введите известные значения',

    modal_what_it_says:   'Что Означает',
    modal_example:        'Пример',
    modal_derivation:     'Вывод',
    modal_deep_meaning:   'Глубокий Смысл',
    modal_math_form:      'Математическая Форма',
    modal_history:        'История',
    modal_why_it_matters: 'Почему Важно',
    modal_misconception:  'Распространённое Заблуждение',
    modal_related:        'Связанные Уравнения',
    modal_variables:      'Переменные',

    modal_exact_value:    'Точное Значение',
    modal_discovered_by:  'Открыл',
    modal_key_formula:    'Ключевая Формула',
    modal_what_it_says_c: 'Что Означает',
    modal_simple_example: 'Простой Пример',
    modal_deep_meaning_c: 'Глубокий Смысл',
    modal_why_it_matters_c: 'Почему Важно',
    modal_copy_exact:     'Копировать точное значение',

    units_si_base:       'Основные Единицы СИ',
    units_derived:       'Распространённые Производные Единицы',
    units_non_si:        'Внесистемные единицы (широко используемые в физике)',
    units_prefixes:      'Приставки СИ',
    units_prefix_filter: 'Фильтр приставок — название, символ или показатель…',

    sym_greek: 'Греческий Алфавит',
    sym_math:  'Математические Символы',

    calc_equation_label: 'Уравнение',
    calc_solve_for:      'Найти',
    calc_btn:            'Вычислить',
    calc_result_label:   'Результат',

    lang_btn_label:      'Язык',
    lang_picker_title:   'Выбор Языка',
    lang_english_label:  'Физические термины — на английском',
    lang_note:           'Формулы, символы и названия переменных остаются на английском — универсальном языке физики. Объяснения переводятся.',
    lang_ai_powered:     'Объяснения переведены ИИ',
    lang_translating:    'Перевод…',
    lang_translation_fail: 'Перевод недоступен — показывается английский',

    toast_copied: 'Точное значение скопировано!',
  },

  // ── JAPANESE ──────────────────────────────────────────────────────────────────
  ja: {
    nav_constants:  '物理定数',
    nav_equations:  '方程式',
    nav_symbols:    '記号',
    nav_units:      '単位',
    nav_calculator: '計算機',

    sec_constants_title: '物理定数',
    sec_constants_sub:   '宇宙の基本定数 — カードをクリックして展開',
    sec_equations_title: '主要な方程式',
    sec_equations_sub:   '物理学の全分野の基本公式 — クリックして変数の説明を見る',
    sec_symbols_title:   '記号リファレンス',
    sec_symbols_sub:     '物理学で使われるギリシャ文字と数学記号',
    sec_units_title:     '単位と測定',
    sec_units_sub:       'SI基本単位・組立単位・SI接頭語',
    sec_calc_title:      '物理計算機',
    sec_calc_sub:        '方程式を選択し、求める変数を選び、既知の値を入力',

    modal_what_it_says:   '意味',
    modal_example:        '例題',
    modal_derivation:     '導出',
    modal_deep_meaning:   '深い意味',
    modal_math_form:      '数学的形式',
    modal_history:        '歴史',
    modal_why_it_matters: 'なぜ重要か',
    modal_misconception:  'よくある誤解',
    modal_related:        '関連する方程式',
    modal_variables:      '変数',

    modal_exact_value:    '厳密値',
    modal_discovered_by:  '発見者',
    modal_key_formula:    '主要公式',
    modal_what_it_says_c: '意味',
    modal_simple_example: '簡単な例',
    modal_deep_meaning_c: '深い意味',
    modal_why_it_matters_c: 'なぜ重要か',
    modal_copy_exact:     '厳密値をコピー',

    units_si_base:       'SI基本単位',
    units_derived:       'よく使われる組立単位',
    units_non_si:        '非SI単位（物理学で広く使用）',
    units_prefixes:      'SI接頭語',
    units_prefix_filter: '接頭語を絞り込む — 名称・記号・指数…',

    sym_greek: 'ギリシャ文字',
    sym_math:  '数学記号',

    calc_equation_label: '方程式',
    calc_solve_for:      '求める変数',
    calc_btn:            '計算',
    calc_result_label:   '結果',

    lang_btn_label:      '言語',
    lang_picker_title:   '言語を選択',
    lang_english_label:  '物理用語は英語のまま',
    lang_note:           '公式・記号・変数名は英語のまま — 物理学の共通言語。解説は翻訳されます。',
    lang_ai_powered:     'AIによる解説翻訳',
    lang_translating:    '翻訳中…',
    lang_translation_fail: '翻訳できません — 英語で表示',

    toast_copied: '厳密値をコピーしました！',
  },

  // ── GERMAN ────────────────────────────────────────────────────────────────────
  de: {
    nav_constants:  'Konstanten',
    nav_equations:  'Gleichungen',
    nav_symbols:    'Symbole',
    nav_units:      'Einheiten',
    nav_calculator: 'Rechner',

    sec_constants_title: 'Physikalische Konstanten',
    sec_constants_sub:   'Fundamentale Konstanten des Universums — Karte anklicken zum Erweitern',
    sec_equations_title: 'Wichtige Gleichungen',
    sec_equations_sub:   'Grundlegende Formeln aller Gebiete der Physik — klicken für Variablenerklärung',
    sec_symbols_title:   'Symbolreferenz',
    sec_symbols_sub:     'Griechisches Alphabet und mathematische Notation in der Physik',
    sec_units_title:     'Einheiten und Messung',
    sec_units_sub:       'SI-Basiseinheiten, abgeleitete Einheiten und metrische Präfixe',
    sec_calc_title:      'Physik-Rechner',
    sec_calc_sub:        'Gleichung wählen, gesuchte Variable bestimmen, bekannte Werte eingeben',

    modal_what_it_says:   'Was sie besagt',
    modal_example:        'Beispiel',
    modal_derivation:     'Herleitung',
    modal_deep_meaning:   'Tiefe Bedeutung',
    modal_math_form:      'Mathematische Form',
    modal_history:        'Geschichte',
    modal_why_it_matters: 'Warum wichtig',
    modal_misconception:  'Häufige Fehlannahme',
    modal_related:        'Verwandte Gleichungen',
    modal_variables:      'Variablen',

    modal_exact_value:    'Exakter Wert',
    modal_discovered_by:  'Entdeckt von',
    modal_key_formula:    'Schlüsselformel',
    modal_what_it_says_c: 'Was sie besagt',
    modal_simple_example: 'Einfaches Beispiel',
    modal_deep_meaning_c: 'Tiefe Bedeutung',
    modal_why_it_matters_c: 'Warum wichtig',
    modal_copy_exact:     'Exakten Wert kopieren',

    units_si_base:       'SI-Basiseinheiten',
    units_derived:       'Häufige abgeleitete Einheiten',
    units_non_si:        'Nicht-SI-Einheiten (in der Physik weit verbreitet)',
    units_prefixes:      'Metrische Präfixe',
    units_prefix_filter: 'Präfixe filtern — Name, Symbol oder Exponent…',

    sym_greek: 'Griechisches Alphabet',
    sym_math:  'Mathematische Symbole',

    calc_equation_label: 'Gleichung',
    calc_solve_for:      'Lösen für',
    calc_btn:            'Berechnen',
    calc_result_label:   'Ergebnis',

    lang_btn_label:      'Sprache',
    lang_picker_title:   'Sprache wählen',
    lang_english_label:  'Physikalische Begriffe bleiben englisch',
    lang_note:           'Formeln, Symbole und Variablennamen bleiben englisch — die universelle Sprache der Physik. Erklärungen werden übersetzt.',
    lang_ai_powered:     'Erklärungen KI-übersetzt',
    lang_translating:    'Übersetzung läuft…',
    lang_translation_fail: 'Übersetzung nicht verfügbar — Englisch wird angezeigt',

    toast_copied: 'Exakter Wert kopiert!',
  },
};

// ── RTL LANGUAGE CODES ────────────────────────────────────────────────────────
export const RTL_LANGS = new Set(['ar']);

// ── CJK LANGUAGE CODES (need typography adjustments) ─────────────────────────
export const CJK_LANGS = new Set(['zh', 'ja']);

// ── LANGUAGE METADATA (for the picker UI) ────────────────────────────────────
export const LANG_META = [
  { code: 'en', label: 'English',    native: 'English',    flag: '🌐' },
  { code: 'es', label: 'Spanish',    native: 'Español',    flag: '🇪🇸' },
  { code: 'zh', label: 'Chinese',    native: '中文',        flag: '🇨🇳' },
  { code: 'hi', label: 'Hindi',      native: 'हिन्दी',      flag: '🇮🇳' },
  { code: 'ar', label: 'Arabic',     native: 'العربية',    flag: '🇸🇦' },
  { code: 'fr', label: 'French',     native: 'Français',   flag: '🇫🇷' },
  { code: 'bn', label: 'Bengali',    native: 'বাংলা',       flag: '🇮🇳' },
  { code: 'pt', label: 'Portuguese', native: 'Português',  flag: '🇧🇷' },
  { code: 'ru', label: 'Russian',    native: 'Русский',    flag: '🇷🇺' },
  { code: 'ja', label: 'Japanese',   native: '日本語',      flag: '🇯🇵' },
  { code: 'de', label: 'German',     native: 'Deutsch',    flag: '🇩🇪' },
];
