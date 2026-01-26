import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(21,128,61,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(21,128,61,0.05)_0%,transparent_50%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row">
        <div
          className={`flex flex-1 flex-col items-center text-center transition-all duration-700 lg:items-start lg:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-700/30 bg-green-700/10 px-4 py-1.5 text-sm font-medium text-green-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-700 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-green-700" />
            </span>
            Now Available — Start Building Today
          </div>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
            Build Something{" "}
            <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600 sm:text-xl">
            Transform your ideas into reality with a clean, powerful and
            production-ready platform.
          </p>

          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-800">
              Get Started Free
              <svg
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <button className="inline-flex items-center gap-2 rounded-full border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-green-700 hover:bg-green-700/10">
              Watch Demo
            </button>
          </div>
        </div>

        <div
          className={`relative flex flex-1 items-center justify-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="relative h-80 w-80 sm:h-96 sm:w-96">
            <div className="absolute inset-8 rounded-full bg-green-700/20 animate-pulse" />

            <div className="absolute inset-8 flex items-center justify-center text-center">
              <div>
                <p className="text-sm uppercase tracking-wide text-green-700">
                  Trusted By
                </p>
                <h3 className="mt-2 text-3xl font-bold text-green-900">
                  10K+ Users
                </h3>
              </div>
            </div>

            <div className="absolute left-4 top-1/4 h-16 w-16 rounded-2xl bg-green-700 shadow-lg shadow-green-700/30 animate-float" />
            <div className="absolute bottom-1/4 right-4 h-12 w-12 rounded-full bg-green-700 shadow-lg animate-float delay-200" />

            <div className="absolute inset-0 rounded-full border border-dashed border-green-700/20 animate-spin [animation-duration:30s]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
