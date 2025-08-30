import React from "react";
import portfolioData from "../data/portfolioData.json";
import SocialIcons from "../components/SocialIcons"; // Impor komponen SocialIcons

function ContactPage() {
  const { contact } = portfolioData;

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Kontak</h1>
      <p>
        Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      <p>Telepon: {contact.phone}</p>

      {/* Menggunakan komponen SocialIcons dan memberinya data kontak sebagai props */}
      <SocialIcons contact={contact} />
    </div>
  );
}

export default ContactPage;
