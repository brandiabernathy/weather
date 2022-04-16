import React from 'react';
import './index.css';
import Currently from './components/Currently';
import Forecast from './components/Forecast';
import Hourly from './components/Hourly';
import Details from './components/Details';
import Today from './components/Today';
import Search from './components/Search';
import axios from 'axios';

function App() {
	const apikey = process.env.REACT_APP_OPENWEATHER_API_KEY;

	const [weather, setWeather] = React.useState({
		current: '',
		daily: '',
		hourly: '',
})

	React.useEffect(() => {
		console.log('useeffect');
			//gilbert
			axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=33.31&lon=-111.74&units=imperial&appid=' + apikey)
			//clarkridge
			// axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=36.46&lon=-92.31&units=imperial&appid=' + apikey)
			//stl
			// axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=38.62&lon=-90.19&units=imperial&appid=' + apikey)
			//minot
			// axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=48.23&lon=-101.29&units=imperial&appid=' + apikey)
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
		<div className="app bg-slate-100 p-8 grid lg:grid-cols-2 gap-5 min-h-screen">
			{/* <div className="flex col-span-2 justify-center">
				<Search />
			</div> */}
			<div className="col-span-1">
					<Currently current={weather.current} day={weather.daily[0]}/>
					<div className="grid lg:grid-cols-2 gap-5">
						<Details current={weather.current}/>
						<Today today={weather.daily[0]}/>
					</div>
			</div>
			<div>
				<Forecast forecast={weather.daily}/>
				<Hourly hourly={weather.hourly}/>
			</div>
		</div>
	);
}

export default App;
