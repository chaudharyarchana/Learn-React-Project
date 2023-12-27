import { useState } from "react"

const data=[{
    question:"Do I Have To Allow The Use Of Cookies?",
    answer:"Unicorn vinyl poutine brooklyn next level direct trade iceland  Shaman copper mug church key coloring book whatever poutine normcore fixie cred kickstarter post ironic street art."
},
{
    question:"How Do I Change My My Page Password?",
    answer:"Unicorn vinyl poutine brooklyn next level direct trade iceland  Shaman copper mug church key coloring book whatever poutine normcore fixie cred kickstarter post ironic street art."
},{
    question:"What Is BankID?",
    answer:"Unicorn vinyl poutine brooklyn next level direct trade iceland  Shaman copper mug church key coloring book whatever poutine normcore fixie cred kickstarter post ironic street art."

},{
    question:"Whose Birth Number Can I Use?",
    answer:"Unicorn vinyl poutine brooklyn next level direct trade iceland  Shaman copper mug church key coloring book whatever poutine normcore fixie cred kickstarter post ironic street art."

}]
const Card=({item})=>{
    const[answer,setAnswer]=useState(false)
    
    return(
        <div className="w-full h-auto mb-5">
          <h1 className="ml-5 text-lg">{item.question} <span className="cursor-pointer border-2 rounded-lg" onClick={()=>{setAnswer(!answer)}}>{answer? "-":"+"}</span></h1>
          {answer && <p className="text-sm ml-5">{item.answer}</p>}
        </div>
    )
}

const Questions=()=>{
    
    return(
        <div className="w-96 h-96 shadow-lg border-2 mx-auto mt-24">
            <h1 className="text-center text-2xl my-5 font-medium">Questions</h1>
            {data.map((item)=>(
                <Card item={item}/>
            ))}
            
        </div>
    )
}

export default Questions;