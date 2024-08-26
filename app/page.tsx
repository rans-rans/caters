import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <section className="h-full">
      {/* page title, search button,  horizontal list of food type */}
      <Header
        message={`Find the best food card ${' '} packages for you.`}
      />

    </section>
  );
}
