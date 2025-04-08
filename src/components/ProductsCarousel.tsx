import { useRef } from "react";
import { ProductCard } from "./ProductCard";

type Props = {
  products: {
    id: number;
    images: string[];
    title: string;
    price: number;
  }[];
};

export const ProductsCarousel = ({ products }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="relative mt-8">
      <button
        className="absolute left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-black text-black rounded-full flex items-center justify-center hover:cursor-pointer"
        onClick={handleScrollLeft}
      >
        ←
      </button>

      <button
        className="absolute right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:cursor-pointer"
        onClick={handleScrollRight}
      >
        →
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5 py-5 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            img={product.images[0]}
            name={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};
