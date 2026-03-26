import { ReactNode } from "react";

interface CalloutBoxProps {
  children: ReactNode;
  variant?: "quote" | "highlight" | "warning";
}

export function CalloutBox({ children, variant = "quote" }: CalloutBoxProps) {
  const styles = {
    quote: "border-l-4 border-primary bg-muted/60 pl-5 pr-4 py-4 my-6 rounded-r-md",
    highlight: "bg-primary/10 border border-primary/20 px-5 py-4 my-6 rounded-lg",
    warning: "bg-destructive/10 border border-destructive/20 px-5 py-4 my-6 rounded-lg",
  };

  return (
    <div className={styles[variant]}>
      <div className="text-sm leading-relaxed text-foreground/80 italic">{children}</div>
    </div>
  );
}
