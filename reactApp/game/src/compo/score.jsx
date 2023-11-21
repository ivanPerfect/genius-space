import React from 'react';
import './score.css'

export default function Score(props) {
  return (
    <button className='score' onClick={props.onClick}>
      {props.value}
    </button>
  )
}
