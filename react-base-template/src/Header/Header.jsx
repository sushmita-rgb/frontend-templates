import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-[#064e3b] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wide">
          Project<span className="text-[#22c55e]">Name</span>
        </h1>

        <nav className="flex gap-4">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `px-5 py-2 rounded-md font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-[#22c55e] text-black"
                  : "border border-[#22c55e] hover:bg-[#22c55e] hover:text-black"
              }`
            }
          >
            Login
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-5 py-2 rounded-md font-medium transition-all duration-300
              ${
                isActive
                  ? "bg-[#22c55e] text-black"
                  : "border border-[#22c55e] hover:bg-[#22c55e] hover:text-black"
              }`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
