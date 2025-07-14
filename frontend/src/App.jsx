import React from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { useState } from "react";

const App = () => {
  const [theme, setTheme] = useState("");
  return (
    <div
      className={`${
        theme ? "dark" : ""
      } bg-white dark:bg-zinc-800 grid place-items-center h-screen w-full`}
    >
      <div className="bg-zinc-300 p-2 rounded-xl">
        <button
          onClick={() => setTheme("")}
          className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white"
        >
          <IoIosSunny />
        </button>
        <button
          onClick={() => setTheme("dark")}
          className="bg-transparent p-3 hover:bg-zinc-200 dark:hover:bg-zinc-100/10 rounded-lg text-black dark:text-white "
        >
          <IoIosMoon />
        </button>
      </div>
    </div>
  );
};

export default App;
