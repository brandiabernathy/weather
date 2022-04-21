import React from 'react';
import './index.css';
import Currently from './components/Currently';
import Forecast from './components/Forecast';
import Hourly from './components/Hourly';
import Details from './components/Details';
import Today from './components/Today';
import Search from './components/Search';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
	const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;

	const [location, setLocation] = React.useState({
		city: '',
		state: '',
	});

	const [weather, setWeather] = React.useState({
		current: '',
		daily: '',
		hourly: '',
	})

	function getLocation(city, state) {
		setLocation({
			city: city,
			state: state,
		});
	}

	function getWeather(locationKey) {
		axios.get('http://dataservice.accuweather.com/currentconditions/v1/' + locationKey + '?apikey=' + apikey + '&details=true')
		.then(res => {
			setWeather(prevState => ({
				...prevState,
				current: res.data[0],
			}))
		})
		.then(() => {
			axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + locationKey + '?apikey=' + apikey +'&details=true')
			.then(res => {
				setWeather(prevState => ({
					...prevState,
					daily: res.data.DailyForecasts,
				}))
			})
		})
		.then(() => {
			axios.get('http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/' + locationKey + '?apikey=' + apikey + '&details=true')
			.then(res => {
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
				<Search getWeather={getWeather} getLocation={getLocation}/>
			</div>
			<div className="col-span-1">
					<Currently current={weather.current} location={location}/>
				<div className="grid lg:grid-cols-2 gap-5">
					<Details current={weather.current} day={weather.daily[0]}/>
					<Today today={weather.daily[0]}/>
				</div>
			</div>
			<div>
				<Forecast forecast={weather.daily}/>
				<Hourly hourly={weather.hourly}/>
			</div>
			<Footer />
		</div>
	);
}

export default App;
