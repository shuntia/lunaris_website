"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { elianto, inter } from "../fonts";

const PARALLAX_RANGE = 60;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundImageRef = useRef<HTMLImageElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const animateBackground = (x: number, y: number) => {
    const target = backgroundImageRef.current;
    if (!target) return;
    tweenRef.current?.kill();
    tweenRef.current = gsap.to(target, {
      x,
      y,
      duration: 0.4,
      ease: "none",
      overwrite: true,
    });
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const viewportCenterX = window.scrollX + window.innerWidth / 2;
      const viewportCenterY = window.scrollY + window.innerHeight / 2;
      const pointerX = event.clientX + window.scrollX;
      const pointerY = event.clientY + window.scrollY;

      const relativeX =
        (pointerX - viewportCenterX) / Math.max(window.innerWidth / 2, 1);
      const relativeY =
        (pointerY - viewportCenterY) / Math.max(window.innerHeight / 2, 1);
      if (process.env.NODE_ENV === "development") {
        console.debug(
          "[Hero Parallax]",
          JSON.stringify({
            pointerX,
            pointerY,
            viewportCenterX,
            viewportCenterY,
            relativeX,
            relativeY,
          }),
        );
      }
      animateBackground(
        -relativeX * PARALLAX_RANGE,
        -relativeY * PARALLAX_RANGE,
      );
    };

    const handlePointerLeave = () => {
      animateBackground(0, 0);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <Image
          ref={backgroundImageRef}
          src="/assets/starry_sky.jpg"
          alt="Starry night sky background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70 will-change-transform scale-125"
        />
      </div>

      <section
        ref={containerRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-32 pt-32 text-center text-[#FFFEED]"
      >
        <div className="relative z-10 flex max-w-5xl flex-col items-center gap-8">
          <h1
            className={`${elianto.className} text-5xl sm:text-7xl md:text-8xl tracking-[0.7em] text-white drop-shadow-lg`}
          >
            LUNARIS
          </h1>
          <p
            className={`${inter.className} text-sm uppercase tracking-[0.3em] text-indigo-300`}
          >
            v0.1 pre-release
          </p>
          <h2
            className={`text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white ${elianto.className}`}
          >
            Minimal core, infinite possibilities
          </h2>
          <p
            className={`${inter.className} text-lg sm:text-xl text-indigo-100`}
          >
            Lunaris is a multimedia engine with a microkernel plugin
            architecture. Build a video editor, DAW, animation suite, or
            something entirely new by composing plugins.
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
    </>
  );
}
