export const translations = {
  es: {
    nav: {
      about: 'Quiénes Somos',
      commodities: 'Commodities',
      energyProducts: 'Energía',
      divisions: 'Divisiones',
      terminals: 'Terminales',
      leadership: 'Liderazgo',
      intelligence: 'Inteligencia',
      marketOverview: 'Panorama de Mercado',
      commodityReports: 'Reportes de Commodities',
      tradeFinance: 'Trade Finance',
      contact: 'Contacto'
    },
    hero: {
      slide1Title: 'COMERCIO GLOBAL DE COMMODITIES\nLOGÍSTICA & TRADE FINANCE',
      slide1Subtitle: 'Impulsando las cadenas de suministro globales con eficiencia, infraestructura y capital',
      slide2Title: 'LOGÍSTICA INTEGRADA E INFRAESTRUCTURA\nDE COMMODITIES A GRANEL',
      slide2Subtitle: 'Conectando puertos internacionales clave mediante terminales y capital'
    },
    about: {
      title: 'Quiénes Somos',
      officerName: 'Raquel Cantero',
      officerRole: 'Directora Ejecutiva (C.E.O.)',
      description: 'VS International Group es una casa independiente de trading de commodities con sede en Miami, conectando mercados de origen con centros de consumo mediante logística y financiamiento comercial.',
      bullets: [
        'Trading físico en energía y metales.',
        'Red estratégica global de tanques en puertos clave.',
        'Soluciones a medida de crédito privado y capital.',
        'Presencia activa en EE. UU., Europa, EAU y Brasil.'
      ],
      pillars: [
        {
          icon: 'icon-battery',
          title: 'Productos Energéticos',
          description: 'Suministro de Jet A1, diésel EN590, crudo, fuel oil, nafta, asfalto y coque de petróleo.'
        },
        {
          icon: 'icon-chart',
          title: 'Minería y Metales',
          description: 'Comercialización global de aluminio, cobre, oro, mineral de hierro, litio y barras de acero.'
        },
        {
          icon: 'icon-leaf',
          title: 'Productos Agrícolas',
          description: 'Originación y distribución directa de azúcar, cacao, café, trigo, soja y arroz blanco.'
        },
        {
          icon: 'icon-shield',
          title: 'Trade Finance',
          description: 'Crédito privado, facilidades borrowing base, descuento de facturas y liquidez de suministro.'
        }
      ]
    },
    commodities: {
      title: 'Divisiones de Commodities',
      subtitle: 'Comercio físico global, infraestructura logística y liquidez estructurada en cuatro divisiones fundamentales.',
      imageAlt: 'Divisiones de Commodities de VS International Group: Metales, Agricultura, Energía y Finanzas',
      badgeSector: 'Portafolio de Trading Global',
      divisions: [
        {
          id: 'energy',
          title: 'Energía',
          badge: 'División Primaria',
          desc: 'Trading físico de destilados medios, fuel oil pesado, nafta, asfalto y crudo ligero y pesado con acceso a terminales estratégicas.',
          products: ['Jet A-1', 'EN590 10ppm', 'Fuel Oil D6', 'Nafta Alifática / Aromática', 'Petróleo Crudo'],
          actionText: 'Ver Productos de Energía →',
          actionLink: '#page-energy-products'
        },
        {
          id: 'metals',
          title: 'Metales',
          badge: 'Minería & Fundición',
          desc: 'Abastecimiento y distribución transfronteriza de metales preciosos e industriales para cadenas de manufactura global.',
          products: ['Lingotes de Oro 999.9', 'Plata Fina', 'Cátodos de Cobre Grado A', 'Aluminio P1020', 'Litio'],
          actionText: 'Consultar Mesa de Metales →',
          actionLink: '#page-contact'
        },
        {
          id: 'agriculture',
          title: 'Agricultura',
          badge: 'Soft Commodities',
          desc: 'Originación directa desde productores líderes y entrega a granel de alimentos esenciales y materias primas agrícolas.',
          products: ['Azúcar ICUMSA 45', 'Cacao en Grano', 'Café Arábica & Robusta', 'Soja & Trigo', 'Arroz Blanco'],
          actionText: 'Consultar Mesa Agrícola →',
          actionLink: '#page-contact'
        },
        {
          id: 'financial',
          title: 'Finanzas',
          badge: 'Trade Finance Desk',
          desc: 'Estructuración de crédito privado garantizado por inventario y conocimientos de embarque (BL) para mitigar riesgos.',
          products: ['Borrowing Base', 'Cartas de Crédito (LC / SBLC)', 'Descuento de Facturas', 'Pre-export Finance'],
          actionText: 'Ver Soluciones de Trade Finance →',
          actionLink: '#page-pricing-plans'
        }
      ]
    },
    energyProducts: {
      title: 'Nuestros Productos de Energía',
      subtitle: 'Especificaciones premium de destilados, crudos y derivados petrolíferos para clientes industriales y mayoristas globales.',
      imageAlt: 'Instalaciones y terminal de almacenamiento de productos de energía',
      cards: [
        {
          id: 'middle-distillates',
          name: 'Destilados Medios',
          nameOriginal: 'Middle Distillates',
          products: 'Jet A1 , EN590, D6, Heating Oil, Gasoline',
          desc: 'Combustibles refinados para aviación comercial, transporte de carga pesada y generación térmica.'
        },
        {
          id: 'heavy-fuel',
          name: 'Fuel Pesado y Materias Primas',
          nameOriginal: 'Heavy Fuel and Feedstock',
          products: 'Low and high Sulfur Bunker, Heavy Fuel Oil, Pet coke',
          desc: 'Bunkers marinos de bajo y alto azufre, combustibles residuales industriales y coque de petróleo.'
        },
        {
          id: 'bitumen',
          name: 'Betún / Asfalto',
          nameOriginal: 'Bitumen',
          products: 'Asphalt',
          desc: 'Asfalto y betún de penetración y modificado para proyectos de infraestructura vial de gran escala.'
        },
        {
          id: 'naphtha',
          name: 'Nafta',
          nameOriginal: 'Naphtha',
          products: 'Aliphatic , Aromatic',
          desc: 'Naftas alifáticas y aromáticas para reformado catalítico, blending de gasolinas y síntesis petroquímica.'
        },
        {
          id: 'crude-oil',
          name: 'Petróleo Crudo',
          nameOriginal: 'Crude Oil',
          products: 'Heavy , Light',
          desc: 'Grados de crudo pesado y ligero (WTI, Brent, blends latinoamericanos y del Medio Oriente).'
        }
      ]
    },
    services: {
      title: 'Nuestras Divisiones',
      subheaderLeft: 'Entregamos trading especializado de commodities, logística marítima y crédito estructurado para socios.',
      subheaderRight: 'VS International conecta cadenas globales de suministro con almacenamiento portuario confiable y liquidez.',
      items: [
        {
          icon: 'icon-chart',
          title: 'Productos Energéticos',
          desc: 'Destilados medios, Jet A1, diésel EN590, crudo, fuel oil pesado, nafta, asfalto y petcoke.'
        },
        {
          icon: 'icon-wallet',
          title: 'Minería y Metales',
          desc: 'Suministro global de cobre, aluminio, litio, oro, mineral de hierro, barras de acero y uranio.'
        },
        {
          icon: 'icon-shield',
          title: 'Productos Agrícolas',
          desc: 'Originación y entrega de azúcar de caña premium, cacao, café, trigo, soja, aceite y arroz.'
        },
        {
          icon: 'icon-signpost',
          title: 'Trade Finance',
          desc: 'Estructuras de crédito privado a medida, descuento de facturas, cartas de crédito y capital de trabajo.'
        },
        {
          icon: 'icon-briefcase',
          title: 'Logística Marítima',
          desc: 'Fletamento de transporte marítimo en tanqueros y graneleros por rutas y puertos internacionales clave.'
        },
        {
          icon: 'icon-administration',
          title: 'Terminales de Tanques',
          desc: 'Terminales de tanques de almacenamiento operadas en Houston, Rotterdam, Fujairah, Singapur, México y Brasil.'
        }
      ],
      stats: [
        {
          num: '100',
          title: 'Trade Finance Asegurado',
          desc: 'Estructuras de crédito senior respaldadas por activos que mitigan riesgos en transacciones globales.'
        },
        {
          num: '100',
          title: 'Puertos Globales Cubiertos',
          desc: 'Almacenamiento estratégico en Houston, Rotterdam, Fujairah, Singapur, México, Brasil y Australia.'
        },
        {
          num: '100',
          title: 'Eficiencia de Capital',
          desc: 'Gestión integrada de facilidades borrowing base, financiamiento en almacén y capital de suministro.'
        }
      ]
    },
    portfolio: {
      title: 'Almacenamiento y Logística Global',
      filters: {
        all: 'Todas las Terminales',
        image: 'Tanques y Almacenamiento',
        video: 'Buques Petroleros',
        example1: 'Crudo y Combustibles',
        example2: 'Costa Afuera y Exportación'
      },
      items: [
        {
          title: 'Parque de Tanques Terminal Houston',
          subtitle: 'Costa del Golfo de EE. UU.',
          desc: 'Terminal de almacenamiento de petróleo y refinados de alta capacidad con atraques de aguas profundas y conexiones de oleoductos para crudo y combustibles.'
        },
        {
          title: 'Terminal de Combustibles Rotterdam',
          subtitle: 'Corredor Comercial ARA Europeo',
          desc: 'Centro estratégico europeo para productos limpios de petróleo, jet A1, diésel y fueloil marino con conectividad fluvial de barcazas, refinerías y ductos.'
        },
        {
          title: 'Centro de Bunkering Fujairah',
          subtitle: 'Terminal Petrolera de Medio Oriente',
          desc: 'Megaterminal costera de abastecimiento de combustible marino y crudo fuera del Estrecho de Ormuz, con atraques de supertanqueros las 24 horas.'
        },
        {
          title: 'Operaciones en el Estrecho de Singapur',
          subtitle: 'Transbordo de Crudo Buque a Buque',
          desc: 'Almacenamiento flotante y operaciones de transbordo buque a buque (STS) para supertanqueros VLCC en los principales corredores petroleros de Asia.'
        },
        {
          title: 'Terminal Petrolera Cuenca de Santos',
          subtitle: 'Producción de Crudo Costa Afuera',
          desc: 'Plataformas de extracción marítima y unidades FPSO de almacenamiento de crudo en aguas profundas, con carga a buques petroleros en el Atlántico Sur.'
        },
        {
          title: 'Terminal de Crudo Corpus Christi',
          subtitle: 'Megaterminal de Exportación de Petróleo',
          desc: 'Instalación portuaria de aguas profundas para exportación masiva de petróleo crudo WTI y refinados, con atraque para buques petroleros de gran calado.'
        }
      ],
      quotes: [
        {
          text: 'VS International Group brinda liquidez excepcional y cronogramas de entrega física sumamente confiables en nuestros contratos de importación de combustibles.',
          author: 'Director de Refinería',
          occupation: 'Socio Energético Global'
        },
        {
          text: 'Sus facilidades flexibles de borrowing base y acceso a terminales de tanques en Houston y Rotterdam aceleraron significativamente nuestra ejecución comercial.',
          author: 'Director Comercial',
          occupation: 'Banco de Trade Finance'
        },
        {
          text: 'Una casa de trading físico disciplinada, con inteligencia de mercado profunda, sólida mitigación de riesgos y excelente ejecución en puertos internacionales.',
          author: 'Abastecimiento de Metales',
          occupation: 'Grupo de Fundición Industrial'
        },
        {
          text: 'Desde el financiamiento en origen hasta la descarga del buque en destino, su modelo integrado de capital y logística aporta certeza operativa constante.',
          author: 'Líder de Cadena de Suministro',
          occupation: 'Consorcio Agroexportador'
        }
      ]
    },
    team: {
      title: 'Liderazgo & Equipo Ejecutivo',
      subtitle: 'Profesionales líderes en trading de commodities, logística marítima y desarrollo de negocios globales.',
      executives: [
        {
          name: 'Gladys Raquel Cantero López',
          role: 'Directora Ejecutiva & Presidenta (C.E.O. & President)',
          email: 'operations@vsinternationalllc.com',
          bio: 'Fundadora y líder ejecutiva de VS International Group LLC. Conduce la visión global de la compañía, las alianzas estratégicas soberanas y bancarias, y la expansión de las operaciones de trading físico y trade finance en América, Europa, EAU y Asia.',
          skills: [
            { name: 'Trading Global de Commodities', value: 95 },
            { name: 'Gobernanza & Alianzas Institucionales', value: 92 },
            { name: 'Estrategia de Trade Finance & Capital', value: 94 }
          ]
        },
        {
          name: 'Carlos Ibarra',
          role: 'Director Comercial (Commercial Director)',
          email: 'salesc@vsinternationalllc.com',
          bio: 'Responsable de la dirección comercial global, originación de contratos de suministro físico y gestión de alianzas estratégicas con refinerías, comercializadoras mayoristas y compradores industriales en los principales corredores comerciales del mundo.',
          skills: [
            { name: 'Desarrollo Comercial Global', value: 94 },
            { name: 'Negociación de Contratos de Suministro', value: 92 },
            { name: 'Relaciones con Refinerías & Clientes', value: 89 }
          ]
        },
        {
          name: 'Betania Biagini',
          role: 'Gerente Global de Trading (Global Trading Manager)',
          email: 'biagini@vsinternationalllc.com',
          bio: 'Dirige la mesa de trading físico de destilados medios, combustibles y materias primas energéticas. Especialista en análisis de diferenciales de mercado, arbitraje internacional y optimización de fletes y logística marítima para entregas FOB y CIF.',
          skills: [
            { name: 'Trading Físico de Destilados', value: 93 },
            { name: 'Arbitraje de Mercado & Coberturas', value: 90 },
            { name: 'Logística Marítima & Fletamento', value: 88 }
          ]
        },
        {
          name: 'Fredd Ortega',
          role: 'Adquisición de Productos (Product Acquisition)',
          email: 'fortega@vsinternationalllc.com',
          bio: 'Encabezando la originación y aseguramiento de volúmenes de commodities en boca de producción y terminales. Especializado en verificación de calidad independiente (SGS/Saybolt), auditoría técnica y gestión de suministros energéticos y minerales.',
          skills: [
            { name: 'Adquisición & Suministro Upstream', value: 91 },
            { name: 'Control de Calidad & Certificación SGS', value: 90 },
            { name: 'Operaciones en Terminales & Almacenamiento', value: 87 }
          ]
        },
        {
          name: 'Michele Carvalho',
          role: 'Directora de Operaciones & Business Development',
          email: 'michele@vsinternationalllc.com',
          bio: 'Lidera la ejecución de operaciones globales, supervisión de contratos transfronterizos y la expansión de nuevos negocios en América Latina y mercados estratégicos. Garantiza el cumplimiento contractual riguroso y la mitigación de riesgos operativos.',
          skills: [
            { name: 'Operaciones Globales & Logística', value: 92 },
            { name: 'Cumplimiento Contractual & Legal', value: 89 },
            { name: 'Desarrollo de Negocios Internacionales', value: 90 }
          ]
        },
        {
          name: 'Eva García',
          role: 'Ejecutiva de Desarrollo de Negocios (Business Development Executive)',
          email: 'egarcia@vsinternationalllc.com',
          bio: 'Encargada del crecimiento de alianzas corporativas, incorporación de nuevos compradores y estructuración de acuerdos en los mercados de commodities agrícolas y energéticos en Europa, América y Medio Oriente.',
          skills: [
            { name: 'Estructuración de Alianzas Corporativas', value: 90 },
            { name: 'Incorporación & Fidelización de Clientes', value: 89 },
            { name: 'Expansión de Mercados Transfronterizos', value: 86 }
          ]
        },
        {
          name: 'Jorge Eger',
          role: 'Desarrollo de Negocios - Tierras Raras & Proyectos Mineros',
          email: 'eger@vsinternationalllc.com',
          bio: 'Especialista en el desarrollo y estructuración de proyectos de minería crítica, tierras raras y metales estratégicos para la transición tecnológica. Conecta depósitos minerales y centros de beneficio con consumidores industriales globales.',
          skills: [
            { name: 'Tierras Raras & Minerales Críticos', value: 92 },
            { name: 'Estructuración de Proyectos Mineros', value: 90 },
            { name: 'Cadenas de Suministro Industrial Offtake', value: 87 }
          ]
        }
      ]
    },
    blog: {
      title: 'Inteligencia de Mercado',
      browseBtn: 'Explorar Inteligencia de Mercado',
      repliesLabel: 'Respuestas',
      posts: [
        {
          day: '24',
          month: 'Sep',
          replies: '4',
          title: 'Transición Energética Global y Dinámica de Arbitraje de Destilados Medios',
          excerpt: 'Análisis exhaustivo de flujos de diésel ultra bajo en azufre EN590, combustible de aviación Jet A1 y especificaciones de búnker marino en cuencas atlánticas y europeas [...]',
          categories: ['Energía', 'Destilados', 'Refinación'],
          author: 'Betania Biagini'
        },
        {
          day: '18',
          month: 'Sep',
          replies: '7',
          title: 'Estructuración de Trade Finance no Bancario para Flujos Físicos de Commodities',
          excerpt: 'Cómo las facilidades de borrowing base, financiamiento con recibos de almacén y crédito privado cubren brechas críticas de liquidez para productores y compradores globales [...]',
          categories: ['Trade Finance', 'Crédito Privado', 'Capital'],
          author: 'Carlos Ibarra'
        },
        {
          day: '05',
          month: 'Sep',
          replies: '12',
          title: 'Logística de Minerales Críticos: Cobre, Litio y Demanda Industrial Verde',
          excerpt: 'Evaluación estratégica de infraestructura portuaria, manejo logístico y rutas marítimas que conectan depósitos minerales de Sudamérica con centros industriales globales [...]',
          categories: ['Metales', 'Minería', 'Suministro'],
          author: 'Davi Assis'
        }
      ],
      tweets: [
        {
          text: 'Arriendo de tanques formalizado en la terminal de Rotterdam, expandiendo la capacidad europea de destilados medios a más de 150,000 m3.',
          author: '@VSInternational',
          time: 'hace 2 horas'
        },
        {
          text: 'Facilidad senior de borrowing base respaldada por activos desplegada exitosamente para programa de exportación agrícola en Sudamérica.',
          author: '@VSInternational',
          time: 'hace 1 día'
        },
        {
          text: 'Nuevo acuerdo de offtake a largo plazo asegurado para suministro de combustible búnker bajo en azufre en puertos clave del Caribe y Golfo de EE. UU.',
          author: '@VSInternational',
          time: 'hace 3 días'
        }
      ]
    },
    pricing: {
      title: 'Estructuras de Trade Finance',
      inquireBtn: 'Solicitar Facilidad',
      structures: [
        {
          name: 'Import / Export',
          price: 'Senior',
          period: 'Respaldado por Activos',
          desc: 'Facilidades senior garantizadas para transacciones y flujos físicos transfronterizos.',
          features: ['Control directo de colateral', 'Carta de crédito confirmada', 'Plazos de 30 a 180 días']
        },
        {
          name: 'Borrowing Base',
          price: 'Colateral',
          period: 'Crédito Revolvente',
          desc: 'Líneas de crédito estructuradas sobre inventarios elegibles y cuentas por cobrar.',
          features: ['Fórmula dinámica de endeudamiento', 'Auditorías e inspección regular', 'Impulso de capital de trabajo']
        },
        {
          name: 'Supply Chain',
          price: 'Liquidez',
          period: 'Cuentas por Cobrar',
          desc: 'Descuento de facturas y financiamiento respaldado por compradores desde origen a destino.',
          features: ['Descuento de facturas sin recurso', 'Pago anticipado a proveedores', 'Mitigación integral de riesgo']
        },
        {
          name: 'Inventory & REPO',
          price: 'Almacén',
          period: 'Liquidez en Terminales',
          desc: 'Financiamiento contra almacenamiento en parques de tanques y almacenes certificados.',
          features: ['Inventario en tanques de almacenaje', 'Estructuras REPO entregables', 'Financiamiento pre-exportación']
        }
      ],
      advantagesTitle: 'Ventajas de Crédito',
      advantages: [
        { icon: 'icon-briefcase', title: 'Seguridad Senior', text: 'Suscripción estricta respaldada por activos para proteger el capital.' },
        { icon: 'icon-adjust', title: 'Análisis de Riesgo', text: 'Debida diligencia exhaustiva de contrapartes y factores geopolíticos.' },
        { icon: 'icon-money', title: 'Protección de Fondos', text: 'Cuentas de depósito en garantía (escrow) y control estricto de títulos.' },
        { icon: 'icon-chart', title: 'Eficiencia de Capital', text: 'Tiempos de respuesta y estructuración ágiles frente a la banca tradicional.' },
        { icon: 'icon-oscilloscope', title: 'Cobertura de Derivados', text: 'Gestión integral y cobertura financiera de precios de commodities.' },
        { icon: 'icon-database', title: 'Almacenamiento en Terminales', text: 'Monitoreo directo en tanques de Rotterdam, Houston y Fujairah.' }
      ],
      faqTitle: 'Preguntas Frecuentes de Trade Finance',
      faqs: [
        {
          q: '¿Qué commodities son elegibles para financiamiento?',
          content: 'Financiamos commodities físicos de alta liquidez y valor de mercado, incluyendo destilados medios (Jet A1, EN590), cátodos de cobre, aluminio, litio, azúcar de caña, cacao, café, granos agrícolas y concentrados minerales.'
        },
        {
          q: '¿Cómo se asegura el colateral durante el tránsito marítimo?',
          content: 'El colateral se asegura mediante conocimientos de embarque (Bills of Lading) negociables endosados, certificados de inspección independientes (SGS, Saybolt) y acuerdos de prenda con estricto control de titularidad.'
        },
        {
          q: '¿Cuáles son los plazos y estructuras habituales de las facilidades?',
          content: 'Los plazos típicos varían de 30 a 180 días para operaciones transaccionales puntuales, y hasta 360 días para facilidades revolventes de borrowing base y programas de financiamiento pre-exportación.'
        },
        {
          q: '¿En qué jurisdicciones opera VS International Group?',
          content: 'Con sede central en Estados Unidos (Miami, FL), contamos con operaciones activas, socios bancarios y presencia comercial en las Américas, centros de trading europeos, EAU y el Sudeste Asiático.'
        }
      ]
    },
    contact: {
      title: 'Contacto',
      subheaderLeft: 'Comuníquese con nuestras mesas de trading comercial o con el equipo de trade finance para transacciones.',
      subheaderRight: 'VS INTERNATIONAL GROUP LLC opera desde Miami con mesas de trading internacionales y almacenamiento.',
      namePlaceholder: 'Su Nombre *',
      emailPlaceholder: 'Correo Corporativo *',
      websitePlaceholder: 'Empresa / Sitio Web',
      messagePlaceholder: 'Requerimientos de Commodities, Especificaciones o Trade Finance *',
      submitBtn: 'Enviar Consulta',
      transmittingBtn: 'Transmitiendo...',
      successMsg: '✓ ¡Gracias! Su mensaje ha sido recibido. Nuestra mesa de operaciones responderá a la brevedad.',
      errorMsg: '⚠ Por favor complete su nombre, correo y mensaje.',
      postalLabel: 'Dirección Postal:',
      desksLabel: 'Mesas:',
      operationsDesk: 'Operaciones:',
      commercialDesk: 'Comercial:',
      tradingDesk: 'Trading:'
    },
    footer: {
      copyright: '© 2026 VS INTERNATIONAL GROUP LLC. Todos los derechos reservados.',
      developedBy: 'Desarrollado por',
      switchLang: 'Language / Idioma:',
      currentLangLabel: 'Español'
    }
  },

  en: {
    nav: {
      about: 'About',
      commodities: 'Commodities',
      energyProducts: 'Energy',
      divisions: 'Divisions',
      terminals: 'Terminals',
      leadership: 'Leadership',
      intelligence: 'Intelligence',
      marketOverview: 'Market Overview',
      commodityReports: 'Commodity Reports',
      tradeFinance: 'Trade Finance',
      contact: 'Contact'
    },
    hero: {
      slide1Title: 'GLOBAL COMMODITIES TRADING\nLOGISTICS & TRADE FINANCE',
      slide1Subtitle: 'Driving global supply chains with efficiency, infrastructure and capital',
      slide2Title: 'INTEGRATED LOGISTICS & INFRASTRUCTURE\nFOR BULK COMMODITIES',
      slide2Subtitle: 'Connecting key international ports through tank terminals & capital'
    },
    about: {
      title: 'About Us',
      officerName: 'Raquel Cantero',
      officerRole: 'Chief Executive Officer (C.E.O.)',
      description: 'VS International Group is an independent physical commodities trading house headquartered in Miami, connecting origin markets with consumption hubs through logistics and trade finance.',
      bullets: [
        'Physical trading in energy and metals.',
        'Global strategic tank storage network in major ports.',
        'Tailored trade finance and private capital solutions.',
        'Active presence in USA, Europe, UAE and Brazil.'
      ],
      pillars: [
        {
          icon: 'icon-battery',
          title: 'Energy Products',
          description: 'Jet A1, EN590 diesel, crude oil, heavy fuel oil, naphtha, bitumen and petcoke supplies.'
        },
        {
          icon: 'icon-chart',
          title: 'Mining & Metals',
          description: 'Global marketing of aluminum, copper, gold, iron ore, lithium and industrial steel rebar.'
        },
        {
          icon: 'icon-leaf',
          title: 'Agri Commodities',
          description: 'Direct origination and distribution of sugar, cocoa, coffee, wheat, soybeans and rice.'
        },
        {
          icon: 'icon-shield',
          title: 'Trade Finance',
          description: 'Private credit, senior borrowing base facilities, receivables discounting and supply chain liquidity.'
        }
      ]
    },
    commodities: {
      title: 'Commodities Divisions',
      subtitle: 'Global physical trading, integrated logistics, and structured liquidity across four core commodity divisions.',
      imageAlt: 'VS International Group Commodities Divisions: Metals, Agriculture, Energy, and Financial',
      badgeSector: 'Global Trading Portfolio',
      divisions: [
        {
          id: 'energy',
          title: 'Energy',
          badge: 'Primary Division',
          desc: 'Physical trading of middle distillates, heavy fuel oils, naphtha, asphalt, and crude oils backed by key terminal storage.',
          products: ['Jet A-1', 'EN590 10ppm', 'D6 Fuel Oil', 'Aliphatic / Aromatic Naphtha', 'Crude Oil'],
          actionText: 'Explore Energy Products →',
          actionLink: '#page-energy-products'
        },
        {
          id: 'metals',
          title: 'Metals',
          badge: 'Mining & Smelting',
          desc: 'Cross-border origination and global delivery of precious, base, and strategic metals for international manufacturing.',
          products: ['Gold Bullion 999.9', 'Fine Silver', 'Copper Cathodes Grade A', 'Aluminum P1020', 'Lithium'],
          actionText: 'Contact Metals Desk →',
          actionLink: '#page-contact'
        },
        {
          id: 'agriculture',
          title: 'Agriculture',
          badge: 'Soft Commodities',
          desc: 'Direct farm-to-port origination and bulk supply of vital food staples and essential agricultural soft commodities.',
          products: ['ICUMSA 45 Sugar', 'Raw Cocoa Beans', 'Arabica & Robusta Coffee', 'Soybeans & Wheat', 'White Rice'],
          actionText: 'Contact Agri Desk →',
          actionLink: '#page-contact'
        },
        {
          id: 'financial',
          title: 'Financial',
          badge: 'Trade Finance Desk',
          desc: 'Bespoke inventory-backed credit facilities, borrowing base loans, and transactional liquidity mitigating market risks.',
          products: ['Borrowing Base', 'Letters of Credit (LC / SBLC)', 'Invoice Discounting', 'Pre-export Finance'],
          actionText: 'Explore Trade Finance →',
          actionLink: '#page-pricing-plans'
        }
      ]
    },
    energyProducts: {
      title: 'Our Energy Products',
      subtitle: 'High-grade refined distillates, heavy fuel feedstocks, asphalt, naphtha, and crude grades for global counterparties.',
      imageAlt: 'Energy products terminal and refining storage facility',
      cards: [
        {
          id: 'middle-distillates',
          name: 'Middle Distillates',
          nameOriginal: 'Middle Distillates',
          products: 'Jet A1 , EN590, D6, Heating Oil, Gasoline',
          desc: 'Refined transportation and power generation fuels for commercial aviation and heavy transport.'
        },
        {
          id: 'heavy-fuel',
          name: 'Heavy Fuel and Feedstock',
          nameOriginal: 'Heavy Fuel and Feedstock',
          products: 'Low and high Sulfur Bunker, Heavy Fuel Oil, Pet coke',
          desc: 'High & low sulfur marine bunker fuels, residual fuel oil grades, and petroleum coke.'
        },
        {
          id: 'bitumen',
          name: 'Bitumen',
          nameOriginal: 'Bitumen',
          products: 'Asphalt',
          desc: 'Penetration grade and polymer-modified bitumen/asphalt for major infrastructure projects.'
        },
        {
          id: 'naphtha',
          name: 'Naphtha',
          nameOriginal: 'Naphtha',
          products: 'Aliphatic , Aromatic',
          desc: 'Light and heavy naphthas for catalytic reforming, gasoline blending, and petrochemical steam cracking.'
        },
        {
          id: 'crude-oil',
          name: 'Crude Oil',
          nameOriginal: 'Crude Oil',
          products: 'Heavy , Light',
          desc: 'Light sweet, medium, and heavy sour crude grades sourced from premier regional producers.'
        }
      ]
    },
    services: {
      title: 'Our Divisions',
      subheaderLeft: 'We deliver specialized commodity trading, maritime logistics and dedicated structured trade finance for partners.',
      subheaderRight: 'VS International connects global supply chains with reliable port storage and capital liquidity.',
      items: [
        {
          icon: 'icon-chart',
          title: 'Energy Products',
          desc: 'Middle distillates, Jet A1, EN590 diesel, crude oil, heavy fuel oil, naphtha, asphalt and petcoke.'
        },
        {
          icon: 'icon-wallet',
          title: 'Mining & Metals',
          desc: 'Global supply of high-grade copper, aluminum, lithium, gold, iron ore, steel rebar and uranium materials.'
        },
        {
          icon: 'icon-shield',
          title: 'Agricultural Softs',
          desc: 'Origination and delivery of premium sugar, cocoa, coffee, wheat, soybeans, soybean oil and white rice.'
        },
        {
          icon: 'icon-signpost',
          title: 'Trade Finance',
          desc: 'Bespoke private credit structures, receivables discounting, letter of credit issuance and working capital.'
        },
        {
          icon: 'icon-briefcase',
          title: 'Maritime Logistics',
          desc: 'Chartering specialized bulk and product tanker transport across strategic international maritime waterways and ports.'
        },
        {
          icon: 'icon-administration',
          title: 'Terminal Storage',
          desc: 'Strategic operated tank storage terminals across Houston, Rotterdam, Fujairah, Singapore, Mexico, Brazil and Australia.'
        }
      ],
      stats: [
        {
          num: '100',
          title: 'Trade Finance Secured',
          desc: 'Asset-backed senior credit structures providing liquidity and complete risk mitigation for global commodity transactions.'
        },
        {
          num: '100',
          title: 'Global Ports Covered',
          desc: 'Strategic tank storage across Houston, Rotterdam, Fujairah, Singapore, Mexico, Brazil and major Australian maritime terminals.'
        },
        {
          num: '100',
          title: 'Capital Efficiency',
          desc: 'Integrated end-to-end borrowing base, warehouse financing and physical supply chain capital management.'
        }
      ]
    },
    portfolio: {
      title: 'Global Storage & Logistics',
      filters: {
        all: 'All Strategic Terminals',
        image: 'Tank Storage & Refineries',
        video: 'Petroleum Tankers',
        example1: 'Crude & Fuel Hubs',
        example2: 'Offshore & Export Terminals'
      },
      items: [
        {
          title: 'Houston Terminal Tank Farm',
          subtitle: 'US Gulf Coast Energy Hub',
          desc: 'High-capacity liquid energy tank storage terminal offering deepwater berths, pipeline connections and custom blending for crude oil, refined fuels and middle distillates.'
        },
        {
          title: 'Rotterdam Bulk Fuel Terminal',
          subtitle: 'ARA European Trade Corridor',
          desc: 'Strategic European hub for clean petroleum products, jet A1, heating oil and bunkering feedstock with direct multimodal inland barge, refinery and pipeline connectivity.'
        },
        {
          title: 'Fujairah Bunkering Hub',
          subtitle: 'Middle East Strategic Terminal',
          desc: 'Premier regional bunkering and crude storage terminal located outside Strait of Hormuz, providing fast vessel turnaround and round-the-clock marine fueling operations.'
        },
        {
          title: 'Singapore Strait Operations',
          subtitle: 'Ship-to-Ship Crude Transshipment',
          desc: 'Floating storage and ship-to-ship (STS) crude oil transfer facilities servicing VLCC supertankers across Pacific rim energy supply lanes.'
        },
        {
          title: 'Santos Basin Offshore Oil Terminal',
          subtitle: 'Deepwater Crude Production Hub',
          desc: 'Offshore deepwater oil production platforms and FPSO crude storage units connecting pre-salt oil reserves with global petroleum export corridors.'
        },
        {
          title: 'Corpus Christi Crude Export Terminal',
          subtitle: 'Deepwater Oil Export Gateway',
          desc: 'Specialized deepwater marine export facility designed for direct VLCC supertanker loading of WTI crude oil and refined petroleum distillates.'
        }
      ],
      quotes: [
        {
          text: 'VS International Group provides exceptional liquidity and reliable physical delivery schedules across our refined petroleum import contracts.',
          author: 'Global Energy Offtaker',
          occupation: 'Refinery Director'
        },
        {
          text: 'Their flexible borrowing base facilities and tank terminal access in Houston and Rotterdam have significantly accelerated our cross-border trade execution.',
          author: 'Commercial Trade Bank',
          occupation: 'Credit Partner'
        },
        {
          text: 'A disciplined physical trading house with deep market intelligence, robust risk mitigation and outstanding supply chain execution across international ports.',
          author: 'Industrial Smelter Group',
          occupation: 'Metals Procurement'
        },
        {
          text: 'From origin financing to destination vessel discharge, their integrated capital and logistics model delivers consistent value and operational certainty.',
          author: 'Agricultural Consortium',
          occupation: 'Supply Chain Lead'
        }
      ]
    },
    team: {
      title: 'Leadership & Executive Team',
      subtitle: 'Leading professionals in physical commodities trading, maritime logistics, structured trade finance, and global business development.',
      executives: [
        {
          name: 'Gladys Raquel Cantero López',
          role: 'Chief Executive Officer & President (C.E.O. & President)',
          email: 'operations@vsinternationalllc.com',
          bio: 'Founder and executive leader of VS International Group LLC. Directs the firm’s global vision, sovereign and institutional banking partnerships, and the worldwide expansion of physical trading and trade finance across the Americas, Europe, UAE, and Asia.',
          skills: [
            { name: 'Global Commodities Trading', value: 95 },
            { name: 'Governance & Institutional Partnerships', value: 92 },
            { name: 'Trade Finance & Capital Strategy', value: 94 }
          ]
        },
        {
          name: 'Carlos Ibarra',
          role: 'Commercial Director',
          email: 'salesc@vsinternationalllc.com',
          bio: 'Leads global commercial direction, physical supply contract origination, and strategic partnerships with refineries, wholesale marketers, and industrial offtakers across the world’s primary trade corridors.',
          skills: [
            { name: 'Global Commercial Development', value: 94 },
            { name: 'Supply Contract Negotiation', value: 92 },
            { name: 'Refinery & Offtaker Relations', value: 89 }
          ]
        },
        {
          name: 'Betania Biagini',
          role: 'Global Trading Manager',
          email: 'biagini@vsinternationalllc.com',
          bio: 'Directs the physical trading desk for middle distillates, fuels, and energy commodities. Specializes in market differential analysis, international arbitrage structures, and chartering and maritime freight optimization for FOB and CIF deliveries.',
          skills: [
            { name: 'Physical Distillates Trading', value: 93 },
            { name: 'Market Arbitrage & Hedging', value: 90 },
            { name: 'Maritime Logistics & Chartering', value: 88 }
          ]
        },
        {
          name: 'Fredd Ortega',
          role: 'Product Acquisition',
          email: 'fortega@vsinternationalllc.com',
          bio: 'Heads origination and procurement of physical commodities at production heads and terminal hubs. Specializes in independent quality inspection (SGS/Saybolt), technical cargo auditing, and energy and mineral supply chain management.',
          skills: [
            { name: 'Upstream Sourcing & Acquisition', value: 91 },
            { name: 'Quality Control & SGS Verification', value: 90 },
            { name: 'Terminal Storage & Operations', value: 87 }
          ]
        },
        {
          name: 'Michele Carvalho',
          role: 'Director of Operations & Business Development',
          email: 'michele@vsinternationalllc.com',
          bio: 'Oversees global transaction execution, cross-border contract compliance, and business development across Latin America and strategic emerging markets. Ensures rigorous operational risk mitigation and vessel logistics execution.',
          skills: [
            { name: 'Global Operations & Logistics', value: 92 },
            { name: 'Contract Execution & Compliance', value: 89 },
            { name: 'International Business Expansion', value: 90 }
          ]
        },
        {
          name: 'Eva García',
          role: 'Business Development Executive',
          email: 'egarcia@vsinternationalllc.com',
          bio: 'Drives strategic corporate partnerships, new buyer onboarding, and cross-border commercial structuring across agricultural and energy commodities in Europe, the Americas, and the Middle East.',
          skills: [
            { name: 'Corporate Partnership Structuring', value: 90 },
            { name: 'Client Onboarding & Relations', value: 89 },
            { name: 'Cross-Border Market Expansion', value: 86 }
          ]
        },
        {
          name: 'Jorge Eger',
          role: 'Business Development Executive - Rare Earths & Mining Projects',
          email: 'eger@vsinternationalllc.com',
          bio: 'Specialist in the structuring and development of critical minerals, rare earths, and strategic industrial metals projects for the global technological transition. Connects mining assets and processing facilities with tier-1 industrial offtakers worldwide.',
          skills: [
            { name: 'Rare Earths & Critical Minerals', value: 92 },
            { name: 'Mining Project Structuring', value: 90 },
            { name: 'Industrial Supply Offtake Chains', value: 87 }
          ]
        }
      ]
    },
    blog: {
      title: 'Market Intelligence',
      browseBtn: 'Browse Market Intelligence',
      repliesLabel: 'Replies',
      posts: [
        {
          day: '24',
          month: 'Sep',
          replies: '4',
          title: 'Global Energy Transition & Middle Distillates Arbitrage Dynamics',
          excerpt: 'Comprehensive analysis of ultra-low sulfur diesel EN590, Jet A1 aviation fuel flows and shifting marine bunker fuel specifications across Atlantic and European basins [...]',
          categories: ['Energy', 'Distillates', 'Refining'],
          author: 'Betania Biagini'
        },
        {
          day: '18',
          month: 'Sep',
          replies: '7',
          title: 'Structuring Non-Bank Trade Finance for Physical Commodity Flows',
          excerpt: 'How borrowing base facilities, warehouse receipt financing and collateralized private credit bridge critical liquidity gaps for mid-market commodity producers and global offtakers [...]',
          categories: ['Trade Finance', 'Private Credit', 'Capital'],
          author: 'Carlos Ibarra'
        },
        {
          day: '05',
          month: 'Sep',
          replies: '12',
          title: 'Critical Minerals Logistics: Copper, Lithium & Green Industrial Demand',
          excerpt: 'Strategic evaluation of supply chain infrastructure, port handling and shipping corridors connecting South American mineral deposits with global manufacturing and smelting hubs [...]',
          categories: ['Metals', 'Mining', 'Supply Chain'],
          author: 'Davi Assis'
        }
      ],
      tweets: [
        {
          text: 'Tank storage lease finalized in Rotterdam terminal expanding European middle distillates capacity to over 150,000 m3.',
          author: '@VSInternational',
          time: '2 hours ago'
        },
        {
          text: 'Senior asset-backed borrowing base facility successfully deployed for South American agricultural export program.',
          author: '@VSInternational',
          time: '1 day ago'
        },
        {
          text: 'New long-term offtake agreement secured for low-sulfur bunker fuel supply across key Caribbean and US Gulf ports.',
          author: '@VSInternational',
          time: '3 days ago'
        }
      ]
    },
    pricing: {
      title: 'Trade Finance Structures',
      inquireBtn: 'Inquire Facility',
      structures: [
        {
          name: 'Import / Export',
          price: 'Senior',
          period: 'Asset-Backed',
          desc: 'Transactional senior secured facilities for cross-border physical flows.',
          features: ['Direct collateral control', 'Confirmed letter of credit', '30 to 180 day tenors']
        },
        {
          name: 'Borrowing Base',
          price: 'Collateral',
          period: 'Revolving Credit',
          desc: 'Lending facilities structured against eligible inventory and receivables.',
          features: ['Dynamic borrowing formula', 'Regular inspection audits', 'Working capital growth']
        },
        {
          name: 'Supply Chain',
          price: 'Receivables',
          period: 'Liquidity Facility',
          desc: 'Discounting and buyer-backed financing from origin farm to fork.',
          features: ['Non-recourse discounting', 'Early supplier payment', 'Full risk mitigation']
        },
        {
          name: 'Inventory & REPO',
          price: 'Warehouse',
          period: 'Terminal Liquidity',
          desc: 'Financing against storage in certified tank farms and bonded yards.',
          features: ['Tank storage inventory', 'Exchange deliverable REPO', 'Pre-export production funding']
        }
      ],
      advantagesTitle: 'Credit Advantages',
      advantages: [
        { icon: 'icon-briefcase', title: 'Senior Security', text: 'Strict asset-backed underwriting safeguarding capital.' },
        { icon: 'icon-adjust', title: 'Risk Analysis', text: 'Comprehensive counterparty and geopolitical due diligence.' },
        { icon: 'icon-money', title: 'Funds Protection', text: 'Escrow accounts and verified title control.' },
        { icon: 'icon-chart', title: 'Capital Efficiency', text: 'Rapid turnaround times compared to traditional banks.' },
        { icon: 'icon-oscilloscope', title: 'Derivatives Hedge', text: 'Integrated commodity price risk management and hedging.' },
        { icon: 'icon-database', title: 'Terminal Storage', text: 'Direct monitoring in Rotterdam, Houston and Fujairah.' }
      ],
      faqTitle: 'Trade Finance FAQ',
      faqs: [
        {
          q: 'What commodities are eligible for financing?',
          content: 'We finance high-liquidity, marketable physical commodities including middle distillates (Jet A1, EN590), copper cathodes, aluminum, lithium, cane sugar, cocoa, coffee, grains and mineral concentrates.'
        },
        {
          q: 'How is collateral secured during transit?',
          content: 'Collateral is secured via endorsed negotiable Bills of Lading, warehouse receipts from independent inspection agencies (SGS, Saybolt), and pledge agreements with strict title control.'
        },
        {
          q: 'What are the typical tenors and structures?',
          content: 'Typical facility tenors range from 30 days to 180 days for transactional trade flows, and up to 360 days for revolving borrowing base and pre-export financing structures.'
        },
        {
          q: 'Which jurisdictions does VS International operate in?',
          content: 'Headquartered in the United States (Miami, FL), with active operations, banking partners, and physical presence across the Americas, European trading hubs, UAE, and Southeast Asia.'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      subheaderLeft: 'Contact our commercial trading desks or structured trade finance teams for transactions.',
      subheaderRight: 'VS INTERNATIONAL GROUP LLC operates from Miami with international desks and storage.',
      namePlaceholder: 'Your Name *',
      emailPlaceholder: 'Corporate E-mail *',
      websitePlaceholder: 'Company / Website',
      messagePlaceholder: 'Commodity Inquiries, Specifications or Trade Finance Requirements *',
      submitBtn: 'Submit Inquiry',
      transmittingBtn: 'Transmitting...',
      successMsg: '✓ Thank you! Your message has been received. Our trading desk will respond promptly.',
      errorMsg: '⚠ Please fill in your name, email, and message.',
      postalLabel: 'Postal Address:',
      desksLabel: 'Desks:',
      operationsDesk: 'Operations:',
      commercialDesk: 'Commercial:',
      tradingDesk: 'Trading:'
    },
    footer: {
      copyright: '© 2026 VS INTERNATIONAL GROUP LLC. All Rights Reserved.',
      developedBy: 'Developed by',
      switchLang: 'Language / Idioma:',
      currentLangLabel: 'English'
    }
  }
};
