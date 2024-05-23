import InfoCamera from "./info-camera";
import PropTypes from "prop-types";

const LISTACAMERE1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-center ${className}`}
    >
      <InfoCamera
        caroselloImmagini="/carosello-immagini.svg"
        vector="/vector2.svg"
        bed="/bed.svg"
        property1Variant2Height="34.375rem"
        property1Variant2Padding="0.25rem"
        infoPadding="0.625rem 1.875rem"
        infoGap="1.875rem"
        nomeCameraFontSize="3rem"
        nomeCameraHeight="3.563rem"
        nomeCameraMargin="0"
        infoCameraPadding="1.187rem 1.812rem"
        infoCameraGap="0.625rem"
        vectorIconWidth="3.05rem"
        vectorIconHeight="3.125rem"
        numMaxPersFontSize="1.25rem"
        numMaxPersHeight="3rem"
        vectorIconWidth1="3.05rem"
        vectorIconHeight1="3.125rem"
        dimFontSize="1.25rem"
        dimHeight="3.125rem"
        bedIconWidth="3.05rem"
        bedIconHeight="3.125rem"
        numETipoFontSize="1.25rem"
        numETipoHeight="3.125rem"
        testoPadding="0rem 0.625rem"
        testoGap="0.937rem"
        dataCheckInFontSize="1.25rem"
        dataCheckOutFontSize="1.25rem"
        soggiornoTotaleFontSize="1.25rem"
        numAdultiFontSize="1.25rem"
        numBambiniFontSize="1.25rem"
        cashGap="0.625rem"
        prezzoWidth="15.625rem"
        prezzoFontSize="2.5rem"
        prezzoHeight="5.813rem"
        selezionaWidth="15.625rem"
        selezionaHeight="4.375rem"
        selezionaBorder="none"
        selezionaPadding="0"
        selezionaBackgroundColor="transparent"
        eliminaFontSize="1.938rem"
      />
    </div>
  );
};

LISTACAMERE1.propTypes = {
  className: PropTypes.string,
};

export default LISTACAMERE1;
