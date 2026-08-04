import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[70] w-full h-1 bg-white/10">
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
