import Image from "next/image";
import Link from "next/link";

/**
 * The NAMI logo. Uses the image file at /images/logo/nami-logo.svg —
 * replace that file with the official logo; no code changes needed.
 * `tone="light"` turns any single-colour logo white for dark backgrounds.
 */
export function Logo({
  tone = "dark",
  className = "h-10 w-auto",
  priority = false,
}: {
  tone?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label="NAMI — Home" className="inline-flex shrink-0 items-center">
      <Image
        src="/images/logo/nami-logo.svg"
        alt="NAMI"
        width={260}
        height={72}
        priority={priority}
        unoptimized
        className={`${className} ${tone === "light" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
