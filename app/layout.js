import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Caters | home of dishes",
  description: "Caters is a food and dishes catering internet service where people can book for their favorite dishes for wedding , engagements , funeral, birthday parties and any celebrations . We prepare you the dishes with your health in mind . Food that makes it feels home to you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>

      </body>
    </html>
  );
}
