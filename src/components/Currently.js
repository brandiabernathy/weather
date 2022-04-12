import React from 'react';

import { TiLocationArrowOutline } from "react-icons/ti";

//weather icons
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloudy} from "react-icons/wi";


export default function Currently(props) {
    let icon = '';

    switch(props.current.weather[0].icon) {
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
    }

    return (
        <section className="bg-white rounded-md shadow-sm w-1/2 p-10 text-center grid grid-cols-2 gap-4 items-center">
             <div>
                 <div className="flex items-center justify-center mb-5">
                    <TiLocationArrowOutline className="inline mr-1"/>
                    <span>Gilbert, AZ</span>
                </div>
                <div className="flex justify-center">
                    <span className="text-7xl">{Number((props.current.temp).toFixed(0))}</span>
                    <span className="text-4xl">&deg;</span>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="text-9xl">{icon}</div>
            </div>
            {/* <div>Humidity | {props.current.humidity}%</div>
            <div>Wind | {Number(props.current.wind_speed).toFixed(0)} mph</div> */}
        </section>
    )
}