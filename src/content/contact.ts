/**
 * Contact details are fictional demo content. The contact form in this
 * template validates input and then shows a notice — it does not send email
 * and there is no backend.
 */
export const contact = {
  eyebrow: "Contact",
  title: "Start a conversation",
  lead: "Tell us roughly what you are looking for and we will suggest where to begin. We answer notes ourselves, usually within two working days.",
  address: {
    label: "Studio",
    lines: ["Cove Studio", "14 Wharf Lane", "Falmouth TR11 3AB", "Cornwall"],
  },
  email: "hello@cove.example.com",
  phone: "+44 (0)1326 000 000",
  hours: [
    { days: "Tuesday – Friday", time: "9:00 – 19:00" },
    { days: "Saturday", time: "9:00 – 16:00" },
    { days: "Sunday – Monday", time: "Closed" },
  ],
  /** Shown after a valid submission. Never claim a message was delivered. */
  successNotice:
    "This is a template demo. No message was sent and nothing was stored.",
  formIntro:
    "All fields marked with an asterisk are required. This form is a front-end demo — connect it to your own provider before going live.",
  interests: [
    "A treatment",
    "A retreat",
    "A private session",
    "Something else",
  ],
} as const;
