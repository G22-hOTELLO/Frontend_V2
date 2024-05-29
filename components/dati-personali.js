import { useMemo } from "react";

const DatiPersonali = ({
  className = "",
  nomeRequired,
  cognomeRequired,
  dataDiNascitaRequired,
  telefonoRequired,
  emailRequired,
  dataDiNascitaTextDecorationColor,
}) => {
  const dataDiNascitaStyle = useMemo(() => {
    return {
      textDecorationColor: dataDiNascitaTextDecorationColor,
    };
  }, [dataDiNascitaTextDecorationColor]);

  return (
    <section
      className={`self-stretch h-[76.563rem] flex flex-col items-center justify-center relative gap-[0.625rem] z-[2] text-center text-[4rem] text-navy-100 font-montserrat ${className}`}
    >
      <div className="w-[66.938rem] relative h-[65.119rem] z-[0]">
        <div className="absolute top-[2.05rem] left-[5.019rem] shadow-[2px_10px_4px_5px_rgba(0,_0,_0,_0.25)] rounded-44xl bg-gray-100 box-border w-[61.919rem] h-[63.069rem] border-[3px] border-solid border-gray-100" />
        <div className="absolute top-[0rem] left-[0rem] shadow-[10px_10px_4px_rgba(0,_0,_0,_0.25)] rounded-79xl bg-white box-border w-[65.081rem] h-[63.069rem] border-[3px] border-solid border-gray-100" />
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[26.063rem] absolute !m-[0] top-[calc(50%_+_215px)] left-[calc(50%_-_479px)] h-[6.338rem] z-[1]"
        autoFocus={true}
      >
        <div className="absolute top-[calc(50%_-_49.4px)] left-[calc(50%_-_207.1px)] rounded-mini bg-gainsboro-200 box-border w-[25.975rem] h-[6.256rem] border-[4px] border-solid border-navy-100" />
        <div className="absolute top-[calc(50%_-_50.7px)] left-[calc(50%_-_208.5px)] text-[2.5rem] font-semibold font-montserrat text-black text-center flex items-center justify-center w-[26.063rem] h-[6.338rem]">
          Cambia password
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[27.188rem] absolute !m-[0] top-[calc(50%_+_215px)] left-[calc(50%_-_0px)] h-[6.338rem] z-[2]"
        autoFocus={true}
      >
        <div className="absolute top-[calc(50%_-_49.4px)] left-[calc(50%_-_217.5px)] rounded-mini bg-gainsboro-200 box-border w-[27.175rem] h-[6.256rem] border-[4px] border-solid border-navy-100" />
        <div className="absolute top-[calc(50%_-_50.7px)] left-[calc(50%_-_212.2px)] text-[2.5rem] font-semibold font-montserrat text-black text-center flex items-center justify-center w-[26.856rem] h-[6.313rem]">
          Elimina account
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] w-[25.75rem] absolute !m-[0] top-[calc(50%_+_329px)] left-[calc(50%_-_235px)] h-[6.313rem] z-[3]"
        autoFocus={true}
      >
        <div className="absolute top-[calc(50%_-_45.4px)] left-[calc(50%_-_205.4px)] rounded-mini bg-navy-100 w-[25.713rem] h-[5.994rem]" />
        <div className="absolute top-[calc(50%_-_50.5px)] left-[calc(50%_-_206px)] text-[2.5rem] font-semibold font-montserrat text-white text-center flex items-center justify-center w-[25.75rem] h-[6.313rem]">
          Salva modifiche
        </div>
      </button>
      <div className="w-[65.375rem] !m-[0] absolute top-[calc(50%_-_432px)] left-[calc(50%_-_540px)] h-[39.625rem] flex flex-col items-center justify-center gap-[1.25rem] z-[4]">
        <div className="w-[57.75rem] relative h-[6.544rem]">
          <div className="absolute h-[97.42%] w-full top-[2.58%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <img
            className="absolute h-[64.95%] w-[7.07%] top-[18.15%] right-[90.95%] bottom-[16.91%] left-[1.98%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
            alt=""
            src="/user-box.svg"
          />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-[2rem] bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Nome"
            type="text"
            required={nomeRequired}
          />
        </div>
        <div className="w-[57.75rem] relative h-[6.456rem]">
          <div className="absolute h-[97.39%] w-full top-[2.61%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <img
            className="absolute h-[64.96%] w-[7.07%] top-[18.2%] right-[90.95%] bottom-[16.84%] left-[1.98%] max-w-full overflow-hidden max-h-full opacity-[0.5]"
            alt=""
            src="/user-box1.svg"
          />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-[2rem] bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Cognome"
            type="text"
            required={cognomeRequired}
          />
        </div>
        <div className="w-[57.75rem] relative h-[6.456rem]">
          <div className="absolute h-[97.39%] w-full top-[2.61%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <img
            className="absolute top-[0.813rem] left-[0.875rem] w-[3.125rem] h-[3.125rem]"
            alt=""
            src="/group-84.svg"
          />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-[2rem] bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Data di nascita"
            type="date"
            required={dataDiNascitaRequired}
            style={dataDiNascitaStyle}
          />
        </div>
        <div className="w-[57.75rem] relative h-[6.456rem]">
          <div className="absolute h-[97.39%] w-full top-[2.61%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <img
            className="absolute h-[64.09%] w-[7.07%] top-[16.65%] right-[90.95%] bottom-[19.26%] left-[1.98%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-831.svg"
          />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-[2rem] bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Telefono"
            type="tel"
            required={telefonoRequired}
          />
        </div>
        <div className="w-[57.75rem] relative h-[6.544rem]">
          <div className="absolute h-[97.42%] w-full top-[2.58%] right-[0%] bottom-[0%] left-[0%] rounded-mini bg-gainsboro-100" />
          <input
            className="[border:none] [outline:none] font-medium font-montserrat text-[2rem] bg-[transparent] absolute h-full w-[86.56%] top-[0%] left-[11.46%] text-darkslategray-100 text-left flex items-center"
            placeholder="Email"
            type="email"
            required={emailRequired}
          />
          <img
            className="absolute h-[68.48%] w-[7.07%] top-[16.71%] right-[91.8%] bottom-[14.8%] left-[1.14%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/ictwotonemail2.svg"
          />
        </div>
      </div>
      <h1
        className="!m-[0] w-[56.438rem] absolute top-[calc(50%_-_504px)] left-[calc(50%_-_468px)] text-inherit font-bold font-inherit flex items-center justify-center h-[5.563rem] shrink-0 z-[5]"
        id="title"
      >{`Area personale `}</h1>
    </section>
  );
};

DatiPersonali.propTypes = {
  className: PropTypes.string,
  nomeRequired: PropTypes.bool,
  cognomeRequired: PropTypes.bool,
  dataDiNascitaRequired: PropTypes.bool,
  telefonoRequired: PropTypes.bool,
  emailRequired: PropTypes.bool,

  /** Style props */
  dataDiNascitaTextDecorationColor: PropTypes.any,
};

export default DatiPersonali;
