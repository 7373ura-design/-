import Image from "next/image";
import Link from "next/link";

/** The official NAMI logo (emblem + wordmark). `stacked` uses the vertical version. */
export function Logo({
  stacked = false,
  className = "h-10 w-auto",
  priority = false,
}: {
  stacked?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link href="/" aria-label="NAMI — Home" className="inline-flex shrink-0 items-center">
      <Image
        src={stacked ? "/images/logo/nami-logo-stacked.png" : "/images/logo/nami-logo.png"}
        alt="NAMI"
        width={stacked ? 482 : 724}
        height={stacked ? 442 : 188}
        priority={priority}
        className={className}
      />
    </Link>
  );
}
