import Sidebar from "@/components/ui/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Adrian",
    lastName:"Brian",
    email:"marcuoware@gmail.com"
  }
  return (
    <main className="flex h-screen w-full ">
        <Sidebar user={loggedIn}/>
        <div className="size-full flex flex-col">
          <div className="root-layout">

          </div>
        {children}
        </div>
    </main>
  );
}
