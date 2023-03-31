import { ReactElement } from "react";
import styles from "./TypeCard.module.scss";

const TypeCard = (props: { title: string; text: string; icon: ReactElement }) => {
  return (
    <div className={styles.card}>
      <div>
        {props.icon}
        <h4>{props.title}</h4>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default TypeCard;
