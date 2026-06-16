import { useState } from "react";
import Layout from "../components/Layout";

function Marks() {
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState("");
  const [total, setTotal] = useState("");
  const [data, setData] = useState([]);

  const addMarks = () => {
    if (!subject || !marks || !total) return;

    const percentage = ((marks / total) * 100).toFixed(2);

    const newEntry = {
      subject,
      marks,
      total,
      percentage,
    };

    setData([newEntry, ...data]);

    setSubject("");
    setMarks("");
    setTotal("");
  };

  const deleteEntry = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
  };

  // overall average
  const avg =
    data.length > 0
      ? (
          data.reduce((acc, item) => acc + Number(item.percentage), 0) /
          data.length
        ).toFixed(2)
      : 0;

  return (
    <Layout>
      <h1>Marks Tracker</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          type="number"
          placeholder="Marks"
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          type="number"
          placeholder="Total"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <button onClick={addMarks}>Add</button>
      </div>

      {data.length === 0 && <p>No marks added</p>}

      {data.map((item, index) => (
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
          <h3>{item.subject}</h3>
          <p>{item.marks} / {item.total}</p>
          <p>Percentage: {item.percentage}%</p>

          <p>
            Status:{" "}
            {item.percentage >= 75
              ? "Good "
              : item.percentage >= 50
              ? "Average "
              : "Poor "}
          </p>

          <button onClick={() => deleteEntry(index)}> Delete</button>
        </div>
      ))}

      {data.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Overall Average: {avg}%</h2>
        </div>
      )}
    </Layout>
  );
}

export default Marks;