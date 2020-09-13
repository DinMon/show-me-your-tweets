import React, { useEffect, useState } from 'react';

function Card({index, title, textHighlight, description}) {
    const [titleStart, setTitleStart] = useState()
    const [titleEnd, setTitleEnd] = useState()

    useEffect(() => {
        const [start, end] = title.split(textHighlight)
        setTitleStart(start)
        setTitleEnd(end)
    }, [])

    return (
        <div className={`h-48 flex-1 flex justify-center items-center ${Number(index) != 0 ? 'ml-16' : ''}
            border-solid border-4 border-gray-800 rounded-lg shadow-sm`}>
            <div className="text-lg text-gray-800">
                {titleStart}
                <span className="text-xl font-extrabold text-gray-900 uppercase">{textHighlight}</span>
                {titleEnd}
            </div>
        </div>
    );
}

export default Card;
