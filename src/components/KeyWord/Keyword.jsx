import './Keyword.css';

function Keyword() {
    const terminologies = [
        "SEO",
        "BRANDING",
        "RESPONSIVE DESIGN",
        "UIUX DESIGN",
        "BRANDED RESEARCH",
        "WEB DEVELOPMENT",
        "CONTENT WRITING",
        "DATA ANALYSIS",
        "WEB HOSTING",
        "CONTENT MANAGEMENT SYSTEMS (CMS)"
      ];
    

  return (
    <div className="terminologies-container">
      <div className="terminologies">
        {terminologies.map((term, index) => (
          <span className="terminology" key={index}>{term}</span>
        ))}
      </div>
    </div>
  );
}

export default Keyword;
