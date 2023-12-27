import { useState } from "react";

const Kdata=[{
    id:0,
    src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh1bWFufGVufDB8fDB8fHww",
    
    name:"Archana Kumari",
    role:"Web Developer",
    description:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
},
{
    id:1,
    src: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8fHww ",
    
    name:"Raj Chaudhary",
    role:"Designer",
    description:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
},
{
    id:2,
    src:"https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGh1bWFufGVufDB8fDB8fHww",
    
    name:"Susan Smith",
    role:"Full Stack Developer",
    description:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
}]

const Review = ()=>{
    const[data,setData] =  useState(Kdata[0])

    const handleClick=(id)=>{
        if(id<2){
        setData(Kdata[id+1])}
        else{
            setData(Kdata[0])
        }
    }
    const handleBack=(id)=>{
        if(id>0){
            setData(Kdata[id-1])
        }
        else{
            setData(Kdata[2])
        }
    }

    return(
        <div className="bg-purple-400 relative" style={{width:"100vw", height:"100vh"}}>
            <div className=" w-1/2 h-2/3 absolute top-24 left-1/4 bg-white rounded-xl">
                  <div className='w-24 h-24 mx-auto mt-5 border-2 rounded-full overflow-hidden object-cover '>
                      <img src={data.src} alt="my photo" className='w-full h-full object-cover ' />
                    </div>
                    <h1 className="text-center font-semibold text-2xl mt-2">{data.name}</h1>
                    <h1 className="text-center font-medium text-purple-600 ">{data.role}</h1>
                    <p className="text-gray-500 py-5 px-10">{data.description}</p>
                    <button onClick={()=>{handleClick(data.id)}} className="border-2  border-purple-600 w-28 rounded-md mx-64">Next</button>
                    <button onClick={()=>{handleBack(data.id)}} className="border-2 border-purple-600 w-28 rounded-md mx-64">Back</button>
             </div>
        </div>
    )
}
export default Review;