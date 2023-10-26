import Fade from "react-reveal/Fade";
import React from "react";

import styles from "./Offer.module.scss";

import OfferContainer from "./OfferContainer/OfferContainer";
import StarIcon from "../../../assets/icons/offer/StarIcon";
import PenIcon from "../../../assets/icons/offer/PenIcon";
import ClockIcon from "../../../assets/icons/offer/ClockIcon";
import MagnifierIcon from "../../../assets/icons/offer/MagnifierIcon";

const Offer = () => {
  return (
    <section className={styles.offer}>
      <Fade bottom duration={650}>
        <h2 className="section-heading">Wybierz mnie, a zagwarantuję Ci</h2>
      </Fade>
      <div>
        <Fade left duration={800} delay={100}>
          <OfferContainer
            icon={<StarIcon></StarIcon>}
            title="JAKOŚĆ"
            text="W mojej pracy przykładam ogromną uwagę nawet do najdrobniejszych szczegółów, które wpływają na pozytywny odbiór przez każdego odwiedzającego."
          ></OfferContainer>
        </Fade>
        <Fade right duration={800} delay={200}>
          <OfferContainer
            icon={<PenIcon></PenIcon>}
            title="UNIKALNE TREŚCI"
            text="Do każdej realizacji podchodzę indywidualnie, każdy projekt graficzny jest wyjątkowy. Twój pomysł i idea jest najważniejsza, więc zawsze istnieje możliwość naniesienia zmian na moją wizję strony."
          ></OfferContainer>
        </Fade>
        <Fade left duration={800} delay={300}>
          <OfferContainer
            icon={<ClockIcon></ClockIcon>}
            title="SZYBKĄ REALIZACJĘ"
            text="Gwarantuje zorganizowanie i terminowość, co pozytywnie wpłynie na szybki czas realizacji strony internetowej. Nie będziesz musiał długo czekać na rozwój Twojej firmy."
          ></OfferContainer>
        </Fade>
        <Fade right duration={800} delay={400}>
          <OfferContainer
            icon={<MagnifierIcon></MagnifierIcon>}
            title="OPTYMALIZACJĘ SEO"
            text="Tworzone przeze mnie strony są zoptymalizowane pod wyszukiwarki internetowe, co przyczynia się do znajdowania ich na wysokich miejscach w wynikach wyszukiwania."
          ></OfferContainer>
        </Fade>
      </div>
    </section>
  );
};

export default Offer;
