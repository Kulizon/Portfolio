import { useState } from "react";

import styles from "./Menu.module.scss";

import GithubIcon from "./../../assets/icons/menu/GithubIcon";
import MessageIcon from "./../../assets/icons/menu/MessageIcon";
import ProjectsIcon from "./../../assets/icons/menu/ProjectsIcon";
import NinjaIcon from "./../../assets/icons/menu/NinjaIcon";
import HouseIcon from "./../../assets/icons/menu/HouseIcon";

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div className={`${styles.menu} ${!isMenuVisible ? styles["menu-hidden"] : ""}`}>
      <button
        className={`hamburger ${isMenuVisible ? "opened" : ""}`}
        onClick={() => setIsMenuVisible((prevState) => !prevState)}
      >
        <svg viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <div>
        <a href="#strona-główna">
          <HouseIcon></HouseIcon>Strona Główna
        </a>
        <a href="#o-mnie">
          <NinjaIcon></NinjaIcon>O mnie
        </a>
        <a href="#projekty">
          <ProjectsIcon></ProjectsIcon>Projekty
        </a>
        <a href="#kontakt">
          <MessageIcon></MessageIcon>Kontakt
        </a>

        <a href="https://github.com/Kulizon" rel="noreferrer" target="_blank">
          <GithubIcon></GithubIcon> Github
        </a>
      </div>
    </div>
  );
};

export default Menu;
