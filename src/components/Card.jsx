import React from "react";
import "../style/card.scss";
const Card = (props) => {
  const {name,img,price} = props.data
  return (
    <div className="card-contain">
      <img src={img}/>
      <div>
        <h2>{name}</h2>
        <h4>{price}</h4>
        <button onClick={()=>props.button(props.data)}>Add to cart</button>
      </div>
    </div>
  );
};
export default Card;
