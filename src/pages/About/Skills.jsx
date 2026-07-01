import "./Skills.css";

import {
  FaPython,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaDatabase,
  FaBug,
  FaShieldAlt,
  FaChartBar,
  FaCogs
} from "react-icons/fa";

import {
  SiSelenium,
  SiPostman,
  SiJira,
  SiMysql,
  SiApachejmeter,
  SiBurpsuite,
  SiPortswigger
} from "react-icons/si";

function Skills(){

return(

<div className="skills">
<div className="skills-slider">
<div className="skills-track">

<SiPostman title="Postman"/>
<FaPython title="Python"/>
<SiSelenium title="Selenium"/>
<SiJira title="JIRA"/>
<FaGitAlt title="Git"/>
<FaGithub title="GitHub"/>
<FaGitlab title="GitLab"/>
<SiMysql title="MySQL"/>
<FaBug title="Manual Testing"/>
<FaShieldAlt title="Security Testing"/>
<SiApachejmeter title="JMeter"/>
<FaDatabase title="Database Testing"/>
<FaChartBar title="Excel Tracking"/>
<FaCogs title="Agile/Scrum"/>

{/* Duplicated for seamless infinite scroll */}
<SiPostman title="Postman"/>
<FaPython title="Python"/>
<SiSelenium title="Selenium"/>
<SiJira title="JIRA"/>
<FaGitAlt title="Git"/>
<FaGithub title="GitHub"/>
<FaGitlab title="GitLab"/>
<SiMysql title="MySQL"/>
<FaBug title="Manual Testing"/>
<FaShieldAlt title="Security Testing"/>
<SiApachejmeter title="JMeter"/>
<FaDatabase title="Database Testing"/>
<FaChartBar title="Excel Tracking"/>
<FaCogs title="Agile/Scrum"/>

</div>

</div>

</div>

)

}

export default Skills;