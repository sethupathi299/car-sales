import React from "react";
import Router, { routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import "./App.css";

const App = () => {
  return (
    <div className="bg-light">
      <div className="container">
        <BrowserRouter>
          <ProductProvider>
            <Router routes={routes} />
          </ProductProvider>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
