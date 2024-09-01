"use client" 
import React from 'react';
import { questions } from './lib/materials';
import { HoverEffect } from './ui/cardHoverEffect';
import { BackgroundBeams } from './ui/background-beams';

const Questions = () => {
  return (
    <div className='flex items-center justify-center bg-repeat'>
      <BackgroundBeams />
      <HoverEffect items={questions} />
      
    </div>
  )
}

export default Questions;
