import React from 'react';

export default function Footer() {

    return (
        <footer className="flex col-span-2 justify-center items-center mt-24">
               Powered by <a className="grid" href="http://www.accuweather.com" rel="noreferrer" target="_blank"><img className="w-28 inline-block ml-2" src="/AccuWeather-logo.png" alt="AccuWeather"/></a>
        </footer>
    )
}