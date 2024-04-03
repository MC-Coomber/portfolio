import { Montserrat } from "next/font/google";
import "./globals.css";

const monserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Mike Coomber",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monserrat.className}>{children}</body>
    </html>
  );
}
