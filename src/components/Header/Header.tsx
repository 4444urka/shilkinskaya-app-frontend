import React from 'react'
import "./styles.css"

interface HeaderProps {
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({children}) => {
  return (
    <div className='header'>{children}</div>
  )
}

export default Header