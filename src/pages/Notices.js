import { useState } from "react";
import Layout from "../components/Layout";

function Notices() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [notices, setNotices] = useState([]);

  const addNotice = () => {
    if (!title || !message) return;

    const newNotice = {
      title,
      message,
    };

    setNotices([newNotice, ...notices]); // newest on top
    setTitle("");
    setMessage("");
  };

  const deleteNotice = (index) => {
    const updated = notices.filter((_, i) => i !== index);
    setNotices(updated);
  };

  return (
    <Layout>
      <h1>Notices</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Notice Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px" }}
        />

        <textarea
          placeholder="Enter Notice"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ display: "block", marginBottom: "10px", padding: "8px", width: "300px", height: "80px" }}
        />

        <button onClick={addNotice}>Add Notice</button>
      </div>

      <div>
        {notices.length === 0 && <p>No notices yet</p>}

        {notices.map((item, index) => (
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
            <h3>{item.title}</h3>
            <p>{item.message}</p>

            <button onClick={() => deleteNotice(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Notices;