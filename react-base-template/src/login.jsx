import { motion } from "framer-motion";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);

  const transition = { duration: 0.7, ease: "easeInOut" };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[var(--bg-dark)]">
      <div className="relative w-225 h-130 rounded-xl overflow-hidden shadow-2xl bg-white">
        <motion.div
          animate={{ x: isSignup ? "-100%" : "0%" }}
          transition={transition}
          className="absolute left-0 top-0 w-1/2 h-full
                     bg-[var(--primary-light)]
                     flex flex-col items-center justify-center px-10"
        >
          <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
            Sign In
          </h2>

          <div className="flex gap-4 mb-3">
            {["facebook", "google", "linkedin"].map((icon) => (
              <i
                key={icon}
                className={`
                  bi bi-${icon}
                  social-icon
                  cursor-pointer text-lg
                  w-10 h-10 flex items-center justify-center
                  rounded-full
                  transition-all duration-300
                  hover:scale-110
                  hover:shadow-[0_0_16px_rgba(34,197,94,0.6)]
                `}
              />
            ))}
          </div>

          <span className="text-sm mb-3">or use your account</span>

          <input className="input" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />

          <button className="btn-primary mt-5">Sign In</button>
        </motion.div>

        <motion.div
          animate={{ x: isSignup ? "0%" : "100%" }}
          transition={transition}
          className="absolute right-0 top-0 w-1/2 h-full
                     bg-[var(--primary-light)]
                     flex flex-col items-center justify-center px-10"
        >
          <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
            Create Account
          </h2>

          <div className="flex gap-4 mb-3">
            {["facebook", "google", "linkedin"].map((icon) => (
              <i
                key={icon}
                className={`
                  bi bi-${icon}
                  social-icon
                  cursor-pointer text-lg
                  w-10 h-10 flex items-center justify-center
                  rounded-full
                  transition-all duration-300
                  hover:scale-110
                  hover:shadow-[0_0_16px_rgba(34,197,94,0.6)]
                `}
              />
            ))}
          </div>

          <span className="text-sm mb-3">or use your email</span>

          <input className="input" placeholder="Name" />
          <input className="input" placeholder="Email" />
          <input className="input" type="password" placeholder="Password" />
          <input className="input" placeholder="Confirm Password" />

          <button className="btn-primary mt-5">Sign Up</button>
        </motion.div>

        <motion.div
          animate={{ x: isSignup ? "-100%" : "0%" }}
          transition={transition}
          className="absolute right-0 top-0 w-1/2 h-full
                     bg-[var(--primary)]
                     text-white flex flex-col items-center
                     justify-center px-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            {isSignup ? "Welcome Back!" : "Hello!"}
          </h2>

          <p className="mb-6 text-sm">
            {isSignup
              ? "Already have an account? Sign in here"
              : "Enter your details and start your journey with us"}
          </p>

          <button
            onClick={() => setIsSignup(!isSignup)}
            className="border border-white px-8 py-2 rounded-lg
                       hover:bg-white hover:text-[var(--primary)]
                       transition"
          >
            {isSignup ? "Sign In" : "Sign Up"}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
