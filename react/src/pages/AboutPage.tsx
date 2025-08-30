import React from "react";
import portfolioData from "../data/portfolioData.json";
import SocialIcons from "../components/SocialIcons";

function AboutPage() {
    const { about, contact } = portfolioData;

    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <img
          src={about.photoUrl}
          alt="Foto Profil"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <h1>{about.title}</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>{about.bio}</p>
        <SocialIcons contact={contact} />
      </div>
    );
}