import Image from "next/image";
import type { ImageAsset } from "@/lib/types";

/**
 * Framed photograph with a reveal-on-scroll wipe and optional hover zoom.
 * Placeholder SVGs are served unoptimised; real JPG/WebP go through next/image.
 */
export function Photo({
  image,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  hoverZoom = false,
  reveal = true,
}: {
  image: ImageAsset;
  className?: string;
  sizes?: string;
  priority?: boolean;
  hoverZoom?: boolean;
  reveal?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-beige ${className}`} data-reveal={reveal ? "image" : undefined}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={image.src.endsWith(".svg")}
        className={`object-cover ${hoverZoom ? "transition-transform duration-[1400ms] ease-[var(--ease-wave)] group-hover:scale-[1.04]" : ""}`}
      />
    </div>
  );
}
