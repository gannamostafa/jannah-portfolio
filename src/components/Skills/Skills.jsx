import { motion } from "framer-motion";
import MarqueeLib from "react-fast-marquee";

import { skillCategories, marqueeSkills } from "../../data/skills";

const MarqueeComponent = MarqueeLib?.default ?? MarqueeLib;

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-20 right-[-150px] w-[400px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-20 left-[-150px] w-[400px] h-[400px] bg-pink-500/10 blur-[130px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-pink-400 uppercase tracking-[5px] text-sm mb-4">
            My Tech Stack
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full" />

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8">
            A collection of technologies and tools I use to build modern,
            scalable, and interactive web applications.
          </p>
        </motion.div>

        {/* ================= SKILL CATEGORIES ================= */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-pink-500/30 transition-all duration-500"
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

              <div className="relative">
                {/* Category Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => {
                    const IconComponent =
                      typeof skill.icon === "function" ? skill.icon : null;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -5, scale: 1.05 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300 cursor-default"
                      >
                        <span className="text-xl text-pink-400">
                          {IconComponent ? (
                            <IconComponent />
                          ) : (
                            <span className="text-sm font-semibold">
                              {skill.name?.charAt(0).toUpperCase() || "S"}
                            </span>
                          )}
                        </span>

                        <span className="text-sm font-medium text-gray-200">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= MOVING TECH BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <p className="text-center text-gray-500 uppercase tracking-[4px] text-xs mb-8">
            Technologies I Love Building With
          </p>

          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050816] to-transparent z-10 pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050816] to-transparent z-10 pointer-events-none" />

            {MarqueeComponent && typeof MarqueeComponent === "function" ? (
              <MarqueeComponent
                speed={45}
                gradient={false}
                pauseOnHover={true}
                direction="left"
              >
                {marqueeSkills.map((skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className="mx-4 px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300"
                  >
                    <span className="text-gray-300 font-medium whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                ))}
              </MarqueeComponent>
            ) : (
              <div className="flex flex-wrap justify-center gap-4">
                {marqueeSkills.map((skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className="px-6 py-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:border-pink-500/40 hover:bg-pink-500/10 transition-all duration-300"
                  >
                    <span className="text-gray-300 font-medium whitespace-nowrap">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;