/* eslint-disable no-unused-vars */
import { cn } from "../../lib/utils.js";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../css/infinite-moving-card.css";
import { GlareCard } from "./glare-card.jsx";

export const InfiniteMovingCards = ({
  items,
  direction,
  speed,
  pauseOnHover = true,
  reverse,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  return (
    <div ref={containerRef} className={cn("slider")} reverse={reverse}>
      <div
        ref={scrollerRef}
        className={cn("list-card", "flex shrink-0 flex-nowrap gap-4 py-4")}
        style={{
          "--width": "200px",
          "--quantity": items.length,
          "--height": "250px",
        }}
      >
        {items.map((product, idx) => (
          <GlareCard
            className="relative flex flex-col items-center justify-center"
            idx={idx}
            product={product}
            key={idx}
          ></GlareCard>
        ))}
      </div>
    </div>
  );
};
