import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
        {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Website Development</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom Website Development</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>React Development</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>UI Implementation from Design</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Redesign</p>
              </li>
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Bug Fixing & Maintenance</p>
              </li> 
              <li>
              <BiCheck className='service__list-icon'/>
              <p>Version Control & Deployment</p>
              </li>
          </ul>
        </article>
        {/* END OF WEB DESIGN */}
      </div>
    </section>
  )
}

export default Services