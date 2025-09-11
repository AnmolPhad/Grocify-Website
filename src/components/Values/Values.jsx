import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import BasketFull from "../../assets/basket-full-vegetables.png"


const Values = () => {

const leftValues = value.slice(0,2).map(item=>{
  return (
     <div className='flex  md:flex-row-reverse items-center gap-7' key={item.id}>
        {/* icon  */}
        <div className='flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 rounded-full p-3 '>
            <span>{item.icon}</span>
        </div>

        {/* content  */}
        <div className='md:text-right gap-15'>
            <h3 className='text-zinc-800 text-3xl font-bold'>{item.title}</h3>
            <p className='text-zinc-600 md:mt-2 mt-2' >{item.para}</p>
        </div>
     </div>
  )
})

const rightValues = value.slice(2).map(item=>{
  return (
   <div className="flex items-center gap-7" key={item.id}>
  {/* icon */}
  <div className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-12 h-12 rounded-full p-3">
    <span>{item.icon}</span>
  </div>

  {/* content */}
  <div className=''>
    <h3 className="text-zinc-800 text-3xl font-bold ">{item.title}</h3>
    <p className="text-zinc-600 mt-2">{item.para}</p>
  </div>
</div>

  )
})


  return (
  <section>
   <div className='max-w-[1400px] mx-auto px-10 py-20 -mt-15 ' id='about'>
    <Heading highlight="About" heading="Us"/>

    <div className='flex gap-5  mt-7 h-100 md:flex-row flex-col'>
        {/* left value  */}
        <div className='md:min-h-88 flex-col md:justify-between flex md:pt-6 md:pb-1 '>
            {leftValues}
        </div>

        <div className='md:flex w-1/2 hidden  '>
            <img src={BasketFull} alt="" />
        </div>

        {/* right value  */}
        <div className='md:min-h-88 flex-col md:justify-between flex md:pt-6 pb-1 -pt-2'>
          {rightValues}
        </div>

    </div>
   </div>
  </section>
  )
}

export default Values

const value =[
    {
        id:1 ,
        title: "Trust",
        para:'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />

    },
        {
        id:2 ,
        title: "Always Fresh",
        para:'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf/>

    },
        {
        id:3 ,
        title: "Food Safety",
        para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaShieldAlt/>

    },
        {
        id:4 ,
        title: "100% Organic",
        para:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icon: <FaSeedling/>

    }
]