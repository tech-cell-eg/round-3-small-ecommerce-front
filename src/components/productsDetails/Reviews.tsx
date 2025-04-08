import { Star } from "lucide-react";

const reviewsData = [
  {
    id: 1,
    name: "Alex M",
    rating: 5,
    comment:
      "Love how true the denim washes in different ways. The pockets and the reinforced stitching gives it durability and style. It's been my go-to jacket all spring long.",
  },
  {
    id: 2,
    name: "Emily S",
    rating: 5,
    comment:
      "Great quality with wonderful stylish details. The buttons are sturdy, and the actual feels well made. I would buy this product even if I had other options.",
  },
  {
    id: 3,
    name: "Chris B",
    rating: 5,
    comment:
      "I ordered two sizes and was surprised by their perfect fit. The denim is of excellent quality, and the fit is just right. It's become my favorite jacket for everyday wear.",
  },
];

const Reviews = () => {
  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold mb-4">REVIEWS</h2>
      <p className="text-sm text-gray-500 mb-8">
        At Klothink, our customers are the heartbeat of our brand. Explore the
        heartfelt testimonials shared by those who have experienced
      </p>

      <div className="relative border border-gray-100 bg-[#FCFCFD] rounded-2xl pt-4 px-6">
        <div className="flex gap-6 overflow-x-auto pb-4">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="min-w-[300px]  p-8 rounded-md  border border-gray-200 shadow-md"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  {review.name.split(" ")[0][0]}
                </div>
                <div>
                  <p className="font-medium">{review.name}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-300 stroke-yellow-300 px-0.5"
                        fill={i < review.rating ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
        <button className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
          <span className="sr-only">Previous</span>
          &larr;
        </button>
        <button className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-gray-500 rounded-full shadow flex items-center justify-center">
          <span className="sr-only">Next</span>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
