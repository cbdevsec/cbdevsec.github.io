import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import './../App.css'
import Photo1 from './../assets/cbdevsec.png'
import Cisco from './../assets/cisco.png'
import Reactimg from './../assets/react.png'
import Pythonimg from './../assets/python.png'
import Jsimg from './../assets/javascript.png'
import { AiFillGithub, AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai'
import { useEffect, useState } from "react";

function Home() {
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
      {isMobile ? (
        <div className='title-mobile'>
            <div className='title1-mobile'>
                <h1>Aya Khiouat</h1>
                <h2>Junior Cybersecurity Analyst</h2>
                <p>& IT system maintenance student / Inside LVMH alumni</p>
            </div>
        </div>
      ) : (
        <div className='title'>
            <div className='title1'>
                <h1>Aya Khiouat</h1>
                <h2>Junior Cybersecurity Analyst</h2>
                <p>& IT system maintenance student / Inside LVMH alumni</p>
            </div>
            <div className='title2'>
            <img src={Photo1} alt=''></img>
            </div>
        </div>
      ) }
        <div className='technologies'>
          <h2>Technologies</h2>
          <div className='tech-logos'>
            <img classname='cisco-img' src={Cisco}></img>
            <img classname='react-img' src={Reactimg}></img>
            <img classname='python-img' src={Pythonimg}></img>
            <img classname='js-img' src={Jsimg}></img>
          </div>
        </div>
        <div className='socials'>
          <h2>Find me on:</h2>
          <div className='links'>
            <a href='https://www.linkedin.com/in/ayakh'><AiFillLinkedin/></a>
            <a href='https://github.com/cbdevsec'><AiFillGithub/></a>
            <a href='https://medium.com/@ayakhiouat'><AiFillMediumCircle/></a>
          </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Home