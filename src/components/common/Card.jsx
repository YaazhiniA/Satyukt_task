import React from "react";

const Card = ({ label, data, color }) => {
  return (
    <React.Fragment>
      <div className={color + " column-card "}>
        <div>
          <h1>{label}</h1>
          <h2>{data}</h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
