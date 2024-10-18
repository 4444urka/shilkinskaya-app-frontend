import React from 'react'
import "./styles.css"

interface SubmitButtonProps {
    children: React.ReactNode;
    type: string;
    
}

// Кнопка, которая используется для отправки формы
// TODO: Достилизовать компонент
const SubmitButton: React.FC<SubmitButtonProps> = ({children}) => {
  return (
    <button className='submitButton'>{children}</button>
  )
}

export default SubmitButton