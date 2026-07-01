import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {

  return (

    <div className="footer">
      <div className="social-icons">
        <a href="https://github.com/Subhankar-prog" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/subhankar-panda24" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/subhuu.beats" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Subhankar Panda. All rights reserved.</p>
      <ul className="link">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#serv">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>

  )

}

export default Footer;