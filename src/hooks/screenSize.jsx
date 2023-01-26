import { useState, useEffect } from 'react';

export default function screenSize() {
  const [windowSize, setWindowSize] = useState([0, 0]);

  useEffect(() => {
    function handleResize() {
      setWindowSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width: windowSize[0], height: windowSize[1] };
}