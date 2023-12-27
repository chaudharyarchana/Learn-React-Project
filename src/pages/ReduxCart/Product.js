import React, { useEffect, useState } from 'react';
import Card from './Card';
import { CartContext } from './CartContext';
import { useContext } from 'react';


const Navbar = ({sum}) => {
   const items = useContext(CartContext)
  return(
      <div className="w-full h-16 bg-pink-300 fixed">
         <h1 className="font-bold text-center pt-5 text-xl">  Items:{items.length}  Total Price:{sum}</h1>
      </div>
  )
}

const Product = () => {
  const [products, setProducts] = useState([]);
  const[items,setItems] =useState([])

  const sum = items.reduce((a,b)=> a+b ,0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log(data)
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once, similar to componentDidMount

  return (
    <>
    <CartContext.Provider value={items}>
    <Navbar sum={sum}/>
    <div className='flex flex-wrap justify-evenly pt-20'>
      {products.map((item) => (
        <Card  item={item} setItems={setItems} />
      ))}
    </div>
    </CartContext.Provider>
    </>
  );
};

export default Product;
