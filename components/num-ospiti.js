import { useMemo } from "react";

const NumOspiti = ({
  className = "",
  ictwotoneBed,
  property1lolWidth,
  property1lolHeight,
  property1lolPosition,
  property1lolMargin,
  property1lolTop,
  property1lolLeft,
  numeroOspitiWidth,
  numeroOspitiLeft,
  numeroOspitiFontSize,
  ictwotoneBedIconWidth,
  ictwotoneBedIconRight,
}) => {
  const property1lolStyle = useMemo(() => {
    return {
      width: property1lolWidth,
      height: property1lolHeight,
      position: property1lolPosition,
      margin: property1lolMargin,
      top: property1lolTop,
      left: property1lolLeft,
    };
  }, [
    property1lolWidth,
    property1lolHeight,
    property1lolPosition,
    property1lolMargin,
    property1lolTop,
    property1lolLeft,
  ]);

  const numeroOspitiStyle = useMemo(() => {
    return {
      width: numeroOspitiWidth,
      left: numeroOspitiLeft,
      fontSize: numeroOspitiFontSize,
    };
  }, [numeroOspitiWidth, numeroOspitiLeft, numeroOspitiFontSize]);

  const ictwotoneBedIconStyle = useMemo(() => {
    return {
      width: ictwotoneBedIconWidth,
      right: ictwotoneBedIconRight,
    };
  }, [ictwotoneBedIconWidth, ictwotoneBedIconRight]);

  return (
    <div
      className={`w-[445px] max-w-full h-[71px] text-center text-17xl text-black font-montserrat ${className}`}
      style={property1lolStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-skyblue" />
      <div
        className="absolute h-[40.85%] w-[82.7%] top-[25.35%] left-[17.3%] font-semibold flex items-center justify-center"
        style={numeroOspitiStyle}
      >
        Numero ospiti
      </div>
      <img
        className="absolute h-full w-[15.28%] top-[0%] right-[81.35%] bottom-[0%] left-[3.37%] max-w-full overflow-hidden max-h-full"
        alt=""
        src={ictwotoneBed}
        style={ictwotoneBedIconStyle}
      />
    </div>
  );
};

NumOspiti.propTypes = {
  className: PropTypes.string,
  ictwotoneBed: PropTypes.string,

  /** Style props */
  property1lolWidth: PropTypes.any,
  property1lolHeight: PropTypes.any,
  property1lolPosition: PropTypes.any,
  property1lolMargin: PropTypes.any,
  property1lolTop: PropTypes.any,
  property1lolLeft: PropTypes.any,
  numeroOspitiWidth: PropTypes.any,
  numeroOspitiLeft: PropTypes.any,
  numeroOspitiFontSize: PropTypes.any,
  ictwotoneBedIconWidth: PropTypes.any,
  ictwotoneBedIconRight: PropTypes.any,
};

export default NumOspiti;
