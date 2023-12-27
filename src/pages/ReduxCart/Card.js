import React from "react";

const Card = ({ item ,setItems}) => {
  const {
    title,
    brand,
    discountPercentage,
    price,
    rating,
    thumbnail,
    
  } = item;

  return (
    <div className="card w-1/5 h-80 mx-5 my-5">
      <img src={thumbnail} alt="" className="w-full h-1/2 object-cover" />
      <div className="card-content">
        <h3 className="font-bold">{title}</h3>
        <p>Brand: {brand}</p>
        <p>Discount: {discountPercentage}%</p>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <button 
        className="border-2 bg-blue-800 text-white rounded-lg px-5"
        onClick={()=>setItems((prev)=>[...prev , item.price])}
        >Add</button>
      </div>
    </div>
  );
};

export default Card;
