import React from 'react';
import Card from './Card'
import Toggle from './Toggle'
import { useDarkMode } from '../contexts/DarkModeContext'
import { useTweetModeToggle, AT_ONCE, ONE_BY_ONE, AS_YOU_LOOK } from '../App';

function Menu() {
    const darkMode = useDarkMode()
    const toggleTweetMode = useTweetModeToggle()

    return (
        <div className={`h-screen ${toggleTweetMode ? 'overflow-hidden' : 'overflow-auto'} ${!darkMode ? 'bg-gray-100' : 'bg-gray-900'}`}>
            <Toggle />
            <section className="max-w-screen-lg mx-auto pt-20">
                <h1 className={`text-5xl font-jura font-bold text-center ${!darkMode ? 'text-gray-900' : 'text-gray-100'} `}>show-me-your-tweets</h1>
                <div className={`text-center mt-2 sm:mt-0 ${!darkMode ? 'text-gray-600' : 'text-gray-200'} `}>View tweets in different modes</div>
                <div className="flex flex-wrap mt-32">
                    <Card onClick={() => toggleTweetMode(AT_ONCE)} mode='at-once' title='show me all you got' titleHighlight='all' description='a list of all the tweets showed at once' descriptionHighlight='at once'/> 
                    <Card onClick={() => toggleTweetMode(ONE_BY_ONE)} mode='one-by-one' title='show me what you got' titleHighlight='what' description='a list of all the tweets showed one by one' descriptionHighlight='one by one'/> 
                    <Card onClick={() => toggleTweetMode(AS_YOU_LOOK)} mode='as-you-look' title='show me how lazy you are' titleHighlight='how lazy' description='a list of all the tweets showed as you look' descriptionHighlight='as you look'/> 
                </div>
            </section>
        </div>
    )
}

export default Menu