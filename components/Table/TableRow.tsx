import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';   
import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'

interface IProps {
  id:number
   name:string
   email:string
   role:string
   deleteFun:(arr:any)=>void
   delete_arr:any
    setDeleteArr:any
}


const TableRow: React.FC<IProps> = ({id, name, email, role, deleteFun, delete_arr, setDeleteArr}) => {

  return (

    <div className='w-[100%] flex justify-center items-center border border-[gray] 
    border-b-1 border-l-0 border-r-0 border-t-0 relative'>

      <div className={`absolute left-[30px] top-[15px] w-[20px] h-[20px] 
        border border-[gray] flex justify-center items-center cursor-pointer hover:scale-125 ease-in duration-500 
        `}
        onClick={() => {
          !delete_arr.includes(
            Number(id)) ? setDeleteArr([...delete_arr, Number(id)])
          :
          setDeleteArr(
            delete_arr.filter(
              (e: any) => { return e != Number(id) }
            )
          )
        }}
      >
        <div className={`h-[15px] w-[15px] ${delete_arr.includes(Number(id)) && "bg-[blue]"}`}></div>
        {/* it is checkbox */}
      </div>

      <div className='w-[55%] h-[50px] text-[black] flex justify-between items-center relative'>
        <div className='w-[100%] h-[80px] text-[black] flex justify-between items-center
         absolute z-40 bg-[gray] opacity-100 shadow-2xl'>
          <input 
          className='text-left w-[30%] p-1 outline-none border-2 border-[blue] mx-2'
          defaultValue={name}
          name="name"
          />
           <input 
          className='text-left w-[30%] p-1 outline-none border-2 border-[blue] mr-2'
          defaultValue={email}
          name="email"
          />
           <input 
          className='text-left w-[30%] p-1 outline-none border-2 border-[blue] mr-2'
          defaultValue={role}
          name="role"
          />
          <div className='text-left w-[10%] flex'>
            <FaRegEdit className='text-2xl mr-2 cursor-pointer hover:scale-125 ease-in duration-500' />
            <AiOutlineDelete className='text-[red] text-2xl cursor-pointer hover:scale-125 ease-in duration-500'
              onClick={() => {
                deleteFun([Number(id)])
              }}
            />
          </div>
        </div>
        <div className='text-left w-[33%]'>{name}</div>
        <div className='text-left w-[33%]'>{email}</div>
        <div className='text-left w-[33%]'>{role}</div>
        <div className='text-left w-[10%] flex'>
          <FaRegEdit className='text-2xl mr-2 cursor-pointer hover:scale-125 ease-in duration-500' />
          <AiOutlineDelete className='text-[red] text-2xl cursor-pointer hover:scale-125 ease-in duration-500'
            onClick={() => {
              deleteFun([Number(id)])
            }}
          />
        </div>

      </div>

    </div>

  )
}

export default TableRow

