import dayjs from 'dayjs';
import React from 'react';

export default function Day(props) {
    return (
        <div className="bg-white rounded-md shadow-sm text-center p-2">
            <div>{dayjs.unix(props.day.dt).format('ddd')} {dayjs.unix(props.day.dt).format('D')}</div>
            <span className="text-xl font-bold">{Number((props.day.temp.max).toFixed(0))}&deg;</span>  <span>{Number((props.day.temp.min).toFixed(0))}&deg;</span>
            <div>{props.day.weather[0].main}</div>
        </div>
    )
}