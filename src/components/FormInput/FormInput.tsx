import React from "react";
import "./styles.css";

interface FormInputProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

// Поле для ввода данных в форму
// TODO: Достилизовать компонент
const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div>
      <label>
        {label}

        <input
          type={type}
          value={value}
          onChange={onChange}
          className="formInput"
        />
      </label>
    </div>
  );
};

export default FormInput;
