
import { services } from "../constants"
const Services = () => {
  return (
    <section className='w-full max-container'>
    <div className="flex flex-row gap-6 justify-center max-sm:flex-col items-center">
      {services.map((item)=>( 
        <div className="flex flex-col w-[30%] shadow-3xl p-8 rounded-md max-sm:w-[80%] " key={item.label}>
          <img className="bg-coral-red p-2 rounded-full" width={50} height={50} src={item.imgURL} alt={item.label} />
          <h3 className="py-5 text-xl font-montserrat font-bold">{item.label}</h3>
          <p className="info-text font-palanquin ">{item.subtext}</p>
        </div>
       ))}
       </div>
    </section>
  )
}

export default Services