import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import { useRouter } from "next/router";
import Selezione from "../components/selezione";
import Filtri from "../components/filtri";
import Order from "../components/order";
import LISTACAMERE from "../components/l-i-s-t-a-c-a-m-e-r-e";
import Footer from "../components/footer";

const Prenotazione = () => {
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
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-center gap-[3.75rem]">
      <header className="self-stretch bg-gray-100 h-[10.875rem] flex flex-row items-center justify-between relative">
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
            className="relative [text-decoration:underline] font-medium [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] cursor-pointer"
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
            className="relative font-medium [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"
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
      <Selezione />
      <section className="self-stretch h-[7.188rem] flex flex-row items-center justify-start relative gap-[48.875rem] text-left text-[2.25rem] text-black font-montserrat">
        <div className="w-[23rem] absolute !m-[0] top-[-0.187rem] left-[7.25rem] h-[7.313rem] z-[0]">
          <Filtri />
          <div className="absolute top-[0rem] left-[0.063rem] font-semibold flex items-center w-[22.938rem] h-[3.563rem]">
            {" "}
            Filtri
          </div>
        </div>
        <div className="w-[21rem] absolute !m-[0] top-[0rem] right-[6.813rem] h-[7.188rem] z-[1]">
          <Order />
          <div className="absolute top-[0rem] right-[1.75rem] font-semibold flex items-center w-[19.063rem] h-[3.5rem]">
            Ordina per:
          </div>
        </div>
      </section>
      <LISTACAMERE />
      <Footer
        hotelCalifornia="/hotel-california@2x.png"
        lOGO1="/logo-14@2x.png"
        propLeft="calc(50% - 0px)"
        propRight="0.844rem"
        propRight1="3.156rem"
        propLeft1="2.125rem"
      />
    </div>
  );
};

export default Prenotazione;
