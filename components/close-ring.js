import { useMemo } from "react";

const CloseRing = ({
  className = "",
  vector112,
  vector113,
  propLeft,
  propWidth,
  propHeight,
  propWidth1,
  propHeight1,
  propRight,
  propBottom,
  propLeft1,
  propWidth2,
  propHeight2,
  propRight1,
  propBottom1,
  propLeft2,
  onClose,
}) => {
  const closeRingStyle = useMemo(() => {
    return {
      left: propLeft,
      width: propWidth,
      height: propHeight,
    };
  }, [propLeft, propWidth, propHeight]);

  const vectorIcon4Style = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight1,
      right: propRight,
      bottom: propBottom,
      left: propLeft1,
    };
  }, [propWidth1, propHeight1, propRight, propBottom, propLeft1]);

  const vectorIcon5Style = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight2,
      right: propRight1,
      bottom: propBottom1,
      left: propLeft2,
    };
  }, [propWidth2, propHeight2, propRight1, propBottom1, propLeft2]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[11px] px-3 bg-[transparent] absolute top-[43px] left-[864px] flex flex-col items-start justify-start gap-[10px] ${className}`}
      onClick={onClose}
      style={closeRingStyle}
    >
      <div className="w-[75.5px] relative rounded-[50%] box-border h-[68.8px] z-[0] border-[5px] border-solid border-darkslategray-200" />
      <img
        className="w-[24.97%] absolute !m-[0] h-[24.94%] top-[37.53%] right-[37.57%] bottom-[37.53%] left-[37.46%] max-w-full overflow-hidden max-h-full z-[1]"
        alt=""
        src={vector112}
        style={vectorIcon4Style}
      />
      <img
        className="w-[24.97%] absolute !m-[0] h-[24.94%] top-[37.53%] right-[37.57%] bottom-[37.53%] left-[37.46%] max-w-full overflow-hidden max-h-full object-contain z-[2]"
        alt=""
        src={vector113}
        style={vectorIcon5Style}
      />
    </button>
  );
};

CloseRing.propTypes = {
  className: PropTypes.string,
  vector112: PropTypes.string,
  vector113: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight1: PropTypes.any,
  propRight: PropTypes.any,
  propBottom: PropTypes.any,
  propLeft1: PropTypes.any,
  propWidth2: PropTypes.any,
  propHeight2: PropTypes.any,
  propRight1: PropTypes.any,
  propBottom1: PropTypes.any,
  propLeft2: PropTypes.any,

  /** Action props */
  onClose: PropTypes.func,
};

export default CloseRing;
