import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMe = () => {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <div className="min-h-screen bg-white">
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
          <div className="whitespace-nowrap">
            Savan Patel&nbsp;&#8212;&nbsp;
          </div>
          <div className="whitespace-nowrap">
            Full Stack Developer&nbsp;&#8212;&nbsp;
          </div>
          <div className="whitespace-nowrap">MERN&nbsp;</div>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutMe;
