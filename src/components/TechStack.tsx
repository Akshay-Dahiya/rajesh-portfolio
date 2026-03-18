import {
  SiExpress,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiN8N,
  SiOpencv,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import "./styles/TechStack.css";

type Skill = {
  name: string;
  note: string;
  icon: typeof SiReact;
  accent: string;
  glow: string;
};

const skills: Skill[] = [
  {
    name: "Python",
    note: "Machine learning pipelines and tooling.",
    icon: SiPython,
    accent: "#ffd43b",
    glow: "rgba(255, 212, 59, 0.26)",
  },
  {
    name: "OpenCV",
    note: "Vision workflows for detection tasks.",
    icon: SiOpencv,
    accent: "#7dd3fc",
    glow: "rgba(125, 211, 252, 0.24)",
  },
  {
    name: "React",
    note: "Interactive interfaces with reusable components.",
    icon: SiReact,
    accent: "#61dafb",
    glow: "rgba(97, 218, 251, 0.24)",
  },
  {
    name: "Next.js",
    note: "Faster routes and polished deployments.",
    icon: SiNextdotjs,
    accent: "#f8fafc",
    glow: "rgba(248, 250, 252, 0.18)",
  },
  {
    name: "Node.js",
    note: "Backend APIs and real-time services.",
    icon: SiNodedotjs,
    accent: "#7ddc84",
    glow: "rgba(125, 220, 132, 0.24)",
  },
  {
    name: "Express",
    note: "Minimal server layers for APIs.",
    icon: SiExpress,
    accent: "#dbe4ee",
    glow: "rgba(219, 228, 238, 0.18)",
  },
  {
    name: "MongoDB",
    note: "Document data modelling for scale.",
    icon: SiMongodb,
    accent: "#4ade80",
    glow: "rgba(74, 222, 128, 0.2)",
  },
  {
    name: "MySQL",
    note: "Structured relational queries with reliability.",
    icon: SiMysql,
    accent: "#7dd3fc",
    glow: "rgba(125, 211, 252, 0.22)",
  },
  {
    name: "TypeScript",
    note: "Safer code with stronger contracts.",
    icon: SiTypescript,
    accent: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.24)",
  },
  {
    name: "JavaScript",
    note: "Flexible logic for product interactions.",
    icon: SiJavascript,
    accent: "#facc15",
    glow: "rgba(250, 204, 21, 0.24)",
  },
  {
    name: "n8n",
    note: "Automations that remove repetitive steps.",
    icon: SiN8N,
    accent: "#f97316",
    glow: "rgba(249, 115, 22, 0.24)",
  },
  {
    name: "GitHub",
    note: "Versioned collaboration with cleaner shipping.",
    icon: SiGithub,
    accent: "#cbd5e1",
    glow: "rgba(203, 213, 225, 0.18)",
  },
];

const TechStack = () => {
  return (
    <section className="tech-showcase section-container" id="tech-stack">
      <div className="tech-showcase-header">
        <div>
          <span className="tech-showcase-kicker">Tech Stack</span>
          <h2>Tools I actually build with.</h2>
        </div>
        <p className="tech-showcase-copy">
          A practical stack shaped around AI systems, computer vision, backend
          services, and the UI layers that bring them together.
        </p>
      </div>

      <div className="tech-showcase-grid">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <article
              className="tech-skill-card"
              key={skill.name}
              style={
                {
                  "--skill-accent": skill.accent,
                  "--skill-glow": skill.glow,
                } as React.CSSProperties
              }
            >
              <div className="tech-skill-glow"></div>
              <div className="tech-skill-icon">
                <Icon />
              </div>
              <div className="tech-skill-copy">
                <h3>{skill.name}</h3>
                <p>{skill.note}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
