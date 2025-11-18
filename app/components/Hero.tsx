"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { elianto, inter } from "../fonts";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20 });
  const springY = useSpring(y, { stiffness: 80, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(relativeX * 40); // limit transform to keep motion subtle
    y.set(relativeY * 40);
  };

  const resetParallax = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetParallax}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#03030A] px-6 pb-32 pt-32 text-center text-[#FFFEED]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{ x: springX, y: springY }}
      >
        <Image
          src="/assets/starry_sky.jpg"
          alt="Starry night sky background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
      </motion.div>
      <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8">
        <p className={`${elianto.className} text-4xl sm:text-5xl tracking-[0.5em] text-white/90`}>
          LUNARIS
        </p>
        <p className={`${inter.className} text-sm uppercase tracking-[0.3em] text-indigo-300`}>
          v0.1 pre-release
        </p>
        <h1 className={`text-4xl sm:text-6xl md:text-7xl font-bold leading-tight ${elianto.className}`}>
          Minimal core, infinite possibilities
        </h1>
        <p className={`${inter.className} text-lg sm:text-xl text-indigo-100`}>
          Lunaris is a multimedia engine with a microkernel plugin architecture.
          Build a video editor, DAW, animation suite, or something entirely new by composing plugins.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://github.com/shuntia/lunaris/releases"
            className="rounded-full bg-indigo-500 px-8 py-3 text-base font-semibold text-white transition hover:bg-indigo-400"
          >
            Download v0.1
          </a>
          <a
            href="https://github.com/shuntia/lunaris#architecture"
            className="rounded-full border border-indigo-200/70 px-8 py-3 text-base font-semibold text-indigo-100 transition hover:border-white hover:text-white"
          >
            Read Architecture
          </a>
          <a
            href="https://github.com/shuntia/lunaris/tree/main/plugins"
            className="rounded-full border border-indigo-200/70 px-8 py-3 text-base font-semibold text-indigo-100 transition hover:border-white hover:text-white"
          >
            Write a Plugin
          </a>
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">
          Free · Open Source · Built in Rust · Windows · macOS · Linux
        </p>
      </div>
    </section>
  );
}
