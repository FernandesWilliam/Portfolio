import {NextResponse} from 'next/server';
import {z} from 'zod';

const schema = z.object({
    subject: z.string(),
    mail: z.string().email(),
    message: z.string(),
});


export async function POST(request) {
    const payload = await request.json();
    const {subject, mail, message} = schema.parse(payload);
    if (!message) {
        return NextResponse.json({error: 'Message is required'}, {status: 400});
    }

    const webhookUrl = "https://discord.com/api/webhooks/1273035570351706213/0qRAF76JSaqZJShxa6eXDDDCuwccNsv5mTIJC6rj_mXYD00ENR7Yd4XZHaWC7VWzd1u7"; // Store your webhook URL in an environment variable

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: `**Email:** ${mail}\n**Subject:** ${subject}\n**Message:** ${message}`
            })
        });
        return NextResponse.json({success: true, message: 'Message sent to Discord'});
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500});
    }
}