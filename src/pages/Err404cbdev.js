import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import { Link } from 'react-router-dom'
import './../App.css'

function Err404cbdev() {
  return (
    <>
    <Navbar />
    <div className='full-page'>
      <div className='err404'>
        <h1>oops, you got lost...</h1>
        <Link to='/' className='back-home'><h1>go back home</h1></Link>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Err404cbdev