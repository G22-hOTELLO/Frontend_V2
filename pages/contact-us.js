import { useCallback } from "react";
import { useRouter } from "next/router";
import Input from "../components/input";
import Footer from "../components/footer";

const ContactUs = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/h-o-m-e-utente-loggato");
  }, [router]);

  const onContattaciTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onAreaPersonaleTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white flex flex-col items-center justify-center">
      <header className="self-stretch bg-gray-100 h-[9.25rem] flex flex-row items-center justify-between relative">
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
          <b
            className="relative [text-decoration:underline] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"
            onClick={onContattaciTextClick}
          >
            Contattaci
          </b>
          <div
            className="relative [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] cursor-pointer"
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
      <section className="self-stretch bg-gray-100 flex flex-col items-center justify-start text-center text-[5rem] text-white font-montserrat">
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-inherit inline-block h-[9.125rem] shrink-0">
          CONTATTACI
        </h1>
      </section>
      <section className="self-stretch bg-white flex flex-col items-start justify-center py-[0rem] px-[6.25rem] gap-[3.125rem] text-left text-[3.75rem] text-gray-100 font-adamina">
        <div className="self-stretch flex flex-col items-start justify-center p-[0.625rem] gap-[3.125rem]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <h2 className="m-0 w-[40rem] relative text-inherit font-normal font-inherit inline-block">
              SIAMO QUI PER TE
            </h2>
            <p className="m-0 self-stretch relative text-[1.875rem] font-montserrat [text-shadow:0.3px_0_0_#000,_0_0.3px_0_#000,_-0.3px_0_0_#000,_0_-0.3px_0_#000]">
              <span className="block">
                 Qui all’Hotel California, non prendiamo seriamente le richieste
                dei nostri clienti. CI impegnamo sempre al 100% per ignorare
                completamente ogni vostro inutile capriccio, tanto i soldi ce li
                date lo stesso.
              </span>
              <span className="block">
                Per qualunque dubbio non esitate a contattare la nostra mail,
                tanto non vi rispondiamo.
              </span>
              <span className="block">
                Potete provare anche a chiamare, ma vi ignoreremo lo stesso.
              </span>
            </p>
          </div>
          <p className="m-0 self-stretch flex flex-row items-center justify-start gap-[1.125rem] text-[2rem] font-montserrat">
            <div className="flex-1 relative font-medium">
              <p className="[margin-block-start:0] [margin-block-end:10px]">
                9641 Sunset Blvd, Beverly Hills,
              </p>
              <p className="m-0">CA 90210</p>
            </div>
            <div className="flex-1 relative [text-shadow:0.5px_0_0_#14274a,_0_0.5px_0_#14274a,_-0.5px_0_0_#14274a,_0_-0.5px_0_#14274a]">
              <p className="[margin-block-start:0] [margin-block-end:10px]">{`Phone: +39 123 456 7890 `}</p>
              <p className="m-0">Email: hotelcalifornia@email.com</p>
            </div>
          </p>
        </div>
        <Input />
      </section>
      <Footer
        hotelCalifornia="/hotel-california2@2x.png"
        lOGO1="/logo-13@2x.png"
      />
    </div>
  );
};

export default ContactUs;
