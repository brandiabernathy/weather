import React from 'react';
import axios from 'axios';


export default function Search({props, getWeather}) {
    const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;
    const [results, setResults] = React.useState([]);
    let resultsDivs;

    function search(e) {
        if(e.target.value.length > 2) {
            axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=' + e.target.value + '&apikey=' + apikey)
            .then(res => {
                resultsDivs = res.data.map(item => {
                    return <div className="py-2 hover:bg-cyan-600 cursor-pointer" onClick={() => getWeather(item.Key)}><span className="px-3">{item.LocalizedName}, {item.AdministrativeArea.LocalizedName}, {item.Country.LocalizedName}</span></div>
                })
                setResults(resultsDivs);
            })
        }
    }

    return (
       <div className="relative w-1/4">
           <input
                type="text"
                className="py-3 px-6 w-full shadow-sm rounded-full"
                name="search"
                placeholder="Search by city or zip code"
                autoComplete="off"
                onChange={search}
            />
             {results && <div className="absolute w-full bg-white rounded-sm mt-1 divide-y divide-slate-200 shadow-md">
                {results}
            </div>}
       </div>
    )
}