import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';   
import React, { useEffect, useState, useContext } from 'react'

import 'tailwindcss/tailwind.css'
import EditDialogue from './EditDialogue';

interface IProps {
  id:number
   name:string
   email:string
   role:string
   deleteFun:(arr:any)=>void
   delete_arr:any
   setEditFun:(obj:any)=>void
  setDeleteArr:any
  editObj:any
   setEditObj:any
}


const TableRow: React.FC<IProps> = ({
  id, name, email, role,
   deleteFun, delete_arr, 
   setEditFun, setDeleteArr,
   editObj , setEditObj
  }) => {

  return (

    <div className={`w-[100%] flex justify-center items-center border border-[gray] 
    border-b-1 border-l-0 border-r-0 border-t-0 mb-1 ease-in duration-500 relative ${delete_arr.includes(Number(id)) && "bg-[gray]"}`}
    onClick={()=>{editObj.id !=id && setEditObj({})}}
    >
       
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
       {editObj.id==id
        && 
        <EditDialogue {...{  name, role, email, setEditObj,editObj, setEditFun}}/>}
        
        <div className='text-left w-[33%]'>{name}</div>
        <div className='text-left w-[33%]'>{email}</div>
        <div className='text-left w-[33%]'>{role}</div>
        <div className='text-left w-[10%] flex'
          onClick={(e:any)=>{e.stopPropagation()}}
         >
          <FaRegEdit className='text-2xl mr-2 cursor-pointer hover:scale-125 ease-in duration-500' 
            onClick={()=>{setEditObj({id,name,email,role})}}
          />
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

