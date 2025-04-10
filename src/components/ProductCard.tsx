import { Link } from "react-router-dom";
import ShoppingCart from "../assets/icons/shopping-cart.svg";
import { Product } from "../types/product";
import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";
import { showToast } from "../redux/slices/toastSlice";
import { Toast } from "primereact/toast";
import { useRef } from "react";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const toast = useRef<Toast>(null);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  function handleAddToCart(product: Product) {
    if (cart.some((item) => item.id === product.id)) {
      dispatch(removeFromCart(product.id));
      dispatch(
        showToast({
          severity: "secondary",
          summary: "Success",
          detail: "Product removed from cart",
        })
      );
    } else {
      dispatch(addToCart(product));
      dispatch(
        showToast({
          severity: "success",
          summary: "Success",
          detail: "Product added to cart",
        })
      );
    }
  }

  return (
    <div className="relative">
      <Link to={`/product/${product.id}`}>
        <Toast ref={toast} position="top-right" />
        <div className="relative min-w-[300px] h-[363px] rounded-2xl bg-[#F7F7F8] mx-2">
          <img src={product.thumbnail} alt="" className="w-full h-full" />
        </div>
        <p className="text-[16px] leading-[150%]">{product.title}</p>
        <p className="font-normal text-custom-grey-30">${product.price}</p>
      </Link>
      <button
        className="size-[50px] absolute top-[312px] right-0 bg-custom-yellow-50 rounded-full flex items-center justify-center hover:scale-125 hover:cursor-pointer transition-all ease-in-out duration-150 z-10"
        onClick={() => handleAddToCart(product)}
      >
        <img src={ShoppingCart} alt="" />
      </button>
    </div>
  );
};
