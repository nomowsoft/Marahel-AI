import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // const transporter = nodemailer.createTransport({
    //   host: "smtppro.zoho.eu",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `رسالة جديدة من ${name}`,
      html: `
        <h2>بيانات التواصل:</h2>
        <p><strong>الاسم:</strong> ${name}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>رقم الجوال:</strong> ${phone}</p>
        <hr />
        <p><strong>الرسالة:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "تم إرسال الرسالة بنجاح" });
  } catch (error) {
    console.error("خطأ أثناء إرسال البريد:", error);
    return NextResponse.json({ success: false, message: "حدث خطأ أثناء الإرسال " }, { status: 500 });
  }
}
