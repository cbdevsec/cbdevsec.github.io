import React from 'react'
import './here.css'
import Navbar from '../Componants/Navbar'
import Blog1 from '../assets/blog1.png'
import Blog2 from '../assets/blog2.png'
import Blog3 from '../assets/blog3.png'
import Blog4 from '../assets/blog4.png'

const Here1 = () => {
  return (
    <>
    <Navbar />
      <div className='here'>
        <div className='sep'>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
        <div className='blog-content'>
          <h2>Blog Posts</h2>
          <div className='blogs'>
            <div>
              <img src={Blog4}></img>
              <img src={Blog3}></img>
            </div>
            <div>
              <img src={Blog2}></img>
              <img src={Blog1}></img>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Here1