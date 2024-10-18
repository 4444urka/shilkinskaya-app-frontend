import React from "react";
import "./styles.css";

interface Button {
  children: React.ReactNode;
  type: "submit" | "button" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Кнопка, которая используется для отправки формы
// TODO: Достилизовать компонент
const Button: React.FC<Button> = ({ children, type, onClick }) => {
  return (
    <button className="submitButton" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
