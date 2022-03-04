import React from "react";
import { useSelector } from "react-redux";

function Main() {
  const { data } = useSelector((state) => state);
  console.log(data);
  const result = data.map(({ id, name, description,img_url,price,rating}) => {
    return (
      <div key={id}>
        <img width="30%" alt={name} src={img_url} />
        <p>{name}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{rating}</p>
      </div>
    );
  });
  return (
    <>
      <h2>this is Main</h2>
      {result}
    </>
  );
}

export default Main;
