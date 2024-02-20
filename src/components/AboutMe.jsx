import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <div className='AboutMe'>
      <h3 className='text-aboutme'>About me </h3>
      <p className='p-about-me'>Hi, I'm Brallam Delgado, I'm passionate about development and enjoy exploring new knowledge. 
        I am always looking for new opportunities to positively influence the programming environment.</p>
        <div className='Interests'>
          <h3>Interests</h3>
            <ul>
              <li>Open Source</li>
              <li>Problem Solving</li>
              <li>Web Tech Trends</li>
              <li>Hackathons</li>
            </ul>
        </div>
    </div>
  )
}

export default AboutMe
