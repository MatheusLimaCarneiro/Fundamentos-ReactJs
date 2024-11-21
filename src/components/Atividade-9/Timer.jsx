import { useState, useEffect } from "react";
import styles from "./Timer.module.css";

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [inputSeconds, setInputSeconds] = useState("");
  const [inputMinutes, setInputMinutes] = useState("");
  const [inputHours, setInputHours] = useState("");
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (isTimerRunning) {
      const timerInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else if (seconds === 0 && minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else if (seconds === 0 && minutes === 0 && hours > 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else if (seconds === 0 && minutes === 0 && hours === 0) {
          clearInterval(timerInterval);
          setIsTimerRunning(false);
          alert("Tempo acabou!");
        }
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [isTimerRunning, seconds, minutes, hours]);

  const handleStart = () => {
    setIsTimerRunning(true);
  };

  const handlePause = () => {
    setIsTimerRunning(false);
  };

  const handleReset = () => {
    setIsTimerRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const handleSetTime = () => {
    setHours(Number(inputHours) || 0);
    setMinutes(Number(inputMinutes) || 0);
    setSeconds(Number(inputSeconds) || 0);
  };

  return (
    <div className={styles.timerContainer}>
      <h1 className={styles.timerDisplay}>
        {hours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Horas"
          value={inputHours}
          onChange={(e) => setInputHours(e.target.value)}
          className={styles.timerInput}
        />
        <input
          type="text"
          placeholder="Minutos"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
          className={styles.timerInput}
        />
        <input
          type="text"
          placeholder="Segundos"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(e.target.value)}
          className={styles.timerInput}
        />
        <button
          onClick={handleSetTime}
          disabled={isTimerRunning}
          className={styles.timerButton}>
          Definir Tempo
        </button>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={handleStart}
          disabled={isTimerRunning}
          className={`${styles.timerButton} ${
            isTimerRunning ? styles.disabled : ""
          }`}>
          Iniciar
        </button>
        <button
          onClick={handlePause}
          disabled={!isTimerRunning}
          className={`${styles.timerButton} ${
            !isTimerRunning ? styles.disabled : ""
          }`}>
          Pausar
        </button>
        <button onClick={handleReset} className={styles.timerButton}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}
