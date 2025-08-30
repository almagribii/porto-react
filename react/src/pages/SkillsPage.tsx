import React from "react";
import portfolioData from "../data/portfolioData.json";
import SkillCard from "../components/SkillCard";

function SkillsPage() {
  const { skills } = portfolioData;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Keahlian</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsPage;
