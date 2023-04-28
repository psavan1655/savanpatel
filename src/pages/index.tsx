import { Inter } from "next/font/google";
import WelcomeScreen from "@/modules/common/welcome-screen";
import { motion } from "framer-motion";
import React from "react";
import HeroSection from "@/modules/home/hero-section";
import Sample from "@/modules/common/sample";
import PageHead from "@/modules/common/page-head";

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <PageHead />
      <motion.div>
        {loading ? (
          <WelcomeScreen />
        ) : (
          <>
            <HeroSection />
            <Sample />
          </>
        )}
      </motion.div>
    </>
  );
}
