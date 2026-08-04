import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            onFinish?.();
          }, 500);
          return 100;
        }
        return prev + 8;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                J
              </span>
            </motion.div>

            <p className="text-gray-300 text-lg mb-4">Loading Portfolio...</p>

            <div className="w-64 h-2 rounded-full overflow-hidden bg-white/10">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15 }}
                className="h-full rounded-full bg-gradient-to-r from-pink-500 to-cyan-400"
              />
            </div>

            <p className="text-gray-500 mt-4 text-sm">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
