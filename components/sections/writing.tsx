import { ArrowUpRight, BookOpenText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WritingSection() {
  return (
    <section id="writing" className="section-wrap section-space border-t border-border">
      <div className="section-heading-row"><span className="section-index">07 /</span><div><h2>Writing</h2><p>Notes and lessons from studying, experimenting, and building.</p></div></div>
      <Card className="mt-8 border-border/80 bg-card shadow-none">
        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between md:p-7"><div className="flex items-center gap-4"><span className="rounded-xl border border-border bg-secondary p-3"><BookOpenText size={20} strokeWidth={1.5} /></span><div><p className="text-sm font-medium">Writing is in progress.</p><p className="mt-1 text-xs text-muted-foreground">I’ll share short notes about AI, data, and what I learn from my projects.</p></div></div><a href="https://github.com/ismirtibohara" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-1 text-xs font-medium hover:underline">Follow along <ArrowUpRight size={13} /></a></CardContent>
      </Card>
    </section>
  );
}
