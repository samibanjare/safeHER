import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Report from "./pages/Report";
import Resources from "./pages/Resources";
import Team from "./pages/Team";

import './styles/main.css';
import 'leaflet/dist/leaflet.css';


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/report" element={<Report />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/team" element={<Team />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
