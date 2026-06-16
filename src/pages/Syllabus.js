import { useState } from "react";
import Layout from "../components/Layout";

function Syllabus() {
  const [subject, setSubject] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [resources, setResources] = useState([]);

  const addResource = () => {
    if (!subject || !title || !link) return;

    const newItem = {
      subject,
      title,
      link,
    };

    setResources([newItem, ...resources]);

    setSubject("");
    setTitle("");
    setLink("");
  };

  // group by subject
  const grouped = resources.reduce((acc, item) => {
    if (!acc[item.subject]) {
      acc[item.subject] = [];
    }
    acc[item.subject].push(item);
    return acc;
  }, {});

  return (
    <Layout>
      <h1>Syllabus / Resources</h1>

      {/* ADD FORM */}
      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          placeholder="Title (e.g. Unit 1 Notes)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          placeholder="Paste PDF / Drive link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={{ marginRight: "10px", padding: "8px", width: "250px" }}
        />

        <button onClick={addResource}>Add</button>
      </div>

      {/* DISPLAY */}
      {Object.keys(grouped).length === 0 && <p>No resources added</p>}

      {Object.keys(grouped).map((subj, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{subj}</h2>

          {grouped[subj].map((item, i) => (
            <div
              key={i}
              style={{
                background: "white",
                padding: "12px",
                marginBottom: "8px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
              }}
            >
              <p>{item.title}</p>

              <button
                onClick={() => window.open(item.link, "_blank")}
                style={{ marginRight: "10px" }}
              >
                📄 View
              </button>
            </div>
          ))}
        </div>
      ))}
    </Layout>
  );
}

export default Syllabus;