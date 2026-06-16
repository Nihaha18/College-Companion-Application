import { useState, useEffect } from "react";
import Layout from "../components/Layout";

function Pomodoro() {
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState("study");
  const [sessions, setSessions] = useState(0);

  const totalTime = mode === "study" ? 1500 : 300;

  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    }

    if (time === 0) {
      setRunning(false);

      if (mode === "study") {
        setSessions((prev) => prev + 1);
        setMode("break");
        setTime(300);
      } else {
        setMode("study");
        setTime(1500);
      }
    }

    return () => clearInterval(timer);
  }, [running, time, mode]);

  const formatTime = () => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const switchMode = (newMode) => {
    setRunning(false);
    setMode(newMode);
    setTime(newMode === "study" ? 1500 : 300);
  };

  const progress = (time / totalTime) * 440;

  return (
    <Layout>
      <div style={styles.container}>

        {/* MODE BUTTONS */}
        <div style={styles.modeButtons}>
          <button
            style={mode === "study" ? styles.activeBtn : styles.btn}
            onClick={() => switchMode("study")}
          >
            Study
          </button>

          <button
            style={mode === "break" ? styles.activeBtn : styles.btn}
            onClick={() => switchMode("break")}
          >
            Break
          </button>
        </div>

        {/* GLOW CLOCK */}
        <div style={{
          ...styles.clock,
          ...(running ? styles.glow : {})
        }}>
          <svg width="250" height="250">
            <circle
              cx="125"
              cy="125"
              r="70"
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="125"
              cy="125"
              r="70"
              stroke="#4f46e5"
              strokeWidth="10"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset={progress}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 1s linear",
                filter: running ? "drop-shadow(0 0 8px #4f46e5)" : "none",
              }}
            />
          </svg>

          <div style={styles.time}>{formatTime()}</div>
        </div>

        {/* CONTROLS */}
        <div style={styles.controls}>
          <button style={styles.mainBtn} onClick={() => setRunning(!running)}>
            {running ? "Pause" : "Start"}
          </button>

          <button style={styles.resetBtn} onClick={() => switchMode(mode)}>
            Reset
          </button>
        </div>

        {/* SESSIONS */}
        <p style={{ marginTop: "20px" }}>
          🔥 Sessions Completed: {sessions}
        </p>

      </div>
    </Layout>
  );
}

const styles = {
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFF3B0",
    borderRadius: "20px",
  },

  modeButtons: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  btn: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    background: "#e5e7eb",
    cursor: "pointer",
  },

  activeBtn: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
  },

  clock: {
    position: "relative",
    width: "250px",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    transition: "all 0.3s ease",
  },

  glow: {
    transform: "scale(1.05)",
    boxShadow: "0 0 25px rgba(79,70,229,0.4)",
    borderRadius: "50%",
  },

  time: {
    position: "absolute",
    fontSize: "32px",
    fontWeight: "bold",
  },

  controls: {
    display: "flex",
    gap: "10px",
  },

  mainBtn: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
  },

  resetBtn: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#9ca3af",
    color: "white",
    cursor: "pointer",
  },
};

export default Pomodoro;