import { useCallback } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const HomeScreen1 = ({ className = "" }) => {
  const router = useRouter();

  const onBottonePrenotaClick = useCallback(() => {
    router.push("/prenotazione");
  }, [router]);

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

  return (
    <main
      className={`self-stretch h-[67.5rem] flex flex-col items-center justify-start relative bg-[url('/homescreen1@3x.png')] bg-cover bg-no-repeat bg-[top] mix-blend-normal z-[1] ${className}`}
      id="defaultHome"
    >
      <section className="w-[60.25rem] !m-[0] absolute top-[calc(50%_-_253px)] left-[calc(50%_-_482px)] rounded-92xl bg-gray-500 h-[34.938rem] flex flex-col items-center justify-center py-[0.625rem] px-[1.75rem] box-border gap-[2rem] z-[0] text-center text-[6rem] text-white font-montserrat">
        <h1 className="m-0 relative text-inherit font-bold font-inherit">
          <p className="m-0">Benvenuto</p>
          <p className="m-0">%username%</p>
        </h1>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[22.938rem] relative h-[9.25rem]"
          autoFocus={true}
          id="goToPrenotazione"
          onClick={onBottonePrenotaClick}
        >
          <img
            className="absolute h-full top-[0%] right-[0rem] bottom-[0%] rounded-12xs max-h-full w-[22.938rem]"
            alt=""
            src="/rectangle-109011.svg"
          />
          <img
            className="absolute h-[48.31%] w-[21.25%] top-[26.35%] right-[71.66%] bottom-[25.34%] left-[7.08%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/calendario-img.svg"
          />
          <b className="absolute h-full top-[0%] right-[0rem] text-[2.063rem] flex font-montserrat text-white text-center items-center w-[16.438rem]">
            <span className="w-full">
              <p className="m-0">Prenota una</p>
              <p className="m-0">stanza</p>
            </span>
          </b>
        </button>
      </section>
      <header className="self-stretch h-[9.25rem] flex flex-row items-center justify-between relative z-[1]">
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
            onClick={onPrenotaTextClick}
          >
            Prenota
          </div>
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
    </main>
  );
};

HomeScreen1.propTypes = {
  className: PropTypes.string,
};

export default HomeScreen1;
