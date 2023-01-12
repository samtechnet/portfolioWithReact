import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const headerSocials = () => {
  return (
    <div className='header__socials'>
          <a href="https://linkedin.com" target="_black"><BsLinkedin/></a>
          <a href="https://github.com" target="_black"><FaGithub/></a>
          <a href="https://samuelomolaja.com.ng" target="_black"><FiDribbble/></a>
    </div>
  )
}

export default headerSocials
