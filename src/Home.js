import './App.css'
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { ProjectData } from './Components/ProjectData';
import { useState } from 'react';

const App = ()=>{
const[darkMode,setDarkMode] = useState(false)

    return (
    <div className={darkMode ? 'bg-gray-700' : 'bg-white'}>
    <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
    <div className=" items-center justify-between ">
      <h1 className="text-3xl text-center mt-5 font-bold text-blue-500">Projects</h1>
      <p className={darkMode ? 'text-white text-sm mt-1 text-center mb-3' : 'text-black text-sm mt-1 text-center mb-3'}>
  All these projects are based on React, React Hooks. Click on each project to learn more.
</p>

    </div>
    <div class="flex flex-wrap min-h-screen items-center justify-evenly  ">
    {
           ProjectData.map((item)=>(
            <Card {...item} />
           ))
    }

    </div>
   
     <Footer/> 
  </div>
  )
}
export default App;