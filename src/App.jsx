import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Art from "./components/Art";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = ({ pagesInfo }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // 1. Collect all images in the DOM
    const images = Array.from(document.images);

    if (images.length === 0) {
      setLoaded(true); // no images to wait for
      return;
    }

    // 2. Track when each image is loaded
    let loadedCount = 0;
    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setLoaded(true);
          }
        });
        img.addEventListener("error", () => {
          loadedCount++;
          if (loadedCount === images.length) {
            setLoaded(true);
          }
        });
      }
    });

    // If all images already loaded
    if (loadedCount === images.length) {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    // ----- NAVBAR BLUR -----
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.body,
          start: "top -10",
          end: "top -200",
          scrub: true,
        },
      })
      .fromTo(
        "nav",
        { backgroundColor: "transparent", "--nav-blur": "0px" },
        { backgroundColor: "#00000050", "--nav-blur": "20px", duration: 0.3 }
      );

    // ----- HERO TEXT ANIMATION -----
    const heroTitle = document.querySelector("#hero h1");
    if (heroTitle) {
      const split = new SplitText(heroTitle, { type: "words" });
      gsap.from(split.words, {
        opacity: 0,
        y: 50,
        stagger: 0.05,
        duration: 0.6,
        ease: "power2.out",
      });
    }

    // ----- ART SECTION ANIMATIONS -----
    gsap.utils.toArray("article").forEach((art) => {
      gsap.from(art, {
        scrollTrigger: {
          trigger: art,
          start: "top 95%",
          end: "top 60%",
        },
        opacity: 0,
        yPercent: 30,
        duration: 0.5,
        ease: "power1.inOut",
      });
    });
  }, [loaded]);

  if (!loaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <div className="opacity-50 absolute inset-0 size-full bg-noisy pointer-events-none"></div>
        <p className="text-xl font-bold animate-pulse text-primary">Loading...</p>
      </div>
    );
  }

  return (
    <main className="w-full overflow-x-hidden">
      <NavBar />
      <Hero />
      <Art />
    </main>
  );
};

export default App;
