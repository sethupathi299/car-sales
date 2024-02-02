import React, { useEffect, useState } from "react";
import FormInput from "../input/FormInput";

interface SelectProps {
  items: Array<string>;
  onChange: (e: string) => void;
  value: string;
}

const Select = (props: SelectProps) => {
  const { items, onChange, value } = props;
  const [searchText, setSearchText] = useState(value);

  useEffect(() => {
    onChange(searchText);
  }, [searchText]);

  return (
    <div>
      <FormInput
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        value={searchText} 
        placeholder="Search ..."
      />
      <div className="bg-light w-75">
        {items.map((e) => {
          if (e.toLowerCase().includes(searchText))
            return (
              <div
                onClick={() => setSearchText(e)}
                className="p-2"
              >
                {e}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Select;
