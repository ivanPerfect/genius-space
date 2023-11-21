import React, { useState } from "react";
import "./game.css";
import Border from "./border";
import { calculateWinner } from "../helper";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xisNext, setXIseNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardCopy = [...board];

    if(winner || boardCopy[index]){
      return
    }
    boardCopy[index] = xisNext ? 'X':'O';
    setBoard(boardCopy);
    setXIseNext(!xisNext)
  };

  const startNewGame = ()=> {
    return (
      <button className='start__btn' onClick={()=>setBoard(Array(9).fill(null))}>
        Очистить поле
      </button>
    )
  }
  return (
    <div className="wrapper">
      {startNewGame()}
      <Border squares={board} click = {handleClick}/>
      <p>
        {winner ? 'Winner '+ winner : "Ход "+ (xisNext ? 'X': 'O')}
      </p>
    </div>
  );
}
