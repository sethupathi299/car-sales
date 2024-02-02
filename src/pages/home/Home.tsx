import React, { useState, useEffect } from "react";
import { Card, FormInput } from "../../components/index";
import { formFields } from "../../constants/Constants";
import { CarItems } from "../../interfaces/general.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setProducts } from "../../redux/reducers/ProductReducer";
import { useNavigate } from "react-router-dom";
import data from "../../json/brands.json";
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [carDetails, setCarDetails] = useState<{ [key: string]: string }>({
    model: "",
  });
  const [selected, setSelected] = useState(false);

  const products = useSelector(
    (state: RootState) => state.productReducer.products
  );

  useEffect(() => {
    const sectionBody: HTMLElement | null =
      document.getElementById(`product-form`);
    sectionBody &&
      sectionBody.scrollIntoView({
        behavior: "smooth",
      });
  }, [carDetails.model]);

  const updateDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarDetails({ ...carDetails, [e.target.name]: e.target.value });
  };

  const changeProduct = (e: CarItems) => {
    setSelected(true);
    setCarDetails({ model: e.Brand });
  };

  const submitForm = () => {
    let prevList: Array<any> = [...products];
    prevList.push(carDetails);
    dispatch(setProducts(prevList));
  };

  const renderBrands = () => {
    return (
      <div className="row pt-3 d-flex align-items-center">
        {data.items.map((e: CarItems, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                changeProduct(e);
              }}
              className="col-3"
            >
              <Card label={e.Brand} image={e.logo} />
            </div>
          );
        })}
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div id="product-form" className="row bg-white pb-4">
        {formFields.map((e: any, i) => {
          const { type = "", label, name, disabled } = e;
          return (
            <div
              key={i}
              className="my-2 d-flex col-6 align-items-center justify-content-between"
            >
              <div className="border form-label text-center rounded bg-white px-3 py-2">
                {label}
              </div>
              <FormInput
                type={type}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  updateDetails(e)
                }
                value={carDetails[name]}
                name={name}
                disabled={disabled}
              />
            </div>
          );
        })}

        <div className="d-flex mt-3 align-items-center justify-content-center">
          <button
            onClick={() => submitForm()}
            className="bg-white px-3 py-2 border-1 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="col w-100">
      <div className="d-flex mt-3 align-items-center justify-content-end">
        <button
          onClick={() => history("/search")}
          className="bg-white px-3 py-2 border-1 rounded"
        >
          View
        </button>
      </div>
      {renderBrands()}
      {selected && renderForm()}
      {products.map((e: {}, i) => {
        return (
          <div key={i} className="mb-3">
            {Object.entries(e).map((items: any, k) => {
              return (
                <div key={k}>
                  {items[0]} : {items[1]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
