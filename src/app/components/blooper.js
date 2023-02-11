import React, { useState } from 'react';
import Image from 'next/image'

import {imageSlider} from '../../hooks/hooks'

import { blooperBody, blooperEye, blooperEye2, blooperEyeKill, blooperEyeKill2, 
    tentacule, tentaculeClose, tentaculePink, tentaculePinkKill} from '../images'

const Blooper=()=> {
    //const {numberBlooper,nameSection} = props;
    const [tentaculeLife, setTentaculeLife] = useState([0, 0, 0, 0])
    const lifeChanger = (positionArray) =>{
        let lifeAuxilar = [...tentaculeLife]
        lifeAuxilar[positionArray] = 1 
        setTentaculeLife(lifeAuxilar)
        console.log(lifeAuxilar)
    }    
    return (
        <div className='blooper'>
            <Image
                src={blooperBody}
                className={'blooper__body'}
            />
            <Image
                src={imageSlider(1500)?blooperEye:blooperEye2}
                className={'blooper__eye blooper__eye-1'}
            />
            <Image
                src={imageSlider(1500)?blooperEye:blooperEye2}
                className={'blooper__eye blooper__eye-2'}
            />
            <div className='blooper__tentacule'>
                <Image
                    src={imageSlider(1000)?tentaculePink:tentaculeClose}
                    className={'blooper__tentacule-1'}
                    onClick={() =>lifeChanger(0)}
                />
                <Image
                    src={imageSlider(1200)?tentaculePink:tentaculeClose}
                    className={'blooper__tentacule-2'}
                />
                <Image
                    src={imageSlider(2800)?tentaculePink:tentaculeClose}
                    className={'blooper__tentacule-3'}
                />
                <Image
                    src={imageSlider(2600)?tentaculePink:tentaculeClose}
                    className={'blooper__tentacule-4'}
                />
        </div>
    </div>
    )
}

export default Blooper;