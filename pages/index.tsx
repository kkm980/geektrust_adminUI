import Head from 'next/head'
import { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'

import { Footer, Table } from "../components"

export default function Home() {

  // datas state is to store the user's data coming from data.json file in public,
  // datas state will behave as single source of information impersonated as database
  const [datas, setDatas] = useState([]);

  // persisting_data is used to handle present locally saved users data including edit, delete
  const [persisting_data, setPersisting_data] = useState([]);

  // current_page state manages the present page selected by pagination buttons, 
  // further used to handle the multiple delete users range, pagination conditional styling etc
  const [current_page, setCurrent_page] = useState(1);

  // as per given task, we are using posts_page to be 10, but to scale the app further, it is
  // better to handle it with useState so that it can be changed at one entry point only
  const [posts_page, setPosts_page] = useState(10);

// editObj handles the state of current user's data which is selected to get edited
  const [editObj, setEditObj] = useState({});

  // delete_arr is for targeting and managing the multiple users which are selected to be deleted 
  // in single click of delete button at left-bottom
  const [delete_arr, setDeleteArr] = useState<any>([]);


  // fetchJson function is used to get all the data.json file by asynchronous JS function
  // and store the data in datas setState
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


// as soon as document loads on browser, call fetchJson function
  useEffect(() => {
    fetchJson();
  }, []);


  // whenever pagination buttons are clicked to change the current page shown, make the selected
  // to be deleted users array empty
  useEffect(() => {
    setDeleteArr([]);
  }, [current_page]);


  // filterData function filters the users list based on values entered by the user in input box
  // and renders new set of filters data with pagination
  const filterData = (text: string) => {
    setCurrent_page(1);
    setPersisting_data(datas.filter(
      (e: any, i: number) => {
        return e.name.toLowerCase().includes(text.toLocaleLowerCase())
          || e.role.toLocaleLowerCase().includes(text.toLocaleLowerCase())
          || e.email.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      }))
  }

// deleteFun is the function to delete the array of selected users
  const deleteFun = (arr: any) => {
    setPersisting_data(persisting_data.filter((e: any) => {
      return !arr.includes(Number(e.id));

    }));

    setDatas(datas.filter((e: any) => {
      return !arr.includes(Number(e.id));
    }));
    
    setDeleteArr([]);
  }



// setEditFun is used to edit the user
  const setEditFun = (obj: any) => {
    const updatedData: any = persisting_data.map((x: any) => (x.id == obj.id ? { ...obj } : x));
    setPersisting_data(updatedData);
    const updatedDatas: any = persisting_data.map((x: any) => (x.id == obj.id ? { ...obj } : x));
    setDatas(updatedDatas);

    setEditObj({});

  }

  // last_post_index, first_post_index and current_posts are the variables used for pagination
  const last_post_index = current_page * posts_page;
  const first_post_index = last_post_index - posts_page;
  // current_posts is the subarray of users to be shown on the page
  //  that is customed as per the page button clicked by user
  const current_posts = persisting_data.slice(first_post_index, last_post_index);


  // paginate function is called when user clicks on any page-number button to show the 
  // user's data as per the page selected
  const paginate = (num: number) => {
    setCurrent_page(num);
  }

  // previousPage button is used to handle the click previous button so as to migrate to previous page
  const previousPage = () => {
    setCurrent_page(current_page - 1);
  }

  // nextPage function is used to handle the click on next page button to migrate to next button
  const nextPage = () => {
    setCurrent_page(current_page + 1);
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
            <Table
              show_data={current_posts} fetchJson={filterData}
              deleteFun={deleteFun} delete_arr={delete_arr}
              setEditFun={setEditFun} setDeleteArr={setDeleteArr}
              editObj={editObj} setEditObj={setEditObj}
            />
          </div>
          <Footer width="100%"
            posts_page={posts_page} total_posts={persisting_data.length}
            paginate={paginate} current_page={current_page}
            previousPage={previousPage} nextPage={nextPage}

          />


          {/* the delete button at bottom left to trigger the delete function for multiple selected users */}
          <div className={`fixed left-[70px] bottom-[8px] 
          bg-[#fc0341] h-[35px] w-[150px] font-semibold 
          text-lg rounded rounded-[32px] text-[white] 
            flex justify-center items-center cursor-pointer md:left-[5px]
            ${delete_arr.length===0 && "cursor-not-allowed"}
            ${delete_arr.length===0 && "bg-[#4f2b34]"}
            hover:scale-125 ease-in duration-500 
            `}
            onClick={()=>{deleteFun(delete_arr)}}
          >
            Delete Selected
          </div>
        </div>

      </div>
    </>
  )
}
