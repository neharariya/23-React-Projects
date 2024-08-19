import React,{useState,useEffect} from 'react'

export const WeatherApp = () => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9342020f078667b40331402ce157606e`)
            .then((response)=>response.json())
            .then((data)=>  {
                console.log(data);
                setWeather(data);
              })


        })
        
      }
    
     
    }, [])
    
  return (
    <div>
        {weather ? <div>
            <h1>Current Weather</h1>
            <h2>Temperature:-{weather.main.temp}</h2>
            <h2>Condition:-{weather.weather[0].description}</h2>
        </div> : <p>Fetching Weather details....</p>}
    </div>
  )
}

export default WeatherApp
