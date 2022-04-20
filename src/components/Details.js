import React from 'react';
import dayjs from 'dayjs';

import { FiSunrise, FiSunset, FiWind} from "react-icons/fi";
import { CgDrop, CgDropOpacity, CgSun } from "react-icons/cg";
import { RiDashboard3Line } from "react-icons/ri";

export default function Details(props) {

    return (
        <section className="bg-white rounded-md shadow-sm p-6">
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><FiSunrise /></span>
                <span>Sunrise </span>
                {props.day && <span className="text-right">{dayjs.unix(props.day.Sun.EpochRise).format('h:mm a')}</span>}
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><FiSunset /> </span>
                <span>Sunset</span>
                {props.day && <span className="text-right">{dayjs.unix(props.day.Sun.EpochSet).format('h:mm a')}</span>}
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><CgDrop /></span>
                <span>Humidity</span>
                {props.current.RelativeHumidity && <span className="text-right">{props.current.RelativeHumidity}%</span>}
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><CgDropOpacity /></span>
                <span>Dew Point</span>
                {props.current.DewPoint && <span className="text-right">{props.current.DewPoint.Imperial.Value}&deg;</span>}
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><FiWind/></span>
                <span>Wind</span>
                {props.current.Wind && <span className="text-right">{props.current.Wind.Direction.English} {Number(props.current.Wind.Speed.Imperial.Value).toFixed(0)} {props.current.Wind.Speed.Imperial.Unit}</span>}
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><RiDashboard3Line/></span>
                <span>Pressure</span>
                {props.current.Pressure && <span className="text-right">{props.current.Pressure.Imperial.Value} {props.current.Pressure.Imperial.Unit}</span>}
            </div>
            <div className="grid items-center grid-cols-details gap-2 m-2">
                <span className="text-xl"><CgSun/></span>
                <span>UV Index</span>
                {props.current.UVIndex && <span className="text-right">{props.current.UVIndex}</span>}
            </div>
        </section>
    )
}