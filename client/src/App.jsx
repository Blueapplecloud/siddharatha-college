import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { AnimatedText } from "./components/FirstSection";
import NewsTicker from "./components/NewsTicker";
import BeyondOrdinary from "./components/SecondSection";

export default function App() {
  return (
    <div className="font-sans">
      <AnimatedText />
      <NewsTicker />
      <BeyondOrdinary/>
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
