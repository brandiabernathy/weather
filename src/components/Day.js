import React from 'react';
import dayjs from 'dayjs';

import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloudy} from "react-icons/wi";


export default function Day(props) {
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
        case '03d' || '03n': {
            icon = <WiCloudy />;
            break;
        }
        case '04d' || '04n': {
            icon = <WiCloudy />;
            break;
        }
    }
    return (
        <div className="bg-white rounded-md shadow-sm text-center p-5 flex flex-col justify-center items-center">
            <div>{dayjs.unix(props.day.dt).format('dddd')}</div>
            <div className="text-6xl my-4">{icon}</div>
            <div>
                <span className="text-2xl font-bold mr-4">{Number((props.day.temp.max).toFixed(0))}&deg;</span>
                <span className="text-sm">{Number((props.day.temp.min).toFixed(0))}&deg;</span>
            </div>
        </div>
    )
}