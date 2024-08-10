import Image from "next/image";

import bgDesktop from "@/public/technology/background-technology-desktop.jpg";
import bgTablet from "@/public/technology/background-technology-tablet.jpg";
import bgMobile from "@/public/technology/background-technology-mobile.jpg";
import Technology from "../_components/Technology";

export const metadata = {
  title: "technology",
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
      <main className="pt-10 md:pt-20 lg:pt-12">
        <div className="flex justify-center gap-3 text-lg md:justify-start md:pl-10 lg:pl-44 lg:text-2xl">
          <span className="font-bold text-gray-500">03</span>
          <h2 className="tracking-wider text-white">SPACE LAUNCH 101</h2>
        </div>
        <Technology />
      </main>
    </>
  );
}

export default page;
