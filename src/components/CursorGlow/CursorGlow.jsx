import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringInteractive, setHoveringInteractive] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerOver = (e) => {
      const target = e.target;
      const interactive =
        target instanceof HTMLElement &&
        (target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA");
      setHoveringInteractive(interactive);
    };

    const handlePointerLeave = () => {
      setHoveringInteractive(false);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handlePointerOver);
    window.addEventListener("mouseout", handlePointerLeave);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handlePointerOver);
      window.removeEventListener("mouseout", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[60] hidden lg:block rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-transform duration-75"
        style={{
          width: hoveringInteractive ? 54 : 32,
          height: hoveringInteractive ? 54 : 32,
          transform: `translate(${position.x - (hoveringInteractive ? 27 : 16)}px, ${position.y - (hoveringInteractive ? 27 : 16)}px)`,
          left: 0,
          top: 0,
          boxShadow: "0 0 90px rgba(236, 72, 153, 0.28)",
        }}
      />
    </>
  );
};

export default CursorGlow;
