import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Art from "./components/Art";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import ScrollToTop from "./components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main className='w-full overflow-x-hidden'>
      <NavBar />
      <Hero />
      <Art />

      <ScrollToTop/>
    </main>
  );
};

export default App;
