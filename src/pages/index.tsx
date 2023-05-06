import { useEffect, useState } from "react";

import Header from "@/modules/common/components/header";
import PageHead from "@/modules/common/components/page-head";
import WelcomeScreen from "@/modules/common/components/welcome-screen";

import AboutMe from "@/modules/about-me";
import HeroSection from "@/modules/home/hero-section";

import Projects from "@/modules/work";
import { AnimatePresence, motion } from "framer-motion";

interface Home {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({ loading, setLoading }: Home) {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <motion.div className="bg-[#999d9e]">
        {loading ? (
          <AnimatePresence>
            <WelcomeScreen />
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <PageHead key="PageHead" />
            <Header key="header" />
            <HeroSection key="HeroSection" />
            <AboutMe key="AboutMe" />
            <Projects key="Projects" />
          </AnimatePresence>
        )}
      </motion.div>
    </>
  );
}
