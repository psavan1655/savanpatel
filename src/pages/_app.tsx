import "@/styles/globals.css";
import "@/styles/styles.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  );
}
