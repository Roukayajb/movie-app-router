import React, { useState } from "react";

function RatingInput({ onChange }) {
  const cu = { cursor: "pointer" };
  const [rate, setRate] = useState(1);
  const changeR = (r) => {
    setRate(r);
    onChange(r);
  };
  return (
    <div className="tt">
      {Array(rate)
        .fill(2)
        .map((v, i) => (
          <span
            style={cu}
            onClick={() => changeR(i + 1)}
            className="fa fa-star checked"
            key={v + i}
          ></span>
        ))}

      {Array(5 - rate)
        .fill(1)
        .map((v, i) => (
          <span
            style={cu}
            onClick={() => changeR(rate + i + 1)}
            className="fa fa-star"
            key={v + i}
          ></span>
        ))}
    </div>
  );
}

export default RatingInput;
