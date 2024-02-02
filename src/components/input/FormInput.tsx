import React from "react";
import { FInput } from "../../interfaces/general.interface";

function FormInput(props: FInput) {
  const { onChange, value, type, name, disabled, checked,placeholder } = props;
  return (
    <div>
      <input
        name={name}
        className="p-2 px-3 rounded"
        onChange={onChange}
        value={value}
        type={type}
        disabled={disabled}
        checked={checked}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormInput;
