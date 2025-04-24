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
import Accreditations from "./pages/AboutPageComponents/Accreditations";
import AnnualReports from "./pages/AnnualReports/AnnualReports";
import MandatoryDisclosures from "./pages/MandatoryDisclosures/MandatoryDisclosures";
import Policies from "./pages/PoliciesComponent/Policies";

import CSEPG from "./pages/Masters/CSEPG";
import CNISPG from "./pages/Masters/CNISPG";
import DECEPG from "./pages/Masters/DECEPG";
import PE_ED from "./pages/Masters/PE_ED";
import WMC from "./pages/Masters/WMC";

import WelfareMeasures from "./pages/WelfareMeasures/WelfareMeasures";
import Governance from "./pages/Governance/Governance";
import AcademicTimetables from "./pages/AcademicsComponents/AcademicTimetables/AcademicTimetables";
import StudentChapters from "./pages/AcademicsComponents/Extended Learning/StudentChapters Components/StudentChapter";
import WhySITS from "./pages/AboutPageComponents/whySits";
import AcademicCalendar from "./pages/AcademicsComponents/AcademicCalendar/AcademicCalendar";

import OurTeam from "./pages/AcademicsComponents/staff_directory/OurTeam";

import Syllabus from "./pages/AcademicsComponents/Syllabus/Syllabus";





