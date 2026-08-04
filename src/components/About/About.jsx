import { motion } from "framer-motion";
import {
  FaServer,
  FaReact,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaServer />,
      title: "Backend Focused",
      description:
        "Building scalable and reliable server-side applications with a strong focus on backend architecture and APIs.",
    },
    {
      icon: <FaDatabase />,
      title: "MEAN Stack",
      description:
        "Experienced in building full-stack applications using MongoDB, Express.js, Angular, and Node.js.",
    },
    {
      icon: <FaReact />,
      title: "React Development",
      description:
        "Creating modern and interactive user interfaces using React.js with reusable and maintainable components.",
    },
    {
      icon: <FaCode />,
      title: "Clean Code",
      description:
        "Passionate about writing clean, organized, maintainable code and continuously improving my development skills.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-[-150px] w-[350px] h-[350px] bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-[-150px] w-[400px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full" />

      {/* Container */}

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-pink-400 uppercase tracking-[5px] text-sm mb-4">
            Get To Know Me
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            About{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT - About Text */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="relative p-8 md:p-10 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-2xl">

              {/* Decorative Glow */}

              <div className="absolute top-0 left-10 w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />

              <h3 className="text-3xl font-bold mb-6">
                Hi, I'm{" "}
                <span className="text-pink-400">
                  Jannah
                </span>{" "}
                👋
              </h3>

              <p className="text-gray-300 leading-8 text-lg mb-6">
                I'm a Full-Stack Developer with a strong focus on Backend
                Development and a specialization in the MEAN Stack.
              </p>

              <p className="text-gray-400 leading-8 mb-6">
                I enjoy designing and developing modern web applications,
                building RESTful APIs, working with databases, and creating
                scalable backend systems. I also have experience with React.js
                and enjoy turning ideas into interactive and user-friendly
                digital experiences.
              </p>

              <p className="text-gray-400 leading-8">
                I'm always eager to learn new technologies, improve my
                problem-solving skills, and build projects that combine
                functionality, performance, and great user experience.
              </p>

            </div>

          </motion.div>

          {/* RIGHT - Feature Cards */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-5"
          >

            {features.map((feature, index) => (

              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group p-6 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-pink-500/40 transition-all duration-300"
              >

                {/* Icon */}

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-pink-400 bg-pink-500/10 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">

                  {feature.icon}

                </div>

                {/* Title */}

                <h4 className="text-xl font-bold mt-5 mb-3">
                  {feature.title}
                </h4>

                {/* Description */}

                <p className="text-gray-400 text-sm leading-7">
                  {feature.description}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default About;