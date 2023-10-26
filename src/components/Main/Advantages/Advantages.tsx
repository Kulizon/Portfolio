import Fade from "react-reveal/Fade";
import React from "react";

import styles from "./Advantages.module.scss";

import AdvantageCard from "./AdvantageCard/AdvantageCard";
import ClientIcon from "../../../assets/icons/advantages/ClientIcon";
import RocketIcon from "../../../assets/icons/advantages/RocketIcon";
import CartIcon from "../../../assets/icons/advantages/CartIcon";

const Adventages = () => {
  return (
    <section className={styles.advantages}>
      <Fade bottom duration={650}>
        <h2 className="section-heading">Zalety posiadania strony internetowej</h2>
      </Fade>

      <div>
        <Fade bottom duration={1000} delay={650}>
          <AdvantageCard
            icon={<ClientIcon></ClientIcon>}
            title="Zdobądź klientów"
            text="Twoja własna strona internetowa pozwoli dotrzeć Ci do większego grona osób i efektywniej zachęci do skorzystania z oferowanych usług. W aktualnych czasach znaczna część marketingu odbywa się online. Nie pozwól, żeby Twoja firma została w tyle i zaistnij w internecie!"
          ></AdvantageCard>
        </Fade>
        <Fade bottom duration={1000} delay={250}>
          <AdvantageCard
            icon={<RocketIcon></RocketIcon>}
            title="Rozwiń swoją markę"
            text="W dzisiejszych czasach strona internetowa jest niemal niezbędna dla ambitnej firmy. Kreuje ona opinie potencjalnych klientów, pozwala przekazać najważniejsze informacje o Twojej działalności i wywrzeć konkretny, pożądany efekt na odbiorcach."
          ></AdvantageCard>
        </Fade>
        <Fade bottom duration={1000} delay={0}>
          <AdvantageCard
            icon={<CartIcon></CartIcon>}
            title="Zwiększ sprzedaż"
            text="Własna firmowa strona internetowa zagwarantuje Ci dotarcie do większego grona odbiorców. Niezależnie od rodzaju produktu lub usług oferowanych przez Twoją firmę, prowadzona przez Ciebie sprzedaż wzrośnie i dzięki sklepowi internetowemu może odbywać się nawet w większości przez internet."
          ></AdvantageCard>
        </Fade>
      </div>
    </section>
  );
};

export default Adventages;
