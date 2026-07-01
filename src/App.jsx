import { useState } from 'react'

import Intro from './components/Intro' 
import Header from './components/Header'
import Home from './pages/home/Home'
import About from './pages/About/About'
import Projects from './pages/Project/Projects'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
import Footer from './pages/Footer/Footer'

function App() {

  const [showIntro, setShowIntro] = useState(true); 

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} /> 
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App