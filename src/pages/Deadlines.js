import { useState } from "react";
import Layout from "../components/Layout";

function Deadlines() {
  const [task, setTask] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [deadlines, setDeadlines] = useState([]);

  const addDeadline = () => {
    if (!task || !subject || !date) return;

    const newDeadline = {
      task,
      subject,
      date,
    };

    setDeadlines([newDeadline, ...deadlines]);
    setTask("");
    setSubject("");
    setDate("");
  };

  const deleteDeadline = (index) => {
    const updated = deadlines.filter((_, i) => i !== index);
    setDeadlines(updated);
  };

  return (
    <Layout>
      <h1>Deadlines</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <button onClick={addDeadline}>Add</button>
      </div>

      {deadlines.length === 0 && <p>No deadlines yet</p>}

      {deadlines.map((item, index) => {
        // 🔥 FIXED DATE LOGIC
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const dueDate = new Date(item.date);
        dueDate.setHours(0, 0, 0, 0);

        const diffTime = dueDate.getTime() - today.getTime();
        const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

        return (
          <div
            key={index}
            style={{
              background: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
          >
            <h3>{item.task}</h3>
            <p><strong>Subject:</strong> {item.subject}</p>
            <p><strong>Due:</strong> {item.date}</p>

            {diffDays > 0 ? (
              <p>{diffDays} days left </p>
            ) : diffDays === 0 ? (
              <p>Due today </p>
            ) : (
              <p style={{ color: "red" }}>Overdue ❗</p>
            )}

            <button onClick={() => deleteDeadline(index)}>
               Delete
            </button>
          </div>
        );
      })}
    </Layout>
  );
}

export default Deadlines;