import { ArrowUpRight, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/data/portfolio";

export function ContributionsSection() {
  return (
    <section id="contributions" className="section-wrap section-space border-t border-border">
      <div className="section-heading-row"><span className="section-index">05 /</span><div><h2>GitHub contributions</h2><p>Follow my code, experiments, and projects as they grow.</p></div></div>
      <Card className="mt-8 overflow-hidden border-border/80 bg-card shadow-none">
        <CardContent className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between md:p-7">
          <div className="flex items-center gap-4"><span className="rounded-xl border border-border bg-secondary p-3"><Github size={22} strokeWidth={1.5} /></span><div><p className="text-sm font-semibold">@ismirtibohara</p><p className="mt-1 text-xs text-muted-foreground">Browse my public repositories and contribution activity.</p></div></div>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-secondary">Open GitHub profile <ArrowUpRight size={14} /></a>
        </CardContent>
      </Card>
    </section>
  );
}
