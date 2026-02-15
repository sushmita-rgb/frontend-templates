import { motion } from "framer-motion";
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("patient");

  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient",
  });

  const transition = { duration: 0.7, ease: "easeInOut" };

  /* ---------------- HANDLERS — BACKEND READY ---------------- */

  const handleSignin = (e) => {
    e.preventDefault();
    // backend team can connect here
    // POST /api/auth/login
    console.log("SIGNIN:", signinData);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // backend team can connect here
    // POST /api/auth/register
    console.log("SIGNUP:", signupData);
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-[var(--bg-dark)]">
      <div className="relative w-225 h-130 rounded-xl overflow-hidden shadow-2xl bg-white">
        {/* ---------------- SIGN IN ---------------- */}

        <motion.form
          onSubmit={handleSignin}
          animate={{ x: isSignup ? "-100%" : "0%" }}
          transition={transition}
          className="absolute left-0 top-0 w-1/2 h-full
                     bg-[var(--primary-light)]
                     flex flex-col items-center justify-center px-10"
        >
          <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
            Patient / Doctor Sign In
          </h2>

          <input
            className="input"
            placeholder="Email"
            value={signinData.email}
            onChange={(e) =>
              setSigninData({ ...signinData, email: e.target.value })
            }
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={signinData.password}
            onChange={(e) =>
              setSigninData({ ...signinData, password: e.target.value })
            }
          />

          <button className="btn-primary mt-5">Access Dashboard</button>
        </motion.form>

        {/* ---------------- SIGN UP ---------------- */}

        <motion.form
          onSubmit={handleSignup}
          animate={{ x: isSignup ? "0%" : "100%" }}
          transition={transition}
          className="absolute right-0 top-0 w-1/2 h-full
                     bg-[var(--primary-light)]
                     flex flex-col items-center justify-center px-10"
        >
          <h2 className="text-2xl font-bold text-[var(--text-dark)] mb-4">
            Create Healthcare Account
          </h2>

          <input
            className="input"
            placeholder="Full Name"
            value={signupData.name}
            onChange={(e) =>
              setSignupData({ ...signupData, name: e.target.value })
            }
          />

          <input
            className="input"
            placeholder="Email"
            value={signupData.email}
            onChange={(e) =>
              setSignupData({ ...signupData, email: e.target.value })
            }
          />

          <input
            className="input"
            type="password"
            placeholder="Password"
            value={signupData.password}
            onChange={(e) =>
              setSignupData({ ...signupData, password: e.target.value })
            }
          />

          <input
            className="input"
            placeholder="Confirm Password"
            value={signupData.confirmPassword}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                confirmPassword: e.target.value,
              })
            }
          />

          {/* role select — useful for backend routing */}
          <select
            className="input"
            value={signupData.role}
            onChange={(e) =>
              setSignupData({ ...signupData, role: e.target.value })
            }
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>

          <button className="btn-primary mt-5">Register Account</button>
        </motion.form>

        {/* ---------------- SIDE PANEL ---------------- */}

        <motion.div
          animate={{ x: isSignup ? "-100%" : "0%" }}
          transition={transition}
          className="absolute right-0 top-0 w-1/2 h-full
                     bg-[var(--primary)]
                     text-white flex flex-col items-center
                     justify-center px-10 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            {isSignup ? "Welcome Back" : "Join Our Care Platform"}
          </h2>

          <p className="mb-6 text-sm">
            {isSignup
              ? "Access your appointments and medical dashboard"
              : "Create your account to book doctors & manage visits"}
          </p>

          <button
            type="button"
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
