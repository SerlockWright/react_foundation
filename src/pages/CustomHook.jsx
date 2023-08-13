import React from 'react'
import { useResizeWindow } from '../hooks/useResizeWindow'

function CustomHook() {
  const { isSmallScreen } = useResizeWindow();

  return (
    <div>
      <h2>CustomHook</h2>
      Size window: {isSmallScreen ? 'Small' : 'Large'}
    </div>
  )
}

export default CustomHook