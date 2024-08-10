"use client";

import data from "@/app/_utils/data.json";
import { useState } from "react";
import Filter from "./Filter";
import CrewFilterButton from "./CrewFilterButton";
import useInterval from "../_hooks/useInterval";

const crew = data.crew;

function Crew() {
  const [activePersonIndex, setActivePersonIndex] = useState(0);
  const activePerson = crew[activePersonIndex];
  useInterval(crew, activePersonIndex, setActivePersonIndex);

  return (
    <section className="mt-10 flex flex-col items-center gap-5 pb-5 lg:flex-row">
      <div className="grid grid-rows-[auto_auto_10rem_auto] gap-1 text-center sm:grid-rows-[auto_auto_6rem_auto] lg:h-full lg:text-left xl:gap-5">
        <h3 className="font-bellefair text-xl uppercase text-gray-400 md:text-2xl xl:text-3xl">
          {activePerson.role}
        </h3>
        <h2 className="mb-7 font-bellefair text-2xl uppercase text-white md:text-4xl xl:mb-0 xl:text-6xl">
          {activePerson.name}
        </h2>
        <p className="self-start text-blue-300 sm:px-20 lg:px-0 xl:max-w-[30rem]">
          {activePerson.bio}
        </p>
        <Filter className="lg:mt-28 xl:mt-40 xl:justify-start" list={crew}>
          <CrewFilterButton
            activeIndex={activePersonIndex}
            onSelect={setActivePersonIndex}
          />
        </Filter>
      </div>

      <div className="relative ml-auto flex h-[450px] w-full items-center md:h-[500px] lg:h-[450px] lg:w-[55rem] xl:h-[650px] xl:w-[30rem]">
        <img
          src={activePerson.images.webp}
          alt={activePerson.name}
          className="mask-image h-full w-full object-contain"
        />
      </div>
    </section>
  );
}

export default Crew;
