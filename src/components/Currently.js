import React from 'react';
import Icon from './Icon';

import { TiLocationArrowOutline } from "react-icons/ti";

export default function Currently(props) {
    // console.log('currently props', props)

    return (
        <section className="bg-white rounded-md shadow-sm p-10 text-center grid md:grid-cols-2 gap-4 items-center mb-5">
             <div>
                 <div className="font-bold mb-2">Now</div>
                 <div className="flex items-center justify-center mb-5">
                    <TiLocationArrowOutline className="inline mr-1"/>
                    <span>Gilbert, AZ</span>
                </div>
                <div className="grid justify-center">
                    <div className="relative">
                        {props.current.Temperature && <span className="text-8xl">{props.current.Temperature.Imperial.Value}</span>}
                        <span className="text-4xl absolute">&deg;</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="text-10xl"><Icon icon={props.current.WeatherIcon} /></div>
                <div className="-mt-3">{props.current.WeatherText}</div>
            </div>
        </section>
    )
}