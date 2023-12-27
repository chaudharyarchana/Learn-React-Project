import { Route,Routes } from "react-router-dom"
import Home from './Home'
import Menu from './pages/Menu/Menu'
import Tour from './pages/Tours/Tours'
import Review from './pages/Review'
import Stopwatch from './pages/stopwatch/Stopwatch'
import Questions from './pages/Questions'
import Birthday from './pages/birthdaybuddy/Birthdaybuddy'
import WeatherApp from './pages/weather/WeatherApp'
import Calculator from './pages/calculator/Calci'
import Cart from './pages/ReduxCart/Product'
import Currency from './pages/currency/App'


const App = () =>{
  return(
    <>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/weather' element={<WeatherApp/>}/>
        <Route path="/calculator" element={<Calculator/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/tour' element={<Tour/>}/>
        <Route path='/birthday' element={<Birthday/>}/>
        <Route path='/stopwatch' element={<Stopwatch/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/questions' element={<Questions/>}/>
        <Route path='/currency' element={<Currency/>}/>


      </Routes>
    </>
  )
}

export default App