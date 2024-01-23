import React, { useRef, useState } from 'react'
import Card from './Card'

const Forehead = () => {
  const ref =useRef(null);
  const Data =[
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos modi culpa natus veritatis.",
      filesize: ".9mb",
       close: false,
        tag: {isOpen: true, tagTitle: "Download Now",
         tagColor: "green" }
  
      },
      {
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos modi culpa natus veritatis.",
        filesize: ".9mb",
         close: false,
          tag: {isOpen: false, tagTitle: "Upload",
           tagColor: "red" }
    
        },
        {
          desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos modi culpa natus veritatis.",
          filesize: ".9mb",
           close: false,
            tag: {isOpen: true, tagTitle: "Download Now",
             tagColor: "green" }
      
          },
  ];
  useState
  return (
    <>
    <div ref ={ref} className='w-full h-full top-0 left-0 fixed z-[3] flex  gap-5 flex-wrap'>

       {Data.map((item,index)=>(
        <Card Data = {item} refrence ={ref} />
       )

       )}
        </div>

      
    
    </>
  )
}

export default Forehead
