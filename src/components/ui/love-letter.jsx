/* eslint-disable no-unused-vars */
import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import CardGift from "./card-gift";

export const LoveLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animasi hanya berjalan sekali saat terlihat
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="pt-8 px-4 min-h-screen pb-20"
      style={{
        overflow: "hidden",
      }}
    >
      <motion.div
        className="max-w-3xl mx-auto bg-luxury-dark/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-luxury-accent/20 mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-luxury-accent mb-8 text-center [text-shadow:_2px_2px_4px_rgb(0_0_0_/_30%)]">
          My Love Letter to You
        </h2>
        {isVisible && (
          <TypeAnimation
            sequence={[
              `My dearest love,

              Today is such a special day—the day the world became brighter because you were born. Every single day, I am grateful for you, for your love, your kindness, and the warmth you bring into my life.

              On your birthday, I want you to know just how much you mean to me. I wish for all your dreams to come true, for your heart to always be filled with happiness, and for us to share a lifetime of beautiful moments together.

              Happy Birthday, my love. May this day and every day ahead be filled with endless love—the same love you so effortlessly give to me. I love you today, tomorrow, and always.

              Forever yours,
              ❤️`,
            ]}
            wrapper="pre"
            speed={50}
            className="text-lg text-luxury-secondary whitespace-pre-line"
          />
        )}
      </motion.div>
      <CardGift />
    </section>
  );
};

export default LoveLetter;
