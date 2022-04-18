import React from 'react';

export default function Today(props) {
    console.log('props today', props)

    return (
        <section className="bg-white rounded-md shadow-sm p-6 grid grid-cols-2 text-center">
            <div className="font-bold col-span-2">Today</div>
            <div>
               <div>Day</div>
               {props.today && <div>
                  <div className="text-3xl">{props.today.Temperature.Maximum.Value}&deg;</div>
                  <div className="text-3xl">{props.today.Day.ShortPhrase}</div>
               </div>}
            </div>
            <div>
               <div>Night</div>
               {props.today && <div>
                  <div className="text-3xl">{props.today.Temperature.Minimum.Value}&deg;</div>
                  <div className="text-3xl">{props.today.Night.ShortPhrase}</div>
               </div>}
            </div>
            {/* <div>
               <div>Evening</div>
               <div className="text-3xl">{Number(props.today.temp.eve).toFixed(0)}&deg;</div>
            </div>
            <div>
               <div>Overnight</div>
               <div className="text-3xl">{Number(props.today.temp.night).toFixed(0)}&deg;</div>
            </div> */}
        </section>
    )
}