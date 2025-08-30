import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";
import styles from "./Home.module.scss";
import portfolioData from "../data/portfolioData.json";

function HomePage() {
  const featuredProjects = portfolioData.projects.slice(0, 3);

  return (
    <div className={styles.homeContainer}>
      <main className={styles.mainContent}>
        <HeroSection />

        <section className={styles.sectionProjects}>
          <h2>Proyek Terbaru</h2>
          <div className={styles.projectGrid}>
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <a href="/projects" className={styles.viewMoreButton}>
            Lihat Semua Proyek
          </a>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
