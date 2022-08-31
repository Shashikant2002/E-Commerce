import React from 'react';
import "./alert.css";

const Alert = ({error, show}) => {
  return (
    <div style = {show ? {display: "block"} : {display: "none"}} className='alert'>
      <h2>Alert: </h2> <p>{error}</p>
    </div>
  )
}

export default Alert
