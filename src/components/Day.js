import React from 'react';
import dayjs from 'dayjs';

import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloudy, WiRain, WiSnow} from "react-icons/wi";


export default function Day(props) {
    let icon = '';

    switch(props.day.weather[0].icon) {
        case '01d':
            icon = <WiDaySunny />;
            break;
        case '02d':
            icon = <WiDayCloudy />;
            break;
        case '03d': {
            icon = <WiCloudy />;
            break;
        }
        case '04d': {
            icon = <WiCloudy />;
            break;
        }
        case '10d': {
            icon = <WiRain />;
            break;
        }
        case '13d': {
            icon = <WiSnow />;
            break;
        }
    }
    return (
        <div className="bg-white rounded-md shadow-sm text-center p-5 flex flex-row flex-col justify-center items-center">
            <div className="">{dayjs.unix(props.day.dt).format('dddd')}</div>
            <div className="text-6xl my-4">{icon}</div>
            <div>
                <span className="text-2xl font-bold">{Number((props.day.temp.max).toFixed(0))}&deg;</span>
                <span className="text-lg mx-2"> / </span>
                <span className="text-sm">{Number((props.day.temp.min).toFixed(0))}&deg;</span>
            </div>
        </div>
    )
}