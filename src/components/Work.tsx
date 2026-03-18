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
    title: "Intelligent Real-Time Surveillance System",
    category: "Occlusion-Aware Surveillance AI",
    year: "2025",
    status: "Real-Time Detection + Tracking",
    intro:
      "Built to detect and track objects from live video feeds while staying reliable under partial occlusion and visual distortions.",
    description:
      "This real-time AI surveillance system combines object detection, multi-object tracking, motion analysis, and activity heatmaps to infer hidden or partially visible entities. It also includes event-driven alert mechanisms for loitering, restricted zone violations, and suspicious movement patterns, with automated notifications and image capture for faster response.",
    tools: [
      "Object Detection",
      "Multi-Object Tracking",
      "Motion Analysis",
      "Activity Heatmaps",
    ],
    highlights: [
      "Maintains tracking reliability even when objects are partially hidden or visually distorted.",
      "Uses heatmaps and motion analysis to infer behavior beyond directly visible frames.",
      "Triggers real-time alerts with image capture for loitering, restricted areas, and suspicious movement.",
    ],
  },
  {
    title: "Smart Attendance System",
    category: "Face Recognition System",
    year: "2024",
    status: "Live Project",
    intro:
      "A practical attendance platform that turns face recognition into a cleaner daily workflow.",
    description:
      "Built to reduce manual check-ins and make attendance tracking more efficient, this system captures live input, verifies identities, and stores attendance records through a streamlined web interface. It is a hands-on application of computer vision for a real operational use case.",
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
    title: "Fog Vision AI System",
    category: "Low-Visibility Computer Vision",
    year: "2024",
    status: "Research Build",
    intro:
      "A computer vision exploration aimed at improving scene understanding in foggy conditions.",
    description:
      "This project focuses on making vision systems more dependable when weather reduces clarity. Using deep learning approaches with fog-related datasets, it investigates how models can preserve useful perception even when raw visibility drops significantly.",
    tools: [
      "Deep Learning",
      "Princeton Dataset",
      "Image Restoration",
      "Scene Understanding",
    ],
    highlights: [
      "Targets an important real-world weakness in outdoor vision systems.",
      "Explores model behavior when raw imagery becomes difficult to interpret.",
      "Connects research-style experimentation with applied visual intelligence.",
    ],
  },
  {
    title: "Video Shorts Generator",
    category: "Automation Pipeline",
    year: "2025",
    status: "Workflow Automation",
    intro:
      "A content production pipeline designed to reduce repetitive editing work for short-form video.",
    description:
      "Created as an automation-first workflow, this system links repeatable content generation steps so raw inputs can move toward short-form output with less manual effort. The focus is speed, consistency, and making production easier to scale.",
    tools: ["n8n", "Workflow Automation", "Content Ops", "Process Design"],
    highlights: [
      "Automates repetitive steps that usually slow down short-form production.",
      "Turns fragmented creation work into a more reliable repeatable system.",
      "Shows how automation can improve both speed and consistency.",
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
