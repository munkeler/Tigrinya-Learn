import { expansionPlan } from "../data/lessons";
import { CheckCircle, Circle, Clock } from "lucide-react";

export default function Roadmap() {
  return (
    <div className="roadmap-page">
      <h1>Learning Roadmap</h1>
      <p className="page-subtitle">
        Our plan for growing Tigrinya Learn into a comprehensive language learning platform
      </p>

      <div className="roadmap-timeline">
        {expansionPlan.map((phase) => (
          <div key={phase.phase} className={`roadmap-phase ${phase.status}`}>
            <div className="phase-marker">
              {phase.status === "done" ? (
                <CheckCircle size={24} />
              ) : (
                <Circle size={24} />
              )}
            </div>
            <div className="phase-content">
              <h2>
                Phase {phase.phase}: {phase.title}
              </h2>
              <div className="phase-status-badge">
                {phase.status === "done" ? (
                  <><CheckCircle size={14} /> Current</>
                ) : (
                  <><Clock size={14} /> Planned</>
                )}
              </div>
              <ul className="phase-topics">
                {phase.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <section className="contribute-section">
        <h2>How You Can Help</h2>
        <p>
          Tigrinya is an underserved language in the digital learning space. If you're a native
          speaker, linguist, or developer, contributions are welcome! Areas where help is needed:
        </p>
        <ul>
          <li>Audio recordings from native speakers</li>
          <li>Verification of translations and transliterations</li>
          <li>Additional vocabulary and phrase suggestions</li>
          <li>Cultural context and usage notes</li>
          <li>Bug reports and feature suggestions</li>
        </ul>
      </section>
    </div>
  );
}
