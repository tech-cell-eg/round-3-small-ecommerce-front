import { QuoteIcon, Star } from "lucide-react";
import { StaticComment } from "../types/comment";

type Props = {
  dummyComment: StaticComment;
};

export const ReviewCard = ({ dummyComment }: Props) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          fill={i < rating ? "yellow" : "none"}
          stroke={i < rating ? "yellow" : "grey"}
          strokeWidth={1}
          className="border-0"
        />
      );
    }
    return stars;
  };

  return (
    <div className="bg-custom-white-99 rounded-2xl p-5">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="size-[50px] bg-custom-yellow-50 rounded-full">
            <img src={dummyComment.image} alt="" />
          </div>
          <div>
            <p className="text-[16px] text-custom-grey-15">
              {dummyComment.name}
            </p>
            <div className="flex">{renderStars(dummyComment.rating)}</div>
          </div>
        </div>
        <div>
          <QuoteIcon
            size={24}
            color="#ffd400"
            fill="#ffd400"
            className="rotate-180"
          />
        </div>
      </div>
      <p className="font-normal text-custom-grey-30 mt-4">
        {dummyComment.comment}
      </p>
    </div>
  );
};
