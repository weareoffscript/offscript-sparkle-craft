import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ReflectionPromptProps {
  question: string;
  placeholder?: string;
}

export function ReflectionPrompt({ question, placeholder = "Type your reflection here..." }: ReflectionPromptProps) {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    toast({ title: "Reflection saved", description: "Nice work — keep going." });
    setValue("");
  };

  return (
    <div className="my-8 bg-muted/40 border border-border rounded-lg p-6">
      <p className="text-sm font-semibold text-foreground mb-3">✍️ Reflection</p>
      <p className="text-sm text-muted-foreground mb-4 italic">{question}</p>
      <div className="flex gap-2">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="flex-1 min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-3 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Send <Send className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
