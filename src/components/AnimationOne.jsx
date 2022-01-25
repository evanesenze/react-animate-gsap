import React,{useEffect} from 'react';
import {gsap} from 'gsap';

import img1 from '../images/anim1_1.png';
import img2 from '../images/anim1_2.png';
import img3 from '../images/anim1_3.png';
import img4 from '../images/anim1_4.png';
import img5 from '../images/anim1_5.png';


const AnimationOne = ({Block}) => {

    const doAnimation = () => new gsap
        .timeline({delay:2, repeat: -1})
        .from('.img1', {opacity: 0, duration: 1})
        .to('.img1', {opacity: 0, duration: 1})
        .from('.img2',{opacity: 0, duration: 1}, "-=1")
        .to('.img2', {opacity: 0, duration: 1})
        .from('.img3',{opacity: 0, duration: 1}, "-=1")
        .to('.img3', {opacity: 0, duration: 1})
        .from('.img4',{opacity: 0, duration: 1}, "-=1")
        .to('.img4', {opacity: 0, duration: 1})
        .from('.img5',{opacity: 0, duration: 1}, "-=1")
    
    useEffect(doAnimation, []);

    return (
    <div className="block anim_1">
        <img className="img1" src={img1} />
        <img className="img2" src={img2} />
        <img className="img3" src={img3} />
        <img className="img4" src={img4} />
        <img className="img5" src={img5} /> 
    </div>)
};

export default AnimationOne;