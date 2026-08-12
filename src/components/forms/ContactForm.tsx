"use client";

import { useId, useState } from "react";

import { contact } from "@/content/contact";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please tell us your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please add an email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "That does not look like a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "A little more detail would help — 10 characters minimum.";
  }

  return errors;
}

const inputClass =
  "min-h-11 w-full border border-line bg-surface px-3 py-2.5 text-sm text-ink transition-colors placeholder:text-ink-faint focus:border-accent focus:outline-none";

/**
 * Front-end only. The form validates properly and then tells the truth:
 * nothing is sent anywhere. Wire it to your own provider before launch.
 */
export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    email: "",
    message: "",
  });
  const [interest, setInterest] = useState(contact.interests[0] as string);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: Field, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      const firstField = (["name", "email", "message"] as Field[]).find(
        (field) => nextErrors[field],
      );
      if (firstField) document.getElementById(`${id}-${firstField}`)?.focus();
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-accent-soft bg-surface p-8 md:p-10"
      >
        <p className="serif text-2xl leading-tight">Thank you, {values.name}.</p>
        <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-soft">
          {contact.successNotice}
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setValues({ name: "", email: "", message: "" });
          }}
          className="link-quiet mt-6 min-h-11 text-sm text-ink-soft hover:text-ink"
        >
          Reset the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      <p className="text-sm leading-relaxed text-ink-faint">
        {contact.formIntro}
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id={`${id}-name`}
          label="Name"
          error={errors.name}
          required
        >
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            className={inputClass}
            placeholder="Your name"
          />
        </Field>

        <Field
          id={`${id}-email`}
          label="Email"
          error={errors.email}
          required
        >
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${id}-email-error` : undefined}
            className={inputClass}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <Field id={`${id}-interest`} label="I'm interested in">
        <select
          id={`${id}-interest`}
          name="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          className={inputClass}
        >
          {contact.interests.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field
        id={`${id}-message`}
        label="Message"
        error={errors.message}
        required
      >
        <textarea
          id={`${id}-message`}
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${id}-message-error` : undefined}
          className={`${inputClass} resize-y`}
          placeholder="What have the last few months looked like?"
        />
      </Field>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          className="min-h-11 border border-ink bg-ink px-8 text-sm tracking-wide text-bg transition-colors hover:border-accent hover:bg-accent"
        >
          Send message
        </button>
        <span className="text-xs text-ink-faint">
          Demo form — no data leaves your browser.
        </span>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required = false,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="eyebrow text-ink-soft">
        {label}
        {required ? (
          <span aria-hidden="true" className="text-clay">
            {" "}
            *
          </span>
        ) : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-xs text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}
