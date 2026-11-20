import { navigation, profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[64px] max-w-5xl items-center gap-4 px-5 md:h-[72px] md:gap-6 md:px-8">
        <a href="#top" className="shrink-0 font-semibold tracking-[-0.04em] text-foreground" aria-label={`${profile.name}, home`}>
          {profile.name.split(" ")[0]}<span className="text-primary">.</span>
        </a>
        <nav className="portfolio-nav ml-auto flex min-w-0 items-center justify-end gap-4 overflow-x-auto whitespace-nowrap md:gap-5" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-[10px] text-muted-foreground transition-colors hover:text-foreground md:text-xs">
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}