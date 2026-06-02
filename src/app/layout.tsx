import type { Metadata } from "next";
import "../styles.css";
import { LanguageProvider } from "../lib/translations";

export const metadata: Metadata = {
  title: "Alucha Studios — We grow web masterpieces",
  description: "Alucha Studios is a Georgian website builder and digital agency crafting sharp, fast, organic websites with bespoke 3D visuals and lightning performance.",
  openGraph: {
    title: "Alucha Studios — We grow web masterpieces",
    description: "Sharp. Fast. Organic. Georgian-grown websites engineered for the world.",
    type: "website",
    images: [
      {
        url: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/764e7e97-780d-43ab-b058-2ea032f53be7/id-preview-08c2d951--c946555e-9ddc-480c-a7b4-2aff39925418.lovable.app-1780393000114.png",
      }
    ],
  },
  twitter: {
    card: "summary",
    title: "Alucha Studios — We grow web masterpieces",
    description: "Sharp. Fast. Organic. Georgian-grown websites engineered for the world.",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/764e7e97-780d-43ab-b058-2ea032f53be7/id-preview-08c2d951--c946555e-9ddc-480c-a7b4-2aff39925418.lovable.app-1780393000114.png"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ka">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
