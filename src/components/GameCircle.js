import React from 'react'
import '../cssFiles/Gameboard.css'







const GameCircle = ({children, id,CircleClicked, className}) => {    
  return (
    <div onClick={()=>CircleClicked(id)} className={`gameCircle ${className}`}>   
         {children}
    </div>
  )
}

export default GameCircle

