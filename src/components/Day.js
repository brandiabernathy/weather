import dayjs from 'dayjs';
import React from 'react';

import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloudy} from "react-icons/wi";


export default function Day(props) {

    console.log(props);
    let icon = '';

    switch(props.day.weather[0].icon) {
        case '01d':
            icon = <WiDaySunny />;
            break;
        case '01n':
            icon =  <WiNightClear />;
            break;
        case '02d':
            icon = <WiDayCloudy />;
            break;
        case '02n':
            icon = <WiNightAltCloudy />;
            break;
        case '03d' || '03n' || '04d' || '04n': {
            icon = <WiCloudy />;
            break;
        }
    }
    return (
        <div className="bg-white rounded-md shadow-sm text-center p-2">
            <div>{dayjs.unix(props.day.dt).format('ddd')} {dayjs.unix(props.day.dt).format('D')}</div>
            <div className="text-3xl">{icon}</div>
            <span className="text-xl font-bold">{Number((props.day.temp.max).toFixed(0))}&deg;</span>  <span>{Number((props.day.temp.min).toFixed(0))}&deg;</span>
        </div>
    )
}