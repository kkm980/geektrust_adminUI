import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import 'tailwindcss/tailwind.css'

import EditDialogue from './EditDialogue';

interface IProps {
  id: number
  name: string
  email: string
  role: string
  deleteFun: (arr: any) => void
  delete_arr: any
  setEditFun: (obj: any) => void
  setDeleteArr: any
  editObj: any
  setEditObj: any
}


const TableRow: React.FC<IProps> = ({
  id, name, email, role,
  deleteFun, delete_arr,
  setEditFun, setDeleteArr,
  editObj, setEditObj
}) => {

  return (


    <div className={`w-[100%] flex justify-center items-center border border-[gray] 
    border-b-1 border-l-0 border-r-0 border-t-0 mb-1 ease-in duration-500 relative
     ${delete_arr.includes(Number(id)) && "bg-[gray]"}`}

      onClick={() => { editObj.id != id && setEditObj({}) }}
    >

{/* The input edit in-place box renders here if user's edit button at right is clicked */}
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
{/* The input in-place edit box ends here */}


{/* Component to render the row of user with details and action buttons to edit and delete */}
      <div className={`w-[55%] h-[50px] text-[black] flex justify-between items-center relative lg:w-[85%]`}>
        {editObj.id == id
          &&
          <EditDialogue {...{ name, role, email, setEditObj, editObj, setEditFun }} />}

        <div className='text-left w-[33%]'>{name}</div>
        <div className='text-left w-[33%]'>{email}</div>
        <div className='text-left w-[33%]'>{role}</div>

        <div className='text-left w-[10%] flex'
          onClick={(e: any) => { e.stopPropagation() }}
        >
          {/* button to click and open in-place edit box */}
          <FaRegEdit className='text-2xl mr-2 cursor-pointer hover:scale-125 ease-in duration-500'
            onClick={() => { setEditObj({ id, name, email, role }) }}
          />

          {/* button to delete the particular user */}
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

