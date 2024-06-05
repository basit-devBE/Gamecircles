import React, { useState, useEffect } from "react";
import GameCircle from "./GameCircle";
import '../cssFiles/Gameboard.css';
import Header from "./Header";
import Footer from "./Footer";
import isWinner from "./helper";

const NO_PLAYER = 0;
const PLAYER1 = 1;
const PLAYER2 = 2;

const GameBoard = () => {
  const [gameBoard, setGameBoard] = useState(Array(16).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER1);

  useEffect(() => {
    console.log(gameBoard);
  }, [gameBoard]);

//   const initBoard = () => {
//     setCurrentPlayer(PLAYER1);
//     setGameBoard(Array(16).fill(NO_PLAYER));
//   }

  const initiateBoard = () => {
    const circles = []
    for (let i = 0; i < 16; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  }

  const onCircleClicked = (id) => {
    console.log('circle clicked: ' + id);
   

    setGameBoard(prev => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      });

  
    });
   

    setCurrentPlayer(currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1);
  }

  const renderCircle = (id) => {
    return (
      <GameCircle 
        key={id}
        id={id} 
        CircleClicked={onCircleClicked} 
        className={`player${gameBoard[id]}`}
      />
    );
  }

  return (
    <>
        <Header Player={currentPlayer} />
        <div className="gameBoard">
        {initiateBoard()}
        </div>
        <Footer />
    </>
  );
}

export default GameBoard;
