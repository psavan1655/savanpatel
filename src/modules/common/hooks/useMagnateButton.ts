import { useRef } from "react";
import { useAnimation } from "framer-motion";

export const useMagnetButton = () => {
  const buttonRef = useRef<any>(null);
  const rotateDegree = "0.001deg";
  const controls = useAnimation();
  const textControls = useAnimation();

  const handleHover = (event: MouseEvent) => {
    const magnetButton: any = buttonRef.current;
    if (!magnetButton) return;
    const bounding = magnetButton.getBoundingClientRect();
    const magnetsStrength = 25;
    const magnetsStrengthText = 15;

    controls.start({
      x:
        ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
        magnetsStrength,
      y:
        ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
        magnetsStrength,
      transition: { type: "tween", duration: 0.1 },
      rotate: rotateDegree,
    });

    textControls.start({
      x:
        ((event.clientX - bounding.left) / magnetButton.offsetWidth - 0.5) *
        magnetsStrengthText,
      y:
        ((event.clientY - bounding.top) / magnetButton.offsetHeight - 0.5) *
        magnetsStrengthText,

      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.2,
      },

      rotate: rotateDegree,
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      x: 0,
      y: 0,
      transition: { type: "tween", duration: 0.1 },
    });

    textControls.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
        duration: 0.2,
      },
    });
  };

  return { controls, textControls, buttonRef, handleHover, handleHoverEnd };
};
