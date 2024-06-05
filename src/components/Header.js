import React from 'react'
import '../cssFiles/Gameboard.css'

const Header = ({Player}) => {
  return (
    <div className='panel header'>
        <div className='header-text'>Player {Player} Turn</div>
      
    </div>
  )
}

export default Header
