import React from "react";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.heroContent}>
      <img
        src="vite.svg"
        alt="React Logo"
        className={styles.heroLogo}
        loading="lazy"
      />
      <h1 className={styles.heroTitle}>
        Halo, Saya <span className={styles.highlight}>Brucad Al Magribi</span> 👋
      </h1>
      <p className={styles.heroSubtitle}>
        Saya seorang <span className={styles.gradientText}>Web Developer</span>{" "}
        yang suka membangun aplikasi modern, interaktif, dan responsif dengan
        React.
      </p>
      <div className={styles.heroActions}>
        <a href="/projects" className={styles.ctaButton}>
          🚀 Lihat Proyek
        </a>
        <a href="/contact" className={styles.secondaryButton}>
          ✉️ Kontak Saya
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
