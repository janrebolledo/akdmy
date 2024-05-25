'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import logo from '@/public/logo.png';
import hero from '@/public/images/hero.png';
import cta from '@/public/images/cta.jpg';

import IconCoaching from './components/icons/IconCoaching';
import IconPrizes from './components/icons/IconPrizes';
import IconCommunity from './components/icons/IconCommunity';
import IconInstagram from './components/icons/IconInstagram';
import IconTwitter from './components/icons/IconTwitter';
import Ticker from './components/icons/Ticker';
import { motionProps } from './components/utils';
import IconClose from './components/icons/IconClose';

const benefits = [
  { icon: <IconCoaching />, title: 'PERSONALIZED\nCOACHING WITH SV2' },
  { icon: <IconPrizes />, title: 'WEEKLY\nPRIZES + GIVEAWAYS' },
  { icon: <IconCommunity />, title: 'EXCLUSIVE\nCOMMUNITY' },
];

export default function Home() {
  const [modalVisibility, setModalVisibility] = useState(false);
  return (
    <main>
      <Ticker text={'JOIN THE WAITLIST'} />
      <header className='fixed p-6 py-12 lg:px-24 z-20'>
        <Image src={logo} width={96} alt='AKDMY Logo' />
      </header>
      <section className='h-[90svh] relative w-full'>
        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end md:justify-center items-center md:items-start p-6 py-12 lg:px-24 gap-4 z-10 text-white'>
          <motion.h1
            className='text-balance text-6xl md:text-8xl font-display lg:w-1/2 text-center md:text-start -mb-4'
            {...motionProps(0)}
          >
            TRANSFORMING THE FUTURE OF FOOTBALL.
          </motion.h1>
          <motion.p className='text-sm font-medium' {...motionProps(1)}>
            CLICK TO JOIN THE WAITLIST
          </motion.p>
          <motion.button
            className='font-black px-6 py-4 bg-gold text-black text-lg shadow-2xl shadow-gold/50 hover:bg-white transition-all'
            {...motionProps(2)}
            onClick={() => setModalVisibility(true)}
          >
            MY TURN
          </motion.button>
        </div>
        <Image
          src={hero}
          priority
          alt='Hero Background'
          className='object-cover w-full h-full z-0 object-[80%_center] md:object-[60%_center]'
        />
      </section>
      <section className='relative bg-gold min-h-[110lvh] md:min-h-0 md:max-h-[50lvh] overflow-hidden'>
        <div className='absolute top-0 left-0 bottom-0 right-0 h-full flex items-center justify-center flex-col p-6 gap-6 z-10'>
          <motion.h2
            className='font-display text-8xl -mb-4 text-center text-balance pt-12'
            {...motionProps(0)}
          >
            BECOME A STAR
          </motion.h2>
          <motion.p
            className='font-bold text-balance text-center'
            {...motionProps(1)}
          >
            LEARN FROM THE BEST, RESERVE YOUR SPOT TODAY
          </motion.p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className='flex flex-col gap-6 items-center font-black whitespace-pre-line text-center text-xl'
                {...motionProps(1 + index)}
              >
                {benefit.icon}
                <h3>{benefit.title}</h3>
              </motion.div>
            ))}
          </div>
          <motion.button
            className='font-black px-6 py-4 bg-black text-white text-lg shadow-2xl shadow-white/50 hover:text-gold transition-all'
            {...motionProps(benefits.length + 1)}
            onClick={() => setModalVisibility(true)}
          >
            MY TURN
          </motion.button>
        </div>
        <Image
          src={cta}
          alt='CTA Background'
          className='object-cover w-full h-full z-0 opacity-20 mix-blend-overlay object-bottom'
        />
      </section>
      <footer className='p-6 py-12 md:px-24 bg-black flex justify-between text-white'>
        <Image src={logo} width={96} className='h-fit w-24' alt='AKDMY Logo' />
        <div className='flex flex-col gap-2 items-end'>
          <div className='flex gap-2'>
            <Link href='https://instagram.com'>
              <IconInstagram />
            </Link>
            <Link href='https://twitter.com'>
              <IconTwitter />
            </Link>
          </div>
          <small>SV2 &copy; {new Date().getFullYear()}.</small>
        </div>
      </footer>
      <Modal
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
    </main>
  );
}

function Modal({ modalVisibility, setModalVisibility }) {
  return (
    <>
      <div
        className={`bg-white/20 fixed top-0 left-0 right-0 bottom-0 transition-all z-20 ${
          modalVisibility
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setModalVisibility(false)}
      />
      <div
        className={`fixed top-1/2 left-6 right-6 -translate-y-1/2 flex items-center flex-col justify-center bg-white p-10 md:p-12 z-30 gap-5 ${
          modalVisibility
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div className='flex w-full justify-between items-center gap-5'>
          <h2 className='-mb-4 font-display text-5xl'>JOIN THE WAILIST</h2>
          <IconClose onClick={() => setModalVisibility(false)} />
        </div>
        <form action='' className='flex flex-col gap-5 w-full'>
          <input
            type='email'
            placeholder='EMAIL@EXAMPLE.COM'
            className='px-6 py-4 bg-neutral-200 w-full'
          />
          <button
            type='submit'
            className='px-6 py-4 bg-gold text-black font-bold w-full'
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
