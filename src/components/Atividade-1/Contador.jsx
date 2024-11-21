import styles from "./Contador.module.css";
import { useState } from "react";

export function Contador() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles["contador-container"]}>
      <h1 className={styles["contador-value"]}>{count}</h1>
      <div className={styles["contador-buttons"]}>
        <button className={styles.incrementar} onClick={handleIncrement}>
          Incrementar
        </button>
        <button className={styles.decrementar} onClick={handleDecrement}>
          Decrementar
        </button>
        <button className={styles.zerar} onClick={() => setCount(0)}>
          Zerar
        </button>
      </div>
    </div>
  );
}
