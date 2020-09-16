import React from 'react';
import Card from './Card'
import Toggle from './Toggle'
import { useDarkMode } from '../contexts/DarkModeContext'

function Menu() {
    const darkMode = useDarkMode()

    return (
        <div className={`h-screen overflow-auto ${!darkMode ? 'bg-gray-100' : 'bg-gray-900'}`}>
            <Toggle />
            <section className="max-w-screen-lg mx-auto pt-20">
                <h1 className={`text-5xl font-jura font-bold text-center ${!darkMode ? 'text-gray-900' : 'text-gray-100'} `}>show-me-your-tweets</h1>
                <div className={`text-center mt-2 sm:mt-0 ${!darkMode ? 'text-gray-600' : 'text-gray-200'} `}>View tweets in different modes</div>
                <div className="flex flex-wrap mt-32">
                    <Card title='show me all you got' titleHighlight='all' description='a list of all the tweets showed at once' descriptionHighlight='at once'/> 
                    <Card title='show me what you got' titleHighlight='what' description='a list of all the tweets showed one by one' descriptionHighlight='one by one'/> 
                    <Card title='show me how lazy you are' titleHighlight='how lazy' description='a list of all the tweets showed as you look' descriptionHighlight='as you look'/> 
                </div>
            </section>
        </div>
    )
}

export default Menu