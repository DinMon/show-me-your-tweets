import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';

function Card({index, title, textHighlight, description}) {
    const darkMode = useDarkMode()

    const [titleStart, setTitleStart] = useState()
    const [titleEnd, setTitleEnd] = useState()

    useEffect(() => {
        const [start, end] = title.split(textHighlight)
        setTitleStart(start)
        setTitleEnd(end)
    }, [])

    return (
        <div className="w-full md:w-1/3 px-6 my-2">
            <div className={`h-48 flex justify-center items-center
                border-solid border-4 rounded-lg shadow-sm ${!darkMode ? 'border-gray-800' : 'border-gray-700'}`}>
                <div className={`text-lg ${!darkMode ? 'text-gray-800' : 'text-gray-200'} `}>
                    {titleStart}
                    <span className={`text-xl font-extrabold uppercase ${!darkMode ? 'text-gray-900' : 'text-gray-100'}`}>{textHighlight}</span>
                    {titleEnd}
                </div>
            </div>
        </div>
    );
}

export default Card;
