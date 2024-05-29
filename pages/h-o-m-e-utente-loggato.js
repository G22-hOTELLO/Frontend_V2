import { useEffect } from "react";
import HomeScreen1 from "../components/home-screen1";
import Info from "../components/info";
import Footer from "../components/footer";

const HOMEUtenteLoggato = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[4.062rem] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
      data-animate-on-scroll
    >
      <img
        className="w-[123.75rem] absolute !m-[0] top-[calc(50%_-_462.5px)] left-[calc(50%_-_979px)] h-[115.688rem] z-[0]"
        alt=""
        src="/onde1.svg"
      />
      <HomeScreen1 />
      <div className="w-[73.563rem] relative h-[9.25rem] z-[2]" />
      <Info
        stevenUngermannART5UCf2MY="/stevenungermannart5ucf2myyunsplash1@2x.png"
        infoFlex="unset"
        infoHeight="89.063rem"
        stevenUngermannART5UCf2MYLeft="calc(50% + 89px)"
        andrewRuizFmzB9At9iQUnsplLeft="calc(50% + 96px)"
      />
      <Footer
        hotelCalifornia="/hotel-california@2x.png"
        lOGO1="/logo-11@2x.png"
        propLeft="calc(50% - 0.5px)"
        propRight="0.875rem"
        propRight1="3.188rem"
        propLeft1="2.125rem"
      />
    </div>
  );
};

export default HOMEUtenteLoggato;
