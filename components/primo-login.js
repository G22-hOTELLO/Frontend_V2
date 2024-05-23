const PrimoLogin = ({ className = "", onClose }) => {
  return (
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
      <h1 className="m-0 absolute top-[6.813rem] left-[9.75rem] text-inherit font-bold font-inherit flex items-center justify-center w-[44.313rem] h-[6rem]">
        Primo login
      </h1>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[35.563rem] left-[11.125rem] w-[44.188rem] h-[4.875rem]">
        <div className="absolute top-[0.244rem] left-[0.063rem] rounded-mini bg-navy-100 w-[44.125rem] h-[4.631rem]" />
        <div className="absolute top-[0rem] left-[0rem] text-[2.5rem] font-semibold font-montserrat text-white text-center flex items-center justify-center w-[44.188rem] h-[4.875rem]">
          Accedi
        </div>
      </button>
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
      <div className="absolute top-[20.75rem] left-[11.188rem] w-[44.188rem] h-[4.875rem]">
        <div className="absolute h-[97.44%] w-full top-[2.56%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
        <img
          className="absolute h-[64.1%] w-[7.07%] top-[16.67%] right-[90.95%] bottom-[19.23%] left-[1.98%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
          alt=""
          src="/key-alt.svg"
        />
        <input
          className="[border:none] [outline:none] font-medium font-montserrat text-[2rem] bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
          placeholder="Password"
          type="password"
        />
      </div>
      <div className="absolute top-[28.313rem] left-[11.188rem] w-[44.188rem] h-[4.875rem]">
        <div className="absolute h-[97.44%] w-full top-[2.56%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
        <img
          className="absolute top-[0.813rem] left-[0.875rem] w-[3.125rem] h-[3.125rem]"
          alt=""
          src="/group-85.svg"
        />
        <input
          className="[border:none] [outline:none] font-medium font-montserrat text-[2rem] bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
          placeholder="Conferma password"
          type="password"
        />
      </div>
      <p className="m-0 absolute top-[14.375rem] left-[10.375rem] text-[1.25rem] font-medium text-black flex items-center justify-center w-[45rem] h-[4.813rem]">
        Stai effettuando il primo login, per motivi di sicurezza è necessario
        cambiare la password.
      </p>
    </div>
  );
};

PrimoLogin.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default PrimoLogin;
