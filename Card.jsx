import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"


const Card = ( {Data , refrence}) => {
  return (
    
        <>
        < motion.div drag dragConstraints = {refrence} whileDrag={{scale:1.2}} dragElastic={.1} drag
  dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}  className=' flex-shrink-0 relative w-60 h-72 bg-zinc-500 rounded-[40px] text-white px-8 py-10 overflow-hidden'>
            
             <FaRegFileLines />
             <p className='text-sm mt-5 font-semibold leading-tight'>{Data.desc}
             </p>
             <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex item-center justify-between py-3 mb-3  px-8'>
                    <h5 >{Data.filesize}</h5>
                    <span className='w-5 h-5 bg-zinc-600 rounded-full flex
                    item-center justify-center'>
                      {Data.close ?< IoCloseSharp/> : <MdOutlineFileDownload size=".9999em" color='#fff'  /> }
                    
                    </span>

                  </div>
                  {
                    Data.tag.isOpen && ( <div className= {`tag ${Data.tag.tagColor=== "green"? "bg-blue-600": "bg-green-600"} flex items-center justify-center w-full py-3`}>
                    <h3 className='text-md flex items-center justify-center'> {
                      Data.tag.tagTitle
                    }</h3>
                    </div>
                    )
                  }
                  
             
               
             </div>
            </motion.div>
     
      </>
    
  )
}

export default Card
