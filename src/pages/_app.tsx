import { useEffect, useLayoutEffect, useRef } from "react";

import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/styles.css";
import Footer from "@/modules/common/components/footer";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className="main" id="smooth-wrapper">
      <AnimatePresence>
        <div id="smooth-content" className="main-content">
          <Component key={router.pathname} {...pageProps} />
        </div>
        <Footer />
      </AnimatePresence>
    </main>
  );
}
