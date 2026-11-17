import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { education } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="section-wrap section-space border-t border-border">
      <div className="section-heading-row"><span className="section-index">03 /</span><div><h2>Education</h2><p>Where I’m building my foundations in computing.</p></div></div>
      <Card className="mt-8 border-border/80 bg-card shadow-none">
        <CardContent className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
          <div className="flex items-start gap-4"><span className="rounded-xl border border-border bg-secondary p-3"><GraduationCap size={20} strokeWidth={1.5} /></span><div><p className="text-base font-semibold">{education.degree}</p><p className="mt-1 text-sm text-muted-foreground">{education.campus}</p><p className="mt-1 text-xs text-muted-foreground">{education.university}</p></div></div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] text-muted-foreground">{education.stage} <ArrowUpRight size={12} /></span>
        </CardContent>
      </Card>
    </section>
  );
}
