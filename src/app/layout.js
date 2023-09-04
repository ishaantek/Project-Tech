import { Providers } from "./providers";
import Script from "next/script";

import "@/styles/globals.css";
import theme from "@/styles/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Project Tech",
  description:
    "The Project Tech Foundation is a non-profit organization led by students that aims to bridge the digital divide through free computer science education for global students, offering courses, resources, and tools.",
  image: "https://project-tech.org",
  keywords: [
    "Project Tech",
    "Coding Education",
    "Free Programming Courses",
    "Free Coding Resources",
    "Resources",
    "EdTech",
    "Digital Divide",
    "Computer Science",
    "JavaScript",
    "Python",
    "Data Science",
    "Web Development",
    "Interactive Learning",
    "Free Coding Courses",
    "Tech Community",
    "Project Tech",
  ],
  twitter: {
    cardType: "summary_large_image",
    title: "Project Tech",
    description:
      "The Project Tech Foundation is a non-profit organization led by students that aims to bridge the digital divide through free computer science education for global students, offering courses, resources, and tools.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#3b9af6"></meta>
        <meta property="og:image" content="https://project-tech.org/logo.jpg" />
      </head>
      <body>
        <Providers theme={theme}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
