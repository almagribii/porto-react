import React from "react";
import portfolioData from "../data/portfolioData.json";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
    const { projects } = portfolioData;

    return (
        <div style={{ padding: '2rem' }}>
      <h1>Proyek</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    );
}

export default ProjectsPage;