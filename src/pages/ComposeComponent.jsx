import React from 'react'
import Avatar from '../components/Avatar'
import Content from '../components/Content'
import Day from '../components/Day';

function ComposeComponent() {
    const date = new Date().toString();
    return (
        <>
            <div className='border_type'>
                <Avatar />
                <Content textContent="Hello Kitty" />
                <Content textContent="I hope you enjoy learning React!" />
                <Day date={date} />
            </div>
        </>
    )
}

export default ComposeComponent