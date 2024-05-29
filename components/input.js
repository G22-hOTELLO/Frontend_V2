const Input = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center py-[3.125rem] px-[0rem] text-left text-[2.25rem] text-black font-montserrat ${className}`}
    >
      <div className="self-stretch h-[43.388rem] flex flex-col items-start justify-center py-[1.25rem] px-[0rem] box-border">
        <div className="flex flex-row items-start justify-center gap-[2.687rem]">
          <img
            className="w-[4.181rem] relative h-[5.881rem]"
            alt=""
            src="/vector.svg"
          />
          <h3 className="m-0 w-[43.213rem] relative text-inherit font-medium font-inherit flex items-center h-[7.8rem] shrink-0">
            %Nome_utente%
          </h3>
        </div>
        <textarea className="bg-white [outline:none] self-stretch flex-1 relative border-[2px] border-solid border-gray-800" />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[9.063rem] h-[3.163rem] flex flex-col items-start justify-start relative gap-[0.625rem]">
        <img
          className="w-[9.063rem] relative rounded-12xs h-[3.813rem] z-[0]"
          alt=""
          src="/rectangle-10901.svg"
        />
        <b className="w-full absolute !m-[0] h-[121.15%] top-[0.79%] left-[0%] text-[1.563rem] flex font-montserrat text-white text-center items-center justify-center z-[1]">
          Invia
        </b>
      </button>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
};

export default Input;
