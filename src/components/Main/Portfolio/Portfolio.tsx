import { Splide, SplideSlide } from "@splidejs/react-splide";
import Fade from "react-reveal/Fade";

import styles from "./Portfolio.module.scss";
import "@splidejs/react-splide/css";

// import avers1 from "./../../../assets/images/projects/avers1.webp";
// import avers2 from "./../../../assets/images/projects/avers2.webp";
// import avers3 from "./../../../assets/images/projects/avers3.webp";
// import avers4 from "./../../../assets/images/projects/avers4.webp";
// import avers5 from "./../../../assets/images/projects/avers5.webp";
// import avers6 from "./../../../assets/images/projects/avers6.webp";
// import aversThumbnail from "./../../../assets/images/projects/avers-thumbnail.webp";
import clotifyThumbnail from "./../../../assets/images/projects/clotify-thumbnail.webp";
import clotify1 from "./../../../assets/images/projects/clotify1.webp";
import cloon1 from "./../../../assets/images/projects/cloon1.webp";
import cloon2 from "./../../../assets/images/projects/cloon2.webp";
import cloon3 from "./../../../assets/images/projects/cloon3.webp";
import cloonThumbnail from "./../../../assets/images/projects/cloon-thumbnail.webp";
import poker1 from "./../../../assets/images/projects/poker1.webp";
import pokerThumbnail from "./../../../assets/images/projects/poker-thumbnail.webp";
import weather1 from "./../../../assets/images/projects/weather1.webp";
import weather2 from "./../../../assets/images/projects/weather2.webp";
import weather3 from "./../../../assets/images/projects/weather3.webp";
import weather4 from "./../../../assets/images/projects/weather4.webp";
import weatherThumbnail from "./../../../assets/images/projects/weather-thumbnail.webp";
import mangaplanet1 from "./../../../assets/images/projects/mangaplanet1.webp";
import mangaplanet2 from "./../../../assets/images/projects/mangaplanet2.webp";
import mangaplanet3 from "./../../../assets/images/projects/mangaplanet3.webp";
import mangaplanet4 from "./../../../assets/images/projects/mangaplanet4.webp";
import mangaplanetThumbnail from "./../../../assets/images/projects/mangaplanet-thumbnail.webp";
import pacman1 from "./../../../assets/images/projects/pacman1.webp";
import pacmanThumbnail from "./../../../assets/images/projects/pacman-thumbnail.webp";

