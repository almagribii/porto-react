import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/about", label: "Tentang" },
  { to: "/skills", label: "Keahlian" },
  { to: "/projects", label: "Proyek" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Kontak" },
];

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.logoArea}>
      <img src="/assets/react.svg" alt="Logo" className={styles.logo} />
      <span className={styles.siteName}>Portofolio</span>
    </div>
    <nav className={styles.nav}>
      {navLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          end={link.to === "/"}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Header;
