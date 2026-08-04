import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import navLinks from "../../data/navLinks";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: .8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scroll
          ? "backdrop-blur-xl bg-[#0f172acc]/70 shadow-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">

        {/* Logo */}
<motion.a
whileHover={{ scale:1.08 }}
href="#"
className="text-3xl font-black cursor-pointer"
>

<span className="bg-gradient-to-r from-pink-500 via-purple-400 to-pink-300 bg-clip-text text-transparent">

Jannah

</span>

</motion.a>

        {/* Desktop */}

        <ul className="hidden lg:flex items-center gap-10">

          {navLinks.map((link) => (

            <li key={link.id}>

              <Link
to={link.path.replace("#","")}
spy={true}
smooth={true}
offset={-90}
duration={500}
onSetActive={()=>setActive(link.title)}
className="cursor-pointer"
>

<div className="relative group">

<p
className={`duration-300 font-medium ${
active===link.title
? "text-pink-400"
:"text-gray-300 hover:text-white"
}`}
>

{link.title}

</p>

<motion.span

layoutId="active"

className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500

${active===link.title?"w-full":"w-0 group-hover:w-full"}

duration-300`}

/>

</div>

</Link>
            </li>

          ))}

        </ul>

        {/* Resume */}

        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: .95 }}
          href="/resume.pdf"
          className="hidden lg:block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg"
        >
          Resume
        </motion.a>

        {/* Mobile */}

        <button
          className="lg:hidden text-white text-4xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{ opacity:0,y:-20 }}

            animate={{ opacity:1,y:0 }}

            exit={{ opacity:0,y:-20 }}

            className="lg:hidden backdrop-blur-2xl bg-[#10131dcc] border-t border-white/10"

          >

            <ul className="flex flex-col items-center py-8 gap-8">

              {navLinks.map((link)=>(

                <li key={link.id}>

                  <Link
to={link.path.replace("#","")}
spy={true}
smooth={true}
offset={-90}
duration={500}
onSetActive={()=>setActive(link.title)}
className="cursor-pointer"
>

<div className="relative group">

<p
className={`duration-300 font-medium ${
active===link.title
? "text-pink-400"
:"text-gray-300 hover:text-white"
}`}
>

{link.title}

</p>

<motion.span

layoutId="active"

className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500

${active===link.title?"w-full":"w-0 group-hover:w-full"}

duration-300`}

/>

</div>

</Link>
                </li>

              ))}

              <motion.a

whileHover={{
scale:1.05,
boxShadow:"0px 0px 30px rgb(236 72 153)"
}}

whileTap={{scale:.95}}

href="/resume.pdf"

download

className="hidden lg:flex items-center gap-2

px-6 py-3 rounded-full

font-semibold

bg-gradient-to-r

from-pink-500

to-purple-600

text-white"

>

<FiDownload/>

Resume

</motion.a>
            </ul>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;