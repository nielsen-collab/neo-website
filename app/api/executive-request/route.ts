import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      firstName,
      lastName,
      company,
      email,
      message,
    } = data;


    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });


    // Nachricht an NEO / Arne

    await transporter.sendMail({
      from: `"NEO Executive Briefing" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: "Neue Executive-Briefing-Anfrage über NEO",

      text: `
Neue Executive-Briefing-Anfrage

Name:
${firstName} ${lastName}

Unternehmen:
${company}

E-Mail:
${email}

Nachricht:
${message}
      `,
    });



    // Automatische Bestätigung an Interessenten

    await transporter.sendMail({
      from: `"NEO · Nielsen Energy Operations" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Ihre Anfrage zum Executive Briefing bei NEO",

      text: `
Guten Tag ${firstName},

vielen Dank für Ihre Anfrage und Ihr Interesse an NEO.

Ihre Anfrage ist erfolgreich bei mir eingegangen.

Ich melde mich zeitnah persönlich bei Ihnen, um die nächsten Schritte zu besprechen.

Freundliche Grüße

Arne Nielsen
Founder · Nielsen Energy Operations
      `,
    });


    return NextResponse.json({
      success: true,
    });


  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }
}