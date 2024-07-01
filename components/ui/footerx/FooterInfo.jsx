import React from "react";

const FooterInfo = ({ smd }) => {
  return (
    <div>
      <h3 className="mt-16 px-4 font-medium text-center text-2xl md:text-3xl lg:text-4xl ">
        {smd.title}
      </h3>
      <p className="mt-5 px-4 text-center font-light text-sm md:text-base">
        {smd.description}
      </p>
    </div>
  );
};

export default FooterInfo;
