export const WHATSAPP_PHONE = '6285727658604';

export const WHATSAPP_TEMPLATE_MESSAGE =
    'Halo Rona Jaya Trans, saya ingin booking travel.\n' +
    'Mohon info jadwal, ketersediaan kursi, dan tarif untuk rute saya. Terima kasih.';

export const createWhatsAppLink = (message = WHATSAPP_TEMPLATE_MESSAGE) =>
    `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
