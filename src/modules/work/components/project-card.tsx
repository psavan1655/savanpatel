import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = () => {
  return (
    <div className="w-1/2 px-8 text-black my-16">
      <div className="flex flex-col overflow-hidden">
        <motion.div
          className="flex relative border-2 aspect-square h-full w-full bg-[#999d9e] overflow-y-hidden"
          //   whileHover={{ scale: 1.1 }}
        >
          <Image
            src={"/assets/tech-stack-icons/tailwind-css.svg"}
            alt={"Tailwind css"}
            fill
            className="absolute flex max-w-full max-h-full object-contain overflow-hidden"
          />
        </motion.div>
        <div className="flex flex-col mt-8">
          <div className="text-lg md:text-3xl sm:text-2xl font-medium">
            Title
          </div>
          <div className="border-b-2 my-6" />
          <div className="flex justify-between text-lg">
            <div>Full Stack MERN</div>
            <div>2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
