'use client'

import Image from 'next/image'
import { FC } from 'react'

import { AppButton } from '.'

const Hero: FC = () => {
  const handleScroll = () => {}

  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className='text-black-100 text-2xl font-light mt-5'>
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <AppButton
          title='Explore cars'
          containerStyles='bg-primary-blue text-white rounded-full mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
        <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
          <Image src='/hero.png' alt='hero' fill className='object-contain' />
          <div className='absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden' />
        </div>
      </div>
    </div>
  )
}

export default Hero
