import { FilterLabel } from "../interfaces/general.interface";

export const formFields = [
  {
    name: "model",
    label: "Model",
    disabled: true,
  },
  {
    name: "color",
    label: "Color",
  },
  {
    name: "manufacture",
    label: "Year of Manufacture",
  },
  {
    name: "insurance",
    label: "Insurance Valid upto",
  },
  {
    name: "km",
    label: "Kms",
  },
  {
    name: "location",
    label: "Location",
  },
  {
    name: "owners",
    label: "No of Owners",
  },
  {
    name: "transmission",
    label: "Transmission",
  },
  {
    name: "external",
    label: "External Fitments",
  },
  {
    name: "photo",
    label: "Photo",
    type: "file",
  },
];

export const filtersLabel: FilterLabel = {
  Location: "Location",
  BodyType: "BodyType",
  Brand: "Brand",
  Owners: "Owners",
  FuelType: "FuelType",
  Transmission: "Transmission",
};

export const Locations = ["Chennai", "bangalore"];
export const BodyType = ["Hatchback", "Sedan", "SUV"];
export const Brand = ["Maruti", "Bmw", "Audi"];
export const Owners = ["1st Owner", "2nd Owner", "3rd Owner"];
export const Fuel = ["Petrol", "Diesel", "CNG"];
export const Transmission = ["Automatic", "Manual"];
export const NotFound = "Results not found";
