import { ModuleHeader } from "../workshop/ModuleHeader";
import { CalloutBox } from "../workshop/CalloutBox";
import { ContentSection } from "../workshop/ContentSection";
import { ReflectionPrompt } from "../workshop/ReflectionPrompt";
import { WorkbookSection } from "../workshop/WorkbookSection";
import { NextModule } from "../workshop/NextModule";

export function Module02() {
  return (
    <section id="module-02" className="py-16">
      <ModuleHeader
        moduleLabel="MODULE 02"
        title="Time &"
        italicTitle="Complexity Leaks"
        subtitle="Time is the one resource you can't manufacture. If it's going to the wrong places, everything downstream suffers — including revenue."
        time="15 min"
        hasWorkbook
      />

      <ContentSection heading="The 3-bucket framework">
        <p>Every hour in your business falls into one of three buckets:</p>
        <div className="grid gap-4 mt-4">
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">🟢 Revenue-generating</p>
            <p className="text-muted-foreground text-sm">Client work, sales calls, product creation, content that converts</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">🟡 Revenue-supporting</p>
            <p className="text-muted-foreground text-sm">Admin, invoicing, planning, team management, email</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-4">
            <p className="font-semibold text-foreground mb-1">🔴 Revenue-draining</p>
            <p className="text-muted-foreground text-sm">Perfectionism, unnecessary meetings, rebuilding things that work, context switching</p>
          </div>
        </div>
      </ContentSection>

      <ContentSection heading="Where your time should be">
        <CalloutBox variant="highlight">
          <p><strong>60–70%</strong> of your time should be in the green bucket. If it's not, you have a time leak — and it's costing you money.</p>
        </CalloutBox>
      </ContentSection>

      <ContentSection heading="Common time leaks">
        <ul className="list-none space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>Spending 2 hours on an email that should take 10 minutes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>Rebuilding your website instead of selling</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>Saying yes to meetings that could be a Loom</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>Switching between 7 tools to do one task</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>Doing tasks that feel productive but don't move the needle</span>
          </li>
        </ul>
      </ContentSection>

      <CalloutBox>
        <p>Complexity isn't a sign of sophistication. It's usually a sign that something hasn't been simplified yet. Every layer of complexity is a potential leak.</p>
      </CalloutBox>

      <ReflectionPrompt question="Track your time for one day. What percentage falls into each bucket? Where's the biggest gap between where your time goes and where it should go?" />

      <WorkbookSection items={[
        "Track one full day of work by bucket (green, yellow, red)",
        "Identify 3 tasks in the red bucket you can eliminate this week",
        "Find 2 yellow-bucket tasks you can automate or delegate",
        "Set a 'no meetings' block for deep work",
      ]} />

      <NextModule targetId="module-03" label="Next: System & Asset Leaks →" />
    </section>
  );
}
