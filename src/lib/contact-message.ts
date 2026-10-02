export interface ContactMessage {
  name: string;
  contact: string;
  message: string;
}

export type ContactField = keyof ContactMessage;

export type ContactFormState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      errors: Partial<Record<ContactField, string>>;
      values: Partial<ContactMessage>;
    };

const limits: Record<ContactField, { min: number; max: number }> = {
  name: { min: 2, max: 120 },
  contact: { min: 5, max: 200 },
  message: { min: 5, max: 5000 },
};

const messages: Record<ContactField, string> = {
  name: "Vpišite ime in priimek.",
  contact: "Vpišite e-poštni naslov ali telefonsko številko.",
  message: "Napišite sporočilo.",
};

export function parseContactMessage(formData: FormData) {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    contact: String(formData.get("contact") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  } satisfies ContactMessage;

  const errors: Partial<Record<ContactField, string>> = {};
  for (const field of Object.keys(limits) as ContactField[]) {
    const { min, max } = limits[field];
    const length = values[field].length;
    if (length < min || length > max) errors[field] = messages[field];
  }

  return { values, errors, valid: Object.keys(errors).length === 0 };
}
