import React from "react";
import { metaLinks } from "../data/data";

export default function page() {
  return (
    <div className="overflow-auto ">
      <div className="flex flex-col items-center justify-start bg-black">
        <div className="border flex flex-col items-center mt-3 p-10 border-gray-400 min-h-60 w-85 ">
          <h1 className="text-white text-5xl mt-1 mb-8 ">Instagram</h1>
          <div className="text-sm">
            <input
              type="text"
              placeholder="username, or email"
              className="h-10 w-1/1 text-gray-400 border rounded-tr-md p-2 mb-1"
            />
            <input
              type="password"
              placeholder="Password"
              className="h-10 w-full text-gray-400 border p-2 "
            />
            <button className="bg-blue-500 h-9 w-full text-gray-300 rounded-lg mt-4">
              Log In
            </button>
          </div>
          <div className="flex flex-row items-center justify-center mt-4">
            <hr className="border-gray-500 w-1/3" />
            <p className="text-gray-500 mx-2">OR</p>
            <hr className="border-gray-500 w-1/3" />
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <p className=" h-9 w-full text-blue-500 hover:text-white ">
              Log in with Facebook
            </p>
            <p>
              <span className="text-gray-100 text-sm">Forgot password?</span>
            </p>
          </div>
        </div>
        <div className="flex flex-row border text-gray-400 items-center justify-center h-16 mt-4 w-85 ">
          <p className="text-gray-500">Don't have an account?</p>
          <button className="text-blue-500 hover:text-white ml-1">
            <a href="/signup"> Sign up</a>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-gray-100 text-sm mt-4">Get the app</p>
          <div className="flex flex-row items-center justify-center mt-4">
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
          <select className="mr-4 p-2   text-gray-400 bg-black ">
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
