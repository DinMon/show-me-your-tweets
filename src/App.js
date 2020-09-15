import React, { useEffect } from 'react';
import MenuScreen from './components/MenuScreen'
import { DarkModeProvider } from './contexts/DarkModeContext'

function App() {
    return (
        <DarkModeProvider>
            <MenuScreen />
        </DarkModeProvider>
    );
}

export default App;
