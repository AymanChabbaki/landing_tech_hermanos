import { ServiceType } from '@/types'

export type Locale = 'fr' | 'ar'

export interface Content {
  meta: {
    title: string
    description: string
  }
  topbar: {
    items: string[]
  }
  nav: {
    links: { label: string; href: string }[]
    cta: string
  }
  hero: {
    eyebrow: string
    heading: { before: string; highlight: string; after: string }
    subtitle: string
    vslLabel: string
    vslPlay: string
    ctaPrimary: string
    ctaWhatsapp: string
    trust: string[]
  }
  audience: {
    label: string
    heading: string
    items: string[]
  }
  pains: {
    label: string
    heading: string
    items: { title: string; text: string }[]
    bridge: string
    cta: string
  }
  services: {
    label: string
    heading: string
    sub: string
    items: { id: ServiceType; title: string; text: string; bullets: string[] }[]
    cta: string
  }
  comparison: {
    stat: {
      label: string
      number: number
      suffix: string
      description: string
    }
    label: string
    heading: string
    withoutTitle: string
    withTitle: string
    vipTag: string
    without: string[]
    withUs: string[]
  }
  process: {
    label: string
    heading: string
    steps: { title: string; text: string }[]
    cta: string
  }
  portfolio: {
    label: string
    heading: string
    sub: string
    playLabel: string
    pauseLabel: string
    soundOnLabel: string
    soundOffLabel: string
    expandLabel: string
  }
  faq: {
    label: string
    heading: string
    items: { q: string; a: string }[]
  }
  form: {
    label: string
    heading: string
    sub: string
    perksTitle: string
    perks: string[]
    scarcity: string
    firstName: { label: string; placeholder: string }
    lastName: { label: string; placeholder: string }
    whatsapp: { label: string; placeholder: string }
    service: { label: string; placeholder: string }
    serviceOptions: { id: ServiceType; label: string }[]
    success: string
    error: string
    submit: string
    privacy: string
    orWhatsapp: string
    whatsappCta: string
    whatsappMessage: {
      title: string
      firstName: string
      lastName: string
      whatsapp: string
      service: string
      unspecified: string
    }
  }
  footer: {
    tagline: string
    navTitle: string
    servicesTitle: string
    contactTitle: string
    address: string
    copyrightSuffix: string
    legal: { privacy: string; terms: string }
  }
  stickyCta: {
    primary: string
    whatsapp: string
  }
  /* Pre-filled text when a visitor taps a WhatsApp button */
  whatsappGreeting: string
}

