"use client";

import data from "@/app/_utils/data.json";
import { useState } from "react";
import Filter from "./Filter";
import TechFilterButton from "./TechFilterButton";
import useInterval from "../_hooks/useInterval";

const technology = data.technology;

function Technology() {
  const [activeTechIndex, setActiveTechIndex] = useState(0);
  const activeTech = technology[activeTechIndex];
  useInterval(technology, activeTechIndex, setActiveTechIndex);
  return (
    <section className="mt-20 flex flex-col gap-5 pb-10 md:gap-8 lg:flex-row-reverse lg:items-center lg:justify-between lg:pl-44">
      <div className="h-64 sm:h-[20rem] md:h-[23rem] lg:h-[500px] lg:w-[45%] xl:h-[600px] xl:w-[55%]">
        <img
          src={activeTech.images.landscape}
          alt={activeTech.name}
          className="h-full w-full lg:hidden"
        />
        <img
          src={activeTech.images.portrait}
          alt={activeTech.name}
          className="hidden h-full w-full lg:block"
        />
      </div>
      <div className="grid grid-rows-[auto_auto_auto_auto] items-center gap-3 text-center lg:h-fit lg:w-[50%] lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_auto_1fr] lg:gap-x-10 lg:text-left xl:w-[45%]">
        <Filter
          className="h-full lg:row-span-full lg:flex-col lg:justify-between"
          list={technology}
        >
          <TechFilterButton
            activeIndex={activeTechIndex}
            onSelect={setActiveTechIndex}
          />
        </Filter>
        <h3 className="mt-4 font-bellefair text-xl uppercase text-gray-400 md:text-2xl lg:mt-0 xl:text-3xl">
          THE TERMINOLOGY…
        </h3>
        <h2 className="mb-3 font-bellefair text-2xl uppercase text-white md:text-4xl xl:mb-0 xl:text-5xl">
          {activeTech.name}
        </h2>
        <p className="px-2 text-blue-300 sm:px-10 md:px-32 lg:px-0">
          {activeTech.description}
        </p>
      </div>
    </section>
  );
}

export default Technology;
