

const Weather =({data,icon})=>{


return(
  (data && <div className=" text-gray-700 p-8 rounded-lg shadow-lg mx-auto w-1/2 mt-28">

  <div className="flex items-center justify-center text-center">
    <div>
      <h1 className="text-5xl font-bold">{data.name}, {data.sys.country}</h1>
      <div className='flex items-center mt-4'>
        <p className="text-4xl shadow-xl">{icon}</p>
        <h1 className="text-7xl ml-4">{(data.main.temp - 273.15).toFixed(1)}°C</h1>
      </div>
      <h1 className="text-3xl mt-5 ">{data.weather[0].description}</h1>


      <div className="flex mt-10 mb-5 text-left w-full ">
      <div className=" ">
        <h1 className="text-m px-4">Feels like {(data.main.feels_like - 273.15).toFixed(1)}°C</h1>
        <h1 className="text-m px-4">Wind {data.wind.speed} m/s</h1>
        <h1 className="text-m px-4">Visibility {data.visibility} km</h1>

      </div>

        <div>
          <h1 className="text-m">Min Temp {(data.main.temp_min - 273.15).toFixed(1)}°C</h1>
          <h1 className="text-m">Max Temp {(data.main.temp_max - 273.15).toFixed(1)}°C</h1>
          <h1 className="text-m">Humidity {data.main.humidity}%</h1>

        </div>
        
      </div>
    </div>
  </div>
</div>

))
}

export default Weather;