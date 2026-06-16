import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Assignments from "./pages/Assignments";
import Attendance from "./pages/Attendance";
import Notices from "./pages/Notices";
import Deadlines from "./pages/Deadlines";
import Marks from "./pages/Marks";
import Syllabus from "./pages/Syllabus";
import Pomodoro from "./pages/Pomodoro";
import Reminders from "./pages/Reminders";
import Profile from "./pages/Profile";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Login />} />
      <Route path="/assignments" element={isLoggedIn ? <Assignments /> : <Login />} />
      <Route path="/attendance" element={isLoggedIn ? <Attendance /> : <Login />} />
      <Route path="/notices" element={isLoggedIn ? <Notices /> : <Login />} />
      <Route path="/deadlines" element={isLoggedIn ? <Deadlines /> : <Login />} />
      <Route path="/marks" element={isLoggedIn ? <Marks /> : <Login />} />
      <Route path="/syllabus" element={isLoggedIn ? <Syllabus /> : <Login />} />
      <Route path="/pomodoro" element={isLoggedIn ? <Pomodoro /> : <Login />} />
      <Route path="/reminders" element={isLoggedIn ? <Reminders /> : <Login />} />
      <Route path="/profile" element={isLoggedIn ? <Profile /> : <Login />} />
    </Routes>
  );
}

export default App;