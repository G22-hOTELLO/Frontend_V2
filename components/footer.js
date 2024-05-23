import { useMemo } from "react";

const Footer = ({
  className = "",
  hotelCalifornia,
  lOGO1,
  propLeft,
  propRight,
  propRight1,
  propLeft1,
}) => {
  const lineDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const hotelCaliforniaIconStyle = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const vicoloDelloScandaloContainerStyle = useMemo(() => {
    return {
      right: propRight1,
    };
  }, [propRight1]);

  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <footer
      className={`self-stretch bg-gray-100 h-[14.813rem] flex flex-row items-center justify-center relative text-center text-[1rem] text-white font-montserrat ${className}`}
      id="footer"
    >
      <div
        className="w-[0.063rem] absolute !m-[0] top-[calc(50%_-_98.5px)] left-[calc(50%_-_0.5px)] box-border h-[12.5rem] z-[0] border-r-[1px] border-solid border-white"
        style={lineDivStyle}
      />
      <div className="flex-1 h-[14.813rem] flex flex-row items-center justify-center py-[0rem] pr-[0rem] pl-[3.125rem] box-border relative gap-[4.375rem] z-[1]">
        <div className="w-[20rem] absolute !m-[0] top-[37.55%] left-[2.375rem] inline-block [text-shadow:0.1px_0_0_#fff,_0_0.1px_0_#fff,_-0.1px_0_0_#fff,_0_-0.1px_0_#fff] z-[0]">
          <p className="m-0">9641 Sunset Blvd, Beverly Hills, CA 90210</p>
          <p className="m-0">+39 123 456 7890</p>
          <p className="m-0">hotelcalifornia@email.com</p>
        </div>
        <img
          className="w-[17.938rem] absolute !m-[0] h-[60.76%] top-[19.83%] right-[0.875rem] bottom-[19.41%] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src={hotelCalifornia}
          style={hotelCaliforniaIconStyle}
        />
      </div>
      <div className="flex-1 h-[15.938rem] flex flex-row items-center justify-between py-[0rem] pr-[3.125rem] pl-[0rem] box-border relative z-[2] text-left">
        <div
          className="w-[17.313rem] absolute !m-[0] top-[36.08%] right-[3.188rem] inline-block [text-shadow:0.1px_0_0_#fff,_0_0.1px_0_#fff,_-0.1px_0_0_#fff,_0_-0.1px_0_#fff] z-[0]"
          style={vicoloDelloScandaloContainerStyle}
        >
          <p className="m-0">666 Vicolo dello Scandalo, FI 50100</p>
          <p className="m-0">+39 987 654 3211</p>
          <p className="m-0">hotelcalifornia@email.com</p>
        </div>
        <div
          className="!m-[0] absolute top-[4.75rem] left-[2.125rem] flex flex-col items-start justify-center z-[1]"
          style={frameDivStyle}
        >
          <img
            className="w-[13.063rem] relative rounded-81xl h-[6.438rem] object-cover"
            alt=""
            src={lOGO1}
          />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  hotelCalifornia: PropTypes.string,
  lOGO1: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propRight: PropTypes.any,
  propRight1: PropTypes.any,
  propLeft1: PropTypes.any,
};

export default Footer;
