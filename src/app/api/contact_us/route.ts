import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';

export async function POST(request: Request) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const body = await request.json();
  const { name, email, phone, title, message, website } = body;

  try {
    await axios.post(`${apiUrl}/api/contact_us`, {
      name,
      email,
      message,
      phone,
      title,
      website
    });

    return NextResponse.json({ message: 'Request successful' }, { status: 200 });

  } catch (error) {
    const axiosError = error as AxiosError;

    const errorMessage =
      axiosError.response?.data ||
      axiosError.message ||
      'Unknown error';

    console.error('Error sending contact data:', errorMessage);

    return NextResponse.json(
      { message: 'Request failed', details: errorMessage },
      { status: 500 }
    );
  }
}
