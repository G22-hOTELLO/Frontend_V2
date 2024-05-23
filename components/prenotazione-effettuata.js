const PrenotazioneEffettuata = ({ className = "", onClose }) => {
  return (
    <div
      className={`w-[66.563rem] relative bg-gray-200 h-[50.75rem] overflow-hidden max-w-full max-h-full text-center text-[4.375rem] text-navy-100 font-montserrat ${className}`}
    >
      <div className="absolute top-[1.375rem] left-[2.313rem] w-[61.938rem] h-[35.125rem] overflow-hidden">
        <div className="absolute top-[0rem] left-[0rem] w-[61.938rem] h-[35.125rem] overflow-hidden">
          <div className="absolute top-[0rem] left-[0rem] w-[60.875rem] h-[35.125rem]">
            <div className="absolute top-[1.063rem] left-[4.563rem] shadow-[2px_10px_4px_5px_rgba(0,_0,_0,_0.25)] rounded-44xl bg-gray-100 w-[56.313rem] h-[34.063rem]" />
            <div className="absolute top-[0rem] left-[0rem] shadow-[10px_10px_4px_rgba(0,_0,_0,_0.25)] rounded-79xl bg-white box-border w-[59.188rem] h-[34.063rem] border-[3px] border-solid border-navy-100" />
          </div>
        </div>
        <div className="absolute top-[3.188rem] left-[1.75rem] w-[58.438rem] h-[3.188rem] overflow-hidden">
          <img
            className="absolute top-[-1.25rem] left-[0.75rem] rounded-81xl w-[13.063rem] h-[5.688rem] object-cover"
            alt=""
            src="/logo-12@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[4.563rem] left-[2.313rem] w-[61.938rem] h-[27.688rem] overflow-hidden">
        <div
          className="absolute top-[22.813rem] left-[22rem] w-[17.938rem] h-[4.875rem] overflow-hidden cursor-pointer"
          onClick={onClose}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0rem] left-[0rem] w-[14.956rem] h-[4.875rem]">
            <div className="absolute top-[0.244rem] left-[0.019rem] rounded-mini bg-navy-100 w-[14.938rem] h-[4.631rem]" />
            <div className="absolute top-[0rem] left-[0rem] text-[2.5rem] font-semibold font-montserrat text-white text-center flex items-center justify-center w-[14.956rem] h-[4.875rem]">
              OK
            </div>
          </button>
        </div>
        <div className="absolute top-[0rem] left-[0rem] w-[61.938rem] h-[23.375rem] overflow-hidden">
          <img
            className="absolute top-[0rem] left-[25.563rem] w-[10.813rem] h-[8.125rem] overflow-hidden"
            alt=""
            src="/frame.svg"
          />
          <div className="absolute top-[5.625rem] left-[0rem] w-[61.938rem] h-[17.75rem] overflow-hidden">
            <h1 className="m-0 absolute top-[0rem] left-[0rem] text-inherit font-bold font-inherit flex items-center w-[59.188rem] h-[17.75rem]">
              <span className="w-full">
                <p className="m-0">Prenotazione</p>
                <p className="m-0">effettuata con successo</p>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

PrenotazioneEffettuata.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default PrenotazioneEffettuata;
