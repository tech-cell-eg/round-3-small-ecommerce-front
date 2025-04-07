import ShoppingCart from "../assets/icons/shopping-cart.svg";

type Props = {
  img: string;
  name: string;
  price: number;
};

export const ProductCard = (props: Props) => {
  return (
    <div>
      <div className="relative w-[353px] h-[363px] rounded-2xl bg-custom-white-95">
        <img src={props.img} alt="" className="w-full h-full" />
        <div className="size-[50px] absolute bottom-0 right-0 bg-custom-yellow-50 rounded-full flex items-center justify-center">
          <img src={ShoppingCart} alt="" />
        </div>
      </div>
      <p className="text-[16px] leading-[150%]">{props.name}</p>
      <p className="font-normal text-custom-grey-30">{props.price}</p>
    </div>
  );
};
