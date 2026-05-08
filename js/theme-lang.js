document.addEventListener('DOMContentLoaded', function () {
  const translations = {
    en: {
      'brand.name': 'GoldenFields',
      'nav.home': 'Home',
      'nav.marketplace': 'Marketplace',
      'nav.community': 'Community',
      'nav.learning': 'Learning Hub',
      'nav.mandi': 'Mandi Locator',
      'nav.signin': 'Sign in',
      'hero.badge': 'Future of Farming is Here',
      'hero.title': "Cultivating <span class='accent'>Prosperity</span> Together",
      'hero.lead': "Join India's smartest agriculture platform. Connect with buyers, get AI-powered crop advice, and track real-time mandi prices.",
      'btn.explore': 'Explore Marketplace',
      'btn.join': 'Join Community',
      'prices.title': 'Mandi Prices Today',
      'prices.subtitle': 'Daily average prices from local markets',
      'prices.placeholder': 'Price chart',
      'why.title': 'Why GoldenFields?',
      'why.secure': 'Secure Payments — Direct bank transfers with escrow protection.',
      'why.rates': 'Best Market Rates — Real-time mandi data to help you sell better.',
      'why.ai': 'AI Advisory — Instant crop diagnosis and farming tips.',
      'features.title': 'Direct from Farm<br/>to Table',
      'features.lead': 'Eliminate middlemen and get the best price for your hard work. Our marketplace connects you directly with bulk buyers, retailers, and consumers. List your produce in seconds.',
      'features.quote': '"My income increased by 40% after using GoldenFields marketplace."',
      'btn.startSelling': 'Start Selling →',
      'community.title': 'A Community That Grows Together',
      'community.lead': 'Farming doesn\'t have to be lonely. Join thousands of farmers sharing stories, tips, and daily wins — ask questions, get reliable advice, and celebrate harvests together. Learn, trade, and grow as a community.',
      'community.li1': '🤝 Peer-led discussions & real farmer experiences',
      'community.li2': '📈 Market tips and mandi price insights',
      'community.li3': '🛠️ Practical how-tos and local best practices',
      'footer.about': 'Empowering farmers with technology, community, and market access.',
      'footer.platform': 'Platform',
      'footer.support': 'Support',
      'footer.legal': 'Legal & Contact',
      'footer.name': 'GoldenFields',
      'footer.emailLabel': 'Email',
      'footer.copyright': '© 2025 GoldenFields. All rights reserved.',
      'footer.privacy': 'Privacy',
      'footer.terms': 'Terms',
      'chat.name': 'Arnak AI',
      'chat.placeholder': 'Ask a question...',
      'btn.send': 'Send'
    },
    od: {
      'brand.name': 'ଗୋଲ୍ଡେନଫିଲ୍ଡ୍ସ',
      'nav.home': 'ହୋମ୍',
      'nav.marketplace': 'ବଜାର',
      'nav.community': 'ସମୁଦାୟ',
      'nav.learning': 'ଶିକ୍ଷା କେନ୍ଦ୍ର',
      'nav.mandi': 'ମଣ୍ଡି ଲୋକେଟର',
      'nav.signin': 'ଲଗଇନ୍',
      'hero.badge': 'କୃଷିର ଭବିଷ୍ୟତ୍ ଏଠାରେ',
      'hero.title': "ସମୃଦ୍ଧିକୁ <span class='accent'>ସହଯୋଗରେ</span> ଚାଷ କରୁନ୍ତୁ",
      'hero.lead': 'ଭାରତର ସବୁଠାରୁ ସୁଦୃଢ ଆଧାରିତ କୃଷି ପ୍ଲାଟଫର୍ମ୍‌ରେ ଯୋଗଦିଅନ୍ତୁ। କ୍ରୟକର୍ତ୍ତାଙ୍କ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ, AI ଆଧାରିତ ଫସଲ ସଲାହ ନିଅନ୍ତୁ, ଏବଂ ରିୟଲ-ଟାଇମ୍ ମଣ୍ଡି ଦାମ ଟ୍ରାକ୍ କରନ୍ତୁ।',
      'btn.explore': 'ବଜାର ଅନ୍ୱେଷଣ କରନ୍ତୁ',
      'btn.join': 'ସମୁଦାୟରେ ଯୋଗଦିଅନ୍ତୁ',
      'prices.title': 'ଆଜିର ମଣ୍ଡି ଦାମ',
      'prices.subtitle': 'ସ୍ଥାନୀୟ ବଜାରରୁ ଦৈନିକ ଦର',
      'prices.placeholder': 'ମୂଲ୍ୟ ଚାର୍ଟ',
      'why.title': 'କାହିଁକି GoldenFields?',
      'why.secure': 'ସୁରକ୍ଷିତ ପେମେଣ୍ଟ — ଏସ୍କ୍ରୋ ସୁରକ୍ଷା ସହିତ ସିଧା ବ୍ୟାଙ୍କ ଟ୍ରାନ୍ସଫର୍।',
      'why.rates': 'ଶ୍ରେଷ୍ଠ ବଜାର ଦର — ରିୟଲ-ଟାଇମ୍ ମଣ୍ଡି ଡାଟା।',
      'why.ai': 'AI ସଲାହ — ତୁରନ୍ତ ଫସଲ ରୋଗ ନିର୍ଣୟ ଓ ପ୍ରତିପଦ',
      'features.title': 'କୃଷିଠାରୁ<br/>ସିଧା ଟେବୁଲ୍',
      'features.lead': 'ମଧ୍ୟସ୍ଥମାନେ ଅପସାରଣ କରନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ପାଇଁ ସର୍ବୋତ୍ତମ ଦର ପାଆନ୍ତୁ। ଆମର ବଜାର ଆପଣଙ୍କୁ ପ୍ରତ୍ୟକ୍ଷ ଭାବେ ବଲ୍କ କ୍ରୟକର୍ତ୍ତା, ଖୁଦ୍ର ବିକ୍ରେତା, ଏବଂ ଉପଭୋକ୍ତାଙ୍କ ସହିତ ଯୋଡ଼େ।',
      'features.quote': '"GoldenFields ବଜାର ବ୍ୟବହାର କରି ମୋ ଆୟ 40% ବୃଦ୍ଧି ପାଇଛି।"',
      'btn.startSelling': 'ବିକ୍ରୟ ଆରମ୍ଭ କରନ୍ତୁ →',
      'community.title': 'ଏକ ସମୁଦାୟ ଯାହା ସହଯୋଗରେ ବର୍ଦ୍ଧିତ ହୁଏ',
      'community.lead': 'ଚାଷୀ ସଂଘଟିତ ହୋଇ ପାରନ୍ତି। ହଜାର ଚାଷୀଙ୍କ ସହିତ ଅନୁଭବ ସେୟାର କରନ୍ତୁ, ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ ଏବଂ ଉତ୍ପାଦନ ବଢ଼ାନ୍ତୁ।',
      'community.li1': '🤝 ସହପଠୀ ଆଲୋଚନା ଏବଂ ବାସ୍ତବ ଅନୁଭବ',
      'community.li2': '📈 ବଜାର ଟିପ୍ସ ଏବଂ ମଣ୍ଡି ଦାମ ଜ୍ଞାନ',
      'community.li3': '🛠️ ପ୍ରାୟୋଗିକ ହାଉ-ଟୁ ଗାଇଡ୍',
      'footer.about': 'ତକନିକ, ସମୁଦାୟ ଏବଂ ବଜାର ପ୍ରବେଶ ଦ୍ୱାରା ଚାଷୀଙ୍କୁ ସଶକ୍ତ କରେ।',
      'footer.platform': 'ପ୍ଲାଟଫର୍ମ୍',
      'footer.support': 'ସହାୟତା',
      'footer.legal': 'ଆଇନ ଓ ସମ୍ପର୍କ',
      'footer.name': 'GoldenFields',
      'footer.emailLabel': 'ଇମେଲ୍',
      'footer.copyright': '© 2025 GoldenFields। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।',
      'footer.privacy': 'ଗୋପନୀୟତା',
      'footer.terms': 'ସର୍ତ୍ତାବଳୀ',
      'chat.name': 'Arnak AI',
      'chat.placeholder': 'କିଛି ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ...',
      'btn.send': 'ପଠାନ୍ତୁ'
    }
  };

  function applyLanguage(lang) {
    if (!translations[lang]) return;
    // data-i18n (textContent)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const txt = translations[lang][key];
      if (txt !== undefined) el.textContent = txt;
    });
    // data-i18n-html (innerHTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const txt = translations[lang][key];
      if (txt !== undefined) el.innerHTML = txt;
    });
    // data-i18n-email (href + text)
    document.querySelectorAll('[data-i18n-email]').forEach(el => {
      const key = el.getAttribute('data-i18n-email') || 'footer.email';
      const txt = translations[lang]['footer.email'] || el.textContent;
      // if translations include email override, use it
      if (translations[lang]['footer.emailAddress']) {
        el.href = 'mailto:' + translations[lang]['footer.emailAddress'];
        el.textContent = translations[lang]['footer.emailAddress'];
      }
    });
    // data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const txt = translations[lang][key];
      if (txt !== undefined) el.setAttribute('placeholder', txt);
    });

    // special: update mailto if translation provided
    const mail = (translations[lang]['contact.email'] || translations[lang]['footer.emailAddress']);
    if (mail) {
      document.querySelectorAll('[data-i18n-email]').forEach(el => {
        el.href = 'mailto:' + mail;
        el.textContent = mail;
      });
    }

    localStorage.setItem('gf_lang', lang);
  }

  function applyTheme(theme) {
    const logo = document.getElementById('logo-img');
    const toggle = document.getElementById('theme-toggle');
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
      if (logo) logo.src = 'assets/logo-dark.svg';
      if (toggle) toggle.checked = true;
    } else {
      document.body.classList.remove('theme-dark');
      if (logo) logo.src = 'assets/logo-light.svg';
      if (toggle) toggle.checked = false;
    }
    localStorage.setItem('gf_theme', theme);
  }

  // Init from localStorage or defaults
  const savedLang = localStorage.getItem('gf_lang') || 'en';
  const savedTheme = localStorage.getItem('gf_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');

  // wire up controls
  const langSelect = document.getElementById('lang-select');
  const themeToggle = document.getElementById('theme-toggle');

  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
  }
  if (themeToggle) {
    themeToggle.addEventListener('change', (e) => applyTheme(e.target.checked ? 'dark' : 'light'));
  }

  // Apply initial
  applyTheme(savedTheme);
  applyLanguage(savedLang);

});
