import Button from "../components/Button";
import shoe8 from "../assets/images/shoe8.svg";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red">Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Elevate your style and performance with Adidas' exceptional line of
          premium quality products. Discover a world of unparalleled
          craftsmanship, innovation, and timeless design. Experience the perfect
          fusion of comfort and performance that defines the Adidas brand's
          commitment to excellence.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          We are committed to delivering excellence in every detail, ensuring
          your utmost satisfaction.
        </p>

        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe name "
          width={517}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
