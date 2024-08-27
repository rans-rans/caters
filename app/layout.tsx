import {Poppins} from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/provider";

const poppins = Poppins({
  weight: '400',
  subsets:['latin'],
  display:'swap'
})

export const metadata: Metadata = {
  title: "Caters",
  description: "A ghanaian food booking website , where every one can make books for meals that is needed for engagements,wedding ceremonies,funerals, birthday parties and any other kind of outings. Remember to eat ghana while staying health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          {children}
        </Provider>
        
        </body>
    </html>
  );
}
