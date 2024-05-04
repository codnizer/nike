import React from 'react'
import { Button } from '../components'
import { arrowRight } from '../assets/icons'
import offer from '../assets/images/offer.svg'
const SpecialOffers = () => {
  return (
    <section id='products' className='w-full max-container'>
      <div className='flex flex-row max-lg:flex-col-reverse gap-10'>
        <div className='flex justify-center '>
          <img src={offer} height={773} className='object-contain w-full' width={687} alt="" />
        </div>
        <div className='flex flex-col justify-center max-lg:ml-9 '>
          <h2 className='text-4xl font-montserrat text-coral-red font-bold my-6'>
            Special <span className='text-black' >Offer</span>
          </h2>
          <p className='info-text w-[75%] '>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          </p>
          <p className='info-text my-5 w-[75%]'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
          </p>
          <div className='flex flex-row gap-5 max-sm:flex-col max-sm:justify-start'>
            <Button label='Shop now' iconUrl={arrowRight} />
            <button className="flex justify-center items-center gap-2 px-7 py-4  font-montserrat text-lg leading-none bg-white border-4
            rounded-full text-slate-gray
            " >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers