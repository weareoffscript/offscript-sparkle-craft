import { ArrowRight } from "lucide-react";

interface NextModuleProps {
  targetId: string;
  label: string;
}

export function NextModule({ targetId, label }: NextModuleProps) {
  return (
    <div className="mt-12 pt-8 border-t border-border">
      <button
        onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
      >
        {label} <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
