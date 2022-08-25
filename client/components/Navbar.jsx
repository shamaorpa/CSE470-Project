import React, { useEffect, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { LoginContext } from "../contexts/LoginContext";

const Navbar = () => {
  const router = useRouter();
  const { username, setUsername } = useContext(LoginContext);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/auth`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUsername(res.data.user.name);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUsername("");
    router.push("/");
  };

  return (
    <div className="px-20 pt-5 navbar bg-yellow-300 z-10 relative">
      <div className="flex-1">
        <Link href="/">
          <div className="btn hover:bg-transparent bg-transparent border-none text-black normal-case text-xl">
            EVENT
            <span className="text-white font-bold">HUB</span>
          </div>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link href="/about">Company Information</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>

          {username ? (
            <li tabIndex="0">
              <a>
                <span className="font-bold text-yellow-800">{username}</span>
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  {username === "admin" ? (
                    <Link href="/dashboard">Dashboard</Link>
                  ) : null}
                </li>
                <li onClick={logout}>
                  <Link href="/">Logout</Link>
                </li>
              </ul>
            </li>
          ) : (
            <li>
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
