// This component renders the in-place edit user input fields with default values as present values

import React, { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg';
import { MdDone } from 'react-icons/md';

import 'tailwindcss/tailwind.css'

interface IProps {
    name: string, role: string, email: string,
    setEditObj: (obj: any) => void
    setEditFun: (obj: any) => void
    editObj: any
}

const EditDialogue: React.FC<IProps> = ({
    name, role, email, setEditObj, setEditFun, editObj
}) => {

    // error state is used to handle the errors in typing the input fields at time of saving, 
    // the edit request will be successful only if error object is empty
    const [error, setError] = useState<any>({});

    useEffect(() => {
        setError({});
    }, [editObj])

    return (
        <div className='w-[100%] h-[90px] text-[black] flex justify-between items-center
         absolute z-40 bg-[gray] opacity-100 shadow-2xl border border-[black] rounded rounded-md'
        >
            {/* Error message to appear after clicking on save button if there is any error in filing input box */}
            {error.errorMsg != "" && <div className='absolute text-[red] top-[60px] left-[20px] font-bold text-lg'>
                {error.errorMsg}
            </div>}

           {/* input box to edit name of user */}
            <input
                className='text-left w-[30%] p-1 outline-none border-2 border-[blue] mx-2'
                defaultValue={name}
                value={editObj.name}
                onChange={(e: any) => {
                    setEditObj({ ...editObj, name: e.target.value })
                }}
                name="name"
            />

            {/* input box to edit email of user */}
            <input
                className='text-left w-[30%] p-1 outline-none border-2 border-[blue] mr-2'
                defaultValue={email}
                name="email"
                type={email}
                value={editObj.email}
                onChange={(e: any) => {
                    setEditObj({ ...editObj, email: e.target.value })
                }}
            />

            {/* input box to edit the role of user */}
            <input
                className='text-left w-[30%] p-1 outline-none border-2 border-[blue] mr-2'
                defaultValue={role}
                name="role"
                value={editObj.role}
                onChange={(e: any) => {
                    setEditObj({ ...editObj, role: e.target.value })
                }}
            />
            <div className='text-left w-[10%] flex'>
                <MdDone className='text-2xl text-[green] mr-4 cursor-pointer hover:scale-125 ease-in duration-500'
                    onClick={() => {

                        // only proceed to save if role value entered is either "admin" or "member"
                        // else throw alert
                        if ((editObj.role != "member") && (editObj.role != "admin")) {
                            setError({ errorMsg: "* User can only be admin or member!" })
                        }


                        // after checking role field, check if any field is empty
                        else if (editObj.role === "" || editObj.email === "" || editObj.name === "") {
                            setError({ errorMsg: "* One or more fields are empty" });
                        }

                        // once everything required is in place then save the changes
                        else {
                            setEditFun(editObj);
                        }

                    }}
                />

                {/* this element will cancel and close the edit dialogue box and no changes will appear */}
                <CgClose className='text-[red] mr-2 text-2xl cursor-pointer hover:scale-125 ease-in duration-500'
                    onClick={() => {
                        setEditObj({});
                    }}
                />

            </div>
        </div>
    )
}

export default EditDialogue;