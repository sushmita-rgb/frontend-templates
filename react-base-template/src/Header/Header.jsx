import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

/* -------- CONFIG (backend friendly) -------- */

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Doctors", path: "/doctors" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

// later backend/auth team can control this
const AUTH_ROUTES = {
  login: "/login",
  signup: "/signup",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // later replace with auth context
  const isLoggedIn = false;

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-green-100 min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        {/* LOGO */}
        <Link to="/" className="max-sm:hidden">
          <img
            src="/logo.svg" // 👉 keep logo in public folder
            alt="logo"
            className="w-36"
          />
        </Link>

        <Link to="/" className="hidden max-sm:block">
          <img src="/logo-short.svg" alt="logo" className="w-9" />
        </Link>

        {/* MENU */}
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
              <img src="/logo.svg" alt="logo" className="w-36" />
            </li>

            {NAV_ITEMS.map((item) => (
              <li
                key={item.name}
                className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"
              >
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block font-medium text-[15px] ${
                      isActive
                        ? "text-green-900"
                        : "text-[#1c1c1c] hover:text-green-900"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex max-lg:ml-auto space-x-4 items-center">
          {!isLoggedIn ? (
            <>
              <Link
                to={AUTH_ROUTES.login}
                className="px-4 py-2 text-sm rounded-full font-medium border border-gray-400 hover:bg-gray-50"
              >
                Login
              </Link>

              <Link
                to={AUTH_ROUTES.signup}
                className="px-4 py-2 text-sm rounded-full font-medium text-white bg-green-900 hover:bg-green-800"
              >
                Sign up
              </Link>
            </>
          ) : (
            <Link
              to="/dashboard"
              className="px-4 py-2 text-sm rounded-full font-medium text-white bg-green-900"
            >
              Dashboard
            </Link>
          )}

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden cursor-pointer"
          >
            <svg className="w-7 h-7" fill="#1c1c1c" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h12M3 10h12M3 15h12"
                stroke="currentColor"
                strokeWidth="2"
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
