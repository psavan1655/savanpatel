import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Footer = () => {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <footer className="flex flex-col min-h-[90vh] bg-[#1c1d20]">
      <motion.div className="absolute h-[50px] w-full bg-white"></motion.div>
      <div className="flex flex-col place-self-center my-44 w-[70%]">
        <div className="text-[90px]">
          Let&apos;s work
          <br /> togther
        </div>
        <div className="relative">
          <div className="w-full h-[1px] bg-[#ffffff20] my-24" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeOut",
              duration: 0.2,
            }}
            // variants={{
            //   hidden: { right: "20%" },
            //   visible: { right: "0%" },
            // }}
            style={{
              right: x,
            }}
            className="get-in-touch h-[170px] w-[170px] bg-[#455ced] rounded-full absolute right-0"
          >
            <div className="flex justify-center items-center h-full w-full">
              Get in touch
            </div>
          </motion.div>
        </div>
        <div>Mail, Number</div>
      </div>
      <div>Labels</div>
    </footer>
  );
};

export default Footer;
