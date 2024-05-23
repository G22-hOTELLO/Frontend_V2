import { useMemo, useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const InfoPrenotazione = ({
  className = "",
  soggiornoTot,
  prezzo,
  modifica,
  infoPrenotazionePadding,
  infoPrenotazioneGap,
  leftPadding,
  leftGap,
  leftWidth,
  iDPrenotazioneFontSize,
  iDPrenotazioneMargin,
  iDPrenotazioneAlignSelf,
  infoCameraWidth,
  infoCameraHeight,
  infoCameraAlignSelf,
  numMaxPersFontSize,
  numETipoFontSize,
  dimFontSize,
  numPersoneCheckContainerWidth,
  numPersoneCheckContainerFontSize,
  numPersoneCheckContainerDisplay,
  numPersoneCheckContainerHeight,
  numPersoneCheckContainerMargin,
  numPersoneCheckContainerAlignSelf,
  numPersoneCheckMargin,
  checkOutMargin,
  soggiornoTotMargin,
  soggiornoTotAlignSelf,
  soggiornoTotPosition,
  soggiornoTotFontSize,
  soggiornoTotFontWeight,
  soggiornoTotFontFamily,
  soggiornoTotColor,
  soggiornoTotTextAlign,
  prezzoPosition,
  prezzoFontSize,
  prezzoFontWeight,
  prezzoFontFamily,
  prezzoColor,
  prezzoTextAlign,
  prezzoWidth,
  prezzoDisplay,
  prezzoFlexDirection,
  prezzoGap,
  buttonsDisplay,
  buttonsFlexDirection,
  buttonsGap,
  buttonsBorder,
  buttonsPadding,
  buttonsBackgroundColor,
  buttonsAlignSelf,
  buttonsPosition,
  buttonsHeight,
  modificaWidth,
  modificaPosition,
  modificaHeight,
  modificaTop,
  modificaRight,
  modificaBottom,
  modificaLeft,
  modificaBorderRadius,
  modificaOverflow,
  modificaMaxHeight,
  rectangleIconRight,
  rectangleIconBottom,
  rectangleIconBorderRadius,
  rectangleIconOverflow,
  rectangleIconMaxHeight,
  rectangleIconFontSize,
  rectangleIconFontWeight,
  rectangleIconFontFamily,
  rectangleIconColor,
  rectangleIconTextAlign,
  rectangleIconDisplay,
  modificaPosition1,
  modificaHeight1,
  modificaWidth1,
  modificaTop1,
  modificaLeft1,
  modificaFontSize,
  modificaFontWeight,
  modificaFontFamily,
  modificaColor,
  modificaTextAlign,
  modificaDisplay,
  modificaBorder,
  modificaPadding,
  modificaBackgroundColor,
  modificaAlignSelf,
  eliminaWidth,
  eliminaPosition,
  eliminaHeight,
  eliminaTop,
  eliminaRight,
  eliminaBottom,
  eliminaLeft,
  eliminaBorderRadius,
  eliminaOverflow,
  eliminaMaxHeight,
  rectangleIconRight1,
  rectangleIconBottom1,
  rectangleIconBorderRadius1,
  rectangleIconOverflow1,
  rectangleIconMaxHeight1,
  rectangleIconFontSize1,
  rectangleIconFontWeight1,
  rectangleIconFontFamily1,
  rectangleIconColor1,
  rectangleIconTextAlign1,
  rectangleIconDisplay1,
  onModificaTextClick,
  onEliminaTextClick,
}) => {
  const infoPrenotazioneStyle = useMemo(() => {
    return {
      padding: infoPrenotazionePadding,
      gap: infoPrenotazioneGap,
    };
  }, [infoPrenotazionePadding, infoPrenotazioneGap]);

  const leftStyle = useMemo(() => {
    return {
      padding: leftPadding,
      gap: leftGap,
      width: leftWidth,
    };
  }, [leftPadding, leftGap, leftWidth]);

  const iDPrenotazioneStyle = useMemo(() => {
    return {
      fontSize: iDPrenotazioneFontSize,
      margin: iDPrenotazioneMargin,
      alignSelf: iDPrenotazioneAlignSelf,
    };
  }, [iDPrenotazioneFontSize, iDPrenotazioneMargin, iDPrenotazioneAlignSelf]);

  const infoCamera2Style = useMemo(() => {
    return {
      width: infoCameraWidth,
      height: infoCameraHeight,
      alignSelf: infoCameraAlignSelf,
    };
  }, [infoCameraWidth, infoCameraHeight, infoCameraAlignSelf]);

  const numMaxPers2Style = useMemo(() => {
    return {
      fontSize: numMaxPersFontSize,
    };
  }, [numMaxPersFontSize]);

  const numETipo2Style = useMemo(() => {
    return {
      fontSize: numETipoFontSize,
    };
  }, [numETipoFontSize]);

  const dim2Style = useMemo(() => {
    return {
      fontSize: dimFontSize,
    };
  }, [dimFontSize]);

  const numPersoneCheckContainerStyle = useMemo(() => {
    return {
      width: numPersoneCheckContainerWidth,
      fontSize: numPersoneCheckContainerFontSize,
      display: numPersoneCheckContainerDisplay,
      height: numPersoneCheckContainerHeight,
      margin: numPersoneCheckContainerMargin,
      alignSelf: numPersoneCheckContainerAlignSelf,
    };
  }, [
    numPersoneCheckContainerWidth,
    numPersoneCheckContainerFontSize,
    numPersoneCheckContainerDisplay,
    numPersoneCheckContainerHeight,
    numPersoneCheckContainerMargin,
    numPersoneCheckContainerAlignSelf,
  ]);

  const soggiornoTotStyle = useMemo(() => {
    return {
      margin: soggiornoTotMargin,
      alignSelf: soggiornoTotAlignSelf,
      position: soggiornoTotPosition,
      fontSize: soggiornoTotFontSize,
      fontWeight: soggiornoTotFontWeight,
      fontFamily: soggiornoTotFontFamily,
      color: soggiornoTotColor,
      textAlign: soggiornoTotTextAlign,
    };
  }, [
    soggiornoTotMargin,
    soggiornoTotAlignSelf,
    soggiornoTotPosition,
    soggiornoTotFontSize,
    soggiornoTotFontWeight,
    soggiornoTotFontFamily,
    soggiornoTotColor,
    soggiornoTotTextAlign,
  ]);

  const prezzo2Style = useMemo(() => {
    return {
      position: prezzoPosition,
      fontSize: prezzoFontSize,
      fontWeight: prezzoFontWeight,
      fontFamily: prezzoFontFamily,
      color: prezzoColor,
      textAlign: prezzoTextAlign,
      width: prezzoWidth,
      display: prezzoDisplay,
      flexDirection: prezzoFlexDirection,
      gap: prezzoGap,
    };
  }, [
    prezzoPosition,
    prezzoFontSize,
    prezzoFontWeight,
    prezzoFontFamily,
    prezzoColor,
    prezzoTextAlign,
    prezzoWidth,
    prezzoDisplay,
    prezzoFlexDirection,
    prezzoGap,
  ]);

  const buttonsStyle = useMemo(() => {
    return {
      display: buttonsDisplay,
      flexDirection: buttonsFlexDirection,
      gap: buttonsGap,
      border: buttonsBorder,
      padding: buttonsPadding,
      backgroundColor: buttonsBackgroundColor,
      alignSelf: buttonsAlignSelf,
      position: buttonsPosition,
      height: buttonsHeight,
    };
  }, [
    buttonsDisplay,
    buttonsFlexDirection,
    buttonsGap,
    buttonsBorder,
    buttonsPadding,
    buttonsBackgroundColor,
    buttonsAlignSelf,
    buttonsPosition,
    buttonsHeight,
  ]);

  const modificaStyle = useMemo(() => {
    return {
      width: modificaWidth,
      position: modificaPosition,
      height: modificaHeight,
      top: modificaTop,
      right: modificaRight,
      bottom: modificaBottom,
      left: modificaLeft,
      borderRadius: modificaBorderRadius,
      overflow: modificaOverflow,
      maxHeight: modificaMaxHeight,
    };
  }, [
    modificaWidth,
    modificaPosition,
    modificaHeight,
    modificaTop,
    modificaRight,
    modificaBottom,
    modificaLeft,
    modificaBorderRadius,
    modificaOverflow,
    modificaMaxHeight,
  ]);

  const rectangleIconStyle = useMemo(() => {
    return {
      right: rectangleIconRight,
      bottom: rectangleIconBottom,
      borderRadius: rectangleIconBorderRadius,
      overflow: rectangleIconOverflow,
      maxHeight: rectangleIconMaxHeight,
      fontSize: rectangleIconFontSize,
      fontWeight: rectangleIconFontWeight,
      fontFamily: rectangleIconFontFamily,
      color: rectangleIconColor,
      textAlign: rectangleIconTextAlign,
      display: rectangleIconDisplay,
    };
  }, [
    rectangleIconRight,
    rectangleIconBottom,
    rectangleIconBorderRadius,
    rectangleIconOverflow,
    rectangleIconMaxHeight,
    rectangleIconFontSize,
    rectangleIconFontWeight,
    rectangleIconFontFamily,
    rectangleIconColor,
    rectangleIconTextAlign,
    rectangleIconDisplay,
  ]);

  const modifica1Style = useMemo(() => {
    return {
      position: modificaPosition1,
      height: modificaHeight1,
      width: modificaWidth1,
      top: modificaTop1,
      left: modificaLeft1,
      fontSize: modificaFontSize,
      fontWeight: modificaFontWeight,
      fontFamily: modificaFontFamily,
      color: modificaColor,
      textAlign: modificaTextAlign,
      display: modificaDisplay,
      border: modificaBorder,
      padding: modificaPadding,
      backgroundColor: modificaBackgroundColor,
      alignSelf: modificaAlignSelf,
    };
  }, [
    modificaPosition1,
    modificaHeight1,
    modificaWidth1,
    modificaTop1,
    modificaLeft1,
    modificaFontSize,
    modificaFontWeight,
    modificaFontFamily,
    modificaColor,
    modificaTextAlign,
    modificaDisplay,
    modificaBorder,
    modificaPadding,
    modificaBackgroundColor,
    modificaAlignSelf,
  ]);

  const elimina1Style = useMemo(() => {
    return {
      width: eliminaWidth,
      position: eliminaPosition,
      height: eliminaHeight,
      top: eliminaTop,
      right: eliminaRight,
      bottom: eliminaBottom,
      left: eliminaLeft,
      borderRadius: eliminaBorderRadius,
      overflow: eliminaOverflow,
      maxHeight: eliminaMaxHeight,
    };
  }, [
    eliminaWidth,
    eliminaPosition,
    eliminaHeight,
    eliminaTop,
    eliminaRight,
    eliminaBottom,
    eliminaLeft,
    eliminaBorderRadius,
    eliminaOverflow,
    eliminaMaxHeight,
  ]);

  const rectangleIcon1Style = useMemo(() => {
    return {
      right: rectangleIconRight1,
      bottom: rectangleIconBottom1,
      borderRadius: rectangleIconBorderRadius1,
      overflow: rectangleIconOverflow1,
      maxHeight: rectangleIconMaxHeight1,
      fontSize: rectangleIconFontSize1,
      fontWeight: rectangleIconFontWeight1,
      fontFamily: rectangleIconFontFamily1,
      color: rectangleIconColor1,
      textAlign: rectangleIconTextAlign1,
      display: rectangleIconDisplay1,
    };
  }, [
    rectangleIconRight1,
    rectangleIconBottom1,
    rectangleIconBorderRadius1,
    rectangleIconOverflow1,
    rectangleIconMaxHeight1,
    rectangleIconFontSize1,
    rectangleIconFontWeight1,
    rectangleIconFontFamily1,
    rectangleIconColor1,
    rectangleIconTextAlign1,
    rectangleIconDisplay1,
  ]);

  const router = useRouter();

  const onEliminaTextClick = useCallback(() => {
    router.push("/dettagli-prenotazione");
  }, [router]);

  return (
    <div
      className={`shadow-[20px_15px_4px_rgba(0,_0,_0,_0.25)] rounded-31xl bg-white box-border max-w-full overflow-hidden flex flex-row items-center justify-center py-[5px] px-[38px] gap-[65px] text-left text-21xl text-black font-montserrat border-[5px] border-solid border-navy-100 ${className}`}
      style={infoPrenotazioneStyle}
    >
      <div
        className="self-stretch flex flex-col items-start justify-center py-2.5 px-0 gap-[17px]"
        style={leftStyle}
      >
        <div
          className="relative text-29xl font-semibold"
          style={iDPrenotazioneStyle}
        >
          #ID_prenotazione
        </div>
        <div
          className="w-[659.4px] relative h-[92px] text-xl"
          style={infoCamera2Style}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-gainsboro-100" />
          <img
            className="absolute h-[54.35%] w-[7.57%] top-[22.83%] right-[32.06%] bottom-[22.83%] left-[60.37%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/bed1.svg"
          />
          <img
            className="absolute h-[54.35%] w-[7.57%] top-[22.83%] right-[87.9%] bottom-[22.83%] left-[4.53%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector3.svg"
          />
          <img
            className="absolute h-[54.35%] w-[7.57%] top-[22.83%] right-[56.58%] bottom-[22.83%] left-[35.85%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector4.svg"
          />
          <div
            className="absolute h-[52.17%] w-[20.28%] top-[22.83%] left-[15.59%] font-semibold flex items-center"
            style={numMaxPers2Style}
          >
            numMax pers
          </div>
          <div
            className="absolute h-[54.35%] w-[20.28%] top-[20.65%] left-[75.49%] font-semibold flex items-center"
            style={numETipo2Style}
          >
            num e tipo letti
          </div>
          <div
            className="absolute h-[54.35%] w-[20.28%] top-[20.65%] left-[47.66%] font-semibold flex items-center"
            style={dim2Style}
          >
            Dim
          </div>
        </div>
        <div
          className="w-[337.2px] relative font-semibold flex items-center h-[251.4px] shrink-0"
          style={numPersoneCheckContainerStyle}
        >
          <span className="w-full">
            <p className="m-0">Num persone: _ Check in: _</p>
            <p className="m-0">Check out: _</p>
            <p className="m-0">Soggiorno tot: _</p>
          </span>
        </div>
        <div className="relative font-semibold" style={prezzo2Style}>
          {prezzo}
        </div>
      </div>
      <div
        className="flex flex-col items-start justify-center gap-[50px] text-center"
        style={buttonsStyle}
      >
        <div className="w-[344.6px] relative h-[70.4px]" style={modificaStyle}>
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-11222.svg"
            style={rectangleIconStyle}
            onClick={onModificaTextClick}
          />
          <div
            className="absolute h-full w-full top-[0%] left-[0%] font-semibold flex items-center justify-center cursor-pointer"
            onClick={onModificaTextClick}
            style={modifica1Style}
          >
            {modifica}
          </div>
        </div>
        <div
          className="w-[344.6px] relative h-[70.4px] text-white"
          style={elimina1Style}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle-11223.svg"
            style={rectangleIcon1Style}
            onClick={onEliminaTextClick}
          />
          <div
            className="absolute h-full w-full top-[0%] left-[0%] font-semibold flex items-center justify-center cursor-pointer"
            onClick={onEliminaTextClick}
          >
            Elimina
          </div>
        </div>
      </div>
    </div>
  );
};

InfoPrenotazione.propTypes = {
  className: PropTypes.string,
  soggiornoTot: PropTypes.string,
  prezzo: PropTypes.string,
  modifica: PropTypes.string,

  /** Style props */
  infoPrenotazionePadding: PropTypes.any,
  infoPrenotazioneGap: PropTypes.any,
  leftPadding: PropTypes.any,
  leftGap: PropTypes.any,
  leftWidth: PropTypes.any,
  iDPrenotazioneFontSize: PropTypes.any,
  iDPrenotazioneMargin: PropTypes.any,
  iDPrenotazioneAlignSelf: PropTypes.any,
  infoCameraWidth: PropTypes.any,
  infoCameraHeight: PropTypes.any,
  infoCameraAlignSelf: PropTypes.any,
  numMaxPersFontSize: PropTypes.any,
  numETipoFontSize: PropTypes.any,
  dimFontSize: PropTypes.any,
  numPersoneCheckContainerWidth: PropTypes.any,
  numPersoneCheckContainerFontSize: PropTypes.any,
  numPersoneCheckContainerDisplay: PropTypes.any,
  numPersoneCheckContainerHeight: PropTypes.any,
  numPersoneCheckContainerMargin: PropTypes.any,
  numPersoneCheckContainerAlignSelf: PropTypes.any,
  numPersoneCheckMargin: PropTypes.any,
  checkOutMargin: PropTypes.any,
  soggiornoTotMargin: PropTypes.any,
  soggiornoTotAlignSelf: PropTypes.any,
  soggiornoTotPosition: PropTypes.any,
  soggiornoTotFontSize: PropTypes.any,
  soggiornoTotFontWeight: PropTypes.any,
  soggiornoTotFontFamily: PropTypes.any,
  soggiornoTotColor: PropTypes.any,
  soggiornoTotTextAlign: PropTypes.any,
  prezzoPosition: PropTypes.any,
  prezzoFontSize: PropTypes.any,
  prezzoFontWeight: PropTypes.any,
  prezzoFontFamily: PropTypes.any,
  prezzoColor: PropTypes.any,
  prezzoTextAlign: PropTypes.any,
  prezzoWidth: PropTypes.any,
  prezzoDisplay: PropTypes.any,
  prezzoFlexDirection: PropTypes.any,
  prezzoGap: PropTypes.any,
  buttonsDisplay: PropTypes.any,
  buttonsFlexDirection: PropTypes.any,
  buttonsGap: PropTypes.any,
  buttonsBorder: PropTypes.any,
  buttonsPadding: PropTypes.any,
  buttonsBackgroundColor: PropTypes.any,
  buttonsAlignSelf: PropTypes.any,
  buttonsPosition: PropTypes.any,
  buttonsHeight: PropTypes.any,
  modificaWidth: PropTypes.any,
  modificaPosition: PropTypes.any,
  modificaHeight: PropTypes.any,
  modificaTop: PropTypes.any,
  modificaRight: PropTypes.any,
  modificaBottom: PropTypes.any,
  modificaLeft: PropTypes.any,
  modificaBorderRadius: PropTypes.any,
  modificaOverflow: PropTypes.any,
  modificaMaxHeight: PropTypes.any,
  rectangleIconRight: PropTypes.any,
  rectangleIconBottom: PropTypes.any,
  rectangleIconBorderRadius: PropTypes.any,
  rectangleIconOverflow: PropTypes.any,
  rectangleIconMaxHeight: PropTypes.any,
  rectangleIconFontSize: PropTypes.any,
  rectangleIconFontWeight: PropTypes.any,
  rectangleIconFontFamily: PropTypes.any,
  rectangleIconColor: PropTypes.any,
  rectangleIconTextAlign: PropTypes.any,
  rectangleIconDisplay: PropTypes.any,
  modificaPosition1: PropTypes.any,
  modificaHeight1: PropTypes.any,
  modificaWidth1: PropTypes.any,
  modificaTop1: PropTypes.any,
  modificaLeft1: PropTypes.any,
  modificaFontSize: PropTypes.any,
  modificaFontWeight: PropTypes.any,
  modificaFontFamily: PropTypes.any,
  modificaColor: PropTypes.any,
  modificaTextAlign: PropTypes.any,
  modificaDisplay: PropTypes.any,
  modificaBorder: PropTypes.any,
  modificaPadding: PropTypes.any,
  modificaBackgroundColor: PropTypes.any,
  modificaAlignSelf: PropTypes.any,
  eliminaWidth: PropTypes.any,
  eliminaPosition: PropTypes.any,
  eliminaHeight: PropTypes.any,
  eliminaTop: PropTypes.any,
  eliminaRight: PropTypes.any,
  eliminaBottom: PropTypes.any,
  eliminaLeft: PropTypes.any,
  eliminaBorderRadius: PropTypes.any,
  eliminaOverflow: PropTypes.any,
  eliminaMaxHeight: PropTypes.any,
  rectangleIconRight1: PropTypes.any,
  rectangleIconBottom1: PropTypes.any,
  rectangleIconBorderRadius1: PropTypes.any,
  rectangleIconOverflow1: PropTypes.any,
  rectangleIconMaxHeight1: PropTypes.any,
  rectangleIconFontSize1: PropTypes.any,
  rectangleIconFontWeight1: PropTypes.any,
  rectangleIconFontFamily1: PropTypes.any,
  rectangleIconColor1: PropTypes.any,
  rectangleIconTextAlign1: PropTypes.any,
  rectangleIconDisplay1: PropTypes.any,

  /** Action props */
  onModificaTextClick: PropTypes.func,
  onEliminaTextClick: PropTypes.func,
};

export default InfoPrenotazione;
