import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-green-500">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-black"
      >
        React Base Template 🚀
      </motion.h1>
    </div>
  );
}
