import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success', 'error', null
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Initialize EmailJS with your public key
    // Go to https://www.emailjs.com/ to get your keys
    emailjs.init("6jVkjJR2348SFCBFO");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_im0i1l9", // Replace with your EmailJS Service ID
        "template_5umq9f8", // Replace with your EmailJS Template ID
        formRef.current
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
      setTimeout(() => setStatus(null), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-[#050816] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.15),_transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-pink-400 uppercase tracking-[5px] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black">
            Have a Project
            <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              in Mind?
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Let&apos;s Work Together 
            </h3>
            <p className="text-gray-400 leading-8 mb-6">
              I&apos;m always open to discussing new opportunities, ideas, and meaningful collaborations.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full border border-pink-400/20 bg-pink-500/10 text-pink-300 text-sm font-semibold">
                  Email Me
              </span>
              <span className="px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-semibold">
                Available for Opportunities
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/gannamostafa"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 hover:border-pink-400 hover:text-pink-300 transition-all"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ganna-mostafa-63405425b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                href="mailto:polandagacy@gmail.com"
                className="flex items-center gap-2 px-4 py-3 rounded-full border border-white/10 hover:border-purple-400 hover:text-purple-300 transition-all"
              >
                <FaEnvelope />
                Email
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-8 md:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.25)]">
            <h3 className="text-2xl font-bold mb-6">Let&apos;s Work Together </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none focus:border-pink-400 focus:bg-slate-950 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none focus:border-cyan-400 focus:bg-slate-950 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-white outline-none focus:border-purple-400 focus:bg-slate-950 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-3 font-semibold text-white transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message "}
              </button>
            </form>

            {/* Status Messages */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300"
                >
                  <FaCheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-3 p-4 rounded-2xl bg-red-500/20 border border-red-400/30 text-red-300"
                >
                  <FaExclamationCircle size={20} />
                  <span>Please fill in all fields and try again.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

