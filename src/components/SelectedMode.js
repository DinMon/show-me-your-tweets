import React, { useEffect, useState, useRef } from 'react'
import { useDarkMode } from '../contexts/DarkModeContext';
import { useTweetModeToggle, AT_ONCE } from '../App';
import { Flipped } from 'react-flip-toolkit'
import anime from 'animejs'
import Tweet from './Tweet';

function SelectedMode({ id, mode }) {
    const darkMode = useDarkMode()
    const toggleTweetMode = useTweetModeToggle()
    const [tweets, setTweets] = useState([])

    const scrollElem = useRef()

    useEffect(() => {
        setTweets([
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
            'Adipisicing ad exercitation id sint culpa ad anim reprehenderit.',
        ])
    }, [])

    function onStart(root) {
        const elements = [].slice.apply(root.querySelectorAll("*[data-fade-in]"));
        elements.forEach(el => {
            el.style.opacity = "0"
        });
        anime({
            targets: root.querySelector('div.border-solid'),
            border: [1, 0],
            duration: 500
        })
    }

    function onComplete(el) {
        const tweetAnim = anime.timeline({
            targets: '*[data-fade-in-tweet]',
            easing: 'easeOutSine',
        })
        const backBtnAnim = anime.timeline({
            targets: '*[data-fade-in]',
            duration: 400,
            easing: 'easeOutSine',
        }).add({
            targets: '*[data-fade-in]',
            opacity: [0, 1],
            translateX: [0, 20],
            delay: anime.stagger(300),
        }).add({
            targets: '*[data-fade-in]',
            translateX: [20, 0],
            endDelay: 200,
            complete: () => {
                const MAX_INC = 1000

                // Tweak below constant to pace the scroll
                const INC = 70 // speed up scroll
                const WAIT_SEC_BEFORE_INC = 300 // decrease to scroll down scroll

                // Tweak below constant if page layout changed
                const BEFORE_FIRST_TWEET_HEIGHT = 170
                const TWEET_HEIGHT = 48

                const DELAY_AFTER_TWEET_SHOWED = 1000
                let gradualInc = INC
                let prevDelayedTime = 0
                let prevCurrentTime = 0
                let elapseTime = 0

                let once = true
                let scrollAnim = null

                tweetAnim.add({
                    targets: '*[data-fade-in-tweet]',
                    opacity: [0, 1],
                    delay: anime.stagger(80),
                    update: function(anim) {
                        if (once) {
                            scrollAnim = anime({
                                targets: el,
                                scrollTop: [0, el.scrollHeight],
                                duration: anim.duration,
                                easing: 'easeOutSine',
                            })
                            scrollAnim.pause()
                            once = false
                        }
                        const tweetsDisplayed = Math.floor(anim.currentTime / (anim.duration / anim.animatables.length))
                        const heightSeen = BEFORE_FIRST_TWEET_HEIGHT + (tweetsDisplayed * TWEET_HEIGHT)
                        const delayedTime = (heightSeen > window.innerHeight) ? anim.currentTime - (DELAY_AFTER_TWEET_SHOWED + gradualInc) : anim.currentTime - DELAY_AFTER_TWEET_SHOWED
                        scrollAnim.seek((delayedTime > 0) ? delayedTime : prevDelayedTime)
                        elapseTime += (anim.currentTime - prevCurrentTime)
                        if ((elapseTime > WAIT_SEC_BEFORE_INC) && (heightSeen > window.innerHeight) && (gradualInc <= MAX_INC)) {
                            gradualInc += INC
                            elapseTime = 0
                        }
                        prevCurrentTime = anim.currentTime
                        prevDelayedTime = delayedTime
                    },
                    complete: function() {
                        anime({
                            targets: el,
                            scrollTop: 0,
                            duration: 500,
                            easing: 'easeOutSine',
                        })
                    }
                })
            }
        })
    }

    return (
        <Flipped flipId={id} onStart={onStart} onComplete={onComplete}>
            <div ref={scrollElem} className={`fixed top-0 left-0 w-full h-full overflow-auto
                ${!darkMode ? ' bg-white' : 'bg-gray-900'}`}>
                <div className={`h-full border-solid border-4 rounded-lg ${darkMode ? 'border-gray-700' : 'border-gray-800'}`}>
                    <div className='max-w-screen-lg mx-auto'>
                        <button onClick={toggleTweetMode} className={`flex justify-start items-center mt-12 ${!darkMode ? 'text-gray-900' : 'text-gray-200'} `} data-fade-in>
                            <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>    
                            <div  className='p-1 hover:underline tracking-wide'>
                                Back
                            </div>
                        </button>
                        <h1 className={`text-3xl font-jura font-bold ${!darkMode ? 'text-gray-900' : 'text-gray-100'} `} data-fade-in>{mode}</h1>
                        <div className='mt-12'>
                            {
                                tweets.map((tweet, index) => (<Tweet key={index} title={tweet} className='opacity-0' data-fade-in-tweet />))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Flipped>
    )
}

export default SelectedMode