import Fade from "react-reveal/Fade";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import styles from "./AboutMe.module.scss";
import wave from "./../../../assets/images/other/wave.svg";

import githubImage from "./../../../assets/images/technologies/github.png";
import typescriptImage from "./../../../assets/images/technologies/typescript.png";
import adobeXdImage from "./../../../assets/images/technologies/adobeXd.png";
import firebaseImage from "./../../../assets/images/technologies/firebase.png";
import mongodbImage from "./../../../assets/images/technologies/mongodb.png";
import reactImage from "./../../../assets/images/technologies/react.png";
import reduxImage from "./../../../assets/images/technologies/redux.png";
import sassImage from "./../../../assets/images/technologies/sass.png";
import socketIOImage from "./../../../assets/images/technologies/socketIO.png";
import nodejsImage from "./../../../assets/images/technologies/nodejs.png";

import Button from "../../UI/Button/Button";

const AboutMe = () => {
  return (
    <section className={styles.about} id="o-mnie">
      <img src={wave} alt="Tło fala" />
      <img src={wave} alt="Tło fala" />
      <div className={styles.about__text}>
        <Fade bottom duration={650}>
          <h2 className="section-heading">Troszkę o mnie</h2>
        </Fade>
        <Fade bottom duration={800}>
          <p>
            Nazywam się Kacper i jestem studentem informatyki stosowanej na
            Uniwersytecie Jagiellońskim. Tworzeniem stron internetowych i
            programowaniem pasjonuję się już od trzech lat. Stanowi to moje
            główne hobby, jednakże wolny czas spędzam również na grach
            komputerowych.
            <br></br>
            <br></br>
            Technologią, z która spędzam najwięcej czasu jest React i liczę, że
            moje pierwsze doświadczenie komercyjne będzie z nim związane.
            <br></br>
            <br></br>
            Zachęcam do przejrzenia moich realizacji i odwiedzenia mojego konta{" "}
            <a
              href="https://github.com/Kulizon"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            .
          </p>
        </Fade>
        <Fade bottom duration={650}>
          <Button link="#kontakt">Kontakt</Button>
        </Fade>
      </div>
      <div className={styles.about__technologies}>
        <Splide
          extensions={{ AutoScroll }}
          options={{
            perPage: 3,
            perMove: 1,
            type: "loop",
            pagination: false,
            arrows: false,
            direction: "ttb",
            height: "400px",
            drag: false,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              speed: 0.5,
            },
            breakpoints: {
              950: {
                direction: "",
                height: "110px",
                width: "70vw",
              },
              675: {
                gap: "20px",
              },
              350: {
                width: "80vw",
              },
            },
          }}
        >
          <SplideSlide>
            <img src={reactImage} alt="React" />
          </SplideSlide>
          <SplideSlide>
            <img src={reduxImage} alt="Redux" />
          </SplideSlide>
          <SplideSlide>
            <img src={typescriptImage} alt="Typescript" />
          </SplideSlide>
          <SplideSlide>
            <img src={sassImage} alt="Sass" />
          </SplideSlide>
          <SplideSlide>
            <img src={socketIOImage} alt="socket.IO" />
          </SplideSlide>
        </Splide>
        <Splide
          extensions={{ AutoScroll }}
          options={{
            perPage: 3,
            perMove: 1,
            type: "loop",
            pagination: false,
            arrows: false,
            direction: "ttb",
            height: "400px",
            drag: false,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              speed: 0.75,
            },
            breakpoints: {
              950: {
                direction: "",
                height: "110px",
                width: "70vw",
              },
              675: {
                gap: "20px",
              },
              350: {
                width: "80vw",
              },
            },
          }}
        >
          <SplideSlide>
            <img src={nodejsImage} alt="NodeJS" />
          </SplideSlide>
          <SplideSlide>
            <img src={mongodbImage} alt="MongoDB" />
          </SplideSlide>
          <SplideSlide>
            <img src={githubImage} alt="Github" />
          </SplideSlide>
          <SplideSlide>
            <img src={adobeXdImage} alt="adobeXd" />
          </SplideSlide>
          <SplideSlide>
            <img src={firebaseImage} alt="Firebase" />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default AboutMe;
