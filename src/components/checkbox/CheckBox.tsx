import React from "react";
import { FormInput } from "../index";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: (e: string) => void;
}

function CheckBox({ label, checked, onChange }: CheckBoxProps) {
  return (
    <div className="d-flex mr-3">
      <FormInput
        type="checkbox"
        onChange={(e) => onChange(e.target.value)}
        value={label}
        checked={checked}
      />
      <label>{label}</label>
    </div>
  );
}

export default CheckBox;
