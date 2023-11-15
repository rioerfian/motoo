import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import instance from "../axios";
import { useState } from "react";
import { Axios } from "axios";

export default function Register() {
  const { setUser } = useAuth();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // register user
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = e.target.elements;
    const body = {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: cpassword.value,
    };
    try {
      const resp = await instance.post("/register", body);
      if (resp.status === 200) {
        setUser(resp.data.user);
        return <Navigate to="/dashboard" />;
      }
      console.log(resp);
    } catch (error) {
      console.log(error);
      if (error.response.status === 422) {
        console.log(error.response.data.errors);
        if (error.response.data.errors.name) {
          setNameError(error.response.data.errors.name[0]);
        } else {
          setNameError("");
        }
        if (error.response.data.errors.email) {
          setEmailError(error.response.data.errors.email[0]);
        } else {
          setEmailError("");
        }
        if (error.response.data.errors.password) {
          setPasswordError(error.response.data.errors.password[0]);
        } else {
          setPasswordError("");
        }
      }
    }
  };

  return (
    <section className="bg-red-700 ">
      <div className="flex flex-col items-end justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full h-full bg-white  md:mt-0 sm:max-w-md xl:p-4 ">
          <a href="#" className="flex justify-center rounded px-4 py-2 mt-4">
            <img src="logo.png" className="h-20 md:h-24" alt="motoo Logo" />
          </a>
          <div className="p-4 space-y-2 md:space-y-8 md:px-8 md:py-4 mt-4">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create Account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="py-2 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full"
                  placeholder="name"
                  required
                />
                {nameError && (
                  <p className="text-sm text-red-600">{nameError}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="py-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full"
                  placeholder="email"
                  required
                />
                {emailError && (
                  <p className="text-sm text-red-600">{emailError}</p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="py-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full"
                  required
                />
                {passwordError && (
                  <p className="text-sm text-red-600">{passwordError}</p>
                )}
              </div>
              <div>
                <input
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  placeholder="Confirm password"
                  className="py-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm py-2 text-center"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-900 ">
                Already have an account?{" "}
                <Link
                  to="/"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
          <p className="text-sm font-light text-gray-900 text-center mt-10">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://sisi.id/"
              className="text-gray-500 hover:text-gray-700 text-sm font-semibold py-1"
            >
              PT. Sinergi Informatika Semen Indonesia
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
