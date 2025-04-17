import { Carousel } from "primereact/carousel";
import Emily from "../../assets/Images/CommentsImages/Emily.png";
import Sarah from "../../assets/Images/CommentsImages/Sarah.png";
import Rajesh from "../../assets/Images/CommentsImages/Rajesh.png";
import { ReviewCard } from "../ReviewCard";
import { StaticComment } from "../../types/comment";

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

const Reviews = () => {
  const ReviewCardTemplate = (comment: StaticComment) => {
    return <ReviewCard dummyComment={comment} />;
  };

  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold mb-4">REVIEWS</h2>
      <p className="text-sm text-gray-500 mb-8">
        At Klothink, our customers are the heartbeat of our brand. Explore the
        heartfelt testimonials shared by those who have experienced
      </p>

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

export default Reviews;
