const TRANSLATIONS = {
  en: {
    name: 'Dmytro Leshchenko',
    tagline: 'Software Engineer at Box • Czestochowa, Poland',
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
      platformsLabel: 'Platforms',
      noResults: 'No skills found'
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
        meta: 'ZF Group • April 2021 – March 2023 (2 years) • Czestochowa, Silesian, Poland',
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
      intro: 'Open-source projects created to practice and expand skills:',
      list: [
        { name: 'go-scheduler', desc: 'Minimalistic scheduler library for Go. Schedule tasks with start time, duration, and interval. Supports task waiting and manual stop.' },
        { name: 'go-logging', desc: 'Logging library for Golang inspired by Python logger. 11 logging levels, standard & structured loggers, async support, config from JSON/YAML/XML.' },
        { name: 'workflows-manager', desc: 'Python CLI for running custom workflows. Create workflows from reusable steps, define pipelines in config.' }
      ]
    },
    humanLanguages: [
      { name: 'English', levelKey: 'proWorking', level: 80 },
      { name: 'Polish', levelKey: 'fullPro', level: 90 },
      { name: 'Ukrainian', levelKey: 'native', level: 100 },
      { name: 'Russian', levelKey: 'native', level: 100 },
      { name: 'Spanish', levelKey: 'elementary', level: 25 },
      { name: 'Italian', levelKey: 'elementary', level: 25 }
    ],
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
      downloadPdf: 'PDF',
      showMore: 'Show more',
      showLess: 'Show less',
      copyCv: 'Copy',
      downloadVcard: 'Add to contacts (vCard)',
      toastCopied: 'Copied!',
      toastCvCopied: 'CV copied!',
      toastPdfLoading: 'PDF library loading…',
      toastPdfFailed: 'PDF failed'
    },
    skipToMain: 'Skip to main content'
  },
  uk: {
    name: 'Лещенко Дмитро',
    nameN: 'Лещенко;Дмитро;;;',
    tagline: 'Інженер ПЗ у Box • Ченстохова, Польща',
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
      p2: "Наразі Software Engineer у Box у команді спостережуваності — створюємо та оптимізуємо системи обробки та логування даних великого масштабу. Люблю вчитися новому в своїй сфері та за її межами — зараз вивчаю нові мови. У вільний час подорожую та відвіджую нові місця.",
      bullets: ["Захоплююся програмуванням, менеджментом та економікою. Досвід тестування, автоматизації та керування тестуванням (SWE.4–SWE.6).", "Працюю з Agile (SCRUM, Kanban, FDD) та waterfall.", "Software Engineer у Box (команда спостережуваності) — системи обробки та логування даних.", "Люблю вчитися — вивчаю нові мови. У вільний час подорожую."]
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
      platformsLabel: 'Платформи',
      noResults: 'Навичок не знайдено'
    },
    experience: [
      {
        title: 'Інженер зі спостережуваності',
        company: 'box',
        meta: 'Box • Січень 2026 – дотепер • Польща',
        summary: "Інтегрую ШІ (MCP, агенти) в інструменти спостережуваності, фокусуюсь на метриках. Створюю logging MCPs для розширення workflows, проектую алерти та дашборди, будую інструменти самотестування моніторингу.",
        bullets: [
          'Побудова ШІ-інструментів спостережуваності: MCP-сервери та агенти.',
          'Розробка logging MCPs для розширення workflows.',
          'Проектування алертів і дашбордів для метрик і продуктивності.',
          'Співпраця з командами для покращення практик спостережуваності.',
          'Інструменти самовалідації інфраструктури спостережуваності.'
        ]
      },
      {
        title: 'Інженер ПЗ — Data Insights',
        company: 'box',
        meta: 'Box • Квітень 2024 – Січень 2026 (1 рік 9 місяців) • Польща',
        summary: "У складі команди Data Insights у Box's Data Platform створюю та оптимізую системи обробки та логування даних великого масштабу. Брав участь у міграціях та архітектурних покращеннях інфраструктури логів і метрик.",
        bullets: [
          'Участь у міграції з Splunk на Google Cloud Logging (GCL) з мінімальним даунтаймом.',
          'Архітектурний перехід з Vector sidecar на OpenTelemetry (OTel) daemonset з масштабуванням.',
          'Дизайн і розробка кастомних OTel компонентів для міграції та розширення платформи.',
          'Написання документації для onboarding логів, workflows logs-to-metrics, архітектурних оглядів.',
          'Оптимізація використання ресурсів (CPU та памʼяті) через профілювання та аналіз коду.',
          'Покращення спостережуваності через дашборди та алерти для швидшого виявлення проблем.',
          'Спрощення архітектури шляхом консолідації логіки обробки в OTel.'
        ]
      },
      {
        title: 'Інженер зі спостережуваності',
        company: 'box',
        meta: 'Box • Березень 2023 – Квітень 2024 (1 рік 2 місяці) • Польща',
        summary: "Як інженер зі спостережуваності у Box, працював з метриками, логами та розподіленою трасировкою. Проектував та впроваджував системи моніторингу інфраструктури.",
        bullets: [
          'Проектування та впровадження алертів і дашбордів.',
          'Розробка рішень для пошуку в логах та виявлення проблем.',
          'Налаштування пайплайнів для логів і метрик.',
          'Співпраця з командами для покращення спостережуваності.',
          'Інструменти самовалідації моніторингової інфраструктури.'
        ]
      },
      {
        title: 'Керівник програмного проєкту',
        company: 'zf',
        meta: 'ZF Group • Квітень 2021 – Березень 2023 (2 роки) • Ченстохова, Польща',
        summary: "Керівник програмного проєкту у двох проектах: CI/CD та клієнтський, де відповідав за координацію тестування та валідації. Клієнтський проект працював на нашій CI/CD системі.",
        bullets: [
          'Контроль за процедурою тестування згідно ASPICE (SWE.4–SWE.6).',
          'Звітність та доставка результатів тестів команді розробки.',
          'Залучення до покращення якості ПЗ для внутрішніх та зовнішніх клієнтів.',
          'Керування командою розробки та тестування, координація, бюджет, контакт з клієнтом. (01/2022 – 03/2023)',
          'Керування 2 тестовими командами.',
          'Створення процесу рівня SWE.5 як Лідер з процесної дисципліни. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Інженер ПЗ',
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
    projects: {
      intro: 'Відкриті проєкти для практики та розширення навичок:',
      list: [
        { name: 'go-scheduler', desc: 'Мінімалістична бібліотека планувальника для Go. Планування задач з часом старту, тривалістю та інтервалом. Підтримка очікування та ручної зупинки.' },
        { name: 'go-logging', desc: 'Бібліотека логування для Golang за зразком Python logger. 11 рівнів, стандартні та структуровані логери, async, конфіг з JSON/YAML/XML.' },
        { name: 'workflows-manager', desc: 'Python CLI для запуску власних workflow. Створення workflow з повторно використовуваних кроків, визначення пайплайнів у конфігу.' }
      ]
    },
    humanLanguages: [
      { name: 'Англійська', levelKey: 'proWorking', level: 80 },
      { name: 'Польська', levelKey: 'fullPro', level: 90 },
      { name: 'Українська', levelKey: 'native', level: 100 },
      { name: 'Російська', levelKey: 'native', level: 100 },
      { name: 'Іспанська', levelKey: 'elementary', level: 25 },
      { name: 'Італійська', levelKey: 'elementary', level: 25 }
    ],
    learning: { intro: 'DevOps, спостережуваність, SRE та розширення стеку.' },
    langLevel: { native: 'Рідна', fullPro: 'Повна професійна', proWorking: 'Професійна робоча', elementary: 'Базова' },
    actions: { downloadPdf: 'PDF', showMore: 'Показати більше', showLess: 'Згорнути', copyCv: 'Копіювати', downloadVcard: 'Додати до контактів (vCard)', toastCopied: 'Скопійовано!', toastCvCopied: 'CV скопійовано!', toastPdfLoading: 'Завантаження бібліотеки PDF…', toastPdfFailed: 'Помилка PDF' },
    skipToMain: 'Перейти до основного вмісту'
  },
  ru: {
    name: 'Лещенко Дмитрий',
    nameN: 'Лещенко;Дмитрий;;;',
    tagline: 'Инженер ПО в Box • Ченстохова, Польша',
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
      p2: "Сейчас Software Engineer в Box в команде наблюдаемости — создаём и оптимизируем системы обработки и логирования данных большого масштаба. Люблю учиться новому. В свободное время путешествую.",
      bullets: ["Увлекаюсь программированием, менеджментом и экономикой. Опыт тестирования, автоматизации и управления тестированием (SWE.4–SWE.6).", "Работаю с Agile (SCRUM, Kanban, FDD) и waterfall.", "Software Engineer в Box (команда наблюдаемости) — системы обработки и логирования данных.", "Люблю учиться — изучаю новые языки. В свободное время путешествую."]
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
      platformsLabel: 'Платформы',
      noResults: 'Навыки не найдены'
    },
    experience: [
      {
        title: 'Инженер по наблюдаемости',
        company: 'box',
        meta: 'Box • Январь 2026 – настоящее время • Польша',
        summary: "Интегрирую ИИ (MCP, агенты) в инструменты наблюдаемости, фокус на метриках. Разрабатываю logging MCPs для расширения workflows, проектирую алерты и дашборды, создаю инструменты самотестирования мониторинга.",
        bullets: [
          'Разработка ИИ-инструментов наблюдаемости: MCP-серверы и агенты.',
          'Разработка logging MCPs для расширения workflows.',
          'Проектирование алертов и дашбордов для метрик и производительности.',
          'Сотрудничество с командами для улучшения практик наблюдаемости.',
          'Инструменты самовалидации инфраструктуры наблюдаемости.'
        ]
      },
      {
        title: 'Инженер ПО — Data Insights',
        company: 'box',
        meta: 'Box • Апрель 2024 – Январь 2026 (1 год 9 мес.) • Польша',
        summary: "В команде Data Insights в Box's Data Platform создавал и оптимизировал системы обработки данных. Участвовал в миграциях и архитектурных улучшениях.",
        bullets: [
          'Миграция с Splunk на Google Cloud Logging (GCL).',
          'Архитектурный переход на OpenTelemetry (OTel) daemonset.',
          'Собственные компоненты OTel для миграции и расширения платформы.',
          'Документация для onboarding логов, workflows, архитектуры.',
          'Оптимизация использования ресурсов (CPU, память).',
          'Дашборды и алерты для наблюдаемости.',
          'Упрощение архитектуры через консолидацию логики в OTel.'
        ]
      },
      {
        title: 'Инженер по наблюдаемости',
        company: 'box',
        meta: 'Box • Март 2023 – Апрель 2024 (1 год 2 мес.) • Польша',
        summary: "Работал с метриками, логами и распределённой трассировкой. Проектировал системы мониторинга инфраструктуры.",
        bullets: [
          'Алерты и дашборды для метрик.',
          'Решения для поиска в логах.',
          'Пайплайны для логов и метрик.',
          'Сотрудничество по наблюдаемости.',
          'Инструменты самовалидации.'
        ]
      },
      {
        title: 'Руководитель программного проекта',
        company: 'zf',
        meta: 'ZF Group • Апрель 2021 – Март 2023 (2 года) • Ченстохова, Польша',
        summary: "Руководитель программного проекта в двух проектах: CI/CD и клиентский. Отвечал за координацию тестирования и валидации.",
        bullets: [
          'Контроль тестирования по ASPICE (SWE.4–SWE.6).',
          'Отчётность и передача результатов тестов.',
          'Улучшение качества ПО для клиентов.',
          'Управление командой разработки и тестирования. (01/2022 – 03/2023)',
          'Управление 2 тестовыми командами.',
          'Создание процесса уровня SWE.5 как Руководитель по процессной дисциплине. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Инженер ПО',
        company: 'zf',
        meta: 'ZF Group • Январь 2019 – Апрель 2021 (2 года 4 мес.) • Лодзь, Польша',
        summary: "Отвечал за тестирование и автоматизацию с Jenkins. Создал CI/CD систему — около 10 проектов.",
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
    projects: {
      intro: 'Открытые проекты для практики и расширения навыков:',
      list: [
        { name: 'go-scheduler', desc: 'Минималистичная библиотека планировщика для Go. Планирование задач со временем старта, длительностью и интервалом. Поддержка ожидания и ручной остановки.' },
        { name: 'go-logging', desc: 'Библиотека логирования для Golang по образцу Python logger. 11 уровней, стандартные и структурированные логгеры, async, конфиг из JSON/YAML/XML.' },
        { name: 'workflows-manager', desc: 'Python CLI для запуска пользовательских workflow. Создание workflow из переиспользуемых шагов, определение пайплайнов в конфиге.' }
      ]
    },
    humanLanguages: [
      { name: 'Английский', levelKey: 'proWorking', level: 80 },
      { name: 'Польский', levelKey: 'fullPro', level: 90 },
      { name: 'Украинский', levelKey: 'native', level: 100 },
      { name: 'Русский', levelKey: 'native', level: 100 },
      { name: 'Испанский', levelKey: 'elementary', level: 25 },
      { name: 'Итальянский', levelKey: 'elementary', level: 25 }
    ],
    learning: { intro: 'DevOps, наблюдаемость, SRE и расширение стека.' },
    langLevel: { native: 'Родной', fullPro: 'Полный профессиональный', proWorking: 'Профессиональный рабочий', elementary: 'Базовый' },
    actions: { downloadPdf: 'PDF', showMore: 'Показать больше', showLess: 'Свернуть', copyCv: 'Копировать', downloadVcard: 'Добавить в контакты (vCard)', toastCopied: 'Скопировано!', toastCvCopied: 'CV скопирован!', toastPdfLoading: 'Загрузка библиотеки PDF…', toastPdfFailed: 'Ошибка PDF' },
    skipToMain: 'Перейти к основному содержанию'
  },
  pl: {
    name: 'Dmytro Leshchenko',
    tagline: 'Inżynier oprogramowania w Box • Częstochowa, Polska',
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
      p2: "Obecnie Software Engineer w Box w zespole obserwowalności — buduję i optymalizuję systemy przetwarzania i logowania danych. Lubię uczyć się nowych rzeczy. W wolnym czasie podróżuję.",
      bullets: ["Zafascynowany programowaniem, zarządzaniem i ekonomią. Doświadczenie w testowaniu, automatyzacji i zarządzaniu testowaniem (SWE.4–SWE.6).", "Pracuję z Agile (SCRUM, Kanban, FDD) i waterfall.", "Software Engineer w Box (zespół obserwowalności) — systemy przetwarzania i logowania danych.", "Lubię się uczyć — obecnie nowe języki. W wolnym czasie podróżuję."]
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
      platformsLabel: 'Platformy',
      noResults: 'Brak umiejętności'
    },
    experience: [
      {
        title: 'Inżynier obserwowalności',
        company: 'box',
        meta: 'Box • Styczeń 2026 – obecnie • Polska',
        summary: "Integruję SI (MCP, agenci) w narzędzia obserwowalności, skupiam się na metrykach. Buduję logging MCPs do rozszerzenia workflows, projektuję alerty i dashboardy, tworzę narzędzia samowalidacji monitoringu.",
        bullets: [
          'Budowa narzędzi obserwowalności opartych na SI: serwery MCP i agenci.',
          'Rozwój logging MCPs do rozszerzenia workflows.',
          'Projektowanie alertów i dashboardów dla metryk i wydajności.',
          'Współpraca z zespołami w celu poprawy praktyk obserwowalności.',
          'Narzędzia samowalidacji infrastruktury obserwowalności.'
        ]
      },
      {
        title: 'Inżynier oprogramowania — Data Insights',
        company: 'box',
        meta: 'Box • Kwiecień 2024 – Styczeń 2026 (1 rok 9 miesięcy) • Polska',
        summary: "W zespole Data Insights w Box's Data Platform budowałem i optymalizowałem systemy przetwarzania danych. Uczestniczyłem w migracjach i ulepszeniach architektury.",
        bullets: [
          'Migracja z Splunk do Google Cloud Logging (GCL).',
          'Przejście architektoniczne na OpenTelemetry (OTel) daemonset.',
          'Własne komponenty OTel dla migracji i rozszerzenia platformy.',
          'Dokumentacja dla onboarding logów, workflows, architektury.',
          'Optymalizacja zużycia zasobów (CPU, pamięć).',
          'Dashboardy i alerty dla obserwowalności.',
          'Uproszczenie architektury przez konsolidację w OTel.'
        ]
      },
      {
        title: 'Inżynier obserwowalności',
        company: 'box',
        meta: 'Box • Marzec 2023 – Kwiecień 2024 (1 rok 2 miesiące) • Polska',
        summary: "Pracowałem z metrykami, logami i distributed tracing. Projektowałem systemy monitorowania infrastruktury.",
        bullets: [
          'Alerty i dashboardy dla metryk.',
          'Rozwiązania do wyszukiwania w logach.',
          'Pipeline\'y dla logów i metryk.',
          'Współpraca w zakresie obserwowalności.',
          'Narzędzia samowalidacji.'
        ]
      },
      {
        title: 'Kierownik projektu programowego',
        company: 'zf',
        meta: 'ZF Group • Kwiecień 2021 – Marzec 2023 (2 lata) • Częstochowa, Polska',
        summary: "Kierownik projektu programowego w dwóch projektach: CI/CD i klienckim. Odpowiadałem za koordynację testów i walidacji.",
        bullets: [
          'Kontrola testowania według ASPICE (SWE.4–SWE.6).',
          'Raportowanie i przekazywanie wyników testów.',
          'Poprawa jakości oprogramowania dla klientów.',
          'Zarządzanie zespołem dev i test. (01/2022 – 03/2023)',
          'Zarządzanie 2 zespołami testowymi.',
          'Tworzenie procesu SWE.5 jako Lider dyscypliny procesowej. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Inżynier oprogramowania',
        company: 'zf',
        meta: 'ZF Group • Styczeń 2019 – Kwiecień 2021 (2 lata 4 miesiące) • Łódź, Polska',
        summary: "Odpowiadałem za testowanie i automatyzację z Jenkins. Stworzyłem system CI/CD — około 10 projektów.",
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
      meta: 'Uniwersytet Nauk Informatycznych i Umiejętności • Październik 2015 – Lipiec 2019'
    },
    projects: {
      intro: 'Projekty open-source do nauki i rozwijania umiejętności:',
      list: [
        { name: 'go-scheduler', desc: 'Minimalistyczna biblioteka planisty dla Go. Planowanie zadań z czasem startu, czasem trwania i interwałem. Obsługa oczekiwania i ręcznego zatrzymania.' },
        { name: 'go-logging', desc: 'Biblioteka logowania dla Golang wzorowana na Python logger. 11 poziomów, loggery standardowe i strukturalne, wsparcie async, konfiguracja z JSON/YAML/XML.' },
        { name: 'workflows-manager', desc: 'Python CLI do uruchamiania niestandardowych workflow. Tworzenie workflow z reużywalnych kroków, definiowanie pipeline\'ów w konfiguracji.' }
      ]
    },
    humanLanguages: [
      { name: 'Angielski', levelKey: 'proWorking', level: 80 },
      { name: 'Polski', levelKey: 'fullPro', level: 90 },
      { name: 'Ukraiński', levelKey: 'native', level: 100 },
      { name: 'Rosyjski', levelKey: 'native', level: 100 },
      { name: 'Hiszpański', levelKey: 'elementary', level: 25 },
      { name: 'Włoski', levelKey: 'elementary', level: 25 }
    ],
    learning: { intro: 'DevOps, obserwowalność, SRE i rozszerzanie stacku.' },
    langLevel: { native: 'Ojczysty', fullPro: 'Pełny profesjonalny', proWorking: 'Biegłość zawodowa', elementary: 'Podstawowy' },
    actions: { downloadPdf: 'PDF', showMore: 'Pokaż więcej', showLess: 'Pokaż mniej', copyCv: 'Kopiuj', downloadVcard: 'Dodaj do kontaktów (vCard)', toastCopied: 'Skopiowano!', toastCvCopied: 'CV skopiowane!', toastPdfLoading: 'Ładowanie biblioteki PDF…', toastPdfFailed: 'Błąd PDF' },
    skipToMain: 'Przejdź do treści głównej'
  },
  es: {
    name: 'Dmytro Leshchenko',
    tagline: 'Ingeniero de software en Box • Częstochowa, Polonia',
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
      p2: "Actualmente Software Engineer en Box en el equipo observabilidad — construyo sistemas de procesamiento y logging de datos a gran escala. Me gusta aprender cosas nuevas. En mi tiempo libre viajo.",
      bullets: ["Apasionado por la programación, la gestión y la economía. Experiencia en testing, automatización y gestión de testing (SWE.4–SWE.6).", "Trabajo con Agile (SCRUM, Kanban, FDD) y waterfall.", "Software Engineer en Box (equipo observabilidad) — sistemas de procesamiento y logging de datos.", "Me gusta aprender — actualmente explorando nuevos idiomas. En mi tiempo libre viajo."]
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
      platformsLabel: 'Plataformas',
      noResults: 'No se encontraron habilidades'
    },
    experience: [
      {
        title: 'Ingeniero de observabilidad',
        company: 'box',
        meta: 'Box • Enero 2026 – Presente • Polonia',
        summary: "Integro IA (MCP, agentes) en las herramientas de observabilidad y me enfoco en métricas. Desarrollo logging MCPs para extender workflows, diseño alertas y dashboards para métricas del sistema, y creo herramientas de auto-validación para la infraestructura de monitoreo.",
        bullets: [
          'Construcción de herramientas de observabilidad con IA: servidores MCP y agentes.',
          'Desarrollo de logging MCPs para extender workflows.',
          'Diseño de alertas y dashboards para métricas y rendimiento.',
          'Colaboración con equipos para mejorar observabilidad.',
          'Herramientas de autovalidación de infraestructura observabilidad.'
        ]
      },
      {
        title: 'Ingeniero de software — Data Insights',
        company: 'box',
        meta: 'Box • Abril 2024 – Enero 2026 (1 año 9 meses) • Polonia',
        summary: "En el equipo Data Insights de Box's Data Platform construí y optimicé sistemas de procesamiento de datos. Participé en migraciones y mejoras de arquitectura.",
        bullets: [
          'Migración de Splunk a Google Cloud Logging (GCL).',
          'Transición arquitectónica a OpenTelemetry (OTel) daemonset.',
          'Componentes OTel personalizados para migración.',
          'Documentación para onboarding, workflows, arquitectura.',
          'Optimización de recursos (CPU, memoria).',
          'Dashboards y alertas para observabilidad.',
          'Simplificación de arquitectura con OTel.'
        ]
      },
      {
        title: 'Ingeniero de observabilidad',
        company: 'box',
        meta: 'Box • Marzo 2023 – Abril 2024 (1 año 2 meses) • Polonia',
        summary: "Trabajé con métricas, logs y distributed tracing. Diseñé sistemas de monitoreo.",
        bullets: [
          'Alertas y dashboards.',
          'Soluciones de búsqueda en logs.',
          'Pipelines para logs y métricas.',
          'Colaboración en observabilidad.',
          'Herramientas de autovalidación.'
        ]
      },
      {
        title: 'Líder de proyecto de software',
        company: 'zf',
        meta: 'ZF Group • Abril 2021 – Marzo 2023 (2 años) • Częstochowa, Polonia',
        summary: "Líder de proyecto de software en dos proyectos: CI/CD y cliente. Coordinación de testing y validación.",
        bullets: [
          'Control de testing según ASPICE (SWE.4–SWE.6).',
          'Informes y entrega de resultados de tests.',
          'Mejora de calidad de software para clientes.',
          'Gestión de equipos dev y test. (01/2022 – 03/2023)',
          'Gestión de 2 equipos de test.',
          'Creación de proceso SWE.5 como Líder de disciplina de proceso. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Ingeniero de software',
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
    projects: {
      intro: 'Proyectos open-source para practicar y ampliar habilidades:',
      list: [
        { name: 'go-scheduler', desc: 'Biblioteca minimalista de planificador para Go. Programa tareas con hora de inicio, duración e intervalo. Soporta espera y parada manual.' },
        { name: 'go-logging', desc: 'Biblioteca de logging para Golang inspirada en Python logger. 11 niveles, loggers estándar y estructurados, soporte async, config desde JSON/YAML/XML.' },
        { name: 'workflows-manager', desc: 'CLI de Python para ejecutar workflows personalizados. Crea workflows desde pasos reutilizables, define pipelines en config.' }
      ]
    },
    humanLanguages: [
      { name: 'Inglés', levelKey: 'proWorking', level: 80 },
      { name: 'Polaco', levelKey: 'fullPro', level: 90 },
      { name: 'Ucraniano', levelKey: 'native', level: 100 },
      { name: 'Ruso', levelKey: 'native', level: 100 },
      { name: 'Español', levelKey: 'elementary', level: 25 },
      { name: 'Italiano', levelKey: 'elementary', level: 25 }
    ],
    learning: { intro: 'DevOps, observabilidad, SRE y ampliación del stack.' },
    langLevel: { native: 'Nativo', fullPro: 'Profesional completo', proWorking: 'Profesional laboral', elementary: 'Elemental' },
    actions: { downloadPdf: 'PDF', showMore: 'Ver más', showLess: 'Ver menos', copyCv: 'Copiar', downloadVcard: 'Añadir a contactos (vCard)', toastCopied: '¡Copiado!', toastCvCopied: '¡CV copiado!', toastPdfLoading: 'Cargando biblioteca PDF…', toastPdfFailed: 'Error PDF' },
    skipToMain: 'Saltar al contenido principal'
  },
  it: {
    name: 'Dmytro Leshchenko',
    tagline: 'Ingegnere del software presso Box • Częstochowa, Polonia',
    nav: {
      about: 'Chi sono',
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
      about: 'Chi sono',
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
      p2: "Attualmente Software Engineer in Box nel team osservabilità — costruisco sistemi di elaborazione e logging dati su larga scala. Mi piace imparare. Nel tempo libero viaggio.",
      bullets: ["Appassionato di programmazione, management ed economia. Esperienza in testing, automazione e gestione testing (SWE.4–SWE.6).", "Lavoro con Agile (SCRUM, Kanban, FDD) e waterfall.", "Software Engineer in Box (team osservabilità) — sistemi di elaborazione e logging dati.", "Mi piace imparare — attualmente esploro nuove lingue. Nel tempo libero viaggio."]
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
      platformsLabel: 'Piattaforme',
      noResults: 'Nessuna competenza trovata'
    },
    experience: [
      {
        title: 'Ingegnere di osservabilità',
        company: 'box',
        meta: 'Box • Gennaio 2026 – Presente • Polonia',
        summary: "Integro IA (MCP, agenti) negli strumenti di osservabilità e mi concentro sulle metriche. Sviluppo logging MCPs per estendere i workflows, progetto alert e dashboard per le metriche di sistema, e creo strumenti di auto-validazione per l'infrastruttura di monitoraggio.",
        bullets: [
          'Costruzione di strumenti di osservabilità basati su IA: server MCP e agenti.',
          'Sviluppo di logging MCPs per estendere i workflows.',
          'Progettazione di alert e dashboard per metriche e prestazioni.',
          'Collaborazione con team per migliorare osservabilità.',
          'Strumenti di autovalidazione dell\'infrastruttura osservabilità.'
        ]
      },
      {
        title: 'Ingegnere del software — Data Insights',
        company: 'box',
        meta: 'Box • Aprile 2024 – Gennaio 2026 (1 anno 9 mesi) • Polonia',
        summary: "Nel team Data Insights di Box's Data Platform ho costruito e ottimizzato sistemi di elaborazione dati. Ho partecipato a migrazioni e miglioramenti architetturali.",
        bullets: [
          'Migrazione da Splunk a Google Cloud Logging (GCL).',
          'Transizione architetturale a OpenTelemetry (OTel) daemonset.',
          'Componenti OTel personalizzati per migrazione.',
          'Documentazione per onboarding, workflow, architettura.',
          'Ottimizzazione risorse (CPU, memoria).',
          'Dashboard e alert per osservabilità.',
          'Semplificazione architettura con OTel.'
        ]
      },
      {
        title: 'Ingegnere di osservabilità',
        company: 'box',
        meta: 'Box • Marzo 2023 – Aprile 2024 (1 anno 2 mesi) • Polonia',
        summary: "Lavorato con metriche, log e distributed tracing. Progettato sistemi di monitoraggio.",
        bullets: [
          'Alert e dashboard.',
          'Soluzioni di ricerca nei log.',
          'Pipeline per log e metriche.',
          'Collaborazione su osservabilità.',
          'Strumenti di autovalidazione.'
        ]
      },
      {
        title: 'Responsabile di progetto software',
        company: 'zf',
        meta: 'ZF Group • Aprile 2021 – Marzo 2023 (2 anni) • Częstochowa, Polonia',
        summary: "Responsabile di progetto software in due progetti: CI/CD e cliente. Coordinamento dei test e validazione.",
        bullets: [
          'Controllo testing secondo ASPICE (SWE.4–SWE.6).',
          'Report e consegna risultati test.',
          'Miglioramento qualità software per clienti.',
          'Gestione team dev e test. (01/2022 – 03/2023)',
          'Gestione 2 team di test.',
          'Creazione processo SWE.5 come Leader disciplina di processo. (06/2022 – 03/2023)'
        ]
      },
      {
        title: 'Ingegnere del software',
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
    projects: {
      intro: 'Progetti open-source per praticare e ampliare le competenze:',
      list: [
        { name: 'go-scheduler', desc: 'Libreria minimalista di scheduler per Go. Pianifica attività con orario di inizio, durata e intervallo. Supporta attesa e stop manuale.' },
        { name: 'go-logging', desc: 'Libreria di logging per Golang ispirata a Python logger. 11 livelli, logger standard e strutturati, supporto async, config da JSON/YAML/XML.' },
        { name: 'workflows-manager', desc: 'CLI Python per eseguire workflow personalizzati. Crea workflow da step riutilizzabili, definisci pipeline nel config.' }
      ]
    },
    humanLanguages: [
      { name: 'Inglese', levelKey: 'proWorking', level: 80 },
      { name: 'Polacco', levelKey: 'fullPro', level: 90 },
      { name: 'Ucraino', levelKey: 'native', level: 100 },
      { name: 'Russo', levelKey: 'native', level: 100 },
      { name: 'Spagnolo', levelKey: 'elementary', level: 25 },
      { name: 'Italiano', levelKey: 'elementary', level: 25 }
    ],
    learning: { intro: 'DevOps, osservabilità, SRE e ampliamento dello stack.' },
    langLevel: { native: 'Madrelingua', fullPro: 'Professionale completo', proWorking: 'Professionale lavorativo', elementary: 'Elementare' },
    actions: { downloadPdf: 'PDF', showMore: 'Mostra di più', showLess: 'Mostra meno', copyCv: 'Copia', downloadVcard: 'Aggiungi ai contatti (vCard)', toastCopied: 'Copiato!', toastCvCopied: 'CV copiato!', toastPdfLoading: 'Caricamento libreria PDF…', toastPdfFailed: 'Errore PDF' },
    skipToMain: 'Vai al contenuto principale'
  }
};
