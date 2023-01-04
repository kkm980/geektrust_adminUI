import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';   
import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'

interface IProps {
   name:string
   email:string
   role:string
}


const TableRow: React.FC<IProps> = ({name, email, role}) => {

  return (

    <div className='w-[100%] flex justify-center items-center border border-[gray] border-b-1 border-l-0 border-r-0 border-t-0 relative'>
        <div className='absolute left-[30px] top-[15px] w-[20px] h-[20px] border border-[gray] cursor-pointer hover:scale-125 ease-in duration-500'>
            {/* it is checkbox */}
        </div>

          <div className='w-[55%] h-[50px] text-[black] flex justify-between items-center'>
              <div className='text-left w-[33%]'>{name}</div>
              <div className='text-left w-[33%]'>{email}</div>
              <div className='text-left w-[33%]'>{role}</div>
              <div className='text-left w-[10%] flex'>
              <FaRegEdit className='text-2xl mr-2 cursor-pointer hover:scale-125 ease-in duration-500'/>
              <AiOutlineDelete className='text-[red] text-2xl cursor-pointer hover:scale-125 ease-in duration-500'/>
              </div>
              
          </div>

    </div>
   
    )
}

export default TableRow

