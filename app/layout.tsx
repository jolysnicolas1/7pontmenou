import "./globals.css"

import { EB_Garamond } from "next/font/google"
import localFont from "next/font/local"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
})

const pitch = localFont({
  src: "./fonts/Pitch-Bold.otf",
  variable: "--font-pitch",
})

const antiqueOlive = localFont({
  src: [
    {
      path: "./fonts/AntiqueOliveStd-Roman.woff2",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/AntiqueOliveStd-Italic.woff2",
      weight: "normal",
      style: "italic",
    },
    {
      path: "./fonts/AntiqueOliveStd-Bold.woff2",
      weight: "bold",
      style: "normal",
    },
    {
      path: "./fonts/AntiqueOliveStd-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/AntiqueOliveStd-Light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-antique-olive",
})

const title = "Achat du 7 Pont-Menou"
const desc =
  "7 Pont Menou | Projet d'habitat et lieu d'accueil à Pont-Menou"
const keywords = ["Pont Menou", "La Dérive", "Achat", "Collectif"]

const image = "https://7pontmenou.org/logos/masse.png"

export const metadata = {
  verification: {
    google: "dagFnwii5HfTcKs0SHDaT9-kwRimu2BRU3pG-paI9QY",
  },
  keywords: keywords,
  title: title,
  description: desc,
  openGraph: {
    images: image,
    type: "website",
    title: title,
    description: desc,
    url: "https://7pontmenou.org",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: desc,
    images: [image],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body
        className={`rounded-xl overflow-x-hidden font-sans min-h-screen ${garamond.variable} ${antiqueOlive.variable} ${pitch.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
