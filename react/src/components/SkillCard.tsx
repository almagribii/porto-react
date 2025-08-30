import React from "react";

interface SkillCardProps {
  skill: {
    name: string;
    icon: string;
    level: string;
  };
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <i
        className={skill.icon}
        style={{ fontSize: "3rem", marginBottom: "0.5rem" }}
      ></i>
      <h4>{skill.name}</h4>
      <p>{skill.level}</p>
    </div>
  );
}

export default SkillCard;
