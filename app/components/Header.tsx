"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { elianto, montserrat } from "../fonts";
import Link from "next/link";

export default function Header() {
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY === 0) {
        setVisible(false); // hide at very top
      } else if (currentY < lastScrollY.current) {
        setVisible(true); // scrolling up
      } else {
        setVisible(false); // scrolling down
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: "-5rem", opacity: 0 }} // h-20 = 5rem
      animate={{ y: visible ? 0 : "-5rem", opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 h-20 bg-[#0A0514] flex items-center px-6 z-50 shadow-md justify-center text-[#FFFEED]"
    >
      <Link href="/app/" className={`${elianto.className} text-4xl grow`}>
        LUNARIS
      </Link>
      <a href="https://github.com/shuntia/lunaris" className={`grow text-right ${montserrat.className} text-3xl`}>GitHub</a>
    </motion.header>
  );
}
