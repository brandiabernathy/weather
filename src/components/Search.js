import React from 'react';
import axios from 'axios';


export default function Search({props, getWeather, getLocation}) {
    const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;
    const [results, setResults] = React.useState([]);
    const [searchResults, setSearchResults] = React.useState([]);
    let resultsDivs;

    function handleClick(key, city, state) {
        document.getElementById('location-search').value = '';
        setSearchResults([]);
        setResults([]);
        getWeather(key);
        getLocation(city, state)
    }

    function search(e) {
        if(e.target.value.length > 2) {
            axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=' + e.target.value + '&apikey=' + apikey)
            .then(res => {
                setSearchResults(res.data);
                resultsDivs = res.data
                .filter(item => item.Country.ID === 'US')
                .map(item => {
                    return <div className="py-2 hover:bg-sky-100 cursor-pointer" onClick={() => handleClick(item.Key, item.LocalizedName, item.AdministrativeArea.ID)}><span className="px-3">{item.LocalizedName}, {item.AdministrativeArea.ID}</span></div>
                })
                setResults(resultsDivs);
            })
        }
        else if(e.target.value.length <= 2) {
            // reset search results
            setSearchResults([]);
        }
    }

    return (
       <div className="relative lg:w-1/4 mb-4">
           <input
                type="text"
                id="location-search"
                className="py-3 px-6 w-full shadow-sm rounded-full"
                name="search"
                placeholder="Search US City"
                autoComplete="off"
                onChange={search}
            />
             {searchResults && <div className="absolute w-full bg-white rounded-sm mt-1 z-10 divide-y divide-slate-200 shadow-md">
                {results}
            </div>}
       </div>
    )
}