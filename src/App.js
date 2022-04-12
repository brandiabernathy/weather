import React from 'react';
import './index.css';
import Currently from './components/Currently';
import Forecast from './components/Forecast';
import Hourly from './components/Hourly';
import axios from 'axios';

function App() {
  const apikey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const [weather, setWeather] = React.useState({
    current: '',
    daily: '',
    hourly: '',
})

  console.log('weather', weather);

  React.useEffect(() => {
      axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.31&lon=-111.74&units=imperial&appid=' + apikey)
      .then(res => {
        console.log('hello', res);
        setWeather({
            current: res.data.current,
            daily: res.data.daily,
            hourly: res.data.hourly,
        })
    })
  }, []);

  return (
    <div className="app bg-slate-100 p-8 grid gap-5">
      <Currently current={weather.current}/>
      <Forecast forecast={weather.daily}/>
      <Hourly hourly={weather.hourly}/>
    </div>
  );
}

export default App;
