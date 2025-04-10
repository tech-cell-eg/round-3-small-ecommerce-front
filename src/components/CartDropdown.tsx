import { useAppDispatch, useAppSelector } from "../redux/reduxHooks";
import { Product } from "../types/product";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import { showToast } from "../redux/slices/toastSlice";

export const CartDropdown = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  function handleClearCart() {
    dispatch(clearCart());
    dispatch(
      showToast({
        severity: "secondary",
        summary: "Success",
        detail: "Cart cleared",
      })
    );
  }

  if (cart.length === 0) {
    return (
      <div className="inline-block p-4 bg-white rounded-lg shadow-lg shadow-gray-400 max-h-96 overflow-y-auto whitespace-nowrap">
        <div className="flex flex-col gap-4 shrink-0">
          <p className="text-center">Cart is empty, please add some products</p>
        </div>
      </div>
    );
  }

  return (
    <div className="inline-block p-4 bg-white rounded-lg shadow-lg shadow-gray-400 max-h-96 overflow-y-auto">
      <div className="flex flex-col gap-4 shrink-0">
        <button
          onClick={handleClearCart}
          className="self-end text-custom-grey-10 bg-custom-white-97 px-4 py-3 rounded-4xl"
        >
          Clear Cart
        </button>
        {cart.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
      </div>
      <div className="flex justify-between items-center p-4 border-t border-gray-200">
        <span className="font-medium text-custom-grey-10">Total:</span>
        <span className="font-medium text-custom-grey-20">
          ${totalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

type Props = {
  product: Product;
};

export const CartCard = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
    dispatch(
      showToast({
        severity: "secondary",
        summary: "Success",
        detail: "Product removed from cart",
      })
    );
  };

  return (
    <div className="flex w-[300px] shrink-0 items-center gap-4 p-3 bg-custom-white-99 rounded-md shadow-sm">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-16 h-16 rounded object-cover"
      />
      <div className="flex flex-col justify-start text-sm">
        <div className="font-medium">{product.title}</div>
        <div className="text-custom-grey-20">${product.price.toFixed(2)}</div>
      </div>
      <button
        onClick={handleRemoveFromCart}
        className="ml-auto text-red-500 hover:text-red-600 hover:font-bold transition-all ease-in-out duration-150"
      >
        Remove
      </button>
    </div>
  );
};
