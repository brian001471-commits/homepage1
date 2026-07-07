import { NextResponse } from "next/server";
import { isInquiryComplete, sendInquiryEmail, type InquiryPayload } from "@/lib/inquiry-email";

export async function POST(request: Request) {
  let body: Partial<InquiryPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (!isInquiryComplete(body)) {
    return NextResponse.json({ error: "validation" }, { status: 400 });
  }

  try {
    await sendInquiryEmail(body);
    return NextResponse.json({ success: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "unknown";
    if (message === "SMTP_NOT_CONFIGURED") {
      return NextResponse.json({ error: "smtp_not_configured" }, { status: 503 });
    }
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
