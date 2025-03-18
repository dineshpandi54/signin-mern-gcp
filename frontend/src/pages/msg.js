import React from 'react';
import './msg.css';
import { Link } from 'react-router-dom';

const Msg = () => {
  return (
    <div className='msg-page'>
        <div className='msg-container'>
            <h3>Thank You</h3>
            <p>your response was successfully submitted</p>
            <Link to={'/home'}>Go back</Link>
            
        </div>
    </div>
  )
}

export default Msg  