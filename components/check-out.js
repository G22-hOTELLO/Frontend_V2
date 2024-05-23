import { useMemo } from "react";

const CheckOut = ({
  className = "",
  property1Variant2Width,
  property1Variant2Position,
  property1Variant2Margin,
  property1Variant2Top,
  property1Variant2Left,
}) => {
  const property1Variant2Style = useMemo(() => {
    return {
      width: property1Variant2Width,
      position: property1Variant2Position,
      margin: property1Variant2Margin,
      top: property1Variant2Top,
      left: property1Variant2Left,
    };
  }, [
    property1Variant2Width,
    property1Variant2Position,
    property1Variant2Margin,
    property1Variant2Top,
    property1Variant2Left,
  ]);

  return (
    <div
      className={`w-[323px] text-left text-17xl text-black font-montserrat ${className}`}
      style={property1Variant2Style}
    >
      <div className="absolute top-[calc(50%_-_35.5px)] left-[calc(50%_-_161.5px)] rounded-xl bg-skyblue w-[330px] h-[71px]" />
      <div className="absolute top-[18px] left-[105px] font-semibold flex items-center w-[225px] h-[29px]">
        Check-
      </div>
      <img
        className="absolute top-[0px] left-[19px] w-[65px] h-[65px] overflow-hidden"
        alt=""
        src="/mdicalendaroutline.svg"
      />
    </div>
  );
};

CheckOut.propTypes = {
  className: PropTypes.string,

  /** Style props */
  property1Variant2Width: PropTypes.any,
  property1Variant2Position: PropTypes.any,
  property1Variant2Margin: PropTypes.any,
  property1Variant2Top: PropTypes.any,
  property1Variant2Left: PropTypes.any,
};

export default CheckOut;
