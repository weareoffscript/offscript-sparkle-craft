import { ModuleHeader } from "../workshop/ModuleHeader";
import { ContentSection } from "../workshop/ContentSection";
import { WorkbookSection } from "../workshop/WorkbookSection";
import { CalloutBox } from "../workshop/CalloutBox";
import { LeakReport } from "../workshop/LeakReport";

export function ThirtyDayPlan() {
  return (
    <section id="thirty-day-plan" className="py-16">
      <ModuleHeader
        moduleLabel="YOUR 30-DAY PLAN"
        title="From Leaks to"
        italicTitle="Leverage"
        subtitle="You've identified the leaks. Now let's plug them — one week at a time."
        time="10 min"
        hasWorkbook
      />

      <div className="space-y-8">
        <ContentSection heading="Week 1: Audit & Awareness">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Complete all reflection prompts from Modules 01–03</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Track your time for 3 full days</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>List your top 5 revenue leaks by estimated dollar impact</span>
            </li>
          </ul>
        </ContentSection>

        <ContentSection heading="Week 2: Quick Wins">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Raise prices on at least one offer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Set scope boundaries on your current projects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Eliminate 3 red-bucket activities</span>
            </li>
          </ul>
        </ContentSection>

        <ContentSection heading="Week 3: Systems">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Build or improve your onboarding process</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Create one SOP for a repeatable task</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Set up a content repurposing workflow</span>
            </li>
          </ul>
        </ContentSection>

        <ContentSection heading="Week 4: Leverage">
          <ul className="list-none space-y-2">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Turn one existing asset into a new offer or lead magnet</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Add a "what's next" step to your client offboarding</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span>Review and commit to your quarterly pricing schedule</span>
            </li>
          </ul>
        </ContentSection>
      </div>

      <WorkbookSection
        title="📋 30-Day Plan Checklist"
        items={[
          "Week 1: Complete all audits and reflections",
          "Week 2: Implement 3 quick wins",
          "Week 3: Build 2 systems or SOPs",
          "Week 4: Launch 1 new asset or offer",
          "Schedule a 30-day review with yourself",
        ]}
      />

      <CalloutBox variant="highlight">
        <p><strong>You've finished the crash course.</strong> The difference between people who plug leaks and people who don't isn't knowledge — it's action. You now have both. Go use them.</p>
      </CalloutBox>

      <LeakReport />
    </section>
  );
}
