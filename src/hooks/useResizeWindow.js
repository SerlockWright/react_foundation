import React from 'react'

export function useResizeWindow() {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('resize', resizeWindow);

    function resizeWindow() {
      setIsSmallScreen(window.innerWidth < 768);
    }

    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, [])

  return {
    isSmallScreen
  }
}