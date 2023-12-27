import { useState } from "react";

const data = [{
    id:0,
    src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFufGVufDB8fDB8fHww",
   
    name:"Archana Kumari",
    age : 23
    
},{
    id:1,
    src: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8fHww ",
    name:"Raj Chaudhary",
    age:24
} ,{
    id:2,
    src:"https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGh1bWFufGVufDB8fDB8fHww",
    name:"Krishna Kumar",
    age:21
}]

const Birthdaybuddy= ()=>{

   const[show,setShow]= useState(true)

    return(
        <>
        <div style={{width:"100wv" , height:"100vh"}} className="bg-pink-300 relative">
            <div className="w-1/2  bg-white absolute top-20 left-1/4 rounded-md shadow-md pb-10">
             <h1 className="text-3xl m-5">{show ? "3" : "0"} birthdays Today</h1>
            { show && data.map((item)=>(
                  
                 <div className='ml-4 mt-3 flex' key={item.id}>
                    <div className='w-20 h-20 bg-black rounded-full overflow-hidden object-cover '>
                      <img src={item.src} alt="my photo" className='w-full h-full object-cover ' />
                    </div>
                    <div className='ml-4 mt-2'>
                 <h1 className="text-2xl font-semibold">{item.name}</h1>
                 <h1 className="text-gray-500">{item.age} Years</h1>
                 </div>
                 </div> 
             ))}
             
             <button className='w-11/12 h-10 bg-pink-300 rounded-xl mx-6 mt-10 shadow-xl' onClick={()=>{
                setShow(false)
             }}>Clear All</button>
              
               
            </div>
        </div>
        </>
    )
}
export default Birthdaybuddy;