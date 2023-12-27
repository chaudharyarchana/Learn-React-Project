import { useState } from 'react';
import {Tourdata} from './data'
import Card from './Card';

const Tours =()=>{
    const[data,setData]=useState(Tourdata);

    const handleRemove=(id)=>{
       setData(data.filter(item=> item.id !==id))
    }

    return(
        <div>
        <div className="w-fit mx-auto mt-10 mb-8">
            <h1 className="text-4xl  relative inline-block ">
                 Our Tours
            <span className="absolute top-12 left-7 right-0 w-2/3 h-1  bg-green-600"></span>

            </h1>   
        </div>
           <div className='w-full flex flex-wrap '>
           {data.map((item)=>(
              <Card item = {item} handleRemove={handleRemove}/>
           ))}
        </div>
        </div>
        
    )
}

export default Tours;