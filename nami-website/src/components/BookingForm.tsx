import { consultTypes, errorMessages, projectTypes, timeSlots, type ErrorKey } from "@/lib/enquiry";
import { services } from "@/data/services";
import { CircleIcon, type IconName } from "@/components/washi";
import { T } from "@/lib/i18n";

/*
 * Booking request, in four steps: what, when, who, check. The markup is a
 * complete form on its own (one long page without JavaScript); public/js/nami.js
 * turns it into steps, builds the date picker, checks each step and shows the
 * confirmation. Field rules are shared with the API in lib/enquiry.ts.
 */

const serviceIcons: IconName[] = ["chat", "pen", "ruler", "chair"];

const steps = [
  { ja: "ご相談内容", en: "Service" },
  { ja: "日時", en: "Date & time" },
  { ja: "お客様情報", en: "Your details" },
  { ja: "確認", en: "Check" },
];

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

function StepTitle({ n, ja, en }: { n: number; ja: string; en: string }) {
  return (
    <legend data-step-title tabIndex={-1} className="mb-6 outline-none">
      <span className="kicker text-vermilion">0{n}.</span>
      <span className="title mt-2 block text-[1.6rem] md:text-[1.9rem]">
        <T ja={ja} en={en} />
      </span>
    </legend>
  );
}

const pill =
  "flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-navy/25 px-5 py-3 text-[0.9375rem] text-navy transition-colors select-none hover:border-navy has-[:checked]:border-navy has-[:checked]:bg-navy has-[:checked]:text-paper has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-vermilion/60 active:scale-[0.98]";

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
      <label htmlFor={`bk-${name}`} className="label text-navy/80">
        <T ja={label.ja} en={label.en} />
        {required && <span className="ml-1 text-vermilion">*</span>}
      </label>
      <input
        id={`bk-${name}`}
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

const summary: { field: string; ja: string; en: string }[] = [
  { field: "projectType", ja: "ご相談内容", en: "Service" },
  { field: "consultType", ja: "方法", en: "How" },
  { field: "preferredDate", ja: "ご希望日", en: "Date" },
  { field: "preferredTime", ja: "時間", en: "Time" },
  { field: "name", ja: "お名前", en: "Name" },
  { field: "email", ja: "メール", en: "Email" },
  { field: "phone", ja: "電話番号", en: "Phone" },
  { field: "location", ja: "地域", en: "Suburb" },
  { field: "message", ja: "メッセージ", en: "Message" },
];

