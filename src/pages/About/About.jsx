import "./About.css";
import Me from "../../assets/images/Me.jpg";
import Skills from "./Skills";


function About() {
    return (
        <div className="about" id="about">
            <div className="about-content">
                <div className="text">
                    <div className="title2">
                        <h1>About Me</h1>
                    </div>
                    <div className="parag">
                        <p>I'm Subhankar, a QA Engineer with 3+ years of experience
                            testing web-based government, educational, and enterprise platforms.
                            Specialized in functional, regression, API, and UI validation with a track record
                            of identifying 500+ defects across release cycles, contributing to 95% on-time delivery.
                            Actively expanding skills into test automation (Selenium, Python),
                            basic performance testing (JMeter), and security testing (Burp Suite).
                            Driven by quality, precision, and continuous improvement.</p>
                    </div>
                    <div className="info">
                        <div className="card">
                            <h3>8<span>+</span></h3>
                            <p>Projects Completed</p>
                            <p>500+ Defects Identified across release cycles</p>
                        </div>
                        <div className="card">
                            <h3>3<span>+</span></h3>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="img">
                    <img src={Me} alt="Subhankar Panda" />
                </div>
            </div>
            <Skills />
        </div>
    )
}
export default About;