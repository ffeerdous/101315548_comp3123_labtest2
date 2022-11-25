import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, setData ] = useState({})
  const [location, setLocation] = useState('')
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=74beb9cb602141050c73d8f047155eff`

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((res) => {
        setData(res.data)
        //console.log(res.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="App">
      <h1>Weather Forcast</h1>
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter a Location'
        type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            {data.main ? <p>{data.name}, {data.sys.country}</p> : null}
          </div>
          <div className="temp">
            {data.main ? <h2>{data.main.temp} ˚F</h2> : null}
          </div>
          <div className="temp">
            {data.weather ? <p> Weather: {data.weather[0].main}</p> : null}
          </div>
          <div className="temp">

          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          <p>Feels Like</p>
          {data.main ? <p>{data.main.feels_like}  ˚F</p> : null}
          </div>
          <div className="feels">
          <p>Humidity</p>
          {data.main ? <p>{data.main.humidity}%</p> : null}
          </div>
          <div className="feels">
            <p>Pressure</p>
          {data.main ? <p>{data.main.pressure}inHg</p> : null}
          </div>
          <div className="feels">
            <p>Wind</p>
          {data.wind ? <p>{data.wind.speed} MPH</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
