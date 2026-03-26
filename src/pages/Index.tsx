import { SidebarNav } from "@/components/workshop/SidebarNav";
import { Module00 } from "@/components/modules/Module00";
import { Module01 } from "@/components/modules/Module01";
import { Module02 } from "@/components/modules/Module02";
import { Module03 } from "@/components/modules/Module03";
import { ThirtyDayPlan } from "@/components/modules/ThirtyDayPlan";
import { EmailGate } from "@/components/workshop/EmailGate";
import { WorkshopProvider, useWorkshop } from "@/lib/workshopContext";

function WorkshopContent() {
  const { state } = useWorkshop();

  if (!state.isGated) {
    return <EmailGate />;
  }

  return (
    <div className="flex min-h-screen">
      <SidebarNav />
      <main className="flex-1 ml-[200px] workshop-content">
        <div className="max-w-2xl mx-auto px-8 py-8">
          <Module00 />
          <Module01 />
          <Module02 />
          <Module03 />
          <ThirtyDayPlan />
        </div>
      </main>
    </div>
  );
}

const Index = () => {
  return (
    <WorkshopProvider>
      <WorkshopContent />
    </WorkshopProvider>
  );
};

export default Index;
