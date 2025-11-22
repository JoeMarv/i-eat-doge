import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 xl:bottom-12 right-6 xl:right-12 z-50 p-1.5 xl:p-3 rounded-lg xl:rounded-xl shadow-lg 
                     bg-black/10 dark:bg-white/10 backdrop-blur-sm transition-all duration-300"
        >
          <img src="/images/caret-up-outline.svg" alt="scroll to top" className="w-8 xl:w-10 h-8 xl:h-10 inset-0"/>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
