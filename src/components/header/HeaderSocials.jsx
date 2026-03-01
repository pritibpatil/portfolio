import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
 
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/priti-patil-18913a233" target="_blank" rel="noreferrer noopener"><BsLinkedin/></a>
        <a href="https://github.com/pritibpatil/" target="_blank" rel="noreferrer noopener"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
