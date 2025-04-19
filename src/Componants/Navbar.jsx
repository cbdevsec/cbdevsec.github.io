import React from 'react'
import './navbar.css'
import Logo from './../assets/photo1_tr.png'
import {Link} from 'react-router-dom'
import {BiGitBranch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className='navb'>
        <div className='logo-title'>
            <Link to='/home' style={{ textDecoration: 'none', color:'white'}}><img className='navlogo' src={Logo} alt=''/></Link>
        </div>
        <div className='navlist'>
            <Link to="/blog" style={{ textDecoration: 'none', color:'white'}}><a>Blog</a></Link>
            <Link to="/projects" style={{ textDecoration: 'none', color:'white'}}><a>Projects</a></Link>
            <Link to="/resume" style={{ textDecoration: 'none', color:'white'}}><a>Resume</a></Link>
            <Link to="/about" style={{ textDecoration: 'none', color:'white'}}><a>About</a></Link>
        </div>
        <div className='navbutton'>
            <Link to="https://github.com/cbdevsec" style={{ textDecoration: 'none', color:'white'}}><a><BiGitBranch /></a></Link>
        </div>
    </nav>
  )
}

export default Navbar