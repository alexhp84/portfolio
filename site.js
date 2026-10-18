
        const GITHUB_USERNAME = 'alexhp84';

        const translations = {
            en: {
                eyebrow: "INFRASTRUCTURE · AUTOMATION · AI",
                navLabel: "Portfolio navigation", navHeading: "Menu",
                navHome: "Home", navAbout: "About Me", navAi: "AI & Security",
                navSkills: "Technical Skills", navProjects: "Projects", navMonitoring: "Monitoring", navCertificates: "Certificates", navOverview: "Overview", navBook: "Book a Meeting", scheduleInterview: "📅 Schedule an Interview", bookTitle: "Book a Meeting or Schedule an Interview", bookIntro: "Pick a time that suits you for an introductory call or an interview. Bookings go straight into my calendar.", bookOpen: "Open in Calendly ↗", navSections: "On this page", navSectionsLabel: "On this page",
                projectsPageEyebrow: "PROJECTS · BUILDING · EXPERIMENTATION",
                monitoringPageEyebrow: "OBSERVABILITY · ALERTING · HOMELAB",
                projectsPageTitle: "Projects & Technical Demonstrations",
                monitoringDetailTitle: "What the demo covers",
                projectsPageIntro: "A selection of public code projects and a separate home-lab monitoring demonstration. Live-demo links are shown only where a deployment is available.",
                monitoringPageTitle: "Monitoring & Alerting Demo",
                monitoringPageIntro: "A self-built observability stack with synthetic data for safe portfolio demonstrations.",
                viewProjects: "Explore Projects ↗",
                name: "Alexander Henry Patnick",
                role: "Systems & Technical Infrastructure Specialist",
                summary: "Technical leader with 10+ years of infrastructure engineering experience spanning enterprise IT, SaaS ecosystems, and deep systems analysis. Expert at root cause investigations, API debugging, infrastructure topology visualisation, and designing automated workflows that reduce manual ticketing overhead by 33%.",
                skillsLabel: "CORE CAPABILITIES",
                skill1: "Python & Scripting", skill2: "AI Agents & LLM Integration",
                skill3: "Machine Learning Projects", skill4: "REST APIs, HTTP & Webhooks",
                skill5: "Linux, Docker & Proxmox", skill6: "Monitoring & Observability",
                skill7: "Security Fundamentals & Access Control", skill8: "Cloud & PostgreSQL",
                contact: "✉ Contact Me by Email", viewCv: "📄 View CV",
                downloadCv: "⬇ Download CV", certificates: "🏅 View Certificates",
                bioTitle: "A Little About Me",
                bio1: "Originally from Sheffield, England, I made Aliyah to Israel in 2014, and Israel is now home. Family is a big part of my life, and outside work I enjoy spending time with my family, reading, and continuing to learn new things.",
                bio2: "I'm naturally curious about how things work and enjoy getting hands-on with technology. My homelab is where I can experiment, explore new ideas, and learn by building. From virtualisation and Proxmox to Docker, self-hosted services, monitoring, automation, and local AI models, I enjoy bringing different technologies together to build a connected, reliable environment. I tend to take a practical, logical approach to challenges: understand the problem, experiment with solutions, and keep refining until things work as they should.",
                bio3: "Looking ahead, I'm particularly interested in exploring more advanced automation and AI projects, finding new ways to make systems smarter and everyday tasks simpler. When I'm not tinkering with technology, you'll often find me following Sheffield Wednesday and England in football, or Yorkshire and England in cricket.",
                projectsTitle: "Open Source Projects",
                liveDemoLabel: "Open live demo ↗",
                monitoringDemoTitle: "Monitoring & Alerting Portfolio Demo",
                monitoringDemoIntro: "A self-built monitoring and alerting stack running in my home environment, assembled with Docker Compose. Prometheus evaluates metrics and alert rules, Alertmanager routes notifications to Alerta, PostgreSQL stores Alerta data, Grafana provides dashboards, and Loki/Promtail collect logs. The portfolio view uses dummy metrics and synthetic alerts so real home infrastructure details are not exposed.",
                monitoringMetricsTitle: "Metrics & dashboards",
                monitoringMetricsText: "Prometheus scrapes a synthetic exporter; Grafana is used to explore and visualise the resulting metrics.",
                monitoringAlertsTitle: "Alert lifecycle",
                monitoringAlertsText: "Alertmanager sends firing and resolved events to Alerta. Both open alerts and a resolved alert have been verified end to end.",
                monitoringLogsTitle: "Logs & containers",
                monitoringLogsText: "Loki and Promtail are part of the stack for centralised logs, with services managed using Docker Compose.",
                monitoringTestingTitle: "Testable scenarios",
                monitoringTestingText: "Synthetic rules demonstrate disk, CPU, network, database and backup alert scenarios for a portfolio walkthrough.",
                monitoringLinksTitle: "Home-hosted monitoring interfaces",
                monitoringLinksIntro: "These links point to services in my home environment. Availability depends on my home lab, Cloudflare Tunnel and access policy; authorised access may be required.",
                monitoringGrafanaDashboardsTitle: "Grafana dashboards",
                monitoringGrafanaDashboardsIntro: "Interactive, read-only public dashboards using the portfolio's synthetic monitoring data.",
                monitoringOpenGrafanaFull: "Open Grafana ↗",
                monitoringDashboardHomelabTitle: "Homelab overview",
                monitoringDashboardNetworkTitle: "Network & VLANs",
                monitoringDashboardLogsTitle: "Logs & incidents",
                monitoringOpenDashboard: "Open dashboard in new tab ↗",
                monitoringGrafanaEmbedNote: "If an embedded dashboard is blocked by browser security headers, use its “Open dashboard in new tab” link. Grafana may need iframe embedding enabled in its server configuration.",
                monitoringAlertaEmbedTitle: "Alerta incidents",
                monitoringAlertaEmbedIntro: "Live alert and incident interface. Alertmanager is not embedded on this page.",
                monitoringOpenAlertaFull: "Open Alerta ↗",
                monitoringAlertaEmbedNote: "If Alerta refuses to load inside the frame, open it in a new tab. The service must permit framing from this portfolio site.",
                monitoringGrafanaAccessTitle: "Grafana demo login",
                monitoringGrafanaAccessIntro: "Use only for the portfolio demonstration. The public dashboard embeds above should not require these credentials.",
                monitoringGrafanaUsername: "Username",
                monitoringGrafanaPassword: "Password",
                monitoringGrafanaCredentialWarning: "These credentials are public on this page and in its source code. Use them only for a restricted demo account and never reuse this password elsewhere.",
                monitoringLinkGrafana: "Open Grafana ↗", monitoringLinkPrometheus: "Open Prometheus ↗",
                monitoringLinkAlertmanager: "Open Alertmanager ↗", monitoringLinkAlerta: "Open Alerta ↗",
                monitoringNotificationsNote: "WhatsApp notifications via WAHA and email/SMTP notifications via Postfix are configured in my home environment. Those notification integrations are not replicated in this portfolio demo.",
                monitoringDemoNote: "This is a self-built home-lab project. The demo intentionally uses dummy metrics and synthetic alerts for security; it does not expose real device telemetry or claim real infrastructure faults. WhatsApp via WAHA and email/SMTP via Postfix are configured at home but are not replicated here.",
                monitoringLiveTitle: "Live demo snapshot",
                monitoringLiveIntro: "A read-only summary from the home-lab demo. Only synthetic metrics and alerts are returned; raw labels and internal addresses are not exposed.",
                monitoringLiveLoading: "Loading demo data…",
                monitoringLiveUnavailable: "Live demo data is temporarily unavailable. The static project overview is still available.",
                monitoringOpenAlertsLabel: "Open alerts",
                monitoringCriticalLabel: "Critical",
                monitoringWarningLabel: "Warning",
                monitoringResolvedLabel: "Resolved",
                monitoringCpuTitle: "Synthetic CPU readings",
                monitoringDiskTitle: "Synthetic disk readings",
                monitoringDeviceTitle: "Synthetic device status",
                monitoringRecentAlertsTitle: "Open demo alerts",
                monitoringNoSamples: "No sample readings returned.",
                monitoringNoOpenAlerts: "No open demo alerts right now.",
                monitoringUpdatedPrefix: "Last updated: ",
                monitoringPrometheusStatus: "Prometheus",
                monitoringAlertaStatus: "Alerta",
                monitoringConnected: "Connected",
                monitoringUnavailable: "Unavailable",
                monitoringLivePartial: "Partially available — one or more data sources could not be reached.",
                monitoringLiveReady: "Live demo data connected",
                monitoringSeverityCritical: "Critical",
                monitoringSeverityWarning: "Warning",
                monitoringSeverityNormal: "Normal",
                monitoringSeverityOther: "Info",
                monitoringStatusOpen: "Open",
                monitoringStatusAck: "Acknowledged",
                monitoringStatusClosed: "Closed",
                monitoringSyntheticDisclosure: "This public summary is intentionally limited to synthetic demo metrics and Demo-prefixed alerts. It is not a live view of real home devices.",
                technicalSkillsTitle: "Technical Skills & Applied Experience",
                technicalSkillsIntro: "A mix of professional engineering experience and hands-on personal projects. Project-based AI and machine-learning skills are presented as practical development experience, not as years of commercial AI employment.",
                pythonCardTitle: "Python & Application Development",
                pythonCardText: "Building and troubleshooting Python applications and small web apps, including Flask and Streamlit projects.",
                mlCardTitle: "Machine Learning & Data Analysis",
                mlCardText: "Project work includes a loan-approval prediction application and clustering experiments, including model retraining and cluster evaluation.",
                llmCardTitle: "LLMs & AI Agents",
                llmCardText: "Experimenting with local LLMs and API-based model access, and developing a modular agent with tool integrations, configuration, retrieval, memory, and documentation capabilities.",
                apiCardTitle: "APIs, Integrations & Data",
                apiCardText: "Professional experience diagnosing integrations and project experience building and testing application components.",
                infraCardTitle: "Infrastructure & Observability",
                infraCardText: "Hands-on homelab experience operating services and building monitoring and logging across virtualised and containerised environments.",
                securitySkillsTitle: "Security & Reliable Operations",
                securitySkillsText: "Experience with access controls, secure remote access, incident investigation and recovery documentation; developing AI security skills through study and practical labs.",
                aiFocusTitle: "AI Development & Security Focus",
                aiFocusIntro: "I'm building on my infrastructure and troubleshooting background through practical AI development projects, with a particular interest in AI security and early-stage product teams.",
                aiCardTitle: "AI Development & Automation",
                aiCardText: "Hands-on experimentation with Python, AI-assisted workflows, local language models, and agent-based automation.",
                securityCardTitle: "AI Security Foundations",
                securityCardText: "Developing security knowledge through SecAI courses and practical labs, supported by experience with access controls, secure remote access, and troubleshooting integrations.",
                engineeringCardTitle: "Software & Infrastructure",
                engineeringCardText: "A practical engineering foundation for investigating behaviour across applications, APIs, logs, networks, and Linux-based environments.",
                projectCardTitle: "Monitoring Demo & AI Agent",
                projectCardText: "The monitoring demo now routes synthetic Prometheus alerts through Alertmanager into Alerta and records resolved alerts. A separate read-only homelab AI agent is in development; autonomous diagnosis and self-healing remain planned.",
                languageButton: "עברית" 
            },
            he: {
                eyebrow: "תשתיות · אוטומציה · בינה מלאכותית",
                navLabel: "ניווט באתר", navHeading: "תפריט",
                navHome: "ראשי", navAbout: "קצת עליי", navAi: "בינה מלאכותית ואבטחה",
                navSkills: "מיומנויות טכניות", navProjects: "פרויקטים", navMonitoring: "ניטור", navCertificates: "תעודות", navOverview: "סקירה", navBook: "קביעת פגישה", scheduleInterview: "📅 קביעת ראיון", bookTitle: "קביעת פגישה או ראיון", bookIntro: "בחרו זמן שנוח לכם לשיחת היכרות או לראיון. הפגישה נקבעת ישירות ביומן שלי.", bookOpen: "פתיחה ב-Calendly ↗", navSections: "בעמוד זה", navSectionsLabel: "ניווט בתוך העמוד",
                projectsPageEyebrow: "פרויקטים · בנייה · התנסות",
                monitoringPageEyebrow: "תצפיתיות · התראות · מעבדת בית",
                projectsPageTitle: "פרויקטים והדגמות טכניות",
                monitoringDetailTitle: "מה כוללת ההדגמה",
                projectsPageIntro: "מבחר פרויקטים בקוד ציבורי והדגמת ניטור נפרדת ממעבדת הבית. קישורים להדגמות חיות מוצגים רק כשקיימת פריסה זמינה.",
                monitoringPageTitle: "הדגמת ניטור והתראות",
                monitoringPageIntro: "מערך תצפיתיות שבניתי בעצמי, עם נתונים סינתטיים להדגמות בטוחות בתיק העבודות.",
                viewProjects: "לצפייה בפרויקטים ↗",
                name: "אלכסנדר הנרי פטניק",
                role: "מומחה למערכות ולתשתיות טכנולוגיות",
                summary: "מוביל טכנולוגי עם יותר מעשר שנות ניסיון בהנדסת תשתיות, בסביבות IT ארגוניות, במערכות SaaS ובניתוח מערכות מעמיק. מתמחה בחקירת גורמי שורש, בניפוי תקלות API, בהמחשת טופולוגיית תשתיות ובתכנון תהליכי עבודה אוטומטיים שהפחיתו את היקף הטיפול הידני בכרטיסי תמיכה ב־33%.",
                skillsLabel: "יכולות מרכזיות",
                skill1: "Python וסקריפטים", skill2: "סוכני AI ואינטגרציה עם מודלי שפה",
                skill3: "פרויקטים בלמידת מכונה", skill4: "REST API, HTTP ו־Webhooks",
                skill5: "Linux, Docker ו־Proxmox", skill6: "ניטור ותצפיתיות",
                skill7: "יסודות אבטחה ובקרת גישה", skill8: "ענן ו־PostgreSQL",
                contact: "✉ יצירת קשר בדוא״ל", viewCv: "📄 צפייה בקורות החיים",
                downloadCv: "⬇ הורדת קורות החיים", certificates: "🏅 צפייה בתעודות",
                bioTitle: "קצת עליי",
                bio1: "במקור משפילד שבאנגליה, עליתי לישראל בשנת 2014, וישראל היא כיום הבית שלי. המשפחה היא חלק חשוב בחיי, ומחוץ לעבודה אני נהנה לבלות עם המשפחה, לקרוא ולהמשיך ללמוד דברים חדשים.",
                bio2: "אני סקרן מטבעי לגבי אופן הפעולה של דברים ואוהב להתנסות בטכנולוגיה באופן מעשי. מעבדת הבית שלי מאפשרת לי להתנסות, לחקור רעיונות חדשים וללמוד תוך כדי בנייה. מווירטואליזציה ו־Proxmox ועד Docker, שירותים באירוח עצמי, ניטור, אוטומציה ומודלי AI מקומיים — אני נהנה לשלב טכנולוגיות שונות בסביבה מחוברת ואמינה. אני ניגש לאתגרים בצורה מעשית והגיונית: להבין את הבעיה, לבדוק פתרונות ולשפר אותם עד שהכול עובד כמצופה.",
                bio3: "בהמשך, מעניין אותי במיוחד לחקור פרויקטים מתקדמים יותר בתחום האוטומציה וה־AI ולמצוא דרכים להפוך מערכות לחכמות יותר ולפשט משימות יומיומיות. כשאני לא מתעסק בטכנולוגיה, אפשר למצוא אותי עוקב אחרי שפילד ונסדיי ונבחרת אנגליה בכדורגל, או אחרי יורקשייר ואנגליה בקריקט.",
                projectsTitle: "פרויקטים בקוד פתוח",
                liveDemoLabel: "פתיחת הדגמה חיה ↗",
                monitoringDemoTitle: "פרויקט הדגמה לניטור ולהתראות",
                monitoringDemoIntro: "מערכת ניטור והתראות שבניתי בעצמי ופועלת בסביבת הבית שלי, באמצעות Docker Compose. Prometheus בודק מדדים וכללי התראה, Alertmanager מנתב התראות אל Alerta, PostgreSQL שומר את הנתונים, Grafana מציג לוחות מחוונים ו־Loki/Promtail אוספים לוגים. בתצוגת התיק נעשה שימוש במדדים ובנתוני התראה מדומים כדי לא לחשוף פרטים אמיתיים על תשתית הבית.",
                monitoringMetricsTitle: "מדדים ולוחות מחוונים",
                monitoringMetricsText: "Prometheus אוסף מדדים מ־exporter סינתטי, ו־Grafana משמש לחקירתם ולהצגתם.",
                monitoringAlertsTitle: "מחזור חיי ההתראה",
                monitoringAlertsText: "Alertmanager שולח ל־Alerta התראות פעילות והתראות שנפתרו. נבדקה מקצה לקצה הגעה של התראות פתוחות וגם של התראה שנפתרה.",
                monitoringLogsTitle: "לוגים וקונטיינרים",
                monitoringLogsText: "Loki ו־Promtail הם חלק מהמערך לאיסוף לוגים מרכזי, והשירותים מנוהלים באמצעות Docker Compose.",
                monitoringTestingTitle: "תרחישים הניתנים לבדיקה",
                monitoringTestingText: "כללים סינתטיים מדגימים תרחישי התראה עבור דיסק, מעבד, רשת, מסד נתונים וגיבוי.",
                monitoringLinksTitle: "ממשקי ניטור המתארחים בסביבת הבית",
                monitoringLinksIntro: "הקישורים מובילים לשירותים בסביבת הבית שלי. הזמינות תלויה במעבדת הבית, ב־Cloudflare Tunnel ובהגדרות הגישה; ייתכן שתידרש הרשאה.",
                monitoringGrafanaDashboardsTitle: "לוחות מחוונים של Grafana",
                monitoringGrafanaDashboardsIntro: "לוחות מחוונים ציבוריים ואינטראקטיביים לקריאה בלבד, המציגים נתוני ניטור סינתטיים של תיק העבודות.",
                monitoringOpenGrafanaFull: "פתיחת Grafana ↗",
                monitoringDashboardHomelabTitle: "סקירת מעבדת הבית",
                monitoringDashboardNetworkTitle: "רשתות ו־VLANs",
                monitoringDashboardLogsTitle: "לוגים ותקריות",
                monitoringOpenDashboard: "פתיחת לוח מחוונים בכרטיסייה חדשה ↗",
                monitoringGrafanaEmbedNote: "אם כותרות אבטחה בדפדפן חוסמות הטמעה, השתמשו בקישור לפתיחת לוח המחוונים בכרטיסייה חדשה. ייתכן שיהיה צורך לאפשר הטמעה ב־iframe בהגדרות שרת Grafana.",
                monitoringAlertaEmbedTitle: "תקריות Alerta",
                monitoringAlertaEmbedIntro: "ממשק חי להתראות ולתקריות. Alertmanager אינו מוטמע בעמוד זה.",
                monitoringOpenAlertaFull: "פתיחת Alerta ↗",
                monitoringAlertaEmbedNote: "אם Alerta לא נטען בתוך המסגרת, פתחו אותו בכרטיסייה חדשה. השירות חייב לאפשר הטמעה מאתר תיק העבודות.",
                monitoringGrafanaAccessTitle: "פרטי כניסה להדגמת Grafana",
                monitoringGrafanaAccessIntro: "לשימוש בהדגמת תיק העבודות בלבד. לוחות המחוונים הציבוריים המוטמעים למעלה לא אמורים לדרוש פרטים אלה.",
                monitoringGrafanaUsername: "שם משתמש",
                monitoringGrafanaPassword: "סיסמה",
                monitoringGrafanaCredentialWarning: "פרטים אלה גלויים לציבור בעמוד ובקוד המקור שלו. השתמשו בהם רק עבור חשבון הדגמה מוגבל ואל תשתמשו בסיסמה זו במקום אחר.",
                monitoringLinkGrafana: "פתיחת Grafana ↗", monitoringLinkPrometheus: "פתיחת Prometheus ↗",
                monitoringLinkAlertmanager: "פתיחת Alertmanager ↗", monitoringLinkAlerta: "פתיחת Alerta ↗",
                monitoringNotificationsNote: "התראות WhatsApp באמצעות WAHA והתראות דוא״ל/SMTP באמצעות Postfix מוגדרות בסביבת הבית שלי. אינטגרציות ההתראות האלה אינן משוכפלות בהדגמה שבתיק העבודות.",
                monitoringDemoNote: "זהו פרויקט שבניתי בעצמי במעבדת הבית. מטעמי אבטחה, ההדגמה משתמשת במדדים ובהתראות סינתטיים ומדומים; היא אינה חושפת נתוני טלמטריה אמיתיים ואינה טוענת לקיומן של תקלות אמיתיות. התראות WhatsApp באמצעות WAHA ודוא״ל/SMTP באמצעות Postfix מוגדרות בבית, אך אינן משוכפלות כאן.",
                monitoringLiveTitle: "תמונת מצב חיה של ההדגמה",
                monitoringLiveIntro: "סיכום לקריאה בלבד ממערכת ההדגמה במעבדת הבית. מוחזרים רק מדדים והתראות סינתטיים; תוויות גולמיות וכתובות פנימיות אינן נחשפות.",
                monitoringLiveLoading: "טוען נתוני הדגמה…",
                monitoringLiveUnavailable: "נתוני ההדגמה החיים אינם זמינים כרגע. סקירת הפרויקט הסטטית עדיין זמינה.",
                monitoringOpenAlertsLabel: "התראות פתוחות",
                monitoringCriticalLabel: "קריטיות",
                monitoringWarningLabel: "אזהרה",
                monitoringResolvedLabel: "נפתרו",
                monitoringCpuTitle: "מדידות מעבד סינתטיות",
                monitoringDiskTitle: "מדידות דיסק סינתטיות",
                monitoringDeviceTitle: "מצב התקנים סינתטיים",
                monitoringRecentAlertsTitle: "התראות הדגמה פתוחות",
                monitoringNoSamples: "לא התקבלו מדידות לדוגמה.",
                monitoringNoOpenAlerts: "אין כרגע התראות הדגמה פתוחות.",
                monitoringUpdatedPrefix: "עודכן לאחרונה: ",
                monitoringPrometheusStatus: "Prometheus",
                monitoringAlertaStatus: "Alerta",
                monitoringConnected: "מחובר",
                monitoringUnavailable: "לא זמין",
                monitoringLivePartial: "זמין חלקית — לא ניתן להגיע לאחד או יותר ממקורות הנתונים.",
                monitoringLiveReady: "נתוני ההדגמה החיים מחוברים",
                monitoringSeverityCritical: "קריטי",
                monitoringSeverityWarning: "אזהרה",
                monitoringSeverityNormal: "תקין",
                monitoringSeverityOther: "מידע",
                monitoringStatusOpen: "פתוח",
                monitoringStatusAck: "אושר",
                monitoringStatusClosed: "נסגר",
                monitoringSyntheticDisclosure: "הסיכום הציבורי מוגבל בכוונה למדדים סינתטיים של ההדגמה ולהתראות ששמן מתחיל ב־Demo. זו אינה תצוגה חיה של מכשירי הבית האמיתיים.",
                technicalSkillsTitle: "מיומנויות טכניות וניסיון מעשי",
                technicalSkillsIntro: "שילוב של ניסיון הנדסי מקצועי ופרויקטים אישיים מעשיים. מיומנויות AI ולמידת מכונה מוצגות כניסיון פיתוח מעשי בפרויקטים, ולא כשנות ניסיון מסחרי בתחום.",
                pythonCardTitle: "Python ופיתוח יישומים",
                pythonCardText: "פיתוח ופתרון תקלות ביישומי Python וביישומי Web קטנים, כולל פרויקטים עם Flask ו־Streamlit.",
                mlCardTitle: "למידת מכונה וניתוח נתונים",
                mlCardText: "הפרויקטים כוללים יישום לחיזוי אישור הלוואות וניסויי קיבוץ נתונים, לרבות אימון מחדש של מודלים והערכת אשכולות.",
                llmCardTitle: "מודלי שפה וסוכני AI",
                llmCardText: "התנסות במודלי שפה מקומיים ובגישה למודלים דרך API, ופיתוח סוכן מודולרי עם אינטגרציות לכלים, הגדרות, אחזור מידע, זיכרון ותיעוד.",
                apiCardTitle: "ממשקי API, אינטגרציות ונתונים",
                apiCardText: "ניסיון מקצועי באבחון אינטגרציות וניסיון בפרויקטים בבנייה ובבדיקה של רכיבי יישומים.",
                infraCardTitle: "תשתיות וניטור",
                infraCardText: "ניסיון מעשי במעבדת בית בהפעלת שירותים ובבניית ניטור ואיסוף לוגים בסביבות וירטואליות ומבוססות קונטיינרים.",
                securitySkillsTitle: "אבטחה ותפעול אמין",
                securitySkillsText: "ניסיון בבקרת גישה, בגישה מרחוק מאובטחת, בחקירת תקלות ובתיעוד התאוששות; פיתוח מיומנויות באבטחת AI באמצעות לימוד ומעבדות מעשיות.",
                aiFocusTitle: "התמקדות בפיתוח AI ואבטחה",
                aiFocusIntro: "אני מרחיב את הניסיון שלי בתשתיות ובפתרון תקלות באמצעות פרויקטים מעשיים בפיתוח AI, ומתעניין במיוחד באבטחת AI ובעבודה בצוותי מוצר בשלבים מוקדמים.",
                aiCardTitle: "פיתוח AI ואוטומציה",
                aiCardText: "התנסות מעשית ב־Python, בתהליכי עבודה בסיוע AI, במודלי שפה מקומיים ובאוטומציה מבוססת סוכנים.",
                securityCardTitle: "יסודות אבטחת AI",
                securityCardText: "העמקת הידע באבטחה באמצעות קורסי SecAI ומעבדות מעשיות, לצד ניסיון בבקרת גישה, בגישה מרחוק מאובטחת ובפתרון תקלות אינטגרציה.",
                engineeringCardTitle: "תוכנה ותשתיות",
                engineeringCardText: "בסיס הנדסי מעשי לחקירת התנהגות של יישומים, ממשקי API, יומני מערכת, רשתות וסביבות מבוססות Linux.",
                projectCardTitle: "הדגמת ניטור וסוכן AI",
                projectCardText: "מערך הניטור מדגים שליחת התראות Prometheus סינתטיות דרך Alertmanager אל Alerta ותיעוד של התראות שנפתרו. סוכן AI נפרד עם גישה לקריאה בלבד נמצא בפיתוח; אבחון אוטונומי וריפוי עצמי עדיין מתוכננים.",
                languageButton: "English" 
            }
        };

        function setLanguage(language) {
            const copy = translations[language] || translations.en;
            document.documentElement.lang = language;
            document.documentElement.dir = language === "he" ? "rtl" : "ltr";
            document.querySelectorAll("[data-i18n]").forEach(element => {
                const key = element.dataset.i18n;
                if (copy[key]) element.textContent = copy[key];
            });
            const toggle = document.getElementById("language-toggle");
            toggle.textContent = copy.languageButton;
            toggle.setAttribute("aria-label", language === "he" ? "Switch to English" : "Switch to Hebrew");
            toggle.dataset.currentLanguage = language;
            document.querySelectorAll("[data-i18n-aria]").forEach(element => {
                const key = element.dataset.i18nAria;
                if (copy[key]) element.setAttribute("aria-label", copy[key]);
            });
            document.querySelectorAll(".repo-action-live").forEach(link => {
                link.textContent = copy.liveDemoLabel || translations.en.liveDemoLabel;
            });
            document.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language } }));
        }

        document.getElementById("language-toggle").addEventListener("click", () => {
            const toggle = document.getElementById("language-toggle");
            setLanguage((toggle.dataset.currentLanguage || "en") === "en" ? "he" : "en");
        });
        setLanguage("en");

        // Section nav ("On this page"): scroll-spy over same-page anchors.
        const navLinks = Array.from(document.querySelectorAll(".section-nav a[href^='#']"));
        const navTargets = navLinks.map(link => {
            const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
            return target ? { link, target } : null;
        }).filter(Boolean);

        function setActiveNav(activeTarget) {
            navTargets.forEach(({ link, target }) => {
                const isActive = target === activeTarget;
                link.classList.toggle("active", isActive);
                if (isActive) link.setAttribute("aria-current", "location");
                else link.removeAttribute("aria-current");
            });
        }

        if (navTargets.length) {
            const topbar = document.querySelector(".topbar");
            let navLock = false, lockTimer, ticking = false;
            const update = () => {
                ticking = false;
                if (navLock) return;
                const offset = (topbar ? topbar.offsetHeight : 56) + 32;
                let current = navTargets[0].target;
                for (const { target } of navTargets) {
                    if (target.getBoundingClientRect().top <= offset) current = target;
                }
                if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
                    current = navTargets[navTargets.length - 1].target;
                }
                setActiveNav(current);
            };
            const unlock = () => { navLock = false; update(); };
            navTargets.forEach(({ link, target }) => {
                link.addEventListener("click", () => {
                    setActiveNav(target);
                    navLock = true; clearTimeout(lockTimer);
                    lockTimer = setTimeout(unlock, 1200); // fallback if scrollend is unsupported
                });
            });
            window.addEventListener("scrollend", () => { clearTimeout(lockTimer); if (navLock) unlock(); });
            window.addEventListener("scroll", () => {
                if (!ticking) { ticking = true; requestAnimationFrame(update); }
            }, { passive: true });
            window.addEventListener("resize", update);
            update();
        }

        // Calendly: load the third-party script only when the booking section is near the viewport.
        const calendlyEl = document.querySelector(".calendly-inline-widget");
        if (calendlyEl) {
            const loadCalendly = () => {
                if (document.getElementById("calendly-script")) return;
                const s = document.createElement("script");
                s.id = "calendly-script"; s.async = true;
                s.src = "https://assets.calendly.com/assets/external/widget.js";
                document.body.appendChild(s);
            };
            if ("IntersectionObserver" in window) {
                const io = new IntersectionObserver(entries => {
                    if (entries.some(e => e.isIntersecting)) { loadCalendly(); io.disconnect(); }
                }, { rootMargin: "600px 0px" });
                io.observe(calendlyEl);
            } else { loadCalendly(); }
        }

        const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

        // Live demos are maintained separately from GitHub metadata so the cards can link to deployed apps.
        const LIVE_DEMOS = {
            "loan-site": "https://loan.patnick.click",
            "models-project": "https://models.patnick.click",
            "lotterypicker---israel": "https://lottery.patnick.click"
        };

        async function fetchGitHubRepos() {
            const container = document.getElementById('repos-container');
            if (!container) return; // The repository grid exists only on projects.html.
            try {
                const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
                if (!response.ok) throw new Error('GitHub API request failed');

                const repos = await response.json();
                container.innerHTML = '';

                const myPublicRepos = repos.filter(repo => !repo.fork && repo.name !== 'portfolio');

                if (myPublicRepos.length === 0) {
                    container.innerHTML = '<p style="color: #727e91; font-family: var(--font-mono);">No public repositories found.</p>';
                    return;
                }

                myPublicRepos.forEach(repo => {
                    const card = document.createElement('div');
                    card.className = 'repo-card';

                    const description = repo.description || 'No description provided.';
                    const language = repo.language || 'Other';
                    const demoUrl = LIVE_DEMOS[String(repo.name || '').toLowerCase()];
                    const liveDemoLabel = (translations[document.documentElement.lang] || translations.en).liveDemoLabel;

                    card.innerHTML = `
                        <div>
                            <a class="repo-name" href="${esc(repo.html_url)}" target="_blank" rel="noopener">${esc(repo.name)}</a>
                            <p class="repo-desc">${esc(description)}</p>
                            ${demoUrl ? `<div class="repo-actions"><a class="repo-action repo-action-live" href="${esc(demoUrl)}" target="_blank" rel="noopener">${esc(liveDemoLabel)}</a></div>` : ''}
                        </div>
                        <div class="repo-meta">
                            <span class="meta-item"><span class="repo-lang-dot"></span>${esc(language)}</span>
                            <span class="meta-item">⭐ ${repo.stargazers_count}</span>
                        </div>`;
                    container.appendChild(card);
                });
            } catch (error) {
                console.error(error);
                container.innerHTML = '<p style="color: #727e91; font-family: var(--font-mono);">Could not load GitHub repositories. Please try again later.</p>';
            }
        }
        fetchGitHubRepos();
    