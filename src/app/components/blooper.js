import React, { useState, useEffect } from 'react';
import Image from 'next/image'

import {imageSlider} from '../../hooks/hooks'

import { blooperBody, blooperEye, blooperEye2, blooperEyeKill, blooperEyeKill2, 
    tentacule, tentaculeClose, tentaculePink, tentaculePinkKill} from '../images'

const Blooper=()=> {
    //const {numberBlooper,nameSection} = props;
    const [tentaculeLife, setTentaculeLife] = useState([0, 0, 0, 0])
    const [damageState, setDamageState] =useState(false)
    const lifeChanger = (positionArray) => {
        let lifeAuxilar = [...tentaculeLife];
        lifeAuxilar[positionArray] = 1;
        setTentaculeLife(lifeAuxilar);
    };

    useEffect(()=>{
        setTimeout(() => {
            setDamageState((prevState) => !prevState);
        }, 2000);
        setDamageState((prevState) => !prevState);
    },[tentaculeLife])
    return (
        <div className={tentaculeLife[0]==1&&tentaculeLife[1]==1&&tentaculeLife[2]==1&&tentaculeLife[3]==1?'hide':'blooper'}>
            <Image
                src={blooperBody}
                className={'blooper__body'}
            />
            <Image
                src={damageState?(imageSlider(100)?blooperEyeKill:blooperEyeKill2):(imageSlider(1500)?blooperEye:blooperEye2)}
                className={'blooper__eye blooper__eye-1'}
            />
            <Image
                src={damageState?(imageSlider(100)?blooperEyeKill:blooperEyeKill2):(imageSlider(1500)?blooperEye:blooperEye2)}
                className={'blooper__eye blooper__eye-2'}
            />
            <div className='blooper__tentacule'>
                <Image
                    src={imageSlider(1000)?tentaculePink:tentaculeClose}
                    className={tentaculeLife[0]==0?'blooper__tentacule-1':'hide'}
                    onClick={damageState?()=>null:() =>lifeChanger(0)}
                />
                <Image
                    src={imageSlider(1200)?tentaculePink:tentaculeClose}
                    className={tentaculeLife[1]==0?'blooper__tentacule-2':'hide'}
                    onClick={damageState?null:() =>lifeChanger(1)}
                />
                <Image
                    src={imageSlider(2800)?tentaculePink:tentaculeClose}
                    className={tentaculeLife[2]==0?'blooper__tentacule-3':'hide'}
                    onClick={damageState?null:() =>lifeChanger(2)}
                />
                <Image
                    src={imageSlider(2600)?tentaculePink:tentaculeClose}
                    className={tentaculeLife[3]==0?'blooper__tentacule-4':'hide'}
                    onClick={damageState?null:() =>lifeChanger(3)}
                />
        </div>
    </div>
    )
}

export default Blooper;