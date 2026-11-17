import { navigation, profile } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-5xl items-center justify-between px-5 md:h-[76px] md:px-8">
        <a href="#top" className="font-semibold tracking-[-0.04em] text-foreground" aria-label={`${profile.name}, home`}>
          {profile.name.split(" ")[0]}<span className="text-primary">.</span>
        </a>
        <nav className="flex max-w-[76%] items-center gap-4 overflow-x-auto whitespace-nowrap md:max-w-none md:gap-6" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-[10px] text-muted-foreground transition-colors hover:text-foreground md:text-xs">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
