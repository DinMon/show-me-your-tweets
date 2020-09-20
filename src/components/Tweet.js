import React from 'react'

function Tweet({ title, className = '', ...rest}) {
    return (
        <div {...rest} className={`${className} text-gray-200 font-medium hover:underline rounded-lg mt-1 p-3 hover:bg-gray-800 bg-opacity-25`}>
            {title}
        </div>
    )
}

export default Tweet    