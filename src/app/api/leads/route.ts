import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { name, phone } = await request.json();

        const apiKey = process.env.TRELLO_API_KEY;
        const token = process.env.TRELLO_TOKEN;
        const listId = process.env.TRELLO_LIST_ID;

        // If Trello is not configured, we just log and return (don't break the app flow)
        if (!apiKey || !token || !listId) {
            console.warn("⚠️ Trello credentials missing in .env.local");
            return NextResponse.json({ error: 'Trello configuration missing' }, { status: 500 });
        }

        const description = `**Novo Lead do Site**\n\n👤 **Nome:** ${name}\n📱 **WhatsApp:** ${phone}\n\n_Capturado via Modal do Site_`;

        // Create Card in Trello
        const trelloUrl = `https://api.trello.com/1/cards?idList=${listId}&key=${apiKey}&token=${token}`;

        const response = await fetch(trelloUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name, // Card Title
                desc: description, // Card Description
                pos: 'top' // Add to top of list
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("❌ Trello API Error:", errorText);
            return NextResponse.json({ error: 'Failed to create card on Trello' }, { status: response.status });
        }

        const data = await response.json();
        console.log("✅ Lead sent to Trello:", data.id);

        return NextResponse.json({ success: true, id: data.id });
    } catch (error) {
        console.error("❌ Internal Lead API Error:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
