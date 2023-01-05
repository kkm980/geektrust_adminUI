import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import { useEffect, useState } from 'react'
import { Footer, Table } from "../components"


export default function Home() {

  const [datas, setDatas] = useState([]);
  const [persisting_data, setPersisting_data] = useState([]);
  const [current_page, setCurrent_page] = useState(1);
  const [posts_page, setPosts_page]=useState(10);
  const [delete_arr, setDeleteArr] =useState<any>([]);
  const fetchJson = () => {
    fetch('/data.json')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setDatas(data);
        setPersisting_data(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  useEffect(() => {
    fetchJson();
  },[]);
 

  const filterData = (text: string) => {
    setCurrent_page(1);
    setPersisting_data(datas.filter(
      (e: any, i: number) => {
        return e.name.toLowerCase().includes(text.toLocaleLowerCase())
          || e.role.toLocaleLowerCase().includes(text.toLocaleLowerCase())
          || e.email.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      })) 
  }


  const deleteFun = (arr: any) => {
    setPersisting_data(persisting_data.filter((e: any) => {
      return !arr.includes(Number(e.id));

    }));

    setDatas(datas.filter((e: any) => {
      return !arr.includes(Number(e.id));
    }))
  }

  const editFun = (obj: any) => {
    setPersisting_data(persisting_data.filter((e: any) => {
      return obj.id != e.id ? e : { ...obj };

    }));

    setDatas(datas.filter((e: any) => {
      return obj.id != e.id ? e : { ...obj };
    }))
  }
  
  const last_post_index=current_page*posts_page;
  const first_post_index=last_post_index-posts_page;
  const current_posts=persisting_data.slice(first_post_index, last_post_index);
  
  const paginate=(num:number)=>{
    setCurrent_page(num);
  }

  const previousPage=()=>{
    setCurrent_page(current_page-1);
  }

  const nextPage=()=>{
    setCurrent_page(current_page+1);
  }

  return (
    <>
      <Head>
        <title>ADMIN_UI</title>
        <meta name="creator" content="Created by Krishna Kant" />
        <meta name="description" content="Geektrust frontend assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className='relative overflow-hidden pb-[100px]'>
        <div className='relative w-full'>
          <div className=' w-[90%] mt-[10px] mx-auto'>
            <Table show_data={current_posts} fetchJson={filterData} deleteFun={deleteFun} 
            delete_arr={delete_arr} setDeleteArr ={setDeleteArr}/>
          </div>
        <Footer width="100%" 
        // showOnFrontend={showOnFrontend} showNext={showNext} showPrev={showPrev}
          posts_page={posts_page} total_posts={persisting_data.length}
           paginate={paginate} current_page={current_page}
           previousPage={previousPage} nextPage={nextPage}
        
        />
  
        </div>

      </div>
    </>
  )
}
