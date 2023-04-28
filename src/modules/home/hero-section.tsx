import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import TechSkillWheel from "../common/tech-skill-wheel";
import Link from "next/link";
import Image from "next/image";
import LocationHanger from "./location-hanger";

const HeroSection = () => {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className="relative h-screen w-full overflow-x-hidden bg-[#999d9e]"
    >
      {[1, 2].map((num) => (
        <motion.div
          className="flex absolute bottom-0 w-full text-[200px]"
          key={num}
          initial={{ bottom: -50 }}
          animate={{ bottom: 0 }}
          transition={{ ease: "easeOut", duration: 0.5 }}
          style={{
            x: x,
          }}
        >
          <motion.div
            className="flex absolute bottom-0 w-full text-[200px]"
            key={1}
            initial="initial"
            animate={["animate", "initialHide"]}
            variants={{
              animate: {
                x: ["0%", "-100%"],
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear",
                  },
                  // delayChildren: 2,
                },
              },
            }}
          >
            <div className="whitespace-nowrap">
              Savan Patel&nbsp;&#8212;&nbsp;
            </div>
            <div className="whitespace-nowrap">
              Full Stack Developer&nbsp;&#8212;&nbsp;
            </div>
            <div className="whitespace-nowrap">MERN&nbsp;</div>
          </motion.div>
        </motion.div>
      ))}

      <LocationHanger />
      <TechSkillWheel />
    </motion.div>
  );
};

export default HeroSection;
