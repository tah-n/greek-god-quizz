"use client"
import React, { useEffect, useState } from 'react';
import { godsInfo } from './lib/materials';
import { useStart } from './lib/useStore';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BackgroundBeams } from './ui/background-beams';

interface Founded {
    god: string | undefined,
    pic: string | undefined,
    desc1: string | undefined,
    desc2: string | undefined
}


const Result = () => {
    const {resultGod} = useStart();
    const [foundedInfo,setFoundedInfo] = useState<Founded>({
        god: '',
        pic: '',
        desc1: '',
        desc2: ''
    });

    useEffect(() => { 
        if(resultGod) {
            const find = godsInfo.find((god) => god.god === resultGod);
        setFoundedInfo({
            god: find?.god,
            pic: find?.pic,
            desc1: find?.desc1,
            desc2: find?.desc
        })
        }
        
    },[]);

    useGSAP(() => {
        gsap.fromTo("#box", {
            y: -50,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut'
            
        }, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.inOut'
        })
    },[])

  return (
    <div className='w-full h-screen flex items-center justify-center z-50'>
        <div id='box' className='md:w-[60%] grid grid-cols-2 grid-rows-2 gap-4 bg-cream-400/25 md:bg-cream-400/30 w-[80%] h-[30rem] border border-white/20 backdrop-blur-md rounded-3xl p-2'>
            <div className='lg:row-span-2 text-center w-full h-full flex items-center flex-col justify-center pt-16 lg:pt-0'>
                <h1 className='text-2xl font-bold text-white md:text-3xl lg:text-4xl leading-8' >
                    {foundedInfo.god}
                </h1> 
                <p className='text-white/70 md:text-2xl text-lg lg:mb-1 tracking-wide md:leading-10'>
                    {foundedInfo.desc1}
                </p> 
            <div className='hidden lg:block'>
                <p className='text-white/50 w-full leading-7'>
                    {foundedInfo.desc2}
                </p>  
            </div>
            </div>
            <div className='row-span-2 col-start-2 row-start-1 w-full'>
                <img src={foundedInfo.pic} width={200} height={400} className='rounded-3xl object-cover md:object-fill w-full h-full' />
            </div>
            <div className='lg:hidden col-span-2 p-3'>
                <p className='text-white/50 w-full leading-7'>
                    {foundedInfo.desc2}
                </p>  
           </div>
        </div> 
    </div>
  )
}

export default Result;
