import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID!;

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Neplatná e-mailová adresa." }, { status: 400 });
  }

  const { data, error } = await resend.contacts.create({
    audienceId,
    email,
    unsubscribed: false,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: "Registrácia zlyhala. Skúste znova." }, { status: 500 });
  }

  console.log("Contact created:", JSON.stringify(data));
  return NextResponse.json({ success: true });
}
