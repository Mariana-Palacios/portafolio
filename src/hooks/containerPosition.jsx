/*import React, { useRef, useState, useEffect} from 'react';

function containerPosition() {

  const containerRef = useRef({});
  const [scrollPosition, setScrollPosition] = useState(0);

  function scrolUp(event) {
    if(event.target.scrollTop){
        setScrollPosition(true)
    }
    else{
        setScrollPosition(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scrollTop", scrolUp);
    return () => {
      window.removeEventListener("scrollTop", scrolUp);
    };
  }, []); 

  console.log(scrollPosition)
  if (containerRef.current && scrollPosition) {
    const containerRect = containerRef.current.getBoundingClientRect();
    console.log(containerRect)
    return containerRect;
  }
}

export default containerPosition;
*/

import React, { useState } from 'react';

function containerPosition() {
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event) => {
      setScrollTop(event.currentTarget.scrollTop);
      console.log(scrollTop)
    };

    return handleScroll;
  
}
export default containerPosition;