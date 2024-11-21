/*
6. Formulário de Registro Simples: Crie um formulário com campos de nome, e-mail e senha. Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas. Use useState para armazenar os valores dos campos e exiba a mensagem em um novo componente de boas-vindas.
*/

import { useState } from "react";
import styles from "./Formulario.module.css";

export function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !senha) {
      alert("Todos os campos devem ser preenchidos!");
      return;
    }

    setMensagem(`Boas-vindas, ${nome}! Seu e-mail é ${email}`);

    setNome("");
    setEmail("");
    setSenha("");

    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Formulário de Registro</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Nome:</label>
        <input
          className={styles.input}
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <label className={styles.label}>E-mail:</label>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={styles.label}>Senha:</label>
        <input
          className={styles.input}
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button className={styles.button} type="submit">
          Enviar
        </button>
      </form>

      {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
    </div>
  );
}
