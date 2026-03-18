import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Training
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science (AI/ML)</h4>
                <h5>SGT University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a focus on Artificial Intelligence and Machine Learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI & Machine Learning Program</h4>
                <h5>Samatrix.io</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed comprehensive training in AI and Machine Learning program.
              Focused on Deep Learning fundamentals and computer vision.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Selected AI Training</h4>
                <h5>Anthropic</h5>
              </div>
              <h3>Recent</h3>
            </div>
            <p>
              Completed specialized training courses including: Building with the Claude API, Claude Code in Action, Introduction to Model Context Protocol, and AI Fluency: Framework & Foundations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
