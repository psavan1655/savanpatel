import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
}

const ProjectCard = ({ title }: ProjectCardProps) => {
  const [isCursorEnabled, setIsCursorEnabled] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.offsetX - 50,
        y: event.offsetY - 50,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div
      key={title}
      className="w-[45%] mx-4 text-black my-16"
      onMouseEnter={() => setIsCursorEnabled(true)}
      onMouseLeave={() => setIsCursorEnabled(false)}
    >
      <div className="flex flex-col">
        <AnimatePresence>
          {isCursorEnabled && (
            <motion.div
              className="view-cursor"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              style={{ x: mousePosition.x, y: mousePosition.y }}
              key="cursor-project"
            >
              <div className="relative top-[40%] left-[40%] text-md text-white font-medium">
                View
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="w-full h-full overflow-hidden  bg-[#999d9e]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex relative border-2 aspect-square w-[100%]"
          >
            <Image
              src={"/assets/icons/portrait-cropped.JPG"}
              alt={"Project title"}
              fill
              className="flex object-contain overflow-hidden"
            />
          </motion.div>
        </motion.div>
        <div className="flex flex-col mt-8">
          <div className="text-lg md:text-3xl sm:text-2xl font-medium">
            {title}
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
