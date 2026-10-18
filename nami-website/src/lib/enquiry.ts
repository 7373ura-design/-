/** Shared booking-request schema — used by the booking form and the API route. */

export const projectTypes = [
  "Interior Consultation",
  "Concept Design",
  "Space Planning",
  "Styling",
] as const;

/** How the first consultation takes place. */
export const consultTypes = [
  { value: "Online", ja: "オンライン", en: "Online" },
  { value: "In person", ja: "対面（シドニー）", en: "In person (Sydney)" },
  { value: "Phone", ja: "お電話", en: "Phone" },
] as const;

/** Times offered for a first consultation (Sydney time). */
export const timeSlots = ["10:00", "11:30", "13:00", "14:30", "16:00"] as const;

export type EnquiryFields = {
  name: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  consultType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

export const fieldNames: (keyof EnquiryFields)[] = [
  "name",
  "email",
  "phone",
  "location",
  "projectType",
  "consultType",
  "preferredDate",
  "preferredTime",
  "message",
];

/** Validation messages in both languages; the API returns the keys, the form shows the text. */
export const errorMessages = {
  nameRequired: { ja: "お名前を入力してください。", en: "Please enter your name." },
  emailRequired: { ja: "メールアドレスを入力してください。", en: "Please enter your email address." },
  emailInvalid: { ja: "メールアドレスの形式をご確認ください。", en: "Please check your email address." },
  projectTypeRequired: { ja: "ご相談内容を選んでください。", en: "Please choose a service." },
  consultTypeRequired: { ja: "ご相談の方法を選んでください。", en: "Please choose how you would like to meet." },
  dateRequired: { ja: "ご希望の日にちを選んでください。", en: "Please choose a date." },
  timeRequired: { ja: "ご希望の時間を選んでください。", en: "Please choose a time." },
  messageTooLong: { ja: "メッセージは5000文字以内でお願いします。", en: "Please keep your message under 5,000 characters." },
} as const;

export type ErrorKey = keyof typeof errorMessages;
export type EnquiryErrors = Partial<Record<keyof EnquiryFields, ErrorKey>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function validateEnquiry(fields: EnquiryFields): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!fields.name.trim()) errors.name = "nameRequired";
  if (!fields.email.trim()) errors.email = "emailRequired";
  else if (!EMAIL_RE.test(fields.email.trim())) errors.email = "emailInvalid";
  if (!projectTypes.includes(fields.projectType as (typeof projectTypes)[number])) errors.projectType = "projectTypeRequired";
  if (!consultTypes.some((c) => c.value === fields.consultType)) errors.consultType = "consultTypeRequired";
  if (!DATE_RE.test(fields.preferredDate)) errors.preferredDate = "dateRequired";
  if (!timeSlots.includes(fields.preferredTime as (typeof timeSlots)[number])) errors.preferredTime = "timeRequired";
  if (fields.message.length > 5000) errors.message = "messageTooLong";
  return errors;
}
