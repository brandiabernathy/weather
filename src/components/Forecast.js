import React from 'react';
import Day from './Day';


export default function Forecast() {

    const [forecast, setForecast] = React.useState({
        days: [
            {
                dt: 1618308009,
                temp: {
                    min: 50,
                    max: 80,
                },
                weather: {
                    main: 'Rain',
                }
            },
            {
                dt: 1618308000,
                temp: {
                    min: 50,
                    max: 80,
                },
                weather: {
                    main: 'Rain',
                }
            },
            {
                dt: 1618308001,
                temp: {
                    min: 50,
                    max: 80,
                },
                weather: {
                    main: 'Rain',
                }
            },
            {
                dt: 1618308002,
                temp: {
                    min: 50,
                    max: 80,
                },
                weather: {
                    main: 'Rain',
                }
            },
            {
                dt: 1618308003,
                temp: {
                    min: 50,
                    max: 80,
                },
                weather: {
                    main: 'Rain',
                }
            }
        ],
    })

    const days = forecast.days.map(day => {
        return <Day key={day.dt} day={day} />
    })

    return (
        <section className="forecast">
            { days }
        </section>
    )
}