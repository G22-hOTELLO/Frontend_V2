import { useEffect } from "react";
import HomeScreen from "../components/home-screen";
import Info from "../components/info";
import Footer from "../components/footer";

const HOMEUtenteAnonimo = () => {
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
    <header
      className="w-full h-[192.813rem] relative bg-white overflow-hidden flex flex-col items-center justify-start gap-[4.062rem] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
      data-animate-on-scroll
    >
      <img
        className="w-[120rem] absolute !m-[0] top-[calc(50%_-_462.5px)] left-[calc(50%_-_960px)] h-[118.875rem] z-[0]"
        alt=""
        src="/onde.svg"
      />
      <HomeScreen />
      <div className="w-[73.563rem] relative h-[9.25rem] z-[2]" />
      <Info stevenUngermannART5UCf2MY="/stevenungermannart5ucf2myyunsplash@2x.png" />
      <Footer
        hotelCalifornia="/hotel-california@2x.png"
        lOGO1="/logo-11@2x.png"
        propLeft="calc(50% - 0.5px)"
        propRight="1.375rem"
        propRight1="3.188rem"
        propLeft1="2.875rem"
      />
    </header>
  );
};

export default HOMEUtenteAnonimo;
