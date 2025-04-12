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
// type Props = {
//   reviews: Product["reviews"];
// };

const Reviews = () => {
  //   const containerRef = useRef<HTMLDivElement>(null);

  //   const scrollLeft = () => {
  //     if (containerRef.current) {
  //       containerRef.current.scrollLeft -= 320;
  //     }
  //   };

  //   const scrollRight = () => {
  //     if (containerRef.current) {
  //       containerRef.current.scrollLeft += 320;
  //     }
  //   };
  const ReviewCardTemplate = (comment: StaticComment) => {
    return <ReviewCard dummyComment={comment} />;
  };

  return (
    // <div className="py-8">
    //   <h2 className="text-xl font-semibold mb-4">REVIEWS</h2>
    //   <p className="text-sm text-gray-500 mb-8">
    //     At Klothink, our customers are the heartbeat of our brand. Explore the
    //     heartfelt testimonials shared by those who have experienced
    //   </p>

    //   <div className="lg:w-5xl lg:mx-15 relative border   border-gray-100 bg-[#FCFCFD] rounded-2xl pt-4 px-6">
    //     <div ref={containerRef} className="flex gap-6 overflow-x-auto pb-4 ">
    //       {reviews.map((review) => (
    //         <div
    //           key={review.reviewerEmail}
    //           className="min-w-[300px]  p-8 rounded-md  border border-gray-200 shadow-md"
    //         >
    //           <div className="flex items-center gap-2 mb-3">
    //             <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
    //               {review.reviewerName.split(" ")[0][0]}
    //             </div>
    //             <div>
    //               <p className="font-medium">{review.reviewerName}</p>
    //               <div className="flex">
    //                 {[...Array(5)].map((_, i) => (
    //                   <Star
    //                     key={i}
    //                     fill={i < review.rating ? "yellow" : "none"}
    //                     stroke={i < review.rating ? "yellow" : "grey"}
    //                     strokeWidth={1}
    //                     className="border-0"
    //                   />
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //           <p className="text-sm text-gray-700">{review.comment}</p>
    //         </div>
    //       ))}
    //     </div>
    //     <button
    //       onClick={scrollLeft}
    //       className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center"
    //     >
    //       <span className="sr-only">Previous</span>
    //       &larr;
    //     </button>
    //     <button
    //       onClick={scrollRight}
    //       className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-gray-500 rounded-full shadow flex items-center justify-center"
    //     >
    //       <span className="sr-only">Next</span>
    //       &rarr;
    //     </button>
    //   </div>
    // </div>

    // <div className="py-8">
    //   <h2 className="text-xl font-semibold mb-4">REVIEWS</h2>
    //   <p className="text-sm text-gray-500 mb-8">
    //     At Klothink, our customers are the heartbeat of our brand. Explore the
    //     heartfelt testimonials shared by those who have experienced
    //   </p>

    <div className="py-8">
      <h2 className="text-xl font-semibold mb-4">REVIEWS</h2>
      <p className="text-sm text-gray-500 mb-8">
        At Klothink, our customers are the heartbeat of our brand. Explore the
        heartfelt testimonials shared by those who have experienced
      </p>

      {/* review carousel */}
      <div className=" relative border   border-gray-100 bg-[#FCFCFD] rounded-2xl pt-4 px-6">
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
        {/* </div> */}
      </div>
    </div>
  );
};

export default Reviews;

// import { Carousel } from "primereact/carousel";
// import Emily from "../../assets/Images/CommentsImages/Emily.png";
// import Sarah from "../../assets/Images/CommentsImages/Sarah.png";
// import Rajesh from "../../assets/Images/CommentsImages/Rajesh.png";
// import { ReviewCard } from "../ReviewCard";
// import { StaticComment } from "../../types/comment";

// const dummyComments: StaticComment[] = [
//   {
//     name: "Emily Walker",
//     comment:
//       "Adorable and comfortable! My daughter loves her new outfit. Thank you, Klothink, for dressing our little fashionista.",
//     rating: 5,
//     image: Emily,
//   },
//   {
//     name: "Sarah Thompson",
//     comment:
//       "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
//     rating: 3,
//     image: Sarah,
//   },
//   {
//     name: "Rajesh Patel",
//     comment:
//       "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
//     rating: 4,
//     image: Rajesh,
//   },
// ];

// const responsiveOptions = [
//   {
//     breakpoint: "1400px",
//     numVisible: 2,
//     numScroll: 1,
//     navigator: true,
//   },
//   {
//     breakpoint: "1199px",
//     numVisible: 3,
//     numScroll: 1,
//     navigator: true,
//   },
//   {
//     breakpoint: "767px",
//     numVisible: 2,
//     numScroll: 1,
//     navigator: true,
//   },
//   {
//     breakpoint: "575px",
//     numVisible: 1,
//     numScroll: 1,
//   },
// ];

// export const Reviews = () => {
//   const ReviewCardTemplate = (comment: StaticComment) => {
//     return <ReviewCard dummyComment={comment} />;
//   };

//   return (
//     <div className="responsive-padding mt-16">
//       <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between">
//         <div className="flex flex-col w-full lg:w-[70%]">
//           <div>
//             <p className="small-text">TESTIMNOIALS</p>
//             <h2>CUSTOMERS LOVE.</h2>
//           </div>
//           <div>
//             <p className="custom-paragraph">
//               At Klothink, our customers are the heartbeat of our brand. Explore
//               the heartfelt testimonials shared by those who have experienced
//               the magic of Klothink fashion.
//             </p>
//           </div>
//         </div>
//         <button className="custom-yellow-button self-start mt-4">
//           View All Testimonials
//         </button>
//       </div>

//       {/* review carousel */}
//       <div className="mt-12 bg-custom-white-97 rounded-2xl p-5">
//         <Carousel
//           value={dummyComments}
//           itemTemplate={ReviewCardTemplate}
//           numVisible={3}
//           numScroll={1}
//           responsiveOptions={responsiveOptions}
//           className="custom-carousel"
//           circular
//           autoplayInterval={2500}
//           showNavigators={false}
//         />
//       </div>
//     </div>
//   );
// };
