import data from "@/app/_utils/data.json";
import Image from "next/image";
import DestinationList from "./DestinationFilterList";

const destinations = data.destinations;

function Destination({ destinationName }) {
  const destination = destinations.find(
    (d) => d.name.toLowerCase() === destinationName.toLowerCase(),
  );

  return (
    <section className="mt-7 flex flex-col items-center gap-7 sm:px-10 md:px-24 lg:mt-20 lg:gap-10 xl:flex-row xl:px-10 xl:pb-24">
      <div className="relative my-3 aspect-square w-1/2 max-w-[24rem] transition-all duration-300 lg:basis-5/6">
        <Image
          fill
          src={destination.images.webp}
          alt={destination.name}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-7 lg:px-24 xl:items-start">
        <DestinationList />
        <h1 className="font-bellefair text-6xl uppercase text-white md:text-8xl lg:text-9xl">
          {destination.name}
        </h1>
        <p className="text-center text-blue-300 xl:text-left">
          {destination.description}
        </p>
        <span className="h-px w-full border-b border-gray-400/40"></span>

        <div className="flex w-full flex-col justify-center gap-5 pb-5 sm:flex-row sm:justify-between sm:px-10">
          <div className="flex flex-col justify-center gap-4 text-center">
            <span className="tracking-wide text-blue-300">AVG. DISTANCE</span>
            <span className="font-bellefair text-3xl uppercase text-white">
              {destination.distance}
            </span>
          </div>
          <div className="flex flex-col justify-center gap-4 text-center">
            <span className="uppercase tracking-wide text-blue-300">
              Est. travel time
            </span>
            <span className="font-bellefair text-3xl uppercase text-white">
              {destination.travel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
