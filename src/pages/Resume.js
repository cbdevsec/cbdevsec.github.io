import React from 'react'
import Navbar from '../componants/Navbar'
import Footer from '../componants/Footer'
import './../App.css'
import { Link } from 'react-router-dom'

function Resume() {
  return (
    <>
    <Navbar />
    <div className='full-page'>
      <div>
        <h1>Resume</h1>
        <h3>🎓 Aya Khiouat</h3>
        <p>📍 Algiers, Algeria · 📧 ayakhiouat@gmail.com · 🌐 <Link to='https://www.linkedin.com/in/ayakh' className='linkedin-link'>Linkedin</Link></p>
        <h3>Summary:</h3>
        <p>Junior Cybersecurity Analyst with hands-on experience in community-driven tech initiatives, cybersecurity simulations, and IT systems. Equipped with strong web development skills, CCNA certification, and a background in system maintenance. Fluent in four languages and known for leadership, communication, and adaptability in fast-paced environments.</p>
        <h3>Education:</h3>
        <h4>IT System Maintenance (MSI) - INSFP Mohammadia</h4>
        <p>October 2024 - June 2027</p>
        <h5>Science de la matiere LMD - USTHB</h5>
        <p>September 2022 - June 2024</p>
        <h3>Skills and tools:</h3>
        <p>Cybersecurity: Threat Management, Incident Response, Cyber Simulations</p>
        <p>IT & Networking: Cisco CCNA, System Maintenance</p>
        <p>Development: Web Development, Firebase</p>
        <p>Soft Skills: Team Leadership, Communication, Multilingual</p>
        <p>Languages: Arabic (Native), English (C2), French (Professional), Korean (Limited)</p>
        <h3>Certifications:</h3>
        <p>Cisco CCNA</p>
        <p>Cyber Threat Management</p>
        <p>Datacom - Cybersecurity Job Simulation</p>
        <p>Commonwealth Bank - Intro to Cybersecurity Job Simulation</p>
        <p>EF SET Certificate (C2 – 73/100)</p>
        <p>Financial Markets</p>
        <h3>Experience:</h3>
        <h4>Micro Club – Robotics & IT Team</h4>
        <h5>📍 Algiers, Algeria | March 2023 – May 2025</h5>
        <p>Operated and maintained robotic systems in competitive and academic contexts</p>
        <p>Served as IT Member, assisting in club infrastructure and tech support</p>
        <h4>Shellmates Club – Community Assistant</h4>
        <h5>📍 Remote | Nov 2023 – June 2024</h5>
        <p>Supported online community initiatives focused on cybersecurity learning and collaboration</p>
        <h4>English Speakers Club USTHB</h4>
        <h5>📍 Algiers, Algeria</h5>
        <p>Vice Head of IT (Jan – May 2024): Managed internal IT systems and technical support</p>
        <p>Community Manager & Content Creator (Apr 2023 – May 2024): Produced and published educational content</p>
        <p>Community Manager (Feb – Dec 2023): Grew engagement through events and digital campaigns</p>
        <h4>School of AI Algiers – Communications Lead</h4>
        <h5>📍 Algiers, Algeria</h5>
        <p>Lead, Communication Department (Oct – Dec 2023): Directed external communication strategies</p>
        <p>Community Manager (Nov 2022 – Nov 2023): Promoted AI education through outreach and content</p>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Resume