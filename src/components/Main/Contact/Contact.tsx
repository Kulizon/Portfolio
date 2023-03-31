import emailjs from "@emailjs/browser";
import { useState } from "react";
import Fade from "react-reveal/Fade";

import styles from "./Contact.module.scss";
import contactSplash from "./../../../assets/images/other/contact-splash.svg";
import planeImage from "./../../../assets/images/other/plane.svg";

import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const SERVICE_ID = "service_ytlak6p";
const TEMPLATE_ID = "template_5pv3kk6";
const KEY = "yqtaUBRyEdKwXSFBL";

const cleanValues = (e: any) => {
  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";
  e.target[3].value = "";
};

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ message: string; status: "OK" | "ERROR" }>();

  const submitHandler = (e: any) => {
    e.preventDefault();
    setMessage(undefined);
    if (isLoading) return;

    const name = e.target[0].value;
    const email = e.target[1].value;
    const subject = e.target[2].value;
    const message = e.target[3].value;

    if (!name || !email || !subject || !message) {
      setMessage({ message: "Wypełnij wszystkie pola!", status: "ERROR" });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage({ message: "Email jest nieprawidłowy!", status: "ERROR" });
      return;
    }

    setIsLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, KEY).then(
      (result) => {
        console.log(result.text);
        setMessage({ status: "OK", message: "Wysłano!" });
        setIsLoading(false);
        cleanValues(e);
      },
      (error) => {
        console.log(error.text);
        setMessage({ status: "ERROR", message: `Coś poszło nie tak... Błąd: ${error.text}` });
        setIsLoading(false);
        cleanValues(e);
      }
    );
  };

  return (
    <section className={styles.contact} id="kontakt">
      <div className={styles.contact__form}>
        <Fade bottom duration={650}>
          <h2 className="section-heading">Skontaktuj się ze mną</h2>
        </Fade>
        <form onSubmit={submitHandler}>
          <Input type="text" name="from_name" placeholder="Imię..."></Input>
          <Input type="email" name="email" placeholder="Email..."></Input>
          <Input type="text" name="subject" placeholder="Temat..."></Input>
          <Input type="textarea" name="message" placeholder="Twoja wiadomość..."></Input>
          {isLoading && (
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
          {message && <p className={message.status === "OK" ? styles.positive : ""}>{message.message}</p>}
          <Fade bottom duration={650}>
            <Button>Wyślij</Button>
          </Fade>
        </form>
      </div>
      <div className={styles.contact__image}>
        <img src={contactSplash} alt="Tło" />
        <img src={planeImage} alt="Papierowy samolot" />
      </div>
    </section>
  );
};

export default Contact;
