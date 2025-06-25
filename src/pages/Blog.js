import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import './../App.css'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
    <Navbar />
    <div className='full-page'>
        <h1>Blog</h1>
        <div className='blogs'>
          <div className='blog-post'>
            <Link to='/blog1' className='blog-link'>
              <h3>Implementation of AI in Luxury Retail (LVMH as an example)</h3>
            </Link>
          </div>
          <div className='blog-post'>
            <Link to='/blog2' className='blog-link'>
              <h3>Exploring Aura Blockchain Consortium: Security Challenges and Mitigations</h3>
            </Link>
          </div>
          <div className='blog-post'>
            <Link to='/blog3' className='blog-link'>
              <h3>Debunking the Myth of Studying Early in the Morning:</h3>
            </Link>
          </div>
          <div className='blog-post'>
            <Link to='/blog4' className='blog-link'>
              <h3>The Procrastination Puzzle: Breaking it Down and Getting Things Done</h3>
            </Link>
          </div>
        </div>  
    </div>
    <Footer />
    </>
  )
}

export default Blog