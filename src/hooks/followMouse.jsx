import { useState, useEffect } from 'react';

function followMouse() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    
    const handleMouseMove = (event) => {
        setTimeout(()=>{
            setCursorPosition({ x: event.clientX, y: event.clientY })
        },200)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
       window.removeEventListener('mousemove', handleMouseMove)
    };
  }, [])
  
  return cursorPosition
}

export default followMouse;