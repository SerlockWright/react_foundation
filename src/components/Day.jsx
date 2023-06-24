import React from 'react'

function Day({ date }) {
    const formattedDate = new Date(date).toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    return (
        <div>{formattedDate}</div>
    )
}

export default Day