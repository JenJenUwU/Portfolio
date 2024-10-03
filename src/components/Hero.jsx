import { motion } from "framer-motion";
import { styles } from "../styles";
import { IslandCanvas } from "./canvas";
import { HashLink } from "react-router-hash-link";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Jay"],
      typeSpeed: 200,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={"relative w-full h-screen mx-auto"}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className={"flex flex-col justify-center items-center mt-5"}>
          <div className={"w-5 h-5 rounded-full bg-secondary"}></div>
          <div className={"w-1 sm:h-80 h-40 blue-gradient"}></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className={"text-secondary"} ref={el}></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm an engineering student <br className="sm:block hidden" />
            who loves to craft and code.
          </p>
        </div>
      </div>
      <IslandCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <HashLink smooth to="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </HashLink>
      </div>
    </section>
  );
};

export default Hero;
