/** Shared enquiry form schema — used by the form UI and the API route. */

export const projectTypes = [
  "Interior Consultation",
  "Concept Design",
  "Space Planning",
  "Styling",
  "Other",
] as const;

export const propertyTypes = ["House", "Apartment", "Townhouse", "Commercial", "Other"] as const;

export const budgetRanges = [
  "Under AUD 5,000",
  "AUD 5,000 – 15,000",
  "AUD 15,000 – 50,000",
  "AUD 50,000+",
  "Not sure yet",
] as const;

export const timelines = ["As soon as possible", "Within 3 months", "3 – 6 months", "6 months +", "Just exploring"] as const;

export const MAX_FILES = 5;
export const MAX_TOTAL_BYTES = 10 * 1024 * 1024; // 10 MB
export const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic", "application/pdf"];

export type EnquiryFields = {
  name: string;
  email: string;
  phone: string;
  location: string;
  projectType: string;
  propertyType: string;
  budget: string;
  timeline: string;
  message: string;
};

/** Validation messages in both languages; the API returns the keys, the form shows the text. */
export const errorMessages = {
  nameRequired: { ja: "お名前を入力してください。", en: "Please enter your name." },
  emailRequired: { ja: "メールアドレスを入力してください。", en: "Please enter your email address." },
  emailInvalid: { ja: "メールアドレスの形式をご確認ください。", en: "Please check your email address." },
  projectTypeRequired: { ja: "ご相談内容を選択してください。", en: "Please choose a project type." },
  messageRequired: { ja: "メッセージを入力してください。", en: "Please write a message." },
  messageTooLong: { ja: "メッセージは5000文字以内でお願いします。", en: "Please keep your message under 5,000 characters." },
  tooManyFiles: { ja: "ファイルは5点までです。", en: "You can upload up to 5 files." },
  filesTooLarge: { ja: "ファイルの合計は10MBまでです。", en: "Files can be up to 10 MB in total." },
  fileType: { ja: "JPG / PNG / WebP / HEIC / PDF のみアップロードできます。", en: "Only JPG, PNG, WebP, HEIC and PDF files can be uploaded." },
} as const;

export type ErrorKey = keyof typeof errorMessages;
export type EnquiryErrors = Partial<Record<keyof EnquiryFields | "files", ErrorKey>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(fields: EnquiryFields, files: { size: number; type: string }[] = []): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!fields.name.trim()) errors.name = "nameRequired";
  if (!fields.email.trim()) errors.email = "emailRequired";
  else if (!EMAIL_RE.test(fields.email.trim())) errors.email = "emailInvalid";
  if (!fields.projectType) errors.projectType = "projectTypeRequired";
  if (!fields.message.trim()) errors.message = "messageRequired";
  else if (fields.message.length > 5000) errors.message = "messageTooLong";

  if (files.length > MAX_FILES) errors.files = "tooManyFiles";
  else if (files.reduce((n, f) => n + f.size, 0) > MAX_TOTAL_BYTES) errors.files = "filesTooLarge";
  else if (files.some((f) => f.type && !ACCEPTED_FILE_TYPES.includes(f.type)))
    errors.files = "fileType";
  return errors;
}
