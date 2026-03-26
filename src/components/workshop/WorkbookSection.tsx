import { useState } from "react";
import { CheckSquare, Square } from "lucide-react";

interface WorkbookSectionProps {
  title?: string;
  items: string[];
}

export function WorkbookSection({ title = "📋 Workbook", items }: WorkbookSectionProps) {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));

  const toggle = (i: number) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <div className="my-8 bg-card border border-border rounded-lg p-6">
      <p className="text-sm font-semibold text-foreground mb-4">{title}</p>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <button
              onClick={() => toggle(i)}
              className="flex items-start gap-3 text-left text-sm w-full group"
            >
              {checked[i] ? (
                <CheckSquare className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              ) : (
                <Square className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
              )}
              <span className={checked[i] ? "line-through text-muted-foreground" : "text-foreground"}>
                {item}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
