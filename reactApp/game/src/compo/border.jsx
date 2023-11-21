import React from 'react';
import "./border.css";
import Score from './score'


export default function Border({squares, click}) {
  return (
    <div className='border'>
    {
      squares.map((squer, i) => (
        <Score key={i} value={squer} onClick={()=> click(i)}/>
      ))
    }
    </div>
  )
}
