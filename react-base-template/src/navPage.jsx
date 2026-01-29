import { useNavigate } from "react-router-dom";

export default function NavTable() {
  const navigate = useNavigate();

  const pages = [
    { name: "Hero Page", path: "/hero" },
    { name: "About", path: "/about" },
    { name: "Login & Sign Up", path: "/login" },
    { name: "Premium", path: "/premium" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 p-6">
      <div className="w-full max-w-2xl bg-[#ecfdf5] rounded-2xl overflow-hidden border border-green-600/40 shadow-[0_0_20px_rgba(22,163,74,0.15)]">
        <div className="px-6 py-4 text-center text-green-900 text-xl font-semibold border-b border-green-600/20">
          Navigation Table
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="px-6 py-3 text-left">Pages</th>
              <th className="px-6 py-3 text-center">Nav Buttons</th>
            </tr>
          </thead>

          <tbody>
            {pages.map((page, index) => (
              <tr
                key={page.name}
                className="
                  odd:bg-green-50
                  even:bg-green-100
                  hover:bg-green-200/60
                  transition-colors
                "
              >
                <td className="px-6 py-3 text-green-900 font-medium">
                  {page.name}
                </td>

                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => navigate(page.path)}
                    className="
                      px-5 py-1.5
                      rounded-lg
                      bg-green-600
                      text-white
                      text-sm
                      font-semibold
                      hover:bg-green-700
                      active:bg-green-800
                      transition-colors
                      shadow-[0_0_10px_rgba(22,163,74,0.4)]
                      hover:shadow-[0_0_16px_rgba(22,163,74,0.7)]
                    "
                  >
                    Go
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
