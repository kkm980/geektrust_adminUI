
import React from 'react'

import 'tailwindcss/tailwind.css'
import TableRow from './TableRow'
import { InputBox } from '..'
interface IProps {
   show_data:any
   fetchJson:(text:string)=>void
   deleteFun:(arr:any)=>void
   setEditFun:(obj:any)=>void
   delete_arr:any
   setDeleteArr:any
   editObj:any 
   setEditObj:any
}
 

const Table: React.FC<IProps> = ({
    show_data, fetchJson, deleteFun, 
    setEditFun, delete_arr, setDeleteArr,
    editObj, setEditObj
}) => {

    const TableHeader = () => {
        return (
            <div className='w-[100%] h-[50px] flex justify-center items-center
             relative border border-[gray] border-b-1 border-l-0 border-r-0 border-t-0'
            >
                <div className={`absolute left-[30px] top-[15px] w-[20px] h-[20px] 
                   border border-[gray] flex justify-center items-center cursor-pointer
                    hover:scale-125 ease-in duration-500 
                 `}
                    onClick={() => {
                        delete_arr.length === show_data.length ?
                            setDeleteArr([])
                            :
                            setDeleteArr(show_data.map((e: any) => {
                                return Number(e.id);
                            }))
                    }}
                >
                    <div className={`h-[15px] w-[15px] 
                    ${(delete_arr.length!=0 && (delete_arr.length === show_data.length))  && "bg-[blue]"}`}>

                    </div>
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


    return (
        <div className='w-[100%] mt-[10px] flex flex-col items-center justify-center border-0'>
            <InputBox width="100%" filterData={fetchJson}/>
        <TableHeader/>
        {show_data.map((e:any)=>(
            <TableRow key={e.id} 
            id={e.id} 
            name={e.name} email={e.email} 
            role={e.role} delete_arr={delete_arr} 
            setDeleteArr={setDeleteArr} 
            deleteFun={deleteFun} setEditFun={setEditFun}
            editObj={editObj} setEditObj={setEditObj}
            />
        ))}
        
    </div>
  )
}

export default Table;