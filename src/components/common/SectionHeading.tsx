import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={`
        mb-10
        ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
      `}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.2em] text-amber-600">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}

      {children}
    </div>
  );
}