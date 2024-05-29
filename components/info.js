import { useMemo } from "react";

const Info = ({
  className = "",
  stevenUngermannART5UCf2MY,
  infoFlex,
  infoHeight,
  stevenUngermannART5UCf2MYLeft,
  andrewRuizFmzB9At9iQUnsplLeft,
}) => {
  const info2Style = useMemo(() => {
    return {
      flex: infoFlex,
      height: infoHeight,
    };
  }, [infoFlex, infoHeight]);

  const stevenUngermannART5UCf2MYYUIconStyle = useMemo(() => {
    return {
      left: stevenUngermannART5UCf2MYLeft,
    };
  }, [stevenUngermannART5UCf2MYLeft]);

  const andrewRuizFmzB9At9iQUnsplaIconStyle = useMemo(() => {
    return {
      left: andrewRuizFmzB9At9iQUnsplLeft,
    };
  }, [andrewRuizFmzB9At9iQUnsplLeft]);

  return (
    <section
      className={`self-stretch flex-1 bg-silver flex flex-col items-center justify-between z-[3] ${className}`}
      id="Info"
      style={info2Style}
    >
      <section className="self-stretch h-[26.313rem] flex flex-row items-center justify-between py-[0rem] px-[6.25rem] box-border relative text-left text-[3.75rem] text-gray-100 font-adamina lg:flex-row lg:gap-[0rem] lg:items-center lg:justify-center">
        <div className="self-stretch flex-1 flex flex-row items-center justify-end gap-[2.5rem] z-[0]">
          <img
            className="w-[2.188rem] relative max-w-full overflow-hidden h-[26.313rem]"
            alt=""
            src="/line-4.svg"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-center">
            <h2
              className="m-0 w-[42.313rem] relative text-inherit tracking-[0.02em] font-normal font-inherit inline-block"
              id="Title_section_1"
            >
              Extra lusso
            </h2>
            <p className="m-0 w-[32.413rem] relative text-[1.563rem] leading-[2.5rem] font-montserrat inline-block h-[18.75rem] shrink-0 [text-shadow:0.3px_0_0_#14274a,_0_0.3px_0_#14274a,_-0.3px_0_0_#14274a,_0_-0.3px_0_#14274a]">
              <span className="block">There she stood in the doorway</span>
              <span className="block">I heard the mission bell</span>
              <span className="block">And I was thinkin' to myself"</span>
              <span className="block">This could be heaven or this could</span>
              <span className="block">be hell"</span>
              <span className="block">Then she lit up a candle</span>
              <span className="block">And she showed me the way</span>
            </p>
          </div>
        </div>
        <img
          className="w-[49.438rem] absolute !m-[0] top-[calc(50%_-_210.5px)] left-[calc(50%_+_57px)] rounded-6xl h-[26.313rem] object-cover z-[1]"
          alt=""
          src={stevenUngermannART5UCf2MY}
          style={stevenUngermannART5UCf2MYYUIconStyle}
        />
      </section>
      <section className="self-stretch flex flex-row items-center justify-center py-[0rem] px-[6.25rem] relative text-left text-[3.75rem] text-gray-100 font-adamina lg:flex-row lg:gap-[0rem] lg:items-center lg:justify-center">
        <div className="self-stretch flex-1 flex flex-row items-center justify-end gap-[3.125rem] z-[0]">
          <img
            className="w-[2.188rem] relative max-w-full overflow-hidden h-[38.438rem]"
            alt=""
            src="/line-41.svg"
          />
          <div className="self-stretch flex-1 flex flex-col items-start justify-start">
            <h2
              className="m-0 w-[42.313rem] relative text-inherit tracking-[0.02em] font-normal font-inherit inline-block"
              id="Title_section_2"
            >
              <p className="m-0">Lascia le tue preoccupazioni</p>
              <p className="m-0">a casa</p>
            </h2>
            <p className="m-0 w-[32.413rem] relative text-[1.563rem] leading-[2.5rem] font-montserrat inline-block h-[18.75rem] shrink-0 [text-shadow:0.3px_0_0_#14274a,_0_0.3px_0_#14274a,_-0.3px_0_0_#14274a,_0_-0.3px_0_#14274a]">
              <span className="block">Last thing I remember</span>
              <span className="block">I was running for the door</span>
              <span className="block">I had to find the passage back</span>
              <span className="block">To the place I was before</span>
              <span className="block">"Relax, " said the night man</span>
              <span className="block">"We are programmed to receive</span>
              <span className="block">You can check out any time you like</span>
              <span className="block">But you can never leave!"</span>
            </p>
          </div>
        </div>
        <img
          className="w-[49.438rem] absolute !m-[0] top-[calc(50%_-_307px)] left-[calc(50%_+_60px)] rounded-6xl h-[38.438rem] object-cover z-[1]"
          alt=""
          src="/andrewruizfmzb9at9iqunsplash@2x.png"
          style={andrewRuizFmzB9At9iQUnsplaIconStyle}
        />
      </section>
      <section className="self-stretch flex flex-col items-center justify-center gap-[1.062rem] text-center text-[3.75rem] text-gray-100 font-montserrat">
        <h2
          className="m-0 self-stretch relative text-inherit font-normal font-adamina"
          id="Title_testimonials"
        >
          Testimonials
        </h2>
        <p className="m-0 self-stretch relative text-[1.875rem] [text-shadow:0.5px_0_0_#14274a,_0_0.5px_0_#14274a,_-0.5px_0_0_#14274a,_0_-0.5px_0_#14274a]">
          “Veramente una figata, super consigliato, anche la pizza è ottima”
        </p>
        <q className="self-stretch relative text-[1.563rem] [text-shadow:0.2px_0_0_#14274a,_0_0.2px_0_#14274a,_-0.2px_0_0_#14274a,_0_-0.2px_0_#14274a]">
          Un tizio a caso
        </q>
        <div className="w-[13.231rem] relative h-[5.25rem]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[41.33%] top-[calc(50%_-_42px)] right-[0%] left-[58.67%] h-[5.25rem]">
            <img
              className="absolute w-full top-[calc(50%_-_42px)] right-[0%] left-[0%] max-w-full overflow-hidden h-[5.25rem]"
              alt=""
              src="/rectangle-1072.svg"
            />
            <img
              className="absolute w-[25.14%] top-[calc(50%_-_16.8px)] right-[37.37%] left-[37.49%] max-w-full overflow-hidden h-[2.038rem] object-contain"
              alt=""
              src="/path-36.svg"
            />
          </button>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute w-[41.33%] top-[calc(50%_-_42px)] right-[58.67%] left-[0%] h-[5.25rem]">
            <img
              className="absolute w-full top-[calc(50%_-_42px)] right-[0%] left-[0%] max-w-full overflow-hidden h-[5.25rem] object-contain"
              alt=""
              src="/rectangle-1092.svg"
            />
            <img
              className="absolute w-[25.14%] top-[calc(50%_-_16.8px)] right-[37.6%] left-[37.26%] max-w-full overflow-hidden h-[2.038rem] object-contain"
              alt=""
              src="/path-361.svg"
            />
          </button>
        </div>
      </section>
    </section>
  );
};

Info.propTypes = {
  className: PropTypes.string,
  stevenUngermannART5UCf2MY: PropTypes.string,

  /** Style props */
  infoFlex: PropTypes.any,
  infoHeight: PropTypes.any,
  stevenUngermannART5UCf2MYLeft: PropTypes.any,
  andrewRuizFmzB9At9iQUnsplLeft: PropTypes.any,
};

export default Info;
