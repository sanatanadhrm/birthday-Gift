/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { AuroraBackground } from "./aurora-background";
import Header from "./header";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import "../css/infinite-moving-card.css";
import Gallery from "./gallery";
import LoveLetter from "./love-letter";
import MusicControl from "./music-control";
import Playlist from "./playlist";
import CardGift from "./card-gift";
export const HeroParallax = ({ products }) => {
  const firstRow = [...products.slice(0, 7)]; // Duplikasi untuk infinite loop
  const secondRow = [...products.slice(8, 15)];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 500]), // Lebih kecil di mobile
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -500]), // Lebih kecil di mobile
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-900, 0]),
    springConfig
  );

  return (
    <AuroraBackground>
      <div
        ref={ref}
        className="lg:h-[300vh] sm:h-[450vh] overflow-hidden w-screen antialiased relative flex flex-col self-auto [perspective:2000px] [transform-style:preserve-3d]"
      >
        <MusicControl />
        <Header />
        <Gallery />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
        >
          <InfiniteMovingCards items={firstRow} reverse="false" />
          <InfiniteMovingCards items={secondRow} reverse="true" />
          {/* <InfiniteMovingCards items={thirdRow} reverse="false" /> */}
        </motion.div>
        <Playlist />
        <LoveLetter />
      </div>
    </AuroraBackground>
  );
};

export default HeroParallax;
