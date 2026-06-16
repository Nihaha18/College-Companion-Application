import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Layout.css";

function Layout({ children }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="layout">

      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="logo">CC</h2>

        <NavLink to="/dashboard" onClick={() => setIsOpen(false)} className="link">🏠 Home</NavLink>
        <NavLink to="/assignments" onClick={() => setIsOpen(false)} className="link">📚 Assignments</NavLink>
        <NavLink to="/attendance" onClick={() => setIsOpen(false)} className="link">📊 Attendance</NavLink>
        <NavLink to="/notices" onClick={() => setIsOpen(false)} className="link">📢 Notices</NavLink>
        <NavLink to="/reminders" onClick={() => setIsOpen(false)} className="link">🔔 Reminders</NavLink>
        <NavLink to="/deadlines" onClick={() => setIsOpen(false)} className="link">📅 Deadlines</NavLink>
        <NavLink to="/marks" onClick={() => setIsOpen(false)} className="link">📈 Marks</NavLink>
        <NavLink to="/syllabus" onClick={() => setIsOpen(false)} className="link">📂 Syllabus</NavLink>
        <NavLink to="/pomodoro" onClick={() => setIsOpen(false)} className="link">⏱ Pomodoro</NavLink>
        <NavLink to="/profile" onClick={() => setIsOpen(false)} className="link">👤 Profile</NavLink>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        <div style={styles.topbar}>
          <span style={styles.menu} onClick={() => setIsOpen(!isOpen)}>☰</span>

          <button style={styles.homeBtn} onClick={() => navigate("/dashboard")}>
            🏠 Dashboard
          </button>

          <button
            style={styles.logoutBtn}
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>

        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    background: "#FFF9E6",
    minHeight: "100vh",
  },

  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(10px)",
  },

  menu: {
    fontSize: "22px",
    cursor: "pointer",
  },

  homeBtn: {
    background: "#A78BFA",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  logoutBtn: {
    background: "#EF4444",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  content: {
    padding: "20px",
  },
};

export default Layout;