import React from "react";

const Qualitie = ({ ...qualities }) => {
  return (
    <>
      {Object.values(qualities).map(({ _id, name, color }) => (
        <span className={"badge m-1 bg-" + color} key={_id}>
          {name}
        </span>
      ))}
    </>
  );
};

export default Qualitie;
