import Link from "next/link";
const Events = () => {
  return (
    <div className="bg-yellow-300 absolute top-0 min-h-full min-w-full pt-28">
      <h1 className="text-xl font-bold text-center pb-1">
        Join an event and make your dream come true!
      </h1>
      <div className="flex flex-col justify-center items-center pt-6">
        <Link href="/onlineevent">
          <div className="btn btn-success mt-3">Online Event</div>
        </Link>

        <Link href="/offlineevent">
          <div className="btn btn-success mt-3">Offline Event</div>
        </Link>
      </div>
    </div>
  );
};

export default Events;
