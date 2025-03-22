import "./App.css";
import { HeroParallax } from "./components/ui/hero-paralax";
import images from "./assets/paralax_images.js";

function App() {
  const products = Object.keys(images).map((key) => ({
    key,
    thumbnail: images[key],
    title: images[key].split("/").pop().split(".")[0],
  }));

  return <HeroParallax products={products} />;
}

export default App;
