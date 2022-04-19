import React from 'react';
import axios from 'axios';


export default function Search({props, getWeather}) {
    const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;
    const [results, setResults] = React.useState([]);
    const [searchResults, setSearchResults] = React.useState([]);
    let resultsDivs;

    function handleClick(key) {
        document.getElementById('location-search').value = '';
        setSearchResults([]);
        setResults([]);
        getWeather(key);
    }

    function search(e) {
        if(e.target.value.length > 2) {
            axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=' + e.target.value + '&apikey=' + apikey)
            .then(res => {
                console.log('search res', res);
                setSearchResults(res.data);
                resultsDivs = res.data.map(item => {
                    return <div className="py-2 hover:bg-cyan-600 cursor-pointer" onClick={() => handleClick(item.Key)}><span className="px-3">{item.LocalizedName}, {item.AdministrativeArea.LocalizedName}, {item.Country.LocalizedName}</span></div>
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
       <div className="relative w-1/4">
           <input
                type="text"
                id="location-search"
                className="py-3 px-6 w-full shadow-sm rounded-full"
                name="search"
                placeholder="Search by city or zip code"
                autoComplete="off"
                onChange={search}
            />
             {searchResults && <div className="absolute w-full bg-white rounded-sm mt-1 divide-y divide-slate-200 shadow-md">
                {results}
            </div>}
       </div>
    )
}