import React from "react";
import { HiMail } from "react-icons/hi";

const about = () => {
  return (
    <div className="bg-yellow-300 absolute top-0 min-h-full min-w-full pt-28 text-center font-bold">
      <h1 className="text-3xl mb-4">About Us</h1>
      We are here for you! <br /> Contact Us at: +91-9888888888
      <div>Open Hours: Sun-Thu: 7:30am - 09:30pm Fri-Sat: 7:30am - 10:00pm</div>
      <div className="flex items-center justify-center">
        <div className="flex">
          For any queries or feedback, please contact us at:{" "}
          <span className="pt-1">
            <HiMail />
          </span>
        </div>

        <a
          href="mailto:
        www.example.com"
          className="text-blue-500 hover:text-blue-700"
        >
          www.example.com
        </a>
      </div>
    </div>
  );
};

export default about;
