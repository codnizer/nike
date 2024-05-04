import React from 'react'
import { reviews } from '../constants'
import { star } from '../assets/icons'
const CustomerReviews = () => {
  return (
    <section className='w-full max-container'>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-bold font-montserrat' >
          What Our <span className='text-coral-red '>Customers</span>  Say?
        </h2>
        <p className='info-text max-sm:text-sm max-w-[70%] mt-3 mb-10 text-center'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
        </p>
         <div className='flex flex-col lg:flex-row'>

         
          {reviews.map((item)=>(
            <div className='flex flex-col justify-center items-center mb-8 shadow-2xl mx-8 py-4 '>
              <img className=' rounded-full ' height={100} width={100} src={item.imgURL} alt={item.customerName} />
              <p className='info-text my-3 text-center max-w-[70%] text-xs font-light '>
                {item.feedback}
              </p>
              <h3 className='flex flex-row gap-3'>
                <img height={20} width={20} src={star} alt="star" />
                <span className=' font-montserrat text-sm '>
                  ({item.rating})
                </span>
              </h3>
              <h3 className=' font-palanquin font-bold '>
                {item.customerName}
              </h3>
            </div>
          ))}
         </div>
      </div>
    </section>
  )
}

export default CustomerReviews