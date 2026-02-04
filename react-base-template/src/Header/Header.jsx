import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-green-100 min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="/" className="max-sm:hidden">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </a>
        <a href="/" className="hidden max-sm:block">
          <img
            src="https://readymadeui.com/readymadeui-short.svg"
            alt="logo"
            className="w-9"
          />
        </a>

        <div
          className={`max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-1/2 max-lg:min-w-[300px]
          max-lg:bg-white max-lg:p-6 max-lg:shadow-md max-lg:overflow-auto z-50
          transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:!block`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200"
          >
            ✕
          </button>

          <ul className="lg:flex gap-x-4 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <img
                src="https://readymadeui.com/readymadeui.svg"
                alt="logo"
                className="w-36"
              />
            </li>

            {["Home", "Team", "Feature", "Blog", "About", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
                >
                  <a
                    href="/"
                    className={`block font-medium text-[15px] ${
                      item === "Home"
                        ? "text-green-900"
                        : "text-[#1c1c1c] hover:text-green-900"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex max-lg:ml-auto space-x-4 items-center">
          <button className="px-4 py-2 text-sm rounded-full font-medium tracking-wide text-[#1c1c1c] border border-gray-400 bg-transparent hover:bg-gray-50 transition">
            Login
          </button>

          <button className="px-4 py-2 text-sm rounded-full font-medium tracking-wide text-white border border-green-900 bg-green-900 hover:bg-green-800 transition">
            Sign up
          </button>

          {/* OPEN MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden cursor-pointer"
          >
            <svg className="w-7 h-7" fill="#1c1c1c" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}
    </header>
  );
}
