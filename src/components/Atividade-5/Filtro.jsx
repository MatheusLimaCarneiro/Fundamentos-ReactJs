/*
5. Filtro de Lista: Crie um componente que renderiza uma lista de nomes. Adicione um campo de entrada para filtrar os nomes com base no texto digitado. Use useState para controlar o valor do filtro e map para exibir apenas os itens que correspondem ao filtro. Desafio: ignore maiúsculas e minúsculas ao filtrar.
*/

import { useState } from "react";
import styles from "./Filtro.module.css";

export function Filtro() {
  const [names, setNames] = useState([
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Matheus",
    "Jaques",
    "Edu",
    "Henry",
  ]);
  const [filterText, setFilterText] = useState("");

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filtrar nomes"
        className={styles.input}
      />
      <ul className={styles.lista}>
        {filteredNames.map((name) => (
          <li key={name} className={styles.listItem}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
