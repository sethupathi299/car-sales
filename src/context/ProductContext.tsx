import React, { createContext, useContext, useState } from "react";

export interface FilterItems {
  Location?: string;
  BodyType: string;
  Brand?: string;
  Owners?: string;
  FuelType?: string;
  Transmission: string;
}

const ProductContext = createContext({
  filters: {} as FilterItems,
  setFilters: (e: FilterItems) => {},
});

export const ProductProvider = (props: { children: JSX.Element }) => {
  const [filters, setFilters] = useState({
    Location: "",
    BodyType: "",
    Brand: "",
    Owners: "",
    FuelType: "",
    Transmission: "",
  });

  let value = {
    filters,
    setFilters,
  };

  return (
    <ProductContext.Provider value={value as any}>
      {props.children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