export const translations: Record<Locale, Content> = {
  fr: {
    meta: {
      title: 'Tech Hermanos | Site Web, App & Publicité · Consultation gratuite',
      description:
        "Site web, application, système sur mesure et publicité : une seule équipe pour transformer votre idée ou votre business en machine à clients. Consultation gratuite, réponse sous 24h.",
    },
    topbar: {
      items: ['Consultation gratuite', 'Réponse WhatsApp sous 24h', 'Places limitées ce mois-ci'],
    },
    nav: {
      links: [
        { label: 'Accueil', href: '#home' },
        { label: 'Services', href: '#services' },
        { label: 'Réalisations', href: '#portfolio' },
        { label: 'FAQ', href: '#faq' },
      ],
      cta: 'Consultation gratuite',
    },
    hero: {
      eyebrow: 'Site Web · Application · Système · Publicité',
      heading: {
        before: 'Transformez votre idée ou votre business en',
        highlight: 'machine à clients',
        after: '.',
      },
      subtitle:
        "Une seule équipe s'occupe de tout : votre site, votre application, votre système de gestion et vos publicités. Que vous débutiez ou que vous soyez déjà installé, on construit ce qui vous ramène des clients.",
      vslLabel: "Regardez d'abord cette courte vidéo",
      vslPlay: 'Lancer la vidéo',
      ctaPrimary: 'Je réserve ma consultation gratuite',
      ctaWhatsapp: 'Écrire sur WhatsApp',
      trust: ['100% gratuit', 'Réponse sous 24h', 'Sans engagement'],
    },
    audience: {
      label: 'Pour qui ?',
      heading: 'Quelle que soit votre activité, on a la solution digitale qu’il vous faut',
      items: [
        'Commerçants & boutiques',
        'Restaurants & cafés',
        'E-commerce & marques',
        'Médecins, avocats & libéraux',
        'Coachs & formateurs',
        'Startups & PME',
        'Porteurs de projet',
      ],
    },
    pains: {
      label: 'Vous vous reconnaissez ?',
      heading: 'Si un de ces points vous parle, cette page est faite pour vous',
      items: [
        {
          title: 'Vos clients ne vous trouvent pas en ligne',
          text: 'Pas de site, ou un site que personne ne visite. Pendant ce temps, vos concurrents récupèrent les clients qui vous cherchent.',
        },
        {
          title: 'Vous perdez des heures sur des tâches manuelles',
          text: 'Commandes sur WhatsApp, stock sur papier, factures sur Excel… Votre business tourne grâce à vous, pas grâce à un système.',
        },
        {
          title: 'Vos pubs coûtent cher et ne rapportent rien',
          text: 'Vous boostez des publications au hasard. Résultat : des likes, mais pas de clients ni de ventes.',
        },
        {
          title: 'Vous avez une idée mais ne savez pas par où commencer',
          text: 'Une app, une plateforme, une boutique en ligne… Le projet est là, mais la technique vous bloque.',
        },
      ],
      bridge: 'Bonne nouvelle : chacun de ces problèmes a une solution. Et on s’en occupe pour vous.',
      cta: 'Je veux une solution',
    },
    services: {
      label: 'Nos services',
      heading: 'Tout ce dont votre business a besoin pour grandir, au même endroit',
      sub: 'Choisissez un service ou combinez-les : une seule équipe, un seul interlocuteur, zéro prise de tête.',
      items: [
        {
          id: 'web',
          title: 'Site Web & E-commerce',
          text: 'Un site rapide, beau et pensé pour vendre : site vitrine, boutique en ligne ou landing page.',
          bullets: ['Design sur mesure', 'Optimisé mobile & Google', 'Commandes & paiement en ligne'],
        },
        {
          id: 'app',
          title: 'Application Mobile',
          text: 'Votre app iOS et Android pour fidéliser vos clients et vendre directement dans leur poche.',
          bullets: ['iOS & Android', 'Notifications push', 'Publication sur les stores'],
        },
        {
          id: 'system',
          title: 'Système sur mesure',
          text: 'Stock, commandes, réservations, clients : automatisez tout ce qui vous fait perdre du temps.',
          bullets: ['Tableau de bord clair', 'Automatisation des tâches', 'Accès pour toute l’équipe'],
        },
        {
          id: 'ads',
          title: 'Publicité & Acquisition',
          text: 'Des campagnes Facebook, Instagram, TikTok et Google pilotées pour ramener des clients, pas des likes.',
          bullets: ['Stratégie & ciblage', 'Création des visuels', 'Suivi des résultats'],
        },
      ],
      cta: 'Demander ce service',
    },
    comparison: {
      stat: {
        label: 'Le Constat',
        /* Placeholder figure, swap for a real, sourced number before launch */
        number: 90,
        suffix: '%',
        description:
          "des entreprises qui réussissent leur transformation digitale s'appuient sur une seule équipe experte plutôt que plusieurs prestataires séparés.",
      },
      label: 'Avant / Après',
      heading: 'Avec ou sans Tech Hermanos, le résultat change tout',
      withoutTitle: 'Sans Tech Hermanos',
      withTitle: 'Avec Tech Hermanos',
      vipTag: 'Recommandé',
      without: [
        'Un site amateur qui ne convertit pas vos visiteurs en clients',
        'Des prestataires différents pour le web, l’app et les pubs, zéro cohérence',
        'Des délais qui s’éternisent et une communication qui s’arrête',
        'Un budget pub dépensé sans stratégie ni suivi des résultats',
        'Vous gérez seul(e) la technique au lieu de vous concentrer sur votre business',
      ],
      withUs: [
        'Un site et une app pensés pour transformer vos visiteurs en clients',
        'Une seule équipe pour le web, l’app, le système et la publicité',
        'Un accompagnement réactif, du premier appel jusqu’au lancement',
        'Des campagnes publicitaires pilotées et optimisées pour votre ROI',
        'Vous pilotez votre croissance, on s’occupe de la technique',
      ],
    },
    process: {
      label: 'Comment ça marche',
      heading: '3 étapes simples, zéro prise de tête',
      steps: [
        {
          title: 'Remplissez le formulaire',
          text: '30 secondes, 4 champs. Dites-nous simplement ce dont vous avez besoin.',
        },
        {
          title: 'On vous contacte sous 24h',
          text: 'Un échange gratuit sur WhatsApp pour comprendre votre projet et vous proposer un devis clair.',
        },
        {
          title: 'On construit, vous grandissez',
          text: 'Notre équipe s’occupe de tout, du design au lancement. Vous suivez l’avancement à chaque étape.',
        },
      ],
      cta: 'Je commence maintenant',
    },
    portfolio: {
      label: 'Réalisations',
      heading: 'Des projets qui parlent d’eux-mêmes',
      sub: 'Lancez une vidéo pour voir nos réalisations en action, avec le brief de chaque projet.',
      playLabel: 'Lire la vidéo',
      pauseLabel: 'Mettre en pause',
      soundOnLabel: 'Activer le son',
      soundOffLabel: 'Couper le son',
      expandLabel: 'Voir en grand',
    },
    faq: {
      label: 'Questions fréquentes',
      heading: 'Vous avez des questions ? On a les réponses',
      items: [
        {
          q: 'Combien coûte un projet ?',
          a: 'Chaque projet est différent. Après la consultation gratuite, vous recevez un devis clair et détaillé, adapté à votre budget. Pas de surprise, pas de frais cachés.',
        },
        {
          q: 'Je n’y connais rien en technique, c’est un problème ?',
          a: 'Pas du tout, c’est justement notre rôle. On vous explique tout simplement et on prend en charge toute la partie technique.',
        },
        {
          q: 'Je débute, ce n’est pas trop tôt pour moi ?',
          a: 'Non. Que vous lanciez votre première activité ou que vous ayez déjà une entreprise, on adapte la solution à votre étape et à vos moyens.',
        },
        {
          q: 'Combien de temps faut-il pour lancer mon projet ?',
          a: 'Cela dépend de la taille du projet. Dès la consultation, on vous donne un planning précis avec des étapes claires.',
        },
        {
          q: 'Vous travaillez uniquement à Casablanca ?',
          a: 'Notre équipe est basée à Casablanca, mais on peut travailler entièrement à distance, où que vous soyez.',
        },
        {
          q: 'La consultation est vraiment gratuite ?',
          a: 'Oui, 100% gratuite et sans engagement. Vous repartez avec des conseils concrets, même si vous décidez de ne pas travailler avec nous.',
        },
      ],
    },
    form: {
      label: 'Consultation gratuite',
      heading: 'Prêt à faire décoller votre business ?',
      sub: 'Remplissez ce formulaire en 30 secondes. Un membre de l’équipe vous contacte sur WhatsApp sous 24h.',
      perksTitle: 'Pendant la consultation, vous obtenez :',
      perks: [
        'Une analyse de votre situation actuelle',
        'Des recommandations concrètes pour votre projet',
        'Un devis clair, sans frais cachés',
        'Aucun engagement de votre part',
      ],
      scarcity: 'Places limitées ce mois-ci',
      firstName: { label: 'Prénom *', placeholder: 'Votre prénom' },
      lastName: { label: 'Nom *', placeholder: 'Votre nom' },
      whatsapp: { label: 'Numéro WhatsApp *', placeholder: '+212 6XX XXX XXX' },
      service: { label: 'Quel service vous intéresse ? *', placeholder: 'Choisissez un service' },
      serviceOptions: [
        { id: 'web', label: 'Site Web / E-commerce' },
        { id: 'app', label: 'Application Mobile' },
        { id: 'system', label: 'Système sur mesure' },
        { id: 'ads', label: 'Publicité & Acquisition' },
        { id: 'comments-remover', label: 'Suppression de commentaires' },
        { id: 'unsure', label: 'Je ne sais pas encore' },
      ],
      success: "Demande envoyée ! Un membre de l'équipe vous contacte sur WhatsApp sous 24h.",
      error: "Une erreur s'est produite. Merci de réessayer ou de nous écrire directement sur WhatsApp.",
      submit: 'Je réserve ma consultation gratuite',
      privacy: 'Vos informations restent confidentielles. Zéro spam.',
      orWhatsapp: 'Vous préférez écrire directement ?',
      whatsappCta: 'Discuter sur WhatsApp',
      whatsappMessage: {
        title: 'Demande · Tech Hermanos',
        firstName: 'Prénom',
        lastName: 'Nom',
        whatsapp: 'WhatsApp',
        service: 'Service',
        unspecified: 'Non précisé',
      },
    },
    footer: {
      tagline:
        'Site web, application, système et publicité : une seule équipe pour faire grandir votre business.',
      navTitle: 'Navigation',
      servicesTitle: 'Services',
      contactTitle: 'Contact',
      address: 'Casablanca, Maroc',
      copyrightSuffix: 'Tech Hermanos. Tous droits réservés.',
      legal: { privacy: 'Politique de confidentialité', terms: 'Conditions générales' },
    },
    stickyCta: {
      primary: 'Consultation gratuite',
      whatsapp: 'WhatsApp',
    },
    whatsappGreeting: 'Bonjour Tech Hermanos, je souhaite avoir des informations sur vos services.',
  },

  ar: {
    meta: {
      title: 'Tech Hermanos | موقع، تطبيق وإعلانات · استشارة مجانية',
      description:
        'موقع إلكتروني، تطبيق، نظام مخصص وإعلانات: فريق واحد يحوّل فكرتك أو مشروعك إلى آلة لجلب الزبائن. استشارة مجانية ورد خلال 24 ساعة.',
    },
    topbar: {
      items: ['استشارة مجانية', 'رد عبر واتساب خلال 24 ساعة', 'أماكن محدودة هذا الشهر'],
    },
    nav: {
      links: [
        { label: 'الرئيسية', href: '#home' },
        { label: 'الخدمات', href: '#services' },
        { label: 'أعمالنا', href: '#portfolio' },
        { label: 'الأسئلة', href: '#faq' },
      ],
      cta: 'استشارة مجانية',
    },
    hero: {
      eyebrow: 'موقع · تطبيق · نظام · إعلانات',
      heading: {
        before: 'حوّل فكرتك أو مشروعك إلى',
        highlight: 'آلة لجلب الزبائن',
        after: '',
      },
      subtitle:
        'فريق واحد يتكفّل بكل شيء: موقعك، تطبيقك، نظام التسيير وإعلاناتك. سواء كنت في البداية أو عندك مشروع قائم، نبني لك ما يجلب لك الزبائن.',
      vslLabel: 'شاهد هذا الفيديو القصير أولاً',
      vslPlay: 'شغّل الفيديو',
      ctaPrimary: 'احجز استشارتي المجانية',
      ctaWhatsapp: 'راسلنا على واتساب',
      trust: ['مجاني 100%', 'رد خلال 24 ساعة', 'بدون أي التزام'],
    },
    audience: {
      label: 'لمن هذه الخدمة؟',
      heading: 'مهما كان نشاطك، عندنا الحل الرقمي المناسب لك',
      items: [
        'التجار والمحلات',
        'المطاعم والمقاهي',
        'المتاجر الإلكترونية والعلامات',
        'الأطباء والمحامون والمهن الحرة',
        'المدربون والمكوّنون',
        'الشركات الناشئة والمقاولات',
        'أصحاب الأفكار والمشاريع',
      ],
    },
    pains: {
      label: 'هل تجد نفسك هنا؟',
      heading: 'إذا كانت إحدى هذه النقاط تعنيك، فهذه الصفحة لك',
      items: [
        {
          title: 'زبائنك لا يجدونك على الإنترنت',
          text: 'لا يوجد موقع، أو موقع لا يزوره أحد. وفي الوقت نفسه، منافسوك يأخذون الزبائن الذين يبحثون عنك.',
        },
        {
          title: 'تضيّع ساعات في مهام يدوية',
          text: 'طلبيات على واتساب، مخزون على الورق، فواتير على Excel… مشروعك يعتمد عليك أنت، وليس على نظام.',
        },
        {
          title: 'إعلاناتك مكلفة ولا تجلب نتائج',
          text: 'تموّل المنشورات بشكل عشوائي. النتيجة: إعجابات، لكن بدون زبائن ولا مبيعات.',
        },
        {
          title: 'عندك فكرة ولا تعرف من أين تبدأ',
          text: 'تطبيق، منصة، متجر إلكتروني… المشروع موجود، لكن الجانب التقني يوقفك.',
        },
      ],
      bridge: 'الخبر السار: لكل مشكلة من هذه المشاكل حل. ونحن نتكفّل به بدلاً عنك.',
      cta: 'أريد الحل',
    },
    services: {
      label: 'خدماتنا',
      heading: 'كل ما يحتاجه مشروعك لينمو، في مكان واحد',
      sub: 'اختر خدمة أو اجمع بينها: فريق واحد، محاور واحد، وبدون أي تعقيد.',
      items: [
        {
          id: 'web',
          title: 'موقع إلكتروني ومتجر',
          text: 'موقع سريع وجميل ومصمَّم للبيع: موقع تعريفي، متجر إلكتروني أو صفحة هبوط.',
          bullets: ['تصميم حسب الطلب', 'متوافق مع الهاتف وGoogle', 'الطلب والدفع عبر الإنترنت'],
        },
        {
          id: 'app',
          title: 'تطبيق جوال',
          text: 'تطبيقك على iOS وAndroid لتحافظ على زبائنك وتبيع لهم مباشرة من هواتفهم.',
          bullets: ['iOS وAndroid', 'إشعارات فورية', 'النشر على المتاجر'],
        },
        {
          id: 'system',
          title: 'نظام مخصص',
          text: 'المخزون، الطلبيات، الحجوزات، الزبائن: أتمتة كل ما يضيّع وقتك.',
          bullets: ['لوحة تحكم واضحة', 'أتمتة المهام', 'ولوج لكل فريقك'],
        },
        {
          id: 'ads',
          title: 'إعلانات وجلب الزبائن',
          text: 'حملات على فيسبوك، إنستغرام، تيك توك وGoogle مُدارة لجلب الزبائن، وليس الإعجابات.',
          bullets: ['استراتيجية واستهداف', 'تصميم الإعلانات', 'متابعة النتائج'],
        },
      ],
      cta: 'اطلب هذه الخدمة',
    },
    comparison: {
      stat: {
        label: 'الواقع',
        number: 90,
        suffix: '%',
        description:
          'من الشركات التي تنجح في تحوّلها الرقمي تعتمد على فريق واحد متخصص عوض عدة مزودين متفرقين.',
      },
      label: 'قبل / بعد',
      heading: 'مع أو بدون Tech Hermanos، النتيجة تتغيّر بالكامل',
      withoutTitle: 'بدون Tech Hermanos',
      withTitle: 'مع Tech Hermanos',
      vipTag: 'الأفضل',
      without: [
        'موقع هاوٍ لا يحوّل زوارك إلى عملاء',
        'مقدّمو خدمات مختلفون للموقع والتطبيق والإعلانات، بدون أي انسجام',
        'آجال تطول بلا نهاية وتواصل ينقطع',
        'ميزانية إعلانية تُصرف بدون استراتيجية أو متابعة للنتائج',
        'تدير الجانب التقني بمفردك بدل التركيز على تطوير مشروعك',
      ],
      withUs: [
        'موقع وتطبيق مصمَّمان لتحويل زوارك إلى عملاء حقيقيين',
        'فريق واحد يتكفّل بالموقع والتطبيق والنظام والإعلانات',
        'مرافقة سريعة وفعّالة من أول اتصال إلى غاية الإطلاق',
        'حملات إعلانية مُدارة ومُحسَّنة لضمان أفضل عائد على استثمارك',
        'أنت تقود نمو مشروعك، ونحن نتكفّل بالجانب التقني',
      ],
    },
    process: {
      label: 'كيف نشتغل',
      heading: '3 خطوات بسيطة، بدون تعقيد',
      steps: [
        {
          title: 'املأ الاستمارة',
          text: '30 ثانية و4 خانات فقط. أخبرنا بما تحتاجه.',
        },
        {
          title: 'نتواصل معك خلال 24 ساعة',
          text: 'محادثة مجانية على واتساب لفهم مشروعك واقتراح عرض سعر واضح.',
        },
        {
          title: 'نبني، وأنت تنمو',
          text: 'فريقنا يتكفّل بكل شيء، من التصميم إلى الإطلاق. وتتابع التقدم في كل مرحلة.',
        },
      ],
      cta: 'أبدأ الآن',
    },
    portfolio: {
      label: 'أعمالنا',
      heading: 'مشاريع تتحدث عن نفسها',
      sub: 'شغّل فيديو لترى أعمالنا على أرض الواقع، مع ملخص كل مشروع.',
      playLabel: 'تشغيل الفيديو',
      pauseLabel: 'إيقاف مؤقت',
      soundOnLabel: 'تفعيل الصوت',
      soundOffLabel: 'كتم الصوت',
      expandLabel: 'عرض بحجم أكبر',
    },
    faq: {
      label: 'الأسئلة الشائعة',
      heading: 'عندك أسئلة؟ عندنا الأجوبة',
      items: [
        {
          q: 'كم يكلّف المشروع؟',
          a: 'كل مشروع مختلف. بعد الاستشارة المجانية، تتوصل بعرض سعر واضح ومفصّل يناسب ميزانيتك. بدون مفاجآت ولا مصاريف خفية.',
        },
        {
          q: 'لا أفهم شيئاً في التقنية، هل هذا مشكل؟',
          a: 'أبداً، هذا بالضبط دورنا. نشرح لك كل شيء ببساطة ونتكفّل بكل الجانب التقني.',
        },
        {
          q: 'أنا في البداية، هل الوقت مبكر بالنسبة لي؟',
          a: 'لا. سواء كنت تطلق نشاطك الأول أو عندك مقاولة قائمة، نكيّف الحل حسب مرحلتك وإمكانياتك.',
        },
        {
          q: 'كم من الوقت يلزم لإطلاق مشروعي؟',
          a: 'يعتمد ذلك على حجم المشروع. منذ الاستشارة، نعطيك جدولاً زمنياً دقيقاً بمراحل واضحة.',
        },
        {
          q: 'هل تشتغلون فقط في الدار البيضاء؟',
          a: 'فريقنا مقره في الدار البيضاء، لكن يمكننا الاشتغال معك عن بُعد بالكامل، أينما كنت.',
        },
        {
          q: 'هل الاستشارة مجانية فعلاً؟',
          a: 'نعم، مجانية 100% وبدون أي التزام. تخرج بنصائح عملية حتى لو قررت عدم الاشتغال معنا.',
        },
      ],
    },
    form: {
      label: 'استشارة مجانية',
      heading: 'مستعد تطلق مشروعك للأمام؟',
      sub: 'املأ هذه الاستمارة في 30 ثانية. أحد أعضاء فريقنا سيتواصل معك عبر واتساب خلال 24 ساعة.',
      perksTitle: 'خلال الاستشارة، تحصل على:',
      perks: [
        'تحليل لوضعيتك الحالية',
        'توصيات عملية لمشروعك',
        'عرض سعر واضح بدون مصاريف خفية',
        'بدون أي التزام من طرفك',
      ],
      scarcity: 'أماكن محدودة هذا الشهر',
      firstName: { label: 'الاسم الشخصي *', placeholder: 'اسمك الشخصي' },
      lastName: { label: 'اسم العائلة *', placeholder: 'اسم عائلتك' },
      whatsapp: { label: 'رقم واتساب *', placeholder: '+212 6XX XXX XXX' },
      service: { label: 'ما الخدمة التي تهمّك؟ *', placeholder: 'اختر خدمة' },
      serviceOptions: [
        { id: 'web', label: 'موقع إلكتروني / متجر' },
        { id: 'app', label: 'تطبيق جوال' },
        { id: 'system', label: 'نظام مخصص' },
        { id: 'ads', label: 'إعلانات وجلب الزبائن' },
        { id: 'comments-remover', label: 'إزالة التعليقات' },
        { id: 'unsure', label: 'لا أعرف بعد' },
      ],
      success: 'تم إرسال طلبك! أحد أعضاء فريقنا سيتواصل معك عبر واتساب خلال 24 ساعة.',
      error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة على واتساب.',
      submit: 'احجز استشارتي المجانية',
      privacy: 'معلوماتك تبقى سرية. بدون أي إزعاج.',
      orWhatsapp: 'تفضّل المراسلة مباشرة؟',
      whatsappCta: 'تحدث معنا على واتساب',
      whatsappMessage: {
        title: 'طلب · Tech Hermanos',
        firstName: 'الاسم الشخصي',
        lastName: 'اسم العائلة',
        whatsapp: 'واتساب',
        service: 'الخدمة',
        unspecified: 'غير محدد',
      },
    },
    footer: {
      tagline: 'موقع، تطبيق، نظام وإعلانات: فريق واحد لتنمية مشروعك.',
      navTitle: 'التنقل',
      servicesTitle: 'الخدمات',
      contactTitle: 'تواصل معنا',
      address: 'الدار البيضاء، المغرب',
      copyrightSuffix: 'Tech Hermanos. جميع الحقوق محفوظة.',
      legal: { privacy: 'سياسة الخصوصية', terms: 'الشروط والأحكام' },
    },
    stickyCta: {
      primary: 'استشارة مجانية',
      whatsapp: 'واتساب',
    },
    whatsappGreeting: 'السلام عليكم Tech Hermanos، أريد معلومات حول خدماتكم.',
  },
}
