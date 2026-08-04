import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <div className="absolute top-10 right-[-80px] w-[280px] h-[280px] bg-violet-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-10 left-[-90px] w-[300px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 uppercase tracking-[5px] text-sm mb-4">
            Education
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Academic
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 md:p-12 shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[3px] text-cyan-300 mb-3">
                Degree
              </p>
              <h3 className="text-3xl md:text-4xl font-black text-white">
                Bachelor&apos;s Degree
              </h3>
              <p className="text-xl text-gray-300 mt-3">
                Computer Science
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-sm uppercase tracking-[3px] text-violet-300 mb-3">
                Institution
              </p>
              <p className="text-lg font-semibold text-white">
                Culture &amp; Science City
              </p>
              <p className="text-gray-400 mt-2">2022 — 2026</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
