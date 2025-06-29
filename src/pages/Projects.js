import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import './../App.css'
import Cardeg from './../assets/500p.png'
import MetaImg from './../assets/metagross.png'
import SylvImg from './../assets/sylveon.png'
import Caterpiedev from './../assets/Caterpiedev.png'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import  GithubIco from './../assets/githubico.png'
import { useEffect, useState } from "react";


function Projects() {
  const [windowDimension, setWindowDimension] = useState(null);
  
    useEffect(() => {
      setWindowDimension(window.innerWidth);
    }, []);
  
    useEffect(() => {
      function handleResize() {
        setWindowDimension(window.innerWidth);
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const isMobile = windowDimension <= 640;
  return (
    <>
    <Navbar />
    <div className='full-page'>
        <h1>Projects</h1>
      {isMobile ? (
          <div className='projects-part'>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/Caterpie-dev' className='card-link'><h2>CaterpieDev</h2></Link>
            <p>Bug tracker to allow team collaboration and bug analysis</p>
            <p>June 2025</p>
            <p>Technologies: ReactJs & Firebase</p>
            <div className='card-tech-mob'>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/Sylveon' className='card-link'><h2>Sylveon</h2></Link>
            <p>Mood tracker, personalized look per user.</p>
            <p>June 2025</p>
            <p>Technologies: ReactJs & Firebase</p>
            <div className='card-tech-mob'>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/Metagross' className='card-link'><h2>Metagross</h2></Link>
            <p>School Managment software with diffrent roles for diffrent user types, signups get approved by admins to ensure integrity.</p>
            <p>May/June 2025</p>
            <p>Technologies: ReactJs & Firebase</p>
            <div className='card-tech-mob'>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/Beginner-projects' className='card-link'><h2>Beginner-Projects</h2></Link>
            <p>A repository for front end web beginner projects</p>
            <p>June 2025</p>
            <p>Technologies: HTML, CSS & JavaScript</p>
            <div className='card-tech-mob'>
              <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
              <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/PiKa' className='card-link'><h2>PiKa</h2></Link>
            <p>Simple Keylogger</p>
            <p>September 2024</p>
            <p>Technologies: Python</p>
            <div className='card-tech-mob'>
              <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/rizascann' className='card-link'><h2>rizascan</h2></Link>
            <p>a simple port scanner</p>
            <p>November 2024</p>
            <p>Technologies: Python</p>
            <div className='card-tech-mob'>
              <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/probospoof' className='card-link'><h2>ProboSpoof</h2></Link>
            <p>Simple Packet Sniffer</p>
            <p>November 2024</p>
            <p>Technologies: Python</p>
            <div className='card-tech-mob'>
              <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/tn-game' className='card-link'><h2>tn-game</h2></Link>
            <p>made this to help me and my classmates prepare for "MC2" exam, which was about converting decimal to/from binary, octal or hexadecimal</p>
            <p>September 2024</p>
            <p>Technologies: Python</p>
            <div className='card-tech-mob'>
              <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
            </div>
          </div>
        </div>
      </div>
      ) : (
        <div className='projects-part'>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/Caterpie-dev' className='card-link'><h2>CaterpieDev</h2></Link>
            <p>Bug tracker to allow team collaboration and bug analysis</p>
            <p>June 2025</p>
            <p>Technologies: ReactJs & Firebase</p>
            <div className='card-tech'>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
            </div>
          </div>
          <div className='card-image'>
            <img src={Caterpiedev}></img>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/Sylveon' className='card-link'><h2>Sylveon</h2></Link>
            <p>Mood tracker, personalized look per user.</p>
            <p>June 2025</p>
            <p>Technologies: ReactJs & Firebase</p>
            <div className='card-tech'>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
            </div>
          </div>
          <div className='card-image'>
            <img src={SylvImg}></img>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/Metagross' className='card-link'><h2>Metagross</h2></Link>
            <p>School Managment software with diffrent roles for diffrent user types, signups get approved by admins to ensure integrity.</p>
            <p>May/June 2025</p>
            <p>Technologies: ReactJs & Firebase</p>
            <div className='card-tech'>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a>
            </div>
          </div>
          <div className='card-image'>
            <img src={MetaImg}></img>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/Beginner-projects' className='card-link'><h2>Beginner-Projects</h2></Link>
            <p>A repository for front end web beginner projects</p>
            <p>June 2025</p>
            <p>Technologies: HTML, CSS & JavaScript</p>
            <div className='card-tech'>
              <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
              <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
            </div>
          </div>
          <div className='card-image'>
            <img src={GithubIco}></img>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/PiKa' className='card-link'><h2>PiKa</h2></Link>
            <p>Simple Keylogger</p>
            <p>September 2024</p>
            <p>Technologies: Python</p>
            <div className='card-tech'>
              <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
            </div>
          </div>
          <div className='card-image'>
            <img src={GithubIco}></img>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/rizascann' className='card-link'><h2>rizascan</h2></Link>
            <p>a simple port scanner</p>
            <p>November 2024</p>
            <p>Technologies: Python</p>
            <div className='card-tech'>
              <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
            </div>
          </div>
          <div className='card-image'>
            <img src={GithubIco}></img>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/probospoof' className='card-link'><h2>ProboSpoof</h2></Link>
            <p>Simple Packet Sniffer</p>
            <p>November 2024</p>
            <p>Technologies: Python</p>
            <div className='card-tech'>
              <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
            </div>
          </div>
          <div className='card-image'>
            <img src={GithubIco}></img>
          </div>
        </div>
        <div className='project-card'>
          <div className='card-titles'>
            <Link to='https://github.com/cbdevsec/tn-game' className='card-link'><h2>tn-game</h2></Link>
            <p>made this to help me and my classmates prepare for "MC2" exam, which was about converting decimal to/from binary, octal or hexadecimal</p>
            <p>September 2024</p>
            <p>Technologies: Python</p>
            <div className='card-tech'>
              <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a>
            </div>
          </div>
          <div className='card-image'>
            <img src={GithubIco}></img>
          </div>
        </div>
      </div>
      )}
    </div>
    <Footer />
    </>
  )
}

export default Projects