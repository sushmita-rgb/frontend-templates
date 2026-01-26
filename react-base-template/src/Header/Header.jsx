import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/hero", label: "Hero" },
    { path: "/about", label: "About" },
    { path: "/premium", label: "Premium" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#064e3b]/80 shadow-lg shadow-black/10 backdrop-blur-xl"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-1 text-xl font-bold tracking-tight transition-transform duration-300 ease-out hover:scale-105"
            aria-label="ProjectName Home"
          >
            <span className="text-white">Project</span>
            <span className="text-[#22c55e]">Name</span>
          </NavLink>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ease-out hover:scale-105 hover:text-[#22c55e] ${
                  isActive(link.path)
                    ? "text-[#22c55e] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-1/2 after:-translate-x-1/2 after:rounded-full after:bg-[#22c55e]"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:block">
            <NavLink
              to="/login"
              className="relative rounded-xl bg-[#22c55e] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#22c55e]/30 transition-all duration-300 ease-out hover:scale-105 hover:bg-[#16a34a] hover:shadow-[#22c55e]/50"
            >
              Login / Sign Up
            </NavLink>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 transition-all duration-300 ease-out hover:bg-white/10 hover:text-[#22c55e] md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 border-t border-white/10 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ease-out hover:bg-white/10 hover:text-[#22c55e] ${
                isActive(link.path)
                  ? "bg-white/5 text-[#22c55e]"
                  : "text-white/80"
              }`}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/login"
            onClick={() => setIsOpen(false)}
            className="mt-2 block rounded-xl bg-[#22c55e] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-[#22c55e]/30 transition-all duration-300 ease-out hover:bg-[#16a34a] hover:shadow-[#22c55e]/50"
          >
            Login / Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
