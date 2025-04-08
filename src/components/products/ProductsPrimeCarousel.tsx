import { Carousel } from "primereact/carousel";
import { ProductCard } from "../ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

type Props = {
  title: string;
  paragraph: string;
  secondaryCategory: string;
};
const responsiveOptions = [
  {
    breakpoint: "1920px",
    numVisible: 4,
    numScroll: 1,
  },
  {
    breakpoint: "1400px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 2,
    numScroll: 2,
  },
];

export const ProductsPrimeCarousel = ({
  secondaryCategory,
  title,
  paragraph,
}: Props) => {
  const isSmallScreen = window.innerWidth < 768;
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchByCategory() {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${secondaryCategory}`
        );
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    }

    fetchByCategory();
  }, [secondaryCategory]);

  return (
    <div className="mt-14">
      <h3 className="text-[18px] font-semibold md:text-[24px] text-custom-grey-20">
        {title}
      </h3>
      <p className="text-[16px] text-custom-grey-40 mb-7 mt-1">{paragraph}</p>

      {/* Carousel */}
      <Carousel
        value={filteredProducts}
        itemTemplate={ProductCard}
        orientation={isSmallScreen ? "vertical" : "horizontal"}
        responsiveOptions={responsiveOptions}
        verticalViewPortHeight="850px"
        autoplayInterval={3000}
        circular
        showIndicators={!isSmallScreen}
        indicatorsContentClassName="hidden"
        numVisible={4}
        numScroll={1}
      />
    </div>
  );
};
