import React from "react";

const Rating = ({ rate }) => {
  return (
    <>
      {Array(rate)
        .fill(2)
        .map((v, i) => (
          <span className="fa fa-star checked" key={v + i}></span>
        ))}

      {Array(5 - rate)
        .fill(1)
        .map((v, i) => (
          <span className="fa fa-star" key={v + i}></span>
        ))}
    </>
  );
};

export default Rating;
