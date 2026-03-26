import { useEffect, useState } from "react";
import { BookOpen, DollarSign, Clock, Settings, CalendarDays, TrendingDown } from "lucide-react";

const navItems = [
  { id: "module-00", label: "Welcome", icon: BookOpen },
  { id: "module-01", label: "Money Leaks", icon: DollarSign },
  { id: "module-02", label: "Time & Complexity", icon: Clock },
  { id: "module-03", label: "System & Asset Leaks", icon: Settings },
  { id: "thirty-day-plan", label: "Your 30-Day Plan", icon: CalendarDays },
  { id: "leak-report", label: "Your Leak Report", icon: TrendingDown },
];

export function SidebarNav() {
  const [activeId, setActiveId] = useState("module-00");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Pick the one closest to the top
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0.1 }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-[200px] bg-secondary flex flex-col z-50">
      <div className="p-6 pb-4">
        <h1 className="text-lg font-bold text-secondary-foreground tracking-wide">
          Off-Script
        </h1>
        <p className="text-[10px] uppercase tracking-[0.2em] text-secondary-foreground/60 mt-1">
          Revenue Leak Workshop
        </p>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-sm transition-all text-left ${
              activeId === id
                ? "bg-primary/20 text-primary-foreground font-medium"
                : "text-secondary-foreground/70 hover:text-secondary-foreground hover:bg-secondary-foreground/5"
            }`}
          >
            <Icon className="w-4 h-4 shrink-0" />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 text-[10px] text-secondary-foreground/40">
        © Off-Script Workshop
      </div>
    </aside>
  );
}
