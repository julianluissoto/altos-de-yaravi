'use server';

import { redirect } from 'next/navigation';

export async function openWhatsapp() {
    const phone = process.env.WHATSAPP_API_NUMBER;

    if (!phone) {
        throw new Error('WhatsApp number not configured');
    }

    redirect(`https://wa.me/${phone}`);
}
