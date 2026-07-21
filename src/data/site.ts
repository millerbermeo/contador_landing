/**
 * Datos centralizados del sitio (contacto, redes, navegación).
 * Fuente única de verdad: cambia aquí y se refleja en todas las secciones.
 */
export const SITE = {
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

/** Genera un enlace de WhatsApp con mensaje opcional pre-cargado. */
export function waLink(message?: string): string {
	const base = `https://wa.me/${SITE.whatsapp}`;
	return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const NAV_LINKS = [
	{ label: 'Inicio', href: 'contador' },
	{ label: 'Servicios', href: 'servicios' },
	{ label: 'Nosotros', href: 'nosotros' },
	{ label: 'Planes', href: 'precios' },
	{ label: 'Preguntas Frecuentes', href: 'faq' },
];
