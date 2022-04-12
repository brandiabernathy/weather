import React from 'react';
import dayjs from 'dayjs';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function Hourly(props) {
    console.log("hourly", props.hourly);
    let consolidated_hourly = props.hourly.slice(0, 18);

    let labels = consolidated_hourly.map(hour => dayjs.unix(hour.dt).format('ha'));
    let data = consolidated_hourly.map(hour => Number(hour.temp).toFixed(0));

    const options = {
        responsive: true,
        plugins: {
           legend: {
              display: false,
            }
        },
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            y: {
                grid: {display:false},
            },
            x: {
                grid: {display:false},
            }
        }
    }

    return (
        <section className="bg-white rounded-md shadow-sm w-1/2 p-6">
            hourly
            <div>
            <Line
                datasetIdKey='id'
                data={{
                    labels: labels,
                    datasets: [
                        {
                            id: 1,
                            label: '',
                            data: data,
                        },
                    ],
                }}
                options={options}
                />
            </div>
        </section>
    )
}