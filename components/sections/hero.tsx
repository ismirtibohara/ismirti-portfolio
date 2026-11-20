import Image from "next/image";
import { FileText, Github, Mail } from "lucide-react";
import { HeroShortcuts } from "@/components/hero-shortcuts";
import { basePath } from "@/lib/utils";
import { profile } from "@/data/portfolio";

const email = "boharasmriti73@gmail.com";
const hasCv = false; // change to true after you add your CV file
const cvPath = `${basePath}/Ismirti_Bohara_CV.pdf`;

export function HeroSection() {
  return (
    <section id="top" className="section-wrap py-14 md:py-24">
      <div className="flex flex-col gap-8 sm:flex-row-reverse sm:items-center sm:justify-between sm:gap-10">
        <div className="relative mx-auto aspect-[4/5] w-44 shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary sm:mx-0 sm:w-48 md:w-56">
          <Image
            src={`${basePath}/images/portrait.jpg`}
            alt="Portrait of Ismirti Bohara"
            fill
            priority
            sizes="(max-width: 640px) 176px, (max-width: 768px) 192px, 224px"
            className="object-cover object-[center_30%]"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{profile.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            BSc CSIT student exploring applied AI &amp; machine learning
          </p>
          <p className="mt-4 max-w-xl text-pretty leading-7 text-muted-foreground">
            I&apos;m a third-year BSc CSIT student at Padma Kanya Multiple Campus, Kathmandu, focused on AI and
            machine learning. I learn by building: a PDF search assistant powered by retrieval, a student grade
            predictor, and several web projects. Outside of code, I crochet handmade pieces, which taught me
            patience, attention to detail, and the habit of improving things one version at a time.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a href={`mailto:${email}`} className="hero-link">
              <Mail size={15} aria-hidden="true" /> Email <kbd className="kbd">E</kbd>
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="hero-link">
              <Github size={15} aria-hidden="true" /> GitHub <kbd className="kbd">G</kbd>
            </a>
            {hasCv && (
              <a href={cvPath} target="_blank" rel="noreferrer" className="hero-link">
                <FileText size={15} aria-hidden="true" /> CV <kbd className="kbd">R</kbd>
              </a>
            )}
          </div>
        </div>
      </div>

      <HeroShortcuts email={email} github={profile.links.github} cv={hasCv ? cvPath : undefined} />
    </section>
  );
}