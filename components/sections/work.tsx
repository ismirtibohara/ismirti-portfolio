import { ArrowUpRight, FileSearch, Flower2, PanelsTopLeft, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { crochet, projects } from "@/data/portfolio";

const projectIcons = { rag: FileSearch, grades: TrendingUp, blog: PanelsTopLeft };

export function WorkSection() {
  return (
    <section id="work" className="section-wrap section-space border-t border-border">
      <div className="section-heading-row"><span className="section-index">02 /</span><div><h2>Work &amp; projects</h2><p>Coursework and personal projects that help me learn by doing.</p></div><a className="section-aside-link" href="https://github.com/ismirtibohara" target="_blank" rel="noreferrer">All GitHub projects <ArrowUpRight size={13} /></a></div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => {
          const Icon = projectIcons[project.visual as keyof typeof projectIcons];
          return (
            <Card key={project.number} className="project-card overflow-hidden border-border/80 bg-card shadow-none transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <div className={`project-visual project-visual-${project.visual}`}><div className="project-visual-label"><span>{project.number}</span><span>{project.kind}</span></div><div className="project-visual-mark"><Icon size={29} strokeWidth={1.3} /></div><span className="project-visual-orbit" aria-hidden="true" /></div>
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start justify-between gap-3"><div><p className="text-base font-semibold tracking-tight">{project.title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{project.description}</p></div><span className="text-xs text-muted-foreground">{project.number}</span></div>
                <div className="mt-4 flex flex-wrap gap-1.5">{project.stack.map((skill) => <Badge key={skill} variant="outline" className="font-normal text-[10px] text-muted-foreground">{skill}</Badge>)}</div>
                <div className="mt-5 flex gap-4 text-xs font-medium"><a className="inline-flex items-center gap-1 hover:underline" href={project.demo} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={13} /></a>{project.source && <a className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline" href={project.source} target="_blank" rel="noreferrer">Source code <ArrowUpRight size={13} /></a>}</div>
              </CardContent>
            </Card>
          );
        })}
        <Card className="project-card overflow-hidden border-border/80 bg-card shadow-none transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <a href={crochet.link} target="_blank" rel="noreferrer" className="relative flex aspect-[16/8] flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-stone-800 via-neutral-800 to-stone-700" aria-label="View Ismirti's crochet page">
            <Flower2 size={42} strokeWidth={1.1} className="text-stone-300" aria-hidden="true" />
            <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] text-stone-200">Creative practice · crochet</span>
          </a>
          <CardContent className="p-5 md:p-6"><p className="text-base font-semibold tracking-tight">{crochet.title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">A handmade piece from my crochet practice, where patience and pattern come together.</p><a className="mt-4 inline-flex items-center gap-1 text-xs font-medium hover:underline" href={crochet.link} target="_blank" rel="noreferrer">See more crochet work <ArrowUpRight size={13} /></a></CardContent>
        </Card>
      </div>
    </section>
  );
}
