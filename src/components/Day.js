import React from 'react';
import dayjs from 'dayjs';
import Icon from './Icon';

export default function Day(props) {

    return (
        <div className="bg-white rounded-md shadow-sm text-center p-5 flex flex-row flex-col justify-center items-center">
            <div className="">{dayjs.unix(props.day.EpochDate).format('dddd')}</div>
            <div className="text-6xl my-4"><Icon icon={props.day.Day.Icon} /></div>
            <div>
                <span className="text-2xl font-bold">{props.day.Temperature.Maximum.Value}&deg;</span>
                <span className="text-lg mx-2"> / </span>
                <span className="text-sm">{props.day.Temperature.Minimum.Value}&deg;</span>
            </div>
        </div>
    )
}