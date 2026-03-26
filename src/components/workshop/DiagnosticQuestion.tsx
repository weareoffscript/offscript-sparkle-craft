import { useWorkshop, DiagnosticAnswer } from "@/lib/workshopContext";

interface DiagnosticOption {
  label: string;
  value: string;
  score: number;
}

interface DiagnosticQuestionProps {
  questionId: string;
  category: "money" | "time" | "systems";
  question: string;
  options: DiagnosticOption[];
}

export function DiagnosticQuestion({ questionId, category, question, options }: DiagnosticQuestionProps) {
  const { addAnswer, getAnswer } = useWorkshop();
  const currentAnswer = getAnswer(questionId);

  const handleSelect = (option: DiagnosticOption) => {
    const answer: DiagnosticAnswer = {
      questionId,
      category,
      value: option.value,
      score: option.score,
    };
    addAnswer(answer);
  };

  return (
    <div className="my-8 bg-muted/40 border border-border rounded-lg p-6">
      <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-2">
        📊 Quick Check
      </p>
      <p className="text-sm font-semibold text-foreground mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((option) => {
          const isSelected = currentAnswer?.value === option.value;
          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`w-full text-left px-4 py-3 rounded-md border text-sm transition-all ${
                isSelected
                  ? "border-primary bg-primary/10 text-foreground font-medium"
                  : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
