import IEEE from "./IEEE StudentChapter";
import AboutHeader from "../../../../ResuableComponents/AboutHeading";
import CSI from "./CSI StudentChapter";
import ISTE from "./ISTE StudentChapter";
import IETE from "./IETE StudentChapter";

function StudentChapters() {
  return (
    <>
      <AboutHeader
        title="Student Chapters"
        image="https://gnits.ac.in/wp-content/uploads/2024/09/DSC_0329-2_11zon.jpg"
      />
      <IEEE />
      <CSI />
      <ISTE />
      <IETE />
    </>
  );
}

export default StudentChapters;
