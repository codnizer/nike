import React from 'react'
import { products } from '../constants'
import { ProductCard } from '../components'
const PopularProducts = () => {
  return (
    <section id="about-us"
    className='w-full   flex-col justify-center gap-10 max-container'
    >
<h1 className='text-4xl font-bold font-palanquin'>
  Our <span className='text-coral-red'>Popular</span> Products
</h1>
<p className='py-5 w-[30rem] max-sm:w-auto text-xl text-slate-gray font-palanquin'>
  experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.
</p>
<div className='flex flex-row gap-6 justify-center items-center mt-8 max-sm:flex-col'>
  {products.map((item)=>(
    <ProductCard key={item.name} imageUrl={item.imgURL} name={item.name} price={item.price}  />
  ))}
</div>
    </section>
  )
}

export default PopularProducts