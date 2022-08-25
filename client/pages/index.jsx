import Link from "next/link";

export default function Home() {
  return (
    <div className="px-24 bg-yellow-300 absolute top-0 min-h-full min-w-full pt-28">
      <img
        className="absolute left-20"
        src="/3.svg"
        height={400}
        width={400}
        alt=""
      />
      <img
        className="absolute bottom-20 right-20"
        src="/4.svg"
        height={400}
        width={400}
        alt=""
      />
      <h1 className="mt-32 text-center text-5xl font-bold text-black leading-normal">
        Make Any Occasion <br /> Unforgettable
      </h1>

      <div className="text-center">
        <Link href="/signup">
          <div className="btn bg-white text-black border-none font-bold px-14 mt-5 hover:text-white hover:bg-black">
            Get Started !!
          </div>
        </Link>
      </div>
    </div>
  );
}
