import { useEffect, useState } from "react";
import "./Intro.css";

const text = "Welcome To My Portfolio";

function Intro({ onFinish }) {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    // 1: portal يظهر
    setTimeout(() => setPhase(1), 300);

    // 2: يظهر Subhankar
    setTimeout(() => setPhase(2), 1200);

    // 3: explosion
    setTimeout(() => setPhase(3), 2200);

    // 4: typing
    setTimeout(() => setPhase(4), 2600);

    // typing effect
    let i = 0;
    const typing = setInterval(() => {
      setTyped(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(typing);
    }, 60);

    // 5: دخول الموقع
    setTimeout(() => {
      setPhase(5);
      setTimeout(onFinish, 1000);
    }, 5000);

    return () => clearInterval(typing);
  }, []);

  return (
    <div className={`intro phase-${phase}`}>

      {/* PORTAL */}
      <div className="portal"></div>

      {/* LOGO */}
      <h1 className="logo">Hii, This is Subhankar</h1>

      {/* TEXT */}
      <h1 className="main-text">
        {typed}
        <span className="cursor">|</span>
      </h1>

    </div>
  );
}

export default Intro;