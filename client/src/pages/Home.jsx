import { Banner } from "./HomePageComponents/Banner";
import News from "./HomePageComponents/News";
import About from "./HomePageComponents/About";
import Research from "./HomePageComponents/Research";
import Programs from "./HomePageComponents/Programs";
import Alumni from "./HomePageComponents/Alumni";

export default function Home() {
  return (
    <div className="font-sans">
      <Banner />
      <News />
      <About />
      <Programs />
      <Research />
      <Alumni />
      {/* <Footer /> */}
    </div>
  );
}
