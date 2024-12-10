export default {
  global: {
    componenteFormativo:
      'Certificación de cableado estructurado: pruebas y estándares',
    descripcionCurso:
      'El presente componente formativo enseña los fundamentos de la certificación de cableado estructurado, incluyendo el uso y mantenimiento de equipos, pruebas de rendimiento como atenuación y diafonía, y la interpretación de resultados. Los aprendices entenderán cómo documentar instalaciones y aplicar prácticas que aseguren la conformidad con estándares internacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Equipos de certificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de certificadores',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Calibración y mantenimiento',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Parámetros de medición',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Pruebas de rendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Atenuación y pérdida',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diafonía y retardo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Mapeo de cables',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Interpretación de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Análisis de mediciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diagnóstico de problemas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Límites aceptables',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Documentación y garantía',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Informes de certificación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Garantías extendidas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Registros y archivos',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Equipos de certificación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024, 12 junio). Conceptos básicos y componentes de una red.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xaXbMzXJL3U',
    },
    {
      tema: '1. Equipos de certificación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023e, marzo 25). Introducción - Red física de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4PsaVqMeZJY',
    },
    {
      tema: '1. Equipos de certificación',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023d, marzo 25). Centros de datos.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=w4h4vsglRe4',
    },
    {
      tema: '2. Pruebas de rendimiento',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 23). Importancia de los equipos certificadores y los resultados de prueba.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=c0XkdVBPHlE>',
    },
    {
      tema: '2. Pruebas de rendimiento',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023f, marzo 27). Importancia de la correcta instalación de redes de fibra óptica 2023.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RBa6CSZDwaQ',
    },
    {
      tema: '2. Pruebas de rendimiento',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023g, marzo 27). Importancia de la instalación y el montaje del sistema eléctrico de una infraestructura de (TI).',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EKokaMonPPI',
    },
    {
      tema: '4. Documentación y garantía',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, marzo 23). Introducción a la documentación técnica de la instalación eléctrica.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rtFjKCqvo04',
    },
    {
      tema: '4. Documentación y garantía',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 23). Importancia de la ficha técnica en la infraestructura tecnológica.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zKLQxejRQ-s',
    },
  ],
  glosario: [
    {
      termino: 'Atenuación',
      significado:
        'Disminución de la intensidad de la señal a medida que viaja por el cable, medida en decibelios (dB).',
    },
    {
      termino: 'BIOS/UEFI',
      significado:
        '<i>Software</i> de bajo nivel que inicia y gestiona el hardware del sistema antes de cargar el sistema operativo.',
    },
    {
      termino: 'Calibración',
      significado:
        'Proceso de ajuste de un equipo de medición para que sus lecturas sean precisas y conformes a estándares.',
    },
    {
      termino: 'Categoría de cable',
      significado:
        'Clasificación que indica las especificaciones de rendimiento de un cable de red, como Cat 5e, Cat 6, etc.',
    },
    {
      termino: 'Certificación',
      significado:
        'Proceso de validación que asegura que el cableado cumple con los estándares de calidad y rendimiento.',
    },
    {
      termino: 'Configuración',
      significado:
        'Ajustes realizados en un sistema operativo o dispositivo para optimizar su rendimiento o funcionalidad.',
    },
    {
      termino: 'Diafonía (NEXT/FEXT)',
      significado:
        'Interferencia entre señales transmitidas por pares de cables cercanos. NEXT es la interferencia cercana, FEXT es la lejana.',
    },
    {
      termino: 'Documentación',
      significado:
        'Registro detallado de pruebas, configuraciones y resultados utilizados para la gestión y el soporte técnico.',
    },
    {
      termino: 'Equipo de certificación',
      significado:
        'Dispositivos utilizados para realizar pruebas en el cableado y validar su rendimiento y conformidad.',
    },
    {
      termino: 'Garantía extendida',
      significado:
        'Protección adicional ofrecida por fabricantes para asegurar el funcionamiento correcto del cableado a largo plazo.',
    },
    {
      termino: 'Impedancia',
      significado:
        'Resistencia total que un cable ofrece al flujo de corriente alterna, importante para minimizar la pérdida de señal.',
    },
    {
      termino: 'Instalación',
      significado:
        'Proceso de colocar y configurar físicamente el cableado y los componentes de red en un entorno específico.',
    },
    {
      termino: 'Mapeo de cables',
      significado:
        'Proceso que verifica que los conductores de un cable estén correctamente conectados en ambos extremos.',
    },
    {
      termino: 'Mantenimiento preventivo',
      significado:
        'Inspecciones y ajustes periódicos realizados para mantener los equipos y sistemas en buen estado.',
    },
    {
      termino: 'Par trenzado',
      significado:
        'Técnica en la que dos conductores eléctricos se tuercen para reducir la interferencia electromagnética.',
    },
    {
      termino: 'Pérdida de retorno',
      significado:
        'Cantidad de señal que se refleja de vuelta al transmisor debido a discontinuidades o fallos en el cableado.',
    },
    {
      termino: 'Pruebas de rendimiento',
      significado:
        'Evaluaciones que miden la calidad del cableado en términos de parámetros como atenuación, diafonía y retardo.',
    },
    {
      termino: 'Retardo de propagación',
      significado:
        'Tiempo que tarda una señal en viajar de un extremo al otro del cable.',
    },
    {
      termino: '<i>Skew</i> de retardo',
      significado:
        'Diferencia en el tiempo de llegada de las señales a través de diferentes pares de cables, afectando la sincronización.',
    },
    {
      termino: '<i>Software</i> de certificación',
      significado:
        'Programas que acompañan a los equipos de certificación, usados para analizar y documentar los resultados de las pruebas.',
    },
  ],
  referencias: [
    {
      referencia:
        'ANSI/TIA-1152-A. (2016). Requisitos para Instrumentos de Prueba de Campo y Mediciones para Cableado de Par Trenzado Balanceado. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'ANSI/TIA-568.3-D. (2016). Estándar de Cableado y Componentes de Fibra Óptica. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'BICSI. (2018). Manual de Métodos de Instalación de Sistemas de Tecnología de la Información (7ª ed.). BICSI.',
    },
    {
      referencia:
        'CENELEC EN 50173-1. (2018). Tecnología de la Información - Sistemas de Cableado Genérico - Parte 1: Requisitos Generales. Comité Europeo de Normalización Electrotécnica.',
    },
    {
      referencia:
        'CENELEC EN 50346. (2002). Tecnología de la Información - Instalación de Cableado - Pruebas del Cableado Instalado. Comité Europeo de Normalización Electrotécnica.',
    },
    {
      referencia:
        'Código Eléctrico Nacional (NEC). (2020). NFPA 70: Código Eléctrico Nacional. Asociación Nacional de Protección contra Incendios.',
    },
    {
      referencia:
        'Fluke Networks. (2015). Comprendiendo los Requisitos para Certificar el Cableado Categoría 6A. Fluke Networks.',
    },
    {
      referencia:
        'ISO/IEC 11801-1. (2017). Tecnología de la Información - Cableado Genérico para Locales de Clientes - Parte 1: Requisitos Generales. Organización Internacional de Normalización.',
    },
    {
      referencia:
        'ISO/IEC 14763-3. (2014). Tecnología de la Información - Implementación y Operación del Cableado en Locales de Clientes - Parte 3: Pruebas del Cableado de Fibra Óptica. Organización Internacional de Normalización.',
    },
    {
      referencia:
        'ISO/IEC 61935-1. (2019). Pruebas del Cableado de Comunicación Balanceado de Acuerdo con ISO/IEC 11801 - Parte 1: Cableado Instalado. Organización Internacional de Normalización.',
    },
    {
      referencia:
        'Johnson, H. W., & Graham, M. (2003). Propagación de Señales de Alta Velocidad: Magia Negra Avanzada. Prentice Hall.',
    },
    {
      referencia:
        'Kuchta, D. M., & Tolley, D. (2014). Cableado: La Guía Completa para Redes de Cobre y Fibra Óptica (5ª ed.). Sybex.',
    },
    {
      referencia:
        'Miller, R. (2012). Cableado de Redes Iluminado. Jones & Bartlett Learning',
    },
    {
      referencia:
        'Panduit Corp. (2016). Guías de Diseño de Cableado Estructurado. Panduit Corp.',
    },
    {
      referencia:
        'Siemon Company. (2017). Instalación y Mantenimiento de Cableado: Mejores Prácticas. Siemon Company.',
    },
    {
      referencia:
        'TIA-942-B. (2017). Estándar de Infraestructura de Telecomunicaciones para Centros de Datos. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'TIA-TSB-184-A. (2017). Guías para Soportar la Entrega de Energía a través de Cableado de Par Trenzado Balanceado. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'TIA-TSB-190. (2011). Guías sobre Vías Compartidas y Envolventes Compartidas. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'TIA-TSB-5019. (2019). Cableado Estructurado de Alto Rendimiento para Centros de Datos. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'TIA-TSB-5021. (2019). Guías para la Evaluación y Mitigación del Cableado Categoría 6 Instalado para Soportar 2.5GBASE-T y 5GBASE-T. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'TIA-TSB-5028. (2020). Guías para la Evaluación y Mitigación del Cableado Categoría 5e Instalado para Soportar 2.5GBASE-T. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'TIA-TSB-5048. (2018). Guías para Soportar la Entrega de Energía a través de Cableado de Par Trenzado Balanceado de 4 Pares. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'TIA-TSB-5069. (2020). Guías para la Evaluación y Mitigación del Cableado Categoría 6A Instalado para Soportar 25GBASE-T. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'TIA-TSB-5079. (2021). Guías para Soportar la Entrega de Energía a través de Cableado de Par Trenzado Balanceado de 4 Pares. Asociación de la Industria de las Telecomunicaciones.',
    },
    {
      referencia:
        'TIA-TSB-5080. (2021). Guías para Soportar la Entrega de Energía a través de Cableado de Par Trenzado Balanceado de 4 Pares. Asociación de la Industria de las Telecomunicaciones.',
    },
  ],
}
