import '../../styles/styles.css'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import {userMove, imageSlider, screenSize, containerPosition} from '../../hooks/hooks'
import Level from '../components/level'

import {mario, background3, seaweed, spikes, bubble1, bubble2, fish,
    css, html, sass, mySql, reactImg, next, javascript, blooperBody, blooperEye, blooperEyeKill, blooperEyeKill2, 
    tentacule, tentaculeClose, tentaculePink, tentaculePinkKill} from '../../app/images'
import { MdOutlineTouchApp  } from "react-icons/md";
import { HiOutlineCursorClick } from "react-icons/hi";

export default function Home() {
    const {width, height} = screenSize()
    const [object, refObject] = containerPosition()
    const [showSkills, setShowSkills] = useState('hide')
    const [elementStyles, bbox, ref] = width>=1000?userMove(100,65):userMove(100,80);
    return (
        <main className='mySkills'>
            <Level numberLevel="2" nameSection="MY SKILLS"/>
            <section className={`touchClick ${showSkills==='hide'?'':'hide'}`}>
                <p>Touch <MdOutlineTouchApp/> or hold click<HiOutlineCursorClick /></p>
            </section>
            <div  ref={ref} className='mario' style={elementStyles}>
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
            <section className={`mySkills__icons flex ${showSkills}`}>
                <Image
                    src={html}
                    alt='html'
                    className='icon'
                />
                <Image
                    src={css}
                    alt='css'
                    className='icon'
                />
                <Image
                    src={sass}
                    alt='sass'
                    className='icon'
                />
                <Image
                    src={javascript}
                    alt='javascript'
                    className='icon'
                />
                <Image
                    src={reactImg}
                    alt='reactImg'
                    className='icon'
                />
                <Image
                    src={next}
                    alt='next'
                    className='icon'
                />
                <Image
                    src={mySql}
                    alt='mySql'
                    className='icon'
                />
            </section>
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
            {useEffect(() => {
                if ((width>=1000 && bbox.top <= height / 2 && bbox.top>0)||(bbox.top <= height*2/3 && bbox.top>0 && width<1000)){
                    console.log(showSkills)
                    setShowSkills('');
                    console.log(showSkills)
                }
            }, [width,bbox.top,height,showSkills])}
            {/*Fish line 1*/}

            <Image
                src={fish}
                className={`fish fishLine1 fish-1 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine1 fish-2 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine1 fish-3 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine1 fish-4 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine1 fish-5 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine1 fish-6 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine1 fish-7 ${showSkills}`}
            />

            {/*Fish line 1*/}

            {/*Fish line 2*/}

            <Image
                src={fish}
                className={`fish fishLine2 fish-1 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine2 fish-2 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine2 fish-3 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine2 fish-4 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine2 fish-5 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine2 fish-6 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine2 fish-7 ${showSkills}`}
            />

            {/*Fish line 2*/}

            {/*Fish line 3*/}

            <Image
                src={fish}
                className={`fish fishLine3 fish-1 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine3 fish-2 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine3 fish-3 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine3 fish-4 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine3 fish-5 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine3 fish-6 ${showSkills}`}
            />
            <Image
                src={fish}
                className={`fish fishLine3 fish-7 ${showSkills}`}
            />

            {/*Fish line 3*/}

            <div className='blooper'>
                <Image
                    src={blooperBody}
                    className={'blooper__body'}
                />
                <Image
                    src={blooperEye}
                    className={'blooper__eye blooper__eye-1'}
                />
                <Image
                    src={blooperEye}
                    className={'blooper__eye blooper__eye-2'}
                />
                <div className='blooper__tentacule'>
                    <Image
                        src={tentaculePink}
                        className={'blooper__tentacule-1'}
                    />
                    <Image
                        src={tentaculePink}
                        className={'blooper__tentacule-2'}
                    />
                    <Image
                        src={tentaculePink}
                        className={'blooper__tentacule-3'}
                    />
                    <Image
                        src={tentaculePink}
                        className={'blooper__tentacule-4'}
                    />
                </div>
            </div>
            <Image
                src={background3}
                alt='background3'
                className='background3'
                ref={refObject}
            />
        </main>  
    )
}
  