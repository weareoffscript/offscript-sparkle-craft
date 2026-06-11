import { createContext, useContext, useState, ReactNode } from "react";

export interface DiagnosticAnswer {
  questionId: string;
  category: "money" | "time" | "systems";
  value: string;
  score: number; // 0–3, higher = more leaky
}

interface WorkshopState {
  email: string;
  name: string;
  isGated: boolean;
  answers: DiagnosticAnswer[];
  checkedItems: Record<string, boolean[]>;
}

interface WorkshopContextType {
  state: WorkshopState;
  setEntry: (name: string, email: string) => void;
  skipGate: () => void;
  addAnswer: (answer: DiagnosticAnswer) => void;
  getAnswer: (questionId: string) => DiagnosticAnswer | undefined;
  setCheckedItems: (sectionKey: string, checked: boolean[]) => void;
  getLeakReport: () => LeakReport;
}

export interface LeakReport {
  money: { score: number; max: number; percentage: number };
  time: { score: number; max: number; percentage: number };
  systems: { score: number; max: number; percentage: number };
  totalScore: number;
  totalMax: number;
  totalPercentage: number;
  estimatedMonthlyLeak: number;
}

const WorkshopContext = createContext<WorkshopContextType | null>(null);

export function WorkshopProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<WorkshopState>(() => {
    const saved = localStorage.getItem("workshop-state");
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return { email: "", name: "", isGated: true, answers: [], checkedItems: {} };
  });

  const persist = (newState: WorkshopState) => {
    setState(newState);
    localStorage.setItem("workshop-state", JSON.stringify(newState));
  };

  const setEntry = (name: string, email: string) => {
    persist({ ...state, name, email, isGated: true });
  };

  const skipGate = () => {
    persist({ ...state, isGated: true });
  };

  const addAnswer = (answer: DiagnosticAnswer) => {
    const filtered = state.answers.filter(a => a.questionId !== answer.questionId);
    persist({ ...state, answers: [...filtered, answer] });
  };

  const getAnswer = (questionId: string) => {
    return state.answers.find(a => a.questionId === questionId);
  };

  const setCheckedItems = (sectionKey: string, checked: boolean[]) => {
    persist({ ...state, checkedItems: { ...state.checkedItems, [sectionKey]: checked } });
  };

  const getLeakReport = (): LeakReport => {
    const categories: ("money" | "time" | "systems")[] = ["money", "time", "systems"];
    const maxPerQuestion = 3;

    // Count questions per category from DIAGNOSTIC_QUESTIONS
    const questionCounts = { money: 3, time: 3, systems: 3 };
    
    const report = {} as Record<string, { score: number; max: number; percentage: number }>;
    let totalScore = 0;
    let totalMax = 0;

    for (const cat of categories) {
      const catAnswers = state.answers.filter(a => a.category === cat);
      const score = catAnswers.reduce((sum, a) => sum + a.score, 0);
      const max = questionCounts[cat] * maxPerQuestion;
      report[cat] = { score, max, percentage: max > 0 ? Math.round((score / max) * 100) : 0 };
      totalScore += score;
      totalMax += max;
    }

    // Estimate monthly leak based on score percentage
    // Higher score = more leaks = higher estimated waste
    const leakPercentage = totalMax > 0 ? totalScore / totalMax : 0;
    // Rough estimate: 5%–25% of assumed $5K–$10K monthly revenue
    const estimatedMonthlyLeak = Math.round(leakPercentage * 2500 + 200);

    return {
      money: report.money || { score: 0, max: 9, percentage: 0 },
      time: report.time || { score: 0, max: 9, percentage: 0 },
      systems: report.systems || { score: 0, max: 9, percentage: 0 },
      totalScore,
      totalMax,
      totalPercentage: totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0,
      estimatedMonthlyLeak,
    };
  };

  return (
    <WorkshopContext.Provider value={{ state, setEntry, skipGate, addAnswer, getAnswer, setCheckedItems, getLeakReport }}>
      {children}
    </WorkshopContext.Provider>
  );
}

export function useWorkshop() {
  const ctx = useContext(WorkshopContext);
  if (!ctx) throw new Error("useWorkshop must be used within WorkshopProvider");
  return ctx;
}
