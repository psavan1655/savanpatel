import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/styles.css";
import Footer from "@/modules/common/components/footer";
import { motion } from "framer-motion";

export default function App({ Component, pageProps, router }: AppProps) {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.8, 1], ["300px", "30px"]);
  {
    console.log(x.get());
  }

  return (
    <main className="main" id="smooth-wrapper">
      <AnimatePresence>
        <div id="smooth-content" className="main-content">
          <Component key={router.pathname} {...pageProps} />
          <motion.div
            className="h-[100px] w-full text-red text-4xl rounded-full bg-white rounded-div-illusion"
            style={{ height: x }}
          ></motion.div>
        </div>
        <Footer />
      </AnimatePresence>
    </main>
  );
}
