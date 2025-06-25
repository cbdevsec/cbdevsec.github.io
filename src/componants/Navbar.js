import React from 'react'
import {Link} from 'react-router-dom'
import Logo from './../assets/cbdevsec.png'
import './navbar.css'
import { AiFillStar, AiFillHome, AiFillBook, AiFillFilePdf, AiFillGithub } from 'react-icons/ai'
import { BiGitBranch } from 'react-icons/bi'
import { useEffect, useState } from "react";


function Navbar() {

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
    {isMobile ? (
    <nav className='mobile-navbar'>
        <div className='nav-links-mobile'>
          <Link to='/' className='nav-link'><h3><AiFillHome/></h3></Link>
            <Link to='/resume' className='nav-link'><h3><AiFillFilePdf/></h3></Link>
            <Link to='/blog' className='nav-link'><h3><AiFillBook/></h3></Link>
            <Link to='/projects' className='nav-link'><h3><AiFillGithub/></h3></Link>
            <Link to='/skills' className='nav-link'><h3><AiFillStar/></h3></Link>
        </div>
    </nav>
    ) : (
      <nav className='navbar'>
        <div className='nav-img'>
            <Link to='/'><img src={Logo} className='nav-logo'></img></Link>
        </div>
        <div className='nav-links'>
            <Link to='/resume' className='nav-link'><h3>Resume</h3></Link>
            <Link to='/blog' className='nav-link'><h3>Blog</h3></Link>
            <Link to='/projects' className='nav-link'><h3>Projects</h3></Link>
            <Link to='/skills' className='nav-link'><h3>Skills</h3></Link>
            <Link to='https://github.com/cbdevsec' className='nav-link-git'><h3><BiGitBranch/><AiFillStar/></h3></Link>
        </div>
      </nav>
    )}
    </>
  )
}

export default Navbar