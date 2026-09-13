import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Constellations from "@/components/constellations";
import DaySky from "@/components/day-sky";
import ScrollWorld from "@/components/scroll-world";
import { Analytics } from "@vercel/analytics/next";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Drone Gallery",
  description: "Aerial photos and videos shot from a DJI.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
    { media: "(prefers-color-scheme: light)", color: "#f3f1ec" },
  ],
};

const themeBoot = `(function(){try{var t=localStorage.getItem('drone-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-page antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
        <ThemeProvider>
          <ScrollWorld>
            <Constellations />
            <DaySky />
            <AuthProvider>{children}</AuthProvider>
          </ScrollWorld>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
