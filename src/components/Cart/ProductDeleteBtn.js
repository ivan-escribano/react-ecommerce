import React from "react";

const ProductDeleteBtn = ({ id, item, setItem, setAlertShow }) => {
  const deleteItem = () => {
    const deleteItem = item.filter((element) => {
      if (element.id !== id) {
        return element;
      } else {
        element.quantity = 0;
      }
    });

    setItem(deleteItem);
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={deleteItem}>
        Delete
      </button>
    </div>
  );
};

export default ProductDeleteBtn;
