import { blog_data } from '@/assets/assets';
import React, { useEffect, useState } from 'react';
import Franchiseitem from './Franchiseitem';
const axios =require('axios');

const Franlist = () => {
  const [menu, setMenu] = useState('All'); // State initialization
   const [ blog ,setBlogs] =useState([]);
   const fetchBlogs= async()=>{
    const response=await axios.get('/api/fran');
    setBlogs(response.data.blog);
    console.log(response.data.blog);
   }
   useEffect(()=>{fetchBlogs();},[]);
  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All"
              ? 'bg-black text-white py-1 px-4 rounded-sm'
              : 'py-1 px-4'
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? 'bg-black text-white py-1 px-4 rounded-sm'
              : 'py-1 px-4'
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu === "Startup"
              ? 'bg-black text-white py-1 px-4 rounded-sm'
              : 'py-1 px-4'
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Food")}
          className={
            menu === "Food"
              ? 'bg-black text-white py-1 px-4 rounded-sm'
              : 'py-1 px-4'
          }
        >
          Food
        </button>
      </div>

      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
        {blog_data
          .filter((item) => menu === 'All' || item.category === menu)
          .map((item, index) => (
            <Franchiseitem
              key={index} id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default Franlist;