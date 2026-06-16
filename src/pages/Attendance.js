import { useState } from "react";
import Layout from "../components/Layout";

function Attendance() {
  const [total, setTotal] = useState("");
  const [attended, setAttended] = useState("");

  const totalNum = Number(total);
  const attendedNum = Number(attended);

  const percentage =
    totalNum > 0 ? ((attendedNum / totalNum) * 100).toFixed(2) : 0;

  // Bunk calculation (assuming 75% required)
  let bunk = 0;
  if (totalNum > 0 && attendedNum > 0) {
    bunk = Math.floor(
      (attendedNum / 0.75) - totalNum
    );
  }

  return (
    <Layout>
      <h1>Attendance Tracker</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="number"
          placeholder="Total Classes"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />

        <input
          type="number"
          placeholder="Classes Attended"
          value={attended}
          onChange={(e) => setAttended(e.target.value)}
          style={{ marginRight: "10px", padding: "8px" }}
        />
      </div>

      {total && attended && (
        <div>
          <h2>Attendance: {percentage}%</h2>

          <h3>
            Status:{" "}
            {percentage >= 75 ? "Good ✅" : "Low ⚠️"}
          </h3>

          {percentage >= 75 ? (
            <p>You can bunk {bunk} classes 😏</p>
          ) : (
            <p>Attend more classes to reach 75%</p>
          )}
        </div>
      )}
    </Layout>
  );
}

export default Attendance;