import "./globals.css";

import { Poppins } from "next/font/google";
import smd from "@/content/data/siteMetaData";

import Header from "@/components/ui/header.jsx";
import Footer from "@/components/ui/footer/0-index";
import Tags from "@/components/repo/tags";
import Search from "@/components/repo/search";

const base = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-base",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: smd.title,
    template: "%s | " + smd.title,
  },
  description: smd.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={smd.language} className={`${base.variable} `}>
      <body className="bg-light max-w-screen-xl m-auto">
        <Header />
        <div className="mx-auto md:container px-4 lg:px-0 py-2 flex flex-row flex-wrap ">
          <main className="w-full lg:w-3/4 pt-1 px-2">{children}</main>
          <aside className="w-full mt-4 lg:w-1/4 px-2">
            <div className="top-0 p-4 gradientIndigo rounded-xl w-full">
              <Search ext={process.env.file_ext} />
              <Tags />
            </div>
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
