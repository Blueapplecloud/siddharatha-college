// to install react-icons  use the command
//npm install react-icons
//to install react bootstrap use the command
//npm install react-bootstrap bootstrap
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { ScrollFeatureStrip } from "./pages/AboutPageComponents/About";
import Organogram from "./pages/AboutPageComponents/Organogram";
import "bootstrap/dist/css/bootstrap.min.css";
import LegacyAndGovernance from "./pages/LegacyAndGovernance/LegacyAndGovernance";
import AlumniHeader from "./pages/CampusComponents/AboutAlumni";
import CSE from "./pages/AcademicsComponents/BachelorPrograms/CSE";
import CST from "./pages/AcademicsComponents/BachelorPrograms/CST";
import IT from "./pages/AcademicsComponents/BachelorPrograms/IT";
import Mech from "./pages/AcademicsComponents/BachelorPrograms/Mech";
import Strategicplan from "./pages/StrategicPlan/strategicplan";
import AwardsandRecognitions from "./pages/Awards and Recognitions/AwardsandRecognitions";
import LifeAtSiddhartha from "./pages/CampusComponents/LifeAtSiddharatha";

import TimeTableExam from "./pages/StudentCorner/TimeTable";

import Overview from "./pages/Research/Overview";


export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/leadership-and-governance"
              element={<LegacyAndGovernance />}
            />
            <Route path="/organogram" element={<Organogram />} />
            <Route path="/about" element={<ScrollFeatureStrip />} />
            {/* Route for View All Alumni Section */}
            <Route path="/alumni" element={<AlumniHeader />} />
            <Route path="/strategic" element={<Strategicplan />} />
            <Route path="/Awards" element={<AwardsandRecognitions />} />
            {/* Routes for Departments Section */}
            <Route path="/ComputerScience&Engg" element={<CSE />} />
            <Route path="/ComputerScience&Tech" element={<CST />} />
            <Route path="/IT" element={<IT />} />
            <Route path="/MechanicalEngg" element={<Mech />} />
            {/* Routes for Campus Life at siddharatha */}

            <Route path="/CampusLife" element={<LifeAtSiddhartha/>}/>
            <Route path="/ExamCell" element={<TimeTableExam/>}/>

            <Route path="/CampusLife" element={<LifeAtSiddhartha />} />

            {/* Routes for Research */}
            <Route path="/overview" element={<Overview />} />
            {/* Add more routes as needed */}

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
   
  );
}
