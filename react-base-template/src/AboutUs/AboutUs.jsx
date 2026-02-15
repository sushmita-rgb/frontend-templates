import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Heart, TrendingUp, Zap } from "lucide-react";

/*
BACKEND NOTE:
All static content moved into config objects.
Backend can replace this with API response later.
Example: const aboutData = await GET /api/about
*/

const ABOUT_CONTENT = {
  hero: {
    title: "About Our Healthcare Platform",
    highlight: "Healthcare Platform",
    desc1:
      "We provide a modern digital healthcare platform that helps patients easily find doctors, book appointments, and manage their medical journey — all in one secure place.",
    desc2:
      "Our mission is to reduce waiting time and improve healthcare access through simple, reliable digital tools.",
    tags: ["Online Booking", "Verified Doctors", "Reviews", "Secure Records"],
  },

  platform: {
    title: "Trusted Digital Health Infrastructure",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt nisl in bibendum luctus.",
    text2: "Modern healthcare needs organized platforms and real-time access.",
    image: "/doc9.png", // BACKEND: replace with CDN / uploaded image URL
  },

  process: {
    title: "How Our Care Process Works",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text2:
      "Patients can discover doctors, book slots, and track visits through a single dashboard.",
  },

  features: [
    {
      id: "booking",
      icon: "lightbulb",
      title: "Easy Booking",
      description: "Quick appointment flow.",
    },
    {
      id: "patient",
      icon: "heart",
      title: "Patient Friendly",
      description: "Comfort focused UI.",
    },
    {
      id: "management",
      icon: "trending",
      title: "Smart Management",
      description: "Everything in one place.",
    },
  ],

  impact: {
    title: "Built for Modern Digital Healthcare",
    text: "Faster access, better organization, improved patient experience.",
  },
};

/* ---------------- ICON MAPPER — backend safe ---------------- */

const ICON_MAP = {
  lightbulb: Lightbulb,
  heart: Heart,
  trending: TrendingUp,
};

/* ---------------- ANIMATIONS ---------------- */

const containerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const imageAnim = {
  hidden: { opacity: 0, x: 70, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

/* ---------------- HERO ---------------- */

function AboutHero({ data }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-28 bg-gradient-to-br from-green-50 via-white to-emerald-50"
    >
      <motion.div
        variants={containerStagger}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold text-green-900"
        >
          About Our <span className="text-green-700">{data.highlight}</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-8 text-lg text-green-900/80">
          {data.desc1}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-4 text-green-900/70">
          {data.desc2}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {data.tags.map((t) => (
            <span
              key={t}
              className="px-4 py-2 bg-green-100 text-green-800 rounded-lg text-sm shadow-sm"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

/* ---------------- PLATFORM INFO ---------------- */

function PlatformInfo({ data }) {
  return (
    <motion.section
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-14 items-center">
        <motion.div variants={imageAnim} className="flex justify-center">
          <div className="bg-green-100 p-6 rounded-3xl shadow-xl">
            {/* BACKEND: image URL comes from API */}
            <img
              src={data.image}
              alt="Healthcare"
              className="w-[440px] h-[480px] object-contain"
            />
          </div>
        </motion.div>

        <motion.div variants={containerStagger}>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-green-900"
          >
            {data.title}
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-6 text-green-900/70">
            {data.text1}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-4 text-green-900/60">
            {data.text2}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------------- PROCESS ---------------- */

function CareProcess({ data }) {
  return (
    <motion.section
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-24 bg-green-50"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold text-green-900"
        >
          {data.title}
        </motion.h2>

        <motion.p variants={fadeUp} className="mt-6 text-green-900/70">
          {data.text1}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-4 text-green-900/60">
          {data.text2}
        </motion.p>
      </div>
    </motion.section>
  );
}

/* ---------------- FEATURES ---------------- */

function WhyPlatform({ features }) {
  return (
    <motion.section
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          variants={fadeUp}
          className="text-4xl font-bold text-center text-green-900 mb-14"
        >
          Why Choose This Platform?
        </motion.h2>

        <motion.div
          variants={containerStagger}
          className="grid gap-8 md:grid-cols-3"
        >
          {features.map((f) => {
            const Icon = ICON_MAP[f.icon];
            return (
              <motion.div
                key={f.id} // backend-safe key
                variants={fadeUp}
                className="bg-green-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-green-600 text-white">
                  {Icon && <Icon />}
                </div>
                <h3 className="font-bold text-xl text-green-900">{f.title}</h3>
                <p className="text-green-900/70 mt-2">{f.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------------- IMPACT ---------------- */

function HealthImpact({ data }) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      viewport={{ once: true }}
      className="py-24 bg-white"
    >
      <div className="mx-auto max-w-4xl text-center bg-green-700 text-white p-14 rounded-3xl shadow-xl">
        <Zap className="mx-auto mb-4 h-10 w-10" />
        <h2 className="text-3xl font-bold">{data.title}</h2>
        <p className="mt-4 opacity-90">{data.text}</p>
      </div>
    </motion.section>
  );
}

/* ---------------- EXPORT ---------------- */

export default function AboutUs() {
  // BACKEND: replace with API call later
  const data = ABOUT_CONTENT;

  return (
    <>
      <AboutHero data={data.hero} />
      <PlatformInfo data={data.platform} />
      <CareProcess data={data.process} />
      <WhyPlatform features={data.features} />
      <HealthImpact data={data.impact} />
    </>
  );
}
