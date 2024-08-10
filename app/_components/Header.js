import Navigations from "@/app/_components/Navigations";
import logo from "@/public/shared/logo.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="relative z-10 flex w-full items-center pr-5 pt-5 md:pr-0 md:pt-0 lg:pt-10">
      <div className="my-auto flex grow items-center gap-7 pl-5 md:pl-10 lg:gap-10 lg:pl-16">
        <div className="relative h-12 w-12">
          <Image
            fill
            src={logo}
            alt="Logo"
            className="aspect-square object-cover"
          />
        </div>
        <div className="z-20 my-auto hidden h-px flex-1 bg-white/40 bg-blend-normal lg:block lg:translate-x-8" />
      </div>
      <Navigations />
    </header>
  );
}

export default Header;
