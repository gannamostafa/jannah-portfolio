import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaAward,
  FaExternalLinkAlt,
  FaIdCard,
  FaExpand,
  FaTimes,
} from "react-icons/fa";

import { certificates } from "../../data/certificates";

const Certificates = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextSlide = () => {
    setActiveIndex(
      (prev) => (prev + 1) % certificates.length
    );
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + certificates.length) %
        certificates.length
    );
  };

  const currentCertificate =
    certificates[activeIndex];

  return (
    <section
      id="certificates"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >

      {/* Background Glows */}

      <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-amber-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-10 right-[-120px] w-[320px] h-[320px] bg-cyan-500/10 blur-[140px] rounded-full" />


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
          className="text-center mb-16"
        >

          <p className="text-amber-400 uppercase tracking-[5px] text-sm mb-4">
            Certifications & Credentials
          </p>

          <h2 className="text-4xl md:text-6xl font-black">

            Continuous

            <span className="block bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
              Learning
            </span>

          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-cyan-400 mx-auto mt-6 rounded-full" />

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8">
            A collection of professional training programs,
            certifications, challenges, and credentials that
            reflect my continuous learning journey and
            commitment to developing my technical skills.
          </p>

        </motion.div>


        {/* ================= NAVIGATION ================= */}

        <div className="flex items-center justify-center gap-4 mb-8">

          <button
            onClick={prevSlide}
            className="p-3 rounded-full border border-white/10 bg-white/[0.04] hover:border-amber-400/40 hover:text-amber-300 hover:scale-110 transition-all duration-300"
            aria-label="Previous credential"
          >
            <FaChevronLeft />
          </button>


          <div className="flex gap-2">

            {certificates.map((_, index) => (

              <button
                key={index}
                onClick={() =>
                  setActiveIndex(index)
                }
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-gradient-to-r from-amber-400 to-cyan-400"
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to credential ${
                  index + 1
                }`}
              />

            ))}

          </div>


          <button
            onClick={nextSlide}
            className="p-3 rounded-full border border-white/10 bg-white/[0.04] hover:border-cyan-400/40 hover:text-cyan-300 hover:scale-110 transition-all duration-300"
            aria-label="Next credential"
          >
            <FaChevronRight />
          </button>

        </div>


        {/* ================= CARD ================= */}

        <div className="relative min-h-[520px] flex items-center justify-center">

          <AnimatePresence mode="wait">

            <motion.article
              key={currentCertificate.id}

              initial={{
                opacity: 0,
                y: 24,
                scale: 0.96,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                y: -24,
                scale: 0.96,
              }}

              transition={{
                duration: 0.4,
              }}

              className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.3)] overflow-hidden"
            >

              <div className="grid md:grid-cols-[1.15fr_0.85fr]">


                {/* ================= LEFT SIDE ================= */}

                <div className="p-8 md:p-10">

                  {/* Type */}

                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500/10 text-amber-300 border border-amber-400/20 mb-6">

                    <FaAward />

                    <span className="text-sm font-semibold">
                      {currentCertificate.type}
                    </span>

                  </div>


                  {/* Title */}

                  <h3 className="text-3xl md:text-4xl font-black mb-3 leading-tight">

                    {currentCertificate.title}

                  </h3>


                  {/* Organization */}

                  <p className="text-cyan-300 font-semibold text-lg mb-3">

                    {currentCertificate.organization}

                  </p>


                  {/* Date */}

                  <p className="text-gray-500 text-sm mb-6">

                    {currentCertificate.issued}

                    {currentCertificate.expired && (
                      <>
                        {" "}
                        · Expired{" "}
                        {currentCertificate.expired}
                      </>
                    )}

                  </p>


                  {/* Description */}

                  <p className="text-gray-400 leading-8 mb-6">

                    {currentCertificate.description}

                  </p>


                  {/* Skills */}

                  {currentCertificate.skills && (

                    <div className="flex flex-wrap gap-2 mb-6">

                      {currentCertificate.skills.map(
                        (skill) => (

                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs hover:border-cyan-400/30 hover:text-cyan-300 transition-all duration-300"
                          >
                            {skill}
                          </span>

                        )
                      )}

                    </div>

                  )}


                  {/* Credential ID */}

                  {currentCertificate.credentialId && (

                    <div className="flex items-start gap-3 mb-6">

                      <FaIdCard className="text-cyan-400 mt-1" />

                      <div>

                        <p className="text-gray-500 text-xs uppercase tracking-wider">
                          Credential ID
                        </p>

                        <p className="text-gray-300 text-sm break-all mt-1">
                          {currentCertificate.credentialId}
                        </p>

                      </div>

                    </div>

                  )}


                  {/* Link */}

                  {currentCertificate.link && (

                    <a
                      href={currentCertificate.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 font-semibold hover:scale-105 transition-transform"
                    >

                      View Credential

                      <FaExternalLinkAlt
                        size={13}
                      />

                    </a>

                  )}

                </div>


                {/* ================= RIGHT SIDE ================= */}

                <div className="bg-gradient-to-br from-amber-400/20 via-cyan-500/10 to-transparent p-8 md:p-10 flex flex-col justify-center items-center gap-6">

                  {/* Certificate Image */}

                  {currentCertificate.image && (

                    <div className="relative w-full">

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative rounded-2xl overflow-hidden border-2 border-white/10 group cursor-zoom-in"
                        onClick={() =>
                          setSelectedImage(
                            currentCertificate.image
                          )
                        }
                      >

                        <img
                          src={
                            currentCertificate.image
                          }
                          alt={currentCertificate.title}
                          className="w-full h-auto object-contain bg-slate-950/50"
                          onError={(e) => {
                            e.currentTarget.src =
                              "/certificates/placeholder.png";
                          }}
                        />

                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">

                          <FaExpand className="text-white text-2xl" />

                        </div>

                      </motion.div>

                    </div>

                  )}


                  {/* Info Box */}

                  <div className="w-full rounded-3xl border border-white/10 bg-slate-950/50 p-6 text-center">

                    {/* Status */}

                    <p className="text-sm uppercase tracking-[3px] text-gray-400 mb-3">
                      Status
                    </p>

                    <p className="text-2xl font-bold text-white mb-8">
                      {currentCertificate.status}
                    </p>


                    {/* Issued */}

                    <p className="text-sm uppercase tracking-[3px] text-gray-400 mb-3">
                      Issued
                    </p>

                    <p className="text-2xl font-bold text-white mb-8">
                      {currentCertificate.year}
                    </p>


                    {/* Highlight */}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left">

                      <p className="text-gray-400 text-sm leading-7">

                        {currentCertificate.highlight}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.article>

          </AnimatePresence>

        </div>

      </div>


      {/* ================= LIGHTBOX ================= */}

      <AnimatePresence>

        {selectedImage && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out"
          >

            {/* Close Button */}

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition-all z-10"
            >

              <FaTimes />

            </button>


            {/* Image */}

            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={selectedImage}
              alt="Certificate preview"
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl cursor-default"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default Certificates;
