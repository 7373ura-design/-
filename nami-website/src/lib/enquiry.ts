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

export type EnquiryErrors = Partial<Record<keyof EnquiryFields | "files", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEnquiry(fields: EnquiryFields, files: { size: number; type: string }[] = []): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!fields.name.trim()) errors.name = "お名前を入力してください。";
  if (!fields.email.trim()) errors.email = "メールアドレスを入力してください。";
  else if (!EMAIL_RE.test(fields.email.trim())) errors.email = "メールアドレスの形式をご確認ください。";
  if (!fields.projectType) errors.projectType = "ご相談内容を選択してください。";
  if (!fields.message.trim()) errors.message = "メッセージを入力してください。";
  else if (fields.message.length > 5000) errors.message = "メッセージは5000文字以内でお願いします。";

  if (files.length > MAX_FILES) errors.files = `ファイルは${MAX_FILES}点までです。`;
  else if (files.reduce((n, f) => n + f.size, 0) > MAX_TOTAL_BYTES) errors.files = "ファイルの合計は10MBまでです。";
  else if (files.some((f) => f.type && !ACCEPTED_FILE_TYPES.includes(f.type)))
    errors.files = "JPG / PNG / WebP / HEIC / PDF のみアップロードできます。";
  return errors;
}
