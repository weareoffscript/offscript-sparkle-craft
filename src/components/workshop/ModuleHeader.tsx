import { Clock, BookOpen } from "lucide-react";

interface ModuleHeaderProps {
  moduleLabel: string;
  title: string;
  italicTitle?: string;
  subtitle?: string;
  time?: string;
  hasWorkbook?: boolean;
}

export function ModuleHeader({ moduleLabel, title, italicTitle, subtitle, time, hasWorkbook }: ModuleHeaderProps) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
        {moduleLabel}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
        {title}
        {italicTitle && <em className="text-primary font-medium"> {italicTitle}</em>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      {(time || hasWorkbook) && (
        <div className="flex gap-3 mt-5">
          {time && (
            <span className="inline-flex items-center gap-1.5 text-xs bg-muted px-3 py-1.5 rounded-full text-muted-foreground">
              <Clock className="w-3.5 h-3.5" /> {time}
            </span>
          )}
          {hasWorkbook && (
            <span className="inline-flex items-center gap-1.5 text-xs bg-muted px-3 py-1.5 rounded-full text-muted-foreground">
              <BookOpen className="w-3.5 h-3.5" /> Workbook
            </span>
          )}
        </div>
      )}
    </div>
  );
}
