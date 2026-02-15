import React, { useState } from "react";
import { motion } from "framer-motion";

/* ---------------- ANIMATION ---------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ---------------- STATIC CONTACT INFO ---------------- */
// Backend team can later replace this with API response
const CONTACT_INFO = {
  addressLines: ["HealthCare Center", "MG Road, Pune", "Maharashtra, India"],
  phone: "+91 98765 43210",
  hours: "Mon–Sat • 9am–7pm",
  email: "support@healthcare.com",
};

/* ---------------- INQUIRY TYPES ---------------- */
// Backend can also send this list dynamically
const INQUIRY_TYPES = [
  { id: "general", label: "General Inquiry" },
  { id: "appointment", label: "Appointment Help" },
  { id: "doctor", label: "Doctor Info" },
  { id: "feedback", label: "Feedback" },
];

export default function Contact() {
  // Form state kept simple for backend integration
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    inquiryType: INQUIRY_TYPES[0].id,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 👉 Backend team: replace with API call
    // Example: await api.post('/contact', formData)
    console.log("CONTACT_FORM_SUBMIT", formData);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen">
      {/* HERO */}
      <section className="py-20 px-6 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold text-green-900"
        >
          Contact Our Healthcare Team
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 text-green-900/70 max-w-2xl mx-auto"
        >
          Have questions about appointments, doctors, or services? Our support
          team is here to help you.
        </motion.p>
      </section>

      {/* MAIN GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8"
        >
          {/* Visit */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100">
            <h3 className="text-xl font-bold text-green-900">Visit Us</h3>
            <p className="mt-3 text-green-900/70">
              {CONTACT_INFO.addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>

          {/* Call */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100">
            <h3 className="text-xl font-bold text-green-900">Call</h3>
            <p className="mt-3 text-green-900/70">
              {CONTACT_INFO.phone}
              <br />
              {CONTACT_INFO.hours}
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-green-100">
            <h3 className="text-xl font-bold text-green-900">Email</h3>
            <p className="mt-3 text-green-900/70">{CONTACT_INFO.email}</p>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white p-10 rounded-2xl shadow-lg border border-green-100 space-y-6"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-bold text-green-900">Send a Message</h3>

          <div className="grid sm:grid-cols-2 gap-5">
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Full Name"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Phone"
            />
          </div>

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email"
          />

          <select
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {INQUIRY_TYPES.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-green-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your message..."
          />

          <button className="w-full bg-green-700 text-white py-3 rounded-xl font-semibold hover:bg-green-800 transition">
            Send Message
          </button>
        </motion.form>
      </section>

      {/* MAP */}
      {/* Backend can replace src with dynamic coordinates or saved location */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="rounded-3xl overflow-hidden border border-green-100 shadow-md">
          <iframe
            title="clinic-map"
            src="https://www.google.com/maps?q=MG%20Road%20Pune&output=embed"
            className="w-full h-[380px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
