import React, { useContext, useState} from 'react'

const DarkModeContext = React.createContext()
const DarkModeToggleContext = React.createContext()

export function useDarkMode() {
    return useContext(DarkModeContext)
}

export function useDarkModeToggle() {
    return useContext(DarkModeToggleContext)
}

export function DarkModeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(true)

    function toggleDarkMode() {
        setDarkMode(!darkMode)
    }

    return (
        <DarkModeContext.Provider value={darkMode}>
            <DarkModeToggleContext.Provider value={toggleDarkMode}>
                {children}
            </DarkModeToggleContext.Provider>
        </DarkModeContext.Provider>
    )
}