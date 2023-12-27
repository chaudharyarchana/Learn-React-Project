import { useEffect ,useState} from "react"
import { DataObj } from "./DataObj"
import Weather from './Weather'

const WeatherApp=()=>{
 

 const[city,setCity] = useState('delhi')
 const[input,setInput] = useState('')
 const[data,setData] = useState(null)
 const[icon,setIcon] =useState()
 const[bg,setBg] = useState('#87CEEB')

 async function getData(city){
     const apiKey = '5cf0288f3687726736bc27eaa57978cf';
     
     try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units="metric"`)
      if (!response.ok) {
        // Handle non-successful responses (e.g., network error, server error)
        throw new Error(` ${response.status}`);
      }
  
      const Wdata = await response.json();
      setData(Wdata);
      console.log(Wdata)
      handleBg(Wdata.weather[0].description)
      
    
     } catch (error) {
      alert(error.message+" city not found")
     }
 }

 
 useEffect(()=>{
      getData(city);
     
 },[city])

 const handleInput=(e)=>{
    setInput(e.target.value)
 }
 const handlePress=(e)=>{
   if(e.key === 'Enter'){
    setCity(input)
    setInput('')
   }
 }

  const handleBg=(data)=>{
    let count=0;
  for(let i=0; i<DataObj.length;i++){
    if(DataObj[i].id.includes( data)){
      count++;
      console.log(DataObj[i].bg)
      setBg(DataObj[i].bg)
      setIcon(DataObj[i].icon)
    }

  }
  if(!count){
   setBg('#87CEEB')
  }
    
  }

  const dynamicStyles = {
    backgroundColor: bg,
    // Add more styles based on your conditions
  };

 

  return(
    
    <div className="bg-cover bg-center h-screen " style={dynamicStyles} >
     <input  
       type="text"
       placeholder="Enter City"
      className="px-1/2 py-1 rounded-lg bg-white text-gray-800 text-left placeholder-gray-400 w-1/2 mx-1/2    border-2 border-black-600  focus:outline-none focus:border relative top-20 left-1/4" 
      value={input} 
      onChange={handleInput }
      onKeyPress={handlePress}
      />  
    <Weather data={data} icon={icon}/>
    </div>
   
  )
  
}

export default WeatherApp