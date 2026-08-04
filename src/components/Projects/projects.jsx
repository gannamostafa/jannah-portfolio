import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaTimes,
} from "react-icons/fa";

import { projects } from "../../data/projects";

const Projects = () => {
  const [activeImages, setActiveImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  const getActiveImage = (project) => {
    return activeImages[project.id] || 0;
  };

  const nextImage = (project) => {
    const currentIndex = getActiveImage(project);

    const nextIndex =
      (currentIndex + 1) % project.images.length;

    setActiveImages((prev) => ({
      ...prev,
      [project.id]: nextIndex,
    }));
  };

  const prevImage = (project) => {
    const currentIndex = getActiveImage(project);

    const previousIndex =
      (currentIndex - 1 + project.images.length) %
      project.images.length;

    setActiveImages((prev) => ({
      ...prev,
      [project.id]: previousIndex,
    }));
  };

  return (
    <section
      id="projects"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >
      {/* Background Glows */}

      <div className="absolute top-20 left-[-200px] w-[450px] h-[450px] bg-pink-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-20 right-[-200px] w-[450px] h-[450px] bg-purple-600/10 blur-[140px] rounded-full" />

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
            My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Featured{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full" />

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8">
            A collection of projects that showcase my journey
            across full-stack development, backend systems,
            modern frontend technologies, and interactive
            web applications.
          </p>
        </motion.div>


        {/* ================= PROJECTS ================= */}

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => {
            const activeIndex = getActiveImage(project);
            const currentImage = project.images[activeIndex];

            return (
              <motion.article
                key={project.id}

                initial={{
                  opacity: 0,
                  y: 60,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                viewport={{
                  once: true,
                  amount: 0.2,
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}

                whileHover={{
                  y: -8,
                }}

                className={`
                  group relative overflow-hidden
                  rounded-[2rem]
                  bg-white/[0.04]
                  backdrop-blur-xl
                  border border-white/10
                  hover:border-pink-500/40
                  transition-all duration-500
                  shadow-[0_20px_80px_rgba(0,0,0,0.25)]

                  ${project.featured
                    ? "md:col-span-2"
                    : ""
                  }
                `}
              >

                {/* ================= IMAGE ================= */}

                <div className="relative h-[350px] md:h-[420px] overflow-hidden bg-[#0a0f24]">

                  <AnimatePresence mode="wait">

                    <motion.img
                      key={currentImage}

                      src={currentImage}

                      alt={`${project.title} screenshot`}

                      initial={{
                        opacity: 0,
                        scale: 1.05,
                      }}

                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}

                      exit={{
                        opacity: 0,
                        scale: 0.98,
                      }}

                      transition={{
                        duration: 0.35,
                      }}

                      onClick={() =>
                        setSelectedImage(currentImage)
                      }

                      className="
                        absolute inset-0
                        w-full h-full
                        object-cover
                        cursor-zoom-in
                        transition-transform
                        duration-700
                        group-hover:scale-[1.03]
                      "
                    />

                  </AnimatePresence>


                  {/* Image Gradient */}

                  <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-[#050816]
                    via-transparent
                    to-transparent
                    pointer-events-none
                  " />


                  {/* Featured Badge */}

                  {project.featured && (
                    <div className="absolute top-6 left-6">
                      <span className="
                        px-4 py-2
                        rounded-full
                        bg-pink-500/90
                        backdrop-blur-xl
                        text-sm
                        font-semibold
                        shadow-lg
                      ">
                        Featured Project
                      </span>
                    </div>
                  )}


                  {/* Status Badge */}

                  <div className="absolute top-6 right-6">

                    <span
                      className={`
                        px-4 py-2
                        rounded-full
                        backdrop-blur-xl
                        text-xs
                        font-semibold
                        border

                        ${
                          project.status === "In Progress"
                            ? "bg-amber-500/20 text-amber-300 border-amber-400/30"
                            : "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                        }
                      `}
                    >
                      {project.status}
                    </span>

                  </div>


                  {/* Previous Button */}

                  {project.images.length > 1 && (
                    <button
                      onClick={() => prevImage(project)}
                      className="
                        absolute
                        left-5
                        top-1/2
                        -translate-y-1/2
                        w-11 h-11
                        rounded-full
                        bg-black/40
                        backdrop-blur-xl
                        border border-white/10
                        flex items-center justify-center
                        hover:bg-pink-500
                        transition-all
                        z-10
                      "
                    >
                      <FaChevronLeft />
                    </button>
                  )}


                  {/* Next Button */}

                  {project.images.length > 1 && (
                    <button
                      onClick={() => nextImage(project)}
                      className="
                        absolute
                        right-5
                        top-1/2
                        -translate-y-1/2
                        w-11 h-11
                        rounded-full
                        bg-black/40
                        backdrop-blur-xl
                        border border-white/10
                        flex items-center justify-center
                        hover:bg-pink-500
                        transition-all
                        z-10
                      "
                    >
                      <FaChevronRight />
                    </button>
                  )}


                  {/* Expand Button */}

                  <button
                    onClick={() =>
                      setSelectedImage(currentImage)
                    }
                    className="
                      absolute
                      bottom-5
                      right-5
                      w-11 h-11
                      rounded-full
                      bg-black/50
                      backdrop-blur-xl
                      border border-white/10
                      flex items-center justify-center
                      hover:bg-pink-500
                      transition-all
                      z-10
                    "
                  >
                    <FaExpand size={14} />
                  </button>

                </div>


                {/* ================= THUMBNAILS ================= */}

                {project.images.length > 1 && (

                  <div className="
                    flex gap-3
                    px-6 py-4
                    border-b border-white/10
                    overflow-x-auto
                    bg-black/10
                  ">

                    {project.images.map(
                      (image, imageIndex) => (

                        <button
                          key={image}

                          onClick={() =>
                            setActiveImages((prev) => ({
                              ...prev,
                              [project.id]: imageIndex,
                            }))
                          }

                          className={`
                            relative
                            flex-shrink-0
                            w-20
                            h-14
                            rounded-xl
                            overflow-hidden
                            border-2
                            transition-all

                            ${
                              imageIndex === activeIndex
                                ? "border-pink-500 scale-105 opacity-100"
                                : "border-transparent opacity-40 hover:opacity-100"
                            }
                          `}
                        >

                          <img
                            src={image}
                            alt={`${project.title} preview`}
                            className="
                              w-full
                              h-full
                              object-cover
                            "
                          />

                        </button>

                      )
                    )}

                  </div>

                )}


                {/* ================= CONTENT ================= */}

                <div className="p-8 md:p-10">

                  {/* Category */}

                  <p className="
                    text-pink-400
                    text-xs
                    uppercase
                    tracking-[4px]
                    mb-4
                  ">
                    {project.category}
                  </p>


                  {/* Title */}

                  <h3 className="
                    text-3xl
                    md:text-4xl
                    font-black
                    mb-3
                  ">
                    {project.title}
                  </h3>


                  {/* Meta */}

                  <div className="
                    flex
                    flex-wrap
                    gap-2
                    text-sm
                    text-gray-500
                    mb-6
                  ">

                    <span>
                      {project.date}
                    </span>

                    <span>•</span>

                    <span>
                      {project.type}
                    </span>

                  </div>


                  {/* Description */}

                  <p className="
                    text-gray-400
                    leading-8
                    mb-7
                  ">
                    {project.description}
                  </p>


                  {/* Role */}

                  <div className="
                    mb-7
                    p-4
                    rounded-2xl
                    bg-white/[0.03]
                    border border-white/10
                  ">

                    <p className="
                      text-xs
                      uppercase
                      tracking-[3px]
                      text-gray-500
                      mb-2
                    ">
                      My Role
                    </p>

                    <p className="
                      text-cyan-300
                      font-semibold
                    ">
                      {project.role}
                    </p>

                  </div>


                  {/* Associated */}

                  <p className="
                    text-sm
                    text-gray-500
                    mb-7
                  ">

                    Associated with:{" "}

                    <span className="text-gray-300">
                      {project.associatedWith}
                    </span>

                  </p>


                  {/* Technologies */}

                  <div className="
                    flex
                    flex-wrap
                    gap-2
                    mb-8
                  ">

                    {project.technologies.map(
                      (technology) => (

                        <span
                          key={technology}
                          className="
                            px-3
                            py-2
                            text-xs
                            rounded-xl
                            bg-white/[0.04]
                            border border-white/10
                            text-gray-300
                            hover:border-pink-500/40
                            hover:text-pink-300
                            transition-all
                          "
                        >
                          {technology}
                        </span>

                      )
                    )}

                  </div>


                  {/* GitHub ONLY */}

                  {project.githubUrl &&
                    project.githubUrl !== "PUT_YOUR_GITHUB_LINK_HERE" && (

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"

                        className="
                          inline-flex
                          items-center
                          gap-3
                          px-6
                          py-3
                          rounded-xl
                          border border-white/10
                          text-white
                          font-semibold
                          hover:bg-white
                          hover:text-[#050816]
                          transition-all
                        "
                      >

                        <FaGithub />

                        View Source on GitHub

                      </a>

                  )}

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>


      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            onClick={() =>
              setSelectedImage(null)
            }

            className="
              fixed
              inset-0
              z-[100]
              bg-black/95
              backdrop-blur-xl
              flex
              items-center
              justify-center
              p-6
              cursor-zoom-out
            "
          >

            {/* Close */}

            <button
              onClick={() =>
                setSelectedImage(null)
              }

              className="
                absolute
                top-6
                right-6
                w-12
                h-12
                rounded-full
                bg-white/10
                border border-white/10
                flex items-center justify-center
                hover:bg-pink-500
                transition-all
                z-10
              "
            >
              <FaTimes />
            </button>


            <motion.img
              initial={{
                scale: 0.8,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.8,
                opacity: 0,
              }}

              transition={{
                duration: 0.3,
              }}

              src={selectedImage}

              alt="Project preview"

              onClick={(e) =>
                e.stopPropagation()
              }

              className="
                max-w-full
                max-h-[90vh]
                object-contain
                rounded-2xl
                shadow-2xl
                cursor-default
              "
            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Projects;