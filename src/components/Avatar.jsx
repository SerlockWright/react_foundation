import React from 'react'

// styles
import styles from './avatar.module.css'

function Avatar({ imageUrl }) {
    return (
        <div className={styles.button_secondary}>
            <img src={imageUrl} alt="image" />
        </div>
    )
}

export default Avatar