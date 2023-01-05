
import React from 'react'

import 'tailwindcss/tailwind.css'

interface IProps {
  width: string
  posts_page: number
  total_posts: number
  current_page:number
  paginate: (e:number) => void
  nextPage:() =>void
  previousPage:() =>void
}

const Footer: React.FC<IProps> = ({
  width, posts_page, total_posts, paginate, current_page, nextPage, previousPage
}) => {

  const pageBtns = [];
  for (let i = 1; i <= 5; i++) {
    pageBtns.push(i);
  }

  return (
    <div className={`fixed bottom-0 w-full 
          h-[50px] bg-[white] flex justify-center items-center`}>

      <div className={`
      w-8 h-8 border border-[blue] flex justify-center 
      items-center rounded rounded-[50%] mx-4 text-xl font-bold cursor-pointer
      ${current_page===1&&"bg-[gray]"}
      ${current_page===1&&"border-[gray]"}
      ${current_page!=1&&"bg-btnBg"}
       ${current_page===1&&"cursor-not-allowed"}
      `}
        onClick={() => {current_page > 1 && paginate(0) }}
      >
        &#8249;&#8249;
      </div>

      <div className={`
        w-8 h-8 border border-[blue] flex justify-center
       items-center rounded rounded-[50%] mx-4 text-xl font-bold cursor-pointer
       ${current_page===1&&"bg-[gray]"}
       ${current_page===1&&"border-[gray]"}
      ${current_page!==1&&"bg-btnBg"}
       ${current_page===1&&"cursor-not-allowed"}
       `}
        onClick={() => { 
          current_page > 1 && previousPage()
         }}
      >
        &#8249;
      </div>

      {pageBtns.map((e: any) => (
        <div className={`
         w-8 h-8 border border-[blue] flex justify-center
         items-center rounded rounded-[50%] mx-4 cursor-pointer 
            ${Math.ceil(total_posts / posts_page) < e && "bg-[gray]"}
            ${Math.ceil(total_posts / posts_page) < e && "border-[gray]"}
            ${Math.ceil(total_posts / posts_page) >= e && current_page !== e && "bg-btnBg"}
            ${current_page == e && "bg-[white]"}
         ${Math.ceil(total_posts / posts_page) < e && "cursor-not-allowed"}
         `}
          onClick={() => { Math.ceil(total_posts / posts_page) >= e && paginate(e) }}
        >{e}</div>
      ))}

      <div className={`
      w-8 h-8 border border-[blue] flex justify-center
       items-center rounded rounded-[50%] mx-4 text-xl font-bold cursor-pointer
       ${current_page ===Math.ceil(total_posts / posts_page) && "cursor-not-allowed"}
       ${current_page===Math.ceil(total_posts / posts_page)&&"bg-[gray]"}
       ${current_page===Math.ceil(total_posts / posts_page)&&"border-[gray]"}
       ${current_page!==Math.ceil(total_posts / posts_page)&&"bg-btnBg"}
       `}
        onClick={() => { current_page <Math.ceil(total_posts / posts_page) && nextPage() }}
      >&#8250;</div>

      <div className={`w-8 h-8 border border-[blue] flex justify-center
       items-center rounded rounded-[50%] mx-4 text-xl font-bold cursor-pointer
       ${current_page===Math.ceil(total_posts / posts_page)&&"bg-[gray]"}
       ${current_page===Math.ceil(total_posts / posts_page)&&"border-[gray]"}

       ${current_page!==Math.ceil(total_posts / posts_page)&&"bg-btnBg"}
       ${current_page ===Math.ceil(total_posts / posts_page) && "cursor-not-allowed"}
       `}
        onClick={() => {
          current_page <Math.ceil(total_posts / posts_page) &&
           paginate(Math.ceil(total_posts / posts_page))
           }}
      >
        &#8250;&#8250;
      </div>

    </div>
  )
}

export default Footer;