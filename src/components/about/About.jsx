import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
//import profile from '../../assets/Profile.jpeg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        {/* <div className="profile">
          <div className="profile">
            <img src={profile} alt="Profile" />
          </div>
        </div> */}
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Company</h5>
              <small>1 Work With</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed </small>
            </article>
          </div>
          <p>
            Front-End Developer with 4 years of experience building responsive, user-centric web applications using HTML,
CSS, JavaScript, and Bootstrap. Skilled in collaborating with cross-functional Agile teams to deliver scalable,
high-quality solutions with a focus on performance optimization, clean code, and excellent user experience.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About