import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./components/project-card";

const Projects = () => {
  return (
    <motion.div className="relative min-h-screen bg-white">
      <div className="mx-20">
        <span className="text-sm text-[#999d9e] mx-10">RECENT WORK</span>
        <div className="border-b-2 my-10" />

        <div className="flex flex-wrap">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
