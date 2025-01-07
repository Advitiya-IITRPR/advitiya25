'use client';

import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Kodchasan} from 'next/font/google';
const kodchasan = Kodchasan({
  subsets: ["latin"],
  weight: '700',
});

export default function EventsNav(){
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <section className={`w-60 md:w-min overflow-x-auto flex justify-evenly items-center gap-y-2 flex-col md:flex-row mx-auto text-center my-10 bg-gradient-to-b md:bg-gradient-to-r from-slate-600 px-10 py-4 rounded-3xl md:rounded-full ${kodchasan.className}`}>
      <button className='flex relative md:hidden mx-auto' onClick={()=>{setOpen(!open)}}><FontAwesomeIcon icon={faCaretDown} /></button>
      <Link href={'/events/workshops'} className={`flex-1 md:px-6 md:flex ${path.indexOf('workshops') != -1 || path == '/events' ? 'text-green-500 !flex' : ''} ${open ? 'flex' : 'hidden'}`}>Workshops</Link>
      <Link href={'/events/talks'} className={`flex-1 md:px-6 md:flex ${path.indexOf('talks') != -1 ? 'text-green-500 !flex' : ''} ${open ? 'flex' : 'hidden'}`}>Talks</Link>
      <Link href={'/events/competitions'} className={`flex-1 md:px-6 md:flex ${path.indexOf('competitions') != -1 ? 'text-green-500 !flex' : ''} ${open ? 'flex' : 'hidden'}`}>Competitions</Link>
      <Link href={'/events/exhibitions'} className={`flex-1 md:px-6 md:flex ${path.indexOf('exhibitions') != -1 ? 'text-green-500 !flex' : ''} ${open ? 'flex' : 'hidden'}`}>Exhibitions</Link>
      <Link href={'/events/isc'} className={`flex-1 md:px-6 md:flex ${path.indexOf('isc') != -1 ? 'text-green-500 !flex' : ''} ${open ? 'flex' : 'hidden'}`}>ISC</Link>
    </section>
  )
}