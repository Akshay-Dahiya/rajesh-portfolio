import "./styles/Career.css";

const experiences = [
  {
    role: "AI/ML Engineer – Project Dynamo",
    company: "Handshake AI",
    period: "Aug 2026 – Present",
    description:
      "Architecting deterministic benchmark environments for frontier AI agents and building evaluation pipelines that stress abstraction, planning, and routing under adversarial conditions.",
  },
  {
    role: "Data Analytics & AI Job Simulation",
    company: "Tata iQ (Forage)",
    period: "2026",
    description:
      "Performed EDA on a 500-record financial dataset, surfaced delinquency risk indicators, and designed an ethical AI collections strategy with strong compliance guardrails.",
  },
  {
    role: "Cyber Security & Data Analytics Simulations",
    company: "Deloitte Australia (Forage)",
    period: "2026",
    description:
      "Investigated a simulated breach through forensic web log analysis and translated data insights into actionable security and business intelligence recommendations.",
  },
  {
    role: "B.Tech – Computer Science Engineering (AI/ML)",
    company: "SGT University",
    period: "Expected 2026",
    description:
      "Focused on applied machine learning, distributed systems, and intelligent agents while building a strong foundation in algorithms, databases, and operating systems.",
  },
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((item) => (
            <div className="career-info-box" key={item.role}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
