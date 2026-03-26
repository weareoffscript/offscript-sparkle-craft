import { ModuleHeader } from "../workshop/ModuleHeader";
import { CalloutBox } from "../workshop/CalloutBox";
import { ContentSection } from "../workshop/ContentSection";
import { ReflectionPrompt } from "../workshop/ReflectionPrompt";
import { WorkbookSection } from "../workshop/WorkbookSection";
import { NextModule } from "../workshop/NextModule";

export function Module00() {
  return (
    <section id="module-00" className="py-16">
      <ModuleHeader
        moduleLabel="MODULE 00 — START HERE"
        title="Welcome to the"
        italicTitle="Revenue Leak Workshop"
        subtitle="Most businesses don't have a revenue problem. They have a leak problem. Money, time, and energy are draining out of systems you built — and you can't always see where."
        time="5 min"
        hasWorkbook
      />

      <CalloutBox>
        <p>No videos. Deliberately. This is a working document — not a course to consume. You'll read, reflect, and act. That's it.</p>
      </CalloutBox>

      <ContentSection heading="What this is">
        <p>This workshop walks you through the three most common types of revenue leaks in service-based and digital businesses:</p>
        <ul className="list-none space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <span><strong>Money leaks</strong> — pricing gaps, undercharging, unbilled value</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <span><strong>Time & complexity leaks</strong> — where hours go to die</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <span><strong>System & asset leaks</strong> — the infrastructure you're not using</span>
          </li>
        </ul>
      </ContentSection>

      <ContentSection heading="How this works">
        <ul className="list-none space-y-2">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <span>Read each module at your own pace</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <span>Complete the reflection prompts — they're the real work</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <span>Use the workbook checklists to track your progress</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
            <span>Build your 30-day action plan at the end</span>
          </li>
        </ul>
      </ContentSection>

      <ReflectionPrompt question="Before we start — what's your gut feeling about where money is leaking in your business right now?" />

      <WorkbookSection items={[
        "Read the welcome module",
        "Complete the opening reflection",
        "Set aside 2 hours for the full workshop",
      ]} />

      <NextModule targetId="module-01" label="Next: Money Leaks →" />
    </section>
  );
}
