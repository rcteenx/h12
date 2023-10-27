import "./globals.css";

import { Inter } from "next/font/google";
import smd from "@/content/data/siteMetaData";

import Header from "@/components/ui/header/header";
import Footer from "@/components/ui/footer/footer";
import Tags from "@/components/repo/tags";
import Search from "@/components/repo/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: smd.title,
    template: "%s | " + smd.title,
  },
  description: smd.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={smd.language}>
      <body className="bg-light max-w-screen-xl m-auto">
        <Header />
        <div className="flex flex-row flex-wrap sm:p-8">
          <main className="w-full lg:w-3/4 pt-1 px-2">{children}</main>
          <aside className="w-full mt-4 lg:w-1/4 px-2">
            <div className="top-0 p-4 bg-teal-100 rounded-xl w-full">
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
