import React, { useEffect } from 'react';
import { useDarkMode, useDarkModeToggle } from '../contexts/DarkModeContext'

function Toggle() {
    const darkMode = useDarkMode()
    const toggleDarkMode = useDarkModeToggle()

    return (
        <div className="flex justify-end pt-4 md:pt-12 md:pr-12">
            <div className="relative inline-block w-20 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" checked={darkMode} name="toggle" id="toggle" onChange={toggleDarkMode} className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-8 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
        </div>
    )
}

export default Toggle