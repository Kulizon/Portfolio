import React from "react";
import Fade from "react-reveal/Fade";

import styles from "./CallToAction.module.scss";
import ctaSplash from "./../../../assets/images/other/cta-splash.svg";
import meImage from "./../../../assets/images/other/me.svg";

import Button from "../../UI/Button/Button";

const CallToAction = () => {
  return (
    <section className={styles.cta} id="strona-główna">
      <div className={styles.cta__text}>
        <Fade bottom duration={800}>
          <h6>Cześć, nazywam się...</h6>
        </Fade>
        <Fade bottom duration={650}>
          <h1>Kacper Kula</h1>
        </Fade>
        <Fade bottom duration={800}>
          <p>Zajmuję się programowaniem stron internetowych oraz aplikacji webowych.</p>
        </Fade>
        <Fade bottom duration={650}>
          <div>
            <Button link="#projekty">Portfolio</Button>
            <Button link="#o-mnie" alt>
              O mnie
            </Button>
          </div>
        </Fade>
      </div>
      <div className={styles.cta__image}>
        <img src={ctaSplash} alt="Tło" />
        <img src={meImage} alt="Programista" />
      </div>
    </section>
  );
};

export default CallToAction;
