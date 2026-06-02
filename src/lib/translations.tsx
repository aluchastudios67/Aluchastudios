import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ka" | "en" | "ru";

interface Translations {
  [key: string]: {
    ka: string;
    en: string;
    ru: string;
  };
}

const dictionaries: Translations = {
  // Brand name details
  "brand.title": {
    ka: "ალუჩა",
    en: "Alucha",
    ru: "Алуча",
  },
  "brand.subtitle": {
    ka: "სტუდიო",
    en: "Studios",
    ru: "Студия",
  },
  "brand.fullname": {
    ka: "ალუჩა სტუდიო",
    en: "Alucha Studios",
    ru: "Студия Алуча",
  },

  // Navbar Links & Actions
  "nav.features": {
    ka: "მახასიათებლები",
    en: "Features",
    ru: "Возможности",
  },
  "nav.builder": {
    ka: "ბილდერი",
    en: "Builder",
    ru: "Конструктор",
  },
  "nav.portfolio": {
    ka: "პორტფოლიო",
    en: "Portfolio",
    ru: "Портфолио",
  },
  "nav.pricing": {
    ka: "ფასები",
    en: "Pricing",
    ru: "Цены",
  },
  "nav.contact": {
    ka: "კონტაქტი",
    en: "Contact",
    ru: "Контакты",
  },
  "nav.cta": {
    ka: "დაწყება",
    en: "Start Building",
    ru: "Начать разработку",
  },

  // Hero Section
  "hero.badge": {
    ka: "საქართველოში გაზრდილი · გლობალურად მოაზროვნე",
    en: "Georgian-grown · Globally minded",
    ru: "Выращено в Грузии · Мыслим глобально",
  },
  "hero.title1": {
    ka: "ვზრდით ვებ",
    en: "We grow web",
    ru: "Мы выращиваем веб",
  },
  "hero.title2": {
    ka: "შედევრებს.",
    en: "masterpieces.",
    ru: "шедевры.",
  },
  "hero.titleGradient": {
    ka: "მჭრელი. სწრაფი. ორგანული.",
    en: "Sharp. Fast. Organic.",
    ru: "Острые. Быстрые. Органические.",
  },
  "hero.desc": {
    ka: "ალუჩა სტუდიო აერთიანებს დიზაინის უმაღლეს სტანდარტებსა და ელვისებურ წარმადობას თქვენი ბრენდის ციფრული სახლის შესაქმნელად — შექმნილია თბილისში, ინჟინირებულია მსოფლიოსთვის.",
    en: "Alucha Studios combines the sharpest design standards with lightning-fast performance to build your brand’s digital home — handcrafted in Tbilisi, engineered for the world.",
    ru: "Студия Алуча объединяет высочайшие стандарты дизайна с молниеносной производительностью для создания цифрового дома вашего бренда — создано вручную в Тбилиси, разработано для всего мира.",
  },
  "hero.ctaLaunch": {
    ka: "პროექტის გაშვება",
    en: "Launch your project",
    ru: "Запустить проект",
  },
  "hero.ctaFeatures": {
    ka: "მახასიათებლების ნახვა",
    en: "Explore features",
    ru: "Узнать больше",
  },
  "hero.statSites": {
    ka: "გაზრდილი საიტი",
    en: "Sites grown",
    ru: "Сайтов выращено",
  },
  "hero.statLighthouse": {
    ka: "Lighthouse-ის საშ.",
    en: "Lighthouse avg.",
    ru: "Средний Lighthouse",
  },
  "hero.statGlobal": {
    ka: "ლოკალური + გლობალური",
    en: "Local + global",
    ru: "Локально + глобально",
  },

  // Features Section
  "features.subtitle": {
    ka: "რატომ ალუჩა?",
    en: "Why Alucha",
    ru: "Почему Алуча?",
  },
  "features.titlePart1": {
    ka: "ოთხი ფესვი, ",
    en: "Four roots, one ",
    ru: "Четыре корня, ",
  },
  "features.titlePart2": {
    ka: "ერთი უძლეველი ბაღი.",
    en: "unstoppable orchard.",
    ru: "один неудержимый сад.",
  },
  "features.desc": {
    ka: "თითოეული საიტი, რომელსაც ვზრდით, დგას ერთსა და იმავე პრინციპებზე — მჭრელი, ორგანული, მორგებული, მხარდაჭერილი.",
    en: "Every site we grow stands on the same principles — sharp, organic, tailored, supported.",
    ru: "Каждый сайт, который мы выращиваем, держится на одних и тех же принципах — острый, органический, индивидуальный, поддерживаемый.",
  },
  "features.card1.title": {
    ka: "მჟავე-მჭრელი წარმადობა",
    en: "Sour-sharp performance",
    ru: "Кисло-острая производительность",
  },
  "features.card1.desc": {
    ka: "ულტრა-სწრაფი ჩატვირთვა სუფთა, თანამედროვე React-ის არქიტექტურისა და Edge ქსელების მეშვეობით.",
    en: "Ultra-fast loading speeds powered by clean, modern React architecture and edge delivery.",
    ru: "Сверхбыстрая скорость загрузки на базе чистой современной архитектуры React и доставки на граничных серверах.",
  },
  "features.card2.title": {
    ka: "ორგანული ზრდა",
    en: "Organic growth",
    ru: "Органический рост",
  },
  "features.card2.desc": {
    ka: "ლოკალიზებული SEO ქართული ბაზრისთვის და ინჟინირებული საერთაშორისო რეიტინგებისთვის.",
    en: "Localised SEO tuned for the Georgian market and engineered to rank internationally.",
    ru: "Локальное SEO, настроенное для грузинского рынка и оптимизированное для международного ранжирования.",
  },
  "features.card3.title": {
    ka: "მორგებული ინტერფეისი",
    en: "Tailored UI",
    ru: "Индивидуальный дизайн",
  },
  "features.card3.desc": {
    ka: "უნიკალური 3D ვიზუალები, ინდივიდუალური ანიმაციები და თქვენს ბრენდზე მორგებული დიზაინ-სისტემები.",
    en: "Bespoke 3D visuals, custom animations and design systems built to your brand.",
    ru: "Уникальная 3D-графика, индивидуальная анимация и дизайн-системы, созданные специально для вашего бренда.",
  },
  "features.card4.title": {
    ka: "ქართული მხარდაჭერა",
    en: "Georgian support",
    ru: "Поддержка в Грузии",
  },
  "features.card4.desc": {
    ka: "ლოკალური დახმარება, საიმედო ჰოსტინგი და მუდმივი მხარდაჭერა — თქვენს დროის სარტყელში.",
    en: "Local assistance, reliable hosting and effortless ongoing maintenance — in your timezone.",
    ru: "Местная поддержка, надежный хостинг и легкое сопровождение — в вашем часовом поясе.",
  },

  // Showcase Video Section
  "showcase.subtitle": {
    ka: "ალუჩა მოძრაობაში",
    en: "Alucha in Motion",
    ru: "Алуча в движении",
  },
  "showcase.title": {
    ka: "შეხედეთ როგორ მუშაობს",
    en: "Witness it in action",
    ru: "Посмотрите в действии",
  },

  // Builder Section
  "builder.subtitle": {
    ka: "ლაივ დემო",
    en: "Live demo",
    ru: "Живое демо",
  },
  "builder.titlePart1": {
    ka: "ალუჩას ",
    en: "The Alucha ",
    ru: "Микро-редактор ",
  },
  "builder.titlePart2": {
    ka: "მიკრო-ედიტორი.",
    en: "Micro-Editor.",
    ru: "Алуча.",
  },
  "builder.desc": {
    ka: "მცირე დემონსტრაცია, თუ როგორ ვმუშაობთ. შეცვალეთ პარამეტრები და უყურეთ როგორ იცვლის სტილს საიტი რეალურ დროში — თითოეული ოფცია შეესაბამება რეალურ ბერკეტს ჩვენს სტუდიურ მუშაობაში.",
    en: "A taste of how we build. Toggle the controls and watch the mock-site re-style itself in real time — every option below maps to a real lever in our studio workflow.",
    ru: "Пример того, как мы строим. Управляйте переключателями и наблюдайте, как макет сайта меняет стиль в реальном времени — каждая настройка соответствует реальному рычагу в рабочем процессе нашей студии.",
  },
  "builder.controlTheme": {
    ka: "თემა",
    en: "Theme",
    ru: "Тема",
  },
  "builder.controlLayout": {
    ka: "განლაგება",
    en: "Layout",
    ru: "Макет",
  },
  "builder.controlAccent": {
    ka: "აქცენტი",
    en: "Accent",
    ru: "Акцент",
  },
  "builder.themeDark": {
    ka: "ბნელი",
    en: "Dark",
    ru: "Темная",
  },
  "builder.themeLight": {
    ka: "ნათელი",
    en: "Light",
    ru: "Светлая",
  },
  "builder.layoutGrid": {
    ka: "ბადე",
    en: "Grid",
    ru: "Сетка",
  },
  "builder.layoutList": {
    ka: "სია",
    en: "List",
    ru: "Список",
  },
  "builder.accentAlucha": {
    ka: "ალუჩას მწვანე",
    en: "Alucha green",
    ru: "Зеленый Алуча",
  },
  "builder.accentPlum": {
    ka: "ტყემლის ვარდისფერი",
    en: "Plum pink",
    ru: "Сливовый розовый",
  },
  "builder.mockLive": {
    ka: "ლაივში",
    en: "Live",
    ru: "В эфире",
  },
  "builder.mockTitle": {
    ka: "იქმნება რეალურ დროში",
    en: "Built in real-time",
    ru: "Создано в реальном времени",
  },
  "builder.mockDesc": {
    ka: "შეცვალეთ მართვის პანელი — განლაგება, პალიტრა და განწყობა მყისიერად რეაგირებს.",
    en: "Toggle the controls — the layout, palette and mood respond.",
    ru: "Переключайте настройки — макет, палитра и настроение изменятся.",
  },
  "builder.mockBtn": {
    ka: "დაწყება",
    en: "Get started",
    ru: "Начать",
  },

  // Portfolio Section
  "portfolio.subtitle": {
    ka: "პორტფოლიო",
    en: "Portfolio",
    ru: "Портфолио",
  },
  "portfolio.titlePart1": {
    ka: "გაზრდილი ",
    en: "Grown by ",
    ru: "Выращено ",
  },
  "portfolio.titlePart2": {
    ka: "ალუჩას",
    en: "Alucha",
    ru: "Алучей",
  },
  "portfolio.titlePart3": {
    ka: " მიერ.",
    en: ".",
    ru: ".",
  },
  "portfolio.desc": {
    ka: "მცირე მოსავალი დატვირთული სეზონიდან — შერჩეული ნამუშევრები ელ-კომერციიდან, ბრენდინგიდან და პროდუქტებიდან.",
    en: "A small harvest from a busy season — selected work spanning commerce, brand, and product.",
    ru: "Небольшой урожай за насыщенный сезон — избранные работы в сфере электронной коммерции, брендинга и продуктов.",
  },
  "portfolio.tagWine": {
    ka: "ელ-კომერცია · ღვინო",
    en: "E-commerce · Wine",
    ru: "Интернет-магазин · Вино",
  },
  "portfolio.tagFashion": {
    ka: "მოდა · ბრენდი",
    en: "Fashion · Brand",
    ru: "Мода · Бренд",
  },
  "portfolio.tagRealEstate": {
    ka: "უძრავი ქონება",
    en: "Real estate",
    ru: "Недвижимость",
  },
  "portfolio.tagHospitality": {
    ka: "სტუმარმასპინძლობა",
    en: "Hospitality",
    ru: "Гостеприимство",
  },
  "portfolio.tagFintech": {
    ka: "ფინტექი · SaaS",
    en: "Fintech · SaaS",
    ru: "Финтех · SaaS",
  },
  "portfolio.tagArchitecture": {
    ka: "არქიტექტურა",
    en: "Architecture",
    ru: "Архитектура",
  },
  "portfolio.view": {
    ka: "ნახვა →",
    en: "View →",
    ru: "Подробнее →",
  },

  // Pricing Section
  "pricing.subtitle": {
    ka: "კალკულატორი",
    en: "Estimator",
    ru: "Калькулятор стоимости",
  },
  "pricing.titlePart1": {
    ka: "ჩამოაყალიბე შენი ",
    en: "Shape your ",
    ru: "Сформируйте свой ",
  },
  "pricing.titlePart2": {
    ka: "მოსავალი.",
    en: "harvest.",
    ru: "урожай.",
  },
  "pricing.desc": {
    ka: "აამოძრავეთ სლაიდერი, ჩართეთ სასურველი ოფციები და იხილეთ გამჭვირვალე საწყისი ფასი და ვადები.",
    en: "Move the sliders, toggle the options, and see a transparent starting price and timeline.",
    ru: "Двигайте слайдеры, выбирайте опции и получайте прозрачную начальную цену и сроки.",
  },
  "pricing.pagesLabel": {
    ka: "გვერდების რაოდენობა",
    en: "Number of pages",
    ru: "Количество страниц",
  },
  "pricing.landing": {
    ka: "ლენდინგი",
    en: "Landing",
    ru: "Лендинг",
  },
  "pricing.midsite": {
    ka: "საშუალო საიტი",
    en: "Mid-site",
    ru: "Средний сайт",
  },
  "pricing.platform": {
    ka: "პლატფორმა",
    en: "Platform",
    ru: "Платформа",
  },
  "pricing.ecom": {
    ka: "ელ-კომერცია",
    en: "E-commerce",
    ru: "Интернет-магазин",
  },
  "pricing.ecomSub": {
    ka: "კალათა, გადახდები",
    en: "Cart, checkout, payments",
    ru: "Корзина, оформление, оплата",
  },
  "pricing.3d": {
    ka: "3D ვიზუალი",
    en: "3D visuals",
    ru: "3D-визуал",
  },
  "pricing.3dSub": {
    ka: "უნიკალური WebGL და მოძრაობა",
    en: "Custom WebGL & motion",
    ru: "Индивидуальный WebGL и анимация",
  },
  "pricing.cms": {
    ka: "CMS",
    en: "CMS",
    ru: "CMS",
  },
  "pricing.cmsSub": {
    ka: "მართვადი კონტენტის პანელი",
    en: "Editable content backend",
    ru: "Панель управления контентом",
  },
  "pricing.startingFrom": {
    ka: "საწყისი ფასი",
    en: "Starting from",
    ru: "Начиная от",
  },
  "pricing.weeksToLaunch": {
    ka: "~ {weeks} კვირა გაშვებამდე",
    en: "~ {weeks} weeks to launch",
    ru: "~ {weeks} недель до запуска",
  },
  "pricing.sprint1": {
    ka: "კვლევა და დიზაინის სპრინტები",
    en: "Discovery & design sprints",
    ru: "Исследование и дизайн-спринты",
  },
  "pricing.sprint2": {
    ka: "ინდივიდუალური დეველოპმენტი",
    en: "Custom development",
    ru: "Индивидуальная разработка",
  },
  "pricing.sprint3": {
    ka: "მაღალი წარმადობა და საბაზისო SEO",
    en: "Performance & SEO baseline",
    ru: "Базовая оптимизация производительности и SEO",
  },
  "pricing.sprint4": {
    ka: "30-დღიანი მხარდაჭერა გაშვების შემდეგ",
    en: "30 days of post-launch care",
    ru: "30 дней пост-релизной поддержки",
  },
  "pricing.cta": {
    ka: "დეტალური ფასის მოთხოვნა",
    en: "Request detailed quote",
    ru: "Запросить детальный расчет",
  },

  // Contact Section
  "contact.subtitle": {
    ka: "კონტაქტი",
    en: "Contact",
    ru: "Контакты",
  },
  "contact.titlePart1": {
    ka: "მოდით გავზარდოთ რამე ",
    en: "Let's grow something ",
    ru: "Давайте вырастим что-то ",
  },
  "contact.titlePart2": {
    ka: "ერთად.",
    en: "together.",
    ru: "вместе.",
  },
  "contact.desc": {
    ka: "მოგვიყევით თქვენი პროექტის შესახებ — ჩვენ გიპასუხებთ 1 სამუშაო დღეში.",
    en: "Tell us about your project — we reply within one business day.",
    ru: "Расскажите нам о вашем проекте — мы ответим в течение одного рабочего дня.",
  },
  "contact.successTitle": {
    ka: "თქვენი მოთხოვნა წარმატებით გაიზარდა!",
    en: "Your inquiry has been successfully grown!",
    ru: "Ваш запрос был успешно выращен!",
  },
  "contact.successDesc": {
    ka: "ჩვენ მალე დაგიკავშირდებით — ადევნეთ თვალი თქვენს საფოსტო ყუთს.",
    en: "We'll reach out soon — keep an eye on your inbox.",
    ru: "Мы свяжемся с вами в ближайшее время — следите за почтой.",
  },
  "contact.sendAnother": {
    ka: "კიდევ ერთის გაგზავნა",
    en: "Send another",
    ru: "Отправить еще один",
  },
  "contact.fieldName": {
    ka: "სახელი",
    en: "Name",
    ru: "Имя",
  },
  "contact.placeholderName": {
    ka: "ნინო კაპანაძე",
    en: "Nino Kapanadze",
    ru: "Нино Капанадзе",
  },
  "contact.fieldEmail": {
    ka: "ელ-ფოსტა",
    en: "Email",
    ru: "Email",
  },
  "contact.fieldProjectType": {
    ka: "პროექტის ტიპი",
    en: "Project type",
    ru: "Тип проекта",
  },
  "contact.optionMarketing": {
    ka: "მარკეტინგული ვებსაიტი",
    en: "Marketing website",
    ru: "Маркетинговый сайт",
  },
  "contact.optionEcom": {
    ka: "ელ-კომერცია",
    en: "E-commerce",
    ru: "Интернет-магазин",
  },
  "contact.optionSaaS": {
    ka: "SaaS პროდუქტი",
    en: "SaaS product",
    ru: "SaaS-продукт",
  },
  "contact.optionBrand": {
    ka: "ბრენდინგი და იდენტობა",
    en: "Brand & identity",
    ru: "Брендинг и айдентика",
  },
  "contact.optionOther": {
    ka: "სხვა",
    en: "Other",
    ru: "Другое",
  },
  "contact.fieldMessage": {
    ka: "შეტყობინება",
    en: "Message",
    ru: "Сообщение",
  },
  "contact.placeholderMessage": {
    ka: "რამდენიმე წინადადება თქვენი მიზნების შესახებ...",
    en: "A few sentences about your goals…",
    ru: "Несколько предложений о ваших целях…",
  },
  "contact.submit": {
    ka: "მოთხოვნის გაგზავნა",
    en: "Send inquiry",
    ru: "Отправить запрос",
  },

  // Footer Section
  "footer.desc": {
    ka: "ალუჩა — მჟავე, მჭრელი და უდავოდ ჩვენი. ჩვენ ვზრდით ვებ შედევრებს ამბიციური გუნდებისთვის.",
    en: "ალუჩა — sour, sharp and unmistakably ours. We grow web masterpieces for ambitious teams.",
    ru: "Алуча — кислая, острая и безошибочно наша. Мы выращиваем веб-шедевры для амбициозных команд.",
  },
  "footer.colStudio": {
    ka: "სტუდია",
    en: "Studio",
    ru: "Студия",
  },
  "footer.colWork": {
    ka: "ნამუშევრები",
    en: "Work",
    ru: "Работы",
  },
  "footer.colContact": {
    ka: "კონტაქტი",
    en: "Contact",
    ru: "Контакты",
  },
  "footer.about": {
    ka: "ჩვენ შესახებ",
    en: "About",
    ru: "О нас",
  },
  "footer.process": {
    ka: "პროცესი",
    en: "Process",
    ru: "Процесс",
  },
  "footer.careers": {
    ka: "ვაკანსიები",
    en: "Careers",
    ru: "Вакансии",
  },
  "footer.portfolio": {
    ka: "პორტფოლიო",
    en: "Portfolio",
    ru: "Портфолио",
  },
  "footer.pricing": {
    ka: "ფასები",
    en: "Pricing",
    ru: "Цены",
  },
  "footer.caseStudies": {
    ka: "ქეისები",
    en: "Case studies",
    ru: "Кейсы",
  },
  "footer.address": {
    ka: "თბილისი, ვაკე",
    en: "Tbilisi, Vake",
    ru: "Тбилиси, Ваке",
  },
  "footer.rights": {
    ka: "ყველა უფლება გაზრდილია.",
    en: "All rights grown.",
    ru: "Все права выращены.",
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("ka");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedLang = localStorage.getItem("alucha-lang") as Language;
    if (savedLang && (savedLang === "ka" || savedLang === "en" || savedLang === "ru")) {
      setLangState(savedLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("alucha-lang", newLang);
      document.documentElement.lang = newLang;
    }
  };

  const t = (key: string): string => {
    const entry = dictionaries[key];
    if (!entry) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return entry[lang] || entry["ka"];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
