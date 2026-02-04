import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Rocket,
  Zap,
  Lightbulb,
  Heart,
  TrendingUp,
  Github,
  Linkedin,
} from "lucide-react";

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaJs } from "react-icons/fa";

/* ---------------- COMMON ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2.1, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

/* ---------------- SKILL ICONS ---------------- */

const skillIcons = {
  react: <FaReact className="text-sky-500" />,
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,
  js: <FaJs className="text-yellow-400" />,
  node: <FaNodeJs className="text-green-500" />,
};

/* ---------------- TEAM DATA ---------------- */

const teamMembers = [
  {
    name: "Uddhav Bhardwaj",
    role: "Frontend Developer",
    image: "https://avatars.githubusercontent.com/u/237316139",
    bio: "Passionate frontend developer focused on clean UI and smooth user experiences.",
    skills: ["react", "html", "css", "js"],
    github: "https://github.com/bhrdwjuddhv",
    linkedin: "https://www.linkedin.com/in/uddhavbhardwajhere/",
  },
  {
    name: "Sushmita Singh",
    role: "Frontend Developer",
    image: "https://avatars.githubusercontent.com/u/193432954?v=4",
    bio: "Creative developer who loves turning ideas into responsive, user-friendly web apps.",
    skills: ["react", "html", "css", "node"],
    github: "https://github.com/sushmita-rgb",
    linkedin: "https://www.linkedin.com/in/sushmita-singh-003011319/",
  },
];

/* ---------------- HERO SECTION ---------------- */

function HeroSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative overflow-hidden py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ecfdf5] via-[#d1fae5] to-[#a7f3d0]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold text-[#064e3b] sm:text-6xl"
        >
          What is <span className="text-[#15803d]">ProjectName</span>?
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-8 text-lg text-[#064e3b]/80">
          ProjectName is built to simplify complexity, empower users, and
          deliver innovation that truly matters.
        </motion.p>
      </div>
    </motion.section>
  );
}

/* ---------------- WHY THIS PROJECT ---------------- */

function WhyThisProjectSection() {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Pushing boundaries with creative technology.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Impact",
      description: "Every feature is built to make a difference.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalability",
      description: "Designed to grow from startup to enterprise.",
    },
  ];

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          variants={fadeUp}
          className="mb-12 text-center text-4xl font-bold text-[#064e3b]"
        >
          Why <span className="text-[#15803d]">This Project</span>?
        </motion.h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#15803d] to-[#16a34a] text-white">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-[#064e3b]">{f.title}</h3>
              <p className="mt-2 text-[#064e3b]/70">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------------- TEAM SECTION ---------------- */

function TeamSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="relative py-28 bg-gradient-to-b from-[#ecfdf5] via-white to-[#f0fdf4]"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div variants={fadeUp} className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-[#064e3b] sm:text-5xl">
            Meet the <span className="text-[#15803d]">Team</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#064e3b]/70">
            Passionate developers crafting beautiful, scalable web experiences.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto grid max-w-4xl gap-12 sm:grid-cols-2"
        >
          {teamMembers.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              className="group relative rounded-3xl bg-white p-8 text-center shadow-md
              transition-all duration-500 hover:-translate-y-2
              hover:shadow-[0_18px_45px_rgba(22,163,106,0.18)]"
            >
              <div
                className="pointer-events-none absolute -inset-0.5 rounded-3xl 
                bg-gradient-to-r from-[#bbf7d0] to-[#86efac]
                opacity-0 blur-md transition duration-500 group-hover:opacity-60"
              />

              <div className="relative">
                <div className="relative mx-auto mb-6 h-28 w-28">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full rounded-full border-4 border-white
                    object-cover shadow-lg transition-transform duration-500
                    group-hover:scale-110"
                  />
                </div>

                <h3 className="text-xl font-bold text-[#064e3b]">{m.name}</h3>
                <p className="mb-4 text-sm font-semibold text-[#15803d]">
                  {m.role}
                </p>

                <p className="mb-6 text-sm leading-relaxed text-[#064e3b]/70">
                  {m.bio}
                </p>

                <div className="mb-6 flex justify-center gap-4 text-2xl">
                  {m.skills.map((skill) => (
                    <span key={skill}>{skillIcons[skill]}</span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  <a
                    href={m.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#064e3b] p-3 text-white hover:bg-[#15803d]"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#064e3b] p-3 text-white hover:bg-[#15803d]"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------------- HACKATHON IMPACT ---------------- */

function HackathonImpactSection() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="py-20"
    >
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          variants={fadeUp}
          className="relative rounded-3xl bg-gradient-to-br from-[#064e3b] via-[#15803d] to-[#16a34a] p-12 text-center text-white shadow-2xl"
        >
          <Trophy className="absolute right-8 top-8 h-16 w-16 text-white/20" />

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
            <Zap className="h-4 w-4" /> Hackathon Ready
          </div>

          <h2 className="mt-6 text-4xl font-bold">
            Built to Win <br />
            <span className="text-[#a7f3d0]">Hackathons</span>
          </h2>

          <p className="mt-6 text-white/80">
            Engineered with passion, precision, and performance.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#15803d] hover:scale-105">
            <Rocket className="h-5 w-5" /> Explore Project
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ---------------- MAIN EXPORT ---------------- */

export default function AboutUs() {
  return (
    <>
      <HeroSection />
      <WhyThisProjectSection />
      <TeamSection />
      <HackathonImpactSection />
    </>
  );
}
