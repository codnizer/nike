 
import {Button} from '../components'
import { shoe8 } from '../assets/images'
import { arrowRight } from '../assets/icons'
const SuperQuality = () => {
  return (
   <section className='w-full max-container' id="">
    <div className="flex justify-between flex-row gap-14 md:gap-4 max-sm:flex-col">
      <div className="flex flex-col   basis-[50%]" >
          <h2 className='text-4xl font-montserrat font-bold ' >
            We Provide You <span className='text-coral-red' >Super Quality</span> Shoes
          </h2>
          <p className='info-text mt-8'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          </p>
          <p className='info-text mt-8 mb-8'>
          Our dedication to detail and excellence ensures your satisfaction
          </p>
          <div>
          <Button label="View Details"  iconUrl={arrowRight}  />
          </div>
          
      </div>
      <div className='flex justify-enter  basis-[50%]' >
        <img className='object-contain' width={570} height={522} src={shoe8} alt="Super Quality" />
      </div>
    </div>
   </section>
  )
}

export default SuperQuality