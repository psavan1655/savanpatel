import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/styles.css";
import Footer from "@/modules/common/components/footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import ReactGA from "react-ga";

ReactGA.initialize("G-FJKK1D92ER");

export default function App({ Component, pageProps, router }: AppProps) {
  const [isProgressWarnVisible, setIsProgressWarnVisible] = useState(true);

  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.8, 1], ["300px", "30px"]);

  return (
    <main className="main" id="smooth-wrapper">
      <div id="smooth-content" className="main-content">
        {!loading && isProgressWarnVisible && (
          <div className="flex justify-between py-2 w-full bg-yellow-100 border-1 border-yellow-300 text-yellow-700 text-center">
            <div className="flex ">
              This website is a work in progress. If you have any queries, Reach
              out to me at:{" "}
              <a
                href="mailto: savan.gatesaniya@gmail.com"
                className="text-blue-500"
              >
                savan.gatesaniya@gmail.com
              </a>
            </div>
            <div
              className="flex flex-end mx-8 cursor-pointer text-black"
              onClick={() => setIsProgressWarnVisible(false)}
            >
              X
            </div>
          </div>
        )}
        <Component
          key={router.pathname}
          {...pageProps}
          loading={loading}
          setLoading={setLoading}
        />
        {!loading && (
          <motion.div
            className="h-[100px] w-full text-red text-4xl rounded-full bg-white rounded-div-illusion"
            style={{ height: x }}
          ></motion.div>
        )}
      </div>
      {!loading && <Footer />}
    </main>
  );
}
