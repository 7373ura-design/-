/** Shared enquiry schema — used by the enquiry form and the API route. */

export const projectTypes = [
  "Interior Consultation",
  "Concept Design",
  "Space Planning",
  "Styling",
] as const;

export type EnquiryFields = {
  name: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  message: string;
};

export const fieldNames: (keyof EnquiryFields)[] = ["name", "email", "phone", "location", "projectType", "message"];

/** Validation messages in both languages; the API returns the keys, the form shows the text. */
export const errorMessages = {
  nameRequired: { ja: "お名前を入力してください。", en: "Please enter your name." },
  emailRequired: { ja: "メールアドレスを入力してください。", en: "Please enter your email address." },
  emailInvalid: { ja: "メールアドレスの形式をご確認ください。", en: "Please check your email address." },
  messageRequired: { ja: "お問い合わせ内容を入力してください。", en: "Please write a short message." },
  messageTooLong: { ja: "メッセージは5000文字以内でお願いします。", en: "Please keep your message under 5,000 characters." },
} as const;

export type ErrorKey = keyof typeof errorMessages;
export type EnquiryErrors = Partial<Record<keyof EnquiryFields, ErrorKey>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(fields: EnquiryFields): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!fields.name.trim()) errors.name = "nameRequired";
  if (!fields.email.trim()) errors.email = "emailRequired";
  else if (!EMAIL_RE.test(fields.email.trim())) errors.email = "emailInvalid";
  if (!fields.message.trim()) errors.message = "messageRequired";
  else if (fields.message.length > 5000) errors.message = "messageTooLong";
  // The service is optional; anything outside the list is simply dropped
  if (!projectTypes.includes(fields.projectType as (typeof projectTypes)[number])) fields.projectType = "";
  return errors;
}
