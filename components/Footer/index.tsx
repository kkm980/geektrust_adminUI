// This component will render pagination buttons

import React from 'react'
import 'tailwindcss/tailwind.css'

interface IProps {
  width: string
  posts_page: number
  total_posts: number
  current_page: number
  paginate: (e: number) => void
  nextPage: () => void
  previousPage: () => void
}

const Footer: React.FC<IProps> = ({
  width, posts_page, total_posts, paginate, current_page, nextPage, previousPage
}) => {


  // generating button numbers till 5
  const pageBtns = [];
  for (let i = 1; i <= 5; i++) {
    pageBtns.push(i);
  }


  return (
    <div className={`fixed bottom-0 w-full 
    h-[50px] bg-[white] flex justify-center items-center sm:justify-end`}>

          
      {/* This button is used to jump to first page if current page is greater than 1 else gray background, 
      cursor not allowed */}
      <div className={`
      w-8 h-8 border border-[blue] flex justify-center 
      items-center rounded rounded-[50%] mx-4 text-xl font-bold cursor-pointer
      ${current_page === 1 && "bg-[gray]"}
      ${current_page === 1 && "border-[gray]"}
      ${current_page != 1 && "bg-btnBg"}
      ${current_page != 1 && "text-[white]"}
       ${current_page === 1 && "cursor-not-allowed"}
      `}
        onClick={() => { current_page > 1 && paginate(1) }}
      >
        &#8249;&#8249;
      </div>


 {/* This button is used to jump to previous page if current page is greater than 1 else gray
  background cursor not allowed */}
      <div className={`
        w-8 h-8 border border-[blue] flex justify-center
       items-center rounded rounded-[50%] mx-4 text-xl font-bold cursor-pointer
       ${current_page === 1 && "bg-[gray]"}
       ${current_page === 1 && "border-[gray]"}
      ${current_page !== 1 && "bg-btnBg"}
      ${current_page != 1 && "text-[white]"}
       ${current_page === 1 && "cursor-not-allowed"}
       `}
        onClick={() => {
          current_page > 1 && previousPage()
        }}
      >
        &#8249;
      </div>


{/* generating the 5 buttons with onClick functionality */}
      {pageBtns.map((e: any) => (
        <div key={e} className={`
         w-8 h-8 border border-[blue] flex justify-center
         items-center rounded rounded-[50%] mx-4 cursor-pointer 
            ${Math.ceil(total_posts / posts_page) < e && "bg-[gray]"}
            ${Math.ceil(total_posts / posts_page) < e && "border-[gray]"}
            ${Math.ceil(total_posts / posts_page) >= e && current_page !== e && "bg-btnBg"}
            ${Math.ceil(total_posts / posts_page) >= e && current_page !== e && "text-[white]"}
            ${current_page == e && "bg-[white]"}
         ${Math.ceil(total_posts / posts_page) < e && "cursor-not-allowed"}
         `}
          onClick={() => { Math.ceil(total_posts / posts_page) >= e && paginate(e) }}
        >{e}</div>
      ))}


{/* this button will take to the next page if current page is not the last page else gray background,
with cursor not allowed */}
      <div className={`
      w-8 h-8 border border-[blue] flex justify-center
       items-center rounded rounded-[50%] mx-4 text-xl font-bold cursor-pointer
       ${current_page >= Math.ceil(total_posts / posts_page) && "cursor-not-allowed"}
       ${current_page >= Math.ceil(total_posts / posts_page) && "bg-[gray]"}
       ${current_page >= Math.ceil(total_posts / posts_page) && "border-[gray]"}
       ${current_page < Math.ceil(total_posts / posts_page) && "bg-btnBg"}
       ${current_page < Math.ceil(total_posts / posts_page) && "text-[white]"}
       `}
        onClick={() => { current_page < Math.ceil(total_posts / posts_page) && nextPage() }}
      >&#8250;</div>



{/* this button will take to the last page if current page is not the last page else gray background,
with cursor not allowed */}
      <div className={`w-8 h-8 border border-[blue] flex justify-center
       items-center rounded rounded-[50%] mx-4 text-xl font-bold cursor-pointer
       ${current_page >= Math.ceil(total_posts / posts_page) && "cursor-not-allowed"}
       ${current_page >= Math.ceil(total_posts / posts_page) && "bg-[gray]"}
       ${current_page >= Math.ceil(total_posts / posts_page) && "border-[gray]"}
       ${current_page < Math.ceil(total_posts / posts_page) && "bg-btnBg"}
       ${current_page < Math.ceil(total_posts / posts_page) && "text-[white]"}
       `}
        onClick={() => {
          current_page < Math.ceil(total_posts / posts_page) &&
            paginate(Math.ceil(total_posts / posts_page))
        }}
      >
        &#8250;&#8250;
      </div>

    </div>
  )
}

export default Footer;