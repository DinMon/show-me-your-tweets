import React, { useContext, useState } from 'react';
import MenuScreen from './components/MenuScreen'
import SelectedMode from './components/SelectedMode'
import { DarkModeProvider } from './contexts/DarkModeContext'
import { Flipper } from 'react-flip-toolkit'

export const AT_ONCE = 'at-once'
export const ONE_BY_ONE = 'one-by-one'
export const AS_YOU_LOOK = 'as-you-look'

const TweetModeContext = React.createContext()
const TweetModeToggleContext = React.createContext()

export function useTweetMode() {
    return useContext(TweetModeContext)
}

export function useTweetModeToggle() {
    return useContext(TweetModeToggleContext)
}

function App() {
    const [tweetMode, setTweetMode] = useState(false)
    const [modeName, setModeName ] = useState('')

    function toggleTweetMode(mode) {
        if (!tweetMode) {
            setModeName(mode)
        }
        setTweetMode(!tweetMode)
    }

    return (
        <TweetModeContext.Provider value={tweetMode}>
            <TweetModeToggleContext.Provider value={toggleTweetMode}>
                <DarkModeProvider>
                    <Flipper flipKey={tweetMode} spring='veryGentle'>
                        <MenuScreen />
                        {
                            tweetMode ? (
                                <SelectedMode id={`${modeName}-mode`} mode={modeName}/>
                            ) : null
                        }
                    </Flipper>
                </DarkModeProvider>
            </TweetModeToggleContext.Provider>
        </TweetModeContext.Provider>
    );
}

export default App;
