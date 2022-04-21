import React from 'react';
import Icon from './Icon';

export default function Today(props) {

    return (
        <section className="bg-white rounded-md shadow-sm p-6 grid grid-cols-2 text-center">
            <div className="font-bold col-span-2">Today</div>
            <div className="grid justify-center">
               <div>Day</div>
               {props.today && <div className="grid justify-center items-center">
                  <div className="text-7xl"><Icon icon={props.today.Day.Icon} /></div>
                  <div className="text-3xl">{props.today.Temperature.Maximum.Value}&deg;</div>
               </div>}
               {!props.today && <div className="grid justify-center items-center">
                  <div className="text-7xl"></div>
                  <div className="text-3xl">--&deg;</div>
               </div>}
            </div>
            <div className="grid justify-center">
               <div>Night</div>
               {props.today && <div className="grid justify-center items-center">
                  <div className="text-7xl"><Icon icon={props.today.Night.Icon} /></div>
                  <div className="text-3xl">{props.today.Temperature.Minimum.Value}&deg;</div>
               </div>}
               {!props.today && <div className="grid justify-center items-center">
                  <div className="text-7xl"></div>
                  <div className="text-3xl">--&deg;</div>
               </div>}
            </div>
        </section>
    )
}