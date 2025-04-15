// to install react-icons  use the command
//npm install react-icons
//to install react bootstrap use the command
//npm install react-bootstrap bootstrap
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
// import { AboutHeader } from "./pages/AboutPageComponents/About";
import { ScrollFeatureStrip } from "./pages/AboutPageComponents/About";
// import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import LegacyAndGovernance from "./pages/LegacyAndGovernance/LegacyAndGovernance";
import AlumniHeader from "./pages/CampusComponents/AboutAlumni";
import CSE from "./pages/AcademicsComponents/BachelorPrograms/CSE";
import CST from "./pages/AcademicsComponents/BachelorPrograms/CST";
import IT from "./pages/AcademicsComponents/BachelorPrograms/IT";
import Mech from "./pages/AcademicsComponents/BachelorPrograms/Mech";
import Strategicplan from "./pages/StrategicPlan/strategicplan";
import LifeAtSiddhartha from "./pages/CampusComponents/LifeAtSiddharatha";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* <Route path="/about" element={<About />} /> */}
            <Route
              path="/leadership-and-governance"
              element={<LegacyAndGovernance />}
            />
            <Route path="/about" element={<ScrollFeatureStrip />} />
            {/* Route for View All Alumni Section */}
            <Route path="/alumni" element={<AlumniHeader />} />
            <Route path="/strategic" element={<Strategicplan />} />
            {/* Routes for Departments Section */}
            <Route path="/ComputerScience&Engg" element={<CSE />} />
            <Route path="/ComputerScience&Tech" element={<CST />} />
            <Route path="/IT" element={<IT />} />
            <Route path="/MechanicalEngg" element={<Mech />} />
            {/* Routes for Campus Life at siddharatha */}
            <Route path="/CampusLife" element={<LifeAtSiddhartha/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
