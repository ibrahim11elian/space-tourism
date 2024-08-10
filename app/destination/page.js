import Image from "next/image";
import bgDesktop from "@/public/destination/background-destination-desktop.jpg";
import bgTablet from "@/public/destination/background-destination-tablet.jpg";
import bgMobile from "@/public/destination/background-destination-mobile.jpg";
import Destination from "../_components/Destination";

export const generateMetadata = ({ searchParams }) => {
  const destinationName = searchParams?.d ?? "moon";
  return {
    title: `Destination: ${destinationName[0].toUpperCase() + destinationName.substring(1)}`,
    description: "Space Tourism - Destination Page",
  };
};

function page({ searchParams }) {
  const destinationName = searchParams?.d ?? "moon";
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
      <main className="px-5 pt-10 md:px-10 md:pt-20 lg:px-20 lg:pt-12">
        <div className="flex justify-center gap-3 text-lg md:justify-start lg:text-2xl">
          <span className="font-bold text-gray-500">01</span>
          <h2 className="tracking-wider text-white">PICK YOUR DESTINATION</h2>
        </div>

        <Destination destinationName={destinationName} />
      </main>
    </>
  );
}

export default page;
