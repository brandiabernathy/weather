import React from 'react';
import Day from './Day';


export default function Forecast(props) {
    // let mod_days = props.forecast.splice(1, 1);
    // console.log('mod days', mod_days);

    const days = props.forecast.map(day => {
        return <Day key={day.dt} day={day} />
    })

    return (
        <section className="flex flex-row">
            { days }
        </section>
    )
}