import { useEffect, useState } from "react";
import axios from "axios";
import { ProductsCarousel } from "../ProductsCarousel";
import { Link } from "react-router-dom";

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
    <div className="responsive-padding mt-20 xl:mt-[150px]">
      <div className="flex flex-col lg:flex-row lg:items-center items-start justify-between">
        <div className="flex flex-col w-full lg:w-[70%]">
          <div>
            <p className="small-text">Products</p>
            <h2>Discover Fashion.</h2>
          </div>
          <div>
            <p className="custom-paragraph mt-3 ">
              Dive into a world of fashion innovation at Klothink. Our carefully
              curated collections bring together the latest trends and timeless
              classics, ensuring you find the perfect pieces for every occasion.
            </p>
          </div>
        </div>
        <Link to="/products" className="custom-yellow-button mt-4">
          View All Products
        </Link>
      </div>

      {/* category */}
      <div className="flex flex-row justify-between items-center flex-wrap">
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
