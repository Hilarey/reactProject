import React from "react";

const BookMark = ({ onTooggleBookMark, status, id }) => {
  const handleChangeStatus = () => {
    return status === false ? "bi bi-suit-heart" : "bi bi-suit-heart-fill";
  };

  return (
    <>
      <button
        onClick={() => onTooggleBookMark(id)}
        className={handleChangeStatus()}
      ></button>
    </>
  );
};

export default BookMark;
