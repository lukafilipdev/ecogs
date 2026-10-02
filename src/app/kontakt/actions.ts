"use server";

import {
  parseContactMessage,
  type ContactFormState,
  type ContactMessage,
} from "@/lib/contact-message";

async function deliverContactMessage(message: ContactMessage) {
  // TODO: connect an email provider (e.g. Resend, Postmark or SMTP) and send
  // the message to the parish office. Until then it is only logged.
  console.info("[kontakt] Novo sporočilo", message);
}

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real visitors never fill this hidden field.
  if (formData.get("website")) return { status: "success" };

  const { values, errors, valid } = parseContactMessage(formData);
  if (!valid) return { status: "error", errors, values };

  await deliverContactMessage(values);
  return { status: "success" };
}
