import AppProvider from "@/components/providers";
import "./globals.css";


export const metadata = {
  title: "Newsspree | Chat,Text,Message",
  description: "A chat application that enables user to send messages to people they care about like family, friends , ex,fiancee and people around the globe",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <main>
          <AppProvider>
            {children}
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
