"use client";
import React from "react";
import { motion } from "framer-motion";
import { disperse } from "./anim";
import { useState } from "react";
export default function page({ children }) {
  const [isActive, setIsActive] = useState(false);
  const getChars = (element) => {
    let chars = [];

    const word = element.props.children;

    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          variants={disperse}
          custom={i}
          animate={isActive ? "open" : "close"}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  const manageMouseEnter = () => {
    setIsActive(true);
  };

  const manageMouseLeave = () => {
    setIsActive(false);
  };

  return (
    <div
      onMouseEnter={() => {
        manageMouseEnter();
      }}
      onMouseLeave={() => {
        manageMouseLeave();
      }}
      className="introLine"
    >
      {getChars(children)}
    </div>
  );
}
