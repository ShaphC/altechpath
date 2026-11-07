import { NextResponse } from "next/server";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.email().max(254),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  if (!apiKey || !groupId) {
    return NextResponse.json(
      { error: "Email signup is not configured yet." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = subscribeSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Enter a valid email and accept the course emails.",
      },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: parsed.data.email,
          groups: [groupId],
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      },
    );

    if (!response.ok) {
      console.error("MailerLite subscription failed:", response.status);

      return NextResponse.json(
        {
          error: "Unable to subscribe right now. Please try again.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MailerLite request failed:", error);

    return NextResponse.json(
      {
        error: "Email service is temporarily unavailable.",
      },
      { status: 502 },
    );
  }
}
