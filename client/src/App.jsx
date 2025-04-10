// to install react-icons  use the command
//npm install react-icons
//to install react bootstrap use the command
//npm install react-bootstrap bootstrap
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
// import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import LegacyAndGovernance from "./pages/LegacyAndGovernance/LegacyAndGovernance";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route
              path="/leadership-and-governance"
              element={<LegacyAndGovernance />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
