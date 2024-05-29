import { useMemo } from "react";

const InfoCameraFrame = ({
  className = "",
  caroselloImmagini,
  vector,
  bed,
  property1DefaultPadding,
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
  infoGeneraliSullaContaineFontSize,
  infoGeneraliSullaContaineHeight,
  cashGap,
  prezzoWidth,
  prezzoFontSize,
  prezzoHeight,
  selezionaWidth,
  selezionaHeight,
  selezionaBorder,
  selezionaPadding,
  selezionaBackgroundColor,
  selezionaFontSize,
  onSelezionaContainerClick,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      padding: property1DefaultPadding,
    };
  }, [property1DefaultPadding]);

  const infoStyle = useMemo(() => {
    return {
      padding: infoPadding,
      gap: infoGap,
    };
  }, [infoPadding, infoGap]);

  const nomeCameraStyle = useMemo(() => {
    return {
      fontSize: nomeCameraFontSize,
      height: nomeCameraHeight,
      margin: nomeCameraMargin,
    };
  }, [nomeCameraFontSize, nomeCameraHeight, nomeCameraMargin]);

  const infoCameraStyle = useMemo(() => {
    return {
      padding: infoCameraPadding,
      gap: infoCameraGap,
    };
  }, [infoCameraPadding, infoCameraGap]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
    };
  }, [vectorIconWidth, vectorIconHeight]);

  const numMaxPersStyle = useMemo(() => {
    return {
      fontSize: numMaxPersFontSize,
      height: numMaxPersHeight,
    };
  }, [numMaxPersFontSize, numMaxPersHeight]);

  const vectorIcon1Style = useMemo(() => {
    return {
      width: vectorIconWidth1,
      height: vectorIconHeight1,
    };
  }, [vectorIconWidth1, vectorIconHeight1]);

  const dimStyle = useMemo(() => {
    return {
      fontSize: dimFontSize,
      height: dimHeight,
    };
  }, [dimFontSize, dimHeight]);

  const bedIconStyle = useMemo(() => {
    return {
      width: bedIconWidth,
      height: bedIconHeight,
    };
  }, [bedIconWidth, bedIconHeight]);

  const numETipoStyle = useMemo(() => {
    return {
      fontSize: numETipoFontSize,
      height: numETipoHeight,
    };
  }, [numETipoFontSize, numETipoHeight]);

  const infoGeneraliSullaContainerStyle = useMemo(() => {
    return {
      fontSize: infoGeneraliSullaContaineFontSize,
      height: infoGeneraliSullaContaineHeight,
    };
  }, [infoGeneraliSullaContaineFontSize, infoGeneraliSullaContaineHeight]);

  const cashStyle = useMemo(() => {
    return {
      gap: cashGap,
    };
  }, [cashGap]);

  const prezzoStyle = useMemo(() => {
    return {
      width: prezzoWidth,
      fontSize: prezzoFontSize,
      height: prezzoHeight,
    };
  }, [prezzoWidth, prezzoFontSize, prezzoHeight]);

  const selezionaStyle = useMemo(() => {
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

  const seleziona1Style = useMemo(() => {
    return {
      fontSize: selezionaFontSize,
    };
  }, [selezionaFontSize]);

  return (
    <div
      className={`shadow-[20px_15px_4px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white box-border max-w-full overflow-hidden flex flex-row items-center justify-center p-1 text-left text-29xl text-black font-montserrat self-stretch border-[5px] border-solid border-navy-100 ${className}`}
      style={property1DefaultStyle}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
        alt=""
        src={caroselloImmagini}
      />
      <div
        className="flex-1 flex flex-col items-center justify-center py-2.5 px-[30px] gap-[30px]"
        style={infoStyle}
      >
        <div
          className="self-stretch relative font-semibold inline-block h-[57px] shrink-0"
          style={nomeCameraStyle}
        >
          Nome camera
        </div>
        <div
          className="self-stretch rounded-xl bg-gainsboro-100 flex flex-row items-center justify-start py-[19px] px-[29px] gap-[10px] text-xl"
          style={infoCameraStyle}
        >
          <img
            className="w-[48.8px] relative h-[50px]"
            alt=""
            src="/vector1.svg"
            style={vectorIconStyle}
          />
          <div
            className="flex-1 relative font-semibold flex items-center h-12"
            style={numMaxPersStyle}
          >
            numMax pers
          </div>
          <img
            className="w-[48.8px] relative h-[50px]"
            alt=""
            src={vector}
            style={vectorIcon1Style}
          />
          <div
            className="flex-1 relative font-semibold flex items-center h-[50px]"
            style={dimStyle}
          >
            Dim
          </div>
          <img
            className="w-[48.8px] relative h-[50px]"
            alt=""
            src={bed}
            style={bedIconStyle}
          />
          <div
            className="flex-1 relative font-semibold flex items-center h-[50px]"
            style={numETipoStyle}
          >
            num e tipo letti
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-21xl">
          <div
            className="flex-1 relative font-semibold flex items-center h-[324px]"
            style={infoGeneraliSullaContainerStyle}
          >
            <span>
              <p className="m-0">Info</p>
              <p className="m-0">generali</p>
              <p className="m-0">sulla camera</p>
            </span>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-[10px]"
            style={cashStyle}
          >
            <div
              className="w-[250px] relative font-semibold flex items-center h-[93px] shrink-0"
              style={prezzoStyle}
            >
              200.000$
            </div>
            <div
              className="w-[250px] relative h-[70px] cursor-pointer text-center text-12xl text-white"
              onClick={onSelezionaContainerClick}
              style={selezionaStyle}
            >
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle-1122.svg"
              />
              <div
                className="absolute h-full w-full top-[0%] left-[0%] font-semibold flex items-center justify-center"
                style={seleziona1Style}
              >
                Seleziona
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InfoCameraFrame.propTypes = {
  className: PropTypes.string,
  caroselloImmagini: PropTypes.string,
  vector: PropTypes.string,
  bed: PropTypes.string,

  /** Style props */
  property1DefaultPadding: PropTypes.any,
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
  infoGeneraliSullaContaineFontSize: PropTypes.any,
  infoGeneraliSullaContaineHeight: PropTypes.any,
  cashGap: PropTypes.any,
  prezzoWidth: PropTypes.any,
  prezzoFontSize: PropTypes.any,
  prezzoHeight: PropTypes.any,
  selezionaWidth: PropTypes.any,
  selezionaHeight: PropTypes.any,
  selezionaBorder: PropTypes.any,
  selezionaPadding: PropTypes.any,
  selezionaBackgroundColor: PropTypes.any,
  selezionaFontSize: PropTypes.any,

  /** Action props */
  onSelezionaContainerClick: PropTypes.func,
};

export default InfoCameraFrame;
