import React from "react";

import smd from "@/content/data/siteMetaData";
import FooterInfo from "./FooterInfo";
import FooterSocial from "./FooterSocial";
import FooterSitemap from "./FooterSitemap";
import FooterBottom from "./FooterBottom";

const FooterIndex = () => {
  return (
    <footer className="rounded-2xl bg-dark m-2 sm:m-10 flex flex-col items-center text-light ">
      <FooterInfo smd={smd} />
      <FooterSocial socials={smd.socials} />
      <FooterSitemap />
      <FooterBottom smd={smd} />
    </footer>
  );
};

export default FooterIndex;
