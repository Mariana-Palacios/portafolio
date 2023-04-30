//import '../../styles/styles.css'
import  React,{ useState, useEffect } from 'react';
import Image from 'next/image'

import {userMove, imageSlider, screenSize, containerPosition} from '../../hooks/hooks'

import {mario, background3, seaweed, spikes, bubble1, bubble2, fish} from '../images'

const Level=(props)=> {
    const {numberLevel,nameSection} = props;
    return (
        <div className='level flex flex-j-c flex-a-i flex-f-d-c'>
            <h1>{`LEVEL ${numberLevel}`}</h1>
            <p>{nameSection}</p>
        </div>  
    )
}

export default Level;

