import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"


const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <br />
          <span className="text-coral-red">🔥Special🔥</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Step up your style game with our exclusive Adidas Special Offer! For a limited time only, enjoy an extra ✨50% off on select Adidas products. Whether you're in need of top-notch sneakers, stylish activewear, or premium accessories, now is the perfect time to gear up.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Don't miss out on this fantastic opportunity to elevate your wardrobe with Adidas quality and style. Hurry, this offer won't last forever! Click below to start shopping and upgrade your Adidas game today.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now 👟" iconURL={arrowRight} />
          <Button label="More Details" backgroundColor="bg-white" borderColor="border-slate-gray" textColor='text-slate-gray'/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer