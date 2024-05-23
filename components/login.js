import { useState, useCallback } from "react";
import PrimoLogin from "./primo-login";
import PortalPopup from "./portal-popup";
import Registrazione from "./registrazione";
import CloseRing from "./close-ring";
import PropTypes from "prop-types";

const Login = ({ className = "", onClose }) => {
  const [isPrimoLoginPopupOpen, setPrimoLoginPopupOpen] = useState(false);
  const [isRegistrazionePopupOpen, setRegistrazionePopupOpen] = useState(false);

  const openPrimoLoginPopup = useCallback(() => {
    setPrimoLoginPopupOpen(true);
  }, []);

  const closePrimoLoginPopup = useCallback(() => {
    setPrimoLoginPopupOpen(false);
  }, []);

  const openRegistrazionePopup = useCallback(() => {
    setRegistrazionePopupOpen(true);
  }, []);

  const closeRegistrazionePopup = useCallback(() => {
    setRegistrazionePopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={`w-[1065px] bg-gray-200 h-[812px] overflow-hidden max-w-full max-h-full text-center text-51xl text-navy-100 font-montserrat ${className}`}
      >
        <div className="absolute top-[22px] left-[37px] w-[974px] h-[735px]">
          <div className="absolute top-[23px] left-[73px] shadow-[2px_10px_4px_5px_rgba(0,_0,_0,_0.25)] rounded-44xl bg-gray-100 w-[901px] h-[712px]" />
          <div className="absolute top-[0px] left-[0px] shadow-[10px_10px_4px_rgba(0,_0,_0,_0.25)] rounded-79xl bg-white w-[947px] h-[712px]" />
        </div>
        <img
          className="absolute top-[36px] left-[68px] rounded-81xl w-[209px] h-[91px] object-cover"
          alt=""
          src="/logo-12@2x.png"
        />
        <h1 className="m-0 absolute top-[109px] left-[324px] text-inherit font-bold font-inherit flex items-center justify-center w-[373px] h-24">
          Login
        </h1>
        <div
          className="absolute top-[576px] left-[157px] text-xl flex items-center w-[707px] h-[35px] cursor-pointer text-black"
          onClick={openPrimoLoginPopup}
        >
          <span className="w-full">
            <span>{`Clicca `}</span>
            <i className="[text-decoration:underline] text-blue">qui</i>
            <span>
              <span className="text-gray-400">{` `}</span>
              <span>per reimpostare la password</span>
            </span>
          </span>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[639px] left-[313px] w-[395px] h-[76px]"
          id="NewAccountBtn"
          onClick={openRegistrazionePopup}
        >
          <div className="absolute top-[1px] left-[1.4px] rounded-mini bg-gainsboro-200 box-border w-[393.6px] h-[75px] border-[4px] border-solid border-navy-100" />
          <div className="absolute top-[0px] left-[0px] text-5xl font-semibold font-montserrat text-black text-center flex items-center justify-center w-[395px] h-[76px]">
            Registra un nuovo account
          </div>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[483px] left-[157px] w-[707px] h-[78px]"
          id="SigInBtn"
        >
          <div className="absolute top-[3.9px] left-[1px] rounded-mini bg-navy-100 w-[706px] h-[74.1px]" />
          <div className="absolute top-[0px] left-[0px] text-21xl font-semibold font-montserrat text-white text-center flex items-center justify-center w-[707px] h-[78px]">
            Accedi
          </div>
        </button>
        <CloseRing
          vector112="/vector-1121.svg"
          vector113="/vector-1131.svg"
          onClose={onClose}
        />
        <div className="absolute top-[246px] left-[158px] w-[707px] h-[78px]">
          <div className="absolute h-[97.44%] w-full top-[2.56%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-13xl bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Email"
            type="text"
          />
          <img
            className="absolute h-[68.46%] w-[7.07%] top-[16.67%] right-[91.8%] bottom-[14.87%] left-[1.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/ictwotonemail.svg"
          />
        </div>
        <div className="absolute top-[364px] left-[158px] w-[707px] h-[78px]">
          <div className="absolute h-[97.44%] w-full top-[2.56%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <img
            className="absolute h-[64.1%] w-[7.07%] top-[16.67%] right-[90.95%] bottom-[19.23%] left-[1.98%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
            loading="eager"
            alt=""
            src="/key-alt.svg"
          />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-13xl bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Password"
            type="password"
          />
        </div>
      </div>
      {isPrimoLoginPopupOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePrimoLoginPopup}>
          <PrimoLogin onClose={closePrimoLoginPopup} />
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

Login.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Login;
