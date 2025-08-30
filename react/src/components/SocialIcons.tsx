import React from "react";

interface SocialIconsProps {
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
}

function SocialIcons({ contact }: SocialIconsProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      {contact.linkedin && (
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      )}
      {contact.github && (
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      )}
      {contact.twitter && (
        <a href={contact.twitter} target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      )}
    </div>
  );
}

export default SocialIcons;
