"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const pictures = [
  "https://images.unsplash.com/photo-1518343265568-51eec52d40da?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1510987836583-e3fb9586c7b3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1503332132010-d1b77a049ddd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1505635552518-3448ff116af3?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1530090382228-7195e08d7a75?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const ScrollGallery = () => {
  return (
    <div>
      <TopSection />
      <ScrollGalleryComponent />
      <BottomSection />
    </div>
  );
};

const ScrollGalleryComponent = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-350%"]);
  return (
    <section
      ref={targetRef}
      className=" relative h-[300vh] bg-slate-900 border-y border-y-slate-700"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0.5">
          {pictures.map((pic, i) => (
            <img
              key={i}
              className=" h-screen object-cover w-full aspect-square"
              src={pic}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TopSection = () => {
  return (
    <div className=" bg-slate-950 text-slate-500 italic h-[70vh] w-full  flex items-center justify-center text-xs">
      Top Section
    </div>
  );
};

const BottomSection = () => {
  return (
    <div className=" bg-slate-950 text-slate-500 italic h-[70vh] w-full  flex items-center justify-center text-xs">
      Bottom Section
    </div>
  );
};

export default ScrollGallery;