export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Home page Route */}
            <Route path="/" element={<Home />} />

            <Route path="/legacy" element={<Legacy />} />
            <Route
              path="/leadership-and-governance"
              element={<LegacyAndGovernance />}
            />
            <Route path="/organogram" element={<Organogram />} />
            <Route path="/accreditations" element={<Accreditations />} />
            <Route path="/about" element={<ScrollFeatureStrip />} />
            {/* Route for View All Alumni Section */}
            <Route path="/alumni" element={<AlumniHeader />} />
            <Route path="/strategic" element={<Strategicplan />} />
            <Route path="/Awards" element={<AwardsandRecognitions />} />
            <Route path="/annual-reports" element={<AnnualReports />} />

            <Route
              path="/mandatory-disclosures"
              element={<MandatoryDisclosures />}
            />

            <Route path="/welfare" element={<WelfareMeasures />} />
            <Route path="/governance" element={<Governance />} />
            <Route
              path="/mandatory-disclosures"
              element={<MandatoryDisclosures />}
            />

            {/* Routes for Departments Section */}
            <Route path="/ComputerScience&Engg" element={<CSE />} />
            <Route path="/ComputerScience&Engg(AI & ML)" element={<CSAIML />} />
            <Route path="/ECE" element={<ECE />} />
            <Route path="/MechanicalEngg" element={<Mech />} />

            <Route path="/Civil" element={<Civil />} />
            <Route path="/CSD" element={<CSD />} />
            <Route path="/EEE" element={<EEE />} />
            <Route path="/MBA" element={<MBA />} />
            <Route path="/Academic-Calendar" element={<AcademicCalendar />}/>
            <Route
              path="/academic-timetables"
              element={<AcademicTimetables />}
            />
            {/* Routes for Campus Life at siddhartha */}
            <Route path="/CampusLife" element={<LifeAtSiddhartha />} />

            {/* Placements route */}
            <Route path="/Placements" element={<Placements />} />
            {/* Routes for Campus Life at siddharatha */}
            <Route path="/ExamCell" element={<TimeTableExam />} />
            <Route path="/IncubationCell" element={<IncubationHeader />} />
            {/* Routes for Research */}
            <Route path="/overview" element={<Overview />} />
            <Route
              path="/funded-research-projects"
              element={<FundedResearchProjects />}
            />
            {/* Route for academics how to apply */}
            <Route path="/how-to-apply" element={<HowToApply />} />

            {/* Add more routes as needed */}

            {/* Admission policy route */}

            <Route
              path="/Admissions/Admission Policy"
              element={<AdmissionPolicy />}
            />

            <Route
              path="/Admissions/Admission Policy"
              element={<AdmissionPolicy />}
            />
            {/* About Policy Route */}

            <Route path="/Policies" element={<Policies />} />

            {/* masters pg programs routes */}
            <Route path="/academics/masters/cse" element={<CSEPG />} />
            <Route path="/academics/masters/cnis" element={<CNISPG />} />
            <Route path="/academics/masters/dece" element={<DECEPG />} />
            <Route path="/academics/masters/pe-ed" element={<PE_ED />} />
            <Route path="/academics/masters/wmc" element={<WMC />} />
            {/* Routes for the Staff Directory Page */}
            <Route path="/academics/out-team" element={<OurTeam />} />

            <Route path="/Policies" element={<Policies />} />

            {/* Student Chapters Route */}
            <Route path="/Student Chapters" element={<StudentChapters />} />
            {/* Why SIDDHARTHA Route */}
            <Route path="/Why SITS" element={<WhySITS />} />

            {/* About Section Routes */}
              <Route path="/about" element={<ScrollFeatureStrip />} />
              <Route path="/legacy" element={<Legacy />} />
              <Route path="/leadership-and-governance" element={<LegacyAndGovernance />}/>
              <Route path="/strategic" element={<Strategicplan />} />
              <Route path="/organogram" element={<Organogram />} />
              <Route path="/Awards" element={<AwardsandRecognitions />} />
              <Route path="/accreditations" element={<Accreditations />} />
              <Route path="/Why SITS" element={<WhySITS />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/Policies" element={<Policies />} />
              <Route path="/annual-reports" element={<AnnualReports />} />
              <Route path="/welfare" element={<WelfareMeasures />} />
              <Route path="/mandatory-disclosures" element={<MandatoryDisclosures />}/>
            {/* Route for Academics Section*/}
                {/* Routes for Admissions Section */}
                <Route path="/how-to-apply" element={<HowToApply />} />
                <Route path="/Admissions/Admission Policy" element={<AdmissionPolicy />}/>
                
               {/* Routes for Bachelors Program Section */}
                <Route path="/ComputerScience&Engg" element={<CSE />} />
                <Route path="/ComputerScience&Engg(AI & ML)" element={<CSAIML />} />
                <Route path="/ECE" element={<ECE />} />
                <Route path="/MechanicalEngg" element={<Mech />} />
                <Route path="/Civil" element={<Civil />} />
                <Route path="/CSD" element={<CSD />} />
                <Route path="/EEE" element={<EEE />} />
                <Route path="/MBA" element={<MBA />} />
                {/* Routes for Syllabus (UG & PG) */}
                <Route path="/Syllabus (UG & PG)" element={<Syllabus/>}/>
                {/* Routes for Masters (PG) Programs */}
                <Route path="/academics/masters/cse" element={<CSEPG />} />
                <Route path="/academics/masters/cnis" element={<CNISPG />} />
                <Route path="/academics/masters/dece" element={<DECEPG />} />
                <Route path="/academics/masters/pe-ed" element={<PE_ED />} />
                <Route path="/academics/masters/wmc" element={<WMC />} />
                {/* Route for Academic TimeTable */}
                <Route path="/academic-timetables" element={<AcademicTimetables />}/>
                {/* Routes for Extended Learning */}
                <Route path="/Student Chapters" element={<StudentChapters />} />
                
                {/* Route for Academic Calender */}
                <Route path="/academic-calendar" element={<AcademicCalendar />}/>

                {/* Route for Staff Directory */}
                <Route path="/Staff Directory" element={< OurTeam/>} />

            {/* Routes for Campus Section */}
                {/* Route for Life at SITS */}
                <Route path="/CampusLife" element={<LifeAtSiddhartha />} />
                {/* Routes for Facilities */}


            {/* Routes for Research Section */}
                {/* Route for Overview Section  */}
                <Route path="/overview" element={<Overview />} />
                {/* Route for Academic Research */}

                {/* Route for Funded-Research-Projects */}
                <Route
                  path="/funded-research-projects"
                  element={<FundedResearchProjects />}
                />
                {/* Route for Research Centers */}

                {/* Route for Policies */}


            {/* Route for Placements Section */}
              <Route path="/Placements" element={<Placements />} />

            {/* Routes for Student Corner Section  */}
                {/* Route for Timetable Section */}
                <Route path="/ExamCell" element={<TimeTableExam />} />

            {/* Routes for Incubation Cell */}
              <Route path="/IncubationCell" element={<IncubationHeader />} />

            {/* Routes for Exam Cell */}
              <Route path="/ExamCell" element={<TimeTableExam />} />
                
            {/* Additional Routes */}
                <Route path="/alumni" element={<AlumniHeader />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
