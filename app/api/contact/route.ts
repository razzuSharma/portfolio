import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Your email — where all contact form submissions land
const TO_EMAIL = "razzusharma008@gmail.com";

// From address:
// - No domain verified yet? Use "onboarding@resend.dev" (works immediately, sends only to your own email)
// - Own domain verified? Use "contact@yourdomain.com"
const FROM_EMAIL = "onboarding@resend.dev";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as { name: string; email: string; message: string };

    // Validate
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[Contact] RESEND_API_KEY not set in environment.");
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,          // hitting Reply goes back to the sender
      subject: `Portfolio contact from ${name}`,
      html: `
        <div style="font-family: monospace; background: #0a0a0f; color: #e2e8f0; padding: 32px; max-width: 600px; border: 1px solid rgba(0,212,255,0.2);">
          <p style="color: #00d4ff; font-size: 11px; letter-spacing: 0.2em; margin: 0 0 24px;">PORTFOLIO · INCOMING TRANSMISSION</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a2744; color: #64748b; font-size: 11px; width: 100px;">FROM</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a2744; color: #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a2744; color: #64748b; font-size: 11px;">EMAIL</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #1a2744; color: #00d4ff;">${email}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #64748b; font-size: 11px; letter-spacing: 0.15em; margin-bottom: 12px;">MESSAGE</p>
            <p style="color: #e2e8f0; line-height: 1.7; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>

          <p style="color: #1a2744; font-size: 10px; margin-top: 32px; letter-spacing: 0.1em;">
            Sent via portfolio contact form · ${new Date().toUTCString()}
          </p>
        </div>
      `,
    });

    if (error) {
      // Log the full Resend error — check your terminal for details
      console.error("[Contact] Resend error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: "Failed to send message.", detail: error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[Contact] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error.", detail: String(err) }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
