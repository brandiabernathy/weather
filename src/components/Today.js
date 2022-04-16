import React from 'react';

export default function Today(props) {
    console.log('props today', props)

    return (
        <section className="bg-white rounded-md shadow-sm p-6 grid grid-cols-2 text-center">
            <div className="font-bold col-span-2">Today</div>
            <div>
               <div>Morning</div>
               <div className="text-3xl">{Number(props.today.temp.morn).toFixed(0)}&deg;</div>
            </div>
            <div>
               <div>Afternoon</div>
               <div className="text-3xl">{Number(props.today.temp.day).toFixed(0)}&deg;</div>
            </div>
            <div>
               <div>Evening</div>
               <div className="text-3xl">{Number(props.today.temp.eve).toFixed(0)}&deg;</div>
            </div>
            <div>
               <div>Overnight</div>
               <div className="text-3xl">{Number(props.today.temp.night).toFixed(0)}&deg;</div>
            </div>
        </section>
    )
}