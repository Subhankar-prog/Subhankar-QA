import "./Projects.css";

import img1 from "../../assets/images/itls.png";
import img2 from "../../assets/images/inpr.png";
import img3 from "../../assets/images/Opid.png";
import img4 from "../../assets/images/chse.png";
import img5 from "../../assets/images/bse.png";
import img6 from "../../assets/images/induslives.png";

const projects = [
  {
    title: "ITLS",
    img: img1,
    desc: "Spearheaded QA for a K–8 online learning platform serving thousands of students — rigorously validated mock tests, interactive modules, and content delivery to guarantee a seamless, bug-free learning experience.",
    skills: ["Manual Testing", "Regression", "Functional"]
  },

  {
    title: "Information And Public Relationship",
    img: img2,
    desc: "Drove end-to-end quality assurance on a government ad-release platform spanning print, electronic, hoarding & digital channels — stress-tested multi-channel workflows and approval pipelines to ensure zero-downtime publishing.",
    skills: ["Functional", "Automation Testing", "Manual Testing"]
  },

  {
    title: "Odisha Protection of Interests of Depositors",
    img: img3,
    desc: "Led security & functional testing for a citizen-protection platform combating Ponzi schemes — uncovered critical vulnerabilities pre-launch, fortifying the system against financial fraud and data breaches.",
    skills: ["Automation", "Cross-Browser", "Responsive"]
  },

  {
    title: "Council Of Higher Secondary Education",
    img: img4,
    desc: "Owned QA for the CHSE 12th board portal handling provisional certificates & marksheet re-verification — ensured 100% data integrity across student records and streamlined request processing workflows.",
    skills: ["Functional", "Manual Testing", "Security Testing"]
  },

  {
    title: "Board Of Secondary Education",
    img: img5,
    desc: "Managed full-spectrum testing of the BSE 10th board portal with extended modules — delivered rock-solid certificate issuance, student record management, and secure data handling across all service endpoints.",
    skills: ["Functional Testing", "Performance Testing", "Security Testing"]
  },

  {
    title: "IndusLives",
    img: img6,
    desc: "Executed comprehensive E2E testing for an ecommerce platform showcasing traditional Odisha craftsmanship — validated the complete user journey from product discovery to payment checkout, ensuring a flawless shopping experience.",
    skills: ["Regression", "Functional Testing", "Manual Testing"]
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Projects</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>

            {/* <div className="btns">

              <a href="javascript:void(0)" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

              <a href="javascript:void(0)" className="btn">
                <i className="fas fa-external-link-alt"></i> Details
              </a>

            </div> */}

          </div>

        ))}

      </div>

    </section>

  );

}