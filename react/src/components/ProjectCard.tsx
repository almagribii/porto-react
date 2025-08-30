import React from "react";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "1rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src={project.imageUrl}
          alt={project.name}
          style={{ width: "100%", height: "auto", borderRadius: "4px" }}
        />
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div>
          <strong>Teknologi:</strong>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                display: "inline-block",
                backgroundColor: "#f0f0f0",
                padding: "0.25rem 0.5rem",
                borderRadius: "4px",
                margin: "0.25rem",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div style={{ marginTop: "1rem" }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "1rem" }}
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    );                                                                                                                                                                                            
}

export default ProjectCard;