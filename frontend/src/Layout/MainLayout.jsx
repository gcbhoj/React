import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useState } from "react";
const MainLayout = () => {
  const [theme, setTheme] = useState("");

  return (
    <>
      <div
        className={`${
          theme ? "dark" : ""
        } bg-white dark:bg-zinc-800 dark:text-white grid h-screen w-full font-serif`}
      >
        <div className="flex justify-end mr-1 mt-.5">
          <div className="bg-zinc-300 p-2 rounded-xl flex w-25 h-10 items-center m-1">
            <button
              onClick={() => setTheme("")}
              className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-xl text-black dark:text-white"
            >
              <IoIosSunny />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-xl text-black dark:text-white "
            >
              <IoIosMoon />
            </button>
          </div>
        </div>

        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
