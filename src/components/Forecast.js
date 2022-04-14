import React from 'react';
import Day from './Day';


export default function Forecast(props) {
    let five_days = props.forecast.slice(1, 6);

    const days = five_days.map(day => {
        return <Day key={day.dt} day={day} />
    })

    return (
        <section className="grid grid-cols-5 gap-4 justify-between mb-5">
            { days }
        </section>
    )
}