import styles from "./Input.module.scss";

const Input = (props: {
  name?: string;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  type: "text" | "number" | "textarea" | "email";
}) => {
  return props.type === "textarea" ? (
    <textarea
      name={props.name}
      defaultValue={props.defaultValue}
      className={`${styles.input} ${styles.textarea} ${props.className}`}
      placeholder={props.placeholder}
      rows={10}
    ></textarea>
  ) : (
    <input
      name={props.name}
      defaultValue={props.defaultValue}
      className={`${styles.input} ${props.className}`}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};

export default Input;
