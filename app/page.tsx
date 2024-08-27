import FlatlIst from "@/components/ui/FlatlIst";
import Header from "@/components/ui/Header";
import SearchButton from "@/components/ui/SearchButton";
import helpers from "@/constants/helpers";

export default function Home() {
  return (
    <section className="min-h-screen">
      {/* page title, search button,  horizontal list of food type */}
      <Header
        message={`Find the best food packages for you.`}
      />
<div className=" pt-5">
        <SearchButton/>
      </div>
      <div className="pt-10">
        <FlatlIst 
          type="horizon"
          items={helpers.packages}
        />
      </div>
    </section>
  );
}
