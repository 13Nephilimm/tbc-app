import { Inter } from "next/font/google";
import "./globals.css";

interface InterInterface {
  className: string;
  style: {
    fontFamily: string;
    fontStyle?: string;
    fontWeight?: number;
  };
}

interface MetaData {
  title: String;
  description: String;
}

const inter: InterInterface = Inter({ subsets: ["latin"] });

export const metadata: MetaData = {
  title: "Gamezy",
  description: "Your Gateway To The Gaming Paradise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
