import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { basePath } from "@/lib/utils";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section id="top" className="section-wrap grid gap-9 py-16 md:grid-cols-[1fr_220px] md:items-center md:gap-14 md:py-24">
      <div>
        <p className="mb-5 inline-flex items-center gap-2 text-xs text-muted-foreground"><MapPin size={13} aria-hidden="true" /> {profile.location} <span className="text-border">/</span> BSc CSIT · Year 3</p>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-5xl md:text-6xl">
          Learning to build <span className="text-muted-foreground">useful things</span> with applied AI.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-muted-foreground">{profile.intro}</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <ButtonLink href="#work" size="lg">Explore projects <ArrowDown size={15} aria-hidden="true" /></ButtonLink>
          <ButtonLink href={profile.links.github} variant="outline" size="lg" target="_blank" rel="noreferrer"><Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" /></ButtonLink>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">Currently in my fifth semester at Padma Kanya Multiple Campus.</p>
      </div>
      <div className="portrait-shell mx-auto w-full max-w-[210px] md:mx-0 md:max-w-none">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm">
          <Image src={`${basePath}/images/portrait.jpg`} alt="Portrait of Ismirti Bohara" fill priority sizes="(max-width: 768px) 180px, 220px" className="object-cover object-[center_35%]" />
        </div>
        <p className="mt-3 text-center text-[11px] text-muted-foreground">Curious by nature · learning by building</p>
      </div>
    </section>
  );
}
