import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Images/ProductsImage/Image .png";
import img1 from "../../assets/Images/ProductsImage/image 1.png";
import img2 from "../../assets/Images/ProductsImage/image 2.png";
import img3 from "../../assets/Images/ProductsImage/image 3.png";
import ColorSelector from "../productsDetails/ColorSelector";
import SizeSelector from "../productsDetails/SizeSelector";

// Mock product data
const productData = {
  id: 1,
  price: 69.99,
  colors: [
    { name: "BlueSkyish", value: "#739CDA" },
    { name: "Khaki", value: "#DAA573" },
    { name: "Olive", value: "#DAD673" },
  ],
  sizes: ["S", "M", "L", "XL"],
};

export const HeroImage = () => {
  const [selectedColor, setSelectedColor] = useState(
    productData.colors[0].name
  );
  const [selectedColorValue, setSelectedColorValue] = useState("white");
  const [selectedSize, setSelectedSize] = useState(productData.sizes[1]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const productImages = [img, img1, img2, img3];

  function handleNextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
  }

  function handlePrevImage() {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + productImages.length) % productImages.length
    );
  }

  return (
    <div
      style={{ backgroundColor: selectedColorValue }}
      className="relative lg:min-w-[544px]"
    >
      <img src={productImages[currentImageIndex]} alt="" />
      <div className="flex  absolute bottom-5 w-full items-center justify-between flex-wrap px-4 gap-4 md:gap-0">
        {/* Color selector */}
        <div className="px-4 h-12 bg-white rounded-[100px] flex items-center gap-0.5 border border-gray-200 order-2 md:order-1 ">
          <p className="text-[14px]">Color</p>
          <ColorSelector
            colors={productData.colors}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
            onSelectValue={setSelectedColorValue}
          />
        </div>
        <div className="px-4 h-12 bg-white rounded-[100px] flex items-center gap-1.5 border border-gray-200 order-1 md:order-2 lg:order-2 w-full md:max-w-[42%] justify-center">
          <p className="text-[14px]">Sizes</p>
          <SizeSelector
            sizes={productData.sizes}
            selectedSize={selectedSize}
            onSelectSize={setSelectedSize}
          />
        </div>
        <Link
          to={`/products`}
          className="px-4 h-12 bg-white rounded-[100px] flex items-center gap-2.5 border border-gray-200 hover:bg-gray-100 hover:cursor-pointer transition-all ease-in-out duration-150 order-3 whitespace-nowrap text-[14px]"
        >
          View Similar <ArrowRight />
        </Link>
      </div>
      <div className="flex justify-between items-center absolute top-4 right-5 gap-2.5">
        <button
          className="size-9 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100 hover:cursor-pointer"
          onClick={handlePrevImage}
        >
          <ArrowLeft />
        </button>
        <button
          className="size-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 hover:cursor-pointer"
          onClick={handleNextImage}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
