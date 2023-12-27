import { useState } from "react"

const Card =({item, handleRemove})=>{
    const[read,setRead]=useState(false)

    return (
        <div className={`shadow-lg hover:shadow-2xl mx-5 mb-8 ${read ? "h-auto" : "h-fit"} rounded-lg`} key={item.id} style={{width:"30%"}}>
        <div className='w-full  overflow-hidden relative' style={{height:"40vh"}}>
             <img src={item.src} className='w-full h-full object-cover'/>
             <p className="bg-green-600 absolute top-0 right-0 w-16 h-8 text-lg text-center text-white">${item.price}</p>
        </div>
        <div>
         <h1 className='font-medium text-2xl mt-5 text-center'>{item.heading}</h1>
         <p className=' p-5 text-gray-500'> {read ?  item.description : item.description.split(' ').slice(0,30).join(" ")} <br/> 
         <span className='font-medium text-green-600 cursor-pointer'onClick={()=>{
             setRead(!read)
         }}>{read ? "Show Less" : "Read More"}</span>
         </p>
         <button className='w-1/2 border-2 mx-20 mb-3 border-green-600 rounded-lg shadow-xl' onClick={() => handleRemove(item.id)}>
           Not Interested
         </button>

        </div>

     </div>
    )
}
export default Card;