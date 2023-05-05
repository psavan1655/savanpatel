import React, { useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import ProjectCard from "./components/project-card";
import { useMagnetButton } from "../common/hooks/useMagnateButton";

const Projects = () => {
  const { controls, textControls, buttonRef, handleHover, handleHoverEnd } =
    useMagnetButton();

  return (
    <motion.div className="relative min-h-screen bg-white pb-8">
      <div className="mx-20">
        <span className="text-sm text-[#999d9e] mx-10">RECENT WORK</span>
        <div className="border-b-2 my-10" />

        <div className="flex flex-wrap">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>

        <div className="flex w-full justify-center">
          <motion.div
            className="absolute flex items-center justify-center w-fit px-8 py-4 rounded-full text-black circle-liquid-white text-xl cursor-pointer"
            ref={buttonRef}
            onHoverStart={handleHover}
            onHoverEnd={handleHoverEnd}
            animate={controls}
            whileTap={{ scale: 0.8, type: "easeInOut" }}
          >
            <motion.span animate={textControls}>view All</motion.span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
