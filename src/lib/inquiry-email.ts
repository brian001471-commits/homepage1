import nodemailer from "nodemailer";

export interface InquiryPayload {
  title: string;
  author: string;
  phone: string;
  affiliation: string;
  email: string;
  content: string;
}

export function isInquiryComplete(payload: Partial<InquiryPayload>): payload is InquiryPayload {
  return Boolean(
    payload.title?.trim() &&
      payload.author?.trim() &&
      payload.phone?.trim() &&
      payload.affiliation?.trim() &&
      payload.email?.trim() &&
      payload.content?.trim(),
  );
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  const port = Number(process.env.SMTP_PORT ?? 587);

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: { user, pass },
  });
}

export async function sendInquiryEmail(payload: InquiryPayload) {
  const transporter = getTransporter();
  if (!transporter) {
    throw new Error("SMTP_NOT_CONFIGURED");
  }

  const to = process.env.INQUIRY_TO_EMAIL ?? "june@nanumlab.com";
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;

  await transporter.sendMail({
    from,
    to,
    replyTo: payload.email,
    subject: `[나눔랩 문의] ${payload.title}`,
    text: [
      `제목: ${payload.title}`,
      `작성자: ${payload.author}`,
      `연락처: ${payload.phone}`,
      `소속: ${payload.affiliation}`,
      `이메일: ${payload.email}`,
      "",
      "내용:",
      payload.content,
    ].join("\n"),
  });
}
