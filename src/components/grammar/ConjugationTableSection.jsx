import { Lightbulb } from "lucide-react";

function renderMarkdown(text) {
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

export default function ConjugationTableSection({ section }) {
  const table = section.conjugationTable;
  const hasPrefix = table.rows.some((r) => r.prefix);

  return (
    <div className="grammar-section conjugation-section">
      <h2 className="section-title">{section.title}</h2>

      <div className="section-body">
        <p className="section-text">{renderMarkdown(section.content)}</p>
      </div>

      <div className="conj-table-wrapper">
        <div className="conj-table-header">
          <span className="conj-verb">{table.verb}</span>
          <span className="conj-tense">{table.tense}</span>
        </div>
        <table className="conj-table">
          <thead>
            <tr>
              <th>Person</th>
              <th>Pronoun</th>
              {hasPrefix && <th>Prefix</th>}
              <th>{hasPrefix ? "Suffix" : "Suffix"}</th>
              <th>Form</th>
              <th>Transliteration</th>
              <th>English</th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                <td className="cell-person">{row.person}</td>
                <td className="cell-pronoun">{row.pronoun}</td>
                {hasPrefix && (
                  <td className="cell-affix">{row.prefix || "—"}</td>
                )}
                <td className="cell-affix">{row.suffix}</td>
                <td className="cell-form">{row.form}</td>
                <td className="cell-translit">{row.translit}</td>
                <td className="cell-english">{row.english}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {section.keyPoint && (
        <div className="key-point">
          <Lightbulb size={18} />
          <p>{renderMarkdown(section.keyPoint)}</p>
        </div>
      )}
    </div>
  );
}
