import React from 'react';
import './ToolsSection.css';

const ToolsSection = () => {
  const categories = [
    {
      id: 1,
      title: "Design & prototypage",
      tools: ["Figma", "Canva", "Draw.io", "Gamma"],
      color: "#EC4899"
    },
    {
      id: 2,
      title: "Assistance IA",
      tools: ["Développement assisté par IA (LLMs)", "Canva IA", "Gamma IA"],
      color: "#06B6D4"
    },
    {
      id: 3,
      title: "IDE & outils de développement",
      tools: ["Visual Studio Code", "PyCharm", "StarUML"],
      color: "#8B5CF6"
    },
    {
      id: 4,
      title: "Contrôle de version & collaboration",
      tools: ["Git", "GitHub", "GitLab"],
      color: "#3B82F6"
    },
    {
      id: 5,
      title: "Qualité du code & tests",
      tools: ["SonarQube", "PHPUnit"],
      color: "#10B981"
    },
    {
      id: 6,
      title: "Méthodologies",
      tools: ["Agile / Scrum (Jira)"],
      color: "#6366F1"
    },
    {
      id: 7,
      title: "Modélisation & gestion de projet",
      tools: ["UML", "Merise", "GanttProject"],
      color: "#F59E0B"
    }
  ];

  return (
    <section className="tools-section" id="tools">
      <div className="tools-header">
        <h2 className="section-title">Outils & environnements</h2>
      </div>

      <div className="tools-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            style={{
              borderLeft: `4px solid ${category.color}`
            }}
          >
            <div className="category-header">
              <h3 className="category-title">{category.title}</h3>
            </div>

            <div className="tools-container">
              {category.tools.map((tool, index) => (
                <span
                  key={index}
                  className="tool-badge"
                  style={{
                    '--category-color': category.color
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;