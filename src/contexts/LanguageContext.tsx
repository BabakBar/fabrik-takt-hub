/* eslint-disable react-refresh/only-export-components -- Language state, route helpers, and the provider form one public API. */
import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useLocation, useNavigate } from '@/router';

export type Language = 'de' | 'en' | 'fa';

const copy = {
  de: {
    localeName: 'Deutsch',
    languageLabel: 'Sprache wählen',
    skipLink: 'Zum Inhalt springen',
    nav: {
      home: 'Start',
      capabilities: 'Leistungen',
      approach: 'Vorgehen',
      contact: 'Kontakt',
      menuOpen: 'Menü öffnen',
      menuClose: 'Menü schließen',
    },
    home: {
      seoTitle: 'FabrikTakt — KI-Systeme für die Fertigung',
      seoDescription:
        'FabrikTakt entwickelt praktische KI-, Daten- und Automatisierungssysteme für produzierende Unternehmen – vom fokussierten Pilotprojekt bis zum verlässlichen Betrieb.',
      hero: {
        eyebrow: 'Praxisnahe KI- und Datensysteme für die Fertigung',
        titleLead: 'Aus Daten wird',
        titleAccent: 'Handlungsfähigkeit.',
        intro:
          'Wir verbinden Produktionswissen, Maschinen- und Geschäftsdaten zu klaren Werkzeugen für Menschen, die jeden Tag Entscheidungen treffen müssen.',
        primary: 'Pilot besprechen',
        secondary: 'Leistungen ansehen',
        signalLabel: 'Produktionssignal',
        signalValue: 'Kontext erkannt',
        systemLabel: 'Entscheidungsebene',
        systemValue: 'Handlung priorisiert',
      },
      context: {
        eyebrow: 'Wo im Werk Zeit und Wissen verloren gehen',
        title: 'Mehr Daten lösen das Problem nicht. Nutzbarer Kontext schon.',
        intro:
          'In vielen Werken stecken entscheidende Informationen in Schichtbüchern, Tabellen, Köpfen und getrennten Systemen. FabrikTakt macht diese Zusammenhänge auffindbar, verständlich und handlungsrelevant.',
        items: [
          {
            number: '01',
            title: 'Wissen bleibt verfügbar',
            body: 'Erfahrungswissen wird strukturiert erfasst, statt mit Schichtwechseln oder Personalwechseln zu verschwinden.',
          },
          {
            number: '02',
            title: 'Signale bekommen Kontext',
            body: 'Maschinen-, Qualitäts- und Auftragsdaten werden in einer verständlichen betrieblichen Sicht zusammengeführt.',
          },
          {
            number: '03',
            title: 'Entscheidungen werden schneller',
            body: 'Teams sehen relevante Abweichungen, mögliche Ursachen und nächste Schritte, ohne weitere Dashboards durchsuchen zu müssen.',
          },
        ],
      },
      capabilities: {
        eyebrow: 'Was wir umsetzen',
        title: 'Pragmatische Lösungen für konkrete Herausforderungen.',
        intro:
          'Jedes Vorhaben beginnt mit einer konkreten betrieblichen Frage und endet mit einem Werkzeug, das in Prozesse, Verantwortlichkeiten und bestehende IT passt.',
        explore: 'Alle Leistungen',
        items: [
          {
            code: 'FT/01',
            title: 'Produktionsintelligenz',
            body: 'Abweichungen, Stillstände und Qualitätsmuster verständlich machen – mit Daten aus realen Produktionssystemen.',
            outcome: 'Von Signalen zu priorisierten Maßnahmen',
          },
          {
            code: 'FT/02',
            title: 'Wissenssysteme mit KI',
            body: 'Arbeitsanweisungen, Störungswissen und Dokumentation sicher durchsuchbar und im richtigen Kontext verfügbar machen.',
            outcome: 'Wissen dort, wo Entscheidungen fallen',
          },
          {
            code: 'FT/03',
            title: 'Daten- und Integrationsbasis',
            body: 'ERP, MES, IoT, Dateien und Cloud-Dienste in belastbaren Datenflüssen verbinden.',
            outcome: 'Eine verlässliche Grundlage statt Datensilos',
          },
          {
            code: 'FT/04',
            title: 'Operative Anwendungen',
            body: 'Schlanke Web-Anwendungen und Workflows für Shopfloor, Qualität, Instandhaltung und Führung.',
            outcome: 'Werkzeuge, die zum Arbeitsalltag passen',
          },
        ],
      },
      model: {
        eyebrow: 'Vom Problem zum Betrieb',
        title: 'Klein beginnen. Im Werk beweisen. Sauber skalieren.',
        intro:
          'Ein klarer Pilot reduziert Risiko und schafft belastbare Evidenz, bevor Architektur und Rollout größer werden.',
        phases: [
          {
            step: '01',
            title: 'Verstehen',
            body: 'Prozess, Datenlage, Nutzer und Erfolgskriterium gemeinsam präzisieren.',
          },
          {
            step: '02',
            title: 'Beweisen',
            body: 'Einen engen Anwendungsfall mit echten Daten und echten Anwendern umsetzen.',
          },
          {
            step: '03',
            title: 'Integrieren',
            body: 'Sicherheit, Schnittstellen, Verantwortlichkeiten und Betriebsmodell verankern.',
          },
          {
            step: '04',
            title: 'Betreiben',
            body: 'Nutzung, Qualität und Wirkung sichtbar machen und kontrolliert weiterentwickeln.',
          },
        ],
      },
      architecture: {
        eyebrow: 'Das FabrikTakt-Prinzip',
        title: 'Vom Shopfloor zur Entscheidung.',
        intro:
          'Wir ersetzen keine bewährten Systeme. Wir bauen die fehlende Kontextschicht, die ihre Informationen für Menschen und KI nutzbar macht.',
        nodes: ['ERP · MES · IoT · Dokumente', 'Kontext- und Wissensebene', 'Entscheidungswerkzeuge'],
        notes: ['An bestehende Systeme anschließen', 'Nachvollziehbare Daten und Antworten', 'Menschen behalten die Kontrolle'],
      },
      principles: {
        eyebrow: 'Für reale Bedingungen gebaut',
        title: 'Einfach im Einstieg. Verlässlich im Dauerbetrieb.',
        items: [
          {
            title: 'Human in the loop',
            body: 'KI unterstützt Entscheidungen; Verantwortung und Freigaben bleiben klar bei Menschen.',
          },
          {
            title: 'Bestehende IT respektieren',
            body: 'Wir integrieren schrittweise, statt funktionierende Kernsysteme unnötig zu ersetzen.',
          },
          {
            title: 'Nachvollziehbar liefern',
            body: 'Quellen, Annahmen, Systemzustand und Wirkung bleiben messbar und prüfbar.',
          },
          {
            title: 'Betrieb mitdenken',
            body: 'Sicherheit, Wartbarkeit und Verantwortlichkeiten gehören vom ersten Pilot an zur Lösung.',
          },
        ],
      },
      cta: {
        eyebrow: 'Ein konkretes Problem reicht',
        title: 'Wo verliert Ihr Team heute Zeit, Wissen oder Überblick?',
        body: 'In einem ersten Gespräch klären wir, ob ein fokussierter Pilot sinnvoll ist – offen, konkret und ohne Verkaufspräsentation.',
        primary: 'Problem schildern',
        secondary: 'Unser Vorgehen',
      },
    },
    capabilities: {
      seoTitle: 'Leistungen — FabrikTakt',
      seoDescription:
        'Produktionsintelligenz, KI-Wissenssysteme, Datenintegration und operative Anwendungen für die Fertigung.',
      eyebrow: 'Leistungen',
      title: 'Technologie, die an einer betrieblichen Frage beginnt.',
      intro:
        'Wir verbinden Fertigungsverständnis mit KI-, Daten- und Cloud-Engineering. Entscheidend ist nicht die Zahl der Technologien, sondern ob die Lösung im Arbeitsalltag verlässlich wirkt.',
      items: [
        {
          index: '01',
          title: 'Produktionsintelligenz',
          summary: 'Operative Signale in verständliche Zusammenhänge und priorisierte Maßnahmen übersetzen.',
          deliverables: ['OEE- und Stillstandskontext', 'Qualitäts- und Ursachenanalyse', 'Schicht- und Performance-Cockpits', 'Anomalie- und Ereignislogik'],
          fit: 'Wenn Daten vorhanden sind, aber Ursachen und nächste Schritte zu langsam sichtbar werden.',
        },
        {
          index: '02',
          title: 'KI-Wissenssysteme',
          summary: 'Verteiltes Fabrikwissen sicher auffindbar und kontextbezogen nutzbar machen.',
          deliverables: ['Semantische Suche', 'RAG- und Assistenzsysteme', 'Dokumenten- und Wissensflüsse', 'Quellenbasierte Antworten'],
          fit: 'Wenn Problemlösung von einzelnen Experten, Ordnern oder unverbundenen Dokumenten abhängt.',
        },
        {
          index: '03',
          title: 'Daten und Integration',
          summary: 'Eine belastbare Verbindung zwischen Shopfloor, Unternehmenssystemen und Analyse schaffen.',
          deliverables: ['ERP-/MES-/IoT-Integration', 'Datenpipelines und Modelle', 'APIs und Ereignisflüsse', 'Cloud- und Edge-Architektur'],
          fit: 'Wenn Datensilos Pilotprojekte ausbremsen oder manuelle Übergaben Fehler erzeugen.',
        },
        {
          index: '04',
          title: 'Operative Anwendungen',
          summary: 'Fokussierte digitale Werkzeuge für den konkreten Arbeitsablauf entwickeln.',
          deliverables: ['Shopfloor- und Quality-Apps', 'Interne Portale', 'Workflow-Automatisierung', 'Mobile und responsive Oberflächen'],
          fit: 'Wenn Standardsoftware den entscheidenden Ablauf nicht abbildet oder unnötige Reibung erzeugt.',
        },
      ],
      fitLabel: 'Passt besonders',
      deliverablesLabel: 'Typische Bausteine',
      closingTitle: 'Nicht sicher, wo der beste Einstieg liegt?',
      closingBody: 'Wir schneiden den ersten Anwendungsfall so zu, dass Nutzen, Datenbedarf und Betriebsrisiko früh sichtbar werden.',
      closingCta: 'Anwendungsfall besprechen',
    },
    approach: {
      seoTitle: 'Vorgehen — FabrikTakt',
      seoDescription:
        'Ein evidenzbasiertes Vorgehen für KI- und Datenprojekte in der Fertigung: verstehen, beweisen, integrieren und betreiben.',
      eyebrow: 'Vorgehen',
      title: 'Von der Frage zum belastbaren System.',
      intro:
        'Wir vermeiden große Transformationsversprechen ohne Beweis. Stattdessen schaffen wir in klaren Schritten technische und betriebliche Sicherheit.',
      phases: [
        {
          index: '01',
          title: 'Anwendungsfall schärfen',
          duration: 'Orientierung',
          body: 'Wir beobachten den realen Ablauf, definieren Nutzer und Entscheidung, prüfen verfügbare Daten und formulieren ein messbares Erfolgskriterium.',
          outputs: ['Problem- und Nutzerbild', 'Prüfung der Datenbasis', 'Pilotumfang', 'Erfolgskriterium'],
        },
        {
          index: '02',
          title: 'Pilot',
          duration: 'Praxisnachweis',
          body: 'Ein konkreter, funktionsfähiger Ablauf wird mit echten Daten aufgebaut und direkt mit den Anwendern erprobt.',
          outputs: ['Nutzbarer Arbeitsablauf', 'Technischer Durchstich', 'Feedback aus dem Betrieb', 'Entscheidungsgrundlage (Go / No-Go)'],
        },
        {
          index: '03',
          title: 'Produktionsreife',
          duration: 'Integration',
          body: 'Wir härten Datenflüsse, Zugriffe, Beobachtbarkeit, Fehlerbehandlung und Verantwortlichkeiten.',
          outputs: ['Zielarchitektur', 'Sicherheits- und Betriebskonzept', 'Integrationen', 'Abnahme- und Rolloutplan'],
        },
        {
          index: '04',
          title: 'Betrieb und Ausbau',
          duration: 'Wirkung',
          body: 'Nutzung und Ergebnis werden gemessen. Erweiterungen folgen nur dort, wo die Evidenz sie rechtfertigt.',
          outputs: ['Monitoring', 'Support- und Ownership-Modell', 'Wirkungsmessung', 'Priorisierte Roadmap'],
        },
      ],
      questionsTitle: 'Was wir früh klären',
      questions: [
        'Welche Entscheidung soll besser oder schneller werden?',
        'Wer nutzt das Ergebnis unter welchen Bedingungen?',
        'Welche Daten existieren tatsächlich – und in welcher Qualität?',
        'Was muss ein Pilot beweisen, damit eine Investition vertretbar ist?',
        'Wer verantwortet Lösung, Daten und Betrieb nach dem Pilot?',
      ],
      standardsTitle: 'Unsere Arbeitsprinzipien',
      standards: ['Echte Daten statt Demo-Daten', 'Echte Nutzer statt Stellvertreter', 'Sichtbare Annahmen statt Black Box', 'Kleine reversible Schritte', 'Betrieb als Teil des Designs'],
      ctaTitle: 'Bringen Sie die schwierige Frage mit.',
      ctaBody: 'Wir helfen, daraus einen prüfbaren ersten Schritt zu machen.',
      cta: 'Erstgespräch anfragen',
    },
    contact: {
      seoTitle: 'Kontakt — FabrikTakt',
      seoDescription: 'Besprechen Sie einen konkreten KI-, Daten- oder Automatisierungsfall in Ihrer Fertigung mit FabrikTakt.',
      eyebrow: 'Kontakt',
      title: 'Beginnen wir mit dem Problem, nicht mit dem Pitch.',
      intro:
        'Beschreiben Sie kurz den Prozess, die Reibung und das gewünschte Ergebnis. Wir antworten mit einer ehrlichen Einschätzung, ob und wie ein fokussierter Pilot sinnvoll ist.',
      directTitle: 'Lieber direkt schreiben?',
      directBody: 'E-Mail an',
      response: 'Üblicherweise erhalten Sie innerhalb von zwei Werktagen eine persönliche Antwort.',
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr Name',
        email: 'Geschäftliche E-Mail',
        emailPlaceholder: 'name@unternehmen.de',
        company: 'Unternehmen',
        companyPlaceholder: 'Unternehmen oder Werk',
        message: 'Was soll besser werden?',
        messagePlaceholder: 'Prozess, aktuelle Reibung, vorhandene Daten und gewünschtes Ergebnis …',
        consentLead: 'Ich habe die',
        consentLink: 'Datenschutzhinweise',
        consentTail: 'gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.',
        submit: 'Projektanfrage senden',
        submitting: 'Wird gesendet …',
        successTitle: 'Nachricht erhalten',
        successBody: 'Danke. Wir prüfen Ihre Anfrage und melden uns persönlich.',
        retry: 'Das hat nicht funktioniert. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@fabriktakt.com.',
        rateLimit: 'Zu viele Versuche. Bitte warten Sie einige Minuten oder schreiben Sie direkt per E-Mail.',
        configuration: 'Das Formular ist vorübergehend nicht verfügbar. Bitte schreiben Sie direkt an info@fabriktakt.com.',
        spam: 'Die Anfrage konnte nicht verarbeitet werden.',
      },
    },
    legal: {
      imprintSeoTitle: 'Impressum — FabrikTakt',
      imprintEyebrow: 'Rechtliches',
      imprintTitle: 'Impressum',
      providerTitle: 'Anbieter',
      providerLines: ['FabrikTakt', 'Unabhängige Technologiepraxis', 'Deutschland'],
      contactTitle: 'Kontakt',
      contactLines: ['E-Mail: info@fabriktakt.com', 'Website: https://fabriktakt.com'],
      editorialTitle: 'Verantwortlich für Inhalte',
      editorialBody: 'FabrikTakt, erreichbar über die oben genannte E-Mail-Adresse.',
      accuracyTitle: 'Hinweis',
      accuracyBody:
        'Die vollständige ladungsfähige Anschrift und rechtliche Betreiberbezeichnung müssen vor der geschäftlichen Veröffentlichung ergänzt und rechtlich geprüft werden.',
      privacySeoTitle: 'Datenschutz — FabrikTakt',
      privacyEyebrow: 'Datenschutz',
      privacyTitle: 'Datenschutzhinweise',
      privacyUpdated: 'Stand: 26. Juli 2026',
      privacySections: [
        {
          title: '1. Verantwortlicher',
          paragraphs: [
            'Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist FabrikTakt. Datenschutzanfragen können an info@fabriktakt.com gerichtet werden.',
          ],
        },
        {
          title: '2. Hosting und technische Bereitstellung',
          paragraphs: [
            'Beim Aufruf der Website verarbeitet die technische Infrastruktur notwendige Verbindungsdaten, insbesondere IP-Adresse, Zeitpunkt, angeforderte Ressource, Referrer sowie Browser- und Geräteinformationen. Dies ist erforderlich, um die Website sicher und zuverlässig auszuliefern und Missbrauch zu erkennen.',
            'Die Website wird auf Infrastruktur in Deutschland betrieben und über Cloudflare ausgeliefert. Cloudflare kann dabei als technischer Dienstleister Verbindungsdaten verarbeiten.',
          ],
        },
        {
          title: '3. Kontaktformular',
          paragraphs: [
            'Wenn Sie das Kontaktformular nutzen, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse, optional das Unternehmen sowie den Inhalt Ihrer Nachricht, um Ihre Anfrage zu prüfen und zu beantworten.',
            'Das Formular verwendet EmailJS Pte. Ltd. als technischen Übermittlungsdienst. Nach Angaben des Anbieters befinden sich die für den Dienst verwendeten Server in den USA. Bitte senden Sie keine besonderen Kategorien personenbezogener Daten oder vertrauliche Produktionsgeheimnisse über das Formular.',
            'Alternativ können Sie uns direkt per E-Mail kontaktieren. Formularangaben werden nur so lange aufbewahrt, wie dies zur Bearbeitung, für mögliche Anschlussfragen und aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist.',
          ],
        },
        {
          title: '4. Reichweitenmessung',
          paragraphs: [
            'Sofern die datensparsame Reichweitenmessung aktiviert ist, verwenden wir eine selbst betriebene Umami-Instanz. Es werden keine Werbeprofile erstellt und keine Daten an Werbenetzwerke verkauft.',
          ],
        },
        {
          title: '5. Ihre Rechte',
          paragraphs: [
            'Sie können im Rahmen der gesetzlichen Voraussetzungen Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit oder Widerspruch verlangen. Sie können sich außerdem bei einer zuständigen Datenschutzaufsichtsbehörde beschweren.',
            'Eine erteilte Einwilligung kann mit Wirkung für die Zukunft widerrufen werden. Schreiben Sie dafür an info@fabriktakt.com.',
          ],
        },
        {
          title: '6. Externe Inhalte',
          paragraphs: [
            'Die Website lädt keine Schriftarten von Google und bettet keine externen Social-Media-Inhalte ein. Externe Seiten werden erst geöffnet, wenn Sie einen entsprechenden Link auswählen.',
          ],
        },
      ],
    },
    notFound: {
      title: 'Seite nicht gefunden',
      body: 'Diese Adresse führt zu keiner Seite von FabrikTakt.',
      cta: 'Zur Startseite',
    },
    footer: {
      statement: 'Praktische KI- und Datensysteme für die Fertigung.',
      navigate: 'Navigation',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      rights: 'Alle Rechte vorbehalten.',
    },
  },
  en: {
    localeName: 'English',
    languageLabel: 'Choose language',
    skipLink: 'Skip to content',
    nav: {
      home: 'Home',
      capabilities: 'Capabilities',
      approach: 'Approach',
      contact: 'Contact',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    home: {
      seoTitle: 'FabrikTakt — AI systems for manufacturing',
      seoDescription:
        'FabrikTakt builds practical AI, data, and automation systems for manufacturers—from a focused pilot to reliable operations.',
      hero: {
        eyebrow: 'Manufacturing intelligence that works in practice',
        titleLead: 'Turn factory data into',
        titleAccent: 'operational clarity.',
        intro:
          'We connect production knowledge, machine signals, and business data into clear tools for the people making decisions every day.',
        primary: 'Discuss a pilot',
        secondary: 'Explore capabilities',
        signalLabel: 'Production signal',
        signalValue: 'Context identified',
        systemLabel: 'Decision layer',
        systemValue: 'Action prioritized',
      },
      context: {
        eyebrow: 'The operational gap',
        title: 'More data does not solve the problem. Usable context does.',
        intro:
          'In many plants, critical information lives in shift notes, spreadsheets, individual experience, and disconnected systems. FabrikTakt makes those relationships searchable, understandable, and useful in the moment.',
        items: [
          {
            number: '01',
            title: 'Knowledge stays available',
            body: 'Operational experience becomes structured and reusable instead of disappearing across shifts or staff changes.',
          },
          {
            number: '02',
            title: 'Signals gain context',
            body: 'Machine, quality, and order data come together in one understandable operational view.',
          },
          {
            number: '03',
            title: 'Decisions move faster',
            body: 'Teams see relevant deviations, likely causes, and next actions without searching through more dashboards.',
          },
        ],
      },
      capabilities: {
        eyebrow: 'What we build',
        title: 'Practical solutions for real factory problems.',
        intro:
          'Every engagement starts with a concrete operational question and ends with a tool that fits existing processes, responsibilities, and technology.',
        explore: 'View all capabilities',
        items: [
          {
            code: 'FT/01',
            title: 'Production intelligence',
            body: 'Make deviations, downtime, and quality patterns understandable using data from real production systems.',
            outcome: 'From signals to prioritized action',
          },
          {
            code: 'FT/02',
            title: 'AI knowledge systems',
            body: 'Make work instructions, troubleshooting knowledge, and documentation safely searchable in context.',
            outcome: 'Knowledge where decisions happen',
          },
          {
            code: 'FT/03',
            title: 'Data and integration foundations',
            body: 'Connect ERP, MES, IoT, files, and cloud services through reliable data flows.',
            outcome: 'A dependable foundation instead of silos',
          },
          {
            code: 'FT/04',
            title: 'Operational applications',
            body: 'Build focused web applications and workflows for shopfloor, quality, maintenance, and leadership.',
            outcome: 'Tools designed around the real work',
          },
        ],
      },
      model: {
        eyebrow: 'From problem to production',
        title: 'Start narrow. Prove it on the floor. Scale cleanly.',
        intro:
          'A focused pilot reduces risk and creates real evidence before architecture and rollout become larger.',
        phases: [
          {
            step: '01',
            title: 'Understand',
            body: 'Clarify the process, available data, users, and measurable success condition.',
          },
          {
            step: '02',
            title: 'Prove',
            body: 'Build one narrow use case with real data and the people who will use it.',
          },
          {
            step: '03',
            title: 'Integrate',
            body: 'Establish security, interfaces, ownership, and a sustainable operating model.',
          },
          {
            step: '04',
            title: 'Operate',
            body: 'Make adoption, quality, and impact visible, then expand with control.',
          },
        ],
      },
      architecture: {
        eyebrow: 'The FabrikTakt principle',
        title: 'Between the shopfloor and the decision layer.',
        intro:
          'We do not replace proven systems. We build the missing context layer that makes their information usable by people and AI.',
        nodes: ['ERP · MES · IoT · Documents', 'Context and knowledge layer', 'Decision tools'],
        notes: ['Connect to existing systems', 'Traceable data and answers', 'People remain in control'],
      },
      principles: {
        eyebrow: 'Built for real conditions',
        title: 'Simple to adopt. Reliable in production.',
        items: [
          {
            title: 'Human in the loop',
            body: 'AI supports decisions while responsibility and approvals remain clearly human.',
          },
          {
            title: 'Respect existing IT',
            body: 'We integrate in stages instead of replacing working core systems without cause.',
          },
          {
            title: 'Deliver traceably',
            body: 'Sources, assumptions, system state, and impact remain observable and auditable.',
          },
          {
            title: 'Design for operations',
            body: 'Security, maintainability, and ownership belong in the solution from the first pilot.',
          },
        ],
      },
      cta: {
        eyebrow: 'One concrete problem is enough',
        title: 'Where does your team lose time, knowledge, or visibility today?',
        body: 'In a first conversation, we determine whether a focused pilot makes sense—openly, concretely, and without a sales deck.',
        primary: 'Describe the problem',
        secondary: 'See our approach',
      },
    },
    capabilities: {
      seoTitle: 'Capabilities — FabrikTakt',
      seoDescription:
        'Production intelligence, AI knowledge systems, data integration, and operational applications for manufacturing.',
      eyebrow: 'Capabilities',
      title: 'Technology that starts with an operational question.',
      intro:
        'We combine manufacturing understanding with AI, data, and cloud engineering. The measure is not how many technologies we use, but whether the result works reliably in daily operations.',
      items: [
        {
          index: '01',
          title: 'Production intelligence',
          summary: 'Translate operational signals into understandable context and prioritized action.',
          deliverables: ['OEE and downtime context', 'Quality and root-cause analysis', 'Shift and performance cockpits', 'Anomaly and event logic'],
          fit: 'When data exists, but causes and next actions become visible too slowly.',
        },
        {
          index: '02',
          title: 'AI knowledge systems',
          summary: 'Make distributed factory knowledge safely searchable and useful in context.',
          deliverables: ['Semantic search', 'RAG and assistant systems', 'Document and knowledge flows', 'Source-grounded answers'],
          fit: 'When problem solving depends on individual experts, folders, or disconnected documents.',
        },
        {
          index: '03',
          title: 'Data and integration',
          summary: 'Create a dependable connection between shopfloor, enterprise systems, and analytics.',
          deliverables: ['ERP, MES, and IoT integration', 'Data pipelines and models', 'APIs and event flows', 'Cloud and edge architecture'],
          fit: 'When silos block pilots or manual handoffs introduce errors.',
        },
        {
          index: '04',
          title: 'Operational applications',
          summary: 'Build focused digital tools for the workflow that matters.',
          deliverables: ['Shopfloor and quality apps', 'Internal portals', 'Workflow automation', 'Mobile and responsive interfaces'],
          fit: 'When standard software misses the critical workflow or creates needless friction.',
        },
      ],
      fitLabel: 'Strong fit',
      deliverablesLabel: 'Typical building blocks',
      closingTitle: 'Not sure where the best starting point is?',
      closingBody: 'We shape the first use case so value, data needs, and operating risk become visible early.',
      closingCta: 'Discuss a use case',
    },
    approach: {
      seoTitle: 'Approach — FabrikTakt',
      seoDescription:
        'An evidence-led approach to AI and data projects in manufacturing: understand, prove, integrate, and operate.',
      eyebrow: 'Approach',
      title: 'From question to a dependable system.',
      intro:
        'We avoid transformation promises without proof. Clear stages create both technical and operational confidence.',
      phases: [
        {
          index: '01',
          title: 'Problem framing',
          duration: 'Orientation',
          body: 'We observe the real workflow, define the user and decision, inspect available data, and set a measurable success condition.',
          outputs: ['Problem and user frame', 'Data reality check', 'Pilot scope', 'Success condition'],
        },
        {
          index: '02',
          title: 'Pilot',
          duration: 'Evidence',
          body: 'A narrow functional path is built with real data and tested by the people expected to use it.',
          outputs: ['Usable workflow', 'Technical end-to-end path', 'Operational feedback', 'Go or no-go evidence'],
        },
        {
          index: '03',
          title: 'Production readiness',
          duration: 'Integration',
          body: 'We harden data flows, access, observability, error handling, and ownership.',
          outputs: ['Target architecture', 'Security and operating concept', 'Integrations', 'Acceptance and rollout plan'],
        },
        {
          index: '04',
          title: 'Operate and expand',
          duration: 'Impact',
          body: 'Adoption and outcomes are measured. Expansion follows only where the evidence supports it.',
          outputs: ['Monitoring', 'Support and ownership model', 'Impact measurement', 'Prioritized roadmap'],
        },
      ],
      questionsTitle: 'What we clarify early',
      questions: [
        'Which decision needs to become better or faster?',
        'Who uses the result, and under what conditions?',
        'Which data actually exists, and at what quality?',
        'What must a pilot prove to justify further investment?',
        'Who owns the solution, data, and operation after the pilot?',
      ],
      standardsTitle: 'How we work',
      standards: ['Real data over demo data', 'Real users over proxies', 'Visible assumptions over a black box', 'Small reversible steps', 'Operations as part of design'],
      ctaTitle: 'Bring the difficult question.',
      ctaBody: 'We will help turn it into a testable first step.',
      cta: 'Request a first conversation',
    },
    contact: {
      seoTitle: 'Contact — FabrikTakt',
      seoDescription: 'Discuss a concrete manufacturing AI, data, or automation use case with FabrikTakt.',
      eyebrow: 'Contact',
      title: 'Start with the problem, not the pitch.',
      intro:
        'Describe the workflow, the friction, and the outcome you need. We will reply with an honest view of whether and how a focused pilot could help.',
      directTitle: 'Prefer direct email?',
      directBody: 'Write to',
      response: 'You will usually receive a personal response within two business days.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Work email',
        emailPlaceholder: 'name@company.com',
        company: 'Company',
        companyPlaceholder: 'Company or plant',
        message: 'What needs to improve?',
        messagePlaceholder: 'Process, current friction, available data, and the outcome you need …',
        consentLead: 'I have read the',
        consentLink: 'privacy notice',
        consentTail: 'and agree that my details may be processed to respond to this request.',
        submit: 'Send project brief',
        submitting: 'Sending …',
        successTitle: 'Message received',
        successBody: 'Thank you. We will review your request and respond personally.',
        retry: 'That did not work. Please try again or email info@fabriktakt.com directly.',
        rateLimit: 'Too many attempts. Please wait a few minutes or contact us directly by email.',
        configuration: 'The form is temporarily unavailable. Please email info@fabriktakt.com directly.',
        spam: 'The request could not be processed.',
      },
    },
    legal: {
      imprintSeoTitle: 'Legal notice — FabrikTakt',
      imprintEyebrow: 'Legal',
      imprintTitle: 'Legal notice',
      providerTitle: 'Provider',
      providerLines: ['FabrikTakt', 'Independent technology practice', 'Germany'],
      contactTitle: 'Contact',
      contactLines: ['Email: info@fabriktakt.com', 'Website: https://fabriktakt.com'],
      editorialTitle: 'Responsible for editorial content',
      editorialBody: 'FabrikTakt, reachable through the email address above.',
      accuracyTitle: 'Important notice',
      accuracyBody:
        'The full service address and legal operator identity must be added and legally reviewed before commercial publication.',
      privacySeoTitle: 'Privacy — FabrikTakt',
      privacyEyebrow: 'Privacy',
      privacyTitle: 'Privacy notice',
      privacyUpdated: 'Updated: 26 July 2026',
      privacySections: [
        {
          title: '1. Controller',
          paragraphs: [
            'FabrikTakt is responsible for processing personal data on this website. Privacy requests can be sent to info@fabriktakt.com.',
          ],
        },
        {
          title: '2. Hosting and technical delivery',
          paragraphs: [
            'When you access this website, the technical infrastructure processes necessary connection data, particularly IP address, time, requested resource, referrer, and browser and device information. This is necessary to deliver the website reliably, protect it, and detect abuse.',
            'The website is operated on infrastructure in Germany and delivered through Cloudflare. Cloudflare may process connection data as a technical service provider.',
          ],
        },
        {
          title: '3. Contact form',
          paragraphs: [
            'If you use the contact form, we process your name, email address, optional company, and message to review and respond to your request.',
            'The form uses EmailJS Pte. Ltd. as a technical delivery service. According to the provider, servers used for the service are located in the United States. Do not send special categories of personal data or confidential production secrets through the form.',
            'You can contact us directly by email instead. Form data is kept only for as long as needed to handle the request, address follow-up questions, and comply with applicable retention duties.',
          ],
        },
        {
          title: '4. Audience measurement',
          paragraphs: [
            'If privacy-conscious audience measurement is enabled, we use a self-hosted Umami instance. We do not build advertising profiles or sell data to advertising networks.',
          ],
        },
        {
          title: '5. Your rights',
          paragraphs: [
            'Subject to legal requirements, you may request access, correction, deletion, restriction, portability, or object to processing. You may also complain to a competent data protection authority.',
            'You can withdraw consent for the future by writing to info@fabriktakt.com.',
          ],
        },
        {
          title: '6. External content',
          paragraphs: [
            'This website does not load fonts from Google or embed external social-media content. External websites are contacted only when you choose a corresponding link.',
          ],
        },
      ],
    },
    notFound: {
      title: 'Page not found',
      body: 'This address does not lead to a FabrikTakt page.',
      cta: 'Return home',
    },
    footer: {
      statement: 'Practical AI and data systems for manufacturing.',
      navigate: 'Navigate',
      legal: 'Legal',
      imprint: 'Legal notice',
      privacy: 'Privacy',
      rights: 'All rights reserved.',
    },
  },
  fa: {
    localeName: 'فارسی',
    languageLabel: 'انتخاب زبان',
    skipLink: 'رفتن به محتوای اصلی',
    nav: {
      home: 'خانه',
      capabilities: 'توانمندی‌ها',
      approach: 'روش کار',
      contact: 'تماس',
      menuOpen: 'باز کردن منو',
      menuClose: 'بستن منو',
    },
    home: {
      seoTitle: 'FabrikTakt — سامانه‌های هوش مصنوعی برای تولید',
      seoDescription:
        'FabrikTakt سامانه‌های کاربردی هوش مصنوعی، داده و اتوماسیون را برای شرکت‌های تولیدی، از پایلوت متمرکز تا بهره‌برداری پایدار، طراحی و پیاده‌سازی می‌کند.',
      hero: {
        eyebrow: 'هوش مصنوعی و سامانه‌های داده برای صنعت و تولید',
        titleLead: 'داده‌های کارخانه را به',
        titleAccent: 'شفافیت عملیاتی تبدیل کنید.',
        intro:
          'ما دانش تولید، سیگنال‌های ماشین و داده‌های کسب‌وکار را به ابزارهای روشن برای افرادی تبدیل می‌کنیم که هر روز تصمیم می‌گیرند.',
        primary: 'گفت‌وگو درباره پایلوت',
        secondary: 'مشاهده توانمندی‌ها',
        signalLabel: 'سیگنال تولید',
        signalValue: 'زمینه شناسایی شد',
        systemLabel: 'لایه تصمیم',
        systemValue: 'اقدام اولویت‌بندی شد',
      },
      context: {
        eyebrow: 'چالش پنهان در خط تولید',
        title: 'داده‌های بیشتر مشکل را حل نمی‌کند؛ داده‌های معنادار و کاربردی حل می‌کند.',
        intro:
          'در بسیاری از کارخانه‌ها، اطلاعات حیاتی میان گزارش شیفت، فایل‌های پراکنده، تجربه افراد و سامانه‌های جدا از هم پنهان است. FabrikTakt این ارتباط‌ها را قابل جست‌وجو، قابل فهم و قابل اقدام می‌کند.',
        items: [
          {
            number: '۰۱',
            title: 'دانش در دسترس می‌ماند',
            body: 'تجربه عملیاتی ساختارمند و قابل استفاده مجدد می‌شود و با تغییر شیفت یا نیروی انسانی از بین نمی‌رود.',
          },
          {
            number: '۰۲',
            title: 'سیگنال‌ها معنا می‌گیرند',
            body: 'داده‌های ماشین، کیفیت و سفارش در یک نمای عملیاتی روشن کنار هم قرار می‌گیرند.',
          },
          {
            number: '۰۳',
            title: 'تصمیم‌ها سریع‌تر می‌شوند',
            body: 'تیم‌ها انحراف مهم، علت‌های محتمل و اقدام بعدی را بدون جست‌وجو میان داشبوردهای بیشتر می‌بینند.',
          },
        ],
      },
      capabilities: {
        eyebrow: 'آنچه می‌سازیم',
        title: 'راهکارهای عملی برای چالش‌های واقعی تولید.',
        intro:
          'هر همکاری با یک پرسش عملیاتی مشخص آغاز می‌شود و با ابزاری پایان می‌یابد که با فرایندها، مسئولیت‌ها و فناوری موجود سازگار است.',
        explore: 'همه توانمندی‌ها',
        items: [
          {
            code: 'FT/01',
            title: 'هوشمندی تولید',
            body: 'انحراف، توقف و الگوهای کیفیت را با داده‌های واقعی سامانه‌های تولید قابل فهم می‌کنیم.',
            outcome: 'از سیگنال تا اقدام اولویت‌بندی‌شده',
          },
          {
            code: 'FT/02',
            title: 'سامانه‌های دانش هوشمند',
            body: 'دستورالعمل، تجربه رفع مشکل و مستندات را امن، قابل جست‌وجو و متناسب با زمینه در دسترس قرار می‌دهیم.',
            outcome: 'دانش در محل تصمیم‌گیری',
          },
          {
            code: 'FT/03',
            title: 'زیرساخت داده و یکپارچه‌سازی',
            body: 'ERP، MES، اینترنت اشیا، فایل‌ها و خدمات ابری را با جریان‌های داده پایدار متصل می‌کنیم.',
            outcome: 'پایه قابل اعتماد به جای جزیره‌های داده',
          },
          {
            code: 'FT/04',
            title: 'نرم‌افزارهای عملیاتی',
            body: 'نرم‌افزار و گردش‌کار متمرکز برای تولید، کیفیت، نگهداری و مدیریت می‌سازیم.',
            outcome: 'ابزار متناسب با کار واقعی',
          },
        ],
      },
      model: {
        eyebrow: 'از مسئله تا بهره‌برداری',
        title: 'محدود آغاز کنید، در کارخانه اثبات کنید، اصولی توسعه دهید.',
        intro:
          'یک پایلوت متمرکز، پیش از بزرگ شدن معماری و دامنه استقرار، ریسک را کاهش می‌دهد و شواهد واقعی ایجاد می‌کند.',
        phases: [
          {
            step: '۰۱',
            title: 'درک',
            body: 'فرایند، داده موجود، کاربر و معیار موفقیت را دقیق می‌کنیم.',
          },
          {
            step: '۰۲',
            title: 'اثبات',
            body: 'یک کاربرد محدود را با داده واقعی و کاربران واقعی می‌سازیم.',
          },
          {
            step: '۰۳',
            title: 'یکپارچه‌سازی',
            body: 'امنیت، رابط‌ها، مالکیت و مدل بهره‌برداری پایدار را تثبیت می‌کنیم.',
          },
          {
            step: '۰۴',
            title: 'بهره‌برداری',
            body: 'استفاده، کیفیت و اثر را قابل مشاهده می‌کنیم و سپس کنترل‌شده توسعه می‌دهیم.',
          },
        ],
      },
      architecture: {
        eyebrow: 'اصل FabrikTakt',
        title: 'میان کف کارخانه و لایه تصمیم.',
        intro:
          'ما سامانه‌های اثبات‌شده را جایگزین نمی‌کنیم؛ لایه زمینه‌ای را می‌سازیم که اطلاعات آن‌ها را برای انسان و هوش مصنوعی قابل استفاده می‌کند.',
        nodes: ['ERP · MES · IoT · اسناد', 'لایه زمینه و دانش', 'ابزارهای تصمیم'],
        notes: ['اتصال به سامانه‌های موجود', 'داده و پاسخ قابل ردیابی', 'کنترل در دست انسان'],
      },
      principles: {
        eyebrow: 'برای شرایط واقعی ساخته شده',
        title: 'شروع آسان، قابل اتکا و پایدار در خط تولید.',
        items: [
          {
            title: 'انسان در چرخه تصمیم',
            body: 'هوش مصنوعی تصمیم را پشتیبانی می‌کند؛ مسئولیت و تأیید نهایی روشن و انسانی می‌ماند.',
          },
          {
            title: 'احترام به فناوری موجود',
            body: 'به‌جای جایگزینی بی‌دلیل سامانه‌های اصلی، یکپارچه‌سازی را مرحله‌ای انجام می‌دهیم.',
          },
          {
            title: 'تحویل قابل ردیابی',
            body: 'منبع، فرض، وضعیت سامانه و اثر آن قابل مشاهده و ممیزی می‌ماند.',
          },
          {
            title: 'طراحی برای بهره‌برداری',
            body: 'امنیت، نگهداری‌پذیری و مالکیت از نخستین پایلوت بخشی از راه‌حل است.',
          },
        ],
      },
      cta: {
        eyebrow: 'یک مسئله مشخص کافی است',
        title: 'تیم شما امروز کجا زمان، دانش یا دید عملیاتی از دست می‌دهد؟',
        body: 'در گفت‌وگوی نخست، صریح و بدون ارائه فروش بررسی می‌کنیم که آیا یک پایلوت متمرکز منطقی است یا نه.',
        primary: 'شرح مسئله',
        secondary: 'روش کار ما',
      },
    },
    capabilities: {
      seoTitle: 'توانمندی‌ها — FabrikTakt',
      seoDescription:
        'هوشمندی تولید، سامانه‌های دانش هوشمند، یکپارچه‌سازی داده و نرم‌افزارهای عملیاتی برای صنعت.',
      eyebrow: 'توانمندی‌ها',
      title: 'فناوری که با یک پرسش عملیاتی آغاز می‌شود.',
      intro:
        'ما شناخت تولید را با مهندسی هوش مصنوعی، داده و ابر ترکیب می‌کنیم. معیار، تعداد فناوری‌ها نیست؛ کارکرد پایدار راه‌حل در عملیات روزمره است.',
      items: [
        {
          index: '۰۱',
          title: 'هوشمندی تولید',
          summary: 'سیگنال‌های عملیاتی را به زمینه قابل فهم و اقدام اولویت‌بندی‌شده تبدیل می‌کنیم.',
          deliverables: ['زمینه OEE و توقف', 'تحلیل کیفیت و علت ریشه‌ای', 'نمای شیفت و عملکرد', 'منطق رویداد و ناهنجاری'],
          fit: 'زمانی که داده وجود دارد اما علت و اقدام بعدی دیر آشکار می‌شود.',
        },
        {
          index: '۰۲',
          title: 'سامانه‌های دانش هوشمند',
          summary: 'دانش پراکنده کارخانه را امن، قابل جست‌وجو و متناسب با زمینه می‌کنیم.',
          deliverables: ['جست‌وجوی معنایی', 'سامانه‌های RAG و دستیار', 'جریان اسناد و دانش', 'پاسخ‌های مبتنی بر منبع'],
          fit: 'زمانی که حل مسئله به افراد خاص، پوشه‌ها یا اسناد جدا از هم وابسته است.',
        },
        {
          index: '۰۳',
          title: 'داده و یکپارچه‌سازی',
          summary: 'ارتباطی پایدار میان کف کارخانه، سامانه‌های سازمانی و تحلیل ایجاد می‌کنیم.',
          deliverables: ['یکپارچه‌سازی ERP، MES و IoT', 'خط لوله و مدل داده', 'API و جریان رویداد', 'معماری ابر و لبه'],
          fit: 'زمانی که جزیره‌های داده پایلوت را متوقف می‌کنند یا تحویل دستی خطا می‌سازد.',
        },
        {
          index: '۰۴',
          title: 'نرم‌افزارهای عملیاتی',
          summary: 'ابزار دیجیتال متمرکز برای گردش‌کاری که اهمیت دارد می‌سازیم.',
          deliverables: ['نرم‌افزار تولید و کیفیت', 'پرتال داخلی', 'اتوماسیون گردش‌کار', 'رابط واکنش‌گرا و موبایل'],
          fit: 'زمانی که نرم‌افزار استاندارد فرایند کلیدی را پوشش نمی‌دهد یا اصطکاک اضافی می‌سازد.',
        },
      ],
      fitLabel: 'مناسب برای',
      deliverablesLabel: 'اجزای معمول',
      closingTitle: 'نقطه شروع مناسب روشن نیست؟',
      closingBody: 'کاربرد نخست را طوری محدود می‌کنیم که ارزش، نیاز داده و ریسک بهره‌برداری زود آشکار شود.',
      closingCta: 'گفت‌وگو درباره کاربرد',
    },
    approach: {
      seoTitle: 'روش کار — FabrikTakt',
      seoDescription:
        'رویکرد مبتنی بر شواهد برای پروژه‌های هوش مصنوعی و داده در تولید: درک، اثبات، یکپارچه‌سازی و بهره‌برداری.',
      eyebrow: 'روش کار',
      title: 'از پرسش تا سامانه‌ای قابل اتکا.',
      intro:
        'از وعده تحول بدون اثبات پرهیز می‌کنیم. مراحل روشن، اطمینان فنی و عملیاتی را هم‌زمان ایجاد می‌کنند.',
      phases: [
        {
          index: '۰۱',
          title: 'تعریف مسئله',
          duration: 'بررسی اولیه',
          body: 'گردش‌کار واقعی را می‌بینیم، کاربر و تصمیم را تعریف می‌کنیم، داده موجود را می‌سنجیم و معیار موفقیت می‌گذاریم.',
          outputs: ['شناخت فرایند و کاربر', 'بررسی کیفیت و دسترسی داده‌ها', 'دامنه پایلوت', 'معیار موفقیت'],
        },
        {
          index: '۰۲',
          title: 'پایلوت',
          duration: 'اثبات عملی',
          body: 'یک نمونه کاربردی با داده‌های واقعی ساخته شده و توسط کاربران نهایی آزمایش می‌شود.',
          outputs: ['گردش‌کار قابل استفاده', 'مسیر فنی کامل', 'بازخورد عملیات', 'معیار روشن برای ادامه یا توقف (Go / No-Go)'],
        },
        {
          index: '۰۳',
          title: 'آمادگی تولید',
          duration: 'یکپارچه‌سازی',
          body: 'جریان داده، دسترسی، مشاهده‌پذیری، مدیریت خطا و مالکیت را مقاوم می‌کنیم.',
          outputs: ['معماری هدف', 'طرح امنیت و بهره‌برداری', 'یکپارچه‌سازی‌ها', 'برنامه پذیرش و استقرار'],
        },
        {
          index: '۰۴',
          title: 'بهره‌برداری و توسعه',
          duration: 'ارزیابی و نتیجه',
          body: 'استفاده و نتیجه اندازه‌گیری می‌شود و توسعه تنها بر پایه شواهد ادامه می‌یابد.',
          outputs: ['پایش', 'مدل پشتیبانی و مالکیت', 'سنجش اثر', 'نقشه راه اولویت‌بندی‌شده'],
        },
      ],
      questionsTitle: 'آنچه زود روشن می‌کنیم',
      questions: [
        'کدام تصمیم باید بهتر یا سریع‌تر شود؟',
        'چه کسی و در چه شرایطی از نتیجه استفاده می‌کند؟',
        'کدام داده واقعاً وجود دارد و کیفیت آن چیست؟',
        'پایلوت چه چیزی را باید اثبات کند تا سرمایه‌گذاری بعدی منطقی باشد؟',
        'پس از پایلوت چه کسی مالک راه‌حل، داده و بهره‌برداری است؟',
      ],
      standardsTitle: 'اصول همکاری',
      standards: ['داده واقعی به جای داده نمایشی', 'کاربر واقعی به جای نماینده', 'فرض روشن به جای جعبه سیاه', 'گام‌های کوچک و برگشت‌پذیر', 'بهره‌برداری به‌عنوان بخشی از طراحی'],
      ctaTitle: 'پرسش دشوار را همراه بیاورید.',
      ctaBody: 'کمک می‌کنیم آن را به نخستین گام قابل آزمون تبدیل کنید.',
      cta: 'درخواست گفت‌وگوی نخست',
    },
    contact: {
      seoTitle: 'تماس — FabrikTakt',
      seoDescription: 'درباره یک کاربرد مشخص هوش مصنوعی، داده یا اتوماسیون در تولید با FabrikTakt گفت‌وگو کنید.',
      eyebrow: 'تماس',
      title: 'با مسئله آغاز کنیم، نه ارائه فروش.',
      intro:
        'گردش‌کار، اصطکاک و نتیجه مورد نیاز را کوتاه شرح دهید. صادقانه پاسخ می‌دهیم که آیا یک پایلوت متمرکز مفید است و چگونه.',
      directTitle: 'ایمیل مستقیم را ترجیح می‌دهید؟',
      directBody: 'بنویسید به',
      response: 'معمولاً طی دو روز کاری پاسخ شخصی دریافت خواهید کرد.',
      form: {
        name: 'نام',
        namePlaceholder: 'نام شما',
        email: 'ایمیل کاری',
        emailPlaceholder: 'name@company.com',
        company: 'شرکت',
        companyPlaceholder: 'شرکت یا کارخانه',
        message: 'چه چیزی باید بهتر شود؟',
        messagePlaceholder: 'فرایند، اصطکاک فعلی، داده موجود و نتیجه مورد نیاز …',
        consentLead: '',
        consentLink: 'اطلاعیه حریم خصوصی',
        consentTail: 'را خوانده‌ام و با پردازش اطلاعاتم برای پاسخ به این درخواست موافقم.',
        submit: 'ارسال شرح پروژه',
        submitting: 'در حال ارسال …',
        successTitle: 'پیام دریافت شد',
        successBody: 'سپاسگزاریم. درخواست شما را بررسی می‌کنیم و شخصاً پاسخ می‌دهیم.',
        retry: 'ارسال انجام نشد. دوباره تلاش کنید یا مستقیماً به info@fabriktakt.com ایمیل بزنید.',
        rateLimit: 'تلاش‌های زیادی انجام شده است. چند دقیقه صبر کنید یا مستقیماً ایمیل بزنید.',
        configuration: 'فرم موقتاً در دسترس نیست. مستقیماً به info@fabriktakt.com ایمیل بزنید.',
        spam: 'امکان پردازش درخواست وجود ندارد.',
      },
    },
    legal: {
      imprintSeoTitle: 'اطلاعات حقوقی — FabrikTakt',
      imprintEyebrow: 'حقوقی',
      imprintTitle: 'اطلاعات حقوقی',
      providerTitle: 'ارائه‌دهنده',
      providerLines: ['FabrikTakt', 'فعالیت مستقل فناوری', 'آلمان'],
      contactTitle: 'تماس',
      contactLines: ['ایمیل: info@fabriktakt.com', 'وب‌سایت: https://fabriktakt.com'],
      editorialTitle: 'مسئول محتوای تحریریه',
      editorialBody: 'FabrikTakt، از طریق ایمیل بالا در دسترس است.',
      accuracyTitle: 'توجه مهم',
      accuracyBody:
        'نشانی کامل قابل ابلاغ و هویت حقوقی بهره‌بردار باید پیش از انتشار تجاری افزوده و از نظر حقوقی بررسی شود.',
      privacySeoTitle: 'حریم خصوصی — FabrikTakt',
      privacyEyebrow: 'حریم خصوصی',
      privacyTitle: 'اطلاعیه حریم خصوصی',
      privacyUpdated: 'به‌روزرسانی: ۲۶ ژوئیه ۲۰۲۶',
      privacySections: [
        {
          title: '۱. مسئول پردازش',
          paragraphs: [
            'FabrikTakt مسئول پردازش داده‌های شخصی در این وب‌سایت است. درخواست‌های مربوط به حریم خصوصی را می‌توان به info@fabriktakt.com ارسال کرد.',
          ],
        },
        {
          title: '۲. میزبانی و ارائه فنی',
          paragraphs: [
            'هنگام بازدید، زیرساخت فنی داده‌های ضروری اتصال، از جمله نشانی IP، زمان، منبع درخواست‌شده، ارجاع‌دهنده و اطلاعات مرورگر و دستگاه را برای ارائه امن و پایدار وب‌سایت و شناسایی سوءاستفاده پردازش می‌کند.',
            'وب‌سایت روی زیرساختی در آلمان میزبانی و از طریق Cloudflare ارائه می‌شود. Cloudflare ممکن است به‌عنوان ارائه‌دهنده فنی داده‌های اتصال را پردازش کند.',
          ],
        },
        {
          title: '۳. فرم تماس',
          paragraphs: [
            'در صورت استفاده از فرم، نام، ایمیل، شرکت اختیاری و پیام شما را برای بررسی و پاسخ به درخواست پردازش می‌کنیم.',
            'فرم از EmailJS Pte. Ltd. برای انتقال فنی استفاده می‌کند. بنا بر اعلام ارائه‌دهنده، سرورهای این خدمت در ایالات متحده قرار دارند. اطلاعات حساس شخصی یا اسرار محرمانه تولید را از طریق فرم ارسال نکنید.',
            'می‌توانید مستقیماً ایمیل بزنید. داده فرم تنها تا زمانی نگهداری می‌شود که برای رسیدگی، پرسش‌های بعدی و الزامات قانونی نگهداری لازم باشد.',
          ],
        },
        {
          title: '۴. سنجش بازدید',
          paragraphs: [
            'در صورت فعال بودن سنجش کم‌داده، از نمونه میزبانی‌شده Umami استفاده می‌کنیم. پروفایل تبلیغاتی ساخته نمی‌شود و داده‌ای به شبکه‌های تبلیغاتی فروخته نمی‌شود.',
          ],
        },
        {
          title: '۵. حقوق شما',
          paragraphs: [
            'در چارچوب شرایط قانونی می‌توانید دسترسی، اصلاح، حذف، محدودیت، انتقال داده یا اعتراض را درخواست کنید. همچنین حق شکایت نزد مرجع صالح حفاظت از داده را دارید.',
            'رضایت خود را می‌توانید برای آینده با ایمیل به info@fabriktakt.com پس بگیرید.',
          ],
        },
        {
          title: '۶. محتوای خارجی',
          paragraphs: [
            'این وب‌سایت فونتی از Google بارگذاری نمی‌کند و محتوای شبکه اجتماعی خارجی را تعبیه نمی‌کند. تنها با انتخاب پیوند مربوط به وب‌سایت خارجی متصل می‌شوید.',
          ],
        },
      ],
    },
    notFound: {
      title: 'صفحه پیدا نشد',
      body: 'این نشانی به صفحه‌ای از FabrikTakt منتهی نمی‌شود.',
      cta: 'بازگشت به خانه',
    },
    footer: {
      statement: 'سامانه‌های کاربردی هوش مصنوعی و داده برای تولید.',
      navigate: 'دسترسی',
      legal: 'حقوقی',
      imprint: 'اطلاعات حقوقی',
      privacy: 'حریم خصوصی',
      rights: 'تمام حقوق محفوظ است.',
    },
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: (typeof copy)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const localePrefixPattern = /^\/(de|en|fa)(?=\/|$)/;

const languageFromPath = (pathname: string): Language => {
  const locale = pathname.match(localePrefixPattern)?.[1];
  return locale === 'de' || locale === 'fa' ? locale : 'en';
};

export const localizedPath = (pathname: string, language: Language): string => {
  const strippedPath = pathname.replace(localePrefixPattern, '') || '/';
  const normalizedPath = strippedPath === '/' ? '/' : `${strippedPath.replace(/\/+$/, '')}/`;

  if (language === 'en') {
    return normalizedPath;
  }

  return normalizedPath === '/' ? `/${language}/` : `/${language}${normalizedPath}`;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = languageFromPath(location.pathname);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    if (!/^\/en(?=\/|$)/.test(location.pathname)) return;

    navigate(
      {
        pathname: localizedPath(location.pathname, 'en'),
        search: location.search,
        hash: location.hash,
      },
      { replace: true },
    );
  }, [location.hash, location.pathname, location.search, navigate]);

  const setLanguage = (nextLanguage: Language) => {
    navigate({
      pathname: localizedPath(location.pathname, nextLanguage),
      search: location.search,
      hash: location.hash,
    });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, copy: copy[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
