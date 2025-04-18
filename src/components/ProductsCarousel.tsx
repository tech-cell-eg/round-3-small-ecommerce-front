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

  const handleScrollLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const handleScrollRight = (e: React.MouseEvent) => {
    e.stopPropagation();
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
        className={`absolute left-10 lg:-left-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:cursor-pointer transition-opacity ${
          scrollableLeft ? "opacity-100" : "opacity-25"
        } z-10`}
        onClick={(e) => handleScrollLeft(e)}
      >
        ←
      </button>

      <button
        className={`absolute right-10 lg:-right-12 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:cursor-pointer transition-opacity ${
          scrollableRight ? "opacity-100" : "opacity-25"
        } z-10`}
        onClick={(e) => handleScrollRight(e)}
      >
        →
      </button>

      <div
        ref={scrollRef}
        className="flex gap-5 py-5 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide z-0"
      >
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
