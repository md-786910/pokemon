import React from "react";

function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container bg-gray-200 mx-auto flex  flex-wrap p-2 flex-col md:flex-row items-center">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeLidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-2xl">Pokemon Generator</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <button className="text-sm bg-indigo-500 p-2  rounded-sm  mr-5 text-xl text-white hover:text-gray-200 lowercase">
              Home
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
