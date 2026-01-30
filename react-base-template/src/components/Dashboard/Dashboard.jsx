import { useState } from "react";
import {
  LayoutDashboard,
  BarChart3,
  Users,
  Settings,
  Menu,
  X,
  Bell,
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  UserCheck,
  Target,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Customers" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  {
    title: "Revenue",
    value: "₹45,23,100",
    change: "+20.1%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "2,350",
    change: "+15.2%",
    positive: true,
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: "12,234",
    change: "+8.4%",
    positive: true,
    icon: UserCheck,
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "-2.1%",
    positive: false,
    icon: Target,
  },
];

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 4500 },
  { month: "May", revenue: 6000 },
  { month: "Jun", revenue: 5500 },
];

const categoryData = [
  { name: "Electronics", value: 35, color: "#97ce23" },
  { name: "Clothing", value: 25, color: "#7fbf1f" },
  { name: "Home", value: 20, color: "#65a30d" },
  { name: "Sports", value: 12, color: "#a3e635" },
  { name: "Other", value: 8, color: "#4d7c0f" },
];

const renderLabel = ({ name, value }) => `${name} ${value}%`;

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-green-100 text-gray-900">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static z-50 inset-y-0 left-0 w-64 bg-green-200 border-r
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="h-full flex flex-col p-4">
          <div className="flex justify-end lg:hidden mb-4">
            <button onClick={() => setSidebarOpen(false)}>
              <X />
            </button>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white mb-6">
            <div className="w-10 h-10 rounded-full bg-[#97ce23] text-white flex items-center justify-center font-semibold">
              SS
            </div>
            <div>
              <p className="font-semibold text-sm">Sushmita Singh</p>
              <p className="text-xs text-gray-500">@sushiii</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium
                ${
                  item.active
                    ? "bg-[#97ce23] text-white"
                    : "text-gray-700 hover:bg-green-300/50"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-green-200 border-b px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
              <Menu />
            </button>
            <div>
              <h1 className="text-xl font-bold">Dashboard</h1>
              <p className="text-sm text-gray-500 hidden sm:block">
                Welcome back!
              </p>
            </div>
          </div>

          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#97ce23] rounded-full" />
          </button>
        </header>

        <main className="p-4 sm:p-6 space-y-6 max-w-7xl w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex justify-between mb-3">
                  <div className="p-2 rounded-xl bg-[#97ce23]/15">
                    <s.icon size={18} className="text-[#97ce23]" />
                  </div>
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${
                      s.positive ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {s.positive ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    {s.change}
                  </div>
                </div>
                <p className="text-2xl font-bold">{s.value}</p>
                <p className="text-sm text-gray-500">{s.title}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-4">Monthly Revenue</h3>
              <div className="h-[280px]">
                <ResponsiveContainer>
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="5%"
                          stopColor="#97ce23"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#97ce23"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#97ce23"
                      fill="url(#rev)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h3 className="font-semibold mb-4">Category Distribution</h3>
              <div className="h-[280px]">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      dataKey="value"
                      innerRadius={55}
                      outerRadius={100}
                      label={renderLabel}
                    >
                      {categoryData.map((c, i) => (
                        <Cell key={i} fill={c.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => `${v}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
