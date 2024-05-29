import { useMemo } from "react";

const Order = ({
  className = "",
  rectangleDivPosition,
  rectangleDivHeight,
  rectangleDivWidth,
  rectangleDivTop,
  rectangleDivRight,
  rectangleDivBottom,
  rectangleDivLeft,
  rectangleDivBackgroundColor,
  rectangleDivBorder,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      position: rectangleDivPosition,
      height: rectangleDivHeight,
      width: rectangleDivWidth,
      top: rectangleDivTop,
      right: rectangleDivRight,
      bottom: rectangleDivBottom,
      left: rectangleDivLeft,
      backgroundColor: rectangleDivBackgroundColor,
      border: rectangleDivBorder,
    };
  }, [
    rectangleDivPosition,
    rectangleDivHeight,
    rectangleDivWidth,
    rectangleDivTop,
    rectangleDivRight,
    rectangleDivBottom,
    rectangleDivLeft,
    rectangleDivBackgroundColor,
    rectangleDivBorder,
  ]);

  return (
    <div
      className={`text-center text-13xl text-dimgray font-montserrat ${className}`}
    >
      <div
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gainsboro-100 box-border border-[1px] border-solid border-black"
        style={rectangleDivStyle}
      />
      <img
        className="absolute h-[46.44%] w-[9.14%] top-[26.78%] right-[80.98%] bottom-[26.78%] left-[9.88%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector31.svg"
      />
      <div className="absolute h-full w-[79.17%] top-[0%] left-[14.58%] font-semibold flex items-center justify-center">
        Consigliato
      </div>
    </div>
  );
};

Order.propTypes = {
  className: PropTypes.string,

  /** Style props */
  rectangleDivPosition: PropTypes.any,
  rectangleDivHeight: PropTypes.any,
  rectangleDivWidth: PropTypes.any,
  rectangleDivTop: PropTypes.any,
  rectangleDivRight: PropTypes.any,
  rectangleDivBottom: PropTypes.any,
  rectangleDivLeft: PropTypes.any,
  rectangleDivBackgroundColor: PropTypes.any,
  rectangleDivBorder: PropTypes.any,
};

export default Order;
