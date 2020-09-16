import React, { useEffect } from 'react';
import MenuScreen from './components/MenuScreen'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <DarkModeProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/">
                        <MenuScreen />
                    </Route>
                </Switch>
            </BrowserRouter>
        </DarkModeProvider>
    );
}

export default App;
