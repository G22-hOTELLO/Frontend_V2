import { useCallback } from "react";
import { useRouter } from "next/router";
import InfoPrenotazione from "./info-prenotazione";
import PropTypes from "prop-types";

const PrenotazioneRecap = ({ className = "" }) => {
  const router = useRouter();

  const onModificaTextClick = useCallback(() => {
    router.push("/dettagli-prenotazione");
  }, [router]);

  const onEliminaTextClick = useCallback(() => {
    router.push("/dettagli-prenotazione");
  }, [router]);

  return (
    <section
      className={`self-stretch h-[40.563rem] flex flex-col items-center justify-center py-[0rem] px-[9.375rem] box-border z-[4] ${className}`}
    >
      <InfoPrenotazione
        soggiornoTot="Prezzo: 200.000.000$"
        infoPrenotazionePadding="0.312rem 2.375rem"
        infoPrenotazioneGap="4.062rem"
        leftPadding="0.625rem 0rem"
        leftGap="1.062rem"
        leftWidth="41.213rem"
        iDPrenotazioneFontSize="3rem"
        iDPrenotazioneMargin="0"
        iDPrenotazioneAlignSelf="stretch"
        infoCameraWidth="unset"
        infoCameraHeight="5.75rem"
        infoCameraAlignSelf="stretch"
        numMaxPersFontSize="1.25rem"
        numETipoFontSize="1.25rem"
        dimFontSize="1.25rem"
        numPersoneCheckContainerWidth="unset"
        numPersoneCheckContainerFontSize="2.5rem"
        numPersoneCheckContainerDisplay="unset"
        numPersoneCheckContainerHeight="unset"
        numPersoneCheckContainerMargin="0"
        numPersoneCheckContainerAlignSelf="stretch"
        soggiornoTotMargin="0"
        soggiornoTotAlignSelf="stretch"
        soggiornoTotPosition="relative"
        soggiornoTotFontSize="2.5rem"
        soggiornoTotFontWeight="600"
        soggiornoTotFontFamily="Montserrat"
        soggiornoTotColor="#000"
        soggiornoTotTextAlign="left"
        prezzoPosition="unset"
        prezzoFontSize="unset"
        prezzoFontWeight="unset"
        prezzoFontFamily="unset"
        prezzoColor="unset"
        prezzoTextAlign="unset"
        prezzoWidth="21.538rem"
        prezzoDisplay="flex"
        prezzoFlexDirection="column"
        prezzoGap="3.125rem"
        buttonsDisplay="unset"
        buttonsFlexDirection="unset"
        buttonsGap="unset"
        buttonsBorder="none"
        buttonsPadding="0"
        buttonsBackgroundColor="transparent"
        buttonsAlignSelf="stretch"
        buttonsPosition="relative"
        buttonsHeight="4.4rem"
        modificaWidth="100%"
        modificaPosition="absolute"
        modificaHeight="100%"
        modificaTop="0%"
        modificaRight="0%"
        modificaBottom="0%"
        modificaLeft="0%"
        modificaBorderRadius="20px"
        modificaOverflow="hidden"
        modificaMaxHeight="100%"
        rectangleIconRight="unset"
        rectangleIconBottom="unset"
        rectangleIconBorderRadius="unset"
        rectangleIconOverflow="unset"
        rectangleIconMaxHeight="unset"
        rectangleIconFontSize="2.5rem"
        rectangleIconFontWeight="600"
        rectangleIconFontFamily="Montserrat"
        rectangleIconColor="#000"
        rectangleIconTextAlign="center"
        rectangleIconDisplay="flex"
        modificaPosition1="relative"
        modificaHeight1="4.4rem"
        modificaWidth1="unset"
        modificaTop1="unset"
        modificaLeft1="unset"
        modificaFontSize="unset"
        modificaFontWeight="unset"
        modificaFontFamily="unset"
        modificaColor="unset"
        modificaTextAlign="unset"
        modificaDisplay="unset"
        modificaBorder="none"
        modificaPadding="0"
        modificaBackgroundColor="transparent"
        modificaAlignSelf="stretch"
        eliminaWidth="100%"
        eliminaPosition="absolute"
        eliminaHeight="100%"
        eliminaTop="0%"
        eliminaRight="0%"
        eliminaBottom="0%"
        eliminaLeft="0%"
        eliminaBorderRadius="20px"
        eliminaOverflow="hidden"
        eliminaMaxHeight="100%"
        rectangleIconRight1="unset"
        rectangleIconBottom1="unset"
        rectangleIconBorderRadius1="unset"
        rectangleIconOverflow1="unset"
        rectangleIconMaxHeight1="unset"
        rectangleIconFontSize1="2.5rem"
        rectangleIconFontWeight1="600"
        rectangleIconFontFamily1="Montserrat"
        rectangleIconColor1="#fff"
        rectangleIconTextAlign1="center"
        rectangleIconDisplay1="flex"
        onModificaTextClick={onModificaTextClick}
        onEliminaTextClick={onEliminaTextClick}
      />
    </section>
  );
};

PrenotazioneRecap.propTypes = {
  className: PropTypes.string,
};

export default PrenotazioneRecap;
