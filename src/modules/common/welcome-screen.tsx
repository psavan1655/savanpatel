import React from "react";

import { motion } from "framer-motion";

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
  const variants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  //   return (
  //     <div>
  //       {languages.map((lang) => (
  //         <motion.div
  //           key={lang.code}
  //           initial="initial"
  //           animate="animate"
  //           variants={variants}
  //           transition={{ duration: 1 }}
  //         >
  //           <h1 className="!text-white">&#x2022; {`${lang.greeting}`}</h1>
  //         </motion.div>
  //       ))}
  //     </div>
  //   );
  return (
    <>
      <div className="no-scroll-overlay"></div>
      <div className="loading-container">
        <div className="loading-screen">
          <div className="rounded-div-wrap top">
            <div className="rounded-div"></div>
          </div>
          <div className="loading-words">
            <h2 className="home-active home-active-first">
              Hello<div className="dot"></div>
            </h2>
            <h2 className="home-active">
              Bonjour<div className="dot"></div>
            </h2>
            <h2 className="home-active">
              स्वागत हे<div className="dot"></div>
            </h2>
            <h2 className="home-active">
              Ciao<div className="dot"></div>
            </h2>
            <h2 className="home-active">
              Olá<div className="dot"></div>
            </h2>
            <h2 className="home-active jap">
              おい<div className="dot"></div>
            </h2>
            <h2 className="home-active">
              Hallå<div className="dot"></div>
            </h2>
            <h2 className="home-active">
              Guten tag<div className="dot"></div>
            </h2>
            <h2 className="home-active-last">
              Hallo<div className="dot"></div>
            </h2>
            <h2 className="active">
              Home<div className="dot"></div>
            </h2>
            <h2>
              Work<div className="dot"></div>
            </h2>
            <h2>
              Aanstekelijk<div className="dot"></div>
            </h2>
            <h2>
              Base Create<div className="dot"></div>
            </h2>
            <h2>
              AVVR<div className="dot"></div>
            </h2>
            <h2>
              GraphicHunters<div className="dot"></div>
            </h2>
            <h2>
              Future Goals<div className="dot"></div>
            </h2>
            <h2>
              Atypikal<div className="dot"></div>
            </h2>
            <h2>
              MicDrop Agency<div className="dot"></div>
            </h2>
            <h2>
              Tapsody<div className="dot"></div>
            </h2>
            <h2>
              Emble Studio<div className="dot"></div>
            </h2>
            <h2>
              One:Nil<div className="dot"></div>
            </h2>
            <h2>
              Chainn<div className="dot"></div>
            </h2>
            <h2>
              Andy Hardy<div className="dot"></div>
            </h2>
            <h2>
              Sunlight<div className="dot"></div>
            </h2>
            <h2>
              About<div className="dot"></div>
            </h2>
            <h2>
              Contact<div className="dot"></div>
            </h2>
            <h2>
              Success<div className="dot"></div>
            </h2>
            <h2>
              Archive<div className="dot"></div>
            </h2>
            <h2>
              Error<div className="dot"></div>
            </h2>
            <h2>
              Styleguide<div className="dot"></div>
            </h2>
          </div>
          <div className="rounded-div-wrap bottom">
            <div className="rounded-div"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeScreen;
