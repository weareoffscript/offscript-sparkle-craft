import { ModuleHeader } from "../workshop/ModuleHeader";
import { CalloutBox } from "../workshop/CalloutBox";
import { ContentSection } from "../workshop/ContentSection";
import { ReflectionPrompt } from "../workshop/ReflectionPrompt";
import { WorkbookSection } from "../workshop/WorkbookSection";
import { NextModule } from "../workshop/NextModule";

export function Module03() {
  return (
    <section id="module-03" className="py-16">
      <ModuleHeader
        moduleLabel="MODULE 03"
        title="System &"
        italicTitle="Asset Leaks"
        subtitle="You've already built more than you think. The problem isn't creating — it's capturing, organizing, and reusing what you've already made."
        time="15 min"
        hasWorkbook
      />

      <ContentSection heading="System gaps">
        <p>Systems leak when they're incomplete, outdated, or don't exist at all:</p>
        <ul className="list-none space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>No onboarding process — every new client starts from scratch</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>No offboarding process — clients leave without a follow-up sequence</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>No content repurposing system — every post starts blank</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>No SOPs — you or your team reinvent the process every time</span>
          </li>
        </ul>
      </ContentSection>

      <ContentSection heading="Asset waste">
        <p>Assets you've already created that are sitting unused:</p>
        <ul className="list-none space-y-2 mt-3">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>Blog posts that could be email sequences</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>Workshop recordings that could be a paid product</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>Client frameworks that could be templates</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            <span>Internal processes that could be productized</span>
          </li>
        </ul>
      </ContentSection>

      <CalloutBox variant="highlight">
        <p><strong>The rule:</strong> Build once, deploy many. If you're creating something for one client that could serve ten, you have an asset leak.</p>
      </CalloutBox>

      <CalloutBox>
        <p><strong>Quick check:</strong> Open your Google Drive, Notion, or file system. How many documents, templates, or frameworks have you created that no one else has ever seen? That's your asset leak.</p>
      </CalloutBox>

      <ReflectionPrompt question="List 3 things you've already built (frameworks, templates, processes) that could be turned into a product, lead magnet, or repeatable system." />

      <WorkbookSection items={[
        "Audit existing assets (docs, templates, frameworks, recordings)",
        "Identify 3 assets that could be repurposed or productized",
        "Document one core process as an SOP",
        "Build or improve your client onboarding system",
        "Create a content repurposing workflow",
      ]} />

      <NextModule targetId="thirty-day-plan" label="Next: Your 30-Day Plan →" />
    </section>
  );
}
