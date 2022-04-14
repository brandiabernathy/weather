import React from 'react';
import dayjs from 'dayjs';

import { FiSunrise, FiSunset, FiWind} from "react-icons/fi";
import { CgDrop, CgDropOpacity, CgSun } from "react-icons/cg";
import { RiDashboard3Line } from "react-icons/ri";

export default function Details(props) {
    return (
        <section className="bg-white rounded-md shadow-sm p-6 w-1/2">
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><FiSunrise /></span>
                <span>Sunrise </span>
                <span className="text-right">{dayjs.unix(props.current.sunrise).format('h:mm a')}</span>
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><FiSunset /> </span>
                <span>Sunset</span>
                <span className="text-right">{dayjs.unix(props.current.sunset).format('h:mm a')}</span>
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><CgDrop /></span>
                <span>Humidity</span>
                <span className="text-right">{props.current.humidity}%</span>
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><CgDropOpacity /></span>
                <span>Dew Point</span>
                <span className="text-right">{Number(props.current.dew_point).toFixed(0)}&deg;</span>
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><FiWind/></span>
                <span>Wind</span>
                <span className="text-right">{Number(props.current.wind_speed).toFixed(0)} mph</span>
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><RiDashboard3Line/></span>
                <span>Pressure</span>
                <span className="text-right">{props.current.pressure} hPa</span>
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><CgSun/></span>
                <span>UV Index</span>
                <span className="text-right">{Number(props.current.uvi).toFixed(0)}</span>
            </div>
        </section>
    )
}