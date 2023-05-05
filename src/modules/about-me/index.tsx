import React, { useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useMagnetButton } from "../common/hooks/useMagnateButton";

const AboutMe = () => {
  const { controls, textControls, buttonRef, handleHover, handleHoverEnd } =
    useMagnetButton();

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "100%"]);

  return (
    <motion.div className="relative min-h-screen bg-white overflow-hidden">
      <motion.div
        className="flex absolute top-[20%] w-full text-[200px] text-black"
        key={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          ease: "easeOut",
          duration: 0.2,
        }}
        variants={{
          hidden: { y: "20%" },
          visible: { y: "0%" },
        }}
        style={{
          x: x,
        }}
      >
        <div className="flex items-center">
          <div className="typewriter">
            <div className="slide">
              <i></i>
            </div>
            <div className="paper"></div>
            <div className="keyboard"></div>
          </div>
        </div>
        <div className="whitespace-nowrap text-[#999d9e20]">ABOUT ME</div>
      </motion.div>
      <motion.div className="absolute top-[30%] left-[30%] text-black w-[600px] text-3xl text-justify">
        The combination of my passion for design, code & robustness positions me
        in a unique place in the Full Stack Web world.
      </motion.div>

      <motion.div
        className="absolute flex items-center justify-center h-[200px] w-[200px] rounded-full bg-black bottom-40 right-40 circle-liquid text-xl cursor-pointer"
        ref={buttonRef}
        onHoverStart={handleHover}
        onHoverEnd={handleHoverEnd}
        animate={controls}
        whileTap={{ scale: 0.8, type: "easeInOut" }}
      >
        <motion.span animate={textControls}>About me</motion.span>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
