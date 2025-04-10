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
              Sri. Gunampally Raghava Reddy Garu, the founder Trustee of GPR
              Charities Trust has made his remarkable mark as an Educationalist,
              enterprising Business-man and as the International President of
              the right-wing organisation of Vishwa Hindu Parishad. Carrying the
              legacy of his parents Late Sri. G. Pulla Reddy Garu and Late G.
              Narayanamma Garu, Sri. G. Raghava Reddy Garu has been playing a
              key role in the transformative administrative processes of the
              Institution in setting newer standards and goals towards enhancing
              research and development in different disciplines and to develop
              new generation technocrats who will be instrumental in fuelling
              economic growth of the nation.
            </p>
            <p>
              Under the dynamic and vibrant leadership of Sri. G. Raghava Reddy
              Garu, GNITS envisions to bring the best blend of resourcefulness
              and core competencies among its employees.
            </p>
          </div>
          <div className="chairman-image">
            <img src="images/chairman.jpg" alt="Chairman" />
            <h3>Gunampally Raghava Reddy Garu</h3>
            <p>Chairman</p>
          </div>
        </div>
      </div>
      <div className="vice-chairperson-section">
        <div className="vice-chairperson-content">
          <div className="vice-chairperson-image">
            <img src="images/vicechairman.jpeg" alt="Vice Chairperson" />
            <h3>SMT. SRIVIDYA REDDY GUNAMPALLI</h3>
            <p>VICE-CHAIRPERSON</p>
          </div>
          <div className="vice-chairperson-text">
            <h2>Vice Chairperson</h2>
            <p>
              Smt. Srividya Reddy Gunampalli, the Vice-Chairperson of the G.
              Pulla Reddy Charities Trust, has been a pivotal figure in the
              growth and success of the educational institutions managed by the
              Trust. With nearly two decades of active involvement, she has
              played a crucial role in steering these institutions toward
              excellence. As an alumna of G. Narayanamma Institute of Technology
              & Science (GNITS), her deep connection with the institution has
              driven her to ensure its continuous development and success.
            </p>
            <ul>
              <li>
                She has been instrumental in achieving important certifications,
                including the National Board of Accreditation (NBA), National
                Assessment and Accreditation Council (NAAC), and International
                Standards Organization (ISO).
              </li>
              <li>
                Her leadership has led to the development of valuable research
                facilities like the BTBP at GNITS.
              </li>
              <li>
                She established the Apple Lab for young women engineers, a
                milestone highlighted by a visit from Apple CEO, Mr. Tim Cook.
              </li>
              <li>
                Her modern leadership approach, coupled with her hands-on
                involvement, has propelled the institutions to rank among the
                top in the country.
              </li>
              <li>
                She is a strong advocate for women’s empowerment, promoting the
                holistic development of women and encouraging them to overcome
                challenges.
              </li>
              <li>
                Following in the footsteps of her father and legendary
                grandfather, she continues their legacy in education and
                community service.
              </li>
              <li>
                She aspires to make even greater contributions to society and
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
