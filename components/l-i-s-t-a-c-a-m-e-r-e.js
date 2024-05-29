import { useCallback } from "react";
import { useRouter } from "next/router";
import InfoCameraFrame from "./info-camera-frame";
import PropTypes from "prop-types";

const LISTACAMERE = ({ className = "" }) => {
  const router = useRouter();

  const onSelezionaClick = useCallback(() => {
    router.push("/dettagli-prenotazione");
  }, [router]);

  return (
    <section
      className={`self-stretch flex flex-col items-center justify-center py-[0rem] px-[6.25rem] ${className}`}
    >
      <InfoCameraFrame
        caroselloImmagini="/carosello-immagini2@2x.png"
        vector="/vector11.svg"
        bed="/bed2.svg"
        property1DefaultPadding="0.25rem"
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
        infoGeneraliSullaContaineFontSize="2.5rem"
        infoGeneraliSullaContaineHeight="20.25rem"
        cashGap="0.625rem"
        prezzoWidth="15.625rem"
        prezzoFontSize="2.5rem"
        prezzoHeight="5.813rem"
        selezionaWidth="15.625rem"
        selezionaHeight="4.375rem"
        selezionaBorder="none"
        selezionaPadding="0"
        selezionaBackgroundColor="transparent"
        selezionaFontSize="1.938rem"
        onSelezionaContainerClick={onSelezionaClick}
      />
    </section>
  );
};

LISTACAMERE.propTypes = {
  className: PropTypes.string,
};

export default LISTACAMERE;
