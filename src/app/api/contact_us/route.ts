import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const body = await request.json();
    const { name, email, phone, title, message } = body;

    try {
        await axios.post(`${apiUrl}/api/contact_us`, {
            name,
            email,
            phone,
            title,
            message
        });
        return NextResponse.json({ message: 'Request successful' }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending contact data:', error?.response?.data || error.message);
        return NextResponse.json(
            { message: 'Request failed', details: error?.response?.data || error.message },
            { status: 500 }
        );
    }
    
}
