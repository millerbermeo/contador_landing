export interface BlogPost {
  slug: string
  title: string
  description: string
  metaDescription: string
  date: string
  category: string
  image?: string
  author: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'guia-completa-declaracion-renta-personas-naturales-2025',
    title: 'Guía Completa: Declaración de Renta para Personas Naturales en 2025',
    description: 'Todo lo que necesita saber para declarar renta en Colombia en 2025: fechas, requisitos, deducciones y cómo evitar sanciones.',
    metaDescription: 'Guía completa de declaración de renta para personas naturales en Colombia 2025. Fechas, requisitos, deducciones, topes y cómo evitar sanciones de la DIAN.',
    date: '2025-06-15',
    category: 'Declaración de Renta',
    author: 'Brian Pedraza Osorio',
    content: `
La declaración de renta es una de las obligaciones tributarias más importantes para los colombianos. Cada año, la DIAN establece los plazos y requisitos que deben cumplir tanto personas naturales como jurídicas.

## ¿Quiénes deben declarar renta en 2025?

Está obligado a declarar si cumple alguna de estas condiciones:

- **Ingresos brutos** superiores a 4.900 UVT ($XX millones)
- **Patrimonio bruto** superior a 4.500 UVT
- **Consumos con tarjeta de crédito** superiores a 4.900 UVT
- **Compras y consumos** totales superiores a 4.900 UVT

## Fechas clave del calendario tributario 2025

La DIAN publica el calendario tributario anualmente. Las fechas de vencimiento se asignan según los últimos dígitos del NIT:

| Último dígito NIT | Fecha máxima |
|-------------------|--------------|
| 01 al 05 | Agosto 12 |
| 06 al 10 | Agosto 13 |
| 11 al 15 | Agosto 14 |
| ... y así sucesivamente |

## Deducciones más importantes

Puede deducir de su base gravable:

1. **Salud**: pagos a prepagada y medicina prepagada
2. **Educación**: matrículas y pensiones del contribuyente, cónyuge e hijos
3. **Intereses**: de créditos de vivienda
4. **Donaciones**: a entidades sin ánimo de lucro aprobadas
5. **Dependientes**: por cada persona a cargo

## Sanciones por no declarar

No presentar la declaración a tiempo genera:

- Sanción por extemporaneidad: 5% del impuesto a cargo por cada mes de retraso
- Sanción por no declarar: hasta el 20% del patrimonio líquido
- Intereses moratorios sobre el valor del impuesto

## ¿Cómo podemos ayudarle?

En BP Asesorías Contables le acompañamos en todo el proceso: desde la revisión de documentos hasta la presentación electrónica ante la DIAN. Maximizamos sus deducciones y minimizamos riesgos de sanciones.

**Contáctenos hoy** para una asesoría personalizada sin compromiso.
    `,
  },
  {
    slug: 'facturacion-electronica-obligatoria-colombia-2025',
    title: 'Facturación Electrónica en Colombia: Todo lo que Debe Saber en 2025',
    description: 'La facturación electrónica es obligatoria en Colombia. Conozca los plazos, requisitos y cómo implementarla en su negocio.',
    metaDescription: 'Facturación electrónica obligatoria en Colombia 2025. Requisitos DIAN, plazos, software autorizado y cómo implementarla en su negocio sin complicaciones.',
    date: '2025-05-20',
    category: 'Facturación Electrónica',
    author: 'Brian Pedraza Osorio',
    content: `
La facturación electrónica se ha convertido en una obligación ineludible para la mayoría de contribuyentes en Colombia. La DIAN ha establecido un calendario progresivo de implementación que ya cubre prácticamente a todos los sectores.

## ¿Qué es la facturación electrónica?

Es un documento digital que reemplaza la factura en papel. Debe cumplir con requisitos técnicos y tributarios establecidos por la DIAN, incluyendo la representación gráfica y el envío electrónico a la entidad.

## ¿Quiénes están obligados?

Desde 2020, la obligación se ha extendido progresivamente:

- **Grandes contribuyentes**: desde 2020
- **Personas jurídicas**: desde 2021
- **Personas naturales con ingresos superiores a 3.500 UVT**: desde 2022
- **Todos los contribuyentes**: gradualmente hasta cubrir la totalidad

## Requisitos para facturar electrónicamente

1. **RUT actualizado** con la responsabilidad de facturador electrónico
2. **Firma electrónica** vigente
3. **Software autorizado** por la DIAN (puede ser gratuito o de pago)
4. **Habilitación del sistema** ante la DIAN

## Beneficios de la facturación electrónica

- Reducción de costos en papel e impresión
- Automatización del proceso de facturación
- Respaldo digital seguro de todas las transacciones
- Facilidad para cumplir con la DIAN
- Menos errores en el registro de ventas

## ¿Cómo implementarla?

En BP Asesorías Contables le guiamos en todo el proceso: selección del software, habilitación ante la DIAN, configuración del sistema y capacitación para su equipo.

No espere a que llegue un requerimiento. Implemente hoy su facturación electrónica y evite sanciones.
    `,
  },
  {
    slug: 'regimen-simple-tributacion-ventajas-2025',
    title: 'Régimen Simple de Tributación: Ventajas para su Empresa en 2025',
    description: 'El Régimen Simple de Tributación (RST) puede reducir significativamente sus impuestos. Conozca si su empresa puede acogerse y cómo hacerlo.',
    metaDescription: 'Régimen Simple de Tributación (RST) en Colombia 2025. Ventajas, requisitos, tarifas y cómo acogerse. Reduzca legalmente sus impuestos.',
    date: '2025-04-10',
    category: 'Consultoría Tributaria',
    author: 'Brian Pedraza Osorio',
    content: `
El Régimen Simple de Tributación (RST) es una opción tributaria que simplifica el pago de impuestos y puede reducir significativamente la carga fiscal de las pequeñas y medianas empresas en Colombia.

## ¿Qué es el Régimen Simple?

Es un sistema alternativo de tributación que consolida varios impuestos en uno solo, con tarifas preferenciales. Reemplaza el pago de:

- Impuesto de Renta
- IVA
- ICA (Impuesto de Industria y Comercio)
- Retenciones en la fuente

## Ventajas principales

1. **Tarifas reducidas**: desde 1.8% hasta 14.5% según ingresos
2. **Un solo pago mensual**: simplifica la gestión tributaria
3. **Menos costos administrativos**: reduce el tiempo dedicado a impuestos
4. **Mayor liquidez**: el pago mensual evita acumulaciones grandes
5. **Formalización**: facilita la formalización de pequeños negocios

## ¿Quiénes pueden acogerse?

Personas naturales y jurídicas que cumplan:

- Ingresos brutos anuales inferiores a 100.000 UVT
- Que no estén excluidos por ley
- Que desarrollen actividades elegibles

## ¿Cómo acogerse?

1. Calcular si es más favorable que el régimen ordinario
2. Realizar la inscripción ante la DIAN
3. Comenzar a facturar bajo el nuevo régimen
4. Presentar declaraciones anuales simplificadas

## ¿Es mejor que el Régimen Ordinario?

Depende de cada caso. En BP Asesorías realizamos un análisis comparativo para determinar cuál régimen le genera menor carga fiscal. Contacte a nuestros expertos para una evaluación personalizada.
    `,
  },
  {
    slug: 'pasos-crear-empresa-colombia-2025',
    title: 'Cómo Crear una Empresa en Colombia: Pasos y Requisitos 2025',
    description: 'Guía paso a paso para crear su empresa en Colombia. Tipos societarios, costos, documentos y trámites ante Cámara de Comercio y DIAN.',
    metaDescription: 'Guía para crear una empresa en Colombia 2025. Tipos de sociedades (SAS, Ltda.), pasos, costos, documentos y trámites. Cámara de Comercio, DIAN y RUT.',
    date: '2025-03-05',
    category: 'Creación de Empresas',
    author: 'Brian Pedraza Osorio',
    content: `
Crear una empresa en Colombia es un proceso que ha simplificado significativamente en los últimos años. Sin embargo, es crucial hacerlo correctamente para evitar problemas legales y tributarios en el futuro.

## Paso 1: Definir el tipo de sociedad

Los tipos más comunes en Colombia son:

- **SAS (Sociedad por Acciones Simplificada)**: la más popular por su flexibilidad.
- **Sociedad Limitada**: recomendada para negocios familiares.
- **Sociedad Anónima**: para empresas grandes que buscan emitir acciones.
- **Empresa Unipersonal**: para emprendedores individuales.

## Paso 2: Verificar disponibilidad del nombre

Consulte en la Cámara de Comercio que el nombre deseado esté disponible. Puede hacerlo en línea a través del RUES.

## Paso 3: Elaborar documentos de constitución

Según el tipo societario, necesitará:

- **SAS**: documento privado inscrito en Cámara de Comercio
- **Ltda. o S.A.**: escritura pública ante notaría

## Paso 4: Registro mercantil

Inscriba la sociedad en el registro mercantil de la Cámara de Comercio. Este paso incluye el pago del impuesto de registro.

## Paso 5: Obtener el RUT

Regístrese en el RUT (Registro Único Tributario) ante la DIAN. Aquí definirá sus obligaciones tributarias.

## Paso 6: Firma electrónica y facturación

Adquiera la firma electrónica y habilite el sistema de facturación electrónica.

## ¿Cuánto cuesta?

Los costos varían según el capital y tipo societario. Incluyen derechos de inscripción, impuesto de registro y formularios. Le damos un presupuesto claro y sin sorpresas.

## ¿Cuánto tiempo toma?

Con una SAS, el proceso completo puede tomar entre 1 y 2 semanas si los documentos están en orden. Con otros tipos societarios, puede tomar más tiempo.

En BP Asesorías Contables le acompañamos en cada paso del proceso para que su empresa quede constituida correctamente y pueda empezar a operar lo antes posible.
    `,
  },
  {
    slug: 'deducciones-fiscales-impuestos-personas-naturales',
    title: 'Deducciones Fiscales Clave para Personas Naturales en Colombia',
    description: 'Conozca las deducciones fiscales más importantes para reducir su impuesto de renta como persona natural en Colombia.',
    metaDescription: 'Deducciones fiscales para personas naturales en Colombia 2025. Gastos deducibles en renta: salud, educación, vivienda, dependientes. Maximice su devolución.',
    date: '2025-02-18',
    category: 'Declaración de Renta',
    author: 'Brian Pedraza Osorio',
    content: `
Una de las estrategias más efectivas para pagar menos impuestos es aprovechar todas las deducciones fiscales a las que tiene derecho como persona natural. En Colombia, la ley permite deducir ciertos gastos personales que reducen su base gravable.

## ¿Qué son las deducciones fiscales?

Son gastos personales que la ley permite restar de sus ingresos brutos para calcular el impuesto a pagar. Entre más deducciones tenga, menos impuesto paga.

## Deducciones principales

### 1. Salud
- Pagos a planes de medicina prepagada
- Seguros de salud
- Gastos médicos y odontológicos no cubiertos por EPS
- Deducible: hasta 16% de los ingresos brutos

### 2. Educación
- Matrículas y pensiones en instituciones educativas
- Cursos de educación formal e informal
- Cubre al contribuyente, cónyuge e hijos hasta 25 años
- Tope: 4.800 UVT por persona

### 3. Intereses de vivienda
- Intereses de créditos hipotecarios
- Leasing habitacional
- Tope: 4.800 UVT

### 4. Dependientes
- Por cada persona a cargo (hijos menores, cónyuge, padres)
- Descuento de 72 UVT mensuales por cada dependiente
- Máximo 3 dependientes

### 5. Donaciones
- A entidades sin ánimo de lucro aprobadas
- Hasta el 30% de la renta líquida

## Errores comunes al declarar

- No incluir todas las deducciones a las que tiene derecho
- No tener los soportes documentales requeridos
- Declarar gastos que no cumplen los requisitos legales
- No actualizar la información de dependientes

## Maximice sus deducciones con ayuda profesional

Cada caso es único. En BP Asesorías Contables revisamos su situación particular para identificar todas las deducciones aplicables y asegurar que su declaración sea correcta y optimizada.
    `,
  },
]
