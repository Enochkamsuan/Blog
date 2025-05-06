import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="bg-slate-300 h-screen px-4 md:px-20 lg:px-24">
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-500">Explore</span> new things <br />
            Sign up in our new app
          </div>
          <div className="bg-white rounded-md p-3">
            <form>
              <input
                type="text"
                placeholder="Email  address or Phone Number"
                className="rounded-lg bg-transparent border-[1px] border-gray-400 focus:outline-blue-600 w-full p-3"
              />
              <input
                type="text"
                placeholder="Password"
                className="rounded-lg bg-transparent border-[1px] border-gray-400 focus:outline-blue-600 w-full p-3 mt-2"
              />
              <input
                type="button"
                value="Log In"
                className="bg-blue-600 rounded-lg text-white text-sm font-bold w-full mt-2 p-3"
              />
            </form>
            <div className="text-center relative my-2">
              <Link className="text-blue-500 text-xs" to="/">
                Forgotten Password?
              </Link>
              <div className="after:absolute after:w-full after:content:'' after:border-gray-500 after:bottom-[-0.5em] after:left-0 after:border-[1px]"></div>
            </div>
            <div className="text-center my-4">
              <button className="bg-green-600 rounded-lg text-white font-bold w-72 p-3">
                Create New Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
