import { products } from '../constants'
import PopularProductsCard from '../components/PopularProductsCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        {/* change style here  */}
        <h2 className='text-4xl font-palanquin font-bold'>Most <span className='text-coral-red'>Popular</span> Products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Elevate your performance and fashion game with Adidas' iconic products. Step into a world of unparalleled quality, innovation, and timeless style. Experience the perfect blend of comfort and performance that defines the Adidas brand.</p>
      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 sm:gap-4 gap-14 '>
        {products.map((product) => (
          <PopularProductsCard key={product.name} {...product}/>
        ))}
      </div>

    </section>
  )
}

export default PopularProducts