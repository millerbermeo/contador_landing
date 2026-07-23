import { SITE } from './site';

export function organizationSchema() {
  return {
    '@type': 'Organization',
    name: `${SITE.name} ${SITE.nameSuffix}`,
    url: SITE.url,
    logo: `${SITE.url}/logotipo.jpeg`,
    description: 'Asesoría contable, tributaria y fiscal en Colombia.',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: SITE.fullName,
      jobTitle: SITE.role,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Florencia',
      addressRegion: 'Caquetá',
      addressCountry: 'CO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phoneRaw,
      contactType: 'customer service',
      email: SITE.email,
      availableLanguage: ['Spanish'],
    },
    sameAs: [SITE.tiktok, SITE.facebook, SITE.instagram],
  };
}

export function localBusinessSchema() {
  return {
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: `${SITE.name} ${SITE.nameSuffix}`,
    url: SITE.url,
    image: `${SITE.url}/og-image.jpg`,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Florencia',
      addressRegion: 'Caquetá',
      addressCountry: 'CO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 1.6144,
      longitude: -75.6072,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    sameAs: [SITE.tiktok, SITE.facebook, SITE.instagram],
  };
}

export function personSchema() {
  return {
    '@type': 'Person',
    name: SITE.fullName,
    jobTitle: SITE.role,
    alumniOf: SITE.university,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Florencia',
      addressRegion: 'Caquetá',
      addressCountry: 'CO',
    },
    url: SITE.url,
    sameAs: [SITE.tiktok],
  };
}

export function accountingServiceSchema() {
  return {
    '@type': 'AccountingService',
    name: `${SITE.name} ${SITE.nameSuffix}`,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Florencia',
      addressRegion: 'Caquetá',
      addressCountry: 'CO',
    },
    areaServed: 'Colombia',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios Contables',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Asesorías Contables' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Declaración de Renta' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Facturación Electrónica' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creación de Empresas' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nómina y Gestión Laboral' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consultoría Tributaria' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contabilidad para Empresas' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contabilidad para Personas Naturales' } },
      ],
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };
}

export function serviceSchema(service: {
  title: string;
  description: string;
}) {
  return {
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      name: `${SITE.name} ${SITE.nameSuffix}`,
    },
    areaServed: 'Colombia',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: SITE.url,
      availableLanguage: 'Spanish',
    },
  };
}

export function blogPostSchema(post: {
  title: string;
  description: string;
  date: string;
  image?: string;
}) {
  return {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: SITE.fullName,
    },
    image: post.image || `${SITE.url}/og-image.jpg`,
    publisher: {
      '@type': 'Organization',
      name: `${SITE.name} ${SITE.nameSuffix}`,
    },
  };
}
