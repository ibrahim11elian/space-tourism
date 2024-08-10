import Image from "next/image";

import bgDesktop from "@/public/crew/background-crew-desktop.jpg";
import bgTablet from "@/public/crew/background-crew-tablet.jpg";
import bgMobile from "@/public/crew/background-crew-mobile.jpg";
import Crew from "../_components/Crew";

export const metadata = {
  title: "Crew",
};

function page() {
  return (
    <>
      <Image
        loading="lazy"
        fill
        src={bgDesktop}
        alt="bg"
        className="-z-10 hidden object-cover object-top lg:block"
        placeholder="blur"
      />
      <Image
        loading="lazy"
        fill
        src={bgTablet}
        alt="bg"
        className="-z-10 hidden object-cover object-top sm:block lg:hidden"
        placeholder="blur"
      />
      <Image
        loading="lazy"
        fill
        src={bgMobile}
        alt="bg"
        className="-z-10 object-cover object-top sm:hidden"
        placeholder="blur"
      />
      <main className="px-5 pt-10 md:px-10 md:pt-20 lg:px-44 lg:pt-12">
        <div className="flex justify-center gap-3 text-lg md:justify-start lg:text-2xl">
          <span className="font-bold text-gray-500">02</span>
          <h2 className="tracking-wider text-white">MEET YOUR CREW</h2>
        </div>
        <Crew />
      </main>
    </>
  );
}

export default page;
