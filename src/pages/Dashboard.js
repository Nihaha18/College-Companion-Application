import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString();

  const features = [
    { title: "Assignments", icon: "📚", path: "/assignments" },
    { title: "Attendance", icon: "📊", path: "/attendance" },
    { title: "Notices", icon: "📢", path: "/notices" },
    { title: "Deadlines", icon: "📅", path: "/deadlines" },
    { title: "Marks", icon: "📈", path: "/marks" },
    { title: "Syllabus", icon: "📂", path: "/syllabus" },
    { title: "Reminders", icon: "🔔", path: "/reminders" },
    { title: "Pomodoro", icon: "⏱", path: "/pomodoro" },
  ];

  return (
    <Layout>
      <div style={styles.container}>

        <h2 style={styles.title}>Welcome back 👋</h2>
        <p style={styles.date}>📅 {today}</p>

        {/* FEATURE CARDS */}
        <div style={styles.grid}>
          {features.map((item, index) => (
            <div
              key={index}
              style={styles.card}
              onClick={() => navigate(item.path)}

              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(167,139,250,0.4)";
              }}

              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 20px rgba(167,139,250,0.25)";
              }}
            >
              <div style={styles.icon}>{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>

        {/* DEADLINES */}
        <div style={styles.section}>
          <h3>Upcoming Deadlines ⏳</h3>
          <p>📌 Math Assignment – 2 days left</p>
          <p>📌 SE Project – 5 days left</p>
        </div>

        
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    padding: "20px",
  },

  title: {
    marginBottom: "5px",
    color: "#312E81",
  },

  date: {
    marginBottom: "20px",
    color: "#6b7280",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "20px",
    marginBottom: "25px",
  },

  card: {
    padding: "25px",
    borderRadius: "18px",
    textAlign: "center",
    cursor: "pointer",
    background: "linear-gradient(145deg, #ffffff, #f3e8ff)",
    boxShadow: "0 8px 20px rgba(167,139,250,0.25)",
    transition: "all 0.3s ease",
  },

  icon: {
    fontSize: "30px",
    marginBottom: "10px",
  },

  section: {
    background: "linear-gradient(145deg, #ffffff, #f9f5ff)",
    padding: "15px",
    borderRadius: "16px",
    marginBottom: "20px",
  },

  motivation: {
    background: "#A78BFA",
    color: "white",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    fontStyle: "italic",
  },
};

export default Dashboard;