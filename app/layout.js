import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Menna Ali | Backend Developer & Health Informatics Specialist",
  description:
    "Portfolio of Menna Ali — a backend-focused full stack developer specializing in .NET, FastAPI, React, and Health Informatics. Based in Alexandria, Egypt.",
  keywords: [
    "Menna Ali",
    "Backend Developer",
    "Full Stack Developer",
    ".NET Developer",
    "FastAPI",
    "React Developer",
    "Health Informatics",
    "Data Analytics",
    "Alexandria Egypt",
    "ASP.NET Core",
    "Python Developer",
    "Portfolio",
  ],
  authors: [{ name: "Menna Ali", url: "https://my-portfolio-steel-eight-18.vercel.app/" }],
  creator: "Menna Ali",
  metadataBase: new URL("https://my-portfolio-steel-eight-18.vercel.app/"), // 🔁 replace with your actual Vercel URL after deploying
  openGraph: {
    title: "Menna Ali | Backend Developer & Health Informatics Specialist",
    description:
      "Backend-focused full stack developer building scalable APIs and clinical applications with .NET, FastAPI, and React.",
    url: "https://my-portfolio-steel-eight-18.vercel.app",
    siteName: "Menna Ali Portfolio",
    images: [
      {
        url: "/profile.jpg", // uses your existing profile image
        width: 800,
        height: 800,
        alt: "Menna Ali - Backend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menna Ali | Backend Developer",
    description:
      "Backend-focused full stack developer specializing in .NET, FastAPI, React, and Health Informatics.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://my-portfolio-steel-eight-18.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}