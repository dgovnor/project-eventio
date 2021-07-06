import { useState, useEffect } from 'react'
/**
 * This hook could be used for any screen size
 * For now we return isMobile for mobile devices
 * These can be improved by adding Tablets or any other device type.
 */
enum SCREEN_SIZE {
  'mobile' = 500,
}
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isMobile = windowSize.width <= SCREEN_SIZE.mobile
  return { isMobile }
}
