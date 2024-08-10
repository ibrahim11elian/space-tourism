import Image from "next/image";
import HomeContent from "@/app/_components/HomeContent";
import bgDesktop from "@/public/home/background-home-desktop.jpg";
import bgTablet from "@/public/home/background-home-tablet.jpg";
import bgMobile from "@/public/home/background-home-mobile.jpg";

function Home() {
  return (
    <>
      <Image
        loading="lazy"
        fill
        src={bgDesktop}
        alt="bg"
        className="-z-10 hidden object-cover object-top lg:block"
        placeholder="blur"
        quality={80}
      />
      <Image
        loading="lazy"
        fill
        src={bgTablet}
        alt="bg"
        className="-z-10 hidden object-cover object-top sm:block lg:hidden"
        placeholder="blur"
        quality={80}
      />
      <Image
        loading="lazy"
        fill
        src={bgMobile}
        alt="bg"
        className="-z-10 object-cover object-top sm:hidden"
        placeholder="blur"
        quality={80}
      />
      <HomeContent />
    </>
  );
}

export default Home;
