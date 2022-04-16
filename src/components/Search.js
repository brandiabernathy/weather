import React from 'react';
import axios from 'axios';


export default function Search(props) {
    const apikey = process.env.REACT_APP_ACCUWEATHER_API_KEY;
    let searchResults;
    let resultsDivs;

    function search(e) {
        let searchTerm = e.target.value;
        console.log('e', e)
        // axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete?q=' + searchTerm + '&apikey=' + apikey)
        // .then(res => {
        //     console.log('search res', res);
        //     searchResults = res.data;
        //     console.log('search results', searchResults);
        resultsDivs = searchResults.map(item => {
            return <div className="py-2 hover:bg-cyan-600 cursor-pointer"><span className="px-3">{item.LocalizedName}, {item.CountryLocalizedName}</span></div>
        })
        // })

    }

    return (
       <div className="relative w-1/4">
           <input
                type="text"
                className="py-3 px-6 w-full shadow-sm rounded-full"
                name="search"
                placeholder="Search by city or zip code"
                autoComplete="false"
                onChange={search}
            />
            {searchResults && <div className="absolute w-full bg-white rounded-sm mt-1 divide-y divide-slate-200">
                {resultsDivs}
            </div>}
       </div>
    )
}