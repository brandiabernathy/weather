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
	const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;

	const [weather, setWeather] = React.useState({
		current: '',
		daily: '',
		hourly: '',
	})

	function getWeather(locationKey) {
		axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationKey + '?apikey=' + apikey + '&details=true')
		.then(res => {
			console.log('currently', res);
			setWeather(prevState => ({
				...prevState,
				current: res.data[0],
			}))
		})
		.then(() => {
			axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationKey + '?apikey=' + apikey +'&details=true')
			.then(res => {
				console.log('5 day', res);
				setWeather(prevState => ({
					...prevState,
					daily: res.data.DailyForecasts,
				}))
			})
		})
		.then(() => {
			axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + locationKey + '?apikey=' + apikey + '&details=true')
			.then(res => {
				console.log("hourly", res);
				setWeather(prevState => ({
					...prevState,
					hourly: res.data,
				}))
			})
		})
	}

	return (
		<div className="app bg-slate-100 p-8 grid lg:grid-cols-2 gap-5 min-h-screen">
			<div className="flex col-span-2 justify-center">
				<Search getWeather={getWeather}/>
			</div>
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
