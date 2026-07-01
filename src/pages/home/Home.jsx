import "./Home.css";
import Me2 from "../../assets/images/Me2.png";
import CvPreview from "../../components/CvPreview/CvPreview";

function Home() {
    return (
        <div className="home" id="home">
            <div className="home-content">
                <div className="text">
                    <div className="valide">
                        <img src={Me2} alt="Subhankar" />
                        <p>"Quality is never an accident; it is always the result of intelligent effort."</p>
                    </div>
                    <div className="text-info">
                        <div className="title1">
                            <h1>Hi, I'm <span>Subhankar</span></h1>
                        </div>
                        <div className="paraga">
                            <p>
                                QA Test Engineer with 3+ years of experience testing web-based government, educational, and
                                enterprise platforms. Specialized in functional, regression, API, and UI validation —
                                actively expanding into test automation, performance testing, and security testing.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="btn1">
                    <CvPreview />
                    <a href="#project">Explore My Projects</a>
                </div>
            </div>
            <div className="photo">
                <img src={Me2} alt="Subhankar" />
            </div>
        </div>
    )
}
export default Home;