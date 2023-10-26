import React from "react";

import styles from "./Button.module.scss";

const Button = (props: {
  children: any;
  onClick?: (e: any) => void;
  alt?: boolean;
  link?: string;
  className?: string;
  disabled?: boolean;
  newPage?: boolean;
}) => {
  return (
    <a href={props.link} rel={props.newPage ? "noreferrer" : ""} target={props.newPage ? "_blank " : ""}>
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        className={`${styles.button} ${props.alt ? styles.alt : ""} ${props.className}`}
      >
        {props.children}
      </button>
    </a>
  );
};

export default Button;
