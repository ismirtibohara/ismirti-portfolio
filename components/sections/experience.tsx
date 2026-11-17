import { ArrowUpRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { experience, profile } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-wrap section-space border-t border-border">
      <SectionHeading index="01" title="Experience" description="A snapshot of how I’m building practical experience while I study." />
      <div className="mt-8 grid gap-4 md:grid-cols-[1fr_280px]">
        {experience.map((item) => (
          <Card key={item.role} className="border-border/80 bg-card shadow-none">
            <CardContent className="p-5 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div><p className="text-sm font-semibold">{item.role}</p><p className="mt-1 text-xs text-muted-foreground">{item.organization}</p></div>
                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">{item.period}</span>
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        ))}
        <a href={profile.links.certificate} target="_blank" rel="noreferrer" className="group rounded-xl border border-border/80 bg-secondary/45 p-5 transition-colors hover:bg-secondary md:p-6">
          <div className="flex items-center justify-between"><span className="rounded-lg border border-border bg-background p-2"><Sparkles size={16} /></span><ArrowUpRight size={15} className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div>
          <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Verified learning</p>
          <p className="mt-1 text-sm font-semibold">Skilljar certificate</p>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">Open the certificate verification page.</p>
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ index, title, description }: { index: string; title: string; description: string }) {
  return <div className="section-heading-row"><span className="section-index">{index} /</span><div><h2>{title}</h2><p>{description}</p></div></div>;
}
