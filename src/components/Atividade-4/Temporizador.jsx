/*
4. Temporizador com useEffect: Crie um temporizador que conta o tempo em segundos e exiba na tela. Use useEffect para iniciar o temporizador ao carregar o componente e useState para atualizar o tempo. Desafio: adicione botões para pausar e reiniciar o temporizador.
*/

import { useEffect, useState } from "react";
import styles from "./Temporizador.module.css";

export function Temporizador() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isTimerRunning) {
      intervalId = setInterval(() => {
        setTotalSeconds((prevTotal) => prevTotal + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    console.log(intervalId);
    return () => clearInterval(intervalId);
  }, [isTimerRunning]);

  const resetTimer = () => {
    setTotalSeconds(0);
    setIsTimerRunning(false);
  };

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Temporizador</h1>
      <div className={styles.temporizador}>
        <h3>{String(hours).padStart(2, "0")}</h3>
        <h2>:</h2>
        <h3>{String(minutes).padStart(2, "0")}</h3>
        <h2>:</h2>
        <h3>{String(seconds).padStart(2, "0")}</h3>
      </div>
      <button
        className={styles["btn-temp"]}
        onClick={() => setIsTimerRunning(!isTimerRunning)}>
        {isTimerRunning ? "Pausar" : "Iniciar"}
      </button>
      <button className={styles["btn-temp"]} onClick={resetTimer}>
        Resetar
      </button>
    </div>
  );
}
