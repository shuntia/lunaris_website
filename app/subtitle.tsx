"use client";

import { useEffect, useState } from "react";
import { inter } from "./fonts";
import { motion } from "framer-motion";

export function Subtitle() {
  const subtitle = "The video editor that makes you shine.";
  const letters = subtitle.split("");

  return <p
    className={`absolute left-1/2 transform -translate-x-1/2 top-[60%] text-3xl text-gray-300 ${inter.className}`}
  >
    {letters.map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </p>
}
