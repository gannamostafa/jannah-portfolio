import { motion } from "framer-motion";
import { experience } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Glows */}

      <div className="absolute top-10 left-[-120px] w-[320px] h-[320px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-10 right-[-130px] w-[360px] h-[360px] bg-fuchsia-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm mb-4">
            My Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            My Learning &{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto mt-6 rounded-full" />

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8">
            A timeline of my professional training, academic experiences,
            challenges, and learning opportunities that shaped my journey
            as a Full-Stack Developer.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">

          {/* Timeline Line */}

          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">

            {experience.map((item, index) => (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="relative flex items-start"
              >

                {/* Timeline Dot */}

                <div className="absolute left-[13px] md:left-1/2 top-8 w-5 h-5 rounded-full border-4 border-[#050816] bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_30px_rgba(34,211,238,0.5)] md:-translate-x-1/2 z-10" />

                {/* Card */}

                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-14"
                      : "md:pl-14 md:ml-auto"
                  }`}
                >

                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    className="ml-10 md:ml-0 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)] hover:border-cyan-400/30 transition-all duration-500"
                  >

                    {/* Date + Type */}

                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">

                      <p className="text-cyan-400 text-sm uppercase tracking-[2px] font-medium">
                        {item.date}
                      </p>

                      <span className="px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-semibold">
                        {item.type}
                      </span>

                    </div>

                    {/* Title */}

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {item.title}
                    </h3>

                    {/* Organization */}

                    <p className="text-cyan-200 font-medium mb-2">
                      {item.subtitle}
                    </p>

                    {/* Location */}

                    {item.location && (
                      <p className="text-gray-500 text-sm mb-5">
                        📍 {item.location}
                      </p>
                    )}

                    {/* Description */}

                    <p className="text-gray-400 leading-7 mb-6">
                      {item.description}
                    </p>

                    {/* Highlights */}

                    {item.highlights && (
                      <div className="space-y-3 mb-6">

                        {item.highlights.map((highlight, highlightIndex) => (

                          <div
                            key={highlightIndex}
                            className="flex items-start gap-3"
                          >

                            <span className="text-cyan-400 mt-1">
                              ✦
                            </span>

                            <p className="text-gray-400 text-sm leading-6">
                              {highlight}
                            </p>

                          </div>

                        ))}

                      </div>
                    )}

                    {/* Skills */}

                    {item.skills && (
                      <div className="flex flex-wrap gap-2 pt-5 border-t border-white/10">

                        {item.skills.map((skill) => (

                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
                          >
                            {skill}
                          </span>

                        ))}

                      </div>
                    )}

                  </motion.div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;