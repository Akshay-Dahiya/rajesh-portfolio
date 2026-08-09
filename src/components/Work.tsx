import { useCallback, useState } from "react";
import "./styles/Work.css";
import {
  MdArrowBack,
  MdArrowForward,
  MdArrowOutward,
} from "react-icons/md";

type Project = {
  title: string;
  category: string;
  year: string;
  status: string;
  intro: string;
  description: string;
  tools: string[];
  highlights: string[];
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Gurugram RunClub – AI Fitness & Strava Analytics Platform",
    category: "Full-Stack AI Coaching",
    year: "2025",
    status: "Next.js + Supabase",
    intro:
      "Built a marathon training and analytics experience that syncs Strava data and delivers contextual coaching advice in real time.",
    description:
      "Engineered a full-stack Next.js and Supabase dashboard to track training plans, synchronize Strava OAuth 2.0 activities, and ground an AI coach in athlete statistics, structured logs, and leaderboard rankings.",
    tools: ["Next.js", "Supabase", "Strava API", "GPT-4o-mini"],
    highlights: [
      "Turns raw fitness activity into structured coaching insights for athletes and teams.",
      "Combines secure OAuth integration with real-time analytics for a polished product experience.",
      "Shows how AI can create personalized guidance from live performance data.",
    ],
  },
  {
    title: "Automated Video Shorts Generation System",
    category: "Media Automation Pipeline",
    year: "2025",
    status: "Celery + Redis",
    intro:
      "Designed a scalable workflow for producing vertical video content with voiceover sync and asynchronous rendering.",
    description:
      "Built a Next.js and FastAPI platform for automating video generation, combining Whisper STT, ElevenLabs TTS, Pexels media sourcing, and FFmpeg rendering through Celery and Redis to orchestrate the whole pipeline.",
    tools: ["FastAPI", "Celery", "Redis", "FFmpeg", "Whisper", "n8n"],
    highlights: [
      "Automates the full content production loop from source media to rendered output.",
      "Uses asynchronous workers to keep rendering and orchestration efficient at scale.",
      "Bridges AI voice and media tools into a cohesive workflow.",
    ],
  },
  {
    title: "Face Recognition Smart Attendance System",
    category: "Real-Time Computer Vision",
    year: "2024",
    status: "Live Project",
    intro:
      "A practical attendance platform that applies face recognition to everyday operational workflows.",
    description:
      "Developed a high-accuracy, real-time facial recognition attendance system using Python, OpenCV, and InsightFace with cosine similarity matching, backed by a Flask dashboard for enrollment and analytics.",
    tools: ["Python", "OpenCV", "InsightFace", "Flask"],
    highlights: [
      "Automates identity-based attendance with a simple end-user interface.",
      "Connects real-time face recognition to a usable web workflow.",
      "Demonstrates applied computer vision beyond a demo-only prototype.",
    ],
    link: "https://face-recognition-attendance-system-6e9u.onrender.com",
    github: "https://github.com/Akshay-Dahiya/face-recognition-attendance-system",
  },
  {
    title: "Personal Portfolio Website",
    category: "Interactive Developer Portfolio",
    year: "2025",
    status: "Responsive Web Build",
    intro:
      "A visually engaging portfolio designed to present AI engineering work with clarity and impact.",
    description:
      "Built a responsive React and Vite portfolio with thoughtful motion, semantic structure, and performance-conscious asset delivery to showcase projects, capabilities, and contact information.",
    tools: ["React", "TypeScript", "Vite", "GSAP"],
    highlights: [
      "Balances visual storytelling with strong technical polish and usability.",
      "Presents the work in a concise way for recruiters, collaborators, and hiring teams.",
      "Shows how product thinking and engineering come together in a portfolio experience.",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  return (
    <section className="work-section" id="work">
      <div className="work-orb work-orb-left"></div>
      <div className="work-orb work-orb-right"></div>

      <div className="work-container section-container">
        <div className="work-header">
          <div className="work-heading">
            <span className="work-kicker">Selected Projects</span>
            <h2>
              Built With <span>Vision</span>
            </h2>
          </div>
          <p className="work-intro">
            I like building systems that feel useful, sharp, and technically
            grounded, especially where AI, computer vision, and automation can
            solve real workflow problems.
          </p>
        </div>

        <div className="project-showcase">
          <article className="project-panel">
            <div className="project-panel-grid"></div>

            <div className="project-panel-top">
              <span className="project-index">0{currentIndex + 1}</span>
              <div className="project-meta">
                <span>{currentProject.year}</span>
                <span>{currentProject.status}</span>
              </div>
            </div>

            <div className="project-copy">
              <p className="project-category">{currentProject.category}</p>
              <h3>{currentProject.title}</h3>
              <p className="project-hook">{currentProject.intro}</p>
              <p className="project-description">{currentProject.description}</p>
            </div>

            <div className="project-highlights-wrap">
              <span className="detail-label">Why it stands out</span>
              <ul className="project-highlights">
                {currentProject.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="project-footer">
              <div className="project-tools">
                {currentProject.tools.map((tool) => (
                  <span className="tool-pill" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>

              {(currentProject.link || currentProject.github) && (
                <div className="project-links">
                  {currentProject.link && (
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Live Demo <MdArrowOutward />
                    </a>
                  )}
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      GitHub <MdArrowOutward />
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>

          <aside className="project-rail">
            <div className="project-rail-head">
              <div>
                <span className="detail-label">Project Navigator</span>
                <p className="project-rail-copy">
                  Switch between projects to explore the work in more detail.
                </p>
              </div>
              <div className="project-controls">
                <button
                  type="button"
                  className="project-control"
                  onClick={goToPrev}
                  aria-label="Previous project"
                  data-cursor="disable"
                >
                  <MdArrowBack />
                </button>
                <button
                  type="button"
                  className="project-control"
                  onClick={goToNext}
                  aria-label="Next project"
                  data-cursor="disable"
                >
                  <MdArrowForward />
                </button>
              </div>
            </div>

            <div className="project-list">
              {projects.map((project, index) => (
                <button
                  type="button"
                  key={project.title}
                  className={`project-tab ${
                    index === currentIndex ? "project-tab-active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Show ${project.title}`}
                  aria-pressed={index === currentIndex}
                  data-cursor="disable"
                >
                  <span className="project-tab-index">0{index + 1}</span>
                  <div className="project-tab-copy">
                    <div className="project-tab-top">
                      <h4>{project.title}</h4>
                      <span>{project.year}</span>
                    </div>
                    <p className="project-tab-category">{project.category}</p>
                    <p className="project-tab-intro">{project.intro}</p>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Work;
