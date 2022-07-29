import React from "react";

const BookMark = ({ status, ...rest }) => {
  const handleChangeStatus = () => {
    return status === 0 ? "bi bi-suit-heart-fill" : "bi bi-suit-heart";
  };
  const handleChangeBookMark = (id) => {
    Object.values(rest).map((c) => console.log("c :>> ", id));
  };
  return (
    <>
      <button
        onClick={() => handleChangeBookMark(...rest._id)}
        className={handleChangeStatus()}
      ></button>
    </>
  );
};

export default BookMark;
