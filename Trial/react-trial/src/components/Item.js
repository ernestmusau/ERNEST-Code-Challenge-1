import React from "react";

const Item = ({ props }) => {
  return props.map(({ id, name, members, image, description }) => (
    <div key={id}>
        <ul>
      <img src={image} alt="hello" />
      <h3>Name = {name}</h3>
      <p>Description = {description}</p>
      <p>Members = {members}</p>
      </ul>
    </div>
  ));
};

export default Item;
