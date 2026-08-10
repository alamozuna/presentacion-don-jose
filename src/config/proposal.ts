export interface PhasedPricingStage {
  id: string;
  phaseNumber: string;
  title: string;
  shortDesc: string;
  investmentLabel: string;
  paymentMode: string;
  badge: string;
  color: string;
  keyDeliverables: string[];
  businessImpact: string;
}

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
  phasedPricing: PhasedPricingStage[];
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
  defaultCompanyName: "Consorcio de Bancas Bachatta Sport",
  proposalTitle: "Propuesta Ejecutiva de Optimización Operativa, Gestión de Personal, Sistemas y Desarrollo Web",
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
      id: "claro",
      number: "01",
      title: "Orden e Independización de Servicios Claro por Banca",
      shortDesc: "Auditoría, desglose y separación administrativa de las facturas unificadas de Claro para que cada banca/localidad cuente con su factura independiente.",
      icon: "Wifi",
      color: "from-red-500 to-amber-600",
      impactBadge: "Facturación 100% clara por localidad",
      details: [
        "Relevamiento y conciliación de todos los servicios de internet de Claro contratados.",
        "Gestión administrativa y técnica para separar cuentas agrupadas en facturas individuales por banca.",
        "Asignación de centros de costo exactos por punto de venta para control contable impecable."
      ],
      outcomes: [
        "Transparencia total de consumo e internet por localidad.",
        "Eliminación de pagos duplicados o facturas no identificadas.",
        "Reporte consolidado mensual limpio para Don José."
      ]
    },
    {
      id: "personal",
      number: "02",
      title: "Sistema de Personal, Clasificación & Expedientes Digitales",
      shortDesc: "Estructuración de la base de datos de Recursos Humanos con registro de salidas, actualización de solicitudes de empleo y digitalización de expedientes.",
      icon: "Users",
      color: "from-blue-500 to-indigo-600",
      impactBadge: "Expedientes y control HR digitalizado",
      details: [
        "Construcción de Base de Datos de personal con sistema de clasificación por motivo de salida (renuncia, despido, desahucio, abandono, etc.).",
        "Rediseño y modernización del Formulario Oficial de Solicitud de Empleo.",
        "Digitalización y ordenamiento de expedientes físicos de colaboradores en repositorio estructurado."
      ],
      outcomes: [
        "Acceso inmediato al historial laboral y de prestaciones de cualquier colaborador.",
        "Formulario de reclutamiento estándar actualizado y profesional.",
        "Seguridad jurídica e historial preventivo ante cualquier reclamación."
      ]
    },
    {
      id: "respaldos",
      number: "03",
      title: "Infraestructura de Datos, Dominio Interno & Respaldos",
      shortDesc: "Digitalización de documentos estratégicos y creación de un dominio/red interna respaldada en almacenamiento externo sin depender de correos personales o PCs frágiles.",
      icon: "Server",
      color: "from-emerald-500 to-teal-600",
      impactBadge: "Seguridad de datos nivel corporativo",
      details: [
        "Digitalización de documentos clave de la empresa para eliminar la dependencia exclusiva del papel físico.",
        "Configuración de dominio/red interna e intercambio seguro de información.",
        "Implementación de sistema de respaldo automático en disco duro externo (NAS/Storage Local) eliminando riesgos de Gmail/Hotmail, WhatsApp o daños en PCs."
      ],
      outcomes: [
        "Información crítica a salvo contra averías de computadoras o pérdidas de correos.",
        "Intercambio fluido y privado entre estaciones de trabajo.",
        "Respaldos periódicos seguros sin costo recurrente excesivo."
      ]
    },
    {
      id: "optimizacion",
      number: "04",
      title: "Desahogo Operativo, Automatización & Tableros Gerenciales",
      shortDesc: "Eliminación del trabajo atrasado acumulado, automatización de plantillas de control e implementación de Dashboards gerenciales.",
      icon: "Zap",
      color: "from-amber-500 to-orange-600",
      impactBadge: "Ahorro del 40% del tiempo operativo",
      details: [
        "Depuración acelerada del trabajo administrativo acumulado e inventarios rezagados.",
        "Automatización de reportes semanales y conciliaciones en Excel Avanzado y Power BI.",
        "Tableros de control de ventas, gastos y balance diario a un solo clic."
      ],
      outcomes: [
        "Operación 100% al día desde la primera etapa.",
        "Visualización en tiempo real del desempeño de cada punto de venta.",
        "Paz mental y control gerencial absoluto."
      ]
    },
    {
      id: "web",
      number: "05",
      title: "Desarrollo de la Página Web Corporativa",
      shortDesc: "Diseño y desarrollo del portal web oficial del Consorcio de Bancas Bachatta Sport para presencia institucional sólida.",
      icon: "Globe",
      color: "from-purple-500 to-pink-600",
      impactBadge: "Presencia digital 24/7",
      details: [
        "Construcción de página web moderna, institucional e interactiva adaptada a móviles y computadoras.",
        "Secciones institucionales, catálogo/servicios y canales de contacto directo.",
        "Configuración de dominio web propio."
      ],
      outcomes: [
        "Prestigio e imagen corporativa de alto impacto.",
        "Presencia digital oficial comprobable ante socios y clientes.",
        "Propiedad intelectual 100% registrada a nombre de la empresa."
      ]
    }
  ],
  phasedPricing: [
    {
      id: "fase1",
      phaseNumber: "Fase 01",
      title: "Puesta al Día, Servicios Claro & Digitalización Base",
      shortDesc: "Concentrada en generar tranquilidad inmediata: ordenar la facturación de Claro por banca, eliminar el trabajo atrasado acumulado y estructurar los primeros archivos.",
      investmentLabel: "Pago por Entregable - Fase 1",
      paymentMode: "Sin compromisos globales masivos. Se abona al iniciar y validar los avances del Mes 1.",
      badge: "Resultados Inmediatos",
      color: "border-amber-500/50 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-950",
      keyDeliverables: [
        "Separación de facturas Claro por cada banca/localidad.",
        "Desahogo e inventario del trabajo atrasado acumulado.",
        "Digitalización de documentos operativos clave primarios.",
        "Primer reporte gerencial y ordenamiento de flujos semanales."
      ],
      businessImpact: "Don José ve el cambio radical y el orden en las facturas y archivos desde las primeras semanas de trabajo."
    },
    {
      id: "fase2",
      phaseNumber: "Fase 02",
      title: "Sistema de Personal, Expedientes & Servidor/Dominio Interno",
      shortDesc: "Enfocada en proteger la información y el recurso humano: creación de la BD de salidas de empleados, expedientes digitales y servidor local con respaldo externo.",
      investmentLabel: "Pago por Entregable - Fase 2",
      paymentMode: "Se aprueba únicamente tras haber completado a satisfacción la Fase 1.",
      badge: "Seguridad & Estructura HR",
      color: "border-blue-500/50 bg-gradient-to-br from-blue-950/40 via-slate-900 to-slate-950",
      keyDeliverables: [
        "Base de datos de personal con motivos clasificados de salida.",
        "Formulario oficial de solicitud de empleo actualizado.",
        "Digitalización completa de expedientes de personal.",
        "Dominio/red interna e instalación de respaldos en disco externo (NAS)."
      ],
      businessImpact: "Elimina la vulnerabilidad de pérdidas de datos en computadoras o WhatsApp y blinda el historial del personal."
    },
    {
      id: "fase3",
      phaseNumber: "Fase 03",
      title: "Desarrollo Web Corporativo, Automatización & Consolidación",
      shortDesc: "Paso final de modernización: lanzamiento de la página web oficial, tableros gerenciales en Power BI y automatización avanzada de reportes.",
      investmentLabel: "Pago por Entregable - Fase 3",
      paymentMode: "Cobro final tras entrega de la web corporativa y capacitación del equipo.",
      badge: "Escalamiento & Marca",
      color: "border-emerald-500/50 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-950",
      keyDeliverables: [
        "Página web corporativa en dominio propio publicada.",
        "Tablero de control ejecutivo (Dashboard) en tiempo real.",
        "Automatización de reportes periódicos.",
        "Capacitación al equipo y manuales de operación."
      ],
      businessImpact: "Consorcio de Bancas Bachatta Sport queda con un sistema de nivel corporativo escalable y presencia digital oficial."
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
      month: "Mes 1 (Fase 1)",
      phase: "Orden Operativo, Claro & Puesta al Día",
      focus: "Separación de facturas Claro por banca, depuración de pendientes atrasados y digitalización inicial.",
      deliverables: [
        "Sábado 1: Diagnóstico de servicios Claro y relevamiento de cuellos de botella.",
        "Sábado 2: Conciliación y ordenamiento administrativo para facturación de Claro por banca.",
        "Sábado 3: Depuración e inventario intensivo del trabajo administrativo atrasado.",
        "Sábado 4: Entrega de primer cuadro de control y facturación de Claro organizada."
      ]
    },
    {
      month: "Mes 2 (Fase 2)",
      phase: "Sistema de Personal & Dominio/Servidor Interno",
      focus: "Estructuración de BD de Recursos Humanos, digitalización de expedientes y red de respaldos.",
      deliverables: [
        "Sábado 5: Creación de BD de personal con sistema de clasificación por motivo de salida.",
        "Sábado 6: Rediseño y actualización del Formulario Oficial de Solicitud de Empleo.",
        "Sábado 7: Digitalización de expedientes de personal y documentos estratégicos clave.",
        "Sábado 8: Configuración de dominio/red interna y almacenamiento con respaldo externo (NAS)."
      ]
    },
    {
      month: "Mes 3 (Fase 3)",
      phase: "Sitio Web Corporativo & Tableros Gerenciales",
      focus: "Desarrollo de la página web oficial, automatización avanzada y entrega final.",
      deliverables: [
        "Sábado 9: Diseño y maquetación de la página web oficial del Consorcio.",
        "Sábado 10: Desarrollo de secciones, formularios digitales y dominio propio web.",
        "Sábado 11: Publicación oficial de la página web e integración de Dashboards Power BI.",
        "Sábado 12: Capacitación al equipo, manuales de uso y consolidación del plan continuo."
      ]
    }
  ],
  faqs: [
    {
      question: "¿Cómo se logrará separar las facturas de Claro para que cada banca tenga su propia factura?",
      answer: "Alam realizará la gestión técnica y administrativa directa con Claro para desglosar la cuenta agrupada actual en contratos/facturas individuales asignadas a la dirección y código de cada banca. Esto permitirá conocer exactamente el costo de internet de cada localidad sin enredos."
    },
    {
      question: "¿En qué consiste el sistema de clasificación de salidas del personal?",
      answer: "Se creará una base de datos estructurada donde cada colaborador (activo o egresado) tendrá su expediente digital con su causa exacta de desvinculación (renuncia voluntaria, despido justificado, desahucio, abandono, etc.), junto a su documentación personal y prestaciones, brindando protección legal e histórica a Don José."
    },
    {
      question: "¿Por qué es importante el dominio interno y el almacenamiento en disco duro externo?",
      answer: "Actualmente muchas empresas dependen de correos Gmail/Hotmail personales, grupos de WhatsApp o computadoras individuales que pueden dañarse, perderse o formatearse. El dominio interno con respaldo en almacenamiento físico local/red (NAS) garantiza que la información pertenezca al Consorcio, se comparta de forma segura y se mantenga respaldada automáticamente sin pagar mensualidades excesivas de nube."
    },
    {
      question: "¿Por qué se trabaja en una estructura de pagos por Fases o Hitos?",
      answer: "Para mayor tranquilidad de Don José. En lugar de asumir un compromiso masivo a ciegas, el proyecto se divide en 3 Fases con entregables claros. Don José abona por cada etapa completada y comprueba de primera mano la calidad y el impacto antes de pasar a la siguiente fase."
    },
    {
      question: "¿Por qué trabajar los sábados y no toda la semana?",
      answer: "El modelo de sábados le ofrece a Don José el máximo impacto sin los costos fijos ni cargas prestacionales de una nómina completa. En 5 horas de trabajo enfocado cada sábado (de 9:00 AM a 2:00 PM), un especialista senior en datos y sistemas avanza más que semanas de rutina convulsionada."
    },
    {
      question: "¿La página web de la empresa queda a nombre del Consorcio de Bancas Bachatta Sport?",
      answer: "Sí, el 100% de la propiedad intelectual, dominio, hosting y código web pertenecerá al Consorcio de Bancas Bachatta Sport con documentación y acceso completo."
    }
  ]
};

