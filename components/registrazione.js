import { useState, useCallback } from "react";
import Login from "./login";
import PortalPopup from "./portal-popup";
import NotificaMail from "./notifica-mail";
import CloseRing from "./close-ring";
import PropTypes from "prop-types";

const Registrazione = ({ className = "", onClose }) => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [isNotificaMailPopupOpen, setNotificaMailPopupOpen] = useState(false);

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  const openNotificaMailPopup = useCallback(() => {
    setNotificaMailPopupOpen(true);
  }, []);

  const closeNotificaMailPopup = useCallback(() => {
    setNotificaMailPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={`w-[1065px] bg-gray-200 h-[1014px] overflow-hidden max-w-full max-h-full text-center text-51xl text-navy-100 font-montserrat ${className}`}
      >
        <div className="absolute top-[28px] left-[37px] w-[953px] h-[892px]">
          <div className="absolute top-[28px] left-[71.4px] shadow-[2px_10px_4px_5px_rgba(0,_0,_0,_0.25)] rounded-44xl bg-gray-100 w-[881.6px] h-[864px]" />
          <div className="absolute top-[0px] left-[0px] shadow-[10px_10px_4px_rgba(0,_0,_0,_0.25)] rounded-79xl bg-white w-[926.6px] h-[864px]" />
        </div>
        <img
          className="absolute top-[36px] left-[68px] rounded-81xl w-[209px] h-[91px] object-cover"
          alt=""
          src="/logo-12@2x.png"
        />
        <h1 className="m-0 absolute top-[101px] left-[198px] text-inherit font-bold font-inherit flex items-center justify-center w-[604px] h-[87px]">
          Registrazione
        </h1>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[797px] left-[309px] w-[386.5px] h-[68.8px]"
          onClick={openLoginPopup}
        >
          <div className="absolute top-[0.9px] left-[1.3px] rounded-mini bg-gainsboro-200 box-border w-[385.2px] h-[67.8px] border-[4px] border-solid border-navy-100" />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-5xl font-semibold font-montserrat text-black text-center flex items-center justify-center w-[386.5px] h-[68.8px]"
            id="goToLogIn"
          >
            Già iscritto? Clicca qui
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[693.8px] left-[155.4px] w-[691.8px] h-[70.6px]"
          onClick={openNotificaMailPopup}
        >
          <div className="absolute top-[3.6px] left-[1px] rounded-mini bg-navy-100 w-[690.8px] h-[67px]" />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-21xl font-semibold font-montserrat text-white text-center flex items-center justify-center w-[691.8px] h-[70.6px]"
            id="sigUp"
          >
            Registrati
          </button>
        </button>
        <CloseRing
          vector112="/vector-112.svg"
          vector113="/vector-113.svg"
          propLeft="846px"
          propWidth="95px"
          propHeight="85px"
          propWidth1="25.05%"
          propHeight1="25.06%"
          propRight="37.47%"
          propBottom="37.41%"
          propLeft1="37.47%"
          propWidth2="25.05%"
          propHeight2="25.06%"
          propRight1="37.47%"
          propBottom1="37.41%"
          propLeft2="37.47%"
          onClose={onClose}
        />
        <div className="absolute top-[207px] left-[154px] w-[692px] h-[71px]">
          <div className="absolute h-[97.46%] w-full top-[2.54%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <img
            className="absolute h-[64.93%] w-[7.07%] top-[18.17%] right-[90.95%] bottom-[16.9%] left-[1.98%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
            alt=""
            src="/user-box2.svg"
          />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-13xl bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Nome"
            type="text"
          />
        </div>
        <div className="absolute top-[297px] left-[156px] w-[692px] h-[70px]">
          <div className="absolute h-[97.43%] w-full top-[2.57%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <img
            className="absolute h-[65%] w-[7.07%] top-[18.14%] right-[90.95%] bottom-[16.86%] left-[1.98%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
            alt=""
            src="/user-box3.svg"
          />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-13xl bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Cognome"
            type="text"
          />
        </div>
        <div className="absolute top-[476px] left-[156px] w-[692px] h-[70px]">
          <div className="absolute h-[97.43%] w-full top-[2.57%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <img
            className="absolute h-[64.14%] w-[7.07%] top-[16.71%] right-[90.95%] bottom-[19.14%] left-[1.98%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-83.svg"
          />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-13xl bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Telefono"
            type="tel"
          />
        </div>
        <div className="absolute top-[386px] left-[154px] w-[692px] h-[71px]">
          <div className="absolute h-[97.46%] w-full top-[2.54%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-13xl bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Email"
            type="email"
          />
          <img
            className="absolute h-[68.45%] w-[7.07%] top-[16.62%] right-[91.81%] bottom-[14.93%] left-[1.13%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/ictwotonemail1.svg"
          />
        </div>
        <div className="absolute top-[565px] left-[156px] w-[692px] h-[71px]">
          <div className="absolute h-[97.46%] w-full top-[2.54%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <img
            className="absolute top-[13px] left-[14px] w-[50px] h-[50px]"
            alt=""
            src="/group-84.svg"
          />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-13xl bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Data di nascita"
            type="date"
          />
        </div>
      </div>
      {isLoginPopupOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeLoginPopup}>
          <Login onClose={closeLoginPopup} />
        </PortalPopup>
      )}
      {isNotificaMailPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
        >
          <NotificaMail onClose={closeNotificaMailPopup} />
        </PortalPopup>
      )}
    </>
  );
};

Registrazione.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Registrazione;
