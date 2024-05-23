import { useState, useCallback } from "react";
import PrimoLogin from "./primo-login";
import PortalPopup from "./portal-popup";
import PropTypes from "prop-types";

const NotificaMail = ({ className = "", onClose }) => {
  const [isPrimoLoginPopupOpen, setPrimoLoginPopupOpen] = useState(false);

  const openPrimoLoginPopup = useCallback(() => {
    setPrimoLoginPopupOpen(true);
  }, []);

  const closePrimoLoginPopup = useCallback(() => {
    setPrimoLoginPopupOpen(false);
  }, []);

  return (
    <>
      <div
        className={`w-[66.563rem] relative bg-gray-200 h-[50.75rem] overflow-hidden max-w-full max-h-full text-center text-[4.375rem] text-navy-100 font-montserrat ${className}`}
      >
        <div className="absolute top-[2.813rem] left-[6.875rem] shadow-[2px_10px_4px_5px_rgba(0,_0,_0,_0.25)] rounded-44xl bg-gray-100 w-[56.313rem] h-[44.5rem]" />
        <div className="absolute top-[1.375rem] left-[2.313rem] shadow-[10px_10px_4px_rgba(0,_0,_0,_0.25)] rounded-79xl bg-white w-[59.188rem] h-[44.5rem]" />
        <img
          className="absolute top-[2.25rem] left-[4.25rem] rounded-81xl w-[13.063rem] h-[5.688rem] object-cover"
          alt=""
          src="/logo-12@2x.png"
        />
        <h1 className="m-0 absolute top-[10.125rem] left-[2.313rem] text-inherit font-bold font-inherit flex items-center justify-center w-[59.188rem] h-[6rem]">
          Verifica email
        </h1>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[35.563rem] left-[9.813rem] w-[44.188rem] h-[4.875rem]"
          onClick={openPrimoLoginPopup}
        >
          <div className="absolute top-[0.244rem] left-[0.063rem] rounded-mini bg-navy-100 w-[44.125rem] h-[4.631rem]" />
          <div className="absolute top-[0rem] left-[0rem] text-[2.5rem] font-semibold font-montserrat text-white text-center flex items-center justify-center w-[44.188rem] h-[4.875rem]">
            Accedi
          </div>
        </button>
        <p className="m-0 absolute top-[17.813rem] left-[9.875rem] text-[2.5rem] flex items-center w-[44.188rem] h-[16.063rem] text-black">
          <span className="w-full">
            <span className="font-medium">{`Ti abbiamo inviato una mail con una `}</span>
            <b className="text-navy-100">password monouso</b>
            <span className="font-medium">
              , usala per verificare la tua mail e accedere al tuo account.
            </span>
          </span>
        </p>
        <button
          className="cursor-pointer [border:none] py-[0.687rem] px-[0.75rem] bg-[transparent] absolute top-[2.688rem] left-[54rem] flex flex-col items-start justify-start gap-[0.625rem]"
          onClick={onClose}
        >
          <div className="w-[4.719rem] relative rounded-[50%] box-border h-[4.3rem] z-[0] border-[5px] border-solid border-darkslategray-200" />
          <img
            className="w-[24.97%] absolute !m-[0] h-[24.94%] top-[37.53%] right-[37.57%] bottom-[37.53%] left-[37.46%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector-1121.svg"
          />
          <img
            className="w-[24.97%] absolute !m-[0] h-[24.94%] top-[37.53%] right-[37.57%] bottom-[37.53%] left-[37.46%] max-w-full overflow-hidden max-h-full object-contain z-[2]"
            alt=""
            src="/vector-1131.svg"
          />
        </button>
      </div>
      {isPrimoLoginPopupOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closePrimoLoginPopup}>
          <PrimoLogin onClose={closePrimoLoginPopup} />
        </PortalPopup>
      )}
    </>
  );
};

NotificaMail.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default NotificaMail;
