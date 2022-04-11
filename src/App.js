import React from 'react';
// import './App.scss';
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
    <div className="app">
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Currently />
      <Forecast />
      <Hourly />
    </div>
  );
}

export default App;
