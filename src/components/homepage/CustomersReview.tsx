import { StaticComment } from "../../types/comment";
import { ReviewCard } from "../ReviewCard";
import { Carousel } from "primereact/carousel";
import Emily from "../../assets/Images/CommentsImages/Emily.png";
import Sarah from "../../assets/Images/CommentsImages/Sarah.png";
import Rajesh from "../../assets/Images/CommentsImages/Rajesh.png";

const dummyComments: StaticComment[] = [
  {
    name: "Emily Walker",
    comment:
      "Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.",
    rating: 5,
    image: Emily,
  },
  {
    name: "Sarah Thompson",
    comment:
      "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
    rating: 3,
    image: Sarah,
  },
  {
    name: "Rajesh Patel",
    comment:
      "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
    rating: 4,
    image: Rajesh,
  },
];

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
  const ReviewCardTemplate = (comment: StaticComment) => {
    return <ReviewCard dummyComment={comment} />;
  };

  return (
    <div className="responsive-padding mt-16">
      <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between">
        <div className="flex flex-col w-full lg:w-[70%]">
          <div>
            <p className="small-text">TESTIMNOIALS</p>
            <h2>CUSTOMERS LOVE.</h2>
          </div>
          <div>
            <p className="custom-paragraph">
              At Klothink, our customers are the heartbeat of our brand. Explore
              the heartfelt testimonials shared by those who have experienced
              the magic of Klothink fashion.
            </p>
          </div>
        </div>
        <button className="custom-yellow-button self-start mt-4">
          View All Testimonials
        </button>
      </div>

      {/* review carousel */}
      <div className="mt-12 bg-custom-white-97 rounded-2xl p-5">
        <Carousel
          value={dummyComments}
          itemTemplate={ReviewCardTemplate}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={2500}
          showNavigators={false}
        />
      </div>
    </div>
  );
};
