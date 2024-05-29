import { useCallback } from "react";
import { useRouter } from "next/router";
import DatiPersonali from "../components/dati-personali";
import PrenotazioneRecap from "../components/prenotazione-recap";
import Footer from "../components/footer";

const AreaPersonale = () => {
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

  return (
    <div className="w-full relative bg-white h-[167.688rem] overflow-hidden flex flex-col items-center justify-between text-center text-[5rem] text-navy-100 font-montserrat">
      <header className="self-stretch bg-gray-100 h-[10.875rem] flex flex-row items-center justify-between relative z-[0]">
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
          <div
            className="relative font-medium [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"
            onClick={onPrenotaTextClick}
          >
            Prenota
          </div>
          <div
            className="relative font-medium [text-shadow:0.5px_0_0_#fff,_0_0.5px_0_#fff,_-0.5px_0_0_#fff,_0_-0.5px_0_#fff] cursor-pointer"
            onClick={onContattaciTextClick}
          >
            Contattaci
          </div>
          <div
            className="relative [text-decoration:underline] [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] cursor-pointer"
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
      <div className="!m-[0] absolute top-[10.875rem] left-[0rem] flex flex-col items-center justify-start z-[1]">
        <img
          className="w-[120rem] relative h-[82.938rem] object-contain"
          alt=""
          src="/vector5.svg"
        />
      </div>
      <DatiPersonali
        nomeRequired
        cognomeRequired
        dataDiNascitaRequired
        telefonoRequired
        emailRequired
        dataDiNascitaTextDecorationColor="gray"
      />
      <h2 className="m-0 self-stretch relative text-inherit font-bold font-inherit flex items-center justify-center h-[8rem] shrink-0 z-[3]">
        Prenotazioni effettuate
      </h2>
      <PrenotazioneRecap />
      <Footer
        hotelCalifornia="/hotel-california@2x.png"
        lOGO1="/logo-11@2x.png"
        propLeft="calc(50% - 0.5px)"
        propRight="0.875rem"
        propRight1="3.188rem"
        propLeft1="2.125rem"
      />
    </div>
  );
};

export default AreaPersonale;
