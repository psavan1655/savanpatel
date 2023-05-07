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
        <div className="relative w-[70%] mx-auto">
          <div className="border-b-2 my-40 mx-auto" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeInOut",
              duration: 0.2,
            }}
            className="about-flag-ball get-in-touch h-[140px] w-[140px] bg-[#999d9e] rounded-full absolute right-40 top-20"
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
        <div className="w-[80%] mx-auto">
          <div className="flex">
            <div className="flex flex-col w-[40%] p-4 px-8 text-justify">
              <div>
                With a wealth of experience as a senior full-stack developer, I
                partner with companies across the globe to provide tailored
                solutions that elevate their businesses to new heights. My
                unwavering commitment to quality and innovation drives me to
                continuously push the boundaries and deliver exceptional results
                that exceed expectations.
              </div>
              <div className="opacity-50 mt-4">
                Always exploring
                <span className="animate-dot">.</span>
                <span className="animate-dot">.</span>
                <span className="animate-dot">.</span>
              </div>
            </div>
            <div className="flex w-[60%] border-2 h-[600px]">Image</div>
          </div>
        </div>
        <div className="flex w-[80%] mx-auto mt-16 ">
          <div className="text-5xl">
            I can help you with
            <span className="animate-dot">.</span>
            <span className="animate-dot">.</span>
            <span className="animate-dot">.</span>
          </div>
        </div>
        <div className="flex justify-between w-[80%] mx-auto mt-16">
          <div className="flex w-[45%]">
            <div className="flex flex-col w-full">
              <div className="opacity-50 text-sm">01</div>
              <div className="border-b-2 my-4" />
              <div className="text-3xl mb-3 font-medium">
                Web Development (Full Stack)
              </div>
              <div className="text-justify">
                I offer customized MERN stack web development solutions for
                businesses worldwide, delivering quality and innovative products
                to exceed expectations and achieve their unique goals.
              </div>
            </div>
          </div>
          <div className="flex w-[45%]">
            <div className="flex flex-col w-full">
              <div className="opacity-50 text-sm">02</div>
              <div className="border-b-2 my-4" />
              <div className="text-3xl mb-3 font-medium">
                Empowering the Future of Web Development
              </div>
              <div className="text-justify">
                I offer web development workshops and talks for clients and
                college students, sharing expertise to enhance skills and
                empower teams to create innovative solutions in the rapidly
                evolving field of web development.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
