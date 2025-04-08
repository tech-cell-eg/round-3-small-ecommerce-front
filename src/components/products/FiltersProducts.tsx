import { useState } from "react";
import { ProductsPrimeCarousel } from "./ProductsPrimeCarousel";

const filters2: {
  categoryTitle: string;
  secondaryCategories: string[];
}[] = [
  {
    categoryTitle: "All",
    secondaryCategories: ["mens-shirts", "womens-watches", "motorcycle"],
  },
  {
    categoryTitle: "mens-shirts",
    secondaryCategories: ["mens-shirts", "mens-shoes", "mens-watches"],
  },
  {
    categoryTitle: "women's wear",
    secondaryCategories: [
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
    ],
  },
  {
    categoryTitle: "kid's wear",
    secondaryCategories: [
      "motorcycle",
      "skin-care",
      "smartphones",
      "sports-accessories",
    ],
  },
];

export const FiltersProducts = () => {
  const [activeFilter, setActiveFilter] = useState(filters2[0].categoryTitle);
  const [activeSecondaryFilter, setActiveSecondaryFilter] = useState<string[]>(
    filters2[0].secondaryCategories
  );

  function handleFilter(filterTitle: string) {
    setActiveFilter(filterTitle);
    setActiveSecondaryFilter(
      filters2.find((f) => f.categoryTitle === filterTitle)
        ?.secondaryCategories || []
    );
    console.log(activeSecondaryFilter);
  }

  return (
    <div className="responsive-padding">
      <div className="w-full flex justify-center mt-10">
        <div
          className="gap-2.5 h-16 flex p-2.5 whitespace-nowrap overflow-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {filters2.map((filter) => (
            <button
              key={filter.categoryTitle}
              className={`py-3 px-4 bg-custom-white-97 border border-custom-white-95 rounded-[32px] flex justify-center items-center hover:cursor-pointer hover:bg-custom-white-95 ${
                activeFilter === filter.categoryTitle
                  ? "bg-custom-yellow-50"
                  : ""
              } transition duration-300 ease-in-out`}
              onClick={() => handleFilter(filter.categoryTitle)}
            >
              {filter.categoryTitle.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* test */}
      {activeSecondaryFilter.map((filter) => (
        <ProductsPrimeCarousel
          secondaryCategory={filter}
          title={`${filter} Collection`}
          paragraph={`Discover our versatile ${filter} collection, where comfort meets contemporary fashion.`}
          key={filter}
        />
      ))}
    </div>
  );
};
