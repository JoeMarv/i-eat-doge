import React from "react";
import { pagesInfo } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Art = () => {
  useGSAP(() => {
    gsap.utils.toArray("article").forEach((art) => {
      const artMove = gsap.timeline({
        scrollTrigger: {
          trigger: art,
          start: "top 95%",
          end: "top 60%",
        },
      });

      artMove.from(art, {
        opacity: 0,
        yPercent: 30,
        ease: "power1.inOut",
        duration: 0.5,
      });
    }),
      [];
  });

  const [activeImage, setActiveImage] = React.useState(null);

  return (
    <>
      <section
        id="arts"
        className="p-8 xl:p-16 uppercase bg-rings bg-no-repeat bg-position-[50vw_10vh] md:bg-position-[70vw_20vw] xl:bg-position-[80vw_20vw] overflow-hidden"
      >
        <h1 className="text-2xl md:text-3xl xl:text-4xl">artworks</h1>

        <div
          id="art-container"
          className="py-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 xl:gap-10 grid-flow-row"
        >
          {[...pagesInfo]
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(({ id, image, title }) => (
              <article key={id} className="flex flex-col relative">
                <div className="relative group">
                  <div className="opacity-50 absolute inset-0 size-full bg-noisy pointer-events-none"></div>

                  <img
                    src={`/images/${image}`}
                    alt={title}
                    className="rounded-md w-full h-80 md:h-60 xl:h-100 object-cover"
                  />

                  <div className="absolute inset-0 flex-center backdrop-brightness-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hidden xl:flex">
                    <button
                      className="uppercase text-xl border-b-2 border-accent py-2 cursor-pointer"
                      onClick={() => setActiveImage(`/images/${image}`)}
                    >
                      view artwork
                    </button>
                  </div>
                </div>

                <h1 className="text-2xl xl:text-3xl mt-4">{title}</h1>

                <button
                  className="uppercase text-xl md:text-lg border-b-2 md:border-b-3 border-accent mt-2 md:mt-1 w-fit xl:hidden cursor-pointer"
                  onClick={() => setActiveImage(`/images/${image}`)}
                >
                  view artwork
                </button>
              </article>
            ))}
        </div>
      </section>

      {activeImage && (
        <div
          className="
      fixed inset-0 bg-black/80 backdrop-blur-md
      flex-center
      z-50
    "
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-xl"
            alt="artwork"
          />
        </div>
      )}
    </>
  );
};

export default Art;
