import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBarComponent from "./components/Navbar/Navbar";
import { AnimatedText } from "./components/FirstSection";
import NewsTicker from "./components/NewsTicker";
import BeyondOrdinary from "./components/SecondSection";
import ResearchSection from "./components/ResearchSection";

export default function App() {
  return (
    <div className="font-sans">
      <NavBarComponent/>
      <AnimatedText />
      <NewsTicker />
      <BeyondOrdinary/>
      <ResearchSection/>
      <Footer/>
    </div>
    // <Router>
    //   <div className="flex flex-col min-h-screen">
    //     <Navbar />
    //     <main className="flex-grow container mx-auto">
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/about" element={<About />} />
    //       </Routes>
    //     </main>
    //     <Footer />
    //   </div>
    // </Router>
  );
}
