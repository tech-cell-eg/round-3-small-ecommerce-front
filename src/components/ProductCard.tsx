import { Link } from "react-router-dom";
import ShoppingCart from "../assets/icons/shopping-cart.svg";

type Props = {
  id: number;
  images: string[];
  title: string;
  price: number;
};

export const ProductCard = (props: Props) => {
  return (
    <Link to={`/product/${props.id}`}>
      <div className="relative min-w-[300px] h-[363px] rounded-2xl bg-[#F7F7F8] mx-2">
        <img src={props.images[0]} alt="" className="w-full h-full" />
        <div className="size-[50px] absolute bottom-0 right-0 bg-custom-yellow-50 rounded-full flex items-center justify-center">
          <img src={ShoppingCart} alt="" />
        </div>
      </div>
      <p className="text-[16px] leading-[150%]">{props.title}</p>
      <p className="font-normal text-custom-grey-30">{props.price}$</p>
    </Link>
  );
};
