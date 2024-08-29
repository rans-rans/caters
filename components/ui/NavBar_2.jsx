import Image from "next/image";

import Logo from "@/public/assets/icons/logo.svg";
import helpers from "@/constants/helpers";
import HorizonLinks from "@/components/ui/HorizonLinks";

export default function NavBar2() {
  return (
    <>
      {/* //TODO make the navbar responsive */}
      <nav className="flex p-6 justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={Logo}
            width={30}
            height={30}
            alt="logo icon"
            className=""
          />
          <p className="font-bold">{helpers.BRANDNAME}</p>
        </div>
        <div>
        <HorizonLinks />
        </div>
      </nav>
        <hr />
    </>
  );
}
