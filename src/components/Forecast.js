import React from 'react';
import Day from './Day';


export default function Forecast(props) {
    let four_days = props.forecast.slice(1, 5);

    let days = [];

    if(props.forecast) {
        days = four_days.map(day => {
            return <Day key={day.Date} day={day} />
        })
    }

    return (
        <section className="grid lg:grid-cols-4 gap-4 lg:justify-between mb-5">
            { days }
        </section>
    )
}