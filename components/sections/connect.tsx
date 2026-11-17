import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function ConnectSection() {
  return (
    <section id="connect" className="border-t border-border bg-secondary/50">
      <div className="section-wrap py-14 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><p className="section-index mb-3">08 / CONNECT</p><h2 className="max-w-xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Have a thoughtful project or opportunity?</h2><p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground">I’d love to connect, learn, and hear what you’re working on.</p></div>
          <a className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90" href={`mailto:${profile.email}`}><Mail size={15} /> {profile.email} <ArrowUpRight size={14} /></a>
        </div>
        <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 border-t border-border pt-5 text-xs text-muted-foreground">
          <a className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground" href={profile.links.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub <ArrowUpRight size={12} /></a>
          <a className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground" href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn <ArrowUpRight size={12} /></a>
          <a className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground" href={profile.links.facebookCrochet} target="_blank" rel="noreferrer">Crochet Facebook <ArrowUpRight size={12} /></a>
        </div>
      </div>
    </section>
  );
}
