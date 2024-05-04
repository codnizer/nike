
import { star } from "../assets/icons"
const ProductCard = ({imageUrl,name,price}) => {
  return (
    <div className="flex flex-1 justify-center items-center flex-col gap-2  ">
        <img className="mb-6 rounded-md  " height={250} width={250} src={imageUrl} alt={name} />
        <h3 className="flex "> <img src={star} alt="star" /> <span className="mx-2 text-slate-gray font-montserrat"> (4.5)</span> </h3>
        <h3 className="text-xl font-montserrat font-bold">{name}</h3>
        <h3 className="text-xl font-palanquin text-coral-red">{price}</h3>
    </div>
  )
}

export default ProductCard