import React  from 'react';
import photo from '../assets/avatar.jpg'
import './Avatar.css'


function Avatar() {
  return (
    <div className='avatar'>
      <img className='img-avatar' src={photo} alt="avatar" />
    </div>
  )
}

export default Avatar
