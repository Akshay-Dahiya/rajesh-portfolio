import "./styles/TechHighlights.css";

const techGroups = [
  {
    label: "Languages",
    description: "The core languages I lean on while building products.",
    items: ["Python", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
  },
  {
    label: "AI + Vision",
    description:
      "Libraries and workflows I use for applied machine learning and perception work.",
    items: [
      "OpenCV",
      "InsightFace",
      "Deep Learning",
      "Computer Vision",
      "Image Processing",
      "Model Experimentation",
    ],
  },
  {
    label: "Workflow Stack",
    description:
      "Tools that help me automate, ship faster, and keep complex systems organized.",
    items: [
      "n8n",
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Power BI",
      "TouchDesigner",
    ],
  },
];

const TechHighlights = () => {
  return (
    <section className="tech-highlights section-container" id="tech-stack">
      <div className="tech-highlights-shell">
        <div className="tech-highlights-copy">
          <span className="tech-highlights-kicker">Core Stack</span>
          <h2>Tools I use to ship strong AI and automation work.</h2>
          <p>
            On smaller screens I keep this section lightweight, fast, and easy
            to scan while still showing the stack behind the projects.
          </p>
        </div>

        <div className="tech-highlights-grid">
          {techGroups.map((group) => (
            <article className="tech-highlights-card" key={group.label}>
              <span>{group.label}</span>
              <p>{group.description}</p>
              <div className="tech-highlights-list">
                {group.items.map((item) => (
                  <div className="tech-highlights-pill" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechHighlights;
