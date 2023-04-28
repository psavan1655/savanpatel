import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const LocationHanger = () => {
  return (
    <motion.div
      className="absolute top-[35%]"
      initial={{ top: "45%" }}
      animate={{ top: "35%" }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <p className="absolute py-4 px-8">
        <span>Located </span>
        <span>in </span>
        <br />
        <span className="font-semibold flex justify-center">India</span>
      </p>
      <div className="h-[80px] w-[220px]">
        <svg
          viewBox="0 0 300 121"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Artboard"
              transform="translate(0.000000, -366.000000)"
              fill="#1C1D20"
            >
              <g
                id="Group"
                transform="translate(149.816828, 426.633657) rotate(90.000000) translate(-149.816828, -426.633657) translate(89.816828, 276.816828)"
              >
                <g
                  id="Hanger"
                  transform="translate(60.000000, 149.816828) rotate(-90.000000) translate(-60.000000, -149.816828) translate(-89.816828, 89.816828)"
                >
                  <path
                    d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <Image
        src={"/assets/icons/indian-flag.gif"}
        height={50}
        width={50}
        alt="India"
        className="absolute left-[150px] top-7"
      />
    </motion.div>
  );
};

export default LocationHanger;
