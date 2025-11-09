import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const data = await req.formData();

        const firstName = data.get("firstName") as string;
        const lastName = data.get("lastName") as string;
        const email = data.get("email") as string;
        const mobileNumber = data.get("mobileNumber") as string;
        const nationality = data.get("nationality") as string;
        const countryOfResidence = data.get("countryOfResidence") as string;
        const degree = data.get("degree") as string;
        const major = data.get("major") as string;
        const graduationYear = data.get("graduationYear") as string;
        const experienceLevel = data.get("experienceLevel") as string;
        const resume = data.get("resume") as File | null;

        const transporter = nodemailer.createTransport({
            host: "smtp.zoho.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions: nodemailer.SendMailOptions = {
            from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `طلب توظيف جديد من ${firstName} ${lastName}`,
            html: `
        <h2>بيانات المتقدم للوظيفة:</h2>
        <p><strong>الاسم الأول:</strong> ${firstName}</p>
        <p><strong>الاسم الأخير:</strong> ${lastName}</p>
        <p><strong>البريد الإلكتروني:</strong> ${email}</p>
        <p><strong>رقم الجوال:</strong> ${mobileNumber}</p>
        <p><strong>الجنسية:</strong> ${nationality}</p>
        <p><strong>بلد الإقامة:</strong> ${countryOfResidence}</p>
        <p><strong>الدرجة العلمية:</strong> ${degree}</p>
        <p><strong>التخصص:</strong> ${major}</p>
        <p><strong>سنة التخرج:</strong> ${graduationYear}</p>
        <p><strong>مستوى الخبرة:</strong> ${experienceLevel}</p>
      `,
        };

        if (resume) {
            const buffer = Buffer.from(await resume.arrayBuffer());
            mailOptions.attachments = [
                {
                    filename: resume.name,
                    content: buffer,
                },
            ];
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "تم إرسال الطلب بنجاح" });
    } catch{
        return NextResponse.json(
            { success: false, message: "حدث خطأ أثناء الإرسال" },
            { status: 500 }
        );
    }
}
