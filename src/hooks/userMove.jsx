import React, { useState , useEffect} from 'react';

function userMove(intervalTime,topValue) {

  const [keyPressed, setKeyPressed] = useState(false);
  const [marioUp, setMarioUp] = useState(0)

  function downHandler(event) {
    setKeyPressed(true)
  }

  const upHandler = (event) => {
    setKeyPressed(false)
  }

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); 

  useEffect(()=>{
    const interval = setInterval(() => {
      if(marioUp==0 & keyPressed){
        setMarioUp(marioUp)
      }else if(marioUp<=topValue){
        setMarioUp(keyPressed?(marioUp-1):(marioUp+1))
      }
      else{
        setMarioUp(keyPressed?(marioUp-1):marioUp)
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