function Summary() {
  return (
    <dl data-summary className="divide-y divide-navy/10 border-y border-navy/15">
      {summary.map((s) => (
        <div key={s.field} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 text-[0.9375rem] sm:grid-cols-[9rem_1fr]">
          <dt className="label pt-1 text-navy/55">
            <T ja={s.ja} en={s.en} />
          </dt>
          <dd data-sum={s.field} className="break-words text-navy">
            —
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function BookingForm({ preset }: { preset?: string }) {
  return (
    <div className="booking-wrap">
      <form
        data-booking
        action="/api/enquiry"
        method="post"
        noValidate
        aria-label="Booking request"
        className="booking"
      >
        {/* Progress */}
        <div data-nav-js className="mb-10">
          <ol data-progress className="grid grid-cols-4 gap-2 text-center">
            {steps.map((s, i) => (
              <li key={s.en} className="booking-dot text-[0.6875rem] tracking-[0.12em] text-navy/45">
                <span className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full border border-current text-[0.75rem]">
                  {i + 1}
                </span>
                <T ja={s.ja} en={s.en} className="hidden sm:inline" />
              </li>
            ))}
          </ol>
          <div className="mt-4 h-px w-full bg-navy/15">
            <span data-bar className="block h-px w-full origin-left scale-x-0 bg-vermilion transition-transform duration-500" />
          </div>
        </div>

        {/* 1 — Service and how */}
        <fieldset data-step="1" data-fields="projectType consultType" className="booking-step">
          <StepTitle n={1} ja="ご相談内容を選ぶ" en="What can we help with?" />
          <div className="grid gap-3 sm:grid-cols-2">
            {projectTypes.map((p, i) => {
              const s = services.find((x) => x.title === p);
              return (
                <label
                  key={p}
                  className="flex cursor-pointer items-center gap-4 border border-navy/20 p-4 transition-colors select-none hover:border-navy has-[:checked]:border-navy has-[:checked]:bg-paper has-[:checked]:shadow-[inset_3px_0_0_var(--color-vermilion)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-vermilion/60 active:scale-[0.99]"
                >
                  <input type="radio" name="projectType" value={p} required defaultChecked={preset === p} className="sr-only" />
                  <CircleIcon name={serviceIcons[i]} />
                  <span data-label>
                    <span className="title block text-[1.1rem]">{p}</span>
                    {s && (
                      <span className="block text-[0.8125rem] text-navy/65">
                        <T ja={s.sub.ja} en={s.sub.en} />
                      </span>
                    )}
                  </span>
                </label>
              );
            })}
          </div>
          <Errors field="projectType" keys={["projectTypeRequired"]} />

          <p className="label mt-10 text-navy/80">
            <T ja="ご相談の方法" en="How would you like to meet?" />
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {consultTypes.map((c) => (
              <label key={c.value} className={pill}>
                <input type="radio" name="consultType" value={c.value} required className="sr-only" />
                <span data-label>
                  <T ja={c.ja} en={c.en} />
                </span>
              </label>
            ))}
          </div>
          <Errors field="consultType" keys={["consultTypeRequired"]} />
        </fieldset>

        {/* 2 — Date and time */}
        <fieldset data-step="2" data-fields="preferredDate preferredTime" className="booking-step">
          <StepTitle n={2} ja="ご希望の日時" en="Pick a date and time" />
          <p className="label text-navy/80">
            <T ja="日にち" en="Date" />
          </p>
          <div data-dates className="date-strip no-scrollbar -mx-5 mt-3 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:px-0" />
          <div data-date-fallback>
            <input name="preferredDate" type="date" required className={input} aria-label="Preferred date" />
          </div>
          <Errors field="preferredDate" keys={["dateRequired"]} />

          <p className="label mt-10 text-navy/80">
            <T ja="時間（シドニー時間）" en="Time (Sydney time)" />
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
            {timeSlots.map((t) => (
              <label key={t} className={pill}>
                <input type="radio" name="preferredTime" value={t} required className="sr-only" />
                <span data-label>{t}</span>
              </label>
            ))}
          </div>
          <Errors field="preferredTime" keys={["timeRequired"]} />
          <p className="mt-6 text-[0.8125rem] leading-relaxed text-navy/60">
            <T
              ja="ご希望の日時をもとに調整し、確定のご連絡はメールでお送りします。"
              en="This is a request: we will confirm the time with you by email."
            />
          </p>
        </fieldset>

        {/* 3 — Details */}
        <fieldset data-step="3" data-fields="name email message" className="booking-step">
          <StepTitle n={3} ja="お客様情報" en="Your details" />
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
          <div className="mt-8">
            <label htmlFor="bk-message" className="label text-navy/80">
              <T ja="ご相談したいこと（任意）" en="Anything we should know? (optional)" />
            </label>
            <textarea id="bk-message" name="message" rows={4} maxLength={5000} className={`${input} resize-y`} />
            <Errors field="message" keys={["messageTooLong"]} />
          </div>
          {/* Honeypot — leave empty */}
          <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label>
              Company
              <input name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
        </fieldset>

        {/* 4 — Check */}
        <fieldset data-step="4" className="booking-step">
          <StepTitle n={4} ja="内容の確認" en="Check your request" />
          <Summary />
          <p className="mt-6 text-[0.8125rem] leading-relaxed text-navy/60">
            <T
              ja="送信すると、ご入力の内容はご相談のご連絡のためだけに使います。"
              en="We only use these details to reply to your request."
            />
          </p>
        </fieldset>

        <div data-status hidden role="alert" className="mt-6 border border-vermilion/40 p-4 text-[0.875rem] text-vermilion">
          <T
            ja="送信できませんでした。時間をおいてもう一度お試しいただくか、メールでご連絡ください。"
            en="Sorry, your request could not be sent. Please try again shortly, or email us."
          />
        </div>

        {/* Navigation — sticky on phones so the next step is always in reach */}
        <div className="booking-nav mt-10 flex items-center gap-3">
          <button type="button" data-prev data-nav-js className="label min-h-12 px-4 text-navy/70 hover:text-navy">
            ← <T ja="戻る" en="Back" />
          </button>
          <button
            type="button"
            data-next
            data-nav-js
            className="label ml-auto min-h-12 bg-navy px-8 text-paper transition-colors hover:bg-deep active:scale-[0.98]"
          >
            <T ja="次へ" en="Next" /> →
          </button>
          <button
            type="submit"
            data-submit
            className="label ml-auto min-h-12 bg-vermilion px-8 text-paper transition-colors hover:brightness-95 active:scale-[0.98] disabled:opacity-60"
          >
            <T ja="この内容で予約をリクエスト" en="Send booking request" />
          </button>
        </div>
      </form>

      {/* Confirmation, shown after a successful request */}
      <div data-booking-done hidden className="booking-done text-center">
        <svg viewBox="0 0 52 52" className="done-check mx-auto h-16 w-16 text-vermilion" aria-hidden>
          <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M15 27l7 7 15-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="kicker mt-8">BOOKING REQUESTED</p>
        <h2 data-done-title tabIndex={-1} className="title mt-4 text-[1.9rem] outline-none md:text-[2.4rem]">
          <T ja="ご予約のリクエストを受け付けました" en="Thank you — your request is in" />
        </h2>
        <span className="rule mx-auto mt-5" aria-hidden />
        <p className="jp-body mx-auto mt-6 max-w-[30em] text-[0.9375rem] text-navy/80">
          <T
            ja="内容を確認し、日時の確定についてメールでご連絡します。しばらくお待ちください。"
            en="We will read your request and email you to confirm the time."
          />
        </p>
        <p className="mt-8 text-[0.8125rem] text-navy/60">
          <T ja="受付番号" en="Reference" /> <span data-ref className="title ml-2 text-[1.1rem] text-navy" />
        </p>
        <div data-done-summary className="mx-auto mt-8 max-w-xl text-left" />
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button type="button" data-ics className="label min-h-12 border border-navy/40 px-6 text-navy transition-colors hover:bg-navy hover:text-paper">
            <T ja="カレンダーに追加" en="Add to calendar" />
          </button>
          <a href="/" className="label flex min-h-12 items-center bg-navy px-6 text-paper transition-colors hover:bg-deep">
            <T ja="ホームへ戻る" en="Back to home" />
          </a>
        </div>
      </div>
    </div>
  );
}
