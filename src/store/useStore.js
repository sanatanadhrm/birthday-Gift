import { create } from "zustand";
import musics from "../assets/music/musics";

export const useStore = create((set) => ({
  musics: musics,
  currentMusic: musics[0],
  setCurrentMusic: (music) => set({ currentMusic: music }),
}));

export default useStore;
