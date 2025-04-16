import React from "react";
import { metaLinks } from "../data/data";

export default function page() {
  return (
    <div className="overflow-auto min-h-screen">
      <div className="flex flex-col items-center justify-center   bg-black ">
        <div className="flex flex-row items-center mt-3 p-1 text-gray-400 border min-h-screen w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
          <div className="flex flex-col h-full w-full items-center justify-center">
            <h1 className="text-4xl text-white font-extrabold mb-8">Instagram</h1>
            <p className="text-gray-500 font-light ">
              Sign up to see photos and videos
            </p>
            <p className="text-gray-500 ">from your friends.</p>
            <div className="flex flex-col items-center justify-center bg-blue-500 hover:bg-blue-800 rounded-lg w-2/3 mt-5">
              <button className="text-white p-2 ">Log in with Fackebook</button>
            </div>
            <hr></hr>
            <p className="text-white mt-6">OR</p>
            <hr></hr>
            <div className="flex flex-col items-center text-sm text-gray-300 justify-center w-4/5 mt-5">
              <input
                type="text"
                placeholder="Email"
                className="h-9 w-full    border  p-2 mb-4"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="h-9 w-full  border  p-2 mb-4"
              />
              <input
                type="text"
                placeholder="Username"
                className="h-9 w-full   border  p-2 mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-9 w-full   border  p-2 mb-4"
              />

              <p className="text-gray-400 text-xs">
                People who use our service may have uploaded{" "}
              </p>
              <p className="text-gray-400  text-xs">
                your contact information to Instagram. <span className="text-blue-100">Learn</span> {" "}
              </p>
              <p className="text-blue-100  text-xs ">More.</p>
              <p className="text-gray-400  text-xs mt-3">
                By signing up, you agree to our Terms , <span className="text-blue-100">Privacy</span>{" "}
              </p>
              <p className="text-blue-100  text-xs">Policy <span className="text-gray-400">and</span> Cookies Policy.</p>
              <button className="bg-blue-500 h-10 w-full text-white rounded-lg mt-4">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-2 border text-gray-400 w-1/2 h-20 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
          <p className="text-white">Have an account? </p>
          <a href="/login" className="text-blue-500 font-bold">
            Log in
          </a>
        </div>
        <div className="mt-4">
          <p className="text-white text-sm ">Get the app</p>
        </div>

        <div className="flex flex-row items-center justify-center mt-4   text-white w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4">
        <div className="flex flex-col items-center mr-4 justify-center">
            <img
              src="./signup/play_store.png"
              alt="Google Play"
              className="h-10 w-40"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            
            <img
              src="./signup/microsoft.png"
              alt="App Store"
              className="h-10 w-30"
            />
          </div>
          
        </div>
        <div
          className="flex flex-wrap justify-center gap-4 p-4 text-xs text-gray-400 mx-auto 
  w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3"
        >
          {metaLinks.map((link, index) => (
            <a key={index} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-row mb-15  items-center justify-between text-gray-400 text-xs">
          <select className="mr-4 p-2   text-gray-400  ">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            <option value="Japanese">Japanese</option>
            <option value="Korean">Korean</option>
            <option value="Russian">Russian</option>
            <option value="Italian">Italian</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Arabic">Arabic</option>
            <option value="Hindi">Hindi</option>
            <option value="Bengali">Bengali</option>
            <option value="Turkish">Turkish</option>
          </select>
          <p className="">© 2025 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
}
