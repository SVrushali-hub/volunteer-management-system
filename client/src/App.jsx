import { Routes, Route } from "react-router-dom";
import VolunteerRegistration from "./pages/VolunteerRegistration";
import Admin from "./pages/Admin";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<VolunteerRegistration />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Admin />} />

        <Route path="/reports" element={<Reports />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
