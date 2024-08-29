
import FilterNav from "@/components/ui/FilterNav";
import FlatlIst from "@/components/ui/FlatlIst";
import Header from "@/components/ui/Header";
import SearchButton from "@/components/ui/SearchButton";
import helpers from "@/constants/helpers";

export default function Home() {
  return (
    <section className="min-h-screen flex-col space-y-8  ">
      {/* page title, search button,  horizontal list of food type */}
      <Header
        className="font-extrabold text-2xl pt-10 text-wrap max-w-[250px] leading-2 tracking-wide"
        message={`Find the best food packages for you.`}
      />
      <SearchButton/>
      <FilterNav
        items={helpers.packages}
        className="flex flex-wrap gap-2 capitalize font-normal text-sm leading-normal tracking-wide text-secondarycolor-200"
      />
      <FlatlIst 
        type="horizon"
        items={helpers.packages}
        className=""      />
    </section>
  );
}
