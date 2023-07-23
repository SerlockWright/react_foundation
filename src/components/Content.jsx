import React from 'react'

import { useAppContext } from '../contexts/AppContext';

function Content({ textContent }) {
    const { theme } = useAppContext();

    console.log('theme --------->: ', theme)
    return (
        <div>
            <p>{textContent}</p>
        </div>
    )
}

export default Content