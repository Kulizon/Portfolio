import styles from "./IconButton.module.scss";

const IconButton = (props: { icon: any; onClick: () => void }) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.icon}
    </button>
  );
};

export default IconButton;
