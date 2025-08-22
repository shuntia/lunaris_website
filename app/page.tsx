import { elianto, inter, montserrat } from "./fonts";
import React, { Suspense } from "react";
import { Subtitle } from "./subtitle";
import Image from "next/image";
import Content from "./components/Content";
import ScrollTop from "./components/ScrollTop";


export default function Home() {
  return (
    <Suspense>
      <ScrollTop />
      <Image
        src="/assets/starry_sky.jpg"
        alt="Background"
        className="object-cover"
        width={5456}
        height={3632}
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        priority
      />
      <div className="h-screen w-full bg-cover bg-center bg-fixed relative text-[#FFFEED]">
        <h1
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[1000%] ${elianto.className}`}
        >
          LUNARIS
        </h1>
        <Subtitle />

      </div>
      <Content className={`h-screen flex items-center justify-center ${montserrat.className} flex-col justify-start start-50 space-y-20 pt-30 px-50 text-center `}>
        <h1 className="text-3xl">
          Lunaris is the Free, Open Source video editor.
        </h1>
        <p className="text-xl leading-10">
          Lunaris is a lightweight, cross-platform video and audio editor designed for creators who love precision and speed. With modular tools, intuitive controls, and a sleek interface, Lunaris helps you craft projects efficiently without distractions—perfect for music videos, animations, and experimental media.
        </p>
        <p className="text-2xl pt-30 leading-10">Help us out on <a className="underline" href="https://github.com/shuntia/lunaris">GitHub</a>.</p>
      </Content>
    </Suspense>
  );
}

