import { ReactNode } from "react";

interface ContentSectionProps {
  label?: string;
  heading?: string;
  children: ReactNode;
}

export function ContentSection({ label, heading, children }: ContentSectionProps) {
  return (
    <div className="mb-10">
      {label && (
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">{label}</p>
      )}
      {heading && (
        <h3 className="text-2xl font-semibold text-foreground mb-4">{heading}</h3>
      )}
      <div className="text-sm leading-relaxed text-foreground/80 space-y-3">{children}</div>
    </div>
  );
}
