import Tada from "react-reveal/Tada";

import styles from "./ClientZone.module.scss";

const ClientZone = () => {
  return (
    <section className={styles["client-zone"]} id="strefa-klienta">
      <Tada delay={1000}>
        <h2>
          <div>Strefa</div>
          <div>
            <span>Klienta</span>
          </div>
        </h2>
      </Tada>
    </section>
  );
};

export default ClientZone;
