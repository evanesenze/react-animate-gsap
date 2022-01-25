import React, {useEffect} from 'react';
import {gsap} from 'gsap';

import eath from '../images/anim2_1.png';
import eath2 from '../images/anim2_2.png';
import eath2_1 from '../images/anim2_3.png';
import eath2_2 from '../images/anim2_4.png';
import eath2_3 from '../images/anim2_5.png';
import fire_1 from '../images/anim2_6.png';
import fire_2 from '../images/anim2_7.png';
import man from '../images/anim2_8.png';
import smoke from '../images/anim2_9.png';


const AnimationTwo = () => {
    const doAnimation = () => new gsap
        .timeline({delay:2, repeat: -1})
        .from('.eath', {opacity: 0, duration: 1})
        .to('.eath', {opacity: 0, duration: 0.2})
        .from('.eath2', {opacity: 0, duration: 0.2}, "+1")
        .from('.eath2_1', {opacity: 0, duration: 1}, "+1")
        .from('.eath2_2', {opacity: 0, duration: 1}, "+1")
        .from('.eath2_3', {opacity: 0, duration: 1}, "+1")
        .fromTo('.fire_1', {opacity: 0, scale: 2}, {opacity: 0.7, scale: 1, rotate: 30, duration: 2}, "+1")
        .fromTo('.fire_2', {opacity: 0, scale: 2}, {opacity: 1, scale: 1, duration: 2}, "+1")
        .fromTo('.smoke', {opacity: 0, scale: 1}, {opacity: 0.4, scale: 1.5, duration: 3, rotate: 20}, "+1")
        .to('.eath2_1', {x: 150, y: -400, duration: 3, rotate: 30}, "+1")
        .to('.eath2_2', {x: 650, y: 10, duration: 3, rotate: -30}, "+1")
        .to('.eath2_3', {x: 650, y: -400, duration: 3, rotate: 30}, "+1")
        .fromTo('.man', {scale: 0.5, opacity: 0}, {scale: 1, opacity: 1, x: 550, y:-350, duration: 2, rotate: 20  }, "+1")
  
    useEffect(doAnimation, []);
    
    return (
    <div className="block anim_2">
      <img className="fire_1" src={fire_1} style={{opacity: 0}}/>
      <img className="fire_2" src={fire_2} style={{opacity: 0}}/>
      <img className="eath2" src={eath2} />
      <img className="eath2_1" src={eath2_1} />
      <img className="eath2_2" src={eath2_2} />
      <img className="eath2_3" src={eath2_3} />
      <img className="eath" src={eath} />
      <img className="smoke" src={smoke} />
      <img className="man" src={man} />
    </div>);
};

export default AnimationTwo;