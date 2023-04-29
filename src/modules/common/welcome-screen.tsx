import React, { useEffect, useState } from "react";
import styles from "./welcome-screen.module.css";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

const languages = [
  { code: "en", name: "English", greeting: "Hello" },
  { code: "es", name: "Spanish", greeting: "Hola" },
  { code: "fr", name: "French", greeting: "Bonjour" },
  { code: "de", name: "German", greeting: "Hallo" },
  { code: "it", name: "Italian", greeting: "Ciao" },
  { code: "ja", name: "Japanese", greeting: "こんにちは" },
  { code: "ko", name: "Korean", greeting: "안녕하세요" },
  { code: "pt", name: "Portuguese", greeting: "Olá" },
  { code: "ru", name: "Russian", greeting: "Здравствуйте" },
  { code: "zh", name: "Chinese", greeting: "你好" },
];

const WelcomeScreen = () => {
  const router = useRouter();
  const [activeTitle, setActiveTitle] = useState(0);
  const variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    let timeFn: any = null;
    if (activeTitle <= languages.length) {
      timeFn = setInterval(() => {
        setActiveTitle((prevActiveTitle) => prevActiveTitle + 1);

        if (activeTitle === languages.length - 1) {
          clearInterval(timeFn!);
        }
      }, 100);
    }
    return () => clearInterval(timeFn!);
  }, [activeTitle]);

  return (
    <motion.div
      className={`h-screen cursor-wait`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: 1, y: "0%" }}
      transition={{ duration: 2 }}
    >
      {languages.map((lang, idx) => {
        if (activeTitle === idx) {
          return (
            <motion.div
              key={lang.code}
              // initial="initial"
              // animate="animate"
              variants={variants}
              transition={{ duration: 1 }}
              className={styles.loadingTitle}
            >
              <div className="!text-7xl">&#x2022; {`${lang.greeting}`}</div>
            </motion.div>
          );
        }
      })}
    </motion.div>
  );
};

export default WelcomeScreen;

// import { motion, useAnimation } from 'framer-motion';
// import { useEffect } from 'react';

// function WelcomeScreen() {
//   const controls = useAnimation();

//   useEffect(() => {
//     const initLoaderHome = async () => {
//       // Initial styles for the loader
//       controls.set({ y: '0%', opacity: 1 });

//       // Animate loader out of the viewport
//       await controls.start({
//         y: '-100%',
//         opacity: 0,
//         transition: { duration: 0.8, ease: 'power4.easeInOut' },
//       });

//       // Reset loader styles
//       controls.set({ y: '100%', opacity: 1 });

//       // Animate main content into view
//       await controls.start({
//         y: '0%',
//         transition: {
//           duration: 1.5,
//           ease: 'expo.easeOut',
//           delayChildren: 0.8,
//           staggerChildren: 0.07,
//         },
//       });
//     };

//     initLoaderHome();
//   }, [controls]);

//   return (
//     <motion.div className="loading-screen" animate={controls}>
//       <motion.div className="rounded-div-wrap top">
//         <motion.div className="rounded-div" />
//       </motion.div>

//       <motion.div className="loading-words">
//         <motion.h2 className="home-active home-active-first">
//           Hello<div className="dot" />
//         </motion.h2>

//         <motion.h2 className="home-active">
//           Bonjour<div className="dot" />
//         </motion.h2>

//         <motion.h2 className="home-active home-active-last" />
//       </motion.div>

//       <motion.div className="rounded-div-wrap bottom" layout />
//     </motion.div>
//   );
// }
