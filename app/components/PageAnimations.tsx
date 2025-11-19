"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PageAnimations() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-fade]"),
    );

    const animations = elements.map((element) =>
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 60 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        },
      ),
    );

    return () => {
      animations.forEach((animation) => {
        animation?.scrollTrigger?.kill();
        animation?.kill();
      });
    };
  }, []);

  return null;
}
