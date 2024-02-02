import React from "react";

const Card = ({ image, label }: { image: string; label: string }) => {
  return (
    <div className="bg-white col rounded m-2 p-2 d-flex align-items-center flex-column">
      <img alt="brand" className="rounded" height={100} src={image} />
      <div className="h3 pt-3">{label}</div>
    </div>
  );
};

export default Card;
