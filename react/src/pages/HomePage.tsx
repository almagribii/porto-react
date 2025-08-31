import React from "react";
import styles from "./Home.module.scss";

function HomePage() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.bgGradient}></div>
      <aside className={styles.socialSidebar}>
        <a
          href="https://github.com/almagribii"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </aside>
      <div className={styles.heroContent}>
        <div className={styles.profileGlass}>
          <img
            src="profil.jpg"
            alt="Profile"
            className={styles.heroPhoto}
          />
        </div>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <span className={styles.hello}>👋 Hello, I&apos;m</span>
            <span className={styles.nameTyping}>
              <span className={styles.name}>Brucad Al Magribi</span>
              <span className={styles.typingCursor}>|</span>
            </span>
          </h1>
          <div className={styles.skillMarquee}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Node.js</span>
            <span>Laravel</span>
            <span>UI/UX</span>
            <span>Next.js</span>
          </div>
          <p className={styles.heroSubtitle}>
            Building delightful digital experiences with code, design, and a
            touch of curiosity.
          </p>
          <div className={styles.heroActions}>
            <a href="/contact" className={styles.ctaButton}>
              <span className={styles.ctaIcon}>🚀</span> Let&apos;s Collaborate
            </a>
            <a href="/cv.pdf" className={styles.secondaryButton} download>
              <span className={styles.ctaIcon}>⬇️</span> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
