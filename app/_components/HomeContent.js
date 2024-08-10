import Link from "next/link";

function HomeContent() {
  return (
    <main className="flex min-h-[calc(100vh-96px)] w-full items-center justify-center pt-5 md:px-20 md:pt-20 lg:pt-52 xl:px-60">
      <div className="mx-auto flex h-full w-full min-w-[240px] flex-col items-center justify-between gap-10 py-5 lg:flex-row lg:py-0">
        <section className="flex min-w-[240px] max-w-[520px] flex-col gap-2 text-center text-blue-300 sm:gap-4 lg:text-left">
          <h3 className="font-barlow text-lg tracking-wide sm:text-2xl sm:tracking-[4px]">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="mt-6 font-bellefair text-8xl text-white sm:text-9xl">
            SPACE
          </h1>
          <p className="px-4 font-barlow sm:px-0 xl:pr-10">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </section>

        <div>
          <Link
            href={"/destination"}
            className="mb-5 block gap-2 rounded-full bg-white px-9 py-16 font-bellefair text-xl text-blue-900 ring-white/20 transition-all duration-300 hover:text-blue-900/35 hover:ring-[4rem] sm:mb-0 sm:px-12 sm:py-24 sm:text-3xl"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </main>
  );
}

export default HomeContent;
