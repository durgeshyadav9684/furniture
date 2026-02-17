"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  y?: number; // Starting y position
}

export const Reveal = ({
  children,
  width = "100%", // default to 100% to fill container
  className = "",
  delay = 0.25,
  duration = 0.5,
  y = 75,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const variants: Record<string, Variant> = {
    hidden: { opacity: 0, y: y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
