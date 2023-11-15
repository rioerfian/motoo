import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import instance from "../axios";
import AppLogo from "../components/AppLogo";
import { FaArrowLeft } from "react-icons/fa";

export default function Login() {
  const { setUser, csrfToken } = useAuth();
  const [error, setError] = React.useState(null);

  // login user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const body = {
      email: email.value,
      password: password.value,
    };
    await csrfToken();

    try {
      console.log(body);
      const resp = instance.post("/login", body);
      console.log(resp);
      if (resp.status === 200) {
        setUser(resp.data.user);
        return <Navigate to="/dashboard" />;
      }
    } catch (error) {
      if (error.response.status === 401) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <section className="bg-red-700 md:h-screen">
      <div className="flex items-center px-4 py-2 mb-8">
        <Link to="/welcome" className="flex items-center rounded-md text-white">
          <FaArrowLeft />
          &nbsp; Go to Landing Page
        </Link>
      </div>
      <div className="flex flex-col items-end justify-center px-6 mx-auto ">
        <div className="w-full bg-white md:mt-0 sm:max-w-md md:p-4 my-8">
          <a href="#" className="flex justify-center rounded px-4 py-2">
            <AppLogo neg="false" height="80px" />
          </a>
          <div className="p-4 space-y-2 md:space-y-8 md:px-8 md:py-4 mt-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            {error && (
              <div
                className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 "
                role="alert"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 inline w-5 h-5 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Info</span>
                <div>{error}</div>
              </div>
            )}

            <form
              className="space-y-4 md:space-y-6"
              action=""
              method="post"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center "
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
