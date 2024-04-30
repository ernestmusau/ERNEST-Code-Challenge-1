import React from "react";
import Item from "./Item";

const List = ({ items }) => {
  return (
    <div className="list">
      <Item props={items}/>
    </div>
  );
};

export default List;
