/*
3. Lista de Tarefas: Crie um aplicativo de lista de tarefas (to-do list) onde o usuário pode adicionar e remover tarefas. Use useState para armazenar a lista de tarefas e renderize cada tarefa como um item de lista. Desafio: permita que o usuário marque as tarefas como concluídas e filtre para ver apenas as tarefas pendentes.
*/

import { useState } from "react";
import styles from "./ToDoList.module.css";

export function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className={styles.todoApp}>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              className={task.completed ? `${styles.completed}` : ""}
              onClick={() => toggleTaskCompletion(task.id)}>
              {task.text}
            </span>
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
