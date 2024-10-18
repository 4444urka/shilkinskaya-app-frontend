import React from "react";
import "./styles.css";

interface FormInputProps {
  label: string;
  type?: string;
}

// Поле для ввода данных в форму
// TODO: Достилизовать компонент
const FormInput: React.FC<FormInputProps> = ({ label, type }) => {
  return (
    <label>
      {label}
      <input className="formInput" type={type} />
    </label>
  );
};

export default FormInput;
