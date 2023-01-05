// This component renders the input search box to filter the users with role, name and email field

import React from 'react'
import 'tailwindcss/tailwind.css'

interface IProps {
  width: string
  filterData: (text: string) => void
}



const InputBox: React.FC<IProps> = ({ width, filterData }) => {

  return (
    <div className={`border border-[black] w-[${width}] mb-1`}>
      <input className={`p-2 outline-0 w-[${width}]`}
        placeholder='Search by name, email or role'
        onChange={(e: any) => { filterData(e.target.value) }}
      />
    </div>
  )
}

export default InputBox;