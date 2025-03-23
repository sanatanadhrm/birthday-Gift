/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
export const Header = () => {
  const [welcomeRef, welcomeInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
      <section
        ref={welcomeRef}
        className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={welcomeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold font-playfair text-[#C0C0C0] mb-8 drop-shadow-lg">
            Happy Birthday, My Love!
          </h1>
          <TypeAnimation
            sequence={[
              "To the most beautiful soul I know...",
              2000,
              "To my best love and soulmate...",
              2000,
              "To the love of my life...",
              2000,
            ]}
            wrapper="p"
            speed={40}
            className="text-xl md:text-2xl font-dancingscript mb-8 text-[#fff] drop-shadow-md"
            repeat={Infinity}
          />
        </motion.div>
        <ChevronDown
          className="absolute bottom-8 animate-bounce text-luxury-accent w-10 h-10 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        />
      </section>
    </motion.div>
  );
};
export default Header;
