import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsCarousel } from "../ProductsCarousel";

export const DiscoverFashion = () => {
  const [category, setCategory] = useState("mens-shirts");
  const [activeCategory, setActiveCategory] = useState("furniture");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://dummyjson.com/products/category-list")
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [category]);

  useEffect(() => {
    try {
      axios
        .get(`https://dummyjson.com/products/category/furniture`)
        .then((response) => {
          setProducts(response.data.products);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleCategoryClick(category: string) {
    setCategory(category);
    setActiveCategory(category);
  }

  return (
    <div className="responsive-padding mt-16">
      <div className="flex flex-col">
        <div>
          <p className="small-text">Products</p>
          <h2 className="mt-5">Discover Fashion.</h2>
        </div>
        <div>
          <p className="custom-paragraph mt-3">
            Dive into a world of fashion innovation at Klothink. Our carefully
            curated collections bring together the latest trends and timeless
            classics, ensuring you find the perfect pieces for every occasion.
          </p>
        </div>
        <button className="custom-yellow-button self-start mt-4">
          View All Products
        </button>
      </div>

      {/* category */}
      <div className="flex flex-row-reverse justify-between items-center flex-wrap">
        <ul className="flex gap-5">
          <li>
            <button className="text-custom-grey-60 bg-black py-3 px-4 rounded-4xl">
              Casual
            </button>
          </li>
          <li>
            <button className="text-custom-grey-60 bg-black py-3 px-4 rounded-4xl">
              Formal
            </button>
          </li>
          <li>
            <button className="text-custom-grey-60 bg-black py-3 px-4 rounded-4xl">
              Party
            </button>
          </li>
        </ul>

        <ul
          className="mt-8 flex gap-5 py-5 overflow-x-scroll whitespace-nowrap max-w-[600px]"
          style={{ msOverflowStyle: "none", scrollbarColor: "black" }}
        >
          {categories?.map((category) => (
            <li key={category}>
              <button
                className={`text-[16px] font-semibold  whitespace-nowrap ${category === activeCategory ? "text-black" : "text-custom-grey-60"} hover:text-black transition duration-300 ease-in-out hover:cursor-pointer`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Products Carousel */}

      <ProductsCarousel products={products} />
    </div>
  );
};
