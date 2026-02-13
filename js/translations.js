const TRANSLATIONS = {
  en: {
    tagline: 'Software Engineer at Box • Częstochowa, Poland',
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      projects: 'Projects',
      learning: 'Learning',
      languages: 'Languages',
      contact: 'Contact'
    },
    sections: {
      about: 'About',
      skills: 'Skills & Technologies',
      experience: 'Experience',
      education: 'Education',
      certifications: 'Certifications',
      projects: 'Projects',
      learning: 'Currently Learning',
      humanLanguages: 'Languages',
      contact: 'Contact'
    },
    about: {
      p1: "Passionate about programming, management, and economics. I have experience in testing and automation, and have managed software testing (SWE.4–SWE.6) in the past. I work with different development models: Agile (SCRUM, Kanban, Feature-driven development) and waterfall.",
      p2: "Currently Software Engineer at Box in the Observability team, building large-scale data processing and logging systems. I enjoy learning new things related to my field and beyond—right now I'm exploring new human languages. In my free time, I like to travel and visit new places.",
      bullets: [
        "Passionate about programming, management, and economics. Experience in testing, automation, and managing software testing (SWE.4–SWE.6).",
        "Work with Agile (SCRUM, Kanban, FDD) and waterfall methodologies.",
        "Software Engineer at Box (Observability team), building large-scale data processing and logging systems.",
        "Enjoy learning—currently exploring new human languages. In free time, travel and visit new places."
      ]
    },
    skills: {
      all: 'All',
      searchPlaceholder: 'Search skills...',
      filterLabel: 'Filter by category',
      progLangs: 'Programming',
      progLangsLabel: 'Languages & runtimes',
      frameworks: 'Frameworks',
      frameworksLabel: 'Frameworks & libraries',
      tools: 'Tools',
      toolsLabel: 'Tools & infrastructure',
      clouds: 'Clouds',
      cloudsLabel: 'Cloud providers',
      platforms: 'Platforms',
      platformsLabel: 'Platforms'
    },
    experience: [
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • January 2026 – Present • Poland',
        summary: "I bring AI capabilities (MCP, agents) to observability tooling and focus on metrics. I build logging MCPs to extend observability workflows, design alerts and dashboards for system metrics, and create self-validation tools for our monitoring infrastructure.",
        bullets: [
          'Building AI-powered observability tools: MCP (Model Context Protocol) servers and agents.',
          'Developing logging MCPs to extend observability workflows.',
          'Designing and implementing alerts and dashboards for system metrics and performance.',
          'Collaborating with cross-functional teams to enhance observability practices.',
          'Creating tools for observability infrastructure self-validation.'
        ]
      },
      {
        title: 'Software Engineer — Data Insights',
        company: 'box',
        meta: 'Box • April 2024 – January 2026 (1 year 9 months) • Poland',
        summary: "As part of the Data Insights team within Box's Data Platform organization, I work on building and optimizing large-scale data processing and logging systems that support visibility, reliability, and efficiency across the company. I have been involved in several high-impact migrations and architectural improvements that modernized our logging and metrics infrastructure, while also enhancing observability to ensure the long-term health and performance of the solution.",
        bullets: [
          'Took part in the migration from Splunk to Google Cloud Logging (GCL), ensuring a smooth transition with minimal downtime.',
          'Contributed to the architecture shift from Vector sidecar to OpenTelemetry (OTel) daemonset with replicaset-based scaling — reducing operational complexity and improving performance.',
          'Assisted in the design and development of custom OTel components to support migration requirements and extend platform capabilities.',
          'Authored comprehensive user documentation for logging onboarding, logs-to-metrics workflows, and architectural overviews, improving adoption and knowledge sharing across teams.',
          'Worked on resource usage optimization (CPU & memory) through profiling, code analysis, and elimination of redundant logic — resulting in noticeable cost and performance gains at scale.',
          'Improved observability by creating dashboards and alerts to monitor key metrics and system behavior, enabling faster issue detection and resolution.',
          'These improvements also simplified the architecture by consolidating processing logic within OTel, leading to a more efficient, maintainable, and observable data pipeline.'
        ]
      },
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • March 2023 – April 2024 (1 year 2 months) • Poland',
        summary: "As an Observability Software Engineer at Box, I'm mainly working with metrics, logging, and distributed tracing. With help of industry-standard tools, I design and implement robust systems for monitoring and maintaining infrastructure health.",
        bullets: [
          'Designing and implementing alerts and dashboards to monitor system metrics and performance.',
          'Developing solutions for efficiently searching through logs and identifying potential issues.',
          'Configuring pipelines to streamline the collection and analysis of logs and metrics.',
          'Collaborating with cross-functional teams to enhance observability practices and drive continuous improvement.',
          'Creating tools for observability infrastructure self-validation, ensuring the reliability and accuracy of our monitoring systems.'
        ]
      },
      {
        title: 'Software Project Leader',
        company: 'zf',
        meta: 'ZF Group • April 2021 – March 2023 (2 years) • Częstochowa, Silesian, Poland',
        summary: "As Software Project Leader I am working in two projects: CI/CD project and customer project where I am responsible for the software testing and validation coordination. The customer project is also running on our CI/CD system.",
        bullets: [
          'Main responsibility: taking control over software testing procedure according to ASPICE (SWE.4–SWE.6) — test specification, software level test plan preparation for unit, integration, and validation testing.',
          'Reporting and delivery of test results (test report) to the software team after execution.',
          'Involved in software quality improvement activities — goal to deliver better quality software to internal and external customers.',
          'Managing software team (development + test team): coordination between teams, establishing budget, client contact support, backlog management, coordination with system, hardware, and software teams. (01/2022 – 03/2023)',
          'Managing 2 test teams.',
          'Creation of the process on SWE.5 level as Process Discipline Leader. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Software Engineer',
        company: 'zf',
        meta: 'ZF Group • January 2019 – April 2021 (2 years 4 months) • Łódź, Poland',
        summary: "As Software Engineer I was responsible for testing and automation, using Jenkins as CI/CD system. One of our challenges was to create a CI/CD system for automation across company projects. I took over the CI/CD responsibility — at that point we had about 10 projects running in our system.",
        bullets: [
          'Processes: ASPICE, FuSa (IEC 61508 / ISO 26262), SQM (ISO 25010), MISRA, base of AUTOSAR.',
          'Programming: Python, Groovy.',
          'CI/CD: Jenkins — setup from scratch, jobs/pipelines development, Pipeline Shared Library.',
          'Integration and integration testing (SWE.5). PTC Integrity, JIRA, Git (GitLab).',
          'Static analysis: PRQA/Helix-QAC, Polyspace, Vector Cast. SQUORE. Build tools: CMake, SCons, Make, MinGW, PyMake.'
        ]
      }
    ],
    education: {
      degree: "Bachelor's degree, Computer Science",
      meta: 'University of Computer Science and Skills • October 2015 – July 2019'
    },
    projects: {
      intro: 'Open-source projects created to practice and expand skills:'
    },
    learning: {
      intro: 'Exploring DevOps, Observability, SRE, and expanding the stack.'
    },
    langLevel: {
      native: 'Native',
      fullPro: 'Full Professional',
      proWorking: 'Professional Working',
      elementary: 'Elementary'
    },
    actions: {
      downloadPdf: 'Download PDF',
      showMore: 'Show more',
      showLess: 'Show less',
      copyCv: 'Copy CV',
      downloadVcard: 'Add to contacts (vCard)'
    }
  },
  uk: {
    tagline: 'Software Engineer у Box • Ченстохова, Польща',
    nav: {
      about: 'Про мене',
      skills: 'Навички',
      experience: 'Досвід',
      education: 'Освіта',
      certifications: 'Сертифікати',
      projects: 'Проєкти',
      learning: 'Вивчаю',
      languages: 'Мови',
      contact: 'Контакти'
    },
    sections: {
      about: 'Про мене',
      skills: 'Навички та технології',
      experience: 'Досвід роботи',
      education: 'Освіта',
      certifications: 'Сертифікати',
      projects: 'Проєкти',
      learning: 'Зараз вивчаю',
      humanLanguages: 'Мови',
      contact: 'Контакти'
    },
    about: {
      p1: "Захоплююся програмуванням, менеджментом та економікою. Маю досвід тестування та автоматизації, раніше керував тестуванням програмного забезпечення (SWE.4–SWE.6). Працюю з різними моделями розробки: Agile (SCRUM, Kanban, Feature-driven development) та waterfall.",
      p2: "Наразі Software Engineer у Box у команді Observability — створюємо та оптимізуємо системи обробки та логування даних великого масштабу. Люблю вчитися новому в своїй сфері та за її межами — зараз вивчаю нові мови. У вільний час подорожую та відвіджую нові місця.",
      bullets: ["Захоплююся програмуванням, менеджментом та економікою. Досвід тестування, автоматизації та керування тестуванням (SWE.4–SWE.6).", "Працюю з Agile (SCRUM, Kanban, FDD) та waterfall.", "Software Engineer у Box (команда Observability) — системи обробки та логування даних.", "Люблю вчитися — вивчаю нові мови. У вільний час подорожую."]
    },
    skills: {
      all: 'Усе',
      searchPlaceholder: 'Пошук навичок...',
      filterLabel: 'Фільтр за категорією',
      progLangs: 'Програмування',
      progLangsLabel: 'Мови та середовища',
      frameworks: 'Фреймворки',
      frameworksLabel: 'Фреймворки та бібліотеки',
      tools: 'Інструменти',
      toolsLabel: 'Інструменти та інфраструктура',
      clouds: 'Хмари',
      cloudsLabel: 'Хмарні провайдери',
      platforms: 'Платформи',
      platformsLabel: 'Платформи'
    },
    experience: [
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Січень 2026 – дотепер • Польща',
        summary: "Інтегрую AI (MCP, агенти) в інструменти observability, фокусуюсь на метриках. Створюю logging MCPs для розширення workflows, проектую алерти та дашборди, будую інструменти самотестування моніторингу.",
        bullets: [
          'Побудова AI-інструментів observability: MCP-сервери та агенти.',
          'Розробка logging MCPs для розширення workflows.',
          'Проектування алертів і дашбордів для метрик і продуктивності.',
          'Співпраця з командами для покращення практик observability.',
          'Інструменти самовалідації інфраструктури observability.'
        ]
      },
      {
        title: 'Software Engineer — Data Insights',
        company: 'box',
        meta: 'Box • Квітень 2024 – Січень 2026 (1 рік 9 місяців) • Польща',
        summary: "У складі команди Data Insights у Box's Data Platform створюю та оптимізую системи обробки та логування даних великого масштабу. Брав участь у міграціях та архітектурних покращеннях інфраструктури логів і метрик.",
        bullets: [
          'Участь у міграції з Splunk на Google Cloud Logging (GCL) з мінімальним даунтаймом.',
          'Архітектурний перехід з Vector sidecar на OpenTelemetry (OTel) daemonset з масштабуванням.',
          'Дизайн і розробка кастомних OTel компонентів для міграції та розширення платформи.',
          'Написання документації для onboarding логів, workflows logs-to-metrics, архітектурних оглядів.',
          'Оптимізація використання ресурсів (CPU та памʼяті) через профілювання та аналіз коду.',
          'Покращення observability через дашборди та алерти для швидшого виявлення проблем.',
          'Спрощення архітектури шляхом консолідації логіки обробки в OTel.'
        ]
      },
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Березень 2023 – Квітень 2024 (1 рік 2 місяці) • Польща',
        summary: "Як Observability Software Engineer у Box, працював з метриками, логами та розподіленою трасировкою. Проектував та впроваджував системи моніторингу інфраструктури.",
        bullets: [
          'Проектування та впровадження алертів і дашбордів.',
          'Розробка рішень для пошуку в логах та виявлення проблем.',
          'Налаштування пайплайнів для логів і метрик.',
          'Співпраця з командами для покращення observability.',
          'Інструменти самовалідації моніторингової інфраструктури.'
        ]
      },
      {
        title: 'Software Project Leader',
        company: 'zf',
        meta: 'ZF Group • Квітень 2021 – Березень 2023 (2 роки) • Ченстохова, Польща',
        summary: "Software Project Leader у двох проектах: CI/CD та клієнтський, де відповідав за координацію тестування та валідації. Клієнтський проект працював на нашій CI/CD системі.",
        bullets: [
          'Контроль за процедурою тестування згідно ASPICE (SWE.4–SWE.6).',
          'Звітність та доставка результатів тестів команді розробки.',
          'Залучення до покращення якості ПЗ для внутрішніх та зовнішніх клієнтів.',
          'Керування командою розробки та тестування, координація, бюджет, контакт з клієнтом. (01/2022 – 03/2023)',
          'Керування 2 тестовими командами.',
          'Створення процесу рівня SWE.5 як Process Discipline Leader. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Software Engineer',
        company: 'zf',
        meta: 'ZF Group • Січень 2019 – Квітень 2021 (2 роки 4 місяці) • Лодзь, Польща',
        summary: "Відповідав за тестування та автоматизацію з Jenkins як CI/CD. Створив CI/CD систему для автоматизації проектів компанії — близько 10 проектів.",
        bullets: [
          'Процеси: ASPICE, FuSa, SQM, MISRA, база AUTOSAR.',
          'Програмування: Python, Groovy.',
          'CI/CD: Jenkins — налаштування з нуля, jobs/pipelines, Pipeline Shared Library.',
          'Інтеграція та інтеграційне тестування (SWE.5). PTC Integrity, JIRA, Git.',
          'Статичний аналіз: PRQA/Helix-QAC, Polyspace, Vector Cast. SQUORE. Build tools: CMake, SCons, Make.'
        ]
      }
    ],
    education: {
      degree: "Бакалавр, Комп'ютерні науки",
      meta: 'Університет комп\'ютерних наук та навичок • Жовтень 2015 – Липень 2019'
    },
    projects: { intro: 'Відкриті проєкти для практики та розширення навичок:' },
    learning: { intro: 'DevOps, Observability, SRE та розширення стеку.' },
    langLevel: { native: 'Рідна', fullPro: 'Повна професійна', proWorking: 'Професійна робоча', elementary: 'Базова' },
    actions: { downloadPdf: 'Завантажити PDF', showMore: 'Показати більше', showLess: 'Згорнути', copyCv: 'Копіювати CV', downloadVcard: 'Додати до контактів (vCard)' }
  },
  ru: {
    tagline: 'Software Engineer в Box • Ченстохова, Польша',
    nav: {
      about: 'Обо мне',
      skills: 'Навычки',
      experience: 'Опыт',
      education: 'Образование',
      certifications: 'Сертификаты',
      projects: 'Проекты',
      learning: 'Изучаю',
      languages: 'Языки',
      contact: 'Контакты'
    },
    sections: {
      about: 'Обо мне',
      skills: 'Навычки и технологии',
      experience: 'Опыт работы',
      education: 'Образование',
      certifications: 'Сертификаты',
      projects: 'Проекты',
      learning: 'Сейчас изучаю',
      humanLanguages: 'Языки',
      contact: 'Контакты'
    },
    about: {
      p1: "Увлекаюсь программированием, менеджментом и экономикой. Имею опыт тестирования и автоматизации, ранее руководил тестированием ПО (SWE.4–SWE.6). Работаю с моделями разработки: Agile (SCRUM, Kanban, FDD) и waterfall.",
      p2: "Сейчас Software Engineer в Box в команде Observability — создаём и оптимизируем системы обработки и логирования данных большого масштаба. Люблю учиться новому. В свободное время путешествую.",
      bullets: ["Увлекаюсь программированием, менеджментом и экономикой. Опыт тестирования, автоматизации и управления тестированием (SWE.4–SWE.6).", "Работаю с Agile (SCRUM, Kanban, FDD) и waterfall.", "Software Engineer в Box (команда Observability) — системы обработки и логирования данных.", "Люблю учиться — изучаю новые языки. В свободное время путешествую."]
    },
    skills: {
      all: 'Все',
      searchPlaceholder: 'Поиск навыков...',
      filterLabel: 'Фильтр по категории',
      progLangs: 'Программирование',
      progLangsLabel: 'Языки и среды',
      frameworks: 'Фреймворки',
      frameworksLabel: 'Фреймворки и библиотеки',
      tools: 'Инструменты',
      toolsLabel: 'Инструменты и инфраструктура',
      clouds: 'Облака',
      cloudsLabel: 'Облачные провайдеры',
      platforms: 'Платформы',
      platformsLabel: 'Платформы'
    },
    experience: [
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Январь 2026 – настоящее время • Польша',
        summary: "Интегрирую AI (MCP, агенты) в инструменты observability, фокус на метриках. Разрабатываю logging MCPs для расширения workflows, проектирую алерты и дашборды, создаю инструменты самотестирования мониторинга.",
        bullets: [
          'Разработка AI-инструментов observability: MCP-серверы и агенты.',
          'Разработка logging MCPs для расширения workflows.',
          'Проектирование алертов и дашбордов для метрик и производительности.',
          'Сотрудничество с командами для улучшения практик observability.',
          'Инструменты самовалидации инфраструктуры observability.'
        ]
      },
      {
        title: 'Software Engineer — Data Insights',
        company: 'box',
        meta: 'Box • Апрель 2024 – Январь 2026 (1 год 9 мес.) • Польша',
        summary: "В команде Data Insights в Box's Data Platform создавал и оптимизировал системы обработки данных. Участвовал в миграциях и архитектурных улучшениях.",
        bullets: [
          'Миграция с Splunk на Google Cloud Logging (GCL).',
          'Архитектурный переход на OpenTelemetry (OTel) daemonset.',
          'Кастомные OTel компоненты для миграции и расширения платформы.',
          'Документация для onboarding логов, workflows, архитектуры.',
          'Оптимизация использования ресурсов (CPU, память).',
          'Дашборды и алерты для observability.',
          'Упрощение архитектуры через консолидацию логики в OTel.'
        ]
      },
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Март 2023 – Апрель 2024 (1 год 2 мес.) • Польша',
        summary: "Работал с метриками, логами и распределённой трассировкой. Проектировал системы мониторинга инфраструктуры.",
        bullets: [
          'Алерты и дашборды для метрик.',
          'Решения для поиска в логах.',
          'Пайплайны для логов и метрик.',
          'Сотрудничество по observability.',
          'Инструменты самовалидации.'
        ]
      },
      {
        title: 'Software Project Leader',
        company: 'zf',
        meta: 'ZF Group • Апрель 2021 – Март 2023 (2 года) • Ченстохова, Польша',
        summary: "Software Project Leader в двух проектах: CI/CD и клиентский. Ответственность за координацию тестирования и валидации.",
        bullets: [
          'Контроль тестирования по ASPICE (SWE.4–SWE.6).',
          'Отчётность и передача результатов тестов.',
          'Улучшение качества ПО для клиентов.',
          'Управление командой разработки и тестирования. (01/2022 – 03/2023)',
          'Управление 2 тестовыми командами.',
          'Создание процесса уровня SWE.5 как Process Discipline Leader. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Software Engineer',
        company: 'zf',
        meta: 'ZF Group • Январь 2019 – Апрель 2021 (2 года 4 мес.) • Лодзь, Польша',
        summary: "Ответственность за тестирование и автоматизацию с Jenkins. Создал CI/CD систему — около 10 проектов.",
        bullets: [
          'Процессы: ASPICE, FuSa, SQM, MISRA, AUTOSAR.',
          'Программирование: Python, Groovy.',
          'CI/CD: Jenkins — настройка с нуля, pipelines, Shared Library.',
          'Интеграция (SWE.5). PTC Integrity, JIRA, Git.',
          'Статический анализ: PRQA, Polyspace, Vector Cast. CMake, SCons, Make.'
        ]
      }
    ],
    education: {
      degree: 'Бакалавр, Компьютерные науки',
      meta: 'Университет компьютерных наук и навыков • Октябрь 2015 – Июль 2019'
    },
    projects: { intro: 'Открытые проекты для практики и расширения навыков:' },
    learning: { intro: 'DevOps, Observability, SRE и расширение стека.' },
    langLevel: { native: 'Родной', fullPro: 'Полный профессиональный', proWorking: 'Профессиональный рабочий', elementary: 'Базовый' },
    actions: { downloadPdf: 'Скачать PDF', showMore: 'Показать больше', showLess: 'Свернуть', copyCv: 'Копировать CV', downloadVcard: 'Добавить в контакты (vCard)' }
  },
  pl: {
    tagline: 'Software Engineer w Box • Częstochowa, Polska',
    nav: {
      about: 'O mnie',
      skills: 'Umiejętności',
      experience: 'Doświadczenie',
      education: 'Wykształcenie',
      certifications: 'Certyfikaty',
      projects: 'Projekty',
      learning: 'Uczę się',
      languages: 'Języki',
      contact: 'Kontakt'
    },
    sections: {
      about: 'O mnie',
      skills: 'Umiejętności i technologie',
      experience: 'Doświadczenie zawodowe',
      education: 'Wykształcenie',
      certifications: 'Certyfikaty',
      projects: 'Projekty',
      learning: 'Obecnie uczę się',
      humanLanguages: 'Języki',
      contact: 'Kontakt'
    },
    about: {
      p1: "Zafascynowany programowaniem, zarządzaniem i ekonomią. Mam doświadczenie w testowaniu i automatyzacji, wcześniej zarządzałem testowaniem oprogramowania (SWE.4–SWE.6). Pracuję z metodologiami: Agile (SCRUM, Kanban, FDD) i waterfall.",
      p2: "Obecnie Software Engineer w Box w zespole Observability — buduję i optymalizuję systemy przetwarzania i logowania danych. Lubię uczyć się nowych rzeczy. W wolnym czasie podróżuję.",
      bullets: ["Zafascynowany programowaniem, zarządzaniem i ekonomią. Doświadczenie w testowaniu, automatyzacji i zarządzaniu testowaniem (SWE.4–SWE.6).", "Pracuję z Agile (SCRUM, Kanban, FDD) i waterfall.", "Software Engineer w Box (zespół Observability) — systemy przetwarzania i logowania danych.", "Lubię się uczyć — obecnie nowe języki. W wolnym czasie podróżuję."]
    },
    skills: {
      all: 'Wszystkie',
      searchPlaceholder: 'Szukaj umiejętności...',
      filterLabel: 'Filtruj według kategorii',
      progLangs: 'Programowanie',
      progLangsLabel: 'Języki i środowiska',
      frameworks: 'Frameworki',
      frameworksLabel: 'Frameworki i biblioteki',
      tools: 'Narzędzia',
      toolsLabel: 'Narzędzia i infrastruktura',
      clouds: 'Chmury',
      cloudsLabel: 'Dostawcy chmur',
      platforms: 'Platformy',
      platformsLabel: 'Platformy'
    },
    experience: [
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Styczeń 2026 – obecnie • Polska',
        summary: "Integruję AI (MCP, agenci) w narzędzia observability, skupiam się na metrykach. Buduję logging MCPs do rozszerzenia workflows, projektuję alerty i dashboardy, tworzę narzędzia samowalidacji monitoringu.",
        bullets: [
          'Budowa narzędzi observability opartych na AI: serwery MCP i agenci.',
          'Rozwój logging MCPs do rozszerzenia workflows.',
          'Projektowanie alertów i dashboardów dla metryk i wydajności.',
          'Współpraca z zespołami w celu poprawy praktyk observability.',
          'Narzędzia samowalidacji infrastruktury observability.'
        ]
      },
      {
        title: 'Software Engineer — Data Insights',
        company: 'box',
        meta: 'Box • Kwiecień 2024 – Styczeń 2026 (1 rok 9 miesięcy) • Polska',
        summary: "W zespole Data Insights w Box's Data Platform budowałem i optymalizowałem systemy przetwarzania danych. Uczestniczyłem w migracjach i ulepszeniach architektury.",
        bullets: [
          'Migracja z Splunk do Google Cloud Logging (GCL).',
          'Przejście architektoniczne na OpenTelemetry (OTel) daemonset.',
          'Własne komponenty OTel dla migracji i rozszerzenia platformy.',
          'Dokumentacja dla onboarding logów, workflows, architektury.',
          'Optymalizacja zużycia zasobów (CPU, pamięć).',
          'Dashboardy i alerty dla observability.',
          'Uproszczenie architektury przez konsolidację w OTel.'
        ]
      },
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Marzec 2023 – Kwiecień 2024 (1 rok 2 miesiące) • Polska',
        summary: "Pracowałem z metrykami, logami i distributed tracing. Projektowałem systemy monitorowania infrastruktury.",
        bullets: [
          'Alerty i dashboardy dla metryk.',
          'Rozwiązania do wyszukiwania w logach.',
          'Pipeline\'y dla logów i metryk.',
          'Współpraca w zakresie observability.',
          'Narzędzia samowalidacji.'
        ]
      },
      {
        title: 'Software Project Leader',
        company: 'zf',
        meta: 'ZF Group • Kwiecień 2021 – Marzec 2023 (2 lata) • Częstochowa, Polska',
        summary: "Software Project Leader w dwóch projektach: CI/CD i klienckim. Odpowiedzialność za koordynację testów i walidacji.",
        bullets: [
          'Kontrola testowania według ASPICE (SWE.4–SWE.6).',
          'Raportowanie i przekazywanie wyników testów.',
          'Poprawa jakości oprogramowania dla klientów.',
          'Zarządzanie zespołem dev i test. (01/2022 – 03/2023)',
          'Zarządzanie 2 zespołami testowymi.',
          'Tworzenie procesu SWE.5 jako Process Discipline Leader. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Software Engineer',
        company: 'zf',
        meta: 'ZF Group • Styczeń 2019 – Kwiecień 2021 (2 lata 4 miesiące) • Łódź, Polska',
        summary: "Odpowiedzialność za testowanie i automatyzację z Jenkins. Stworzyłem system CI/CD — około 10 projektów.",
        bullets: [
          'Procesy: ASPICE, FuSa, SQM, MISRA, AUTOSAR.',
          'Programowanie: Python, Groovy.',
          'CI/CD: Jenkins — konfiguracja od zera, pipelines, Shared Library.',
          'Integracja (SWE.5). PTC Integrity, JIRA, Git.',
          'Analiza statyczna: PRQA, Polyspace, Vector Cast. CMake, SCons, Make.'
        ]
      }
    ],
    education: {
      degree: 'Licencjat, Informatyka',
      meta: 'Uniwersytet Nauk Computerowych i Umiejętności • Październik 2015 – Lipiec 2019'
    },
    projects: { intro: 'Projekty open-source do nauki i rozwijania umiejętności:' },
    learning: { intro: 'DevOps, Observability, SRE i rozszerzanie stacku.' },
    langLevel: { native: 'Ojczysty', fullPro: 'Pełny profesjonalny', proWorking: 'Profesjonalna praca', elementary: 'Podstawowy' },
    actions: { downloadPdf: 'Pobierz PDF', showMore: 'Pokaż więcej', showLess: 'Pokaż mniej', copyCv: 'Kopiuj CV', downloadVcard: 'Dodaj do kontaktów (vCard)' }
  },
  es: {
    tagline: 'Software Engineer en Box • Częstochowa, Polonia',
    nav: {
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      education: 'Formación',
      certifications: 'Certificaciones',
      projects: 'Proyectos',
      learning: 'Estoy aprendiendo',
      languages: 'Idiomas',
      contact: 'Contacto'
    },
    sections: {
      about: 'Sobre mí',
      skills: 'Habilidades y tecnologías',
      experience: 'Experiencia laboral',
      education: 'Formación',
      certifications: 'Certificaciones',
      projects: 'Proyectos',
      learning: 'Actualmente aprendo',
      humanLanguages: 'Idiomas',
      contact: 'Contacto'
    },
    about: {
      p1: "Apasionado por la programación, la gestión y la economía. Tengo experiencia en testing y automatización, y he gestionado el testing de software (SWE.4–SWE.6). Trabajo con metodologías Agile (SCRUM, Kanban, FDD) y waterfall.",
      p2: "Actualmente Software Engineer en Box en el equipo Observability — construyo sistemas de procesamiento y logging de datos a gran escala. Me gusta aprender cosas nuevas. En mi tiempo libre viajo.",
      bullets: ["Apasionado por la programación, la gestión y la economía. Experiencia en testing, automatización y gestión de testing (SWE.4–SWE.6).", "Trabajo con Agile (SCRUM, Kanban, FDD) y waterfall.", "Software Engineer en Box (equipo Observability) — sistemas de procesamiento y logging de datos.", "Me gusta aprender — actualmente explorando nuevos idiomas. En tiempo libre viajo."]
    },
    skills: {
      all: 'Todos',
      searchPlaceholder: 'Buscar habilidades...',
      filterLabel: 'Filtrar por categoría',
      progLangs: 'Programación',
      progLangsLabel: 'Lenguajes y entornos',
      frameworks: 'Frameworks',
      frameworksLabel: 'Frameworks y bibliotecas',
      tools: 'Herramientas',
      toolsLabel: 'Herramientas e infraestructura',
      clouds: 'Clouds',
      cloudsLabel: 'Proveedores cloud',
      platforms: 'Plataformas',
      platformsLabel: 'Plataformas'
    },
    experience: [
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Enero 2026 – Presente • Polonia',
        summary: "Integro AI (MCP, agentes) en las herramientas de observability y me enfoco en métricas. Desarrollo logging MCPs para extender workflows, diseño alertas y dashboards para métricas del sistema, y creo herramientas de auto-validación para la infraestructura de monitoreo.",
        bullets: [
          'Construcción de herramientas observability con AI: servidores MCP y agentes.',
          'Desarrollo de logging MCPs para extender workflows.',
          'Diseño de alertas y dashboards para métricas y rendimiento.',
          'Colaboración con equipos para mejorar observability.',
          'Herramientas de autovalidación de infraestructura observability.'
        ]
      },
      {
        title: 'Software Engineer — Data Insights',
        company: 'box',
        meta: 'Box • Abril 2024 – Enero 2026 (1 año 9 meses) • Polonia',
        summary: "En el equipo Data Insights de Box's Data Platform construí y optimicé sistemas de procesamiento de datos. Participé en migraciones y mejoras de arquitectura.",
        bullets: [
          'Migración de Splunk a Google Cloud Logging (GCL).',
          'Transición arquitectónica a OpenTelemetry (OTel) daemonset.',
          'Componentes OTel personalizados para migración.',
          'Documentación para onboarding, workflows, arquitectura.',
          'Optimización de recursos (CPU, memoria).',
          'Dashboards y alertas para observability.',
          'Simplificación de arquitectura con OTel.'
        ]
      },
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Marzo 2023 – Abril 2024 (1 año 2 meses) • Polonia',
        summary: "Trabajé con métricas, logs y distributed tracing. Diseñé sistemas de monitoreo.",
        bullets: [
          'Alertas y dashboards.',
          'Soluciones de búsqueda en logs.',
          'Pipelines para logs y métricas.',
          'Colaboración en observability.',
          'Herramientas de autovalidación.'
        ]
      },
      {
        title: 'Software Project Leader',
        company: 'zf',
        meta: 'ZF Group • Abril 2021 – Marzo 2023 (2 años) • Częstochowa, Polonia',
        summary: "Software Project Leader en dos proyectos: CI/CD y cliente. Coordinación de testing y validación.",
        bullets: [
          'Control de testing según ASPICE (SWE.4–SWE.6).',
          'Informes y entrega de resultados de tests.',
          'Mejora de calidad de software para clientes.',
          'Gestión de equipos dev y test. (01/2022 – 03/2023)',
          'Gestión de 2 equipos de test.',
          'Creación de proceso SWE.5 como Process Discipline Leader. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Software Engineer',
        company: 'zf',
        meta: 'ZF Group • Enero 2019 – Abril 2021 (2 años 4 meses) • Łódź, Polonia',
        summary: "Responsable de testing y automatización con Jenkins. Creé sistema CI/CD — unos 10 proyectos.",
        bullets: [
          'Procesos: ASPICE, FuSa, SQM, MISRA, AUTOSAR.',
          'Programación: Python, Groovy.',
          'CI/CD: Jenkins — configuración desde cero, pipelines.',
          'Integración (SWE.5). PTC Integrity, JIRA, Git.',
          'Análisis estático: PRQA, Polyspace, Vector Cast. CMake, SCons, Make.'
        ]
      }
    ],
    education: {
      degree: 'Licenciatura, Ciencias de la Computación',
      meta: 'Universidad de Ciencias de la Computación • Octubre 2015 – Julio 2019'
    },
    projects: { intro: 'Proyectos open-source para practicar y ampliar habilidades:' },
    learning: { intro: 'DevOps, Observability, SRE y ampliación del stack.' },
    langLevel: { native: 'Nativo', fullPro: 'Profesional completo', proWorking: 'Profesional laboral', elementary: 'Elemental' },
    actions: { downloadPdf: 'Descargar PDF', showMore: 'Ver más', showLess: 'Ver menos', copyCv: 'Copiar CV', downloadVcard: 'Añadir a contactos (vCard)' }
  },
  it: {
    tagline: 'Software Engineer presso Box • Częstochowa, Polonia',
    nav: {
      about: 'Su di me',
      skills: 'Competenze',
      experience: 'Esperienza',
      education: 'Istruzione',
      certifications: 'Certificazioni',
      projects: 'Progetti',
      learning: 'Sto imparando',
      languages: 'Lingue',
      contact: 'Contatti'
    },
    sections: {
      about: 'Su di me',
      skills: 'Competenze e tecnologie',
      experience: 'Esperienza lavorativa',
      education: 'Istruzione',
      certifications: 'Certificazioni',
      projects: 'Progetti',
      learning: 'Attualmente imparo',
      humanLanguages: 'Lingue',
      contact: 'Contatti'
    },
    about: {
      p1: "Appassionato di programmazione, management ed economia. Ho esperienza in testing e automazione, ho gestito il testing software (SWE.4–SWE.6). Lavoro con metodologie Agile (SCRUM, Kanban, FDD) e waterfall.",
      p2: "Attualmente Software Engineer in Box nel team Observability — costruisco sistemi di elaborazione e logging dati su larga scala. Mi piace imparare. Nel tempo libero viaggio.",
      bullets: ["Appassionato di programmazione, management ed economia. Esperienza in testing, automazione e gestione testing (SWE.4–SWE.6).", "Lavoro con Agile (SCRUM, Kanban, FDD) e waterfall.", "Software Engineer in Box (team Observability) — sistemi di elaborazione e logging dati.", "Mi piace imparare — attualmente esploro nuove lingue. Nel tempo libero viaggio."]
    },
    skills: {
      all: 'Tutti',
      searchPlaceholder: 'Cerca competenze...',
      filterLabel: 'Filtra per categoria',
      progLangs: 'Programmazione',
      progLangsLabel: 'Linguaggi e runtime',
      frameworks: 'Framework',
      frameworksLabel: 'Framework e librerie',
      tools: 'Strumenti',
      toolsLabel: 'Strumenti e infrastruttura',
      clouds: 'Cloud',
      cloudsLabel: 'Provider cloud',
      platforms: 'Piattaforme',
      platformsLabel: 'Piattaforme'
    },
    experience: [
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Gennaio 2026 – Presente • Polonia',
        summary: "Integro AI (MCP, agenti) negli strumenti observability e mi concentro sulle metriche. Sviluppo logging MCPs per estendere i workflows, progetto alert e dashboard per le metriche di sistema, e creo strumenti di auto-validazione per l'infrastruttura di monitoraggio.",
        bullets: [
          'Costruzione di strumenti observability basati su AI: server MCP e agenti.',
          'Sviluppo di logging MCPs per estendere i workflows.',
          'Progettazione di alert e dashboard per metriche e prestazioni.',
          'Collaborazione con team per migliorare observability.',
          'Strumenti di autovalidazione dell\'infrastruttura observability.'
        ]
      },
      {
        title: 'Software Engineer — Data Insights',
        company: 'box',
        meta: 'Box • Aprile 2024 – Gennaio 2026 (1 anno 9 mesi) • Polonia',
        summary: "Nel team Data Insights di Box's Data Platform ho costruito e ottimizzato sistemi di elaborazione dati. Partecipato a migrazioni e miglioramenti architetturali.",
        bullets: [
          'Migrazione da Splunk a Google Cloud Logging (GCL).',
          'Transizione architetturale a OpenTelemetry (OTel) daemonset.',
          'Componenti OTel personalizzati per migrazione.',
          'Documentazione per onboarding, workflow, architettura.',
          'Ottimizzazione risorse (CPU, memoria).',
          'Dashboard e alert per observability.',
          'Semplificazione architettura con OTel.'
        ]
      },
      {
        title: 'Observability Software Engineer',
        company: 'box',
        meta: 'Box • Marzo 2023 – Aprile 2024 (1 anno 2 mesi) • Polonia',
        summary: "Lavorato con metriche, log e distributed tracing. Progettato sistemi di monitoraggio.",
        bullets: [
          'Alert e dashboard.',
          'Soluzioni di ricerca nei log.',
          'Pipeline per log e metriche.',
          'Collaborazione su observability.',
          'Strumenti di autovalidazione.'
        ]
      },
      {
        title: 'Software Project Leader',
        company: 'zf',
        meta: 'ZF Group • Aprile 2021 – Marzo 2023 (2 anni) • Częstochowa, Polonia',
        summary: "Software Project Leader in due progetti: CI/CD e cliente. Coordinamento testing e validazione.",
        bullets: [
          'Controllo testing secondo ASPICE (SWE.4–SWE.6).',
          'Report e consegna risultati test.',
          'Miglioramento qualità software per clienti.',
          'Gestione team dev e test. (01/2022 – 03/2023)',
          'Gestione 2 team di test.',
          'Creazione processo SWE.5 come Process Discipline Leader. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Software Engineer',
        company: 'zf',
        meta: 'ZF Group • Gennaio 2019 – Aprile 2021 (2 anni 4 mesi) • Łódź, Polonia',
        summary: "Responsabile di testing e automazione con Jenkins. Creato sistema CI/CD — circa 10 progetti.",
        bullets: [
          'Processi: ASPICE, FuSa, SQM, MISRA, AUTOSAR.',
          'Programmazione: Python, Groovy.',
          'CI/CD: Jenkins — configurazione da zero, pipeline.',
          'Integrazione (SWE.5). PTC Integrity, JIRA, Git.',
          'Analisi statica: PRQA, Polyspace, Vector Cast. CMake, SCons, Make.'
        ]
      }
    ],
    education: {
      degree: 'Laurea, Informatica',
      meta: 'Università di Scienze Informatiche • Ottobre 2015 – Luglio 2019'
    },
    projects: { intro: 'Progetti open-source per praticare e ampliare le competenze:' },
    learning: { intro: 'DevOps, Observability, SRE e ampliamento dello stack.' },
    langLevel: { native: 'Madrelingua', fullPro: 'Professionale completo', proWorking: 'Professionale lavorativo', elementary: 'Elementare' },
    actions: { downloadPdf: 'Scarica PDF', showMore: 'Mostra di più', showLess: 'Mostra meno', copyCv: 'Copia CV', downloadVcard: 'Aggiungi ai contatti (vCard)' }
  }
};
