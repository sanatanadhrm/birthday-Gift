/* eslint-disable no-unused-vars */
import { ChevronDown, Music } from "lucide-react";
import musics from "../../assets/music/musics.js";
import { motion } from "framer-motion";
import { GlowingEffect } from "./glowing-effect.jsx";
import { useRef } from "react";
import useStore from "../../store/useStore.js";

export const Playlist = () => {
  const { setCurrentMusic } = useStore();
  return (
    <section className="w-screen min-h-[35vh] py-10 flex justify-center items-center  px-4 bg-luxury-dark/80 backdrop-blur-sm">
      <div className="w-full flex flex-col lg:flex-row mx-auto justify-evenly items-center ">
        {musics.map((song, index) => (
          <motion.button
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer lg:w-1/4 w-full bg-luxury-dark/80 backdrop-blur-sm p-4 rounded-lg shadow-md mb-4 flex items-center gap-4 
            hover:bg-luxury-accent/20 hover:shadow-lg transition-all duration-400"
            onClick={() => setCurrentMusic(song)}
          >
            <GlowingEffect
              spread={50}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <Music className="text-luxury-accent" />
            <div>
              <h3 className="font-semibold text-luxury-secondary">
                {song.title}
              </h3>
              <p className="text-sm text-luxury-secondary/70">{song.artist}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <ChevronDown
        className="absolute bottom-8 animate-bounce text-luxury-accent w-10 h-10 cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: "smooth",
          });
        }}
      />
    </section>
  );
};

export default Playlist;
