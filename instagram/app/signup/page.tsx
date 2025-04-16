import React from "react";
import { metaLinks } from "../data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
export default function page() {
  return (
    <div className="overflow-auto min-h-screen">
      <div className="flex flex-col items-center justify-center   bg-black ">
        <div className="flex flex-row items-center mt-2   inset-shadow-2xs border text-gray-500   w-86 ">
          <div className="flex flex-col h-full w-full p-2 items-center mb-8 justify-center">
            <h1 className="text-4xl text-white font-extrabold mt-4 mb-3 font-cursive">Instagram</h1>
            <p className="text-gray-400 text-sm font-bold  ">
              Sign up to see photos and videos
            </p>
            <p className="text-gray-400 text-sm font-bold ">from your friends.</p>
            <div className="flex flex-col items-center justify-center bg-blue-400 hover:bg-blue-600 rounded-lg w-70 mt-5">
              <button className="text-white p-1 "><FontAwesomeIcon icon={faSquareFacebook} />  Log in with Fackebook</button>
            </div>
            <div className="flex items-center justify-center mt-4 w-70">
            <hr className="flex-grow border-t border-gray-600" />
            <span className="mx-4 text-gray-500 text-xs">OR</span>
            <hr className="flex-grow border-t border-gray-600" />
          </div>
            <hr></hr>
            <div className="flex flex-col items-center text-xs text-gray-300 justify-center w-4/5 mt-5">
              <input
                type="text"
                placeholder="Mobile Number or Email"
                className="h-9 w-full    border  p-2 mb-2"
              />
              <input
                type="password"
                placeholder="Password"
                className="h-9 w-full   border  p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Full Name"
                className="h-9 w-full  border  p-2 mb-2"
              />
              <input
                type="text"
                placeholder="Username"
                className="h-9 w-full   border  p-2 mb-2"
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
              <button className="bg-blue-300 h-9 w-full font-bold text-sm text-gray-500 rounded-lg mt-4">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-sm mt-2 border text-gray-400 w-86 h-20 ">
          <p className="text-white">Have an account? </p>
          <a href="/login" className="text-blue-500 font-semibold">
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
              className="h-10 w-35"
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
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-15 text-xs text-gray-300 w-full"

        >
          {metaLinks.map((link, index) => (
            <a key={index} href="#" className="hover:underline">
              {link}
            </a>
          ))}
        </div>

        <div className="flex flex-row mb-20 items-center justify-between text-gray-300 text-xs">
          <select className="mr-4 p-2   text-gray-300  ">
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
