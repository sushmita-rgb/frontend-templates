import React from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  TrendingUp,
  TrendingDown,
  Moon,
  Sun,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const navItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Users, label: "Customers" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  { label: "Revenue", value: "$45,231", change: "+12%", up: true },
  { label: "Orders", value: "2,350", change: "+8%", up: true },
  { label: "Customers", value: "1,247", change: "-3%", up: false },
  { label: "Conversion", value: "3.2%", change: "+5%", up: true },
];

const revenueData = [
  { month: "Jan", value: 2400 },
  { month: "Feb", value: 1398 },
  { month: "Mar", value: 4800 },
  { month: "Apr", value: 3908 },
  { month: "May", value: 4800 },
  { month: "Jun", value: 3800 },
  { month: "Jul", value: 5100 },
];

const pieData = [
  { name: "Sales", value: 35 },
  { name: "Marketing", value: 25 },
  { name: "Product", value: 20 },
  { name: "Support", value: 20 },
];

const activities = [
  { name: "Sarah Chen", action: "completed purchase", time: "2m" },
  { name: "Mike Johnson", action: "signed up", time: "15m" },
  { name: "Emma Wilson", action: "left a review", time: "1h" },
  { name: "Alex Turner", action: "updated profile", time: "3h" },
  { name: "Lisa Park", action: "submitted ticket", time: "5h" },
];

const COLORS = ["#16a34a", "#22c55e", "#4ade80", "#86efac"];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-black text-white p-5">
        <h1 className="text-2xl font-bold text-green-500 mb-8">Admin</h1>
        <nav className="space-y-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 text-gray-300 hover:text-green-400 cursor-pointer"
            >
              <item.icon className="size-4" />
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex-1">
        <header className="h-14 bg-white border-b flex items-center justify-between px-6">
          <h2 className="font-semibold">Overview</h2>
          <button className="p-2 rounded hover:bg-gray-100">
            <Sun className="size-4" />
          </button>
        </header>

        <main className="p-6 space-y-6 max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-5 rounded-xl border">
                <p className="text-sm text-gray-500">{stat.label}</p>
                <div className="flex items-end justify-between mt-2">
                  <p className="text-2xl font-semibold">{stat.value}</p>
                  <span
                    className={`flex items-center gap-1 text-xs font-medium ${
                      stat.up ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {stat.up ? (
                      <TrendingUp className="size-3" />
                    ) : (
                      <TrendingDown className="size-3" />
                    )}
                    {stat.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-white p-5 rounded-xl border">
              <h3 className="text-sm text-gray-500 mb-2">Revenue</h3>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#16a34a"
                      fill="#86efac"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border">
              <h3 className="text-sm text-gray-500 mb-2">By Category</h3>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      innerRadius={50}
                      outerRadius={70}
                    >
                      {pieData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border">
            <h3 className="text-sm text-gray-500 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {activities.map((a, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs font-medium">
                      {a.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{a.name}</p>
                    <p className="text-xs text-gray-500">{a.action}</p>
                  </div>
                  <span className="text-xs text-gray-400">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
