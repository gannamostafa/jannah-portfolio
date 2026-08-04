import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#030712] px-6 py-6 text-center text-gray-400">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3"
      >
        <div className="flex items-center justify-center md:justify-start gap-3">
          <h3 className="text-xl font-black text-white">Jannah.</h3>
          <span className="hidden sm:block h-1 w-1 rounded-full bg-white/30" />
          <p className="text-sm text-gray-300">Full-Stack Developer</p>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://github.com/gannamostafa" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/ganna-mostafa-63405425b" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href="mailto:polandagacy@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
            <FaEnvelope size={18} />
          </a>
        </div>

        <p className="text-sm">© 2026 Jannah Mostafa</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
