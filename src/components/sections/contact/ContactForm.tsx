"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/app/kontakt/actions";
import { Button } from "@/components/ui/Button";
import type { ContactField, ContactFormState } from "@/lib/contact-message";
import { cn } from "@/lib/cn";

const initialState: ContactFormState = { status: "idle" };

const control =
  "rounded-none border-0 border-b border-input bg-transparent py-3 text-lg text-ink outline-none transition-colors focus:border-plum aria-invalid:border-red-700";

interface FieldProps {
  name: ContactField;
  label: string;
  error?: string;
  defaultValue?: string;
  autoComplete?: string;
  multiline?: boolean;
}

function Field({
  name,
  label,
  error,
  defaultValue,
  autoComplete,
  multiline,
}: FieldProps) {
  const errorId = `${name}-error`;
  const shared = {
    id: name,
    name,
    required: true,
    defaultValue,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-[13px] font-semibold text-muted">
        {label}
      </label>
      {multiline ? (
        <textarea {...shared} rows={4} className={cn(control, "resize-y")} />
      ) : (
        <input {...shared} className={control} />
      )}
      {error && (
        <p id={errorId} className="text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialState,
  );

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="mt-10 bg-white p-9 font-serif text-[32px] leading-[1.2]"
      >
        Hvala. Vaše sporočilo smo prejeli.
      </p>
    );
  }

  const errors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : {};

  return (
    <form action={formAction} className="mt-10 flex flex-col gap-7" noValidate>
      <Field
        name="name"
        label="Ime in priimek"
        autoComplete="name"
        error={errors.name}
        defaultValue={values.name}
      />
      <Field
        name="contact"
        label="E-pošta ali telefon"
        error={errors.contact}
        defaultValue={values.contact}
      />
      <Field
        name="message"
        label="Sporočilo"
        multiline
        error={errors.message}
        defaultValue={values.message}
      />

      {/* Honeypot for bots — hidden from people and assistive tech. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Button
        type="submit"
        variant="plum"
        disabled={pending}
        className="self-start px-[30px] py-[17px]"
      >
        {pending ? "Pošiljanje …" : "Pošlji sporočilo →"}
      </Button>
    </form>
  );
}
