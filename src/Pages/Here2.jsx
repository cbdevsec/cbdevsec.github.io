import React from 'react'
import './here.css'
import Navbar from '../Componants/Navbar'
import {Row} from 'react-bootstrap'
import GitHubCalendar from 'react-github-calendar'

const Here2 = () => {
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
        <div className='projects-content'>
          <h2>Projects</h2>
          <div className='git-cal'>
            <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
            <h3>GitHub Activity</h3>
              <div className='table'>
                <GitHubCalendar
                  username="cbdevsec"
                  blockSize={15}
                  blockMargin={5}
                  color="#c084f5"
                  fontSize={16}
                />
              </div>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Here2