"use client"; // this is a client component
import '../styles/styles.css'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import screenSize from '@/hooks/screenSize';
import imageSlider from '../hooks/imageSlider'
import followMouse from '@/hooks/followMouse';
import { FiGithub, FiYoutube, FiLinkedin } from "react-icons/fi";
import {MARIANA, PALACIOS, background_1, start, pipeline1, fire, blueLines, backgroundSmall1, 
        blueLinesSmall, fish, fishFlip, lakitu, gombaFlyBlue, gombaBlue, piranhaYellow, piranhaYellowLeft,
        piranhaYellowRight} from './images'

export default function Home() {
  const {width, height} = screenSize()
  const [imageIndex, setImageIndex] = useState([MARIANA, PALACIOS, background_1, start, pipeline1, fire, blueLines]);
  //get the size of the screen

  //follow lakitu
  let followMouseStatus = followMouse()
  return (
    <main className="main flex flex-f-d-c">
      <Image
        src={lakitu}
        alt="lakitu"
        className='lakitu'
        style={{top:followMouseStatus.y,left:followMouseStatus.x}}
      />
      <section className='mainMenu flex flex-f-d-c flex-j-c flex-a-i'>
        <div className='mainMenu__name flex'>
          <Image
            src={MARIANA}
            alt="MARIANA"
            className='mainMenu__name-letter'
          />
          <Image
            src={PALACIOS}
            alt="PALACIOS"
            className='mainMenu__name-letter'
          />
        </div>

          <p className='mainMenu__text'>
            Press play to<br/>
            enter story mode
          </p>
          <Link className='mainMenu__button' href="/aboutMe">start</Link>
          <p className='mainMenu__text'>
            Follow me at 
          </p>

        <div className='socialMedia'>
          <a href="https://github.com/Mariana-Palacios" ><FiGithub className='socialMedia__github'/></a>
          <a href="http://" ><FiYoutube className='socialMedia__youtube'/></a>
          <a href="http://" ><FiLinkedin className='socialMedia__linkedin'/></a>
        </div>
      </section>
      <footer className='background1'>
        <Image
          src={imageSlider(500)?gombaFlyBlue:gombaBlue}
          alt='gombaFlyBlue'
          className='background1__gombaFlyBlue background1__gombaFlyBlue-1'
        />
        <Image
          src={imageSlider(500)?gombaFlyBlue:gombaBlue}
          alt='gombaFlyBlue'
          className='background1__gombaFlyBlue background1__gombaFlyBlue-2' 
        />
        <Image
          src={width>=1000?blueLines:blueLinesSmall}
          alt='blueLines'
          className='background1__blueLines'
        />
        <Image
          src={start}
          alt='start'
          className='background1__start'
        />
        <Image
          src={imageSlider(1000)?piranhaYellow:piranhaYellowLeft}
          alt="piranhaYellow"
          className='background1__piranhaYellow background1__piranhaYellow-1'
        />
        <Image
          src={imageSlider(200)?piranhaYellow:piranhaYellowRight}
          alt="piranhaYellow"
          className='background1__piranhaYellow background1__piranhaYellow-2'
        />
        <Image
          src={pipeline1}
          alt='pipeline'
          className='background1__pipeline1 background1__pipeline1-1'
        />
        <Image
          src={pipeline1}
          alt='pipeline'
          className='background1__pipeline1 background1__pipeline1-2'
        />
        <Image
          src={fire}
          alt='pipeline'
          className='background1__fire-1'
        />
        <Image
          src={fire}
          alt='pipeline'
          className='background1__fire-2'
        />
        <Image
          src={imageSlider(1000)?fish:fishFlip}
          alt="fish"
          className='background1__fish'
        />
        <Image
          src={width>=1000? background_1:backgroundSmall1}
          alt="background1"
          className='background1__image'
        />
      </footer>
    </main>
  )
}
