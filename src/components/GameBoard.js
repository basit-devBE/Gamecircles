import React from "react";
import GameCircle from "./GameCircle";
import '../cssFiles/Gameboard.css'
import { useState } from "react";

const No_PLAYER = 0;
const PLAYER1 = 1;
const PLAYER2 = 2;


const GameBoard =()=>{
    const [gameBoard,setGameBoard]=useState(Array(16).fill(0));
    const [currentPlayer,setCurrentPlayer]=useState(PLAYER1);


    console.log(gameBoard);
    const onCircleClicked =(id)=>{
        console.log('circle clicked:' + id);

      const board = [...gameBoard];
      board[id] = currentPlayer;
      setGameBoard(board);

      setCurrentPlayer(currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1);
      console.log(gameBoard)
      console.log(currentPlayer)
        } 
    const renderCircle = id =>{
        return(
            <GameCircle id={id} CircleClicked={onCircleClicked} className={`player${gameBoard[id]}`}></GameCircle>

        )

    }
    return( 
            <div className="gameBoard">
             {renderCircle(0)}   
             {renderCircle(1)}   
             {renderCircle(2)}   
             {renderCircle(3)}   
             {renderCircle(4)}   
             {renderCircle(5)}   
             {renderCircle(6)}   
             {renderCircle(7)}   
             {renderCircle(8)}   
             
            </div>
    )
}

export default GameBoard