import React from 'react';

export default function Currently(props) {

    return (
        <section className="bg-white rounded-md shadow-sm w-1/2 p-2 text-center">
            <span>Gilbert, AZ</span>
            <div className="text-4xl font-bold">{Number((props.current.temp).toFixed(0))}&deg;</div>
            <span>{props.current.weather[0].main}</span>
            <div>Humidity | {props.current.humidity}%</div>
            <div>Wind | {Number(props.current.wind_speed).toFixed(0)} mph</div>
        </section>
    )
}