


import React from 'react'
import { CgClose } from 'react-icons/cg';
import { MdDone } from 'react-icons/md';

import 'tailwindcss/tailwind.css'

interface IProps {
  name:string, role:string, email:string,
   setEditObj:(obj:any)=>void
   setEditFun:(obj:any)=>void
   editObj:any
}

const EditDialogue: React.FC<IProps> = ({
  name, role, email, setEditObj, setEditFun, editObj
}) => {

  const pageBtns = [];
  for (let i = 1; i <= 5; i++) {
    pageBtns.push(i);
  }

  return(
    <div className='w-[100%] h-[90px] text-[black] flex justify-between items-center
         absolute z-40 bg-[gray] opacity-100 shadow-2xl'>
          <input 
          className='text-left w-[30%] p-1 outline-none border-2 border-[blue] mx-2'
          defaultValue={name}
          value={editObj.name}
          onChange={(e:any)=>{
            setEditObj({...editObj,name:e.target.value})
          }}
          name="name"
          />
           <input 
          className='text-left w-[30%] p-1 outline-none border-2 border-[blue] mr-2'
          defaultValue={email}
          name="email"
          value={editObj.email}
          onChange={(e:any)=>{
            setEditObj({...editObj,email:e.target.value})
          }}
          />
           <input 
          className='text-left w-[30%] p-1 outline-none border-2 border-[blue] mr-2'
          defaultValue={role}
          name="role"
          value={editObj.role}
          onChange={(e:any)=>{
            setEditObj({...editObj,role:e.target.value})
          }}
          />
          <div className='text-left w-[10%] flex'>
            <MdDone className='text-2xl text-[green] mr-4 cursor-pointer hover:scale-125 ease-in duration-500'
              onClick={()=>{
                setEditFun(editObj)
              }}
            />
            <CgClose className='text-[red] mr-2 text-2xl cursor-pointer hover:scale-125 ease-in duration-500'
              onClick={()=>{
                setEditObj({});
              }}
            />
             
          </div>
        </div>
  )
}

export default EditDialogue;