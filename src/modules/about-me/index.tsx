import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const AboutMe = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["-50%", "10%"]);

  const buttonRef = useRef<any>(null);
  const [textPosition, setTextPosition] = useState({ x: 90, y: 85 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const mouseX = e.clientX - buttonRect.left;
      const mouseY = e.clientY - buttonRect.top;

      setTextPosition({ x: mouseX, y: mouseY });
    };

    const handleMouseLeave = () => {
      setTextPosition({ x: 90, y: 85 });
    };

    buttonRef.current.addEventListener("mousemove", handleMouseMove);

    buttonRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getYValues = (value: number) => {
    if (value < 30) {
      return 30;
    } else if (value > 170) {
      return 170;
    } else {
      return value;
    }
  };

  const getXValues = (value: number) => {
    if (value < 30) {
      return 30 - 20;
    } else if (value > 120) {
      return 120 - 30;
    } else {
      return value - 30;
    }
  };

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

      <div
        className="absolute flex items-center justify-center h-[200px] w-[200px] rounded-full bg-black bottom-40 right-40 circle-liquid text-xl cursor-pointer"
        ref={buttonRef}
      >
        <span
          style={{
            position: "absolute",
            top: `${getYValues(textPosition.y)}px`,
            left: `${getXValues(textPosition.x)}px`,
            transition: "all 0.5s ease-out",
          }}
        >
          About me
        </span>
      </div>
    </motion.div>
  );
};

export default AboutMe;
