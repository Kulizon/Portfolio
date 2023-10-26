import { ReactElement } from "react";
import React from "react";
import styles from "./OfferContainer.module.scss";

const OfferContainer = (props: { icon: ReactElement; title: string; text: string }) => {
  return (
    <div className={styles.card}>
      {props.icon}
      <div>
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default OfferContainer;
