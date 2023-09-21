import {reviews} from '../constants'
import ReviewsCards from '../components/ReviewsCards'
const CustomerReviews = () => {
  return (
    <section>
      <div className="max-container">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our <span className="text-coral-red"> Customers</span> Say About Us?
        </h3>
        <p className="info-text m-auto my-4 text-center">At Adidas, we take immense pride in delivering quality products and exceptional experiences to our valued customers. Our commitment to excellence extends beyond our innovative sportswear; it's also reflected in the trust and satisfaction of our customers. Here's what some of them have to say:</p>
        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review) => (
            <ReviewsCards key={review.id} imgURL={review.imgURL} customerName={review.customerName}
            rating={review.rating} feedback={review.feedback}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
