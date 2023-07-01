import React from 'react'


function Avatar({ imageUrl }) {
    return (
        <div>
            <img src={imageUrl} alt="image" />
        </div>
    )
}

export default Avatar