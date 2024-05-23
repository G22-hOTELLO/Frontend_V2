import { Input } from "@chakra-ui/react";
import CheckOut from "./check-out";
import NumOspiti from "./num-ospiti";
import PropTypes from "prop-types";

const Selezione = ({ className = "" }) => {
  return (
    <section
      className={`rounded-31xl bg-navy-200 flex flex-row items-center justify-center py-[2rem] px-[1.875rem] gap-[3.75rem] text-center text-[2.25rem] text-white font-montserrat ${className}`}
    >
      <div className="w-[20.688rem] h-[7.813rem] flex flex-col items-center justify-center p-[0.625rem] box-border relative gap-[0.625rem]">
        <div className="w-[10.313rem] absolute !m-[0] top-[0rem] left-[5.188rem] font-semibold inline-block z-[0]">
          Check-in
        </div>
        <CheckOut
          property1Variant2Width="20.688rem"
          property1Variant2Position="absolute"
          property1Variant2Margin="0 !important"
          property1Variant2Top="3.375rem"
          property1Variant2Left="0rem"
        />
      </div>
      <div className="w-[21.063rem] h-[7.813rem] flex flex-row items-center justify-center p-[0.625rem] box-border relative gap-[0.625rem]">
        <div className="w-[12.125rem] absolute !m-[0] top-[0rem] left-[4.469rem] font-semibold inline-block z-[0]">
          Check-out
        </div>
        <CheckOut
          property1Variant2Width="21.063rem"
          property1Variant2Position="absolute"
          property1Variant2Margin="0 !important"
          property1Variant2Top="3.375rem"
          property1Variant2Left="0rem"
        />
      </div>
      <div className="w-[21.875rem] h-[7.813rem] flex flex-row items-center justify-center p-[0.625rem] box-border relative gap-[0.625rem]">
        <div className="w-[16.563rem] absolute !m-[0] top-[0rem] left-[2.656rem] font-semibold inline-block z-[0]">
          Numero ospiti
        </div>
        <NumOspiti
          ictwotoneBed="/ictwotonebed.svg"
          property1lolWidth="21.875rem"
          property1lolHeight="4.438rem"
          property1lolPosition="absolute"
          property1lolMargin="0 !important"
          property1lolTop="3.375rem"
          property1lolLeft="0rem"
          numeroOspitiWidth="82.69%"
          numeroOspitiLeft="17.31%"
          numeroOspitiFontSize="2.25rem"
          ictwotoneBedIconWidth="15.29%"
          ictwotoneBedIconRight="81.34%"
        />
      </div>
    </section>
  );
};

Selezione.propTypes = {
  className: PropTypes.string,
};

export default Selezione;
