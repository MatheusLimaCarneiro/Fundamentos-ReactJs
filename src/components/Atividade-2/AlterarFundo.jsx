/*
2. Alteração de Cor de Fundo: Crie um componente onde o fundo da página muda de cor cada vez que o usuário clica em um botão.
Use useState para armazenar a cor atual e useEffect para atualizar o estilo do fundo com cada mudança. Desafio: gere cores aleatórias sempre que o botão for clicado.
*/

import { useState, useEffect } from "react";
import styles from "./AlterarFundo.module.css";

export function AlterarFundo() {
  const [buttonColor, setButtonColor] = useState("#ffffff");

  const generateRandomColor = () => {
    const hexDigits = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexDigits.length);
      color += hexDigits[randomIndex];
    }
    return color;
  };

  useEffect(() => {
    document.body.style.backgroundColor = buttonColor;
  }, [buttonColor]);

  return (
    <div>
      <button
        onClick={() => setButtonColor(generateRandomColor())}
        className={styles["change-color-btn"]}>
        Alterar Cor
      </button>
    </div>
  );
}
