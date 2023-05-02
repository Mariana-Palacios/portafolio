import '../../styles/styles.css'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import {userMove, imageSlider, screenSize, containerPosition} from '../../hooks/hooks'
import {Blooper, Level} from '../../app/components/components'

import {mario, background3, seaweed, spikes, bubble1, bubble2, fish,
    css, html, sass, mySql, reactImg, next, javascript, fastApi, python, mongoDb} from '../../app/images'
import { MdOutlineTouchApp  } from "react-icons/md";
import { HiOutlineCursorClick } from "react-icons/hi";
import { TbArrowBigRightLines, TbArrowBigLeftLines} from 'react-icons/tb';

export default function Home() {
    const [tentaculeLife, setTentaculeLife] = useState([0, 0, 0, 0])
    const [skillState, setskillState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    const {width, height} = screenSize()
    const [object, refObject] = containerPosition()
    const [showSkills, setShowSkills] = useState('hide')
    const [elementStyles, bbox, ref] = width>=1000?userMove(100,65):userMove(100,80);
    const skillChanger = (positionArray) => {
        let skillAuxilar = [...skillState];
        skillAuxilar[positionArray] = 1;
        setskillState(skillAuxilar);
    }
    return (
        <main className='mySkills'>
            <Level numberLevel="2" nameSection="MY SKILLS"/>
            <div className='arrows flex flex-j-s-b'>
                <Link href="/aboutMe"><TbArrowBigLeftLines className='arrows__rigth'/></Link>
                <Link href="/"><TbArrowBigRightLines className='arrows__left'/></Link>
            </div>
            <section className={`touchClick ${showSkills==='hide'?'':'hide'}`}>
                <p>Touch <MdOutlineTouchApp/> {skillState[0]==1&&tentaculeLife[1]==1&&tentaculeLife[2]==1&&tentaculeLife[3]==1?<span>or hold click<HiOutlineCursorClick /></span>:'the tentacules'}</p>
            </section>
            <div  ref={ref} className={tentaculeLife[0]==1&&tentaculeLife[1]==1&&tentaculeLife[2]==1&&tentaculeLife[3]==1?'mario':'hide'} style={elementStyles}>
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
            <section className={`mySkills__icons  ${showSkills}`}>
                {/*left*/}
                <Image
                    src={html}
                    alt='html'
                    className='icon icon-l-r icon-1'
                />
                <Image
                    src={css}
                    alt='css'
                    className='icon icon-l-l icon-2'
                />
                <Image
                    src={sass}
                    alt='sass'
                    className='icon icon-l-r icon-3'
                />
                <Image
                    src={javascript}
                    alt='javascript'
                    className='icon icon-l-l icon-4'
                />
                <Image
                    src={reactImg}
                    alt='reactImg'
                    className='icon icon-l-r icon-5'
                />
                <Image
                    src={next}
                    alt='next'
                    className='icon icon-l-l icon-6'
                />
                {/*rigth*/}
                <Image
                    src={mySql}
                    alt='mySql'
                    className='icon icon-r-r icon-7'
                />
                <Image
                    src={fastApi}
                    alt='fastApi'
                    className='icon icon-r-l icon-8'
                />
                <Image
                    src={python}
                    alt='python'
                    className='icon icon-r-r icon-9'
                />
                <Image
                    src={mongoDb}
                    alt='mongoDb'
                    className={`icon icon-r-l icon-10 `}
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
                if ((width>=1000 && bbox.top <= height / 2 && bbox.top>0)||(bbox.top <= height*(3/4) && bbox.top>0 && width<1000)){
                    setShowSkills('');
                }
                /*
                if(width<1000&& bbox.top>0){
                    if(bbox.top>=(55*height)/100){
                        skillChanger(4)
                        skillChanger(7)
                        //console.log(skillState[9])
                        console.log(55*height/100)
                    }
                    if(bbox.top>=(65*height)/100){
                        skillChanger(5)
                        skillChanger(8)
                        //console.log(skillState[9])
                    }
                    if(bbox.top>=(75*height)/100){
                        skillChanger(9)
                    }
                }
                */
            }, [width,bbox.top,height,showSkills])}

            <Image
                src={background3}
                alt='background3'
                className='background3'
                ref={refObject}
            />
            <Blooper tentaculeLife={tentaculeLife} setTentaculeLife={setTentaculeLife}/>
        </main>  
    )
}
  