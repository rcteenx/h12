import Link from "next/link";

import { getHeaderNav } from "@/content/data/ui";

const Nav = () => {
  const nav = getHeaderNav();

  return (
    <div>
      {/* Large Screen */}
      <nav
        className=" w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        {nav.map((n) => (
          <Link
            key={n.name}
            className="mx-2"
            href={`/${n.link + process.env.file_ext}`}
          >
            {n.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
