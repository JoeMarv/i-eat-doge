import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "document.body",
        start: "top -10",
        end: "top -200",
        scrub: true,
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
        "--nav-blur": "0px",
      },
      {
        backgroundColor: "#00000050",
        "--nav-blur": "20px",
        ease: "power1.inOut",
        duration: 0.3,
      }
    );
  }, []);

  const handleRedirect = (url) => {
    window.open(url, "_blank"); // opens in new tab
  };

  return (
    <nav className="fixed z-50 w-full flex flex-row justify-between align-center px-6 py-3 lg:px-16 lg:py-4">
      <div className="w-1/4 lg:w-1/14 h-auto" id="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className="m-0 flex flex-row justify-center gap-3 lg:gap-x-4" id="socials">
        <button className="h-auto w-auto" id="telegram-btn" onClick={() => handleRedirect("https://www.t.me/jotunn_eth")}>
          <img
            src="images/icons8-telegram-app-50.png"
            alt="telegram"
            className="w-8 h-8 lg:w-10 lg:h-10 dark:invert-100"
          />
        </button>

        <button className="h-auto w-auto" id="x-btn" onClick={() => handleRedirect("https://www.x.com/crypt0g1ant")}>
          <img
            src="images/icons8-x-50.png"
            alt="x"
            className="w-8 h-8 lg:w-10 lg:h-10 invert-100 dark:invert-0"
          />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
