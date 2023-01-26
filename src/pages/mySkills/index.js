import '../../styles/styles.css'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react';

import {userMove, imageSlider, screenSize, containerPosition} from '../../hooks/hooks'

import {mario, background3, seaweed, spikes, bubble1, bubble2} from '../../app/images'


export default function Home() {
    const {width, height} = screenSize()
    const [scrollTop, setScrollTop] = useState(0);

    const handleScroll = (event) => {
      setScrollTop(event.currentTarget.scroll);
    };
    return (
        <main className='mySkills'>
            {/*console.log(width)*/}
            {/*console.log(width>=1000?userMove(200,60):userMove(200,75.5))*/}
            {console.log(scrollTop)}
            <h1>{scrollTop}</h1>
            <div  onScroll={handleScroll} className='mario' style={width>=1000?userMove(200,60):userMove(200,75.5) }>
                <Image
                    src={bubble1}
                    alt='bubble'
                    className='mario__bubble1'
                />
                <Image
                    src={bubble1}
                    alt='bubble'
                    className='mario__bubble2'
                />
                <Image
                    src={mario}
                    alt='mario'
                    className='mario__chapter'
                />
            </div>
            <Image
                src={seaweed}
                alt='seaweed'
                className='seaweed seaweed-1'
            />
            <Image
                src={seaweed}
                alt='seaweed'
                className='seaweed seaweed-2'
            />
            <Image
                src={seaweed}
                alt='seaweed'
                className='seaweed seaweed-3'
            />
            <Image
                src={seaweed}
                alt='seaweed'
                className='seaweed seaweed-4'
            />
            <Image
                src={spikes}
                alt='spikes'
                className='spikes spikes-1'
            />
            <Image
                src={spikes}
                alt='spikes'
                className='spikes spikes-2'
            />
            <Image
                src={background3}
                alt='background3'
                className='background3'
            />
        </main>  
    )
}
  