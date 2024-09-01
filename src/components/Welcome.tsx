"use client";
import React, {  useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useStart } from './lib/useStore'
import Questions from './Questions';

const Welcome = () => {
    const {startQuiz,setStartQuiz} = useStart();

    useGSAP(() => {
        const tl = gsap.timeline({defaults: { duration: 0.4, ease: "power1.inOut" }});
        tl.to("#box", { y:-20,delay: 0.04, opacity: 1})
          .to("#text1", { delay: 0.1, opacity: 1},)
          .to("#text2", { delay: 0.15, opacity: 1})
          

        gsap.to("#textbox", { y:20 })  

        gsap.fromTo("#button", {
            rotate: 180,
            y: -20,
            duration:0.3,
            scale: 3
        }, {
            rotate: 0,
            y: 10,
            duration:0.3,
            scale: 1
        })

    },[]);

    const handleStartQuiz = () => {
        setStartQuiz(true);
    }

    if(startQuiz) {
        return <Questions />
    }

    return (
        <section className='absolute z-50 w-full h-full flex items-center justify-center'>
            <div id='box' className='w-[80%] flex flex-col items-center justify-center md:w-[55%] text-center md:h-[70%] h-[80%] rounded-3xl px-5 py-8 overflow-hidden opacity-0'>
                <h1 className='text-bold md:text-3xl text-xl text-white line-clamp-1 pb-7'>🌟 Discover Your Inner Deity! 🌟</h1>
                <div id='textbox' className="leading-7 text-sm md:text-xl text-[1.2rem] tracking-wide text-center">
                    <span id='text1' className='text-pink-300 text-[1.2rem] tracking-wide opacity-0'>
                        Ever wondered which ancient Greek god or goddess 
                        you might be?
                    </span>
                    <span id='text2' className='opacity-0'>
                        Are you as wise as Athena, as powerful as Zeus,
                        or as adventurous as Hermes? Dive into the world of mythology
                        and uncover your divine alter ego with our fun and enlightening quiz! 🏛️✨
                        Take the quiz now and reveal the godly traits that make you unique. Who knows, you might just find out you’re destined for Mount Olympus! 🏔️⚡
                    </span>
                </div> 
                <button id='button' className='border border-white/30 md:p-4 mt-12 rounded-3xl transition-all hover:bg-white/30 hover:text-nyanza-200 max-w-[24rem] p-2 text-sm md:text-lg cursor-pointer md:mt-20 font-bold font-mono active:bg-white/10' onClick={handleStartQuiz}>
                Take the Quizz :&#x29;
                </button>
            </div>
        </section>
      ) 
}


export default Welcome;
