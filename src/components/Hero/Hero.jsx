import React from 'react'
import Grocery from "../../assets/grocery.png"
import Button from '../Button/Button'

const Hero = () => {
  return (
   <section>
    <div className='max-w-[1400px] mx-auto px-10 md:flex-row flex-col items-center md:pt-25 pt-35  min-h-screen flex'>

      {/* Hero content */}
      <div className='flex-1'>
       <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full"  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" data-aos-duration="1500">
  Export Best Quality...
</span>

        <h1 className='md:text-7xl/20 text-5xl/14 mt-4 font-bold ' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" data-aos-duration="2000">
            Tasty Orange <br /><span className='text-orange-500' >Fruits</span> & <span className='text-orange-500'>Veggies</span> <br />In Your City
        </h1>
        <p className='text-zinc-600 md:text-lg text-md max-w[530px] mt-5 mb-10' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" data-aos-duration="2500">
           Bred for a high content of beneficial substances. Our products are all fresh and healthy.
        </p>
        <Button content="Shop Now" />

      </div>


      {/* hero image */}
      <div className='flex-1'>
        <img src={ Grocery} alt="Hero Image" />
      </div>

    </div>
   </section>
  )
}

export default Hero
