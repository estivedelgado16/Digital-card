import React  from 'react';
import photo from '../assets/avatar.jpg'
import Css from '../styles/Avatar.css'


function Avatar() {
  return (
    <div className='avatar'>
      <img src={photo} alt="avatar" />
    </div>
  )
}

export default Avatar
