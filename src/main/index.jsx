import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const Index = () => {
  const navigation = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput({
      ...formInput,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("UserData", JSON.stringify(formInput));
    navigation("/profile");
  };
  return (
    <div className="bg-slate-200 h-screen px-4 md:px-20 lg:px-28">
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-500">Explore</span> new things <br />
            Sign up in our new app to connect to your friends
          </div>
          <div className="bg-white rounded-md w-[35%] shadow-lg p-4">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                value={formInput.email}
                onChange={handleChange}
                placeholder="Email  address or Phone Number"
                className="rounded-lg bg-transparent border-[1px] border-gray-400 focus:outline-blue-600 w-full p-3"
              />
              <label className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formInput.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="rounded-lg bg-transparent border-[1px] border-gray-400 focus:outline-blue-600 w-full p-3 mt-2"
                />
                <span
                  className="absolute top-[23%] right-[1em] cursor-pointer"
                  onClick={togglePassword}
                >
                  {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </label>
              <button
                className="bg-blue-600 rounded-lg text-white text-sm font-bold w-full mt-2 p-3"
                type="submit"
              >
                Log In
              </button>
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
