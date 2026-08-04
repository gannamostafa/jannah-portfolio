import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#050816] via-[#0F172A] to-[#1A0933] text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-pink-400 uppercase tracking-[5px] mb-4">
              Welcome To My Portfolio
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Hi,
              <br />
              I'm{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Jannah
              </span>
            </h1>

            {/* Typing Animation */}
            <div className="text-2xl md:text-4xl font-bold mt-6 h-16">
              <TypeAnimation
                sequence={[
                  "MEAN Stack Developer",
                  1500,
                  "Backend-Focused Developer",
                  1500,
                  "React Developer",
                  1500,
                  "Node.js Developer",
                  1500,
                ]}
                speed={40}
                repeat={Infinity}
              />
            </div>

            {/* Description */}
            <p className="text-gray-300 mt-8 leading-8 max-w-xl text-lg">
              Passionate Full-Stack Developer specialized in the MEAN Stack
              with a strong focus on Backend Development. I enjoy building
              modern, scalable web applications with clean architecture and
              exceptional user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 font-semibold shadow-xl"
              >
                View Projects
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-full border border-pink-500 hover:bg-pink-500 duration-300"
              >
                Download CV
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-10 text-3xl">
              <a href="https://github.com/gannamostafa" className="hover:text-pink-500 duration-300">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ganna-mostafa-63405425b" className="hover:text-pink-500 duration-300">
                <FaLinkedin />
              </a>
              <a href="mailto:polandagacy@gmail.com" className="hover:text-pink-500 duration-300">
                <HiOutlineMail />
              </a>
            </div>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-3 gap-4 mt-14 max-w-md">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <h2 className="text-3xl font-black text-pink-400">8+</h2>
                <p className="text-gray-400 text-sm mt-2">Projects</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <h2 className="text-3xl font-black text-purple-400">12+</h2>
                <p className="text-gray-400 text-sm mt-2">Technologies</p>
              </div>

              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <h2 className="text-3xl font-black text-pink-400">5+</h2>
                <p className="text-gray-400 text-sm mt-2">Certificates</p>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center min-h-[500px]"
          >
            {/* Main Glow */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-pink-500/20 blur-[100px]" />

            {/* MongoDB */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute top-0 left-20 z-20"
            >
              <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/10">
                MongoDB
              </div>
            </motion.div>

            {/* Angular (جديد) */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="absolute top-36 -left-6 z-20"
            >
              <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/10">
                Angular
              </div>
            </motion.div>

            {/* React */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute top-24 right-0 z-20"
            >
              <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/10">
                React
              </div>
            </motion.div>

            {/* Node.js */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute bottom-16 left-4 z-20"
            >
              <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/10">
                Node.js
              </div>
            </motion.div>

            {/* Express */}
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute bottom-4 right-10 z-20"
            >
              <div className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/10">
                Express
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative w-[360px] h-[360px] rounded-full overflow-hidden border-[5px] border-pink-500 shadow-[0_0_70px_#ec4899]"
            >
              <img
                src="/profile.png"
                alt="Jannah"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-3xl"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;