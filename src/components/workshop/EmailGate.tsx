import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useWorkshop } from "@/lib/workshopContext";

export function EmailGate() {
  const { setEntry, skipGate } = useWorkshop();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setEntry(name.trim(), email.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-semibold mb-4">
          Free Crash Course
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
          The Revenue <em className="text-primary">Leak</em> Crash Course
        </h1>
        <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto">
          Discover where money, time, and energy are quietly draining from your business — and get a personalised leak report at the end.
        </p>

        <div className="bg-card border border-border rounded-lg p-6 text-left">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
            Enter your details to begin
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your first name"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Start the Crash Course <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <p className="text-[10px] text-muted-foreground text-center mt-3">
            No spam · Takes about 45 minutes · 100% free
          </p>
          <div className="mt-3 text-center">
            <button
              type="button"
              onClick={skipGate}
              className="text-[10px] text-muted-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              Preview without email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
