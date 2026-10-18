import { errorMessages, projectTypes, type ErrorKey } from "@/lib/enquiry";
import { T } from "@/lib/i18n";

/*
 * Enquiry form: one short page, no dates or meeting times — NAMI replies by
 * email and arranges the rest. The markup posts on its own; public/js/nami.js
 * checks the fields, sends it in the background and shows the thank-you note.
 * Field rules are shared with the API in lib/enquiry.ts.
 */

function Errors({ field, keys }: { field: string; keys: ErrorKey[] }) {
  return (
    <>
      {keys.map((k) => (
        <p key={k} data-error-for={field} data-error={k} hidden role="alert" className="mt-2 text-[0.8125rem] text-vermilion">
          <T ja={errorMessages[k].ja} en={errorMessages[k].en} />
        </p>
      ))}
    </>
  );
}

const pill =
  "flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-navy/25 px-5 py-3 text-[0.9375rem] text-navy transition-colors select-none hover:border-navy has-[:checked]:border-navy has-[:checked]:bg-navy has-[:checked]:text-paper has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-vermilion/60";

const input =
  "mt-2 block w-full rounded-none border-0 border-b border-navy/30 bg-transparent px-0 py-3 text-base text-navy placeholder:text-navy/35 transition-colors focus:border-vermilion focus:outline-none focus:ring-0 aria-[invalid=true]:border-vermilion";

function Text({
  name,
  label,
  required,
  type = "text",
  autoComplete,
  inputMode,
  errors = [],
}: {
  name: string;
  label: { ja: string; en: string };
  required?: boolean;
  type?: string;
  autoComplete?: string;
  inputMode?: "email" | "tel" | "text";
  errors?: ErrorKey[];
}) {
  return (
    <div>
      <label htmlFor={`eq-${name}`} className="label text-navy/80">
        <T ja={label.ja} en={label.en} />
        {required && <span className="ml-1 text-vermilion">*</span>}
      </label>
      <input
        id={`eq-${name}`}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className={input}
      />
      <Errors field={name} keys={errors} />
    </div>
  );
}

export function EnquiryForm({ preset }: { preset?: string }) {
  return (
    <div>
      <form data-enquiry action="/api/enquiry" method="post" noValidate aria-label="Enquiry" className="space-y-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <Text name="name" label={{ ja: "お名前", en: "Name" }} required autoComplete="name" errors={["nameRequired"]} />
          <Text
            name="email"
            type="email"
            label={{ ja: "メールアドレス", en: "Email" }}
            required
            autoComplete="email"
            inputMode="email"
            errors={["emailRequired", "emailInvalid"]}
          />
          <Text name="phone" type="tel" label={{ ja: "電話番号（任意）", en: "Phone (optional)" }} autoComplete="tel" inputMode="tel" />
          <Text name="location" label={{ ja: "お住まいの地域（任意）", en: "Suburb (optional)" }} autoComplete="address-level2" />
        </div>

        <fieldset>
          <legend className="label text-navy/80">
            <T ja="気になるサービス（任意）" en="Service you're interested in (optional)" />
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {projectTypes.map((p) => (
              <label key={p} className={pill}>
                <input type="radio" name="projectType" value={p} defaultChecked={preset === p} className="sr-only" />
                <span>{p}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="eq-message" className="label text-navy/80">
            <T ja="お問い合わせ内容" en="Your message" />
            <span className="ml-1 text-vermilion">*</span>
          </label>
          <textarea id="eq-message" name="message" rows={6} required maxLength={5000} className={`${input} resize-y`} />
          <Errors field="message" keys={["messageRequired", "messageTooLong"]} />
        </div>

        {/* Honeypot — leave empty */}
        <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Company
            <input name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div data-status hidden role="alert" className="border border-vermilion/40 p-4 text-[0.875rem] text-vermilion">
          <T
            ja="送信できませんでした。時間をおいてもう一度お試しいただくか、メールでご連絡ください。"
            en="Sorry, your message could not be sent. Please try again shortly, or email us."
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8125rem] leading-relaxed text-navy/60">
            <T ja="ご入力の内容は、お返事のためだけに使います。" en="We only use these details to reply to you." />
          </p>
          <button
            type="submit"
            data-submit
            className="label min-h-12 bg-vermilion px-10 text-paper transition-colors hover:brightness-95 disabled:opacity-60"
          >
            <T ja="送信する" en="Send enquiry" />
          </button>
        </div>
      </form>

      {/* Thank-you note, shown after sending */}
      <div data-enquiry-done hidden className="text-center">
        <svg viewBox="0 0 52 52" className="mx-auto h-16 w-16 text-vermilion" aria-hidden>
          <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 27l7 7 15-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="kicker mt-8">THANK YOU</p>
        <h2 data-done-title tabIndex={-1} className="title mt-4 text-[1.9rem] outline-none md:text-[2.4rem]">
          <T ja="お問い合わせを受け付けました" en="Thank you — your enquiry is in" />
        </h2>
        <span className="rule mx-auto mt-5" aria-hidden />
        <p className="jp-body mx-auto mt-6 max-w-[30em] text-[0.9375rem] text-navy/80">
          <T
            ja="内容を確認し、メールでお返事します。しばらくお待ちください。"
            en="We will read your message and reply by email."
          />
        </p>
        <a href="/" className="label mt-10 inline-flex min-h-12 items-center bg-navy px-6 text-paper transition-colors hover:bg-deep">
          <T ja="ホームへ戻る" en="Back to home" />
        </a>
      </div>
    </div>
  );
}
