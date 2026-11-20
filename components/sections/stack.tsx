import { TechBadge } from "@/components/tech-icon";
import { stack } from "@/data/portfolio";

export function StackSection() {
  return (
    <section id="stack" className="section-wrap section-space border-t border-border">
      <div className="section-heading-row"><span className="section-index">04 /</span><div><h2>Stack &amp; interests</h2><p>Tools I’ve used and areas I’m actively exploring.</p></div></div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {stack.map((group) => (
          <div key={group.group} className="rounded-xl border border-border/80 bg-card p-5">
            <p className="text-[10px] font-medium tracking-[0.14em] text-muted-foreground">{group.group}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {group.tools.map((tool) => <TechBadge key={tool} name={tool} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}