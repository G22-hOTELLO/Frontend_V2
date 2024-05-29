import { useState, useCallback } from "react";
import PrenotazioneEffettuata from "../components/prenotazione-effettuata";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import LISTACAMERE1 from "../components/l-i-s-t-a-c-a-m-e-r-e1";
import Footer from "../components/footer";

const DettagliPrenotazione = () => {
  const [
    isPrenotazioneEffettuataPopupOpen,
    setPrenotazioneEffettuataPopupOpen,
  ] = useState(false);
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/h-o-m-e-utente-loggato");
  }, [router]);

  const onPrenotaTextClick = useCallback(() => {
    router.push("/prenotazione");
  }, [router]);

  const onContattaciTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onAreaPersonaleTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAddCameraClick = useCallback(() => {
    router.push("/prenotazione");
  }, [router]);

  const openPrenotazioneEffettuataPopup = useCallback(() => {
    setPrenotazioneEffettuataPopupOpen(true);
  }, []);

  const closePrenotazioneEffettuataPopup = useCallback(() => {
    setPrenotazioneEffettuataPopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-center gap-[7.062rem] text-center text-[6rem] text-navy-100 font-montserrat">
        <header className="self-stretch bg-gray-100 h-[10.875rem] flex flex-row items-center justify-between relative">
          <nav
            className="!m-[0] w-[54.813rem] absolute top-[1.875rem] right-[0rem] bg-gray-100 flex flex-row items-center justify-start py-[0rem] px-[4.687rem] box-border gap-[2.75rem] z-[0] text-center text-[2.25rem] text-white font-montserrat"
            id="AnyHomeNavBar"
            Home
            Contattaci
            Staff
          >
            <div
              className="relative font-medium [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"
              onClick={onHomeTextClick}
            >
              Home
            </div>
            <b
              className="relative [text-decoration:underline] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"
              onClick={onPrenotaTextClick}
            >
              Prenota
            </b>
            <div
              className="relative font-medium [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"
              onClick={onContattaciTextClick}
            >
              Contattaci
            </div>
            <div
              className="relative [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] cursor-pointer"
              onClick={onAreaPersonaleTextClick}
            >
              <p className="m-0">Area</p>
              <p className="m-0">personale</p>
            </div>
          </nav>
          <div className="w-[17.863rem] !m-[0] absolute top-[0rem] left-[0rem] bg-gray-100 flex flex-col items-start justify-start py-[0rem] px-[3.125rem] box-border z-[1]">
            <img
              className="w-[17.313rem] relative rounded-t-none rounded-b-31xl h-[9.25rem] object-cover"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
        </header>
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit flex items-center justify-center h-[8rem] shrink-0">
          Dettagli prenotazione
        </h1>
        <main className="self-stretch flex flex-col items-center justify-center py-[0rem] px-[6.25rem] gap-[7.062rem] text-center text-[4rem] text-gray-100 font-montserrat">
          <button
            className="cursor-pointer [border:none] p-0 bg-darkblue self-stretch rounded-31xl flex flex-col items-center justify-center"
            autoFocus={true}
            onClick={onAddCameraClick}
          >
            <div className="w-[107.5rem] relative text-[6rem] font-semibold font-montserrat text-white whitespace-pre-wrap text-center flex items-center justify-center h-[16.5rem] shrink-0">
              + Aggiungi una camera
            </div>
          </button>
          <LISTACAMERE1 />
          <div className="self-stretch relative font-semibold flex items-center justify-center h-[5.75rem] shrink-0">
            Costo totale : 2000000$
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[6.25rem]">
            <button
              className="cursor-pointer [border:none] py-[0rem] px-[2.5rem] bg-burlywood flex-1 rounded-31xl flex flex-col items-center justify-center"
              autoFocus={true}
              onClick={openPrenotazioneEffettuataPopup}
            >
              <b className="self-stretch relative text-[3.313rem] flex font-montserrat text-white text-center items-center justify-center h-[12.188rem] shrink-0">
                Conferma prenotazione
              </b>
            </button>
            <button
              className="cursor-pointer py-[0rem] px-[2.5rem] bg-white flex-1 rounded-31xl flex flex-col items-center justify-center border-[5px] border-solid border-navy-100"
              autoFocus={true}
            >
              <b className="self-stretch relative text-[3.313rem] flex font-montserrat text-navy-100 text-center items-center justify-center h-[12.188rem] shrink-0">
                Cancella prenotazione
              </b>
            </button>
          </div>
        </main>
        <Footer
          hotelCalifornia="/hotel-california@2x.png"
          lOGO1="/logo-11@2x.png"
          propLeft="calc(50% - 0.5px)"
          propRight="0.875rem"
          propRight1="3.188rem"
          propLeft1="2.125rem"
        />
      </div>
      {isPrenotazioneEffettuataPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePrenotazioneEffettuataPopup}
        >
          <PrenotazioneEffettuata onClose={closePrenotazioneEffettuataPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default DettagliPrenotazione;
