import '../../styles/styles.css'
import { useState } from 'react';
import { useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import {imageSlider, screenSize} from '../../hooks/hooks'

import Level from '../../app/components/level'
import {gomba, gombaFlip, gombaFly, branch, coin, chomp, background2, backgroundLeft2, pipeline1, cloud,
     cloudSmall, koopa, koopaFly, bombOmb, pipelineBomb, backgroundTextBlue, backgroundBlue, PButton,
     chainLink, wood} from '../../app/images'
import { TbArrowBigDownLines, TbArrowBigRightLines, TbArrowBigLeftLines } from "react-icons/tb";
     
export default function Home() {
    const [PButtonState, setPButtonState] = useState(true)
    const screenSizeStatus = screenSize()
    return (
        <main className='aboutMe'>
            <Level numberLevel="1" nameSection="ABOUT ME"/>
            <div className='arrows flex flex-j-s-b'>
                <Link href="/"><TbArrowBigLeftLines className='arrows__rigth'/></Link>
                <Link href="/mySkills"><TbArrowBigRightLines className='arrows__left'/></Link>
            </div>
            <div className={`backgroundTextBlueContainer ${PButtonState?'hide':''}`}>
                <p className='backgroundTextBlueContainer__text'>
                I am a highly motivated and passionate front-end developer with a strong desire to create visually appealing and user-friendly digital products. Although I am still in the early stages of my career, I am always eager to learn new technologies. I am confident that my strong attention to detail, problem-solving skills, and ability to work well in a team will make me a valuable asset to any organization. I am excited to start my career as a front-end developer and I am willing to go the extra mile to learn and grow in this field.
                </p>
                <Image
                    src={screenSizeStatus.width<=1200?backgroundTextBlue:backgroundBlue}
                    alt="backgroundTextBlue"
                    className='backgroundTextBlue'
                />
            </div>
            <div className={`PButtonContainer flex flex-f-d-c flex-a-i ${PButtonState?'':'hide'}`}>
                <Image
                    src={imageSlider(500)?koopa:koopaFly}
                    alt="gombaFly"
                    className='gombaFly'
                />
                <h1 className='PButtonContainer__text'>Push here</h1>
                <TbArrowBigDownLines className='PButtonContainer__arrow'/>
                <Image
                    src={PButton}
                    alt="PButton"
                    className='PButtonContainer__PButton'
                    onClick={()=>setPButtonState(!PButtonState)}
                />
            </div>
            <Image
                src={imageSlider(200)?gomba:gombaFlip}
                alt="gomba"
                className='gomba gomba-1'
            />
            <Image
                src={imageSlider(200)?gomba:gombaFlip}
                alt="gomba"
                className='gomba gomba-2'
            />
            <Image
                src={backgroundLeft2}
                alt="backgroundLeft2"
                className='backgroundLeft2'
            />
            <Image
                src={branch}
                alt="branch"
                className='branch'
            />
            {/* Chomp start */}
            <Image
                src={wood}
                alt="wood"
                className='wood'
            />
            <Image
                src={chainLink}
                alt="chainLink"
                className='chainLink chainLink-1'
            />
            <Image
                src={chainLink}
                alt="chainLink"
                className='chainLink chainLink-2'
            />
            <Image
                src={chainLink}
                alt="chainLink"
                className='chainLink chainLink-3'
            />
            <Image
                src={chainLink}
                alt="chainLink"
                className='chainLink chainLink-4'
            />
            <Image
                src={chainLink}
                alt="chainLink"
                className='chainLink chainLink-5'
            />
            <Image
                src={chomp}
                alt="chomp"
                className='chomp'
            />
            {/* Chomp end */}
            <Image
                src={cloud}
                alt="cloud"
                className='cloud'
            />
            <Image
                src={cloudSmall}
                alt="cloudSmall"
                className='cloudSmall'
            />
            <Image
                src={bombOmb}
                alt="bombOmb"
                className='bombOmb'
            />
            <Image
                src={pipelineBomb}
                alt="pipelineBomb"
                className='pipelineBomb'
            />
            <Image
                src={pipeline1}
                alt="pipeline1"
                className='pipeline1'
            />
            <Image
                src={background2}
                alt="background2"
                className='background2'
            />
        </main>  
    )
}
  