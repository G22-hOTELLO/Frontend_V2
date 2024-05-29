import { useMemo } from "react";

const InfoCamera = ({
  className = "",
  caroselloImmagini,
  vector,
  bed,
  property1Variant2Height,
  property1Variant2Padding,
  infoPadding,
  infoGap,
  nomeCameraFontSize,
  nomeCameraHeight,
  nomeCameraMargin,
  infoCameraPadding,
  infoCameraGap,
  vectorIconWidth,
  vectorIconHeight,
  numMaxPersFontSize,
  numMaxPersHeight,
  vectorIconWidth1,
  vectorIconHeight1,
  dimFontSize,
  dimHeight,
  bedIconWidth,
  bedIconHeight,
  numETipoFontSize,
  numETipoHeight,
  testoPadding,
  testoGap,
  dataCheckInFontSize,
  dataCheckOutFontSize,
  soggiornoTotaleFontSize,
  numAdultiFontSize,
  numBambiniFontSize,
  cashGap,
  prezzoWidth,
  prezzoFontSize,
  prezzoHeight,
  selezionaWidth,
  selezionaHeight,
  selezionaBorder,
  selezionaPadding,
  selezionaBackgroundColor,
  eliminaFontSize,
}) => {
  const property1Variant21Style = useMemo(() => {
    return {
      height: property1Variant2Height,
      padding: property1Variant2Padding,
    };
  }, [property1Variant2Height, property1Variant2Padding]);

  const info1Style = useMemo(() => {
    return {
      padding: infoPadding,
      gap: infoGap,
    };
  }, [infoPadding, infoGap]);

  const nomeCamera1Style = useMemo(() => {
    return {
      fontSize: nomeCameraFontSize,
      height: nomeCameraHeight,
      margin: nomeCameraMargin,
    };
  }, [nomeCameraFontSize, nomeCameraHeight, nomeCameraMargin]);

  const infoCamera1Style = useMemo(() => {
    return {
      padding: infoCameraPadding,
      gap: infoCameraGap,
    };
  }, [infoCameraPadding, infoCameraGap]);

  const vectorIcon2Style = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const numMaxPers1Style = useMemo(() => {
    return {
      fontSize: numMaxPersFontSize,
      height: numMaxPersHeight,
    };
  }, [numMaxPersFontSize, numMaxPersHeight]);

  const vectorIcon3Style = useMemo(() => {
    return {
      width: vectorIconWidth1,
      height: vectorIconHeight1,
    };
  }, [vectorIconWidth1, vectorIconHeight1]);

  const dim1Style = useMemo(() => {
    return {
      fontSize: dimFontSize,
      height: dimHeight,
    };
  }, [dimFontSize, dimHeight]);

  const bedIcon1Style = useMemo(() => {
    return {
      width: bedIconWidth,
      height: bedIconHeight,
    };
  }, [bedIconWidth, bedIconHeight]);

  const numETipo1Style = useMemo(() => {
    return {
      fontSize: numETipoFontSize,
      height: numETipoHeight,
    };
  }, [numETipoFontSize, numETipoHeight]);

  const testoStyle = useMemo(() => {
    return {
      padding: testoPadding,
      gap: testoGap,
    };
  }, [testoPadding, testoGap]);

  const dataCheckInStyle = useMemo(() => {
    return {
      fontSize: dataCheckInFontSize,
    };
  }, [dataCheckInFontSize]);

  const dataCheckOutStyle = useMemo(() => {
    return {
      fontSize: dataCheckOutFontSize,
    };
  }, [dataCheckOutFontSize]);

  const soggiornoTotaleStyle = useMemo(() => {
    return {
      fontSize: soggiornoTotaleFontSize,
    };
  }, [soggiornoTotaleFontSize]);

  const numAdultiStyle = useMemo(() => {
    return {
      fontSize: numAdultiFontSize,
    };
  }, [numAdultiFontSize]);

  const numBambiniStyle = useMemo(() => {
    return {
      fontSize: numBambiniFontSize,
    };
  }, [numBambiniFontSize]);

  const cash1Style = useMemo(() => {
    return {
      gap: cashGap,
    };
  }, [cashGap]);

  const prezzo1Style = useMemo(() => {
    return {
      width: prezzoWidth,
      fontSize: prezzoFontSize,
      height: prezzoHeight,
    };
  }, [prezzoWidth, prezzoFontSize, prezzoHeight]);

  const seleziona2Style = useMemo(() => {
    return {
      width: selezionaWidth,
      height: selezionaHeight,
      border: selezionaBorder,
      padding: selezionaPadding,
      backgroundColor: selezionaBackgroundColor,
    };
  }, [
    selezionaWidth,
    selezionaHeight,
    selezionaBorder,
    selezionaPadding,
    selezionaBackgroundColor,
  ]);

  const eliminaStyle = useMemo(() => {
    return {
      fontSize: eliminaFontSize,
    };
  }, [eliminaFontSize]);

  return (
    <div
      className={`shadow-[20px_15px_4px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white box-border max-w-full h-[550px] overflow-hidden flex flex-row items-center justify-center p-1 text-left text-xl text-black font-montserrat self-stretch border-[5px] border-solid border-navy-100 ${className}`}
      style={property1Variant21Style}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
        alt=""
        src={caroselloImmagini}
      />
      <div
        className="flex-1 flex flex-col items-center justify-center py-2.5 px-[30px] gap-[30px]"
        style={info1Style}
      >
        <div
          className="self-stretch relative text-29xl font-semibold inline-block h-[57px] shrink-0"
          style={nomeCamera1Style}
        >
          Nome camera
        </div>
        <div
          className="self-stretch rounded-xl bg-gainsboro-100 flex flex-row items-center justify-start py-[19px] px-[29px] gap-[10px]"
          style={infoCamera1Style}
        >
          <img
            className="w-[48.8px] relative h-[50px]"
            alt=""
            src="/vector1.svg"
            style={vectorIcon2Style}
          />
          <div
            className="flex-1 relative font-semibold flex items-center h-12"
            style={numMaxPers1Style}
          >
            numMax pers
          </div>
          <img
            className="w-[48.8px] relative h-[50px]"
            alt=""
            src={vector}
            style={vectorIcon3Style}
          />
          <div
            className="flex-1 relative font-semibold flex items-center h-[50px]"
            style={dim1Style}
          >{`Dim `}</div>
          <img
            className="w-[48.8px] relative h-[50px]"
            alt=""
            src={bed}
            style={bedIcon1Style}
          />
          <div
            className="flex-1 relative font-semibold flex items-center h-[50px]"
            style={numETipo1Style}
          >
            num e tipo letti
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between">
          <div
            className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-2.5 gap-[15px]"
            style={testoStyle}
          >
            <div
              className="self-stretch relative font-semibold"
              style={dataCheckInStyle}
            >
              Data check in: _
            </div>
            <div
              className="self-stretch relative font-semibold"
              style={dataCheckOutStyle}
            >
              Data check out: _
            </div>
            <div
              className="self-stretch relative font-semibold"
              style={soggiornoTotaleStyle}
            >
              Soggiorno totale: _
            </div>
            <div
              className="self-stretch relative font-semibold"
              style={numAdultiStyle}
            >
              Num adulti: _
            </div>
            <div
              className="self-stretch relative font-semibold"
              style={numBambiniStyle}
            >
              Num bambini: _
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-[10px] text-21xl"
            style={cash1Style}
          >
            <div
              className="w-[250px] relative font-semibold flex items-center h-[93px] shrink-0"
              style={prezzo1Style}
            >
              200.000$
            </div>
            <div
              className="w-[250px] relative h-[70px] text-center text-12xl text-white"
              style={seleziona2Style}
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle-11221.svg"
              />
              <div
                className="absolute h-full w-full top-[0%] left-[0%] font-semibold flex items-center justify-center"
                style={eliminaStyle}
              >
                Elimina
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCamera.propTypes = {
  className: PropTypes.string,
  caroselloImmagini: PropTypes.string,
  vector: PropTypes.string,
  bed: PropTypes.string,

  /** Style props */
  property1Variant2Height: PropTypes.any,
  property1Variant2Padding: PropTypes.any,
  infoPadding: PropTypes.any,
  infoGap: PropTypes.any,
  nomeCameraFontSize: PropTypes.any,
  nomeCameraHeight: PropTypes.any,
  nomeCameraMargin: PropTypes.any,
  infoCameraPadding: PropTypes.any,
  infoCameraGap: PropTypes.any,
  vectorIconWidth: PropTypes.any,
  vectorIconHeight: PropTypes.any,
  numMaxPersFontSize: PropTypes.any,
  numMaxPersHeight: PropTypes.any,
  vectorIconWidth1: PropTypes.any,
  vectorIconHeight1: PropTypes.any,
  dimFontSize: PropTypes.any,
  dimHeight: PropTypes.any,
  bedIconWidth: PropTypes.any,
  bedIconHeight: PropTypes.any,
  numETipoFontSize: PropTypes.any,
  numETipoHeight: PropTypes.any,
  testoPadding: PropTypes.any,
  testoGap: PropTypes.any,
  dataCheckInFontSize: PropTypes.any,
  dataCheckOutFontSize: PropTypes.any,
  soggiornoTotaleFontSize: PropTypes.any,
  numAdultiFontSize: PropTypes.any,
  numBambiniFontSize: PropTypes.any,
  cashGap: PropTypes.any,
  prezzoWidth: PropTypes.any,
  prezzoFontSize: PropTypes.any,
  prezzoHeight: PropTypes.any,
  selezionaWidth: PropTypes.any,
  selezionaHeight: PropTypes.any,
  selezionaBorder: PropTypes.any,
  selezionaPadding: PropTypes.any,
  selezionaBackgroundColor: PropTypes.any,
  eliminaFontSize: PropTypes.any,
};

export default InfoCamera;
