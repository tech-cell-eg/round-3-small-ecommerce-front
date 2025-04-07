import { ReviewCard } from "../ReviewCard";
import { Carousel } from "primereact/carousel";

const loopArr = [1, 2, 3, 4, 5];

const responsiveOptions = [
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
    navigator: true,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
    navigator: true,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
    navigator: true,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
];

export const CustomersReview = () => {
  return (
    <div className="responsive-padding mt-16">
      <div className="flex flex-col">
        <div>
          <p className="small-text">TESTIMNOIALS</p>
          <h2 className="mt-5">CUSTOMERS LOVE.</h2>
        </div>
        <div>
          <p className="custom-paragraph mt-3">
            At Klothink, our customers are the heartbeat of our brand. Explore
            the heartfelt testimonials shared by those who have experienced the
            magic of Klothink fashion.
          </p>
        </div>
        <button className="custom-yellow-button self-start mt-4">
          View All Testimonials
        </button>
      </div>

      {/* review carousel */}
      <div className="mt-12 bg-custom-white-97 rounded-2xl p-5">
        <Carousel
          value={loopArr}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={2500}
          itemTemplate={ReviewCard}
          showNavigators={false}
        />
      </div>
    </div>
  );
};
