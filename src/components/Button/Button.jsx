import React from 'react'

const Button = (props) => {
  return (
    
      <button className='bg-gradient-to-b from-red-500 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 transition-all duration-300 hover:to-orange-600 to cursor-pointer' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" data-aos-duration="1500">
        {props.content}
      </button>
   
  )
}

export default Button
