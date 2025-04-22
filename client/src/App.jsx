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
import CSAIML from "./pages/AcademicsComponents/BachelorPrograms/CSAIML";
import ECE from "./pages/AcademicsComponents/BachelorPrograms/ECE";
import Mech from "./pages/AcademicsComponents/BachelorPrograms/Mech";
import Strategicplan from "./pages/StrategicPlan/strategicplan";
import AwardsandRecognitions from "./pages/Awards and Recognitions/AwardsandRecognitions";
import Placements from "./pages/PlacementsComponent/Placements";
import LifeAtSiddhartha from "./pages/CampusComponents/LifeAtSiddhartha";

import Legacy from "./pages/LegacyPageComponents/Legacy";

import TimeTableExam from "./pages/StudentCorner/TimeTable";

import Overview from "./pages/Research/Overview";
import FundedResearchProjects from "./pages/Research/FundedResearchProjects/FundedResearchProjects";

import HowToApply from "./pages/Addmissions/HowToApply";

import AdmissionPolicy from "./pages/AcademicsComponents/Admissions/AdmissionPolicy";
import Civil from "./pages/AcademicsComponents/BachelorPrograms/Civil";
import CSD from "./pages/AcademicsComponents/BachelorPrograms/CSD";
import EEE from "./pages/AcademicsComponents/BachelorPrograms/EEE";
import MBA from "./pages/AcademicsComponents/BachelorPrograms/MBA";
import IncubationHeader from "./pages/IncubationCell/IncubationCell";
import AnnualReports from "./pages/AnnualReports/AnnualReports";
import MandatoryDisclosures from "./pages/MandatoryDisclosures/MandatoryDisclosures";
import Policies from "./pages/PoliciesComponent/Policies";
import StudentChapters from "./pages/AcademicsComponents/Extended Learning/StudentChapters Components/StudentChapter";



export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legacy" element={<Legacy />} />
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
            <Route path="/annual-reports" element={<AnnualReports />} />
            <Route path="/mandatory-disclosures" element={<MandatoryDisclosures />}/>
            {/* Routes for Departments Section */}
            <Route path="/ComputerScience&Engg" element={<CSE />} />
            <Route path="/ComputerScience&Engg(AI & ML)" element={<CSAIML />} />
            <Route path="/ECE" element={<ECE />} />
            <Route path="/MechanicalEngg" element={<Mech />} />

            <Route path="/Civil" element={<Civil />} />
            <Route path="/CSD" element={<CSD />} />
            <Route path="/EEE" element={<EEE />} />
            <Route path="/MBA" element={<MBA />} />
            {/* Routes for Campus Life at siddhartha */}
            <Route path="/CampusLife" element={<LifeAtSiddhartha />} />

            {/* Placements route */}
            <Route path="/Placements" element={<Placements />} />
            {/* Routes for Campus Life at siddharatha */}
            <Route path="/ExamCell" element={<TimeTableExam/>}/>
            <Route path="/IncubationCell" element={<IncubationHeader />} />
            {/* Routes for Research */}
            <Route path="/overview" element={<Overview />} />
            <Route path="/funded-research-projects" element={<FundedResearchProjects />} />
            {/* Route for academics how to apply */}
            <Route path="/how-to-apply" element={<HowToApply />} />

            {/* Add more routes as needed */}

            {/* Admission policy route */}
            <Route path="/Admissions/Admission Policy" element={<AdmissionPolicy />} />
            {/* About Policy Route */}
            <Route path="/Policies" element={<Policies/>}/>

            {/* Student Chapters Route */}
            <Route path="/Student Chapters" element={<StudentChapters/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
