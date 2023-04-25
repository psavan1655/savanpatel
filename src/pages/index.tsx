import Image from "next/image";
import { Inter } from "next/font/google";
import WelcomeScreen from "@/modules/common/welcome-screen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="no-scroll-overlay"></div>
      <WelcomeScreen />
    </main>
  );
}
