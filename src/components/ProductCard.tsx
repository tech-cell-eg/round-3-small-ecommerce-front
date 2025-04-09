import { Link } from "react-router-dom";
import ShoppingCart from "../assets/icons/shopping-cart.svg";
import { Product } from "../types/product";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="relative min-w-[300px] h-[363px] rounded-2xl bg-[#F7F7F8] mx-2">
        <img src={product.thumbnail} alt="" className="w-full h-full" />
        <div className="size-[50px] absolute bottom-0 right-0 bg-custom-yellow-50 rounded-full flex items-center justify-center">
          <img src={ShoppingCart} alt="" />
        </div>
      </div>
      <p className="text-[16px] leading-[150%]">{product.title}</p>
      <p className="font-normal text-custom-grey-30">{product.price}$</p>
    </Link>
  );
};
