import { useState } from "react";
import { useWorkshop } from "@/lib/workshopContext";
import { TrendingDown, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

function LeakBar({ label, percentage, color }: { label: string; percentage: number; color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-foreground">{label}</span>
        <span className="text-muted-foreground">{percentage}% leak severity</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function LeakReport() {
  const { state, getLeakReport } = useWorkshop();
  const report = getLeakReport();
  const [joined, setJoined] = useState(false);
  const [joining, setJoining] = useState(false);

  const handleJoinWaitlist = async () => {
    setJoining(true);
    // For now, just simulate — will be connected to backend later
    await new Promise(r => setTimeout(r, 1000));
    setJoined(true);
    setJoining(false);
    toast({ title: "You're on the waitlist!", description: `We'll email you at ${state.email} when doors open.` });
  };

  const getLeakLevel = (pct: number) => {
    if (pct >= 66) return "High";
    if (pct >= 33) return "Moderate";
    return "Low";
  };

  const answeredCount = state.answers.length;
  const hasEnoughData = answeredCount >= 3;

  return (
    <section id="leak-report" className="py-16">
      <div className="mb-8 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          Your Results
        </p>
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <TrendingDown className="h-7 w-7 text-primary" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          {state.name}, here's your <em className="text-primary">Leak Report</em>
        </h2>
        {!hasEnoughData && (
          <p className="text-sm text-muted-foreground">
            Complete the diagnostic questions above for a more accurate report.
            <br />
            <span className="text-primary font-medium">{answeredCount}/9 questions answered</span>
          </p>
        )}
      </div>

      {/* Leak bars */}
      <div className="bg-card border border-border rounded-lg p-6 mb-6 space-y-5">
        <h3 className="text-base font-semibold text-foreground mb-2">Where you're leaking</h3>
        <LeakBar label={`💰 Money Leaks — ${getLeakLevel(report.money.percentage)}`} percentage={report.money.percentage} color="bg-primary" />
        <LeakBar label={`⏱ Time & Complexity — ${getLeakLevel(report.time.percentage)}`} percentage={report.time.percentage} color="bg-amber-500" />
        <LeakBar label={`⚙️ Systems & Assets — ${getLeakLevel(report.systems.percentage)}`} percentage={report.systems.percentage} color="bg-emerald-600" />
      </div>

      {/* Estimated waste */}
      <div className="bg-card border border-border rounded-lg p-6 mb-8 text-center">
        <p className="text-sm text-muted-foreground mb-1">Estimated monthly revenue leak</p>
        <p className="text-3xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
          ${report.estimatedMonthlyLeak.toLocaleString()}/mo
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          That's ~${(report.estimatedMonthlyLeak * 12).toLocaleString()} per year left on the table
        </p>
      </div>

      {/* Waitlist CTA */}
      <div className="bg-secondary/5 border border-primary/20 rounded-lg p-6">
        <p className="text-[10px] uppercase tracking-wider text-primary font-semibold mb-2">
          Your Next Step
        </p>
        <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          Want help <em className="text-primary">fixing</em> these leaks?
        </h3>
        <p className="text-sm text-muted-foreground mb-5">
          Join the waitlist for the Leak Fix Program — a guided experience with tools, templates, and group coaching to systematically plug your revenue leaks.
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Personalised action plan based on your leak report",
            "Proven frameworks and templates to fix each leak type",
            "Group coaching calls for accountability and support",
            "Access to purpose-built tools and apps",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground">
              <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="text-center">
          {joined ? (
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <CheckCircle className="h-5 w-5" />
                You're on the waitlist!
              </div>
              <p className="text-sm text-muted-foreground">
                We'll email you at <strong>{state.email}</strong> when doors open.
              </p>
            </div>
          ) : (
            <>
              <button
                onClick={handleJoinWaitlist}
                disabled={joining}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {joining ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    Join the Waitlist — It's Free <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              <p className="mt-2 text-[10px] text-muted-foreground">
                No credit card · No spam · We'll only email when doors open
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
