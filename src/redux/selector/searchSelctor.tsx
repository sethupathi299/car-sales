import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { FilterItems } from "../../context/ProductContext";

const getStateSlice = (state: RootState) => state.productReducer;

const getProducts = createSelector([getStateSlice], (slice) => {
  return slice?.products;
});

const getByFilterValues = (data: Array<any>, key: string, value?: string) => {
  return data.filter((e) =>
    e[key].toLowerCase().includes(value?.toLowerCase())
  );
};

const getFilteredProducts = (filter: FilterItems) =>
  createSelector(getProducts, (data) => {
    let filtered = data || [];
    Object.entries(filter).map((e) => {
      return filtered = getByFilterValues(filtered, e[0], e[1]);
    });

    return filtered;
  });

export { getFilteredProducts };
