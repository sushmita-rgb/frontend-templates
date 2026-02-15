import React from "react";
import { motion } from "framer-motion";

/* ---------------- ANIMATIONS ---------------- */

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03 },
};

/* ---------------- SVG ILLUSTRATIONS ---------------- */

// Backend note: can be replaced by imageUrl from API later
function HealthSVG() {
  return (
    <svg viewBox="0 0 200 140" className="w-40 h-28" fill="none">
      <rect
        x="10"
        y="30"
        width="180"
        height="90"
        rx="18"
        className="fill-green-100"
      />
      <path
        d="M100 55 v40"
        stroke="#166534"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <path
        d="M80 75 h40"
        stroke="#166534"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="160" cy="50" r="10" className="fill-green-300" />
    </svg>
  );
}

function HeartSVG() {
  return (
    <svg viewBox="0 0 200 140" className="w-40 h-28" fill="none">
      <rect
        x="10"
        y="30"
        width="180"
        height="90"
        rx="18"
        className="fill-emerald-100"
      />
      <path
        d="M100 95 C60 70, 40 60, 40 45 a15 15 0 0 1 30 -5 a15 15 0 0 1 30 5 c0 15 -20 25 -30 35z"
        className="fill-green-500"
      />
    </svg>
  );
}

function ChartSVG() {
  return (
    <svg viewBox="0 0 200 140" className="w-40 h-28" fill="none">
      <rect
        x="10"
        y="30"
        width="180"
        height="90"
        rx="18"
        className="fill-green-50"
      />
      <rect x="50" y="70" width="14" height="30" className="fill-green-400" />
      <rect x="80" y="60" width="14" height="40" className="fill-green-600" />
      <rect x="110" y="50" width="14" height="50" className="fill-green-800" />
    </svg>
  );
}

/* ---------------- DEFAULT DATA (FALLBACK) ---------------- */

// Backend can replace with API response
const DEFAULT_POSTS = [
  {
    id: "p1",
    title: "How Digital Healthcare Is Transforming Clinics",
    desc: "Modern platforms reduce waiting time and improve patient coordination with doctors.",
    tag: "Healthcare Tech",
    type: "health",
  },
  {
    id: "p2",
    title: "Before You Book: Smart Appointment Checklist",
    desc: "Prepare symptoms, history, and questions to get better consultation value.",
    tag: "Patient Guide",
    type: "heart",
  },
  {
    id: "p3",
    title: "Online Booking vs Walk-In — What’s Better?",
    desc: "Digital scheduling helps balance doctor load and patient convenience.",
    tag: "Appointments",
    type: "chart",
  },
  {
    id: "p4",
    title: "Preventive Care: Why Early Checks Matter",
    desc: "Routine screening helps detect risk factors before they become serious.",
    tag: "Prevention",
    type: "health",
  },
  {
    id: "p5",
    title: "Choosing the Right Specialist Quickly",
    desc: "Match your symptoms with the correct department and save time.",
    tag: "Doctors",
    type: "chart",
  },
  {
    id: "p6",
    title: "Keeping Medical Records Secure Online",
    desc: "Structured digital records improve treatment accuracy and safety.",
    tag: "Security",
    type: "heart",
  },
];

function getSvgByType(type) {
  if (type === "heart") return <HeartSVG />;
  if (type === "chart") return <ChartSVG />;
  return <HealthSVG />;
}

/* ---------------- PAGE ---------------- */

export default function BlogPage({
  posts = DEFAULT_POSTS, // backend can inject posts
  featuredPost = null, // optional featured data
  onReadMore = null, // click handler hook
}) {
  const handleReadMore = (post) => {
    if (onReadMore) onReadMore(post);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen">
      {/* HERO */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="py-24 text-center px-6"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold text-green-900"
        >
          Health & Care Blog
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg text-green-900/70 max-w-2xl mx-auto"
        >
          Practical guides, patient tips, and digital healthcare insights — all
          in one clean and trusted place.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex justify-center gap-4"
        >
          {["Appointments", "Doctors", "Patient Tips"].map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </motion.section>

      {/* FEATURE STRIP */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 mb-20"
      >
        <div className="rounded-3xl bg-white shadow-lg border border-green-100 p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-900">
              {featuredPost?.title || "Featured Article Space"}
            </h2>
            <p className="mt-4 text-green-900/70 leading-relaxed">
              {featuredPost?.desc ||
                "You can place your AI-generated or custom healthcare banner image here. This section highlights your most important blog post."}
            </p>
            <button className="mt-6 px-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition">
              View Featured
            </button>
          </div>

          <div className="flex justify-center">
            {getSvgByType(featuredPost?.type)}
          </div>
        </div>
      </motion.section>

      {/* BLOG GRID */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pb-24"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden border border-green-100"
            >
              <motion.div
                variants={cardHover}
                className="h-44 flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100"
              >
                {getSvgByType(post.type)}
              </motion.div>

              <div className="p-6">
                <span className="text-xs font-semibold bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {post.tag}
                </span>

                <h3 className="mt-4 text-xl font-bold text-green-900">
                  {post.title}
                </h3>

                <p className="mt-3 text-green-900/70 text-sm leading-relaxed">
                  {post.desc}
                </p>

                <button
                  onClick={() => handleReadMore(post)}
                  className="mt-5 text-green-700 font-semibold hover:text-green-900 transition"
                >
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pb-28 px-6"
      >
        <div className="max-w-4xl mx-auto bg-green-900 text-white rounded-3xl p-14 text-center shadow-xl">
          <h2 className="text-3xl font-bold">Get Weekly Health Insights</h2>
          <p className="mt-4 opacity-90">
            Subscribe to receive patient tips and healthcare updates.
          </p>
          <button className="mt-8 bg-white text-green-900 font-semibold px-7 py-3 rounded-xl hover:bg-green-100 transition">
            Subscribe Now
          </button>
        </div>
      </motion.section>
    </div>
  );
}
