const icons: Record<string, string> = {
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

export function TechBadge({ name }: { name: string }) {
  const icon = icons[name.toLowerCase()];

  if (!icon) {
    return <span className="tech-text">{name}</span>;
  }

  return (
    <span className="tech-chip" title={name}>
      <i className={icon} aria-hidden="true" />
      <span className="sr-only">{name}</span>
    </span>
  );
}