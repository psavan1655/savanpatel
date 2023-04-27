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
    let timeFn = null;
    if (activeTitle <= languages.length) {
      timeFn = setInterval(() => {
        setActiveTitle((prevActiveTitle) => prevActiveTitle + 1);
        console.log(activeTitle);

        if (activeTitle === languages.length - 1) {
          clearInterval(timeFn!);
        }
      }, 400);
    }
    return () => clearInterval(timeFn!);
  }, [activeTitle]);

  return (
    <div className={`w-full h-screen  ${styles.loadingTitle}`}>
      {languages.map((lang, idx) => {
        if (activeTitle === idx) {
          return (
            <motion.div
              key={lang.code}
              // initial="initial"
              // animate="animate"
              variants={variants}
              transition={{ duration: 1 }}
            >
              <div className="!text-7xl">&#x2022; {`${lang.greeting}`}</div>
            </motion.div>
          );
        }
      })}
    </div>
  );
};

export default WelcomeScreen;
