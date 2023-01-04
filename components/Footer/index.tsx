import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'

interface IProps {
  width:string
  showOnFrontend:any
  showNext:any
  showPrev:any
}
 

const Footer: React.FC<IProps> = ({width, showOnFrontend, showNext, showPrev}) => {

  return (
      <div className={`border border-[black] fixed bottom-0 w-full h-[50px] bg-[white] flex justify-center items-center`}>
       
       <div className='w-8 h-8 border border-[blue] flex justify-center items-center rounded rounded-[50%] mx-4 text-xl font-bold'
       onClick={()=>{showOnFrontend(0)}}
       >&#8249;&#8249;</div>
       <div className='w-8 h-8 border border-[blue] flex justify-center items-center rounded rounded-[50%] mx-4 text-xl font-bold'
         onClick={()=>{showPrev()}}
       >&#8249;</div>
       <div className='w-8 h-8 border border-[blue] flex justify-center items-center rounded rounded-[50%] mx-4'
        onClick={()=>{showOnFrontend(0)}}
       >1</div>
       <div className='w-8 h-8 border border-[blue] flex justify-center items-center rounded rounded-[50%] mx-4'
        onClick={()=>{showOnFrontend(1)}}
       >2</div>
       <div className='w-8 h-8 border border-[blue] flex justify-center items-center rounded rounded-[50%] mx-4'
         onClick={()=>{showOnFrontend(2)}}
       >3</div>
       <div className='w-8 h-8 border border-[blue] flex justify-center items-center rounded rounded-[50%] mx-4'
         onClick={()=>{showOnFrontend(3)}}
       >4</div>
    
    <div className='w-8 h-8 border border-[blue] flex justify-center items-center rounded rounded-[50%] mx-4'
         onClick={()=>{showOnFrontend(4)}}
       >5</div>

<div className='w-8 h-8 border border-[blue] flex justify-center items-center rounded rounded-[50%] mx-4 text-xl font-bold'
         onClick={()=>{showNext()}}
       >&#8250;</div>

<div className='w-8 h-8 border border-[blue] flex justify-center items-center rounded rounded-[50%] mx-4 text-xl font-bold'
         onClick={()=>{showOnFrontend(5)}}
       >&#8250;&#8250;</div>

      </div>
  )
}

export default Footer;