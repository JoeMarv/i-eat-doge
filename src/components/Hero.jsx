import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const niceSplit = SplitText.create("#nice", { type: "chars, words" });

    gsap.from(niceSplit.chars, {
      xPercent: -100,
      opacity: 0,
      duration: 0.9,
      ease: "power1.inOut",
      stagger: 0.027,
    });

    gsap.from(
      "#about",

      {
        opacity: 0,
        yPercent: 100,
        duration: 0.9,
        ease: "power1.inOut",
        delay: 0.75,
      }
    );
  }, []);

  return (
    <section
      className="relative gap-6 lg:gap-10 z-10 min-h-dvh w-full flex-center flex-col lg:flex-row-reverse text-primary px-6 lg:px-16 bg-rings bg-no-repeat bg-position-[40vw_40vh] lg:bg-position-[-20vw_15vw]"
      id="hero"
    >
      <div className="opacity-50 absolute inset-0 size-full bg-noisy pointer-events-none"></div>

      <div className=" flex-center">
        <img src="/images/pfp.jpeg" alt="pfp" className="max-w-4/5 lg:max-w-7xl rounded-sm lg:rounded-md" />
      </div>

      <div className="text-center lg:text-left">
        <div className="mt-4 mb-2 lg:mt-8 lg:mb-4">
          <h1 id="nice" className="text-4xl lg:text-6xl inline-block leading-tight">
            Nice to meet you! I'm{" "}
            <span className="border-b-4 border-accent">I Eat Doge&#8482;</span>.
          </h1>
        </div>

        <div className="my-0 mt-8 lg:my-16 text-secondary">
          <p id="about" className="leading-relaxed text-lg lg:text-2xl">
            I'm a graphic and NFT artist passionate about creating visually
            striking digital art and collectibles that connect with communities.
            Hit me up to take your project to the next level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
