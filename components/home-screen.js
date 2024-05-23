import { useState, useCallback } from "react";
import Login from "./login";
import PortalPopup from "./portal-popup";
import Registrazione from "./registrazione";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const HomeScreen = ({ className = "", frame5AlignContent }) => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isRegistrazionePopupOpen, setRegistrazionePopupOpen] = useState(false);
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/h-o-m-e-utente-loggato");
  }, [router]);

  const onContattaciTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onAreaPersonaleTextClick = useCallback(() => {
    router.push("/area-personale");
  }, [router]);

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  const openRegistrazionePopup = useCallback(() => {
    setRegistrazionePopupOpen(true);
  }, []);

  const closeRegistrazionePopup = useCallback(() => {
    setRegistrazionePopupOpen(false);
  }, []);

  return (
    <>
      <main
        className={`self-stretch h-[67.5rem] flex flex-col items-center justify-start relative bg-[url('/homescreen@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-normal z-[1] ${className}`}
        id="defaultHome"
      >
        <header className="self-stretch h-[9.25rem] flex flex-row items-center justify-between relative z-[0]">
          <nav
            className="!m-[0] w-[54.813rem] absolute top-[1.875rem] right-[0rem] flex flex-row items-center justify-start py-[0rem] px-[4.687rem] box-border gap-[2.75rem] z-[0] text-center text-[2.25rem] text-white font-montserrat"
            id="AnyHomeNavBar"
            Home
            Contattaci
            Staff
          >
            <b
              className="relative [text-decoration:underline] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"
              onClick={onHomeTextClick}
            >
              Home
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
          <div className="w-[17.863rem] !m-[0] absolute top-[0rem] left-[0rem] flex flex-col items-start justify-start py-[0rem] px-[3.125rem] box-border z-[1]">
            <img
              className="w-[17.313rem] relative rounded-t-none rounded-b-31xl h-[9.25rem] object-cover"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
        </header>
        <section className="w-[52.188rem] !m-[0] absolute top-[calc(50%_-_272.5px)] left-[calc(50%_-_418px)] rounded-92xl bg-gray-300 flex flex-row flex-wrap items-center justify-center py-[0.625rem] px-[1.75rem] box-border gap-[2rem] z-[1]">
          <img
            className="w-[48.688rem] relative h-[24.375rem] object-cover"
            alt=""
            src="/hotel-california@2x.png"
          />
          <div className="flex flex-row items-center justify-start gap-[6.25rem]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[13.688rem] relative h-[6.875rem]"
              autoFocus={true}
              id="login"
              onClick={openLoginPopup}
            >
              <img
                className="absolute h-[99.64%] top-[0.27%] right-[0.063rem] bottom-[0.09%] rounded-12xs max-h-full w-[13.625rem]"
                alt=""
                src="/rectangle-1090.svg"
              />
              <b className="absolute h-full top-[0%] right-[-0.006rem] text-[2.063rem] flex font-montserrat text-white text-center items-center justify-center w-[13.675rem]">
                LOGIN
              </b>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] w-[13.688rem] relative h-[6.875rem]"
              autoFocus={true}
              id="login"
              onClick={openRegistrazionePopup}
            >
              <img
                className="absolute h-[99.64%] top-[0.27%] right-[0.063rem] bottom-[0.09%] rounded-12xs max-h-full w-[13.625rem]"
                alt=""
                src="/rectangle-1090.svg"
              />
              <b className="absolute h-full top-[0%] right-[-0.006rem] text-[2.063rem] flex font-montserrat text-white text-center items-center justify-center w-[13.675rem]">
                REGISTER
              </b>
            </button>
          </div>
        </section>
      </main>
      {isLoginPopupOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeLoginPopup}>
          <Login onClose={closeLoginPopup} />
        </PortalPopup>
      )}
      {isRegistrazionePopupOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closeRegistrazionePopup}
        >
          <Registrazione onClose={closeRegistrazionePopup} />
        </PortalPopup>
      )}
    </>
  );
};

HomeScreen.propTypes = {
  className: PropTypes.string,

  /** Style props */
  frame5AlignContent: PropTypes.any,
};

export default HomeScreen;
