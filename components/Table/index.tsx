import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'


import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'
import TableRow from './TableRow'
import { InputBox } from '..'
interface IProps {
   show_data:any
   filterData:(text:string)=>void
}
 

const TableHeader=()=>{
    return (
        <div className='w-[100%] h-[50px] flex justify-center items-center relative border border-[gray] border-b-1 border-l-0 border-r-0 border-t-0'>
        <div className='absolute left-[30px] top-[15px] w-[20px] h-[20px] cursor-pointer border border-[gray] hover:scale-125 ease-in duration-500'>
            {/* it is checkbox */}
        </div>

        <div className='w-[55%] text-[black] flex justify-between items-center relative font-black'>
            <div className='text-left w-[33%]'>Name</div>
            <div className='text-left w-[33%]'>Email</div>
            <div className='text-left w-[33%]'>Role</div>
            <div className='text-left w-[10%]'>Actions</div>
        </div>

    </div>
    )
}

const Table: React.FC<IProps> = ({show_data, filterData}) => {

  return (
    <div className='w-[100%] mt-[10px] flex flex-col items-center justify-center border-0'>
        <InputBox width="100%" filterData={filterData}/>
        <TableHeader/>
        {show_data.map((e:any)=>(
            <TableRow name={e.name} email={e.email} role={e.role}/>
        ))}
        
    </div>
  )
}

export default Table;