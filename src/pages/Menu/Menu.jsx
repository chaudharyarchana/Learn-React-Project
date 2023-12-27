import { useState } from 'react';
import data from './data.jsx';


const Food =({item})=>{
    return(
        <div className='shadow-xl mb-20 hover:shadow-2xl'  style={{height:"80vh",width:"30%"}}>
            <div className='h-2/3 overflow-hidden '>
                <img src={item.img} className='h-full w-full object-cover'/>
            </div>
            <div className='relative'>
                <h1 className='text-lg  ml-8 font-medium capitalize'>{item.title}  <span className='text-end px-2 bg-orange-500 text-white rounded-sm absolute top-0 right-0'>${item.price}</span></h1>

                <p className='text-gray-600 mx-8 mt-5'>{item.desc}</p>
            </div>
        </div>
    )
}



const Menu=()=>{

    const[menu,setMenu]=useState(data)
    return(
      <div>
        <div className="mt-10 text-center">
            <h1 className="text-4xl  relative inline-block ">
                 Our Menu
            <span className="absolute top-12 left-7 right-0 w-2/3 h-1  bg-orange-500"></span>
            </h1>   
            </div>

        <div className="flex w-fit mx-auto mt-10">
            <button className="w-fit px-4 ml-5 rounded-sm bg-orange-500 text-white " onClick={()=>{
                setMenu(data);
            }}>All</button>
            <button className="w-fit px-4 ml-5 rounded-sm bg-orange-500 text-white " onClick={()=>{
                const breakfast=data.filter(item=> item.category ==="breakfast");
                setMenu(breakfast)
            }}>Breakfast</button>
            <button className="w-fit px-4 ml-5 rounded-sm bg-orange-500 text-white " onClick={()=>{
                const lunch=data.filter(item=>item.category === "lunch");
                setMenu(lunch)
            }}>Lunch</button>
            <button className="w-fit px-4 ml-5 rounded-sm bg-orange-500 text-white " onClick={()=>{
                const shakes= data.filter(item=> item.category === "shakes") 
                setMenu(shakes)
            }}>Shakes</button>
            </div>  

        <div className='flex flex-wrap w-full mt-10 justify-evenly'>
            {
                menu.map((item)=>(
                    <Food item={item}/>
                ))
            }
            </div>      
      </div>
    )
}

export default Menu;
