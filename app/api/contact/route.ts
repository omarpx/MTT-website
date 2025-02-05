import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    // Email service setup
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465", 
      auth: { 
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      text: `Message from ${name} (${email}):\n\n${message}`,
    });

    return NextResponse.json({ success: "Message sent!" }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
