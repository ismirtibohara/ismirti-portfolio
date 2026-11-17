import { ArrowUpRight, Layers3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TemplatesSection() {
  return (
    <section id="templates" className="section-wrap section-space border-t border-border">
      <div className="section-heading-row"><span className="section-index">06 /</span><div><h2>Templates &amp; resources</h2><p>A home for reusable notes, tools, and small things I make along the way.</p></div></div>
      <Card className="mt-8 border-dashed border-border bg-secondary/35 shadow-none">
        <CardContent className="flex items-start gap-4 p-5 md:p-7"><span className="rounded-xl border border-border bg-background p-3"><Layers3 size={20} strokeWidth={1.5} /></span><div><p className="text-sm font-medium">More resources are taking shape.</p><p className="mt-1 max-w-xl text-sm leading-6 text-muted-foreground">I’ll share study guides, reusable project notes, or templates here when they’re ready.</p><a href="#connect" className="mt-4 inline-flex items-center gap-1 text-xs font-medium hover:underline">Suggest an idea <ArrowUpRight size={13} /></a></div></CardContent>
      </Card>
    </section>
  );
}
