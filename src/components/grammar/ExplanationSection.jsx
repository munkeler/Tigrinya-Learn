import { Lightbulb } from "lucide-react";

function renderMarkdown(text) {
  // Simple markdown: **bold** and line breaks
  return text.split("\n").map((line, i) => {
    const parts = line.split(/(\*\*.*?\*\*)/g).map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    return (
      <span key={i}>
        {parts}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    );
  });
}

export default function ExplanationSection({ section }) {
  return (
    <div className="grammar-section explanation-section">
      <h2 className="section-title">{section.title}</h2>

      <div className="section-body">
        <p className="section-text">{renderMarkdown(section.content)}</p>
      </div>

      {section.examples && section.examples.map((example, i) => (
        <div key={i} className="example-block">
          <div className="example-header">
            <span className="example-root">{example.root}</span>
            <span className="example-meaning">{example.meaning}</span>
          </div>
          <div className="example-forms">
            {example.forms.map((form, j) => (
              <div key={j} className="example-form-row">
                <span className="form-tigrinya">{form.tigrinya}</span>
                <span className="form-translit">{form.transliteration}</span>
                <span className="form-english">{form.english}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {section.keyPoint && (
        <div className="key-point">
          <Lightbulb size={18} />
          <p>{renderMarkdown(section.keyPoint)}</p>
        </div>
      )}
    </div>
  );
}
