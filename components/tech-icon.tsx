import { Bot, Brain, Database, FileText, type LucideIcon } from "lucide-react";
// import { basePath } from "@/lib/utils"; // uncomment if you add your own logo files (see note below)

const fontIcons: Record<string, string> = {
  python: "devicon-python-plain colored",
  c: "devicon-c-plain colored",
  "c++": "devicon-cplusplus-plain colored",
  sql: "devicon-mysql-plain colored",
  numpy: "devicon-numpy-original colored",
  pandas: "devicon-pandas-original colored",
  "jupyter notebook": "devicon-jupyter-plain colored",
  html: "devicon-html5-plain colored",
  css: "devicon-css3-plain colored",
  "github pages": "devicon-github-original colored",
};

const imageLogos: Record<string, string> = {
  streamlit: "https://cdn.simpleicons.org/streamlit/FF4B4B",
  // chromadb: `${basePath}/logos/chromadb.png`,
  // pypdf: `${basePath}/logos/pypdf.png`,
};

const genericIcons: Record<string, LucideIcon> = {
  chromadb: Database,
  pypdf: FileText,
  "machine learning": Brain,
  "applied ai": Bot,
};

export function TechBadge({ name }: { name: string }) {
  const key = name.toLowerCase();
  const fontIcon = fontIcons[key];
  const imageLogo = imageLogos[key];
  const GenericIcon = genericIcons[key];

  if (!fontIcon && !imageLogo && !GenericIcon) {
    return <span className="tech-text">{name}</span>;
  }

  return (
    <span className="tech-chip" title={name}>
      {fontIcon ? (
        <i className={fontIcon} aria-hidden="true" />
      ) : imageLogo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageLogo} alt="" width={24} height={24} />
      ) : GenericIcon ? (
        <GenericIcon size={20} className="text-stone-700" aria-hidden="true" />
      ) : null}
      <span className="sr-only">{name}</span>
    </span>
  );
}