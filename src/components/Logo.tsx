import * as React from "react";
import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
    >
      <defs>
        <path
          id="a"
          d="M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50 0 38.807 0 25 11.193 0 25 0z"
        />
        <clipPath id="b">
          <use xlinkHref="#a" />
        </clipPath>
        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
          <motion.stop
            stopColor="#2B00FF"
            animate={{
              stopColor: [
                "#0055FF",
                "#FFF9DA",
                "#E7FFF7",
                "#FFC6A8",
                "#FF7744",
                "#F3F2F2"
              ]
            }}
            transition={{
              yoyo: Infinity,
              ease: "linear",
              duration: 8
            }}
            offset="25%"
          />
          <motion.stop
            stopColor="#0055FF"
            animate={{
              stopColor: ["#0055FF", "#FFF9DA", "#FFC6A8", "#FF7744", "#2B00FF"]
            }}
            transition={{
              yoyo: Infinity,
              ease: "linear",
              duration: 8
            }}
            offset="50%"
          />
          <motion.stop
            stopColor="#D4504C"
            animate={{
              stopColor: ["#FFF9DA", "#E7FFF7", "#0055FF"]
            }}
            transition={{
              yoyo: Infinity,
              ease: "linear",
              duration: 8
            }}
            offset="75%"
          />
          <motion.stop
            stopColor="#FF7744"
            animate={{
              stopColor: ["#D4504C", "#2B00FF", "#E7FFF7", "#FFF9DA"]
            }}
            transition={{
              yoyo: Infinity,
              ease: "linear",
              duration: 8
            }}
            offset="100%"
          />
        </linearGradient>
      </defs>
      <use
        fill="transparent"
        stroke="url(#linear)"
        strokeWidth="4"
        clipPath="url(#b)"
        xlinkHref="#a"
      />
      <motion.path
        animate={{ rotate: 360 }}
        transition={{
          ease: "easeInOut",
          flip: Infinity,
          repeatDelay: 30,
          duration: 2
        }}
        d="M 31.579 15.263 L 31.579 21.842 L 25 21.842 L 18.421 15.263 Z M 18.421 21.842 L 25 21.842 L 31.579 28.421 L 25 28.421 L 25 35 L 18.421 28.421 Z"
      />
    </svg>
  );
};
