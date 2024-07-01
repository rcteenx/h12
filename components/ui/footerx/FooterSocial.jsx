import React from "react";

const FooterSocial = ({ socials }) => {
  return (
    <div className="flex items-center mt-8">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className="inline-block mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;
