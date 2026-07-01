import "./Services.css"
import { FaBug, FaShieldAlt, FaVial } from "react-icons/fa";

function Services() {

  return (
    <div className="services" id="serv">

      <div className="title">
        <h2>What I Do</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaBug className="service-icon" />
          <h3>Manual & Functional Testing</h3>
          <p>End-to-end manual testing including functional, regression, integration, sanity, smoke, UI/UX validation, and exploratory testing across web platforms.</p>
        </div>

        <div className="service-card">
          <FaVial className="service-icon" />
          <h3>Automation Testing</h3>
          <p>Building regression automation scripts using Selenium with Python, streamlining repetitive test scenarios and improving test coverage across releases.</p>
        </div>

        <div className="service-card">
          <FaShieldAlt className="service-icon" />
          <h3>Security Testing</h3>
          <p> Burp Suite for vulnerability scanning, and manual security testing including SQL injection validation and XSS attack surface detection.</p>
        </div>

      </div>

    </div>
  )

}

export default Services;