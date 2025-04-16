import React from "react";
import "./LegacyAndGovernance.css";
import { FaLinkedin } from "react-icons/fa";
import AboutHeader from "../../ResuableComponents/AboutHeading";
function LegacyAndGovernance() {
  const trustees = [
    {
      name: "Sri G.Raghava Reddy",
      role: "Managing Trustee",
      image: "images/trust1.jpg",
    },
    {
      name: "Sri P.Subba Reddy",
      role: "Trustee",
      image: "images/trust2.jpg",
    },
    {
      name: "Sri G.Ekamber Reddy",
      role: "Trustee",
      image: "images/trust3.jpg",
    },
    // Add more here if needed
  ];
  const governanceMembers = [
    {
      name: "Dr. K. Rama Linga Reddy",
      role: "Professor & Dean-Academics",
      image: "/images/governance1.jpg",
      linkedin: "#",
    },
    {
      name: "Dr. M. Seetha",
      role: "Professor & Dean-R&D",
      image: "/images/governance2.jpg",
      linkedin: "#",
    },
    {
      name: "Dr I. Ravi Prakash Reddy",
      role: "Dean, Placements & Corporate Relations",
      image: "/images/governance3.jpg",
      linkedin: "#",
    },
    {
      name: "Dr. B. Venkateshulu",
      role: "Professor & Dean",
      image: "/images/governance4.jpg",
      linkedin: "#",
    },
  ];
  return (
    <div className="legacy-and-governance">
      <AboutHeader title={"Leadership"} image={"/images/clgimg.jpeg"} />
      <div className="chairman-section">
        <div className="chairman-content">
          <div className="chairman-text">
            <h2>Chairman</h2>

            <p>
              Dr. G.Nagiah an eminent educationist and a great humanist has put
              in a vast experience of 30 years as an academician and
              administrator in running various institutions throughout
              Telangana. He is always closely associated with insights in
              educational system and has been playing pivotal role in shaping
              the component & dynamic professionals with a friendly and human
              touch. He has keen interest in sharing the ideas of students and
              maintains a very good rapport with them. He has also produced and
              acted in a student oriented movie which projects a thought
              provoking message for the betterment of the student community. He
              stands as an exemplary model for multi tasking and promotes the
              students to achieve their academic and extra-circular interests.
              He has done his PG and Ph. D in chemistry from the esteemed
              Osmania University, Hyderabd. He did his Postdoctoral Research
              from Rich University, Texas, USA.
            </p>
          </div>
          <div className="chairman-image">
            <img src="images/chairman.jpg" alt="Chairman" />
            <h3>Dr. G.Nagaiah</h3>
            <p>M.Sc., Ph.D(OU)</p>
          </div>
        </div>
      </div>
      <div className="vice-chairperson-section">
        <div className="vice-chairperson-content">
          <div className="vice-chairperson-image">
            <img src="images/seceratery.jpg" alt="Vice Chairperson" />
            <h3>Dr. D.Pradeep Kumar</h3>
            <p>M.Sc., Ph.D(USA)</p>
          </div>
          <div className="vice-chairperson-text">
            <h2>Secretary</h2>
            <p>
              Dr. D.Pradeep Kumar, a young and dynamic scientist holding a
              doctoral degree from Texas Christian University, Texas, USA. He
              has a vast experience of over a decade as a researcher and has
              publications in National and International Journals presented
              papers at various international conferences. He has concurrent
              experience as a teacher and was awarded beast teacher-2006 by the
              university. After his doctoral degree he worked as a post doctoral
              fellow at Southern Methodist University, Dallas, TX, USA. He also
              worked as a Research Scientist in “Space Organics Pvt. Ltd.”
              Hyderabad before joining Siddhartha Institute of Engineering and
              Technology. He is also founder-Director of SCIKEM Pharmaceuticals
              Pvt. Ltd.
            </p>
            <ul>
              <li>
                His leadership has led to the development of valuable research
                facilities like the BTBP at Siddhartha.
              </li>
              <li>
                His modern leadership approach, coupled with his hands-on
                involvement, has propelled the institutions to rank among the
                top in the country.
              </li>

              <li>
                He aspires to make even greater contributions to society and
                seeks larger responsibilities in governmental bodies and
                institutions.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="trust-management-section">
        <h2>Trust Management</h2>
        <div className="trust-cards">
          {trustees.map((trustee, index) => (
            <div key={index} className="trust-card">
              <img src={trustee.image} alt={trustee.name} />
              <h3>{trustee.name}</h3>
              <p>{trustee.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="governance-section">
        <div className="governance-container">
          <div className="governance-text">
            <h2>Governance</h2>
            <p>
              Our governance structure is designed to ensure that the
              institution operates with integrity, accountability, and a clear
              vision for the future. Led by a dedicated leadership team, our
              governance framework encompasses strategic decision-making, policy
              formulation, and operational management, all aimed at fostering an
              environment where education and innovation thrive.
            </p>
          </div>
          <div className="governance-image">
            <img src="images/principal.jpeg " alt="Principal" />
            <h3>Dr. K. Ramesh Reddy</h3>
            <p>Principal</p>
          </div>
        </div>
        <div className="governance-cards">
          {governanceMembers.map((member, index) => (
            <div key={index} className="governance-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={25}
                  color="#0077B5"
                  style={{ marginTop: "0.6rem" }}
                />
              </a>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
}

export default LegacyAndGovernance;
