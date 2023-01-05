// It is the main source file for showing Table ofd users, 
// consisting of input filter box, table header and table body components

import React, { SetStateAction } from 'react'
import 'tailwindcss/tailwind.css'

import TableRow from './TableRow'
import { InputBox } from '..'

interface IProps {
    show_data: any
    fetchJson: (text: string) => void
    deleteFun: (arr: any) => void
    setEditFun: (obj: any) => void
    delete_arr: any
    setDeleteArr: React.Dispatch<SetStateAction<any>>
    editObj: any
    setEditObj: React.Dispatch<SetStateAction<any>>
}


const Table: React.FC<IProps> = ({
    show_data, fetchJson, deleteFun,
    setEditFun, delete_arr, setDeleteArr,
    editObj, setEditObj
}) => {


// TableHeader component renders the table header with the checkbox to select all fields
// present on current page
    const TableHeader = () => {

        return (
            <div className='w-[100%] h-[50px] flex justify-center items-center
             relative border border-[gray] border-b-1 border-l-0 border-r-0 border-t-0'
            >
                <div className={`absolute left-[30px] top-[15px] w-[20px] h-[20px] 
                   border border-[gray] flex justify-center items-center cursor-pointer
                    hover:scale-125 ease-in duration-500 
                 `}
                //  to toggle between select and deselect all elements present on present page with one click
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
                    ${(delete_arr.length != 0 && 
                    (delete_arr.length === show_data.length)) && "bg-[blue]"}`}>
                        {/* it is checkbox inner box to be colored with blue if checked*/}
                    </div>
                   
                </div>

                <div className='w-[55%] text-[black] flex justify-between items-center 
                relative font-black lg:w-[85%] sm:w-[95%]'>
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

            {/* Input search box filter to be rendered here*/}
            <InputBox width="100%" filterData={fetchJson} />


            <TableHeader />

           {/* if there is no data left on presentr page after deletion, show this header as instruction */}
            {show_data.length==0 &&
            <div className='mt-4 text-lg font-semibold'> 
            Nothing here, go back or modify your search
            </div>}

            {/* Render all the user lists on present page as per the pagination */}
            {show_data.map((e: any) => (
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