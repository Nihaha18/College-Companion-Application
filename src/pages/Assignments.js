import { useState } from "react";
import Layout from "../components/Layout";

function Assignments() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Layout>
      <h1>Assignments</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter assignment"
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default Assignments;