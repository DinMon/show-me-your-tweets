import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../contexts/DarkModeContext';
import { useTweetMode } from '../App';
import ReactCardFlip from 'react-card-flip'
import { throttle } from 'throttle-debounce';
import { Flipped } from 'react-flip-toolkit';

function Card({ mode, title, titleHighlight, description, descriptionHighlight, onClick}) {
    const darkMode = useDarkMode()
    const tweetMode = useTweetMode()

    const [startTitle, highlightTitle, endTitle] = getDividedText(title, titleHighlight)
    const [startDescrip, highlightDescrip, endDescrip] = getDividedText(description, descriptionHighlight)

    const [isFlipped, setIsFlipped] = useState(false)

    useEffect(() => {
        setIsFlipped(false)
    }, [tweetMode])

    const handleFlip = throttle(800, false, function flip(isFlip) {
        setIsFlipped(isFlip)
    })

    function getDividedText(text, highlight) {
        const [start, end] = text.split(highlight)
        return [start, highlight, end]
    }

    function onStartImmediate(el) {
        el.classList.add('z-10')
    }

    function onComplete(el) {
        el.classList.remove('z-10')
    }

    return (
        <Flipped flipId={`${mode}-mode`} onStartImmediate={onStartImmediate} onComplete={onComplete}>
            <div className="block w-full h-20 md:w-1/3" onClick={onClick} onMouseOver={() => handleFlip(true)} onMouseLeave={() => handleFlip(false)}>
                <ReactCardFlip isFlipped={isFlipped} infinite={true}>
                    <div className="w-full px-6 my-2" >
                        <div className={`h-48 flex justify-center items-center
                            border-solid border-4 rounded-lg shadow-sm ${!darkMode ? 'border-gray-800' : 'border-gray-700'}`}>
                            <div className={`text-lg ${!darkMode ? 'text-gray-800' : 'text-gray-200'} `}>
                                {startTitle}
                                <span className={`text-xl font-extrabold uppercase underline tracking-wider ${!darkMode ? 'text-gray-900' : 'text-gray-100'}`}>{highlightTitle}</span>
                                {endTitle}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 my-2">
                        <div className={`h-48 flex justify-start
                            border-solid border-4 px-4 py-6 rounded-lg shadow-sm ${!darkMode ? 'border-gray-800' : 'border-gray-700'}`}>
                            <div className={`text-md ${!darkMode ? 'text-gray-800' : 'text-gray-200'} `}>
                                {startDescrip}
                                <span className={`text-md font-extrabold underline ${!darkMode ? 'text-gray-900' : 'text-gray-100'}`}>{highlightDescrip}</span>
                                {endDescrip}
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        </Flipped>
    );
}

export default Card;
