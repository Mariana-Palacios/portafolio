import React, { useState , useEffect, useRef} from 'react';

function userMove(intervalTime,topValue) {

  const [eventActive, setEventActive] = useState(false);
  const [marioUp, setMarioUp] = useState(0)
  // 
  const ref = useRef();
  const [bbox, setBbox] = useState({});

  function downHandler(event) {
    setEventActive(true)
  }

  const upHandler = (event) => {
    setEventActive(false)
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    window.addEventListener("mousedown", downHandler);
    window.addEventListener("mouseup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
      window.removeEventListener("mousedown", downHandler);
      window.removeEventListener("mouseup", upHandler);
    };
  }, []); 

  useEffect(()=>{
    const interval = setInterval(() => {
      if(marioUp==0 & eventActive){
        setMarioUp(marioUp)
      }else if(marioUp<=topValue){
        setMarioUp(eventActive?(marioUp-1):(marioUp+1))
      }
      else{
        setMarioUp(eventActive?(marioUp-1):marioUp)
      }
    }, intervalTime);
    return () => {
      clearInterval(interval)
    }
  })

  const elementStyles = {
    position: 'absolute',
    top: `${marioUp}vh`,
  };
  //console.log(elementStyles)
  return elementStyles;
}

export default userMove;
