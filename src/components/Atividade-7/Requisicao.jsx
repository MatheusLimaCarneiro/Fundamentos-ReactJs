/*
7. Aplicação de Requisição de Dados Simples: Crie um componente que exiba uma lista de posts obtidos de uma API pública (como JSONPlaceholder). Use useEffect para fazer a requisição ao carregar o componente e exiba os posts em uma lista. Desafio: adicione um botão para recarregar os dados e um indicador de carregamento enquanto a requisição está sendo feita.
*/

import { useEffect, useState } from "react";
import styles from "./Requisicao.module.css";

export function Requisicao() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Nomes</h1>
      {isLoading ? (
        <div className={styles.loading}>Carregando...</div>
      ) : (
        <ul className={styles.userList}>
          {users.map((user, index) => (
            <li key={index} className={styles.userItem}>
              {user.name.first} {user.name.last}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
