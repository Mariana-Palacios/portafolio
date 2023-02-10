import React, { useState , useEffect, useRef} from 'react';

function userMove(intervalTime,topValue) {

  const [eventActive, setEventActive] = useState(false);
  const [marioUp, setMarioUp] = useState(topValue-10)
  // 
  const ref = useRef();
  const [bbox, setBbox] = useState({x:0, y:0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0});

  function downHandler(event) {
    setEventActive(true)

  }

  const upHandler = (event) => {
    setEventActive(false)
  }

  const set =()=> setInterval(()=>{
    setBbox(ref.current ? ref.current.getBoundingClientRect() : {});
  },200)

  useEffect(() => {
    set()
    window.addEventListener("touchstart", downHandler);
    window.addEventListener("touchend", upHandler);
    window.addEventListener("mousedown", downHandler);
    window.addEventListener("mouseup", upHandler);
    return () => {
      clearInterval(set)
      window.removeEventListener("touchstart", downHandler);
      window.removeEventListener("touchend", upHandler);
      window.removeEventListener("mousedown", downHandler);
      window.removeEventListener("mouseup", upHandler);
    };
  }, []); 


  useEffect(()=>{
    const interval = setInterval(() => {
      if(marioUp<=5 & eventActive & marioUp){
        setMarioUp(marioUp)
      }else if(marioUp<=topValue){
        setMarioUp(eventActive?(marioUp-1):(marioUp+1))
      }
      else{
        setMarioUp(eventActive?(marioUp-1):marioUp)
        console.log('hola mundo')
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
  return [elementStyles,bbox, ref];
}

export default userMove;
