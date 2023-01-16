import React from 'react'
import './about.css'
import ME from '../../asset/me2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Samuel Omolaja Profile" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Year Working</small>
            </article>
            
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>5+ Nationwide</small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>

          <p>
            Hi, I'm a self-driven individual with passion for learning, and building with modern technolgy and testing tools.
            <br />
            Experience with the latest cutting edge development tools and procedures for building <em>JavaScript</em> applications, as well utilizing enterprise level languages like <em>Java</em>  to deliver solutions with a customer first approach. performance and scalabilty are priorities on my radar.
            <br />
            When I’m not coding or brainstorming on a new project, I’m either locked away in my library going through future tech, checking my stock portfolio, or playing Call of Duty War Zone.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