import ProjectCard from "../../UI/ProjectCard/ProjectCard";

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="projekty">
      <Fade bottom duration={650}>
        <h2 className="section-heading">
          Moje <span>wyróżnione</span> projekty
        </h2>
      </Fade>
      <div className={styles.porfolio_slider}>
        <Splide
          options={{
            perPage: 3,
            perMove: 1,
            pagination: false,
            rewind: true,
            breakpoints: {
              950: {
                perPage: 2,
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
              name="Clotify"
              images={[clotifyThumbnail, clotify1]}
              description="Klon spotify'a. Użytkownik posiada możliwość odsłuchiwania muzyki, dodawania najlepszych albumów i piosenek do ulubionych, przeglądania profili innych użytkownik. 
              \n \n
              Podczas odsłuchiwania piosenek użytkownik ma możliwość przyciszania, zatrzymywania utworu i korzystania z historii.
              "
              technologies={["React", "Redux", "React Router"]}
              githubUrl="https://github.com/Kulizon/Clotify"
            ></ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard
              name="MangaPlanet"
              images={[
                mangaplanetThumbnail,
                mangaplanet1,
                mangaplanet2,
                mangaplanet3,
                mangaplanet4,
              ]}
              description="Strona przeznaczona dla fanów mang. Użytkownik posiada do dyspozycji wiele narzędzi ułatwiających czytanie, między innymi:  wyszukiwanie mang po nazwie, dodawanie do ulubionych, do listy “na później”, do przeczytanych, pisanie i czytanie recenzji, a także komentarzy do poszczególnych rozdziałów.
              \n \n
              Na stronie głównej generowane są propozycje mang według różnych kategori. Użytkownik posiada również wolną rękę w dostosowywaniu swojej nazwy, zdjęcie profilowego i zdjęcia w tle. Posiada możliwość przeglądania kont innych czytelników i śledzić ich działania.
              \n \n
              Na stronie czytelniczej odwiedzający ma możliwość powiększenia i pomniejszenia paneli, zmiany ich jakości, a także przełączenia pomiędzy różnym ułożeniem skanów stron. "
              technologies={[
                "React",
                "Redux",
                "Typescript",
                "Strapi",
                "React Router",
              ]}
              githubUrl="https://github.com/Kulizon/MangaPlanet-Front"
            ></ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard
              name="Cloon"
              images={[cloonThumbnail, cloon1, cloon2, cloon3]}
              description="Aplikacja podobna do “Omegle”, jednak odwiedzający może nie tylko dołączyć do losowego pokoju, ale również stworzyć swój własny lub dołączyć do konkretnego, więc równie dobrze może ona służyć do komunikacji podobnej jak w aplikacji ”Zoom”, czy ”Google Meet”.
              \n \n
              Użytkownik ma możliwość wyciszenia i wyłączenia kamery zarówno swojej, jak i użytkownika, z którym jest połączony. Ponadto każdy pokój posiada swój chat oraz koło fortuny, w którym użytkownicy mogą dodawać i usuwać własne opcje."
              technologies={[
                "React",
                "Redux",
                "Typescript",
                "Node.js",
                "Socket.IO",
                "Express",
                "WebRTC",
                "React Router",
              ]}
              githubUrl="https://github.com/Kulizon/Cloon"
            ></ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard
              name="Weather.IO"
              images={[
                weatherThumbnail,
                weather1,
                weather2,
                weather3,
                weather4,
              ]}
              description="Prosta i szybka aplikacja służącą do sprawdzania pogody w dowolnej, wpisanej przez użytkownika lokalizacji. Powstała przy użyciu popularnego OpenWeather API i była jedną z pierwszych z stworzonych przeze mnie aplikacji w frameworku React. 
              \n \n Po wpisaniu wybranego adresu generowana jest aktualna pogoda oraz prognoza na następny tydzień. Odwiedzający posiada możliwość zmiany lokalizacji i preferowanej jednostki temperatury w dowolnym momencie."
              technologies={["React", "Redux", "React Router"]}
              githubUrl="https://github.com/Kulizon/WeatherApp"
            ></ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard
              name="TexasHoldem"
              images={[pokerThumbnail, poker1]}
              description="Jest to gra pokerowa w modelu Texas Holdem. Użytkownik posiada możliwość gry z komputerem, które podejmuje decyzję zależnie od posiadanych kart oraz tych już wyłożonych na stole, a także kwoty, do jakiej musi podbić.
              \n \n
              Gracz może zmianiać domyślne wartości, takie jak: ilość przeciwników, balans na start, a także prędkość, z jaką gra komputer."
              technologies={["React", "Redux", "Typescript"]}
              githubUrl="https://github.com/Kulizon/TexasHoldem"
            ></ProjectCard>
          </SplideSlide>
          <SplideSlide>
            <ProjectCard
              name="Pacman"
              images={[pacmanThumbnail, pacman1]}
              description="Pacman napisany w języku C w ramach projektu zaliczeniowego na studiach. Projekt wykorzystuje bibliotekę graficzną SDL."
              technologies={["C", "SDL"]}
              githubUrl="https://github.com/Kulizon/PacMan"
            ></ProjectCard>
          </SplideSlide>
          {/* <SplideSlide>
            <ProjectCard
              name="Avers"
              images={[aversThumbnail, avers1, avers2, avers3, avers4, avers5, avers6]}
              description="Komercyjna strona dla firmy projektowej. Posiada dwie proste zakładki, w których znajduje się między innymi galeria zdjęć oraz mapa, która funkcjonuje przy pomocy API Google Maps. Projekt graficzny wykonany całkowicie przeze mnie."
              technologies={["React", "Typescript", "React Router"]}
              githubUrl=""
            ></ProjectCard>
          </SplideSlide> */}
        </Splide>
      </div>
    </section>
  );
};

export default Portfolio;
