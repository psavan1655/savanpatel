import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const techStackImages = [
  {
    title: "TypeScript",
    image: "/assets/tech-stack-icons/typescript.svg",
  },
  {
    title: "NodeJS",
    image: "/assets/tech-stack-icons/nodejs.svg",
  },
  {
    title: "Express JS",
    image: "/assets/tech-stack-icons/express.svg",
  },
  {
    title: "NestJS",
    image: "/assets/tech-stack-icons/nestjs.svg",
  },
  {
    title: "React",
    image: "/assets/tech-stack-icons/react.svg",
  },
  {
    title: "NextJS",
    image: "/assets/tech-stack-icons/next.svg",
  },
  {
    title: "PostgreSQL",
    image: "/assets/tech-stack-icons/postgresql.svg",
  },
  {
    title: "MongoDB",
    image: "/assets/tech-stack-icons/mongodb.svg",
  },
  {
    title: "Redis",
    image: "/assets/tech-stack-icons/redis.svg",
  },
  {
    title: "GraphQL",
    image: "/assets/tech-stack-icons/graphql.svg",
  },
  {
    title: "Prisma",
    image: "/assets/tech-stack-icons/prisma.svg",
  },
  {
    title: "Redux",
    image: "/assets/tech-stack-icons/redux.svg",
  },
  {
    title: "Material UI",
    image: "/assets/tech-stack-icons/mui.svg",
  },
  {
    title: "Tailwind CSS",
    image: "/assets/tech-stack-icons/tailwind-css.svg",
  },
  {
    title: "AWS",
    image: "/assets/tech-stack-icons/aws.svg",
  },
  {
    title: "Nginx",
    image: "/assets/tech-stack-icons/nginx.svg",
  },
];

const TechSkillWheel = () => {
  return (
    <div>
      {techStackImages.map((tech, index: number) => (
        <motion.div
          className="ferris-wheel-techs"
          key={index + 1}
          initial="initial"
          animate={["animate", "initialHide"]}
          variants={{
            initial: {
              opacity: 0,
            },
            initialHide: {
              opacity: 1,
              transition: {
                delay: index + 1,
              },
            },
            animate: {
              rotate: -360,
              transition: {
                duration: techStackImages.length,
                repeat: Infinity,
                delay: index + 1,
                ease: "linear",
              },
            },
          }}
        >
          <div className="flex">
            <Image
              src={tech.image}
              alt={tech.title}
              width={40}
              height={40}
              className="tech-icon"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechSkillWheel;
