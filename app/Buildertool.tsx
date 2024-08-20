import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { Room } from "./Room";
import { useRouter } from 'next/router';
import "./globals.css";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font-work-sans',
  weight: ['400', '600', '700'] 
});

export default function Buildertool({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} bg-primary-grey-200`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
