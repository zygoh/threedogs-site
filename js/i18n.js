const I18N = {
  zh: {
    "meta.description": "threedogs — 三流程序员，道心薄弱，不懂世事。Mississauga · 卦盘 · 代码。",
    "meta.ogDescription": "三流程序员｜道心薄弱 不懂世事",
    "logo": "三狗",
    "nav.main": "主导航",
    "nav.about": "关于",
    "nav.work": "在做的事",
    "nav.lotus": "莲花",
    "nav.links": "链接",
    "hero.tagline": "三流程序员｜道心薄弱 不懂世事",
    "hero.btnX": "关注 X",
    "hero.btnSite": "do2ge.com",
    "hero.scroll": "scroll",
    "section.about": "关于",
    "section.work": "在做的事",
    "section.lotus": "莲花",
    "section.links": "链接",
    "about.quote": "写代码的人，<br />未必懂世事；<br />懂世事的人，<br />未必守得住道心。",
    "about.p1": "我是 <strong>threedogs</strong>，住在加拿大密西沙加的三流程序员。白天和机器较劲，夜里和卦象、行情较劲——道心薄弱，但还在练。",
    "about.p2": "这个站是我自己的角落：不追热点，不装懂。偶尔发发卦盘播报，偶尔折腾自动化管线，偶尔写点没人看的东西。",
    "about.fact.location": "坐标",
    "about.fact.since": "自",
    "about.fact.sinceVal": "2022 年起混迹 X",
    "about.fact.site": "主业站",
    "work.card1.num": "卦",
    "work.card1.title": "卦盘 × 行情",
    "work.card1.desc": "把易经卦象和技术面揉在一起，做成可扫读的日更播报。不喊单，只讲结构与倾向。",
    "work.card1.link": "看播报",
    "work.card2.num": "码",
    "work.card2.title": "自动化管线",
    "work.card2.desc": "币圈、母婴等内容的 Agent flow：取证、去 AI 味、配图、分发——能机械执行的，就不靠手搓。",
    "work.card2.link": "TA-Lib",
    "work.card3.num": "莲",
    "work.card3.title": "do2ge",
    "work.card3.desc": "现在的个人站。莲花、艺术、一点关于裸与圣、伪与真的话——和代码无关，但和态度有关。",
    "work.card3.link": "访问",
    "lotus.en": "Be like a lotus",
    "lotus.q1": "一旦裸成为艺术，它便是最神圣的；<br />一旦道德沦为伪善，它便是最可鄙的。",
    "lotus.q2": "勇敢去做你认为对的事。勿为世俗流言所扰。<br />记住——出淤泥而不染，像莲花一样。",
    "links.site": "个人站",
    "footer": "道心薄弱，仍在路上",
  },
  en: {
    "meta.description": "threedogs — Third-rate programmer. Weak dao heart, clueless about the world. Mississauga · hex charts · code.",
    "meta.ogDescription": "Third-rate programmer | Weak dao heart, clueless about the world",
    "logo": "ThreeDogs",
    "nav.main": "Main navigation",
    "nav.about": "About",
    "nav.work": "Work",
    "nav.lotus": "Lotus",
    "nav.links": "Links",
    "hero.tagline": "Third-rate programmer | Weak dao heart, clueless about the world",
    "hero.btnX": "Follow on X",
    "hero.btnSite": "do2ge.com",
    "hero.scroll": "scroll",
    "section.about": "About",
    "section.work": "Work",
    "section.lotus": "Lotus",
    "section.links": "Links",
    "about.quote": "Those who write code<br />may not grasp the world;<br />those who grasp the world<br />may not hold their dao heart.",
    "about.p1": "I'm <strong>threedogs</strong>, a third-rate programmer in Mississauga, Canada. I wrestle with machines by day, hex charts and markets by night — weak dao heart, still practicing.",
    "about.p2": "This site is my corner: no chasing trends, no pretending to know it all. Occasional hex-chart broadcasts, automation pipelines, and things nobody reads.",
    "about.fact.location": "Based",
    "about.fact.since": "Since",
    "about.fact.sinceVal": "On X since 2022",
    "about.fact.site": "Main site",
    "work.card1.num": "Hex",
    "work.card1.title": "Hex Chart × Markets",
    "work.card1.desc": "Blend I Ching hexagrams with technical analysis into scannable daily broadcasts. No calls — structure and bias only.",
    "work.card1.link": "Read posts",
    "work.card2.num": "Code",
    "work.card2.title": "Automation Pipelines",
    "work.card2.desc": "Agent flows for crypto, maternal health, and more: research, de-AI editing, images, distribution — automate what can be mechanical.",
    "work.card2.link": "TA-Lib",
    "work.card3.num": "Lotus",
    "work.card3.title": "do2ge",
    "work.card3.desc": "My current personal site. Lotus, art, and words on the sacred and the hypocritical — not about code, but about stance.",
    "work.card3.link": "Visit",
    "lotus.en": "Be like a lotus",
    "lotus.q1": "Once nudity becomes art, it is the most sacred;<br />once morality becomes hypocrisy, it is the most despicable.",
    "lotus.q2": "Be brave to do what you think is right. Don't be troubled by worldly rumors.<br />Remember — rise out of the mud unsoiled, like a lotus.",
    "links.site": "Personal site",
    "footer": "Weak dao heart, still on the road",
  },
};

function detectLang() {
  const saved = localStorage.getItem("lang");
  if (saved === "zh" || saved === "en") return saved;
  const browser = (navigator.language || "zh").toLowerCase();
  return browser.startsWith("zh") ? "zh" : "en";
}

function applyLang(lang) {
  const dict = I18N[lang];
  if (!dict) return;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.body.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const pairs = el.dataset.i18nAttr.split(";");
    pairs.forEach((pair) => {
      const [key, attr] = pair.split(":").map((s) => s.trim());
      if (dict[key] !== undefined && attr) el.setAttribute(attr, dict[key]);
    });
  });

  const desc = document.querySelector('meta[name="description"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (desc) desc.content = dict["meta.description"];
  if (ogDesc) ogDesc.content = dict["meta.ogDescription"];

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("lang", lang);
}

function initI18n() {
  const lang = detectLang();
  applyLang(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.dataset.lang;
      if (next && next !== document.body.dataset.lang) applyLang(next);
    });
  });
}
