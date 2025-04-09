import { useEffect, useRef, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "../types/product";

type Props = {
  products: Product[];
};

export const ProductsCarousel = ({ products }: Props) => {
  const [scrollableRight, setScrollableRight] = useState(false);
  const [scrollableLeft, setScrollableLeft] = useState(false);
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

  const checkScrollable = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollableLeft(scrollLeft > 0);
      setScrollableRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;

    checkScrollable();
    scrollEl?.addEventListener("scroll", checkScrollable);
    window.addEventListener("resize", checkScrollable);

    // Cleanup
    return () => {
      scrollEl?.removeEventListener("scroll", checkScrollable);
      window.removeEventListener("resize", checkScrollable);
    };
  }, []);

  return (
    <div className="relative mt-8">
      <button
        className={`absolute left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-black text-black rounded-full flex items-center justify-center hover:cursor-pointer transition-opacity ${
          scrollableLeft
            ? "opacity-75"
            : "opacity-25 pointer-events-none  border-0"
        }`}
        onClick={handleScrollLeft}
      >
        ←
      </button>

      <button
        className={`absolute right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:cursor-pointer transition-opacity ${
          scrollableRight ? "opacity-100" : "opacity-25 pointer-events-none"
        }`}
        onClick={handleScrollRight}
      >
        →
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5 py-5 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
