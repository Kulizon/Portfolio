import { Splide, SplideSlide } from "@splidejs/react-splide";
import Fade from "react-reveal/Fade";
import React from "react";

import styles from "./CommercialPortfolio.module.scss";
import "@splidejs/react-splide/css";

import avers1 from "./../../../assets/images/projects/avers1.webp";
import avers2 from "./../../../assets/images/projects/avers2.webp";
import avers3 from "./../../../assets/images/projects/avers3.webp";
import avers4 from "./../../../assets/images/projects/avers4.webp";
import avers5 from "./../../../assets/images/projects/avers5.webp";
import avers6 from "./../../../assets/images/projects/avers6.webp";
import aversThumbnail from "./../../../assets/images/projects/avers-thumbnail.webp";
import dohouse1 from "./../../../assets/images/projects/dohouse1.webp";
import dohouse2 from "./../../../assets/images/projects/dohouse2.webp";
import dohouse3 from "./../../../assets/images/projects/dohouse3.webp";
import dohouse4 from "./../../../assets/images/projects/dohouse4.webp";
import dohouse5 from "./../../../assets/images/projects/dohouse5.webp";
import dohouse6 from "./../../../assets/images/projects/dohouse6.webp";
import dohouseThumbnail from "./../../../assets/images/projects/dohouse-thumbnail.webp";
import liceum1 from "./../../../assets/images/projects/liceum1.webp";
import liceumThumbnail from "./../../../assets/images/projects/liceum-thumbnail.webp";

import ProjectCard from "../../UI/ProjectCard/ProjectCard";

const CommercialPortfolio = () => {
  return (
    <section
      className={styles["commercial-portfolio"]}
      id="komercyjne-projekty"
    >
      <Fade bottom duration={650}>
        <h2 className="section-heading">
          Moje <span>komercyjne</span> projekty
        </h2>
      </Fade>
      <div className={styles.porfolio_slider}>
        <Splide
          options={{
            perPage: 3,
            perMove: 1,
            pagination: false,
            rewind: true,
            arrows: false, // narazie 3 projekty, więc bez sensu
            drag: false,
            breakpoints: {
              950: {
                perPage: 2,
                arrows: true,
                drag: true,
              },
              650: {
                perPage: 1,
                padding: "16px",
                arrows: false,
              },
            },
          }}
        >
          <SplideSlide>
            <ProjectCard
              name="Avers"
              images={[
                aversThumbnail,
                avers1,
                avers2,
                avers3,
                avers4,
                avers5,
                avers6,
              ]}
              description="Komercyjna strona dla firmy projektowej. Posiada dwie proste zakładki, w których znajduje się między innymi galeria zdjęć oraz mapa, która funkcjonuje przy pomocy API Google Maps. Projekt graficzny wykonany całkowicie przeze mnie."
              technologies={["React", "Typescript", "React Router"]}
              githubUrl="hide"
            ></ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard
              name="DoHouse"
              images={[
                dohouseThumbnail,
                dohouse1,
                dohouse2,
                dohouse3,
                dohouse4,
                dohouse5,
                dohouse6,
              ]}
              description="Sklep dla firmy zajmującej się sprzedażą pościeli, prześcieradeł, poduszek i innych tekstyliów. Użytkownik ma możliwość: dodawania produktów do koszyka i listy życzeń, przeglądania artykułów po różnych kategoriach, utworzenia konta i śledzenia postępów zamówienia.
              \n \n
              Strona powstała przy użyciu Wordpress’a oraz wtyczki Woocommerce, która znacząco ułatwia zarządzanie sklepem dla właściciela strony. Dodawanie produktów, zarządzanie magazynem, odbieranie zamówień, przyjmowanie płatności i utrzymywanie kontaktu z klientem, dzięki przejrzystemu panelowi administracyjnemu CMS, nie sprawi problemów, nawet dla początkujących. "
              technologies={["Wordpress", "Woocommerce"]}
              githubUrl="hide"
            ></ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard
              name="Liceum Ogólnokształcące w Końskich"
              images={[liceumThumbnail, liceum1]}
              description="Strona Liceum Ogólnokształcącego znajdującego się w Końskich. Miałem przyjemność być częścią zespołu, który ją przeprojektował i unowocześnił, a następnie zarządzał w latach 2020-2022.
              \n \n
              Strona posiada blog, na którym redaktorzy, dzięki prostemu w użyciu panelowi administracyjnemu CMS, publikują aktualności związane z życiem szkoły oraz ogłoszenia dla uczniów i rodziców.
              \n \n
              Aktualnie strona została zaprojektowana i jest prowadzona przez innego ucznia szkoły."
              technologies={["Wordpress"]}
              githubUrl="hide"
            ></ProjectCard>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default CommercialPortfolio;
