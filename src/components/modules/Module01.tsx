import { ModuleHeader } from "../workshop/ModuleHeader";
import { CalloutBox } from "../workshop/CalloutBox";
import { ContentSection } from "../workshop/ContentSection";
import { ReflectionPrompt } from "../workshop/ReflectionPrompt";
import { WorkbookSection } from "../workshop/WorkbookSection";
import { NextModule } from "../workshop/NextModule";

export function Module01() {
  return (
    <section id="module-01" className="py-16">
      <ModuleHeader
        moduleLabel="MODULE 01"
        title="Money"
        italicTitle="Leaks"
        subtitle="The most obvious leaks are the ones you've normalized. Let's look at where money leaves your business without earning its keep."
        time="15 min"
        hasWorkbook
      />

      <ContentSection heading="The 3 types of money leaks">
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-foreground text-base mb-2">1. Pricing gaps</h4>
            <ul className="list-none space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>You haven't raised prices in over a year</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Your prices reflect what you were worth 2 years ago</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>You discount instinctively when someone pushes back</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-base mb-2">2. Unbilled value</h4>
            <ul className="list-none space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>You answer "quick questions" that take 30 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Scope creep has become your default project shape</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>You over-deliver to compensate for under-pricing</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-base mb-2">3. Revenue you're leaving on the table</h4>
            <ul className="list-none space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>No upsell, cross-sell, or next step after delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>Clients leave and you never follow up</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span>You have expertise people would pay for — and no offer around it</span>
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>

      <CalloutBox variant="highlight">
        <p><strong>Example:</strong> A consultant bills $5,000/month for a retainer. They routinely spend an extra 4–6 hours on "bonus" calls and Slack support. At $200/hr, that's $800–$1,200/month in unbilled value. Over a year? Up to $14,400 per client.</p>
      </CalloutBox>

      <ContentSection heading="4 rules to stop the bleeding">
        <div className="space-y-4">
          <div>
            <p><strong className="text-foreground">Rule 1: Price for the outcome, not the hour.</strong></p>
            <p className="text-muted-foreground">If your work saves someone $50K, charging $2K is a leak.</p>
          </div>
          <div>
            <p><strong className="text-foreground">Rule 2: Scope is a boundary, not a suggestion.</strong></p>
            <p className="text-muted-foreground">If it's not in the contract, it's a new conversation — and a new invoice.</p>
          </div>
          <div>
            <p><strong className="text-foreground">Rule 3: Every engagement needs a "what's next."</strong></p>
            <p className="text-muted-foreground">Don't let clients off-ramp without a bridge to the next thing.</p>
          </div>
          <div>
            <p><strong className="text-foreground">Rule 4: Review pricing quarterly.</strong></p>
            <p className="text-muted-foreground">Your skills compound. Your prices should too.</p>
          </div>
        </div>
      </ContentSection>

      <ReflectionPrompt question="Look at your last 3 clients. Where did you give away time, energy, or value that wasn't scoped or paid for?" />

      <WorkbookSection items={[
        "Audit current pricing against market and outcomes",
        "List all unbilled work from the last 90 days",
        "Identify 2 offers you could create from existing expertise",
        "Set a quarterly pricing review date",
      ]} />

      <NextModule targetId="module-02" label="Next: Time & Complexity Leaks →" />
    </section>
  );
}
