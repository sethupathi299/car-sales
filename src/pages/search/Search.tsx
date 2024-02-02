import React, { useEffect, Key } from "react";
import {
  BodyType,
  Brand,
  Fuel,
  Locations,
  NotFound,
  Owners,
  Transmission,
  filtersLabel,
} from "../../constants/Constants";
import { Card, CheckBox, Select } from "../../components";
import { CarItems } from "../../interfaces/general.interface";
import { useProductContext } from "../../context/ProductContext";
import data from "../../json/brands.json";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/reducers/ProductReducer";
import { getFilteredProducts } from "../../redux/selector/searchSelctor";

const Search = () => {
  const dispatch = useDispatch();
  const { filters, setFilters } = useProductContext();
  const products = useSelector(getFilteredProducts(filters));

  useEffect(() => {
    dispatch(setProducts(data.items));
  }, []);

  const renderFilterSection = () => {
    return (
      <div>
        <div>
          <div className="fw-bold">{filtersLabel.Location}:</div>
          <select
            className="p-2 mt-2"
            value={filters.Location}
            onChange={(e) =>
              setFilters({
                ...filters,
                [filtersLabel.Location]: e.target.value,
              })
            }
          >
            <option>select</option>
            {Locations.map((e) => {
              return <option value={e}>{e}</option>;
            })}
          </select>
        </div>

        <div>
          <div className="fw-bold my-3">{filtersLabel.BodyType}</div>
          <Select
            items={BodyType}
            onChange={(e) =>
              setFilters({ ...filters, [filtersLabel.BodyType]: e })
            }
            value={filters.BodyType}
          />
        </div>

        <div>
          <div className="fw-bold my-3">{filtersLabel.Brand}</div>
          {Brand.map((e) => {
            return (
              <CheckBox
                label={e}
                checked={e === filters.Brand}
                onChange={(e) =>
                  setFilters({ ...filters, [filtersLabel.Brand]: e })
                }
              />
            );
          })}
        </div>

        <div>
          <div className="fw-bold my-3">{filtersLabel.Owners}</div>
          {Owners.map((e) => {
            return (
              <CheckBox
                label={e}
                checked={e === filters.Owners}
                onChange={(e) =>
                  setFilters({ ...filters, [filtersLabel.Owners]: e })
                }
              />
            );
          })}
        </div>

        <div>
          <div className="fw-bold my-3">{filtersLabel.FuelType}</div>
          {Fuel.map((e) => {
            return (
              <CheckBox
                label={e}
                checked={e === filters.FuelType}
                onChange={(e) =>
                  setFilters({ ...filters, [filtersLabel.FuelType]: e })
                }
              />
            );
          })}
        </div>

        <div>
          <div className="fw-bold my-3">{filtersLabel.Transmission}</div>
          {Transmission.map((e) => {
            return (
              <CheckBox
                label={e}
                checked={e.toLowerCase() === filters.Transmission.toLowerCase()}
                onChange={(e) =>
                  setFilters({ ...filters, [filtersLabel.Transmission]: e })
                }
              />
            );
          })}
        </div>
      </div>
    );
  };

  const renderResultsSection = () => {
    return (
      <div>
        <div className="row pt-3 d-flex align-items-center">
          {products.length ? (
            products.map((e: CarItems, i: Key) => {
              return (
                <div key={i} className="col-3">
                  <div className="bg-white">
                    <Card label={e.Brand} image={e.logo} />
                    <span className="text-align-center px-2">
                      {e.BodyType}, {e.FuelType}, {e.Owners}, {e.Location}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="d-flex vh-100 align-items-center justify-content-center">
              <span className="fw-bold fs-large">{NotFound}</span>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="row py-3 w-100 ">
      <div className="col-4 bg-white rounded py-2">{renderFilterSection()}</div>
      <div className="col-8">{renderResultsSection()}</div>
    </div>
  );
};

export default Search;
