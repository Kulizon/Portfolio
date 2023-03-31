import Fade from "react-reveal/Fade";

import styles from "./WebsiteTypes.module.scss";
import wave from "./../../../assets/images/other/wave.svg";

import TypeCard from "./TypeCard/TypeCard";
import GlobeIcon from "../../../assets/icons/website-types/GlobeIcon";
import GearsIcon from "../../../assets/icons/website-types/GearsIcon";
import WordpressIcon from "../../../assets/icons/website-types/WordpressIcon";

const WebsiteTypes = () => {
  return (
    <section className={styles.types}>
      <img src={wave} alt="Tło fala" />
      <img src={wave} alt="Tło fala" />
      <Fade bottom duration={650}>
        <h2 className="section-heading">Co dla Ciebie stworzę</h2>
      </Fade>
      <div>
        <Fade left duration={1000} delay={250}>
          <TypeCard
            title="Strony Statyczne"
            text="Strony statyczne nie zmieniają się, niezależnie kiedy je odwiedzimy. Do stron statycznych należą głównie strony informacyjne, takie jak: strony wizytówki, One Page, Landing Page, Multi Page. Rozwiązanie to sprawdzi się idealnie dla firm chcących rozwinąć swoją markę w internecie."
            icon={<GlobeIcon></GlobeIcon>}
          ></TypeCard>
        </Fade>
        <Fade bottom duration={1000} delay={250}>
          <TypeCard
            title="Blogi i Sklepy Wordpress"
            text="Blogi i sklepy Wordpress posiadają przejrzysty i łatwy w obsłudzę panel CMS, który znacznie ułatwia zarządzenia stroną. 
            Dodawanie nowych treści, takich jak produkty do sklepu, czy też posty na blogu, jest bardzo proste i nie będzie stanowić problemu, nawet dla początkujących."
            icon={<WordpressIcon></WordpressIcon>}
          ></TypeCard>
        </Fade>
        <Fade right duration={1000} delay={250}>
          <TypeCard
            title="Strony Dynamiczne"
            text="Strony dynamiczne są znacznie bardziej zaawansowane niż statyczne. Pozwalają one użytkownikowi na wejście w interakcję i podjęcie konkretnych dla danej strony działań.
            Sklepy internetowe i blogi na Wordpressie to tylko część stron dynamicznych, które dla Ciebie stworzę."
            icon={<GearsIcon></GearsIcon>}
          ></TypeCard>
        </Fade>
      </div>
    </section>
  );
};

export default WebsiteTypes;
