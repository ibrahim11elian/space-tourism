import { Bellefair, Barlow } from "next/font/google";
import "@/app/_styles/style.css";
import Header from "./_components/Header";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export const metadata = {
  title: {
    template: "Space Tourism | %s",
    default: "Space Tourism",
  },
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bellefair.variable} ${barlow.variable}`}>
      <body className="relative flex min-h-screen flex-col font-barlow">
        <Header />
        {children}
      </body>
    </html>
  );
}
