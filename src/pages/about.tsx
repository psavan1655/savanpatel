import HeaderLight from "@/modules/common/components/header-dark";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      <HeaderLight />
      <div className="bg-white text-black min-h-screen relative">
        <div className="flex justify-center mx-auto items-end w-[70%] h-[40vh] text-7xl">
          <div className="w-[70%] font-medium">
            Helping build digital experiences with <br />
            code and creativity
          </div>
        </div>
        <div className="relative">
          <div className="border-b-2 my-40 mx-auto w-[70%]" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.2,
            }}
            className="about-flag-ball get-in-touch h-[140px] w-[140px] bg-[#999d9e] rounded-full absolute right-52 top-20"
          >
            <span className="absolute flex justify-center items-center h-full w-full">
              <Image
                src={"/assets/icons/indian-flag.gif"}
                height={50}
                width={50}
                alt="India"
              />
            </span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
