export interface ProposalConfig {
  clientName: string;
  defaultCompanyName: string;
  proposalTitle: string;
  author: {
    name: string;
    fullName: string;
    photoUrl: string;
    role: string;
    degrees: string[];
    academicHonors: string;
    scotiabankRecognition: string;
    phone: string;
    whatsappFormatted: string;
    email: string;
    linkedin: string;
    portfolio: string;
    bio: string;
  };
  schedule: {
    day: string;
    frequency: string;
    hoursPerDay: number;
    monthlyHours: number;
  };
  pillars: Array<{
    id: string;
    number: string;
    title: string;
    shortDesc: string;
    icon: string;
    color: string;
    impactBadge: string;
    details: string[];
    outcomes: string[];
  }>;
  credentials: Array<{
    institution: string;
    title: string;
    period: string;
    badge: string;
    description: string;
    category: 'academic' | 'certification' | 'award';
  }>;
  certificationsList: Array<{
    name: string;
    issuer: string;
    category: string;
  }>;
  roadmap: Array<{
    month: string;
    phase: string;
    focus: string;
    deliverables: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const defaultProposalConfig: ProposalConfig = {
  clientName: "Don José",
  defaultCompanyName: "Empresa de Don José",
  proposalTitle: "Propuesta Ejecutiva de Optimización Operativa, Sistemas y Desarrollo Web",
  author: {
    name: "Alam Ozuna",
    fullName: "Alam Antonio Ozuna Silva",
    photoUrl: "/alam-profile.jpeg",
    role: "Especialista en Optimización Operativa, Business Intelligence & IA",
    degrees: [
      "Grado en Negocios Internacionales (Magna Cum Laude - UNAPEC)",
      "MBA en Ciencia de Datos e Inteligencia Artificial para Negocios (CESTE - Zaragoza, España)",
      "Diplomado en Agentes del Cambio y Transformación Digital (CESTE)"
    ],
    academicHonors: "Valedictorian / Mayor Índice Académico UNAPEC 2024",
    scotiabankRecognition: "Empleado Destacado Scotiabank (Diciembre 2024) por consistencia, cero errores y optimización de datos bancarios corporativos",
    phone: "+1 (849) 352-3722",
    whatsappFormatted: "18493523722",
    email: "alam_ozuna@outlook.com",
    linkedin: "https://www.linkedin.com/in/alam-antonio-ozuna-silva-b4648029a",
    portfolio: "https://alamozuna.github.io",
    bio: "Graduado Magna Cum Laude con un MBA en Ciencia de Datos e IA. Experiencia directa probada en Scotiabank optimizando bases de datos corporativas, automatizando procesos y construyendo dashboards estratégicos sin margen de error."
  },
  schedule: {
    day: "Todos los Sábados",
    frequency: "Semanal (9:00 AM a 2:00 PM)",
    hoursPerDay: 5,
    monthlyHours: 20
  },
  pillars: [
    {
      id: "optimizacion",
      number: "01",
      title: "Optimización y Automatización de Procesos",
      shortDesc: "Eliminación de cuellos de botella, ordenamiento de flujos de trabajo y automatización de tareas administrativas repetitivas.",
      icon: "Zap",
      color: "from-amber-500 to-orange-600",
      impactBadge: "Ahorro del 40% del tiempo operativo",
      details: [
        "Identificación de tareas repetitivas y eliminación de pasos innecesarios.",
        "Automatización de reportes diarios/semanales en Excel Avanzado y Power BI.",
        "Estandarización de procedimientos para evitar errores humanos."
      ],
      outcomes: [
        "Flujos de trabajo ágiles y documentados.",
        "Mayor velocidad de respuesta en la operación semanal.",
        "Reducción directa de errores operativos a cero."
      ]
    },
    {
      id: "atrasado",
      number: "02",
      title: "Desahogo y Puesta al Día de Trabajo Atrasado",
      shortDesc: "Depuración intensiva de archivos, facturas, cuadres pendientes e inventarios rezagados para partir de cero con orden total.",
      icon: "FolderSync",
      color: "from-blue-500 to-cyan-600",
      impactBadge: "Cero pendiente acumulado",
      details: [
        "Procesamiento rápido y organizado del trabajo acumulado.",
        "Organización digital y física de expedientes, cuentas o documentos.",
        "Saneamiento de bases de datos de clientes, proveedores e inventario."
      ],
      outcomes: [
        "Operación 100% al día sin acumulaciones estresantes.",
        "Acceso instantáneo a cualquier información histórica.",
        "Paz mental y claridad gerencial para Don José."
      ]
    },
    {
      id: "sistemas",
      number: "03",
      title: "Construcción de Sistemas y Estructuras Logísticas",
      shortDesc: "Diseño de plantillas inteligentes, bases de datos automatizadas y tableros de control gerencial (KPIs) a la medida.",
      icon: "Building2",
      color: "from-emerald-500 to-teal-600",
      impactBadge: "Estructura de nivel corporativo",
      details: [
        "Creación de sistema de control de inventario / servicios / despachos.",
        "Diseño de tableros de control (Dashboards) para ver ventas, costos y flujo de caja.",
        "Estructuración del canal de comunicación y seguimiento de entregas."
      ],
      outcomes: [
        "Control absoluto del inventario y la logística.",
        "Dashboards claros que Don José puede consultar en segundos.",
        "Base sólida lista para escalar la empresa."
      ]
    },
    {
      id: "web",
      number: "04",
      title: "Desarrollo de la Página Web Corporativa",
      shortDesc: "Diseño y programación de la web oficial de la empresa para proyectar una imagen ultra profesional y captar nuevos clientes.",
      icon: "Globe",
      color: "from-indigo-500 to-purple-600",
      impactBadge: "Presencia digital 24/7",
      details: [
        "Creación de sitio web moderno, rápido y adaptado a celulares y computadoras.",
        "Integración de catálogo de servicios/productos y botón directo a WhatsApp.",
        "Posicionamiento en Google (SEO) para ser encontrados por clientes locales."
      ],
      outcomes: [
        "Imagen institucional de primer nivel frente a competidores.",
        "Canal automático de generación de clientes potenciales.",
        "Dominio propio y correos corporativos."
      ]
    },
    {
      id: "problemas",
      number: "05",
      title: "Resolución de Problemas e Imprevistos",
      shortDesc: "Soporte multifuncional continuo para solucionar cualquier contingencia técnica, administrativa o estratégica que surja en la semana.",
      icon: "ShieldAlert",
      color: "from-rose-500 to-red-600",
      impactBadge: "Tranquilidad y respaldo continuo",
      details: [
        "Atención personalizada a imprevistos tecnológicos o de sistemas.",
        "Apoyo en negociaciones clave o proveedores bajo el Método Harvard.",
        "Asistencia ejecutiva directa para decisiones complejas del negocio."
      ],
      outcomes: [
        "Respuesta inmediata y solución efectiva de problemas complejos.",
        "Socio de confianza para resolver retos estratégicos.",
        "Sin sorpresas que detengan el crecimiento del negocio."
      ]
    }
  ],
  credentials: [
    {
      institution: "CESTE Centro Universitario (Zaragoza, España)",
      title: "MBA en Ciencia de Datos e IA para Negocios",
      period: "2025 - 2026",
      badge: "Máster Ejecutivo",
      description: "Especialización avanzada en analítica de datos, modelos predictivos, automatización con IA y estrategia de negocio.",
      category: "academic"
    },
    {
      institution: "Universidad APEC (UNAPEC)",
      title: "Grado en Negocios Internacionales (Magna Cum Laude)",
      period: "2020 - 2024",
      badge: "Valedictorian 2024",
      description: "Graduado con el mayor índice académico de la promoción. Enfoque en gestión operativa, logística y comercio internacional.",
      category: "academic"
    },
    {
      institution: "Scotiabank - Business Service Center",
      title: "Empleado Destacado & Oficial de Datos Bancarios",
      period: "2024 - 2025",
      badge: "Premio a la Excelencia",
      description: "Galardonado por velocidad, cero errores y cumplimiento estricto de SLAs en procesamiento de expedientes crediticios corporativos.",
      category: "award"
    },
    {
      institution: "Universidad CESTE (España)",
      title: "Diplomado en Agentes del Cambio y Transformación Digital",
      period: "2025 - 2026",
      badge: "Especialización Digital",
      description: "Liderazgo de proyectos de modernización tecnológica, rediseño de procesos y cultura digital en organizaciones.",
      category: "academic"
    }
  ],
  certificationsList: [
    { name: "AI Developer Professional Certificate", issuer: "IBM", category: "IA & Software" },
    { name: "Google AI & Data Analysis Professional", issuer: "Google", category: "Analítica" },
    { name: "Microsoft Power BI & Data Visualization", issuer: "Microsoft", category: "Business Intelligence" },
    { name: "Manejador de Power BI & Análisis Operativo", issuer: "INFOTEP", category: "BI Aplicado" },
    { name: "Método Harvard de Negociación Estratégica", issuer: "Harvard Negotiation Project", category: "Estrategia" },
    { name: "Oratoria Ejecutiva y Liderazgo", issuer: "Toastmasters International", category: "Liderazgo" },
    { name: "C2 Proficient English Certificate", issuer: "EF SET (C2 Máximo)", category: "Idiomas" }
  ],
  roadmap: [
    {
      month: "Mes 1",
      phase: "Diagnóstico & Puesta al Día",
      focus: "Pauta de orden inicial, eliminación de pendientes acumulados y primer cuadro de mando.",
      deliverables: [
        "Sábado 1: Diagnóstico de la operación y relevamiento de cuellos de botella.",
        "Sábado 2: Depuración y avance intensivo del trabajo atrasado.",
        "Sábado 3: Implementación del primer sistema de control en Excel/Power BI.",
        "Sábado 4: Estandarización de flujos y primer reporte gerencial."
      ]
    },
    {
      month: "Mes 2",
      phase: "Sistemas Logísticos & Sitio Web",
      focus: "Construcción de la infraestructura digital y maquetación de la página web de la empresa.",
      deliverables: [
        "Sábado 5: Diseño de la estructura de la página web corporativa.",
        "Sábado 6: Construcción del sistema de inventario y logística.",
        "Sábado 7: Desarrollo de secciones web y formulario de clientes.",
        "Sábado 8: Pruebas de funcionamiento y carga de productos/servicios."
      ]
    },
    {
      month: "Mes 3",
      phase: "Lanzamiento & Automatización",
      focus: "Publicación de la página web, automatizaciones avanzadas y capacitación.",
      deliverables: [
        "Sábado 9: Publicación oficial de la página web en dominio propio.",
        "Sábado 10: Integración de automatizaciones de correo y WhatsApp.",
        "Sábado 11: Capacitación al personal sobre el uso de los nuevos sistemas.",
        "Sábado 12: Consolidación del tablero gerencial final y plan continuo."
      ]
    }
  ],
  faqs: [
    {
      question: "¿Por qué trabajar los sábados y no toda la semana?",
      answer: "El modelo de sábados le ofrece a Don José el máximo impacto sin los costos fijos ni cargas prestacionales de una nómina completa de tiempo completo. En 5 horas de trabajo enfocado cada sábado (de 9:00 AM a 2:00 PM), un especialista senior avanza más que días enteros de rutina convulsionada."
    },
    {
      question: "¿Qué pasa si surge un problema grave durante la semana?",
      answer: "Aunque la presencia física/dedicada es los sábados, Don José cuenta con comunicación abierta para consultas urgentes o emergencias que requieran guía rápida durante la semana."
    },
    {
      question: "¿La página web de la empresa queda a nombre de Don José?",
      answer: "Sí, el 100% de la propiedad intelectual, dominio, hosting y código web pertenecerá a la empresa de Don José con documentación y acceso completo."
    },
    {
      question: "¿Cómo se mide el progreso de los trabajos?",
      answer: "Al final de cada sábado se entregará un informe de avances con los logros alcanzados en el día y las metas para el siguiente sábado."
    }
  ]
};
