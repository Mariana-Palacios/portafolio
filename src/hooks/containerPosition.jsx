import { useState, useRef, useEffect } from 'react';

const containerPosition = () => {
  const refObject = useRef();
  const [object, setObject] = useState({x:0, y:0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0});

  useEffect(() => {
    if (refObject.current) {
        setInterval(()=>{
            setObject(refObject.current.getBoundingClientRect());
        },1000)
    }
  }, [refObject]);

  return [object, refObject];
};

export default containerPosition;