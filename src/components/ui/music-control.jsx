import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
// import musicFile from "../../assets/music/blue.m4a";
import { GlowingEffect } from "./glowing-effect";
import { useStore } from "../../store/useStore.js";

export const MusicControl = () => {
  const { currentMusic } = useStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const musicRef = useRef(null); // 🔥 Tambahkan useRef untuk posisi elemen

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
    console.log("MusicControl rendered", currentMusic);
  }, []);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentMusic.src; // 🔥 Ganti source audio
      audioRef.current.load(); // 🔄 Reload audio
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.log("Autoplay blocked:", error));
    }
  }, [currentMusic]); // 🔥 Efek ini dipanggil setiap kali lagu berubah

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .then(() => console.log("Music playing..."))
        .catch((error) => console.log("Autoplay blocked:", error));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const newTop = Math.max(16, window.scrollY + 16); // Menjaga posisi tetap relatif
      musicRef.current.style.top = `${newTop}px`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={musicRef}
      className="fixed top-4 right-4 z-50 flex items-center gap-4 bg-luxury-dark/80 p-3 rounded-full shadow-lg backdrop-blur-sm border border-luxury-accent/20"
    >
      <GlowingEffect
        spread={50}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={4}
      />
      <button
        onClick={toggleMusic}
        className="p-2 hover:bg-luxury-primary/20 rounded-full transition-colors text-luxury-secondary"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <button
        onClick={toggleMute}
        className="p-2 hover:bg-luxury-primary/20 rounded-full transition-colors text-luxury-secondary"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      <audio ref={audioRef} loop>
        <source src={currentMusic.src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicControl;
