import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'tailwindcss/tailwind.css'
import { useEffect, useState } from 'react'
import {Footer, Table} from "../components"


export default function Home() {

  const [data, setData] = useState([]);
  const [show_data, setShow_data] = useState([]);
  const [current_page, setCurrent_page]=useState(0);

  const fetchJson = () => {
    fetch('/data.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      data.map((e:any)=>{
        e.is_selected=false;
        e.is_deleted=false;
      })
      setData(data);
    }).catch((e) => {
      console.log(e.message);
    });
  }

  useEffect(() => {
    fetchJson();
  },[]);
  
  useEffect(() => {
    showOnFrontend(0);
    console.log(data, "sdss")
  },[data]);

  // useEffect(() => {
  //   console.log(show_data, "setdata");
  // },[show_data]);


  const filterData=(text:string)=>{
    setShow_data([]);
    //  const new_data=data.filter(
    //   (e:any, i:number)=>
    //   { return e.name.includes(text)||e.role.includes(text)||e.email.includes(text)})
      text.length>0?  
     setData(
      [...data.filter(
      (e:any, i:number)=>
      { return e.name.toLowerCase().includes(text.toLocaleLowerCase())||e.role.toLocaleLowerCase().includes(text.toLocaleLowerCase())||e.email.toLocaleLowerCase().includes(text.toLocaleLowerCase())})])
      :fetchJson();

    //  console.log(data,"sdfgds");
     
  }
  const showOnFrontend=(page_num_start:number)=>{
    setCurrent_page(page_num_start);
    page_num_start*10<data.length &&
    setShow_data(data.slice(page_num_start*10,page_num_start*10+10));
  }

  const showNext=()=>{
    (current_page+1)*10<data.length &&
    setShow_data(data.slice((current_page+1)*10,(current_page*10)+20));
    (current_page+1)*10<data.length &&
    setCurrent_page(current_page+1);
  }
  const showPrev=()=>{
    (current_page-1)*10>=0 &&
    setShow_data(data.slice((current_page-1)*10,current_page*10));
    (current_page-1)*10>0 &&
    setCurrent_page(current_page-1);
  }

  return (
    <>
      <Head>
        <title>ADMIN_UI</title>
        <meta name="creator" content="Created by Krishna Kant" />
        <meta name="description" content="Geektrust frontend assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className='relative w-full h-[100vh]'>
          <div className=' w-[90%] mt-[10px] pb-[100px] mx-auto'>
            <Table {...{ show_data,filterData}} />
          </div>
        <Footer width="100%" showOnFrontend={showOnFrontend} showNext={showNext} showPrev={showPrev} />
        
          
        </div>

      </main>
    </>
  )
}
