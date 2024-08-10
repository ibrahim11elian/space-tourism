"use client";
import data from "@/app/_utils/data.json";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const destinations = data.destinations;

function DestinationList() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("d") ?? "moon";

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("d", filter.toLowerCase());
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  };
  return (
    <ul className="flex gap-7">
      {destinations.map((destination) => (
        <li key={destination.name}>
          <button
            onClick={() => handleFilter(destination.name)}
            className={`border-b-2 border-transparent py-2 uppercase tracking-wide hover:border-white/40 ${activeFilter === destination.name.toLowerCase() ? "border-white text-white" : "text-blue-300"}`}
          >
            {destination.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DestinationList;
