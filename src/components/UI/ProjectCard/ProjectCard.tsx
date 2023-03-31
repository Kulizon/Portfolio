import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import Fade from "react-reveal/Fade";

import styles from "./ProjectCard.module.scss";
import projectSplash from "./../../../assets/images/other/project-splash.svg";
import GoBackIcon from "../../../assets/icons/portfolio/GoBackIcon";

import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";

const ProjectCard = (props: {
  images: string[];
  name: string;
  description: string;
  technologies: string[];
  // liveUrl: string;
  githubUrl: string;
}) => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const shortDescription = props.description.split(" ").slice(0, 18).join(" ");

  return (
    <>
      {isHighlighted &&
        createPortal(
          <>
            <Fade duration={300}>
              <div
                className="backdrop"
                onClick={() => setIsHighlighted(false)}
              ></div>
            </Fade>
            <Fade bottom duration={450}>
              <div className={styles["highlighted-card"]}>
                <div className={styles["top-container"]}>
                  <div className={styles["highlighted-card__background"]}>
                    <div></div>
                    <img src={projectSplash} alt="Tło"></img>
                  </div>
                  <IconButton
                    icon={<GoBackIcon></GoBackIcon>}
                    onClick={() => setIsHighlighted(false)}
                  ></IconButton>
                  <h4>{props.name}</h4>
                  <div>
                    {/* <Button link={props.liveUrl} newPage disabled={!props.liveUrl}>
                      Live
                    </Button> */}
                    {props.githubUrl !== "hide" && (
                      <Button
                        link={props.githubUrl}
                        newPage
                        disabled={!props.githubUrl}
                      >
                        Github
                      </Button>
                    )}
                  </div>
                </div>
                <div className={styles["bottom-container"]}>
                  <p>
                    {props.description.split("\\n").map((item, idx) => {
                      return (
                        <React.Fragment key={idx}>
                          {item}
                          <br />
                        </React.Fragment>
                      );
                    })}
                  </p>
                  <p className={styles["highlighted-card__text__technologies"]}>
                    {props.technologies.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </p>
                  {props.images.slice(1).map((imageSrc) => (
                    <img src={imageSrc} key={imageSrc} alt={`${props.name}`} />
                  ))}
                </div>
              </div>
            </Fade>
          </>,
          document.getElementById("root")!
        )}

      <div className={styles.card}>
        <img
          src={props.images[0]}
          alt={`${props.name}`}
          onClick={() => {
            console.log(123);

            setIsHighlighted(true);
          }}
        />
        <div className={styles.card__text}>
          <div>
            <h4>{props.name}</h4>
            <p className={styles.card__text__technologies}>
              {props.technologies.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </p>
            <p>
              {shortDescription}...{" "}
              <span onClick={() => setIsHighlighted(true)}>Więcej</span>
            </p>
          </div>
          <div>
            {/* <Button link={props.liveUrl} newPage disabled={!props.liveUrl}>
              Live
            </Button> */}
            {props.githubUrl !== "hide" && (
              <Button
                link={props.githubUrl}
                newPage
                disabled={!props.githubUrl}
              >
                Github
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
