import { ReactElement } from "react";
import styles from "./AdvantageCard.module.scss";

const AdvantageCard = (props: { icon: ReactElement; title: string; text: string }) => {
  return (
    <div className={styles.card}>
      {props.icon}
      <h4>{props.title}</h4>
      <hr />
      <p>{props.text}</p>
    </div>
  );
};

export default AdvantageCard;
