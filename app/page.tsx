import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/sections/hero";
import { ExperienceSection } from "@/components/sections/experience";
import { WorkSection } from "@/components/sections/work";
import { EducationSection } from "@/components/sections/education";
import { StackSection } from "@/components/sections/stack";
import { ContributionsSection } from "@/components/sections/contributions";
import { TemplatesSection } from "@/components/sections/templates";
import { WritingSection } from "@/components/sections/writing";
import { ConnectSection } from "@/components/sections/connect";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ExperienceSection />
        <WorkSection />
        <EducationSection />
        <StackSection />
        <ContributionsSection />
        <TemplatesSection />
        <WritingSection />
        <ConnectSection />
      </main>
      <footer className="section-wrap flex min-h-16 flex-wrap items-center justify-between gap-2 py-4 text-[11px] text-muted-foreground">
        <span>© 2026 Ismirti Bohara</span><span>Built with Next.js · TypeScript · Tailwind CSS</span>
      </footer>
    </>
  );
}
