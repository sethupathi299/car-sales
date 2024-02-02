export interface FInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  placeholder?: string;
}

export interface HForm {
  label: string;
  type?: string;
  name: string;
  disabled?: boolean;
}

export interface CarDetails {
  model: string;
  color: string;
}

export interface CarItems {
  logo: string;
  Location?: string;
  BodyType?: string;
  Brand: string;
  Owners?: string;
  FuelType?: string;
  Transmission?: string;
}

export interface FilterLabel {
  Location: string;
  BodyType: string;
  Brand: string;
  Owners: string;
  FuelType: string;
  Transmission: string;
}

export interface RouterProps {
  path: string;
  element: JSX.Element;
  key: Number;
  exact: boolean;
}

export interface ProductDetails {
  model: string;
  name?: string;
}
