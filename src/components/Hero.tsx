import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary to-secondary animate-gradient-y">
      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to Your Next Project
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Build something amazing with modern web technologies
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};