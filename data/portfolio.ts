export const profile = {
  name: "Ismirti Bohara",
  title: "BSc CSIT student exploring applied AI",
  location: "Kathmandu, Nepal",
  intro:
    "I’m a third-year CSIT student interested in applied AI and machine learning. I learn by building practical projects, asking questions, and improving one version at a time.",
  email: "boharasmriti73@gmail.com",
  links: {
    github: "https://github.com/ismirtibohara",
    linkedin: "https://www.linkedin.com/in/smriti-bohara-96161633b/",
    facebookCrochet: "https://www.facebook.com/share/1A8cDYrjp9/",
    certificate: "https://verify.skilljar.com/c/wurkfxsbhsgx",
  },
};

export const experience = [
  {
    role: "Project-based learning",
    organization: "Coursework & independent practice",
    period: "Ongoing",
    description:
      "Building practical experience through CSIT coursework and personal projects in Python, data analysis, web development, and applied AI.",
  },
];

export const projects = [
  {
    number: "01",
    title: "PDF RAG Assistant",
    kind: "AI · DOCUMENT SEARCH",
    description:
      "A document search app that finds relevant passages in uploaded PDFs and shows their page numbers. A hands-on exploration of retrieval, chunking, and vector search.",
    stack: ["Python", "Streamlit", "ChromaDB", "pypdf"],
    demo: "https://pdf-rag-assistant1-fsygsdfxayn3ifpgvyqggb.streamlit.app/",
    source: "https://github.com/ismirtibohara/pdf-rag-assistant1",
    visual: "rag",
  },
  {
    number: "02",
    title: "Student Grade Predictor",
    kind: "DATA · MACHINE LEARNING",
    description:
      "An interactive student grade prediction project. Explore the deployed app and see how its input and prediction experience works.",
    stack: ["Python", "Streamlit", "Machine learning"],
    demo: "https://smriti-student-grade-predictor.streamlit.app/",
    source: "",
    visual: "grades",
  },
  {
    number: "03",
    title: "Bouldering Blog",
    kind: "WEB · PERSONAL PROJECT",
    description:
      "A climbing-inspired web journal and an early project in structuring and styling a website from scratch.",
    stack: ["HTML", "CSS", "GitHub Pages"],
    demo: "https://ismirtibohara.github.io/boulderingblog.github.io/",
    source: "https://github.com/ismirtibohara/boulderingblog.github.io",
    visual: "blog",
  },
];

export const education = {
  degree: "BSc Computer Science & Information Technology",
  campus: "Padma Kanya Multiple Campus",
  university: "Tribhuvan University · Nepal",
  stage: "Third year · Fifth semester",
};

export const stack = [
  { group: "PROGRAMMING", tools: ["Python", "C", "C++"] },
  { group: "DATA & NOTEBOOKS", tools: ["SQL", "NumPy", "Pandas", "Jupyter Notebook"] },
  { group: "WEB", tools: ["HTML", "CSS"] },
  { group: "FOCUS", tools: ["Applied AI", "Machine learning"] },
];

export const crochet = {
  title: "Handmade crochet top",
  link: profile.links.facebookCrochet,
};

export const navigation = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Stack", href: "#stack" },
  { label: "Writing", href: "#writing" },
  { label: "Connect", href: "#connect" },
];
