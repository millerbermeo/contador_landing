export const SITE = {
  url: 'https://brianpedraza.com',
  name: 'BP Asesorías',
  nameSuffix: 'Contables',
  fullName: 'Brian Pedraza Osorio',
  role: 'Contador Público en Colombia',
  university: 'Universidad de la Amazonia',
  location: 'Florencia, Caquetá',
  email: 'b.pedraza247@gmail.com',
  phone: '313 429 9697',
  phoneRaw: '+573134299697',
  whatsapp: '573054188289',
  whatsappDisplay: '305 418 8289',
  tiktok: 'https://www.tiktok.com/@bp.asesorias.contables',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
};

export function waLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const HEADER_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Sobre Mí', href: '/sobre-mi/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes/' },
  { label: 'Contacto', href: '/contacto/' },
];

export const FOOTER_SERVICES = [
  { label: 'Asesorías Contables', href: '/servicios/asesorias-contables/' },
  { label: 'Declaración de Renta', href: '/servicios/declaracion-renta/' },
  { label: 'Facturación Electrónica', href: '/servicios/facturacion-electronica/' },
  { label: 'Creación de Empresas', href: '/servicios/creacion-empresas/' },
  { label: 'Nómina y Gestión Laboral', href: '/servicios/nomina/' },
  { label: 'Consultoría Tributaria', href: '/servicios/consultoria-tributaria/' },
  { label: 'Contabilidad para Empresas', href: '/servicios/contabilidad-empresas/' },
  { label: 'Contabilidad para Personas', href: '/servicios/contabilidad-personas/' },
];

export const FOOTER_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios/' },
  { label: 'Sobre Mí', href: '/sobre-mi/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes/' },
  { label: 'Contacto', href: '/contacto/' },
];
