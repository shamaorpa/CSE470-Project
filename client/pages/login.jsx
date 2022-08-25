import React, { useState, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { LoginContext } from "../contexts/LoginContext";

const Login = () => {
  const router = useRouter();
  const { setUsername } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/login`, {
        email,
        password,
      })
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("accessToken", token);
        console.log(res.data.user.name);
        setUsername(res.data.user.name);
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-yellow-300 absolute top-0 min-h-full min-w-full pt-28">
      <div className="container px-5 py-4 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img src="/5.svg" height={500} width={500} alt="Phone image" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-center pb-10 font-bold text-xl">
              Welcome Back !!
            </h1>
            <form>
              <div className="mb-6">
                <label htmlFor="email">Email Address:</label>
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-black cursor-pointer hover:text-blue-600 "
                >
                  Forgot password?
                </a>
              </div>

              <button
                className="inline-block btn hover:bg-white hover:text-black border-none font-bold px-14 mt-5 text-white bg-black w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                onClick={handleSubmit}
              >
                Sign In
              </button>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-white before:mt-0.5 after:flex-1 after:border-t after:border-white after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>
              <div>
                New Here?{" "}
                <Link href="/signup">
                  <span className="btn bg-white text-black hover:bg-black hover:text-white border-none px-10 font-bold cursor-pointer ml-4 ">
                    Sign Up
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
