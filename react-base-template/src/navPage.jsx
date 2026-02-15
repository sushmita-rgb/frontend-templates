import { useNavigate } from "react-router-dom";

/*
BACKEND NOTE:
Replace NAV_PAGES with API response later
Example: GET /api/navigation-pages
*/

const NAV_PAGES = [
  { id: "hero", name: "Hero Page", path: "/hero" },
  { id: "about", name: "About", path: "/about" },
  { id: "login", name: "Login & Sign Up", path: "/login" },
  { id: "premium", name: "Premium", path: "/premium" },
  { id: "dashboard", name: "Dashboard", path: "/dashboard" },
];

export default function NavTable({
  pages = NAV_PAGES, // backend can pass data
  onNavigatePage = null, // optional hook
}) {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    // optional backend / analytics hook
    if (onNavigatePage) {
      onNavigatePage(page);
    }

    navigate(page.path);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100 p-6">
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
                key={page.id || page.name}
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
                    onClick={() => handleNavigate(page)}
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
