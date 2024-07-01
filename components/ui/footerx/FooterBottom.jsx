import React from "react";

const FooterBottom = ({ smd }) => {
  return (
    <div className="w-full  mt-4 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
      <span className="text-center">
        &copy; {new Date().getFullYear()} - {smd.title}. {smd.footerSave}
      </span>
      <div className="text-center">
        <span className=" text-red-700">&hearts;</span> by{" "}
        <a
          href="https://github.com/rcteenx"
          className="underline"
          target="_blank"
        >
          rcteenx
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
