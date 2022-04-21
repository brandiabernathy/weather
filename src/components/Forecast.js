import React from 'react';
import Day from './Day';
import dayjs from 'dayjs';


export default function Forecast(props) {
    let four_days = []
    let days = [];

    if(props.forecast) {
        four_days = props.forecast.slice(1, 5);
        days = four_days.map(day => {
            return <Day key={day.Date} day={day} />
        });
    }
    else {
        let today = dayjs();
        for(let i = 1; i < 5; i++) {
            four_days.push(dayjs(today).add(i, 'day').toDate())
        }
        days = four_days.map(day => {
            return <Day key={day} day={day} />
        });
    }

    return (
        <section className="grid lg:grid-cols-4 gap-4 lg:justify-between mb-5">
            { days }
        </section>
    )
}